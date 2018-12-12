$(document).ready(function() {
    $("#artem--upload-modal").click(function() {
        $.FileDialog({
            title: "Select image to upload",
            drag_message: "Drop image file your here",
            dropheight: 250,
            cancel_button: "Cancel",
            multiple: true
        }).on("files.bs.filedialog", function(ev) {
            console.log("### modal open; event fired");
            var text = "";
            var files = ev.files;

            files.forEach(function(f) {
                var formData = new FormData();
                formData.append('file', f);
                
                // make AJAX call to Flask endpoint POST to upload image
                $.ajax({
                    type: "POST",
                    enctype: "multipart/form-data",
                    url: "http://datalogi.brogard:5050/upload/alpha",
                    data: formData,
                    processData: false,
                    contentType: false,
                    cache: false,
                    timeout: 600000,
                    success: function(data) {
                        console.log("ajax SUCCESS : ", data);
                        text += f.name + "<br/>";
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