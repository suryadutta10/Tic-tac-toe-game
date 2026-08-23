let boxes = document.querySelectorAll(".box");

let reset = document.querySelector(".reset");

let newgame = document.querySelector(".new");

let msgcon=document.querySelector('.msgcon')

let msg= document.querySelector('#win')

let turno = true;

let winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("you click");
    if (turno) {
      box.innerText = "o";
      turno = false;
      
    } else {
      box.innerText = "x";
      turno = true;
      box.style.color='black'
    }

    box.disabled = true;
    checkwiner();
  });
});

let disabledbox=()=>{
 for(let box of boxes){
    box.disabled=true;
 }
}
const showwiner=(winer)=>{
msg.innerText=`congratulations the winer is ${winer}`;
msgcon.classList.remove("hide")
disabledbox();
}

let checkwiner = (winer) => {
  for (let pattens of winpatterns) {
    let pog1val = boxes[pattens[0]].innerText;
    let pog2val = boxes[pattens[1]].innerText;
    let pog3val = boxes[pattens[2]].innerText;

    if(pog1val !='' && pog2val !='' && pog3val !='')
    if(pog1val===pog2val && pog2val===pog3val){
        console.log("winer",pog1val)
    showwiner(pog1val)
    }
  }
};

let resetgame=()=>{
turno=true;
enablebox();
msgcon.classList.add("hide")
}

let enablebox=()=>{
 for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    
 }
}
newgame.addEventListener('click',resetgame)
reset.addEventListener('click',resetgame)