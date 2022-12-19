//INICIALIZAÇÃO DE VARIÁVEIS
const btnLogin = document.getElementById('btnLogin');
const loginScreen = document.getElementById('loginScreen');
const menuOptions = document.getElementById('menuOptions');
const carouselExampleCaptions = document.getElementById('carouselExampleCaptions');


btnLogin.addEventListener('click', ()=>{
     let login = document.getElementById('login');
     let password = document.getElementById('password');
          if((login.value == "admin@admin.com") && (password.value == "12345678")){
               loginScreen.classList.add('d-none');
               menuOptions.classList.remove('d-none');
               carouselExampleCaptions.classList.remove('d-none');
               alert('Bem-vindo ao BANK SYSTEM!');
          }
          else{
               alert('Login ou senha inválido(s)! Tente novamente!')
          }
});
