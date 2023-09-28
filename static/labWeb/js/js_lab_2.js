import {
    getInputValues,
    cleanInput
}from "./dom_util.js";

let listObj = document.getElementById('list__object');
const buttCreate = document.getElementById('create_butt');
const create_bar = document.getElementById('Create__block');
let buttback = document.getElementById('back_in');


const nameInp = document.getElementById('name_inp');
const descInp = document.getElementById('desc');
const fuel = document.getElementById('fuel_inp');
const createInForm = document.getElementById('Create_inp_in');


buttCreate.addEventListener('click', (event) =>{
    event.preventDefault();

    create_bar.style.display = 'block';

    listObj.style.display = 'none';
});

buttback.addEventListener('click', (event) => {
    event.preventDefault();

    create_bar.style.display = 'None';

    listObj.style.display = 'grid';
    cleanInput();
});

createInForm.addEventListener('click', (event) => {
    event.preventDefault();
    {name, desc, fuel} = getInputValues();
});
