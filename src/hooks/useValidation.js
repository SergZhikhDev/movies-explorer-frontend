import{ useState, useEffect } from "react";
import {regex} from "../utils/constants"





export const useValidation = (value, validations) => {
    const [emptyError, setEmptyError] = useState(true); //true- поле пустое. есть ошибка
    const [minLengthError, setMinLengthError] = useState(false); //true- длина меньше=> есть ошибка
    const [maxLengthError, setMaxLengthError] = useState(false); //true- длина больше=> есть ошибка
    const [emailError, setEmailError] = useState(false); //true- email не шаблон=> есть ошибка
    const [nameError, setNameError] = useState(false); //true-name не шаблон=> есть ошибка
    const [passwordError, setPasswordError] = useState(false); //true-password не шаблон=> есть ошибка
  
  
    
  
    const [inputValid, setInputValid] = useState(false); // импуты изначально пустые и форма не валидна, кнопка серая
  
    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case "isEmpty":
            value ? setEmptyError(false) : setEmptyError(true);
            break;
          case "minLength":
            value.length < validations[validation] 
              ? setMinLengthError(true)
              : setMinLengthError(false);
            break;
          case "maxLength":
            value.length > validations[validation]
              ? setMaxLengthError(true)
              : setMaxLengthError(false);
            break;
          case "isEmail":
           regex.email.test(String(value).toLowerCase())
              ? setEmailError(false)
              : setEmailError(true); // есть ошибка
            break;
          case "isName":
            regex.name.test(String(value).toLowerCase())
              ? setNameError(false)
              : setNameError(true);
            break;
          case "isPass":
            
          regex.password.test(String(value).toLowerCase())
              ? setPasswordError(false)
              : setPasswordError(true);
            break;
          default:
        }
      }
    }, [value, validations]);
  
    useEffect(() => {
      if (
        emptyError ||
        maxLengthError ||
        minLengthError ||
        nameError ||
        emailError ||
        passwordError
      ) {
        setInputValid(false);
      } else {
        setInputValid(true);
      }
    }, [
      emptyError,
      minLengthError,
      maxLengthError,
      nameError,
      emailError,
      passwordError,
    ]);
  
    return {
      emptyError,
      minLengthError,
      maxLengthError,
      nameError,
      emailError,
      passwordError,
      inputValid,
    };
  };