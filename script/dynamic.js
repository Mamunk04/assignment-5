const themeBtn = document.getElementById("theme-btn");


themeBtn.addEventListener("click" , function(){
    let mathColor = Math.random()*360
    let colorCode = Math.floor(mathColor);
    
    let color = `hsl(${colorCode}, 100% , 60%)`
    console.log(color);
    document.body.style.backgroundColor = color;
    
})
