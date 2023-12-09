let button = document.querySelectorAll('button');
let input = document.getElementById('input');

button.forEach(element => {
element.addEventListener('click', (e) => {
    if(e.target.textContent === 'C'){
        input.value = " ";
    }
    else if(e.target.textContent === 'X'){
     input.value = input.value.slice(0,-1);
    }
    else if(e.target.textContent === '='){
       input.value = eval(input.value);
      
    }

    else{
        input.value += e.target.textContent;
    }
})

})
