const textArea = document.getElementById('editor');
textArea.onkeyup = (key) => {
    document.getElementById("preview").innerHTML = marked.parse(document.getElementById("editor").value);
}
window.onload = () => {
    document.getElementById("preview").innerHTML = marked.parse(document.getElementById("editor").value);
}