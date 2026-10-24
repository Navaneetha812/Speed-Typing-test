let div = document.getElementById("div");
div.style.backgroundColor="#c4b2dd"; 
div.style.borderRadius="25px";

let h = document.getElementById("h1");
h.style.color="#690cb0";
h.style.fontWeight="bold";
h.style.fontSize="40px";

let p = document.getElementById("para");
p.style.color="#3e4c59";
p.style.fontSize="20px";

let t = document.getElementById("timer");
t.style.fontSize="35px";

let s = document.getElementById("sent");
let para = [
    "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",

    "JavaScript is a programming language used to create interactive websites.",

    "Practice every day to improve your typing speed and accuracy.",

    "Success comes from hard work, patience, and continuous learning.",

    "HTML creates the structure of a webpage and CSS makes it beautiful."
];
s.style.backgroundColor = "#ffffff";
s.style.padding = "20px";
s.style.fontSize = "20px";
s.style.lineHeight = "50px";
s.style.borderRadius = "10px";
function changePara() {
    let randomIndex = Math.floor(Math.random() * para.length);
    s.innerText = para[randomIndex];
}
changePara();

let i = document.getElementById("input");
i.style.width = "100%";
i.style.height = "130px";
i.style.padding = "10px";
i.style.fontSize = "16px";
i.style.boxSizing = "border-box";
i.style.border = "1px solid gray";
i.style.borderRadius = "5px";
i.style.marginTop = "15px";

let btn = document.getElementsByClassName("btn");
for (let i = 0; i < btn.length; i++) {
    btn[i].style.backgroundColor = "#690cb0";
    btn[i].style.color = "white";
    btn[i].style.border = "none";
    btn[i].style.padding = "10px 30px";
    btn[i].style.margin = "5px";
    btn[i].style.borderRadius = "5px";
    btn[i].style.fontWeight="bold";
    btn[i].style.fontSize = "15px";
}

let stbtn = document.getElementById("start");
let sbbtn = document.getElementById("submit");
let rebtn = document.getElementById("restart");
let ti = document.getElementById("timers");
let msg = document.getElementById("message");
let input = document.getElementById("input");

let sec = 0;
let interval;
let running = false;

stbtn.addEventListener("click", function(){
    if(running == false){
        running = true;

        interval = setInterval(function(){
            sec++;
            ti.innerText = sec;
        },1000);
    }

});

sbbtn.addEventListener("click", function() {
    if (running == true) {
        clearInterval(interval);
        running = false;

        if (input.value.trim() == s.innerText.trim()) {
            msg.innerText = "The time taken is " + sec + " sec.";
            msg.style.color = "green";
        }
        else {
            msg.innerText = "Please check the errors!";
            msg.style.color = "red";
        }

        msg.style.fontSize = "20px";
    }
});

rebtn.addEventListener("click", function() {
    clearInterval(interval);
    sec = 0;
    ti.innerText = sec;
    running = false;
    input.value="";
    msg.innerText="";
    changePara();
});