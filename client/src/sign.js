class Sign {
    constructor() {
        this.signIn();
    }

    signIn() {
        const iconInfo = document.querySelector('.icon');

        iconInfo.addEventListener('mouseover', () => {
            document.querySelector('.info').hidden = false;
        });

        iconInfo.addEventListener('mouseout', () => {
            document.querySelector('.info').hidden = true;
        });

        const btnSign = document.querySelector('.btn-sign');

        btnSign.addEventListener('click', async () => {
            const emailPhone = document.querySelector('.email-phone');
            const password = document.querySelector('.password');
            const confirmPassword = document.querySelector('.confirm-password');
            try {
                if (!/^[\w\.\-@\+]+$/g.test(emailPhone.value)) throw new Error('Wrong email or phone number format');
                if (password.value.length < 8) throw new Error('Password entered too short');
                if (password.value !== confirmPassword.value) throw new Error('Passwords do not match');

                const response = await fetch('http://localhost:8000/api/reg', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: emailPhone.value,
                        pwd: password.value
                    })
                });

                alert('You have successfully registered in the system');

                emailPhone.value = '';
                password.value = '';
                confirmPassword.value = '';
            } catch (error) {
                alert(error.message);

                emailPhone.value = '';
                password.value = '';
                confirmPassword.value = '';
            }
        });
    }
}

const sign = new Sign();