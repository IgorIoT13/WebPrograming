import {
    getAlllight
}from "./BackEnd.js";

import {
    getInputValues,
    cleanInput,
    addItemToPage,
    cleanInputEd,
    getInputValuesEdit,
} from "./dom_util.js";


const listObj = document.getElementById('list__object');
const objList = []

const sortButton = document.getElementById('sort_butt');

const FuelButton = document.getElementById('Fuel');
const textOut = document.getElementById('Fuel__text');
const search = document.getElementById('search_butt');
const search_inp = document.getElementById('search');


function BuldingPage() {
    objList.forEach(el => {
        let {id, title, description, fuel} = el
        addItemToPage(id, title, description, fuel);
    })
}

function ClearList() {
    while (objList.firstChild) {
       objList.removeChild(objList.firstChild);
   };

    while (listObj.firstChild) {
       listObj.removeChild(listObj.firstChild);
   };
}
function ExtractAllElements(){
    let promise = getAlllight();

    ClearList();

    promise.then(data => {
        data.forEach(obj => {
            objList.push(obj)
        });

    BuldingPage();
});
}


ExtractAllElements();


// Search
search.addEventListener('click', (event) =>{
   event.preventDefault();

   let curr = [] ;
   objList.forEach((el) => {
       let {title} = el;
       if (title.toLowerCase().indexOf(search_inp.value.toLowerCase()) !== -1) {
            curr.push(el);
       }

   });
   ClearList();
   curr.forEach((el) =>{

       let {id, title, description, fuel} = el;
       addItemToPage(id, title, description, fuel);
   });
});
// End Search

// Fuel
FuelButton.addEventListener("click", (event) => {
    event.preventDefault();
    let val = []
    let result = 0;
    listObj.forEach((el) => {
        let {fuel} = el;
        val.push(parseInt(fuel));
    });
    result = val.reduce((a, b) =>{
        return a + b ;
    },0);

    textOut.innerText = result;

});
// End Fuel

// Sort
sortButton.addEventListener("click", (event) => {
    event.preventDefault();

    objList.sort((a, b) => {
        // Спочатку сортуємо за паливом (зростаючий порядок)
        if (a.fuel < b.fuel) return -1;
        if (a.fuel > b.fuel) return 1;

        // Якщо паливо однакове, сортуємо за назвою (за алфавітом)
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;

        // Якщо і назва, і паливо однакові, сортуємо за описом
        if (a.desc < b.desc) return -1;
        if (a.desc > b.desc) return 1;

        return 0; // об'єкти однакові
    });

   while (listObj.firstChild) {
       listObj.removeChild(listObj.firstChild);
   };

   objList.forEach((el) =>{
       let { title, desc, fuel} = el;
       addItemToPage( title, desc, fuel);
   });

});
// End SOrt


