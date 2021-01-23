function year() {
    let d = new Date();
    let b = d.getFullYear();
    document.getElementById("currentyear").innerHTML = b;
}