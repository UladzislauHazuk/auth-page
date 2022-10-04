const btnSign = document.querySelector('.btn-sign');

btnSign.addEventListener('click', () => {
    const emailPhone = document.querySelector('.email-phone');
    const password = document.querySelector('.password');
    const confirmPassword = document.querySelector('.confirm-password');
    try {
        if (!/^[\w\.\-@\+]+$/g.test(emailPhone.value)) throw new Error('Wrong email or phone number format');
        if (password.value.length < 8) throw new Error('Password entered too short');
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