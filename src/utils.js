export const handleKeyPress = (e) => {
    if (e.code === 'Minus' || e.charCode < 48 || e.charCode > 57 || (e.ctrlKey && e.key === "a")) {
        e.preventDefault();
    }
};

export const handleKeyDown = (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}

export const isEmailValid = (emailVal) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailVal) && !/^[\d]+@/.test(emailVal)) {
        return true
    }
    return false
}

export const isMobileValid = (mobileVal) => {
    if (/^[6-9]\d{9}$/.test(mobileVal)) {
        return true;
    }
    return false
}

export const isNameValid = (nameVal) => {
    if (/^[a-zA-Z\s]*$/g.test(nameVal) && nameVal.length >= 3) {
        return true
    }
    return false
}

export const handlePasswordValidation = (password) => {
    if (password.length >= 6) {
        return true
    }
    else {
        return false
    }
}