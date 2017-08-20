function getFileName() {
    var file = document.getElementById('uploaded-file').value;
    file = file.split("\\")[2];
    document.getElementById('file-name').innerHTML = 'File name: ' + file;
    }