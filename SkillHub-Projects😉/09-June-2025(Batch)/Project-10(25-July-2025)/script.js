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
    imgDetailArr.splice(0, 0, {
        titleImg: imgTitle.value,
        urlImg: imgURL.value,
        desImg: imgDes.value
    });
    displayDetails();
    setterForInp();
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
        <button type="button" class="btn btn-outline-danger" onclick = "deleteDetails(${index})">Delete</button>
        </div>`
        index++;
    }
    displayImgDetails.innerHTML = include;
}
function deleteDetails(indexNo) {
    imgDetailArr.splice(indexNo, 1);
    displayDetails();
}