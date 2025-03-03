const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click" , function(){
    let mathColor = Math.random()*360
    let colorCode = Math.floor(mathColor);
    
    let color = `hsl(${colorCode}, 100% , 60%)`
    console.log(color);
    document.body.style.backgroundColor = color;
    
})


const discoverCard = document.getElementById("discover-card");
discoverCard.addEventListener("click",  function(){
    window.location.href ='./Blog.html'
})


let newDate = new Date();
let newYear = newDate.getFullYear();
let month = newDate.getMonth();
let date = newDate.getDate();
let day = newDate.getDay();
console.log(day)
let months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Novem", "Dec"
];
let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

 let thisDate = daysOfWeek[day] + " " + months[month] + " " + date +" "+newYear;
 document.getElementById("date").innerText = thisDate