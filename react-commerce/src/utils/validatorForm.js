

export const emailValidator = email =>{
    if(!email){
        return 'email is required';
    }else if (!new RegExp(/\S+@\S+\.\S+/).test(email)){
        'incorrect email format';
    } 
    return "";
};

export const passwordValidator = password =>{
    if(!password){
        return 'password is required';
    }else if (password.length < 8){
        return 'password must have a minium 8 characters';
    }
    return "";
}

export const confirmPasswordValidator = (confirmPassword,state) =>{
    if(!confirmPassword){
        return 'confirm password is required';
    }else if (confirmPassword.length <8){
        return 'confirm password must have a minium 8 characters';
    }else if (confirmPassword !== state.password){
        return 'password not match'
    }
    return "";
}