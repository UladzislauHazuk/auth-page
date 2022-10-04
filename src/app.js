const iconInfo = document.querySelector('.icon');

iconInfo.addEventListener('mouseover', () => {
    document.querySelector('.info').hidden = false;
});

iconInfo.addEventListener('mouseout', () => {
    document.querySelector('.info').hidden = true;
});

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const emailPhone = document.querySelector('.email-phone');
    const password = document.querySelector('.password');
    try {
        if (!/^([a-zA-Z0-9\.\_\-]+@[a-z]+\.[a-z]{1,3})|(\+[0-9]{12})$/g.test(emailPhone.value)) throw new Error('Wrong email or phone number format');
        if (!/^\w{8,}$/g.test(password.value)) throw new Error('Password entered too short');
        alert('Вы успешно прошли регистрацию');
        emailPhone.value = '';
        password.value = '';
    } catch (error) {
        alert(error.message);
        emailPhone.value = '';
        password.value = '';
    }
});