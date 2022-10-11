`use strict`;

const submit =  document.querySelector('#submit');
const pass =  document.querySelector('#pass');
const verifyPass =  document.querySelector('#check-pass');
const form = document.querySelector('#form-card');
const message =  document.querySelector('#message');
const input = document.querySelector('.form-input');
const thankYou =  document.querySelector('#thank-you');
const ok = document.querySelector('#ok');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
  if(input.value !== ""){
    form.style.display = 'none';
    thankYou.style.display ='block';
    message.textContent = 'none';
  }
  else if(pass.value !== verifyPass.value ){
     message.textContent = 'password did not match';
     verifyPass.style.border = '1px solid red';

  } 
  else{
    message.textContent = 'fill up your details';
    form.style.display  = 'block';
  }

});

ok.addEventListener('click',function(){
    form.style.display  = 'block';
    thankYou.style.display ='none';

})