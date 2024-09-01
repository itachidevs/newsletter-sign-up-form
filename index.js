const inputElement=document.getElementById('input')
const emailErrorMessageElement = document.getElementById('error-message');
const form=document.getElementById('sign-up')
function validateEmail(email) {  
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
      return 'Please enter a valid email';
    }
    return '';
  }
inputElement.addEventListener("blur", function(event) {
    const errorMsg=validateEmail(event.target.value)
    if (event.target.value === "") {
        emailErrorMessageElement.textContent = "Required*";
    } 
    else if (errorMsg!==''){
        emailErrorMessageElement.textContent =errorMsg;
        inputElement.value=''

    }
    else {
        emailErrorMessageElement.textContent = "";
    }
  }); 

function handleSignupFormSubmit(e) {
    // prevent default browser behaviour
    e.preventDefault();
    formContainer.style.display='none'
    thankyouMsg.classList.add('thank-you-message-show')
    console.log(formContainer)
    console.log(thankyouMsg)

}
form.addEventListener('submit',handleSignupFormSubmit)

// JS CODE TO SHOW OR HIDE ELEMENTS
const subscribeBtn=document.getElementById('subscribe-btn')
const formContainer=document.getElementById('form')
const dismissBtn=document.getElementById('dismiss-btn')
const thankyouMsg=document.getElementById('success-meassage')

// Adding AND SHOWING THANKYOU
const showForm=()=>{
    formContainer.style.display='flex'
    thankyouMsg.classList.remove('thank-you-message-show')
    console.log(formContainer)
    console.log(thankyouMsg)
}
dismissBtn.addEventListener('click',showForm)