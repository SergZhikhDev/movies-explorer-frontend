import { useState, useEffect } from "react";
import { regex } from "../src/utils/constants";
import { useConstant } from "../src/hooks/useConstants";
// import { reports } from "../utils/constants";

export const useValidation = (value, validations) => {
  const { reports, onClack } = useConstant(value, validations);

  const [errorsKit, setErrorsKit] = useState({
    errors: {
 emptyError: true, //true- поле пустое. есть ошибка
 minLengthError: false, //true- длина больше=> есть ошибка
 maxLengthError: false, //true- длина меньше=> есть ошибка
 nameError: false, //true- email не шаблон=> есть ошибка
 emailError: false, //true-name не шаблон=> есть ошибка
 passwordError: false, //true-password не шаблон=> есть ошибка
    },
    messages: {
 message: "",
    },
  });

  const kitErr = errorsKit.errors;
  const kitMess = errorsKit.messages;
  const emptyErr = errorsKit.errors.emptyError;
  const minLhErr = errorsKit.errors.minLengthError;
  const maxLhErr = errorsKit.errors.maxLengthError;
  const namErr = errorsKit.errors.nameError;
  const emlErr = errorsKit.errors.emailError;
  const pasErr = errorsKit.errors.passwordError;

  const errMess = reports.errorMessages;

  const [inputValid, setInputValid] = useState(false); // импуты изначально пустые и форма не валидна, кнопка серая
  console.log(  111,  "EMP",  emptyErr,  "MIN",  minLhErr,  "MAX",  maxLhErr,  "MES",  kitMess.message     );
  console.log(  222,  "EMP",  errorsKit.errors.emptyError,  "MIN",  errorsKit.errors.minLengthError,  "MAX",  errorsKit.errors.maxLengthError,  "MES",  errorsKit.messages.message     );

  useEffect(() => {
    for (const validation in validations) {
 switch (validation) {
   case "isEmpty":
     value
  ? setErrorsKit({
      errors: { ...kitErr, emptyError: false },
      messages: { ...kitMess, message: null },
    })
  : setErrorsKit({
      errors: { ...kitErr, emptyError: true },
      messages: { ...kitMess, message: errMess.emptyError },
    });
    //  console.log(  1,  "EMP",  emptyErr,  "MIN",  minLhErr,  "MAX",  maxLhErr,  "MES",  kitMess.message     );

     break;
     case "minLength":
      console.log(emptyErr)
      emptyErr && value.length < validations[validation]

      ? setErrorsKit({
        errors: { ...kitErr, minLengthError: true },
        messages: { ...kitMess, message: errMess.minLengthError},
      })
    : setErrorsKit({
        errors: { ...kitErr, minLengthError: false },
        messages: { ...kitMess, message: errMess.emptyError },
      });

      // console.log(  2,  "EMP",  emptyErr,  "MIN",  minLhErr,  "MAX",  maxLhErr,  "MES",  kitMess.message     );
   break;

   // case "maxLength":
   //   value &&  errorsKit.errors.minLengthError  &&value.length > validations[validation]
   //     ? setErrorsKit((errorsKit) => ({
   //    errors: { ...errorsKit.errors, maxLengthError: true },
   //    messages: {
   //      ...errorsKit.messages,
   //      message: reports.errorMessages.maxLengthError,
   //    },
   //  }))
   //     :
   // setErrorsKit((errorsKit) => ({
   //    errors: { ...errorsKit.errors, minLengthError: false },
   //    messages: {
   //      ...errorsKit.messages,
   //      message: null,
   //    },
   //  }))

   //   break;

   //     case "isEmail":
   //  regex.email.test(String(value).toLowerCase())
   //  ? setErrorsKit((errorsKit) => ({
   //   errors: { ...errorsKit, emailError: false },
   //      }))
   //    : setErrorsKit((errorsKit) => ({
   //   errors: { ...errorsKit, emailError: true },
   //      }));

   //  break;
   //     case "isName":
   //  regex.name.test(String(value).toLowerCase())
   //  ? setErrorsKit((errorsKit) => ({
   //   errors: { ...errorsKit, nameError: false },
   //      }))
   //    :setErrorsKit((errorsKit) => ({
   //   errors: { ...errorsKit, nameError: true },
   //      }));

   //  break;
   //     case "isPass":
   //  regex.password.test(String(value).toLowerCase())
   //    ? setErrorsKit((errorsKit) => ({
   //   errors: { ...errorsKit, passwordError: false },
   //      }))
   //    : setErrorsKit((errorsKit) => ({
   //   errors: { ...errorsKit, passwordError: true },
   //      }));

   //  break;
   default:
 }
    }
  }, [
    value,
    validations,
    emptyErr,
    minLhErr,
  ]);

  useEffect(() => {
    if (
 errorsKit.errors.isEmpty ||
 errorsKit.errors.maxLengthError ||
 errorsKit.errors.minLengthError ||
 errorsKit.errors.nameError ||
 errorsKit.errors.emailError ||
 errorsKit.errors.passwordError
    ) {
 setInputValid(false);
    } else {
 setInputValid(true);
    }
  }, [
    errorsKit.errors.isEmpty,
    errorsKit.errors.maxLengthError,
    errorsKit.errors.minLengthError,
    errorsKit.errors.nameError,
    errorsKit.errors.emailError,
  ]);

  useEffect(() => {
    // console.log(5,errorsKit.errors.emptyError)
    //  errorsKit.errors.emptyError
    //     ? setErrorsKit((messages) => ({
    //    messages: { ...messages, message: reports.errorMessages.emptyError },
    //  }))
    //     : errorsKit.errors.minLengthError
    //     ? setErrorsKit((messages) => ({
    //    messages: {
    //      ...messages,
    //      message: reports.errorMessages.minLengthError,
    //    },
    //  }))
    //     : errorsKit.errors.maxLengthError
    //     ? setErrorsKit((messages) => ({
    //    messages: {
    //      ...messages,
    //      message: reports.errorMessages.maxLengthError,
    //    },
    //  }))
    //     : errorsKit.errors.nameError
    //     ? setErrorsKit((messages) => ({
    //    messages: { ...messages, message: reports.errorMessages.nameError },
    //  }))
    //     : errorsKit.errors.emailError
    //     ? setErrorsKit((messages) => ({
    //    messages: { ...messages, message: reports.errorMessages.emailError },
    //  }))
    //     : errorsKit.errors.passwordError
    //     ? setErrorsKit((messages) => ({
    //    messages: {
    //      ...messages,
    //      message: reports.errorMessages.passwordError,
    //    },
    //  }))
    //     : setErrorsKit((messages) => ({
    //    messages: { ...messages, message: null },
    //  }));
  }, [errorsKit.errors]);

  return {
    errorsKit,
    inputValid,
    onClack,
  };
};
// const [emptyError, setEmptyError] = useState(true);
// const [minLengthError, setMinLengthError] = useState(false);
// const [maxLengthError, setMaxLengthError] = useState(false);
// const [emailError, setEmailError] = useState(false);
// const [nameError, setNameError] = useState(false);
// const [passwordError, setPasswordError] = useState(false);
