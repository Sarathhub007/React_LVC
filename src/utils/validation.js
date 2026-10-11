export function validateRegistration({
name,
email,
password,
confirm,
phone,
}){
    const errors={};

    if(!name.trim()){
        errors.name="Name id required";
    }

     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address";
  }

  if(password.length<6){
    errors.password="Password must be at least  characters";
  }
  if(password!==confirm){
    errors.confirm="passwords do not match";
  }
   if (!/^\d{10}$/.test(phone)) {
    errors.phone = "Phone number must be 10 digits";
  }
return errors;
}