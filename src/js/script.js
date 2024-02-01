const inputs = document.getElementsByClassName('validation');
const erro = document.getElementsByClassName('error');
const button = document.getElementById('enviar');

button.addEventListener('click', function(){
    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].value != ""){
            inputs[i].classList.add('valid');
            inputs[i].classList.remove("invalid")
            erro[i].classList.add('error-hidden');
        }else{
            inputs[i].classList.remove('valid')
            inputs[i].classList.add('invalid');
            erro[i].classList.remove('error-hidden');
        }
    }
});