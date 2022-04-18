const refs = {
form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email == '' || password == '' ) {
      alert `Все поля должны быть заполнены!`;
    };  

    let userData = {
    email: email,
    password: password,
    };
    console.log(userData);

    refs.form.reset();    
};

