function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fildPassword = document.getElementById('fild-password');


    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fildPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fildPassword.type = 'password';
    }
}

document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Parabéns você esta Logado! aproveite');
});