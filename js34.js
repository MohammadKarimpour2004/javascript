let h1elim = document.querySelector('.h1')

h1elim.addEventListener('click',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('submit',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('keypress',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('keyup',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('keydown',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('focus',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('blur',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('dblclick',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('change',()=>{
    console.log('mohammad');
})



///////////////////////////////////////////

//برای به دست اوردن اطلاعات ایونت میتوانید از این روش استفاده کنید
h1elim.addEventListener('click',(event)=>{

    event.preventDefault()// aption for submit event and more...
    console.log(event);
})