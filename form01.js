console.log('I Work!')
// pulling in dom elemetns 
const form = document.getElementById('form');
const nameInput = document.querySelector('input[name = "1stname"]');
const lastNameInput = document.querySelector('input[name = "lastname"]');
const message = document.querySelector('textarea[name = "message"]');




const thankyou = document.querySelector('.thank-you');


const inputs = [nameInput, lastNameInput, message]

let isFormValid = false;

let isvalidationOn = false;


//help function for resetting element

const resetElm = (elm) =>{
    elm.classList.remove("invalid")
    elm.nextElementSibling.classList.add("hidden")
}
//help function for invalidating element

const invalidate = (elm) =>{
    elm.classList.add("invalid")
    elm.nextElementSibling.classList.remove("hidden")
}


const validate = () =>{
    if(!isvalidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElm);
   
     
  


    if (!nameInput.value ){
       isFormValid = false;
       invalidate(nameInput)
    }


    if (!lastNameInput.value ){
        isFormValid = false;
        invalidate(lastNameInput)
    }

    if (!message.value ){
        isFormValid = false;
        invalidate(message)
    }

     


};






inputs.forEach((input) =>{
    input.addEventListener('input', (e) =>{
        validate(inputs);
    })

})





// form submisson 

form.addEventListener('submit', (e) =>{
    

    e.preventDefault();
    isvalidationOn = true;

    validate();
    if (isFormValid){
        // ajaxx  call here
        form.remove();
        thankyou.classList.remove("hidden")
    }

    console.log('here');
})


