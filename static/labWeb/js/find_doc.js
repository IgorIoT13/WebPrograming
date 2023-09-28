import {
    getInputValues,
    cleanInput,
} from "./dom_util.js";
const sortButton = document.getElementById('sort_butt');
const listObj = document.getElementById('list__object');
let obj = Array.from(listObj.getElementsByClassName('object'));
const current_arr = Array.from(listObj.getElementsByClassName('inp'));
const h_3 = Array.from(listObj.getElementsByTagName('h3'))

const FuelButton = document.getElementById('Fuel');
const textOut = document.getElementById('Fuel__text');
const search = document.getElementById('search_butt');
const search_inp = document.getElementById('search');

let flies = [
    {
        title: "B2",
        desc: "loremfsdfjsdhklfjsldkjf f dsl jfklsdj kljfsk dfjkl fjds ",
        fuel: 2010
    },
]

search.addEventListener('click', (event) =>{
   event.preventDefault();

   let curr = [] ;
   h_3.forEach((el) => {
       if(el.innerText.indexOf(search_inp.value) != -1 ){
           curr.push(obj[h_3.indexOf(el)]);
       };
   });
   while (listObj.firstChild) {
       listObj.removeChild(listObj.firstChild);
   };

   curr.forEach((el) =>{
     listObj.appendChild(el);
   });
});

FuelButton.addEventListener("click", (event) => {
    event.preventDefault();

    let cur_obj = Array.from(listObj.getElementsByClassName('object'));
    let val = Array.from(cur_obj).map((el) => {
        return parseInt(el.querySelector('.inp').value);
    });

    const result = val.reduce((a, b) =>{
        return a + b ;
    },0);

    console.log(result);

    textOut.innerText = result;




});


sortButton.addEventListener("click", (event) => {
    event.preventDefault();

    let val = Array.from(obj).map((el) => {
        return parseInt(el.querySelector('.inp').value);
    });

    val.sort((a, b) => a - b);

    let tempContainer = document.createElement('div');

    for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < obj.length; j++) {
            if (parseInt(obj[j].querySelector('.inp').value) === val[i]) {
                tempContainer.appendChild(obj[j]);
                break;
            }
        }
    }

    // Видаліть всі дочірні елементи зі списку obj
    while (listObj.firstChild) {
        listObj.removeChild(listObj.firstChild);
    }

    // Додайте відсортовані елементи назад у список obj
    listObj.appendChild(tempContainer);
});
