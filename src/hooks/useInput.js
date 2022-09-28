import { useState, useEffect } from "react";
import { useValidation } from "./useValidation";
import useForm from "./useForm";
import { breackpoint, configName, configPassword } from "../utils/constants";

export const useInput = (initialState, validations) => {
  const [state, setState] = useState({
    value: "",
    isVisited: false,
    error: "",
    errorMessage: "",
    minAreaLength: 0,
    maxAreaLength: 0,
  });
  const valid = useValidation(state.value, validations); //value-значенин, validations-обект с видами валидации
  const { handleChange, values, errors, handleSubmit } = useForm();

  const onChange = (e) => {
console.log("onChange",e.target)
 

    setState({
      value: e.target.value,
      isVisited: true,
      minAreaLength: configName.minLength,
      errorMessage: `проба ${e.target.name} ${state.minAreaLength}`,
    });
  };

  // обрабатывает поле когда пользователь покинул импут
  const onBlur = (e) => {

  };
  return {
    state, // значение внутри импута
    onChange,
    onBlur,
    // onError,
    // onLength,
    // isVisited,
    // minAreaLength,
    // maxAreaLength,
    // errorMessage,
    // error,
    ...valid,
  };
};
























//  if (valid.isEmpty) {
//       return setMessageError(`Поле "${e.target.name}" не может быть пустым`);
//     }

//     if (valid.nameError) {
//       return setMessageError(
//         `Формат поля "${e.target.name}" может состоять только из букв, пробелов и "-"`
//       );
//     }

//     if (valid.emailError) {
//       return setMessageError(
//         `Формат поля "${e.target.name}"  должен иметь вид - xxxxx@xxxx.xx`
//       );
//     }

//     if (valid.minLengthError) {
//       return setMessageError(
//         `Минимальное количество символов поля "${e.target.name}" - ${minAreaLength}`
//       );
//     }

//     if (valid.maxLengthError) {
//       return setMessageError(
//         `Максимальное количество символов поля  "${e.target.name}" - ${maxAreaLength}`
//       );
//     } else {
//       return setMessageError("");
//     }

// e.target.name === "name"
//   ? setMinAreaLength(configName.minLength) &&
//     setMaxAreaLength(configName.maxLength)
//   : e.target.name === "password"
//   ? setMinAreaLength(configPassword.minLength) &&
//     setMaxAreaLength(configPassword.maxLength)
//   : setMinAreaLength("") && setMaxAreaLength("");

//   if (valid.isEmpty) {
//     return setMessageError(`Поле "${e.target.name}" не может быть пустым`);
//   } else {
//     return setMessageError("");
//   }
// };// const onError = (e) => {

// }

// valid.isEmpty
//   ? setMessageError(`Поле "${e.target.placeholder}" не может быть пустым`)
//   : valid.emailError
//   ? setMessageError(
//       `Формат поля "${e.target.placeholder}"  должен иметь вид - xxxxx@xxxx.xx`
//     )
//   : setMessageError("") || valid.nameError
//   ? setMessageError(
//       `Формат поля "${e.target.placeholder}" может состоять только из букв, пробелов и "-"`
//     )
//   : setMessageError("") || valid.minLengthError
//   ? setMessageError(
//       `Минимальное количество символов поля "${e.target.placeholder}" - ${minAreaLength}`
//     )
//   : setMessageError("") || valid.maxLengthError
//   ? setMessageError(
//       `Максимальное количество символов поля  "${e.target.placeholder}" - ${maxAreaLength}`
//     )
//   : setMessageError("");
// }
// for (const validation in validations) {
//   switch (validation) {
//     case "isEmpty":
//       !valid.isEmpty && isVisited
//         ? setMessageError(`Поле "${e.target.name}" не может быть пустым`)
//         : setMessageError("");
//       break;

//     case "isName":
//       valid.nameError
//         ? setMessageError(
//             `Формат поля "${e.target.name}" может состоять только из букв, пробелов и "-"`
//           )
//         : setMessageError("");

//       break;
//     default:
//   }
// } // for (const validation in validations) {
//   // eslint-disable-next-line default-case
//   switch (validation) {
//     case "isEmpty":
//       empty
//         ? setMessageError(`Поле "${e.target.name}" не может быть пустым`)

//         : setMessageError("");
//       break;

// case "isName":
//   valid.nameError
//     ? setMessageError(
//         `Формат поля "${e.target.name}" может состоять только из букв, пробелов и "-"`
//       )
//     : setMessageError("");

//   break;

// if (!valid.isEmpty) {
//   return setMessageError(`Поле "${e.target.name}" не может быть пустым`);
// }else{
//   setMessageError('')
// }
// };
  // const [value, setValue] = useState(initialValue);
  // const [isVisited, setVisited] = useState(false);
  // const [error, setError] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  // const [minAreaLength, setMinAreaLength] = useState(Number);
  // const [maxAreaLength, setMaxAreaLength] = useState(Number);

  // const onLength = (e) => {
  //   switch (e.target.name) {
  //     case "name":
  //       setState({ ...state.minAreaLength, [e.target.name]:configName.minLength},
  //         { ...state.maxAreaLength, [e.target.name]:configName.maxLength},
  //         // { ...state.errorMessage, [e.target.name]: `проба ${state.error}${e.target.name}${state.maxAreaLength}` },

  //         );
  //       // setMinAreaLength(configName.minLength);
  //       // setMaxAreaLength(configName.maxLength);
  //       // setMessageError("222");
  //       break;
  //     case "password":
  //     //   setMinAreaLength(configPassword.minLength);
  //     //   setMaxAreaLength(configPassword.maxLength);
  //     setState({ ...state.minAreaLength, [e.target.name]:configPassword.minLength},
  //       { ...state.maxAreaLength, [e.target.name]:configPassword.maxLength},
  //       // { ...state.errorMessage, [e.target.name]: `проба ${state.error}${e.target.name}${state.maxAreaLength}` },

  //       );

  //       break;
  //     default:
  //   }
  // };

  // useEffect(() => {
  //   valid.maxLengthError

  //     ?  setState({error:'max'})
  //     :  !valid.isEmpty && valid.minLengthError
  //     ? setState({error:'min'})
  //     : !valid.isEmpty && !valid.minLengthError
  //     ? setState({error:''})
  //     : setState({error:'пусто'});
  // }, [valid.isEmpty, valid.maxLengthError, valid.minLengthError]);
