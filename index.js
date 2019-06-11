// Задание 1
function matrixDiff(arr1, arr2) {
    let sum = 0;
    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].length == arr2[i].length) {
                for (let j = 0; j < arr2.length; j++) {
                    sum += Math.abs(arr1[i][j] - arr2[i][j]);
                }
            } else {
                return NaN;
            }
        }
    } else {
        return NaN;
    }
    return sum;
}
window.matrixDiff = matrixDiff;

// Задание 2
function strangeSearch (stringArray){
    stringArray = [];
    const newDiv = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');

    button.innerHTML = 'Search';
    button.id = 'go';
    button.type = 'button'
    input.type = 'number';
    input.value = 0;

    button.addEventListener('click', () =>{

        alert('hello!');
    })
    
    document.body.prepend(newDiv);
    newDiv.appendChild(input);
    newDiv.appendChild(button);

};
window.strangeSearch = strangeSearch;

// Задание 4


import cat from "./cat.png";
function stickyСat() {

    const img = document.createElement('img');
    document.body.append(img);

    img.src = cat;
    img.style.position = 'absolute';
    img.style.top = '50px';
    img.style.left = '50px';
    img.style.width = '200px';

    window.addEventListener('mousemove', (event) => {
        img.style.left = `${event.clientX}px`;
        img.style.top = `${event.clientY}px`;
    })
}

function unstickTheСat(){
    const img = document.getElementsByTagName('img');
    for (let k = 0; k < img.length; k += 1){
        img[k].remove();
    }
    window.removeEventListener('mousemove', (event) => {
            img.style.left = `${event.clientX}px`;
            img.style.top = `${event.clientY}px`;
        })
}
window.stickyСat = stickyСat;
window.unstickTheСat = unstickTheСat;
