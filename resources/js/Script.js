document.getElementById('add').onclick = function() {
    var text = document.getElementById("Protein").value;
    var li = "<li>" + text + "</li>"
    document.getElementById("list").appendChild(li);
}