const wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');
document.body.appendChild(wrapper);

//header
const header = document.createElement('header');
wrapper.appendChild(header);
const headerContainer = document.createElement('div');
headerContainer.setAttribute('class', 'header-container');
header.appendChild(headerContainer);
const nav = document.createElement('nav');
headerContainer.appendChild(nav);
const ul = document.createElement('ul');
nav.appendChild(ul);
for(let i=1; i<5; i++){
    let list = document.createElement('li');
    ul.appendChild(list);  
}
ul.childNodes[0].innerHTML = '<a href="../../pages/main/index.html">Welcome</a>';
ul.childNodes[1].innerHTML = '<a href="../../pages/catalog/index.html">Catalog</a>';
ul.childNodes[0].setAttribute('class', 'active');
ul.childNodes[2].innerHTML = '<a href="../../pages/sign/index.html">Sign in</a>';
ul.childNodes[3].innerHTML = '<a href="../../pages/cart/index.html">Cart</a>';


const heading = document.createElement('div');
heading.setAttribute('class', 'heading');
headerContainer.appendChild(heading);
const h1 = document.createElement('h1');
heading.appendChild(h1);
h1.innerHTML = 'Book Shop';
const bookList = document.createElement('ul');
bookList.setAttribute('class', 'book');
heading.appendChild(bookList);
let bookArr = ['B', 'O', 'O', 'K'];
let shopArr = ['S', 'H', 'O', 'P'];
for(let i=1; i<5; i++){
    let list = document.createElement('li');
    bookList.appendChild(list);
    // console.log(bookList.childNodes[0]);
    
}
for(let j = 0; j<bookArr.length; j++){
        bookList.childNodes[0].innerHTML = bookArr[0];
        bookList.childNodes[1].innerHTML = bookArr[1];
        bookList.childNodes[2].innerHTML = bookArr[2];
        bookList.childNodes[3].innerHTML = bookArr[3];
}

const shopList = document.createElement('ul');
shopList.setAttribute('class', 'shop');
heading.appendChild(shopList);
for(let i=1; i<5; i++){
    let list = document.createElement('li');
    shopList.appendChild(list);
    
    
}
for(let j = 0; j<bookArr.length; j++){
        shopList.childNodes[0].innerHTML = shopArr[0];
        shopList.childNodes[1].innerHTML = shopArr[1];
        shopList.childNodes[2].innerHTML = shopArr[2];
        shopList.childNodes[3].innerHTML = shopArr[3];

}



//main
const main = document.createElement('main');
wrapper.appendChild(main);
const container = document.createElement('div');
main.appendChild(container);
container.setAttribute('class', 'container');
let greet = document.createElement('h2');
container.appendChild(greet);
// let phrase = document.createElement('p');
// container.appendChild(phrase);
let date = new Date();
let hour = date.getHours();
console.log(date.getHours());
if(hour<=10 && hour>=4) {
greet.innerHTML = "Good morning!";
} else if(hour>=11 && hour <=15) {
     greet.textContent = "Good afternoon!";
} else if(hour>=16 && hour <=20) {
     greet.textContent = "Good evening!";
} else if(hour>=21 && hour<=24) {
    greet.innerHTML = "Good night!";
} else if(hour>=00 && hour<=3) {
    greet.textContent = "Have a Good night!";
};


//footer
const footer = document.createElement('footer');
wrapper.appendChild(footer);
const p = document.createElement('p');
footer.appendChild(p);
p.innerHTML = 'Designed by &#169;e-jj-e for RSSchool Book-shop task';

