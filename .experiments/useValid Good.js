import { useState, useEffect } from "react";
import { regex } from "../src/utils/constants";
import { reports } from "../src/utils/constants";

export const useValidation = (value, validations) => {
  // const [emptyError, setEmptyError] = useState(true);
  // const [minLengthError, setMinLengthError] = useState(false);
  // const [maxLengthError, setMaxLengthError] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  // const [nameError, setNameError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);

  const [errorsKit, setErrorsKit] = useState({
    errors: {
      emptyError: true, //true- поле пустое. есть ошибка
      maxLengthError: false, //true- длина меньше=> есть ошибка
      minLengthError: false, //true- длина больше=> есть ошибка
      nameError: false, //true- email не шаблон=> есть ошибка
      emailError: false, //true-name не шаблон=> есть ошибка
      passwordError: false,
    }, //true-password не шаблон=> есть ошибка
    messages: {
     message:''
    },
  });
 

  const [inputValid, setInputValid] = useState(false); // импуты изначально пустые и форма не валидна, кнопка серая

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value
            ? setErrorsKit((errorsKit => ({
                errors: { ...errorsKit.errors, emptyError: false },
                messages: { ...errorsKit.messages, message: null },
              })))
            : setErrorsKit((errors) => ({
                errors: {  ...errorsKit.errors, emptyError: true },
                messages: { ...errorsKit.messages, message: reports.errorMessages.emptyError},

              }));
          break;
        case "minLength": 
     value.length  !==0   &&  value.length < validations[validation]
          ? setErrorsKit((errorsKit => ({
            errors: { ...errorsKit.errors, minLengthError: true },
            messages: { ...errorsKit.messages, message:reports.errorMessages.minLengthError + validations.minLength},
          })))
        // :  value.length === 0   &&  value.length < validations[validation]
        // ?setErrorsKit((errorsKit) => ({
        //     errors: {  ...errorsKit.errors, minLengthError: false  },
        //     messages: { ...errorsKit.messages, message: reports.errorMessages.emptyError}

        //   }))
          :setErrorsKit((errorsKit) => ({
            errors: {  ...errorsKit.errors, minLengthError: false  },
            messages: { ...errorsKit.messages, message: reports.errorMessages.emptyError}
          }))




          break;
    //     case "maxLength":
    //       value.length > validations[validation]
    //       ? setErrorsKit((errorsKit) => ({
    //             errors: { ...errorsKit, maxLengthError: true },
    //           }))
    //         : setErrorsKit((errorsKit) => ({
    //             errors: { ...errorsKit, maxLengthError: false },
    //           }));
    //       break;
    //     case "isEmail":
    //       regex.email.test(String(value).toLowerCase())
    //       ? setErrorsKit((errorsKit) => ({
    //             errors: { ...errorsKit, emailError: false },
    //           }))
    //         : setErrorsKit((errorsKit) => ({
    //             errors: { ...errorsKit, emailError: true },
    //           }));

    //       break;
    //     case "isName":
    //       regex.name.test(String(value).toLowerCase())
    //       ? setErrorsKit((errorsKit) => ({
    //             errors: { ...errorsKit, nameError: false },
    //           }))
    //         :setErrorsKit((errorsKit) => ({
    //             errors: { ...errorsKit, nameError: true },
    //           }));

    //       break;
    //     case "isPass":
    //       regex.password.test(String(value).toLowerCase())
    //         ? setErrorsKit((errorsKit) => ({
    //             errors: { ...errorsKit, passwordError: false },
    //           }))
    //         : setErrorsKit((errorsKit) => ({
    //             errors: { ...errorsKit, passwordError: true },
    //           }));

    //       break;
        default:
      }
    }
  }, [value, validations,errorsKit.errors.emptyError,errorsKit.errors.minLengthError]);

   useEffect(() => {
        if (
          errorsKit.errors.isEmpty ||
          errorsKit.errors.maxLengthError ||
          errorsKit.errors.minLengthError ||
          errorsKit.errors.nameError ||
          errorsKit.errors.emailError||
          errorsKit.errors.passwordError
        ) {
          setInputValid(false);
        } else {
          setInputValid(true);
        }
      }, [errorsKit.errors.isEmpty, errorsKit.errors.maxLengthError, errorsKit.errors.minLengthError, errorsKit.errors.nameError, errorsKit.errors.emailError]);

  useEffect(() => {

    // console.log(5,errorsKit.errors.emptyError)
  //  errorsKit.errors.emptyError
  //     ? setErrorsKit((messages) => ({
  //         messages: { ...messages, message: reports.errorMessages.emptyError },
  //       }))
  //     : errorsKit.errors.minLengthError
  //     ? setErrorsKit((messages) => ({
  //         messages: {
  //           ...messages,
  //           message: reports.errorMessages.minLengthError,
  //         },
  //       }))
  //     : errorsKit.errors.maxLengthError
  //     ? setErrorsKit((messages) => ({
  //         messages: {
  //           ...messages,
  //           message: reports.errorMessages.maxLengthError,
  //         },
  //       }))
  //     : errorsKit.errors.nameError
  //     ? setErrorsKit((messages) => ({
  //         messages: { ...messages, message: reports.errorMessages.nameError },
  //       }))
  //     : errorsKit.errors.emailError
  //     ? setErrorsKit((messages) => ({
  //         messages: { ...messages, message: reports.errorMessages.emailError },
  //       }))
  //     : errorsKit.errors.passwordError
  //     ? setErrorsKit((messages) => ({
  //         messages: {
  //           ...messages,
  //           message: reports.errorMessages.passwordError,
  //         },
  //       }))
  //     : setErrorsKit((messages) => ({
  //         messages: { ...messages, message: null },
  //       }));
  }, [errorsKit.errors]);

  return {
    errorsKit,
    inputValid,
  };
};
