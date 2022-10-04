const btnSign = document.querySelector('.btn-sign');

btnSign.addEventListener('click', () => {
    const emailPhone = document.querySelector('.email-phone');
    const password = document.querySelector('.password');
    const confirmPassword = document.querySelector('.confirm-password');
    try {
        if (!/^([a-zA-Z0-9\.\_\-]+@[a-z]+\.[a-z]{1,3})|(\+[0-9]{12})$/g.test(emailPhone.value)) throw new Error('Wrong email or phone number format');
        if (!/^\w{8,}$/g.test(password.value)) throw new Error('Password entered too short');
        if (password.value !== confirmPassword.value) throw new Error('Passwords do not match');

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