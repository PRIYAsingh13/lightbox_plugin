// function to include html popup code

function includePopupHTML() {

    let html = '<div id="popup"><button class="close_btn">close</button><img id="right_arrow"src="https://www.pngitem.com/pimgs/m/78-781597_arrow-right-arrow-top-arrow-bottom-pictures-free.png"alt=""/><img id="main_popup_img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6q_Hf6-4gfHLjwFT8SllztypsgbgXSy9ew&usqp=CAU"alt=""/><img id="left_arrow"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw4-WCLJgnOOofyYeqI5BIejGsPmtEQ5WrIz4ef3cXlUpSK5NbBJjWkXkkCTIIjRKeHM&usqp=CAU"alt=""/></div>';


    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;

    document.body.insertBefore(popdiv, document.body.firstChild)
}

let img;

// function to init plugin 

function imagePopupInit(target) {

    // select all images with class target
    img = document.getElementsByClassName(target)
    console.log(img)
    includePopupHTML()
}
imagePopupInit("popup")