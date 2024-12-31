const API_BASE = "https://fakestoreapi.com";
fetch(`${API_BASE}/products`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    mapCards(data);
  }).catch(function(error){
    console.log(error);
    
  })

function mapCards(productArray) {
  const cardArray = productArray.map((product) => createProductCard(product));
  const main = document.querySelector("main");
  main.append(...cardArray);
}

function createProductCard(productObj) {
  const {
    id,
    title,
    price,
    rating: { rate },
  } = productObj;
  const divImg = createElement("div", ["img"]);
  const titleElem = createElement("p", ["title"], "title:", title);
  const priceElem = createElement("p", ["price"], "price:", price);
  const ratingElem = createElement("p", ["rating"], "rating:", rate);

  return createElement(
    "article",
    ["card"],
    divImg,
    titleElem,
    priceElem,
    ratingElem
  );
}

function createElement(type, classNames = [], ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...children);

  return elem;
}
