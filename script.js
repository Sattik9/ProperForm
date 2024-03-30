const form=document.getElementById("my-form");
const email=document.getElementById("email");
const password=document.getElementById("password");
const emailError=document.getElementById("email-error");
const passwordError=document.getElementById("password-error");

function validateEmail(){
    const text=email.value.trim();
    if(text.length===0){
       emailError.innerText="email is required!";
    }else if(!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,})$/.test(text)){
      emailError.innerText="email is invalid!"
    }else{
        emailError.innerText="";
    }
}

function validatePassword(){
    const text=password.value.trim();
    if(text.length===0){
        passwordError.innerText="password is required!";
    }else if(text.length<8){
        passwordError.innerText="atleast eight characters!";
    }else{
        passwordError.innerText="";
    }
}

email.addEventListener("keyup",()=>{
     validateEmail();
})

password.addEventListener("keyup",()=>{
    validatePassword();
})


form.addEventListener("submit",(evt)=>{
     evt.preventDefault();
     validateEmail();
     validatePassword();
})