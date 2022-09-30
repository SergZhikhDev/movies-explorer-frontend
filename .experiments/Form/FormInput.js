import React, {  useState } from "react";
import "./FormInput.css";

export const FormInput = React.memo((props)=>{
  const [focused, setFocused] = useState(false);
  const { label, errorMessage,value, onChange, id, ...inputProps } = props; // ...inputProps === ...others
  const handleFocus = (e) => {
    setFocused(true);
  };
//   console.log('render+')
  return (
    <div className='trformInput'>
      <label className='label'>{label}</label>
      <input
        className='inpformtr'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>inputProps.name === 'confirmpasswordNm'&& setFocused(true)}
        focused={focused.toString()}
        autoComplete ="off"
        // value={value }
      
      />

<span className='spformtr' >Что то {errorMessage}</span>

    </div>
  );
});


import React, { useContext, useState } from "react";
import "./form.css";
import { FormInput } from "./FormInput";

export const Form = () => {
  const [values, setValues] = useState({
    // const [state, setState] = useState({
    //     values:{
    userNameNm: "",
    emailNm: "",
    passwordNm: "",
    confirmpasswordNm: "",
    birthdayNm: "",})
    // ,
    // // touched"{},
    // errors:{},
  
  ;

  const inputs = [
    {
      id: 1,
      name: "userNameNm",
      type: "text",
      placeholder: "userNamePlch",
      errorMessage: "Длина от3-16 символов  без спецсимволов",
      label: "UsernameLbl",
      pattern:'^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: "emailNm",
      type: "email",
      placeholder: "emailPlch",
      errorMessage: "Введите действительный адресс электронной почты",
      label: "emailLbl",
      required: true,
    },
    {
      id: 3,
      name: "passwordNm",
      type: "password",
      placeholder: "passwordPlch",
      errorMessage: "Длина от 2-5 символов включая 1буквуб 1 цифру, 1 спецсимвол",
      label: "passwordLbl",
      pattern:'^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 4,
      name: "confirmpasswordNm",
      type: "password",
      placeholder: "confirmpasswordPlch",
      errorMessage: "Пароли не совпадают",
      label: "confirmpasswordLbl",
      pattern:values.passwordNm,
      required:true,
    },
    {
      id: 5,
      name: "birthdayNm",
      type: "date",
      placeholder: "birthdayPlch",
      errorMessage: "",
      label: "birthdayLbl",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
   
    // setState(state =>({
    //     values:{ ...state, [e.target.name]: e.target.value },
    //     errors:{ ...state.errors, },
    // }));

  

  };









  console.log(values);
  return (
    <div className='trApp'>
      <h1 className="trhead">Тренировка</h1>
      <form className="trform" noValidate onSubmit={handleSubmit} >
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          ></FormInput>
        ))}

        <button className='butForm'>Submit</button>
      </form>
    </div>
  );
};
