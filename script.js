const registrationBtn = document.querySelector('[name="register-btn"]');
const nextBtn = document.querySelector('[name="next-btn"]');
const backBtn = document.querySelector('[name="back-btn"]');
const firstForm = document.querySelector('#first-form');
const secondForm = document.querySelector('#second-form');

export const fieldsNotEmpty = (fields) => {
    fields.forEach(field => {
        if (field.value = "") return false;
    });
    return true;
}

export const checkEmail = (email) => {
    const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
    if (email.value === "" || email.value === null) {
        return email.classList.add("empty");
    }
    else if (!email.value.match(emailPattern)) {
        email.classList.remove("empty");
        return email.classList.add("invalid");
    }
    email.classList.remove("empty");
    email.classList.remove("invalid");
}

export const checkPassword = (password) => {
    if (password.value === "" || password.value === "") {
        return password.classList.add("empty");
    } else if (password.value.size < 6) {
        password.classList.remove("empty");
        return password.classList.add("invalid");
    }
    password.classList.remove("empty");
    password.classList.remove("invalid");
}

export const comparePasswords = (password, confirmPassword) => {
    return password.value === confirmPassword.value;
}

export const checkConfirmPassword = (password, confirmPassword) => {
    if (!comparePasswords) {
        return confirmPassword.classList.add("invalid");
    }
    confirmPassword.remove("invalid");
}

export const getCurrentDay = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const today = day + '.' + month + '.' + year;

    return today;
}

export const checkBirthDate = (birthdate) => {
    const today = getCurrentDay();

    if (birthdate.value > today) {
        return birthdate.classList.add("invalid");
    }
    birthdate.classList.remove("invalid");
}

export const checkFirstForm = (form) => {
    const email = form.querySelector('[name="email"]');
    const password = form.querySelector('[name="password"]');
    const confirmPassword = from.querySelector('[name="confirm-password"]');
    checkEmail(email);
    checkPassword(password);
    checkConfirmPassword(confirmPassword);
}

export const checkSecondForm = (form) => {
    //const fullName = form.querySelector('[name="fullName]');
    const birthdate = form.querySelector('[name="birthdate]');
    checkBirthDate(birthdate);
}


nextBtn.addEventListener('click', () => {
    // const fields = firstForm.querySelectorAll('input');
    // if(fieldsNotEmpty(fields)){
    //     fields.forEach(field => {
    //         field.classList.remove('empty');
    //         field.classList.remove('invalid');
    //         firstForm.classList.add('second-form-active');
    //     });
    // } else {
    //     firstForm.classList.remove("sec-form-active");
    //     checkFirstForm(firstForm);
    // }
    secondForm.classList.add('sec-form-active');
    firstForm.classList.add('sec-form-active');
});

backBtn.addEventListener('click', () => {
    firstForm.classList.remove("sec-form-active");
    secondForm.classList.remove("sec-form-active");
})

// registrationBtn.addEventListener('click', () => {
//     const fields = secondFrom.querySelectorAll('input');
//     if(fieldsNotEmpty(fields)) {
//         fields.forEach(field => {
//             field.classList.remove('empty');
//             field.classList.remove('invalid');
//             alert("Регистрация прошла успешно!");
//         });
//     } else {
//         checkSecondForm(secondForm);
//     }
// });