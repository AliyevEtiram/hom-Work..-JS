let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = " #2C2C2C";


let img = document.createElement("img");
document.body.appendChild(img)
img.src = "./assets/Group_725.png";
img.width = 340
img.height = 185

let h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.textContent = "- TO-DO NOW -"
h1.setAttribute("style", "font-size: 64px");
h1.style.fontFamily = "montserrat"
h1.style.color = "#FFFFFF"

let hr = document.createElement("hr");
document.body.appendChild(hr)
hr.classList.add("line")
hr.width = 240

let icon = document.createElement("img")
icon.src = "./assets/NotePencil.svg"
document.body.appendChild(icon)




let hrs = document.createElement("hr");
document.body.appendChild(hrs)
hrs.classList.add("line")
hrs.width = 240




// +?
let divElement = document.createElement("div");
divElement.classList.add("input");
// divElement.style.backgroundColor = "red"
// divElement.style. width = "1000px"
// divElement.style. height = "1000px"
divElement.style.position = "relative"
divElement.style.display = "flex"
divElement.style.alignItems = "center"
divElement.style.justifyContent = "center"
divElement.style.margin = "50px"


document.body.appendChild(divElement);


let inputs = document.createElement("input")
divElement.appendChild(inputs)
inputs.style.width = "826.03px"
inputs.style.height = "49.44px"
inputs.style.borderRadius = "20px"
inputs.style.border = "none"
inputs.style.padding = "5px 25px"


let btn = document.createElement("button");
divElement.appendChild(btn);
btn.textContent = "Add task"
btn.style.color = "white"
btn.style.fontSize = "25px"
btn.style.fontFamily = "montserrat"
btn.style.width = "142.69px"
btn.style.height = "60px"
btn.style.backgroundColor = "#4F4F4F"
btn.style.border = "none"
btn.style.borderRadius = "20px"
btn.style.position = "absolute"
btn.style.right = "11%"
btn.style.top = "1"


let linTwo = document.createElement("hr");
document.body.appendChild(linTwo)
linTwo.style.width = "1000px"


let list = document.createElement("ul");
document.body.appendChild(list);

function clickBtn() {
    const text = inputs.value.trim();

    if (text !== "") {
        const li = document.createElement("li");
        li.style.color = "white"
        
        li.textContent = text
        list.appendChild(li)
        

    }

}
btn.addEventListener('click', clickBtn)
console.log(btn)



// // function clickBtn () {
// // const li = document.createElement("li");
// // li.textContent = "Hello world!";
// // inputs.appendChild(li)  
// // }

// // btn.addEventListener('click', clickBtn)xxxxxxx




























