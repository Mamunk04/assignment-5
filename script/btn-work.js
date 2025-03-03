
let thisTime = new Date()
let hour = thisTime.getHours();
let minute = thisTime.getMinutes();
let second = thisTime.getSeconds();
let time = " at "+ hour + ":" +  minute+ ":"  +second;
// Shope btn work
const shopEasBtn = document.getElementById("shop-ease-btn");
let heroCount = parseInt(document.getElementById("hero-count").innerText);
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
        activityHistory.appendChild(newText).classList.add("text-2xl", "bg-gray-100","p-2","rounded-lg","my-2");
        alert("You have completed " + shopEaseTitle)
    
})
// card 2

const softPayBtn = document.getElementById("soft-pay-btn");
const softPayTitle = document.getElementById("soft-pay-title").innerText

softPayBtn.addEventListener("click" , function(){
    newTaskNumber -= 1;
    heroCount += 1;
    document.getElementById("hero-count").innerText = heroCount;
    document.getElementById("task-number").innerText = newTaskNumber
    softPayBtn.disabled = true;
    let newText = document.createElement("p");
    const shopEaseTitle =document.getElementById("shop-ease-title").innerText;
        newText.innerText = "You have complete the task " + metaTitle + time;
        activityHistory.appendChild(newText).classList.add("text-2xl", "bg-gray-100","p-2","rounded-lg","my-2");
        alert("You have completed " + softPayTitle)
    
})

// card 3
const metaBtn = document.getElementById("meta-btn");
const metaTitle = document.getElementById("meta-title").innerText;

metaBtn.addEventListener("click" , function(){
    newTaskNumber -= 1;
    heroCount += 1;
    document.getElementById("hero-count").innerText = heroCount;
    document.getElementById("task-number").innerText = newTaskNumber
    metaBtn.disabled = true;
    let newText = document.createElement("p");
    const shopEaseTitle =document.getElementById("shop-ease-title").innerText;
        newText.innerText = "You have complete the task " + softPayTitle + time;
        activityHistory.appendChild(newText).classList.add("text-2xl", "bg-gray-100","p-2","rounded-lg","my-2");
        alert("You have completed "+metaTitle)
    
})

// card 4
const pHeroBtn = document.getElementById("p-hero-btn");
const pHeroTitle = document.getElementById("p-hero-title").innerText;

pHeroBtn.addEventListener("click" , function(){
    newTaskNumber -= 1;
    heroCount += 1;
    document.getElementById("hero-count").innerText = heroCount;
    document.getElementById("task-number").innerText = newTaskNumber
    pHeroBtn.disabled = true;
    let newText = document.createElement("p");
    const shopEaseTitle =document.getElementById("shop-ease-title").innerText;
        newText.innerText = "You have complete the task " + pHeroTitle + time;
        activityHistory.appendChild(newText).classList.add("text-2xl", "bg-gray-100","p-2","rounded-lg","my-2");
        alert("You have completed " + pHeroTitle)
    
})

// card 5
const goggleLlcBtn = document.getElementById("goggle-llc-btn");
const goggleLlcTitle = document.getElementById("goggle-llc-title").innerText;

goggleLlcBtn.addEventListener("click" , function(){
    newTaskNumber -= 1;
    heroCount += 1;
    document.getElementById("hero-count").innerText = heroCount;
    document.getElementById("task-number").innerText = newTaskNumber
    goggleLlcBtn.disabled = true;
    let newText = document.createElement("p");
    const shopEaseTitle =document.getElementById("shop-ease-title").innerText;
        newText.innerText = "You have complete the task " + goggleLlcTitle + time;
        activityHistory.appendChild(newText).classList.add("text-2xl", "bg-gray-100","p-2","rounded-lg","my-2");
        alert("You have completed " + goggleLlcTitle)
    
})

// card 3
const polygonTecBtn = document.getElementById("polygon-tec-btn");
const polygonTecTitle = document.getElementById("polygon-tec-title").innerText;

polygonTecBtn.addEventListener("click" , function(){
    newTaskNumber -= 1;
    heroCount += 1;
    document.getElementById("hero-count").innerText = heroCount;
    document.getElementById("task-number").innerText = newTaskNumber
    polygonTecBtn.disabled = true;
    let newText = document.createElement("p");
    const shopEaseTitle =document.getElementById("shop-ease-title").innerText;
        newText.innerText = "You have complete the task " + pHeroTitle + time;
        activityHistory.appendChild(newText).classList.add("text-2xl", "bg-gray-100","p-2","rounded-lg","my-2");
        alert("You have completed "+ polygonTecTitle)
    
})




// Clear History Button

const clearHistoryButton = document.getElementById("clear-history-btn");


clearHistoryButton.addEventListener("click" , function(){
    activityHistory.innerText = " "
})