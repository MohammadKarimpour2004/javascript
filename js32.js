let ul = document.createElement('ul')
ul.innerHTML = `<li>mohammad</li>`
ul.style.backgroundColor = 'red'

// نحوه append  کردن المنت ساخته شده
let div = document.querySelector('div')
div.append(ul)
div.appendChild(ul)