import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import "./form.css";
import { FormInput } from "./FormInput";

  const useValidation =(value,validations)=>{
const[isEmptyError,setEmptyError]=useState(true) // изначально поле пустое
const[minLengthError,setMinLengthError]=useState(false)









    useEffect(()=>{
      for(const validation in validations){
        switch(validation){
          case 'minLength':
            value.length < validations[validation]?setMinLengthError(true):setMinLengthError(false)
            break;
            case 'isEmpty':
              value? setEmptyError(false): setEmptyError(true)
            break;
            default:
        }
      }
    },[validations, value])
    return{
      isEmptyError,
      minLengthError,
    }
  }



const useInput =(initialValue, validations)=>{
const [form, setForm] = useState({});
const [errors, setErrors] = useState({});

  const[value,setValue]=useState(initialValue)
  const[isDirty,setDirty]=useState(false)
const valid = useValidation(value,validations)


const validateForm = (e) => {
  const { email, userFam } = form;

  const newErrors = {};
  if (!email || email === "")
    newErrors.email = `Введите значение поля `;
  else if (email.length < 3) newErrors.email= `MIN`;
  else if (email.length > 5) newErrors.email = `MAx`;

  if (!userFam || userFam === "")
    newErrors.userFam = `Введите значение поля `;

  return newErrors;
};



const setField = (field, value) => {
  setForm({
    // это сохраняет объект form,
    ...form,
    [field]: value, //это не изменяет объект, это добавляет поле,
  }); // если такого еще нет или изменит существующее

  if (!!errors[field])
    setErrors({
      ...errors,
      [field]: null,
    });
};



const onChange=(e)=>{
  setField(e.target.name, e.target.value);
  setValue(e.target.value)
setDirty(true)
setErrors(validateForm(e));
console.log(form)
}

 const onBlur =(e)=>{

 }

 return{
  form,
  errors,
  value,
  onBlur,
  onChange,
  isDirty,
  ...valid
 }
}
 
  

