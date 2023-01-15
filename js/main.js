var fullObj = {
    qalinligi: '',
    kattaligi: '',
    ustiga: [],
    qoshimcha: []
}

//Katttaligi ----

function kattaligi(e) {
    fullObj.kattaligi = e
    ElTitlekatta.textContent = e
}

var ElSelect = document.querySelector('#select');
var ElTitleNon = document.querySelector('.titleNon');
var ElTitlekatta = document.querySelector('.titleKatt');
var ElTitleUstida = document.querySelector('.titleUstida');
var Elsm = document.querySelector('.sm');

ElSelect.addEventListener('change', ()=>{
    fullObj.qalinligi = ElSelect.value;
    ElTitleNon.textContent = ElSelect.value;
})

 // checkbox---

var ElCheck1 = document.querySelector('.check1');
var ElCheck2 = document.querySelector('.check2');
var ElCheck3 = document.querySelector('.check3');
var ElCheck4 = document.querySelector('.check4');
var ElCheck5 = document.querySelector('.check5');
var ElCheck6 = document.querySelector('.check6');
var conta = document.querySelector('.container');

ElCheck1.addEventListener('click', ()=>{
    if (ElCheck1.checked == true) {
        fullObj.ustiga.push('Pomidor');
        ElTitleUstida.textContent = fullObj.ustiga
    }else {
        var index = fullObj.ustiga.indexOf('Pomidor');
        if(index > -1){
            fullObj.ustiga.splice(index, 1)
            ElTitleUstida.textContent = fullObj.ustiga
        }
    }
})
ElCheck2.addEventListener('click', ()=>{
    if (ElCheck2.checked == true) {
        fullObj.ustiga.push('Tuzlangan bodiring');
        ElTitleUstida.textContent = fullObj.ustiga
    }else {
        var index = fullObj.ustiga.indexOf('Tuzlangan bodiring');
        if(index > -1){
            fullObj.ustiga.splice(index, 1)
        ElTitleUstida.textContent = fullObj.ustiga
        }
    }
})
ElCheck3.addEventListener('click', ()=>{
    if (ElCheck3.checked == true) {
        fullObj.ustiga.push('Kurka go`shti');
        ElTitleUstida.textContent = fullObj.ustiga

    }else {
        var index = fullObj.ustiga.indexOf('Kurka go`shti');
        if(index > -1){
            fullObj.ustiga.splice(index, 1)
        ElTitleUstida.textContent = fullObj.ustiga
        }
    }
})
ElCheck4.addEventListener('click', ()=>{
    if (ElCheck4.checked == true) {
        fullObj.ustiga.push('Qo`ziqorin');
        ElTitleUstida.textContent = fullObj.ustiga
    }else {
        var index = fullObj.ustiga.indexOf('Qo`ziqorin');
        if(index > -1){
            fullObj.ustiga.splice(index, 1)
        ElTitleUstida.textContent = fullObj.ustiga
        }
    }
})
ElCheck5.addEventListener('click', ()=>{
    if (ElCheck5.checked == true) {
        fullObj.ustiga.push('Zaytun');
        ElTitleUstida.textContent = fullObj.ustiga
    }else {
        var index = fullObj.ustiga.indexOf('Zaytun');
        if(index > -1){
            fullObj.ustiga.splice(index, 1)
            ElTitleUstida.textContent = fullObj.ustiga
        }
    }
})
ElCheck6.addEventListener('click', ()=>{
    if (ElCheck6.checked == true) {
        fullObj.ustiga.push('Qazi');
        ElTitleUstida.textContent = fullObj.ustiga
    }else {
        var index = fullObj.ustiga.indexOf('Qazi');
        if(index > -1){
            fullObj.ustiga.splice(index, 1)
        ElTitleUstida.textContent = fullObj.ustiga
        } 
    }
})

// Qoshimchalar ---
var Elachiq = document.querySelector('.achiq');
var Elpishloq = document.querySelector('.pishloq');
var ElQoshmcha = document.querySelector('.titleqoshm');


Elachiq.addEventListener('click', ()=> {
    if(Elachiq.checked == true){
        fullObj.qoshimcha.push('Achchiq')
        ElQoshmcha.textContent = fullObj.qoshimcha;
    }else {
        var index = fullObj.qoshimcha.indexOf('Achchiq');
        if(index > -1){
            fullObj.qoshimcha.splice(index, 1)
            ElQoshmcha.textContent = fullObj.qoshimcha
        }
    }
})

Elpishloq.addEventListener('click', ()=> {
    if(Elpishloq.checked == true){
        fullObj.qoshimcha.push('Pishloq')
        ElQoshmcha.textContent = fullObj.qoshimcha;
    }else {
        var index = fullObj.qoshimcha.indexOf('Pishloq');
        if(index > -1){
            fullObj.qoshimcha.splice(index, 1)
            ElQoshmcha.textContent = fullObj.qoshimcha
        }
    }
})

// buyurtma --- 

var Elbuyurtma = document.querySelector('.buyurtma');

Elbuyurtma.addEventListener('click', ()=>{
    console.log(fullObj);
})
