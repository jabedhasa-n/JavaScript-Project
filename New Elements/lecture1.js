/**
 * Get Elements
 */

    const text=document.querySelector('.text')
    const p=document.querySelector('p')
    const h1=document.createElement('h1')
    const h2=document.createElement('h2')

    const h2_text=document.createTextNode('Jabed')


    h1.innerText='Hello Bangladesh';
    h1.classList.add('heading')


    text.append(h1)
    h2.appendChild(h2_text)
    text.append(h2)
    text.insertBefore(h1,p)
    text.insertBefore(h2,h1)
    text.insertBefore(p,h1)
    console.log(h1)
console.log('Hellow')