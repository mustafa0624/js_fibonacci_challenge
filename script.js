
document.querySelector("#button").addEventListener("click", compiler)
function compiler() {
    var val = Number(document.querySelector("#input").value);
    var list = [];
    for (i = -2; i < val; i++) {
        if (i < 0) { list.push(1) }
        else { list.push( list[i] + list[i + 1]) }
    }
    list.unshift(0)
    document.querySelector("#div").innerHTML = list;
}
