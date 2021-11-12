const form=document.querySelector("#form")

function validate(){
    // let password = document.getElementById("pwd").Value;
    
    if(!password =="")
    {
        alert("Password should not be shorter than 6 or an empty string.")
        return false;
    }else{
        return true
    }
    
}
const success=()=>{
    let registerDone=document.forms['form'].value;
    if(registerDone==""){
        alert("registration failed")
        return false;
    }else{
        alert('registration successful')
    }
    
}



let name = document.querySelector('#name').value;
let email = document.querySelector('#email').value
let password = document.querySelector('#pwd').value
let phone = document.querySelector('#phone').value;




// name.addEventListener('change', (e)=>{
//     handleChange(e)
// });


const registerUser=()=>{


    const user={
        name, email, password, phone
    }
    if(validate()){
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href ='http://127.0.0.1:5500/ui/login.html' 
        success()
    }else{
        // fail
        alert('failed  toregister') 
    }

    

}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('submitting------')
    registerUser();

})

