//DOM: DOCUMENT OBJ MODEL
// selectors:
// id: getElementById("idname")
// class : getElementByClassName("classname")
// querySelector: document.querySelector("#ele/.class/ele")


//innerHTML----innerText------innerContent

//basic
function basicApproach() {
    let p = document.createElement("p");
    p.innerText = "it is a paragraph";
    document.querySelector("body").appendChild(p);

}
//basicApproach();

