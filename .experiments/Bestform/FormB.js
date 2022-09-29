import React from "react";
import "./FormB.css";
import useForm from "../../../hooks/useForm";


export const FormB= () => {
      //Final submit function
  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  };

      //Custom hook call
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);



console.log(errors)






    return( 
    <div className="FormB">
        <form onSubmit={handleSubmit}>
        <input
          autoComplete='off'
          type='email'
          name='email'
          placeholder='E-mail'
          onChange={handleChange}
        />
        {errors.email && <h3>{errors.email}</h3>}
        <input
          minLength='8'
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChange}
        />
        {errors.password && <h3>{errors.password}</h3>}
        <input
          autoComplete='off'
          type='text'
          minLength='5'
          required
          name='name'
          placeholder='username'
          onChange={handleChange}
        />
        {errors.username && <h3>{errors.username}</h3>}
        
        <input type='submit' value='Submit' className='submit' />
      </form>
    </div>
  );
}
