const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const paras = document.querySelector("#paragraphs");
const nav = document.querySelectorAll("a");


// console.log(nav);

function initBindings(){
    h1.addEventListener("click", changeColour);
    h1.addEventListener("mouseleave", changeColour);

    h2.addEventListener("mouseover", changeText);

    document.addEventListener("keydown", addParagraph)

    for(let link of nav) {
        // console.log(link.textContent)
        link.addEventListener("click", highlightSection)
    }

    
}

initBindings();

function highlightSection(e) {
    
    const targetPara = paras.getElementsByClassName(e.target.className)[0];
    const weight = targetPara.style.fontWeight;
    targetPara.style.fontWeight = weight === "bold" ? "normal": "bold";
}

function changeColour() {
    const body = document.getElementsByTagName("body")[0];
    let colour = body.style.backgroundColor;

    body.style.backgroundColor = (colour === "white") ? "pink" : "white";
}

function changeText() {
    let greeting = "Hi this is our website!"
    h2.textContent = greeting;
}

function addParagraph(e) {
    const newPara = document.createElement("p");
    newPara.textContent = e.key;
    paras.append(newPara);
    return newPara;
}

