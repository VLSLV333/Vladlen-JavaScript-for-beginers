// window.alert("SAP?")              =             alert("SAP?"), бо віндов це глобальний об*єкт
 
// window.confirm("Are you learning?");

const heading = document.getElementById("hello");

// const heading2 = document.getElementsByTagName("h2");                        старий
// const heading2 = document.getElementsByClassName("head2")[0];               старий


// const heading2 = document.querySelector(".head2");          // querySelector - завжди повертає 1 елемент, причому перший, який попався
// const heading2 = document.querySelector("#sub-hello");

const heading2 = document.querySelector("h2")

// console.dir(heading2);

// const heading3 = heading2.nextElementSibling;

const h2List = document.querySelectorAll("h2");
const heading3 = h2List[1];
// console.log(heading3);


// console.log(heading3)

// heading2.style.color = "red";

// console.log(heading);
// console.dir(heading);
// console.dir(heading);

// setTimeout( () =>{
//     heading.textContent = "Changed using JavaScript!";

//     heading.style.color = "blue";
//     heading.style.textAlign = "center";
//     heading.style.backgroundColor = "yellow"
//     heading.style.padding = "42px"
    
// }, 2000)



setTimeout( () =>{
    addStylesTo(heading, "JavaScript", "purple", "70px");
}, 1500);


setTimeout( () =>{
    addStylesTo(heading2, "I will practise", "orange", "70px");
}, 2500);

const link = heading3.querySelector("a");
link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicked", event.target.getAttribute("href"));
    const url = event.target.getAttribute("href")

    window.location = url;
});

setTimeout( () =>{ 
    addStylesTo(link, "AND I WILL SUCCEED", "yellow", "100px");
}, 3500);



function addStylesTo (node, text, color = "yellow", fontSize = "1rem") {
    node.textContent = text;
    node.style.color = "blue";
    node.style.backgroundColor = color;
    node.style.textAlign = "center";
    node.style.padding = "42px"
    node.style.display = "block"
    //falsy: undefined, null, 0, false;
    if (fontSize){
        node.style.fontSize = fontSize;
    }
}




heading.onclick = () => {
    console.log("click");
};


heading.onclick = () => {
    if (heading.style.color === "blue"){
        heading.style.color = "green"
        heading.style.backgroundColor = "black"
    } else {
        heading.style.color = "blue"
        heading.style.backgroundColor = "purple"
    }
    ;
};


// heading.addEventListener("dblclick", changedColors);
// function changedColors (){
//     this.style.color = "green";
//     this.style.backgroundColor = "black";
// // }