
document.addEventListener('DOMContentLoaded',()=>{
    let count =0;
    const para = document.querySelector('#cont');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click',()=>{
        count++;

        para.textContent = `You have Cliked ${count} Times`
    })
})