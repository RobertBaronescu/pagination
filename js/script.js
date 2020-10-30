

 const pageHeader = document.querySelector(".page .header");
 const labelSearch = document.createElement("label");
 const searchInput = document.createElement("input");
 const searchButton = document.createElement("button");
 const searchImage = document.createElement("img");
 
 labelSearch.classList.add("student-search");
 searchInput.type = "text";
 searchInput.setAttribute("id", "search");
 searchInput.setAttribute("placeholder", "Search by name...");
 searchButton.type = "BUTTON";
 searchImage.setAttribute("src", "img/icn-search.svg");
 searchButton.appendChild(searchImage);
 labelSearch.appendChild(searchInput);
 labelSearch.appendChild(searchButton);
 labelSearch.style.height = "30px";
 labelSearch.style.width = "450px";
 pageHeader.appendChild(labelSearch);

const ul = document.querySelector(".student-list");
const paginationUl = document.querySelector(".link-list");
const listItems = document.querySelectorAll(".link-list li");
console.log(listItems);
ul.innerHTML=showPage(data,1);
createButton(data);



searchInput.addEventListener("input", (e) => {
ul.innerHTML="";
const paginationUl = document.querySelector(".link-list");
const listItems = document.querySelectorAll(".link-list li");
removeChildren(paginationUl, listItems);
 const searchValue = e.target.value;
 const filteredValues = search(data, searchValue);
 createButton(filteredValues);
 ul.innerHTML = showPage(filteredValues, 1);
});





