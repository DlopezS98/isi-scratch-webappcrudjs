function signin(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('username');
    const password = formData.get('password');

    console.log('Email:', email);
    console.log('Password:', password);
}