let order = document.querySelector('#order');
let footer = document.querySelector('footer');
let container = document.querySelector('.container');
let buttons = document.querySelectorAll('.btn');

order.addEventListener('click', () => {
    footer.style.display = 'flex';
    container.style.backgroundColor = '#DEE5ED';
})


buttons.forEach(v => [
    v.addEventListener('click', () => {
        footer.style.display = 'none';
        container.style.backgroundColor = 'white'
    })
])