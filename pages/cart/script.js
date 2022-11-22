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
ul.childNodes[3].setAttribute('class', 'active');
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
let orders = document.createElement('div');
main.appendChild(orders);
orders.setAttribute("class", "orders");
let orderHead = document.createElement('h2');
orders.appendChild(orderHead);
orderHead.textContent = "Your orders:";
let ol = document.createElement('ol');
orders.appendChild(ol);
let li = document.createElement('li');
ol.appendChild(li);
let info = document.createElement('div');
li.appendChild(info);
info.setAttribute('class', 'info');
let bookTitle = document.createElement('h4');
info.appendChild(bookTitle);
let bookAuth = document.createElement('p');
info.appendChild(bookAuth);
let price = document.createElement('div');
li.appendChild(price);
price.setAttribute('class', 'price');
let pr = document.createElement('p');
price.appendChild(pr);
pr.textContent = "&euro;" + arrBtns[k];   

let btn = document.createElement('button');
price.appendChild(btn);
btn.textContent = "Remove";
let total = document.createElement('div');
total.setAttribute('class', 'order-total-btn');
orders.appendChild(total);
let totalPrice = document.createElement('div');
total.appendChild(totalPrice);
totalPrice.setAttribute('class', 'total');
let totalName = document.createElement('h2');
totalPrice.appendChild(totalName);
totalName.textContent = "Total:";
let totalValue = document.createElement('p');
totalPrice.appendChild(totalValue);
totalValue.innerHTML = "&euro; 230";
let confirmBtn = document.createElement('div');
confirmBtn.setAttribute('class', 'continue-btn');
total.appendChild(confirmBtn);
let link = document.createElement('a');
confirmBtn.appendChild(link);
link.setAttribute('href', '../../pages/form/form.html');
let btnConf = document.createElement('button');
link.appendChild(btnConf);
btnConf.textContent = "Confirm";


//footer
const footer = document.createElement('footer');
wrapper.appendChild(footer);
const p = document.createElement('p');
footer.appendChild(p);
p.innerHTML = 'Designed by &#169;e-jj-e for RSSchool Book-shop task';

