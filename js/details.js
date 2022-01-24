// Detail Page

const paramsString = location.search;

const searchParams = new URLSearchParams(paramsString);

let elephantId = searchParams.get("id");

fetch(`http://acumen-elephantom.herokuapp.com/elephants/id/${elephantId}`)
    .then(function (res) {
        return res.json();
    })
    .then((elephant) => {
        console.log(elephant.data);
        renderDataOnPage(elephant.data);
    })
    .catch(err => console.log(err));

function renderDataOnPage(elephant) {
    let imageDiv = document.getElementById("image-div");

    if (elephant.image) {
        imageDiv.innerHTML = "";
    }

    let image = document.createElement("img");
    image.setAttribute("src", elephant.image);
    image.classList.add("elephant-image");

    imageDiv.appendChild(image);

    let title = document.getElementById("elephant-title");

    let titleLink = document.createElement("a");
    titleLink.setAttribute("href", elephant.wikilink);
    titleLink.innerText = elephant.name;

    title.appendChild(titleLink);

    let gender = document.createElement("span");
    gender.innerText = elephant.sex;
    title.appendChild(gender);

    let detail = document.getElementById("elephant-detail");
    detail.innerText = elephant.note
}