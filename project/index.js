var plusBtn = document.querySelector(".plus");
var crossBtn = document.querySelector(".cross");
var closeBtnArr = document.querySelectorAll(".middle-box3");
var minimizeIcons = document.querySelectorAll(".middle-box1");


function plusBtnClick() {
    document.querySelector(".dialog").style.display = "flex"
}

function closeDialog(){
    document.querySelector(".dialog").style.display = "none"
}


function addDelTktLogic(){
    var closeBtnArr = document.querySelectorAll(".middle-box3");

    var minimizeIcons = document.querySelectorAll(".middle-box1");

    function closeTicket(e) {
        var box = e.target.closest(".main-box");
        console.log(box)
        box.style.display = "none"
    }

    function minimize(e){
        var box = e.target.closest(".main-box");
        console.log(box);
        
        if( box.querySelector("main").style.display !== "none"){
            
            box.querySelector("main").style.display = "none"
            
        } else {
            box.querySelector("main").style.display = "block"
        }
    }
    for (let index = 0; index < minimizeIcons.length; index++) {
        const closeBtn = minimizeIcons[index];
        closeBtn.addEventListener("click", minimize);
        
    }

    for (let index = 0; index < closeBtnArr.length; index++) {
        const closeBtn = closeBtnArr[index];
        closeBtn.addEventListener("click", closeTicket);
        
    }
    

}



function addticket( ticketColor){
    closeDialog()
    var boxes = document.querySelector(".wrapper main")

    var puranaHTML = boxes.innerHTML;
    var boxContent = document.getElementById("box-first");
    var title = document.getElementById("title");
    boxes.innerHTML = puranaHTML + `
    <div class="main-box">
                <div class="box-first">
                    <main class="middle-box-heading"></main>
                    <div class="middle-box1"> - </div>
                    <div class="middle-box2"> E </div>
                    <div class="middle-box3"> X </div>
                </div>
                <main class="text-area ${ticketColor}">
                    <input type="text">
                </main>
            </div>`;
            addDelTktLogic();            

}




plusBtn.addEventListener("click", plusBtnClick);
crossBtn.addEventListener("click", closeDialog);



