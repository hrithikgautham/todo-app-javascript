// console.dir(document.all);

// console.log(document.doctype)
// console.log(document.head)
// console.log(document.all)
// console.log(document.all[5])
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)

//selectors

// var x  = document.getElementById("items");
// x.innerHTML = "<h3>hello world</h3>";

var submit = document.getElementById("submit");
var inp = document.getElementById("inp");
var ul = document.getElementById("ul");

let handleClick = (event) => {
    let li = event.target.previousElementSibling;
    event.target.parentNode.removeChild(li);
    event.target.parentNode.removeChild(event.target);
}

submit.onclick = (event) => {
    var text = document.createTextNode(inp.value);
    var li = document.createElement("li");
    var btn = document.createElement("input");
    event.target.previousElementSibling.value = "";
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "X");
    btn.setAttribute("class", "btn");
    btn.addEventListener('click', handleClick);
    li.appendChild(text);
    ul.appendChild(li);
    ul.appendChild(btn);
}

var btns =  document.getElementsByClassName("btn");
console.log(btns)
for(let i = 0 ; i < btns.length ; i++){
    btns[i].addEventListener('click', handleClick);
}