//INICIALIZAÇÃO DE VARIÁVEIS
const btnCancelNewAccount = document.getElementById('btnCancelNewAccount');
const btnCreateNewAccount = document.getElementById('btnCreateNewAccount');
const btnLogin = document.getElementById('btnLogin');
const btnNewAccount = document.getElementById('btnNewAccount');
const carouselExampleCaptions = document.getElementById('carouselExampleCaptions');
const loginScreen = document.getElementById('loginScreen');
const newAccount = document.getElementById('newAccount');
const pageMenu = document.getElementById('pageMenu');



//Realiza o login da aplicação
btnLogin.addEventListener('click', ()=>{
     let login = document.getElementById('login');
     let password = document.getElementById('password');
          if((login.value == "admin@admin.com") && (password.value == "123456")){
               loginScreen.classList.add('d-none');
               pageMenu.classList.remove('d-none');
               carouselExampleCaptions.classList.remove('d-none');
               alert('Bem-vindo ao BANK SYSTEM!');
          }
          else{
               alert('Login ou senha inválido(s)! Tente novamente!')
          }
});

//Abre modal de nova conta
btnNewAccount.addEventListener('click', ()=>{
     newAccount.classList.remove('d-none');
     pageMenu.classList.add('d-none');
     carouselExampleCaptions.classList.add('d-none');
     let newAccountCliente = document.getElementById('newAccountCliente').value;
     let newAccountNumber = parseInt(document.getElementById('newAccountNumber').value);
     let newAccountDate = document.getElementById('newAccountDate').value;
     let initialDepositAccount = parseFloat(document.getElementById('initialDepositAccount').value);
});

//Fecha o modal de nova conta
btnCancelNewAccount.addEventListener('click', ()=>{
     loginScreen.classList.add('d-none');
     newAccount.classList.add('d-none');
     pageMenu.classList.remove('d-none');
     carouselExampleCaptions.classList.remove('d-none');
});


