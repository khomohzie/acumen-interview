// Home page

const myTable = document.getElementById("html-data-table");

const apiData = fetch("//acumen-elephantom.herokuapp.com/elephants/asian")
    .then(function (res) {
        return res.json();
    })
    .then((elephantData) => {
        console.log(elephantData.data);
        displayList(elephantData.data, myTable, rows, currentPage);
        setupPagination(elephantData.data, paginationElement, rows);
    })
    .catch(err => {
        console.log(err);
    });

const paginationElement = document.getElementById("pagination");
const pageInfoDiv = document.getElementById("page-info");

let pageInfo = document.createElement("span");

let currentPage = 1;
let rows = 6;

function displayList(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = "";
    page--;

    let page_count = Math.ceil(items.length / rowsPerPage);
    let start = rowsPerPage * page;
    let end = start + rowsPerPage;

    const sortedItems = items.sort((a, b) => { return a.index - b.index });

    let paginatedItems = sortedItems.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let newRow = document.createElement("tr");

        let rowHead = document.createElement("th");
        rowHead.textContent = paginatedItems[i].index;

        let nameCell = document.createElement("td");
        let nameLink = document.createElement("a");
        nameLink.textContent = paginatedItems[i].name;
        nameLink.setAttribute("href", `/details.html?id=${paginatedItems[i]._id}`);
        nameCell.appendChild(nameLink);

        let specieCell = document.createElement("td");
        specieCell.textContent = paginatedItems[i].species;

        let sexCell = document.createElement("td");
        sexCell.textContent = paginatedItems[i].sex;

        let affiliationCell = document.createElement("td");
        affiliationCell.textContent = paginatedItems[i].affiliation;

        let dobCell = document.createElement("td");
        dobCell.textContent = paginatedItems[i].dob;

        pageInfo.textContent = `PAGE ${page + 1} OF ${page_count}`;

        newRow.append(rowHead);
        newRow.append(nameCell);
        newRow.append(specieCell);
        newRow.append(sexCell);
        newRow.append(affiliationCell);
        newRow.append(dobCell);

        wrapper.appendChild(newRow);
    }
}

function setupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rowsPerPage);

    pageInfoDiv.appendChild(pageInfo);

    for (let i = 1; i < page_count + 1; i++) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function paginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    button.classList.add('btn');

    if (currentPage == page) button.classList.add('btn-active');

    button.addEventListener('click', function () {
        currentPage = page;

        displayList(items, myTable, rows, currentPage);

        let currentBtn = document.querySelector('.pagenumbers button.btn-active');
        currentBtn.classList.remove('btn-active');

        button.classList.add('btn-active');
    });

    return button;
}