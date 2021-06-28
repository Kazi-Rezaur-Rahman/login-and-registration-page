const containerTwo = document.querySelector('.container-2');
const containerOne= document.querySelector('.container-1');
const form = document.querySelector('#form');
const form2 = document.querySelector('#form2');
const nameInputRegister = document.querySelector('.name-input-register');
const emailInputRegister = document.querySelector('.email-input-register');
const passwordInputRegister = document.querySelector('.password-input-register');
const remember = document.querySelector('.remember');
const error = document.querySelector('.error');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error3');
const error4 = document.querySelector('.error4');
const ok = document.querySelector('.ok');
const ok2 = document.querySelector('.ok2');
const ok3 = document.querySelector('.ok3');
const ok4 = document.querySelector('.ok4');
const btn = document.querySelector('.btn');
const registerNow = document.querySelector('.register-now a');
const loginNow = document.querySelector('.login-now a');


const value = nameInputRegister.value;
const pass = passwordInputRegister.value;
const reg = /[a-zA-Z][a-zA-Z0-9]{5,}/;
const regex = /[a-zA-Z][a-zA-Z0-9]{4,}/;
//const valueMatch = regex.test(value);
//nameInput.style.borderColor = "green";

form2.addEventListener('submit',(e)=>{
  if(nameInputRegister.value === ''|| nameInputRegister.value == null){
    nameInputRegister.style.borderColor = "red";
    error.innerHTML = "User name can't be blank or any space! ";
  }
  if(!reg.test(value)){
    nameInputRegister.style.borderColor = "red";
    error2.innerHTML = "Name must be start with at least a letter! ";
  }
  /*if(regex.test(value)){
    nameInputRegister.style.borderColor = "green";
    error2.innerHTML = " ";
  }*/
  if((nameInputRegister.value.length > 0)&&(reg.test(value))){
    nameInputRegister.style.borderColor = "green";
    ok.innerHTML = "Started with atleast one letter and have no space ";
  }
  if(passwordInputRegister.value.length < 6){
    passwordInputRegister.style.borderColor = "red";
    error3.innerHTML = " Password must be greater than 6 digit ";
  }
  if(passwordInputRegister.value.length > 6){
    passwordInputRegister.style.borderColor = "green";
    ok3.innerHTML = "Password length matched ";
  }
  /*if(passwordInputRegister.value.length>12){
    passwordInputRegister.style.borderColor = "red";
    error2.innerHTML = "Password must be fewer than 12 digit ";
  }*/
  if(!regex.test(pass)){
    passwordInputRegister.style.borderColor = "red";
    error4.innerHTML = "Password pattern mismatch! ";
  }
  if((passwordInputRegister.value.length<12)&&(regex.test(pass))){
    nameInputRegister.style.borderColor = "green";
    ok4.innerHTML = "Password pattern matched ";
  }
  e.preventDefault()
})

/*function btnDisable(){
  if(remember.checked == false){
    btn.disabled = true;
  }
}
btnDisable();*/

registerNow.addEventListener('click',()=>{
  containerOne.style.display = "none";
  containerTwo.style.display = "flex";
})

loginNow.addEventListener('click',()=>{
  containerOne.style.display = "flex";
  containerTwo.style.display = "none";
})
