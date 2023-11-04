var dataInformation = [];
if(localStorage.getItem('credential')){
    var dataInformation = JSON.parse(localStorage.getItem('credential'));
}

function showsignin(){
    document.getElementById('signin').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementsByClassName('donthaveaccsignin')[0].style.display = 'block';
    document.getElementsByClassName('donthaveaccsignup')[0].style.display = 'none';
}

function showsignup(){
    document.getElementById('signin').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
    document.getElementsByClassName('donthaveaccsignin')[0].style.display = 'none';
    document.getElementsByClassName('donthaveaccsignup')[0].style.display = 'block';
}

function clearr(){
    document.getElementById('signupuser').value = '';
    document.getElementById('signupemail').value = '';
    document.getElementById('signuppass').value = '';
    document.getElementById('signinuser').value = '';
    document.getElementById('signinpass').value = '';
}

function signup(){
    let usernamee = document.getElementById('signupuser').value;
    let emaill = document.getElementById('signupemail').value;
    let passwordd = document.getElementById('signuppass').value;
    for(let i = 0;i<passwordd.length;i++){
        passwordd[i] = passwordd.s
    }
    if(usernamee == '' || emaill == '' || passwordd == ''){
        alert('Please fill the complete details');
        return;
    }
    let information = {
        username: usernamee,
        email: emaill,
        password: passwordd
    }
    alert('Form is successfully submited')
    if (localStorage.getItem('credential')) {
        dataInformation = JSON.parse(localStorage.getItem('credential'));
    }
    dataInformation[dataInformation.length] = information;
    localStorage.setItem('credential', JSON.stringify(dataInformation));
    clearr();
}

function signin(){
    let usernamee = document.getElementById('signinuser').value;
    let passwordd = document.getElementById('signinpass').value;
    for(let i = 0; i< dataInformation.length;i++){
        if(usernamee == dataInformation[i].username && passwordd == dataInformation[i].password){
            alert('Sign in Successfully');
            clearr();
            return;
        }
    }
    alert('Credential is not correct');
    clearr();
}
