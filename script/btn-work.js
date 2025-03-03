
let thisTime = new Date()
let hour = thisTime.getHours();
let minute = thisTime.getMinutes();
let second = thisTime.getSeconds();
let time = " at "+ hour + ":" +  minute+ ":"  +second;
console.log(time)
// Shope btn work
const shopEasBtn = document.getElementById("shop-ease-btn");
let heroCount = parseInt(document.getElementById("hero-count").innerText);
console.log(heroCount)
const activityHistory = document.getElementById("activity-history");

const message = document.getElementById("massage")
let taskNumber = document.getElementById("task-number").innerText;
let newTaskNumber = parseInt(taskNumber)

shopEasBtn.addEventListener("click" , function(){
    newTaskNumber -= 1;
    heroCount += 1;
    console.log(newTaskNumber)
    document.getElementById("hero-count").innerText = heroCount;
    document.getElementById("task-number").innerText = newTaskNumber
    shopEasBtn.disabled = true;
    let newText = document.createElement("p");
    const shopEaseTitle =document.getElementById("shop-ease-title").innerText;
        newText.innerText = "You have complete the task " + shopEaseTitle + time;
        activityHistory.appendChild(newText).classList.add("text-2xl", "bg-gray-100","p-2","rounded-lg");
        alert("You have completed")
    
})
console.log(newTaskNumber)
// card 2

const softPayBtn = document.getElementById("soft-pay-btn");
const softPayTitle = document.getElementById("soft-pay-title").innerText

softPayBtn.addEventListener("click" , function(){
    newTaskNumber -= 1;
    heroCount += 1;
    console.log(newTaskNumber)
    document.getElementById("hero-count").innerText = heroCount;
    document.getElementById("task-number").innerText = newTaskNumber
    softPayBtn.disabled = true;
    let newText = document.createElement("p");
    const shopEaseTitle =document.getElementById("shop-ease-title").innerText;
        newText.innerText = "You have complete the task " + shopEaseTitle + time;
        activityHistory.appendChild(newText).classList.add("text-2xl", "bg-gray-100","p-2","rounded-lg");
        alert("You have completed")
    
})






