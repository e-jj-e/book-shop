window.addEventListener('load',
function() {
    fetch('../../pages/catalog/books.json') //path to the file with json data
    .then(response => {
        return response.json();
    })
    .then(data => {
        extract(data);
        console.log(data[0].imageLink);
        
        

    });
})

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
ul.childNodes[1].setAttribute('class', 'active');
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
const catalog = document.createElement('div');
main.appendChild(catalog);
catalog.setAttribute('class', 'books-catalog');
const unorList = document.createElement('ul');
catalog.appendChild(unorList);
unorList.setAttribute('class', 'whole-list');

function extract(data){
    for(let j = 0; j <= data.length; j++) {
        let list = document.createElement('li');
        unorList.appendChild(list);
        let bookCover = document.createElement('div');
       bookCover.setAttribute('class', 'book-cover')
       list.appendChild(bookCover);
       let bookInfo = document.createElement('div');
       bookInfo.setAttribute('class', 'book-info');
       list.appendChild(bookInfo);

       let img = document.createElement('img');
       img.setAttribute('src', data[j].imageLink);
       bookCover.appendChild(img);

       let bookShortcut = document.createElement('div');
       bookInfo.appendChild(bookShortcut);
       bookShortcut.setAttribute('class', 'book-shortcut');
       let h4 = document.createElement('h4');
       bookShortcut.appendChild(h4);
       h4.textContent = data[j].author;
       let h6 = document.createElement('h6');
       bookShortcut.appendChild(h6);
       h6.textContent = data[j].title;
       let para = document.createElement('p');
       bookShortcut.appendChild(para);
       para.innerHTML = "&euro; " + data[j].price;

       let value = document.createElement('div');
       value.setAttribute('class', 'value');
       bookInfo.appendChild(value);
       let para2 = document.createElement('p');
       value.appendChild(para2);
       para2.setAttribute('class', 'show-more');
       para2.innerHTML = 'Show more';
       let a = document.createElement('a');
       value.appendChild(a);
       a.setAttribute('href', '#');
       let btn = document.createElement('button');
       a.appendChild(btn);
       btn.textContent = "Add to cart";

       unorList.addEventListener('click', function(e){
        console.log(e.target);
        if(e.target.parentNode.parentNode.childNodes[0].childNodes[1].innerHTML === data[j].title){
            // for(let j = 0; j <= data.length; j++) {
            //     if((data[j].imageLink.substring(0, 1) - 1) === e.target.)
            // }
            let popup = document.createElement('div');
        main.appendChild(popup);
        popup.setAttribute('class', 'popup');
        // popup.setAttribute('id', `$[data[j].indexOf(j)]`);
        let popupContainer = document.createElement('div');
        popup.appendChild(popupContainer);
        popupContainer.setAttribute('class', 'popup-container');
        let h3 = document.createElement('h3');
        popupContainer.appendChild(h3);
        h3.innerHTML = data[j].title;
        let descrip = document.createElement('p');
        popupContainer.appendChild(descrip);
        descrip.textContent = data[j].description;
        let closeBtn = document.createElement('div');
        popup.appendChild(closeBtn);
        closeBtn.setAttribute('class', 'popup-close-btn');
        const p = document.createElement('p');
        closeBtn.appendChild(p);
        p.innerHTML = "x";
            // createPopup();  
            console.log(e.target.parentNode.parentNode.childNodes[0].childNodes[1].textContent === data[j].title);
            console.log(data[j].title);
            console.log(e.target.parentNode.parentNode.childNodes[0].childNodes[1].textContent);
            // popup.style.display = 'block';
            // popup.classList.remove('hidden');
            // document.body.setAttribute("disabled", "");
            document.body.setAttribute("scroll", "no");
            document.body.style.overflow = "hidden";
            
        }

        document.querySelector('.popup-close-btn').addEventListener('click', function(e){
    
            // document.querySelector('.popup').classList.add('hidden');
            document.querySelector('.popup').style.display = "none";
            // document.body.removeAttribute('disabled', '');
            // document.body.classList.add('notScrollable');
            document.body.removeAttribute("scroll", "no");
            // document.body.style.removeAttribute("overflow");
            document.body.style.removeProperty("overflow");
            document.body.removeAttribute("style");
            window.location.reload(false);

        
        });

        
        
    });
    
    }
    
    console.log(unorList.childNodes[0])
    
    
}



//footer
const footer = document.createElement('footer');
wrapper.appendChild(footer);
const p = document.createElement('p');
footer.appendChild(p);
p.innerHTML = 'Designed by &#169;e-jj-e for RSSchool Book-shop task';

//add to cart
// let addCart = function() {

// }
