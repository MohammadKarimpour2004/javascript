let h1elim = document.querySelector('.h1')

h1elim.addEventListener('click',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('contextmenu',()=>{
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

h1elim.addEventListener('copy',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('cut',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('paste',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('load',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('mousemove',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('select',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('touchmove',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('touchend',()=>{
    console.log('mohammad');
})

h1elim.addEventListener('touchstart',()=>{
    console.log('mohammad');
})


///////////////////////////////////////////

//برای به دست اوردن اطلاعات ایونت میتوانید از این روش استفاده کنید
h1elim.addEventListener('click',(event)=>{

    event.preventDefault()// aption for submit event and more...
    console.log(event);
})



//////////////////////////////////////////////////

//برای حذف کردن یک ایونت

h1elim.removeEventListener('click',()=>{
    console.log('removed');
})