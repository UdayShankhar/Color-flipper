const colors = ["#D16BA5","#5FFBF1","#86A8E7","Tomato", "SlateBlue", "Violet","rgb(198, 138, 255)", "MediumSeaGreen","DodgerBlue","green","red","rgba(133,122,100)","#f15029"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
};

