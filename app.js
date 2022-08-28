console.log('**** app.js *******');

const langInput = document.querySelector('.langs');
const delBtn = document.getElementById('delete');
const addBtn = document.getElementById('add');

const langSection = document.querySelector('#lang-section')

const ul = document.createElement('ul');
langSection.appendChild(ul);

//? SELECTORS
//************************************************* */
console.log(langSection.children[0]);
console.log(langSection.parentNode.parentNode);


//? bir element seçme
// const h1 = ul.closest(".container").firstChild;
const h1 = ul.closest(".container").firstElementChild;
console.log(h1);
h1.style.color = 'red';

//? bir buton seçme (container class içerisindeki btn classına ait olan elementler)
buttons = ul.closest(".container").querySelectorAll(".btn");
console.log(buttons);
// ************************************************************** //

addBtn.onclick = function () {
    if (!langInput.value) {
        alert("Lütfen bir dil giriniz!");
    } else {
        ul.innerHTML += `<li>${langInput.value}</li>`
        langInput.value = '';
        javascriptCheck();
    }
};
const javascriptCheck = () => {
    document.querySelectorAll("ul li").forEach((lang) => {
        const kucukHarf = lang.textContent.toLowerCase();
        if (kucukHarf === "javascript") {
            lang.className = "red";
            // lang.className= 'red';
            //? Alternatif yöntem
            lang.setAttribute('class', 'red');
        }
    });
};

delBtn.onclick = function () {
    ul.childElementCount > 0 ?
        ul.removeChild(ul.lastElementChild) :
        alert('Silinecek dil kalmadı!');
}

langInput.addEventListener("keydown", (e) => {
    // console.log(e);
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        addBtn.click();
    }
    if (e.code === "Delete") {
        delBtn.click();
    }
})

window.onload = () => {
    javascriptCheck();
    langInput.focus();
}