let imgTitle = document.getElementById("imgTitleInp");
let imgURL = document.getElementById("imgURLInp");
let imgDes = document.getElementById("imgDesInp");
let imgDetailArr = [];
let displayImgDetails = document.getElementById("displayImgDetails");
function setterForInp() {
    imgTitle.value = "";
    imgURL.value = "";
    imgDes.value = "";
}
function add() {
    /*
    📌 If the key name and the variable name are the same, you can just write the name once inside the object.
    👇
    let imgTitle = document.getElementById("imgTitleInp").value;
    let imgURL = document.getElementById("imgURLInp").value;
    let imgDes = document.getElementById("imgDesInp").value;
    imgDetailArr.splice(0, 0, { imgTitle, imgURL, imgDes });
    */
    imgDetailArr.splice(0, 0, {
        titleImg: imgTitle.value,
        urlImg: imgURL.value,
        desImg: imgDes.value
    });
    displayDetails();
    setterForInp();
    document.getElementById("toast").innerHTML = `<div class ="alert alert-success">
    Details of Image Added Successfully! 
    </div>`
    setTimeout(handleToast, 2000);
    function handleToast() {
        document.getElementById("toast").innerHTML = "";
    }
}
function displayDetails() {
    let include = "";
    let index = 0;
    for (let details of imgDetailArr) {
        include += `<div class = "alert alert-primary d-flex justify-content-between align-items-center">
        <div class = "d-flex align-items-center gap-3">
        <img src = "${details.urlImg}" width = "90" height = "70">
        <div>
        <h3>${details.titleImg}</h3>
        <p>${details.desImg}</p>
        </div>
        </div>
        <button type="button" class="btn btn-outline-danger" onclick = "deleteDetails(${index})">Remove</button>
        </div>`
        index++;
    }
    displayImgDetails.innerHTML = include;
}
function deleteDetails(indexNo) {
    imgDetailArr.splice(indexNo, 1);
    displayDetails();
    document.getElementById("toast").innerHTML = `<div class ="alert alert-danger">
    Details of Image Deleted Successfully! 
    </div>`
    setTimeout(handleToast, 2000);
    function handleToast() {
        document.getElementById("toast").innerHTML = "";
    }
}
