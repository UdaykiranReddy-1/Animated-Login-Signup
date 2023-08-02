const login = document.querySelector('.loginsection');
const loginlink = document.querySelector('.loginlink');
const registerlink = document.querySelector('.registerlink');
registerlink.addEventListener('click',()=>{
    login.classList.add('active');
})
loginlink.addEventListener('click',()=>{
    login.classList.remove('active');
})
