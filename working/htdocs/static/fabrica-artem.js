$(document).ready(function() {
    $("#artem--upload-modal").click(function() {
        $.FileDialog({
            title: "Select image to upload",
            drag_message: "Drop image file your here",
            dropheight: 250,
            cancel_button: "Cancel",
            multiple: false
        }).on("files.bs.filedialog", function(ev) {
            var files = ev.files;
            var text = "";
            files.forEach(function(f) {
                // make AJAX call to Flask endpoint POST to upload image
                text += f.name + "<br/>";
            });
        }).on("cancel.bs.filedialog", function() {
            $("#output").html("Cancelled!");
        });
    });
});