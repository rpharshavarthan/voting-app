let email = document.querySelector('.email');
let password = document.querySelector('.password');
let signin = document.querySelector('.signin');
let signup = document.querySelector('.signup');
let message = document.querySelector('.message');
if(window.localStorage){
    localStorage.setItem('rpharshavarthan@gmail.com', 'rpharsha28');
    signin.addEventListener('click', function(){
        if(password.value == localStorage.getItem(email.value)){
            message.style.color = 'green'
            message.innerHTML = 'Login Successful';
            setTimeout(function(){
                message.innerHTML = '';
                location.href = 'index.html'
            }, 1000);
        }else{
            message.style.color = 'red';
            message.innerHTML = 'Incorrect Credentials';
            email.value = '';
            password.value = '';
            setTimeout(function(){
                message.innerHTML = '';
            }, 1500);
        }
    });
    signup.addEventListener('click', function(){
        localStorage.setItem(email.value, password.value);
        alert('SignIn Successfull');
    });
}else{
    console.log('Not supported');
}
