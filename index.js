// function to include html popup code

function includePopupHTML() {

    let html = '<div id="popup1"><button onClick="closePopUp()" class="close_btn">close</button><img id="right_arrow"src="https://www.pngitem.com/pimgs/m/78-781597_arrow-right-arrow-top-arrow-bottom-pictures-free.png"alt=""/><img id="main_popup_img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6q_Hf6-4gfHLjwFT8SllztypsgbgXSy9ew&usqp=CAU"alt=""/><img  id="left_arrow"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw4-WCLJgnOOofyYeqI5BIejGsPmtEQ5WrIz4ef3cXlUpSK5NbBJjWkXkkCTIIjRKeHM&usqp=CAU"alt=""/></div>';


    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;

    document.body.insertBefore(popdiv, document.body.firstChild)
}

let img;
let current;

// function to init plugin 

function imagePopupInit(target) {

    // select all images with class target
    img = document.getElementsByClassName(target)
    console.log(img)

    // add eventlistener on all selected images
    for (let i = 0; i < img.length; i++) {
        // add pointer
        img[i].style.cursor = 'pointer'

        // add eventlistener
        img[i].addEventListener("click", function () {
            document.getElementById("main_popup_img").src = this.src
            document.getElementById("popup1").style.display = "block"
checkArrow()
        })
    }
    includePopupHTML()

    // right btn

    document.getElementById('right_arrow').addEventListener('click', function () {
        rightImg()
    })

    // left btn
    document.getElementById('left_arrow').addEventListener('click', function () {
        leftImg()
    })

}
imagePopupInit("popup1")


function closePopUp() {
    document.getElementById("main_popup_img").src = ""
    document.getElementById("popup1").style.display = "none"

}
// right
function rightImg() {
    getCurrentImg();
    current++;
    document.getElementById("main_popup_img").src = img[current].src;
    checkArrow()
}

// left img

function leftImg() {
    getCurrentImg();
    current--;
    document.getElementById("main_popup_img").src = img[current].src
    checkArrow()
}



function getCurrentImg() {
    for (let i = 0; i < img.length; i++) {
        if (img[i].src == document.getElementById("main_popup_img").src) {
            current = i;
        }
    }
}

function checkArrow() {
    getCurrentImg();
    if (current == "0") {
        document.getElementById('left_arrow').style.display = 'none';
        document.getElementById('right_arrow').style.display = 'block';

    } else if (current == img.length - 1) {
        document.getElementById('right_arrow').style.display = 'none';
        document.getElementById('left_arrow').style.display = 'block';


    } else {
        document.getElementById('left_arrow').style.display = 'block';
        document.getElementById('right_arrow').style.display = 'block';

    }
}