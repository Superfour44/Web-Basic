let openLoginRigth = document.querySelector('.h1');//class h1
let LoginWrapper = document.querySelector('.login-wrapper');//class login-wrapper

openLoginRigth.addEventListener('click',function(){
    LoginWrapper.classList.toggle('open');
})