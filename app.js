var aichoice = document.getElementById("h2")  
var ai=document.getElementById("ai")            
var ai=document.getElementById("player")       
var ai=document.getElementById("ties")          
var rock = document.getElementById('rock')     
var paper = document.getElementById('paper')    
var scizzor = document.getElementById('scizzor') 
var ties = document.getElementById("ties")      
var ai = document.getElementById("ai")          
var player = document.getElementById("player")  
var playercount = 0;                            //creates player score count
var tiescount = 0;                              //creates ties score count
var aicount = 0;                                //creates ties ai count
var comp;
rps();
window.onload= rps();                           //preloads the rps function as the program opens

function playername(){                          //creates function for displaying name 
    var playerone = document.getElementById("playerone");
    var pname = document.getElementById("pname").value;
    playerone.innerHTML= pname;                      //stores value in playerone id in html
}

function rps (){                                //creates function for 
    var ran=  Math.random();                    //randomizes number between 0 and 1 & saves in ran
    var three = (ran*3)+1;                      //sets the limit of the randomized number b/w 1 & 3
    var round = Math.floor(three);              //rounds off the values to 1-3
    if (round===1){                             //assigns a number to each choice and displays
        aichoice.innerHTML="Rock";
    }
    else if (round===2){
        aichoice.innerHTML="Papers";
        
    }
    else if (round ===3){
        aichoice.innerHTML="Scizzors";
    }

    rock.addEventListener("click", () => {     //checks if the button rock is clicked
        comp="rock";                            //assigns the value of rock to comp
    });
    paper.addEventListener("click", () => {     //checks if the button paper is clicked
        comp="paper";   dsd                         //assigns the value of paper to comp
    });
    scizzor.addEventListener("click", () => {   //checks if the button scizzor is clicked
        comp="scizzor";                         //assigns the value of scizzor to comp
    });
    if ((comp === "rock" && round === 1)        //compares the results for ties
    || (comp === "paper" && round===2) 
    || (comp === "scizzor" && round ===3)){
        tiescount++;                            //increments in the ties counter by 1
        ties.innerHTML=tiescount;
    }
    else if ((comp==="rock" && round===2)       //compares the results for ai wins
    ||(comp==="paper"&&round===3) 
    || (comp==="scizzor" && round===1)){
        aicount++;                              //increments in the ai counter by 1
        ai.innerHTML=aicount;

    }
    else if ((comp==="rock" && round===3)       //compares the results for player wins
    ||(comp==="paper"&&round===1) 
    || (comp==="scizzor" && round===2)){
        playercount++;                          //increments in the player counter by 1
        player.innerHTML=playercount;
    }
}