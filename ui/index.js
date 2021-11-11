const form=document.querySelector("#form")

function validate(){
    let password = document.getElementById("pwd").Value;
    
    if(password=="" || password==" ")
    {
        alert("Password should not be a null or an empty string.")
        return false;
    }
}

let name = document.querySelector('#name');
let email = document.querySelector('#email').value
let password = document.querySelector('#pwd').value
let phone = document.querySelector('#phone').value;

const handleChange=(e)=>{
    e.preventDefault();
    console.log(e, 'onchange')
    document.querySelector(`#${e.target.id}`).value = e.target.value
}


// name.addEventListener('change', (e)=>{
//     handleChange(e)
// });


const registerUser=async()=>{
    const user={
        name, email, password, phone
    }
    const url = 'http://localhost:3000/register'
    try{
        result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user)
        });
    
        if (result){
           window.location.href ='http://127.0.0.1:5500/ui/student.html' 
        }

    }catch(err){
        console.log('failed to register')
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('submitting------')
    registerUser();
})

