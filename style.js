const summit = document.querySelector("button");

const baseapparel = function() {  

const email = document.querySelector("#email").value
const message = document.querySelector("#message")
const error = document.querySelector(".hidden")
console.log(email);


const emailPattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;
if(emailPattern.test(email)){
    message.textContent = ``;
}
else{

    message.textContent = "Provide a valid email"
    error.classList.remove("hidden")
}
};

 summit.addEventListener('click', function (){
    baseapparel()
 })

   