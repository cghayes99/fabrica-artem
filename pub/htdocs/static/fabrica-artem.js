ACTION_UPLOAD_URL_DEV = "http://datalogi.brogard:5050/upload";
ACTION_UPLOAD_URL_PRD = "http://datalogi.brogard:5050/upload";

$(document).ready(function() {
    $("#artem--upload-modal").click(function() {
        $.FileDialog({
            title: "Select image(s) to upload",
            drag_message: "Drop image file(s) your here",
            dropheight: 250,
            cancel_button: "Cancel",
            multiple: true
        }).on("files.bs.filedialog", function(ev) {
            var files = ev.files;

            files.forEach(function(f) {
                var formData = new FormData();
                formData.append('file', f);
                
                // make AJAX call to Flask endpoint POST to upload image
                $.ajax({
                    type: "POST",
                    enctype: "multipart/form-data",
                    url: ACTION_UPLOAD_URL_DEV,
                    data: formData,
                    processData: false,
                    contentType: false,
                    cache: false,
                    timeout: 600000,
                    success: function(data) {
                        console.log("data: "+data);
                        if (data.status === 500) {
                            console.log("Message : ", data.message);
                        } else {
                            console.log("ajax success");
                        }
                    },
                    error: function(e) {
                        console.log("ajax ERROR : ", e);
                    }
                });
            });
            
        }).on("cancel.bs.filedialog", function() {
            console.log("modal closed/cancel");
        });
    });
});