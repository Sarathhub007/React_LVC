import  { useState } from 'react'
import { validateRegistration } from '../../utils/validation';

export default function Register() {
  const[form,setForm]=useState({
    name:"",
    email:"",
    password:"",
    confirm:"",
    phone:"",
  });


  const[errors,setErrors]=useState({});

  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
  

  const errs=validateRegistration(form);
  setErrors(errs);

  if(Object.keys(errs).length>0){
    return;
  }

  console.log("Valid form",form);

  }
  return (
  <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div>
        <input
          name="confirm"
          type="password"
          value={form.confirm}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        {errors.confirm && <p>{errors.confirm}</p>}
      </div>

      <div>
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="10-digit phone number"
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  )
}
