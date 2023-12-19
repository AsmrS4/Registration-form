export const fieldsAreEmpty = (fields) => {
    fields.forEach(field => {
        if(field.value = "") return true;
    });
    return false;
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
    if(password.value === "" || password.value === ""){
        return password.classList.add("empty");
    }else if(password.value.size < 6) {
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
    if(!comparePasswords) {
        return confirmPassword.classList.add("invalid");
    }
    confirmPassword.remove("invalid");
}