'use strict';

// window.localStorage;

// localStorage.setItem('number', 5); -- set the item
// localStorage.getItem('number'); -- get the item
// localStorage.removeItem('number'); -- remove the item
// localStorage.clear(); -- clean all storage



const   form = document.querySelector('form'),
        checkbox = document.querySelector('#checkbox'),
        change = document.querySelector('#color');

if(localStorage.getItem('isChecked')) checkbox.checked = true;
checkbox.addEventListener('change',()=>{
    localStorage.setItem('isChecked', true);
});

if(localStorage.getItem('colorIsChanged')){
    form.style.backgroundColor = 'red';   
}
change.addEventListener('click', ()=>{
    if(localStorage.getItem('colorIsChanged')){
        localStorage.removeItem('colorIsChanged');
        form.style.backgroundColor = '#fff';
    }else{
        localStorage.setItem('colorIsChanged', true);
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'alex',
    age: '25'
};
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);