class Login {
    constructor() {
        this.logIn();
    }

    logIn() {
        const iconInfo = document.querySelector('.icon');

        iconInfo.addEventListener('mouseover', () => {
            document.querySelector('.info').hidden = false;
        });

        iconInfo.addEventListener('mouseout', () => {
            document.querySelector('.info').hidden = true;
        });

        const btnLogin = document.querySelector('.btn-login');

        btnLogin.addEventListener('click', () => {
            const emailPhone = document.querySelector('.email-phone');
            const password = document.querySelector('.password');
            try {
                if (!/^[\w\.\-@\+]+$/g.test(emailPhone.value)) throw new Error('Wrong email or phone number format');
                if (password.value.length < 8) throw new Error('Password entered too short');

                alert('You have successfully authorized in the system');

                emailPhone.value = '';
                password.value = '';
            } catch (error) {
                alert(error.message);

                emailPhone.value = '';
                password.value = '';
            }
        });
    }
}

const login = new Login();