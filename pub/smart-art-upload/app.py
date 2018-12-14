#!/opt/anaconda3/bin/python

## Imports
import os, glob, sqlalchemy, pymysql, pprint
import pandas as pd
import numpy as np

from flask import Flask, request, jsonify
from flask_jsonpify import jsonpify
from werkzeug import secure_filename

## Constants
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

WORKING_FOLDER = "/opt/htdocs/static/working/*/*"
CONTENT_FOLDER = "/opt/htdocs/static/working/content/*"
STYLE_FOLDER   = "/opt/htdocs/static/working/style/*"
RENDER_FOLDER  = "/opt/htdocs/static/working/render/*"

UPLOAD_FOLDER           = "/opt/gunicorn/file-upload/uploads/*"
UPLOAD_FOLDER_TEMP      = "uploads"
UPLOAD_FOLDER_TEMP_PATH = "uploads/*"

## FLASK init
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER_TEMP


## service response
service_response_200 = {"status"  : 200,
                        "message" : "OK"}

service_response_201 = {"status"  : 201,
                        "message" : "CREATED"}

service_response_204 = {"status"  : 204,
                        "message" : "NO CONTENT"}

service_response_500 = {"status"  : 500,
                        "message" : "INTERNAL SERVER ERROR"}


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS    

def image_file_names(filelist):
    images = []
    for filename in filelist:
        img = filename.split('/opt/htdocs')
        images.append(img[1])

    return images

@app.route("/")
def base_root():
    return jsonify(service_response_200)


'''
    /image/files
    @return list of image files
'''
@app.route("/image/files")
def image_files():
    content = glob.glob(CONTENT_FOLDER)
    style   = glob.glob(STYLE_FOLDER)
    render  = glob.glob(RENDER_FOLDER)
    
    content_images = image_file_names(content)
    style_images   = image_file_names(style)
    render_images  = image_file_names(render)

    image_dict = { "content" : content_images,
                   "style"   : style_images,
                   "render"  : render_images }
 
    print(image_dict)
    
    return jsonify(image_dict)


'''
    /upload
    @return service_response
'''
@app.route("/upload", methods=['GET', 'POST'])
def upload_file():
    if request.method == "POST":

        if "file" not in request.files:
            return jsonify(service_response_204)
        
        file = request.files['file']

        if file.filename == '':
            return jsonify(service_response_204)
        
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return jsonify(service_response_201)

    return jsonify(service_response_500)


## Main functionality
if __name__ == "__main__":
    app.run(debug=True)
