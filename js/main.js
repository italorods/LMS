function logar(){
     var email = document.getElementById('email');
     var password = document.getElementById('password');

     console.log(email.value + password.value);

        if(email.value == 'admin@admin.com' && password.value == 'admin')
        {
    
            localStorage.setItem('acesso', true);
            window.location.href = 'home.html';

        }else{

            alert('Usuário ou senha invalidos!');

        }


    }