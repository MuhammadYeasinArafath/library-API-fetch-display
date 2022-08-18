let searchBook =() =>{
    //alert("Clicked!!");
    let searchField = document.getElementById("search-field");
    let searchText = searchField.value;
    //console.log(searchText);




    searchField.value = ``;
    if(searchText == ''){
        let error = document.getElementById('error');
        error.innerHTML = "Plz type the book name.";
        
        let searchResult = document.getElementById('search-result');
        searchResult.innerHTML = '';
        let singleBookDetails = document.getElementById('singleBookDetailsId');
        singleBookDetails.innerHTML = '';
        
      }
      else{
        
      let url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}`;
  
      //console.log(url);
      fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data.items) );
      }
  }


  
  let displaySearchResult = (items) => {
    //console.log(items);
    let searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    let singleBookDetails = document.getElementById('singleBookDetailsId');
    singleBookDetails.innerHTML = '';
    error.innerHTML = '';
    if(items == null){
      let error = document.getElementById('error');
      error.innerHTML = "There is no book by this name.";

  }
  items.forEach(item =>{
    //console.log(item);

  let div = document.createElement('div');
   div.classList.add('col');
  div.innerHTML = `
  <div onclick='loadMoreDetails(${item.id})' class="card">
        <img src="${item.volumeInfo.imageLinks.smallThumbnail}" class="card-img-top" alt="Book Cover">
        <div class="card-body">
        <h5 class="card-title">Book Name: ${item.volumeInfo.title}</h5>
        <h6 class="card-title">Authors: ${item.volumeInfo.authors}</h6>
        <h6 class="card-title">Publisher: ${item.volumeInfo.publisher}</h6>
        <h6 class="card-title">Pages: ${item.volumeInfo.pageCount}</h6>
        <h6 class="card-text">Description: ${item.volumeInfo.description}</h6>
        <h6>Click Anywhere To Read More.</h6>
        </div>
        </div>
   `;
  searchResult.appendChild(div);
})
}

//done.

//<!--problem part starts-->

//click here to show more part. (not working)

let loadMoreDetails = (id) =>{
  alert(id);
let url = `https://www.googleapis.com/books/v1/volumes/${id}`;
//console.log(url);
fetch(url)
.then(res => res.json())
.then(data => displaySingleBook(data.items[0]));

}
let displaySingleBook = (singleBook) => {
//console.log(singleBook);
let singleMealDetails = document.getElementById('singleBookDetailsId');
singleMealDetails.innerHTML = '';
let div = document.createElement("div");
div.classList.add('card');
div.innerHTML = `
<img src="${item.volumeInfo.imageLinks.smallThumbnail}" class="card-img-top" alt="Single Book Data Search Details">
<div class="card-body">
  <h5 class="card-title">Name:${item.volumeInfo.title}</h5>
  <p class="card-text"> Author: ${item.volumeInfo.authors}</p>
  <p class="card-text"> Publisher: ${item.volumeInfo.publisher}</p>
  <p class="card-text">Page: ${item.volumeInfo.pageCount}</p>
  <p class="card-text">Description: ${item.volumeInfo.description}</p>
</div>
`;
singleBookDetails.appendChild(div); 
}
//<!--problem part ends-->
