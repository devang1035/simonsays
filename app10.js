let gameseq=[];
let userseq=[];

let btns=["yellow","red","green","purple"];

let started=false;
let level=0;


 //press key to start game function
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started=true;
         
        levelup();
    }
    
});

function gameflash(btn){ //flash color on button
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){ //flash color on click
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){ //level up
    userseq=[];
    level++;
    let h2 = document.querySelector("h2");
    h2.innerText=`Level ${level}`;

    //random btn choose
    let randidx = Math.floor(Math.random()*3);
    let randcolor= btns[randidx];
    let randbtn= document.querySelector(`.${randcolor}`);
   
    
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}
function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        let h2 = document.querySelector("h2");
        h2.innerHTML= `Game Over ! Your Score Was <b>${level}</b> </br> Press Any Key To Restart Game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}
function btnpress(){
    let btn =this;
    userflash(btn);

    usercolor= btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