export const Form = () => {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //   const [values, setValues] = useState({
  // const [state, setState] = useState({
  //   values: {
  //     userNameNm: "",
  //     emailNm: "",
  //     passwordNm: "",
  //     confirmpasswordNm: "",
  //     birthdayNm: "",
  //   },
  //   // touched"{},
  //   errors: {

  //   },
  // });

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      // это сохраняет объект form,
      ...form,
      [field]: value, //это не изменяет объект, это добавляет поле,
    }); // если такого еще нет или изменит существующее

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  // const inputs = [
  //   {
  //     id: 1,
  //     name: "userNameNm",
  //     type: "text",
  //     placeholder: "userNamePlch",
  //     errorMessage: "Длина от3-16 символов  без спецсимволов",
  //     label: "UsernameLbl",
  //     // pattern: "^[A-Za-z0-9]{3,16}$",
  //     // required: true,
  //   },
  //   {
  //     id: 2,
  //     name: "emailNm",
  //     type: "email",
  //     placeholder: "emailPlch",
  //     errorMessage: "Введите действительный адресс электронной почты",
  //     label: "emailLbl",
  //     required: true,
  //   },
  //   {
  //     id: 3,
  //     name: "passwordNm",
  //     type: "password",
  //     placeholder: "passwordPlch",
  //     errorMessage:
  //       "Длина от 2-5 символов включая 1буквуб 1 цифру, 1 спецсимвол",
  //     label: "passwordLbl",
  //     pattern: "^[A-Za-z0-9]{3,16}$",
  //     required: true,
  //   },
  //   {
  //     id: 4,
  //     name: "confirmpasswordNm",
  //     type: "password",
  //     placeholder: "confirmpasswordPlch",
  //     errorMessage: "Пароли не совпадают",
  //     label: "confirmpasswordLbl",
  //     // pattern: form.field.passwordNm,
  //     required: true,
  //   },
  //   {
  //     id: 5,
  //     name: "birthdayNm",
  //     type: "date",
  //     placeholder: "birthdayPlch",
  //     errorMessage: "",
  //     label: "birthdayLbl",
  //   },
  // ];
  // const newErrors = {};
  const validateForm = (e) => {
    const { userName, userFam } = form;

    const newErrors = {};

    if (!userName || userName === "")
      newErrors.userName = `Введите значение поля `;
    else if (userName.length < 3) newErrors.userName = `MIN`;
    else if (userName.length > 5) newErrors.userName = `MAx`;

    if (!userFam || userFam === "")
      newErrors.userFam = `Введите значение поля `;

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //////////////////////////////////////////////////////

  // const setField = (field, value) => {
  //   setForm((form) => ({ field: { ...form.field, [field]: value } }));

  //   if (!!form.errors[field])
  //     setForm((form) => ({ errors: { ...form.errors, [field]: null } }));
  // };

  // const onChange = (e) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   console.log(e.target.value.length);
  //   console.log();
  //   setField(e.target.name, e.target.value);
  //   const formErrors = validateForm(e);
  //   console.log("form", formErrors);
  //   return formErrors;
  // };

  const onChanger = (e) => {
    setField("userName", e.target.value);

    setErrors(validateForm(e));
    //  const formErrors = validateForm();
    // if(Object.keys(formErrors).length>0){
    //   setErrors(formErrors)
    // }else{
    //   console.log('всё получилось')
    //      console.log(form);
    // }
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const email =useInput('',{isEmpty:true, minLength:3})
const password = useInput('',{isEmpty:true, minLength:5})
console.log({email})
const  {onChange}=useInput()
  return (
    <div className='trApp'>
      <h1 className='trhead'>Тренировка</h1>
      <form className='trform' noValidate >
        <div className='trformInput'>
          <label className='label'>кастомхук</label>
          <input 
          onChange={onChange}
          // onChange={e =>email.onChange(e)} 
          onBlur={e=>email.onBlur(e)}value={email.value}
            type='text'
            name='email'
            placeholder='enter your email'
            className='inpformtr'
            autoComplete="off"
          />
          {(email.isDirty && email.isEmptyError)&& <div style={{color:'red'}}>Поле не может быть пустым</div>}
          {(email.isDirty && email.minLengthError)&& <div style={{color:'red'}}>MINIMUM</div>}
          <span className='spformtr' type='invalid' >sss{email.errors.email}</span>

        </div>

        <div className='trformInput'>
          <label className='label'>2кастомхук2</label>
          <input onChange={e =>password.onChange(e)} onBlur={e=>email.onBlur(e)}value={password.value}
            type='text'
            name='pass'
            placeholder='enter your pass'
            className='inpformtr'
          />
        </div>

        <div className='trformInput'>
          <label className='label'>оригинал</label>
          <input
            type='text'
            className='inpformtr'
            // name='name'
            placeholder='namePlaceholder'
            autoComplete='off'
            value = {form.userName || ''}
            onChange={(e) => onChanger(e)}
          />
          <span className='spformtr' type='invalid' >{errors.userName}</span>
        </div>

        <div className='trformInput'>
          <label className='label'>2оригинал</label>
          <input
            type='text'
            className='inpformtr'
            // name='name'
            placeholder='familyPlaceholder'
            autoComplete='off'
            value = {form.userFam || ''}
            onChange={(e) => setField("userFam", e.target.value)}
          />
          <span className='spformtr' type='invalid' >{errors.userFam}</span>
        </div>

        {/* {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            // value={state.values[input.name]}
            value={[form.input]}
            onChange={onChange}
            // isInvalid = {true}
          ></FormInput>
        ))} */}

        <button className='butForm'>Submit</button>
      </form>
    </div>
  );
};

// const [form, setForm] = useState({
//   field: {
//     //   userNameNm: "",
//     //   emailNm: "",
//     //   passwordNm: "",
//     //   confirmpasswordNm: "",
//     //   birthdayNm: "",
//   },

//   errors: {},
// });
