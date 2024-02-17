//add a new language in the body

function addLanguage(newLanguage) {
    let li = document.createElement("li");
    li.innerHTML = `${newLanguage}`;
    document.querySelector("ul").appendChild(li);
}

addLanguage("java");
addLanguage("rust");

//-------------------------------------------------------------------------

//optimal appproach
function optimalApproach(newLanguage) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newLanguage));
    document.querySelector(".list").appendChild(li);

}

optimalApproach("C++++");

function editLan() {
    let selectedLanguage = document.querySelector("li:nth-child(2)");
    let newLi = document.createElement("li");
    newLi.innerText = "english";    //newLi.textContent = "mojo";
    selectedLanguage.replaceWith(newLi);
};
editLan();

function removeLan() {
    let selectedLanguage = document.querySelector("li:last-child");
    selectedLanguage.remove();
}
removeLan(); 