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
    console.log(bookList.childNodes[0]);
    
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
const formContainer = document.createElement('div');
formContainer.setAttribute('class', 'form-container');
main.appendChild(formContainer);
const h2 = document.createElement('h2');
formContainer.appendChild(h2);
h2.innerHTML = 'Please fill the form below';
let form = document.createElement('form');
form.setAttribute('action', '../../pages/form/action.js');
form.setAttribute('method', 'post');
formContainer.appendChild(form);
let nameLabel = document.createElement('label');
nameLabel.setAttribute('for', 'fname');
nameLabel.textContent = 'Name:';
form.appendChild(nameLabel);
let nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('id', 'fname');
nameInput.setAttribute('name', 'fname');
form.appendChild(nameInput);
const br = document.createElement('br');
form.appendChild(br);

let lastNameLabel = document.createElement('label');
lastNameLabel.setAttribute('for', 'lname');
lastNameLabel.textContent = 'Last name:';
form.appendChild(lastNameLabel);
let lastNameInput = document.createElement('input');
lastNameInput.setAttribute('id', 'lname');
lastNameInput.setAttribute('type', 'text');
lastNameInput.setAttribute('name', 'lname');
form.appendChild(lastNameInput);
const br1 = document.createElement('br');
form.appendChild(br1);

let streetLabel = document.createElement('label');
streetLabel.setAttribute('for', 'street');
streetLabel.textContent = 'Street:';
form.appendChild(streetLabel);
let streetInput = document.createElement('input');
streetInput.setAttribute('id', 'street');
streetInput.setAttribute('type', 'text');
streetInput.setAttribute('name', 'street');
form.appendChild(streetInput);
const br2 = document.createElement('br');
form.appendChild(br2);
let houseLabel = document.createElement('label');
houseLabel.setAttribute('for', 'house');
houseLabel.textContent = 'House number:';
form.appendChild(houseLabel);
let houseInput = document.createElement('input');
houseInput.setAttribute('id', 'house');
houseInput.setAttribute('type', 'number');
houseInput.setAttribute('name', 'house');
form.appendChild(houseInput);
const br3 = document.createElement('br');
form.appendChild(br3);
let flatLabel = document.createElement('label');
flatLabel.setAttribute('for', 'flat');
flatLabel.textContent = 'Flat number:';
form.appendChild(flatLabel);
let flatInput = document.createElement('input');
flatInput.setAttribute('id', 'flat');
flatInput.setAttribute('type', 'number');
flatInput.setAttribute('name', 'flat');
form.appendChild(flatInput);
const br4 = document.createElement('br');
form.appendChild(br4);
let deliveryLabel = document.createElement('label');
deliveryLabel.setAttribute('for', 'delivery');
deliveryLabel.textContent = 'Delivery date:';
form.appendChild(deliveryLabel);
let deliveryInput = document.createElement('input');
deliveryInput.setAttribute('id', 'house');
deliveryInput.setAttribute('type', 'number');
deliveryInput.setAttribute('name', 'delivery');
form.appendChild(deliveryInput);
const br5 = document.createElement('br');
form.appendChild(br5);
const br6 = document.createElement('br');
form.appendChild(br6);

const par = document.createElement('p');
par.textContent = 'Gift for you!';
form.appendChild(par);

const packInput = document.createElement('input');
packInput.setAttribute('id', 'pack');
packInput.setAttribute('type', 'radio');
packInput.setAttribute('name', 'pack');
form.appendChild(packInput);
const packLabel = document.createElement('label');
packLabel.setAttribute('for', 'pack');
packLabel.textContent = 'Pack as a gift';
form.appendChild(packLabel);
const br7 = document.createElement('br');
form.appendChild(br7);
const discountInput = document.createElement('input');
discountInput.setAttribute('id', 'discount');
discountInput.setAttribute('type', 'radio');
discountInput.setAttribute('name', 'discount');
// discountInput.setAttribute('', 'checked');
form.appendChild(discountInput);
const discountLabel = document.createElement('label');
discountLabel.setAttribute('for', 'discount');
discountLabel.textContent = '2% Discount for your next purchase';
form.appendChild(discountLabel);

const br8 = document.createElement('br');
form.appendChild(br8);
const br99 = document.createElement('br');
form.appendChild(br99);
const par2 = document.createElement('p');
par2.textContent = 'Please select a payment method:';
form.appendChild(par2);
const cardInput = document.createElement('input');
cardInput.setAttribute('id', 'card');
cardInput.setAttribute('type', 'radio');
cardInput.setAttribute('name', 'card');
form.appendChild(cardInput);
const cardLabel = document.createElement('label');
cardLabel.setAttribute('for', 'card');
cardLabel.textContent = 'Card';
form.appendChild(cardLabel);
const br9 = document.createElement('br');
form.appendChild(br9);

const cashInput = document.createElement('input');
cashInput.setAttribute('id', 'cash');
cashInput.setAttribute('type', 'radio');
cashInput.setAttribute('name', 'cash');
form.appendChild(cashInput);
const cashLabel = document.createElement('label');
cashLabel.setAttribute('for', 'cash');
cashLabel.textContent = 'Cash';
form.appendChild(cashLabel);
const br10 = document.createElement('br');
form.appendChild(br10);
const br11 = document.createElement('br');
form.appendChild(br11);
const submitInput = document.createElement('input');
submitInput.setAttribute('id', 'buy');
submitInput.setAttribute('type', 'submit');
submitInput.setAttribute('value', 'Buy');
form.appendChild(submitInput);




//footer
const footer = document.createElement('footer');
wrapper.appendChild(footer);
const p = document.createElement('p');
footer.appendChild(p);
p.innerHTML = 'Designed by &#169;e-jj-e for RSSchool Book-shop task';




const buyBtn = document.getElementById('buy');
buyBtn.addEventListener('click', function() {
    alert("Thank you for your order!");
})

