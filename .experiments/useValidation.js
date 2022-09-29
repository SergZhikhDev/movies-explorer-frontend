// import { useState, useEffect } from "react";

// export const useValidation = (value, validations) => {
//   //value-текущее значение импутов, validations- набор валидаторов
//   const [isEmpty, setEmpty] = useState(true); //проверка поля на пустоту пустота-true
//   const [minLengthError, setMinLengthError] = useState(false); //хранит состояние об ошибке есть ошибка-true
//   const [maxLengthError, setMaxLengthError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [nameError, setNameError] = useState(false);
//   const [inputValid, setInputValid] = useState(false); // импуты изначально пустые и форма не валидна, кнопка серая
//   const [errors, setErrors] = useState({});

// //  console.log(value, validations)
 
//   // добавит в свитч- кейс  текст ошибки

//   // console.log("valid", value.length, typeof value);



//   useEffect(() => {
//     for (const validation in validations) {
//       //validations - объект хранящий в себе инф. о видах валидации (isEmpty, maxLengthError, minLengthError, nameError, emailError)
//       // eslint-disable-next-line default-case
//       switch (validation) {
//         case "isEmpty":
//           value ?
//            setEmpty(false) 
//            : setEmpty(true);
//           break;
//         case "minLength":
//           value.length < validations[validation] // ключ validation объекта validations
//             ? setMinLengthError(true)
//             : setMinLengthError(false);
//           break;
//         case "maxLength":
//           value.length > validations[validation]
//             ? setMaxLengthError(true)
//             : setMaxLengthError(false);
//           break;
//         case "isEmail":
//           const emailRegEx =
//             /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//           emailRegEx.test(String(value).toLowerCase())
//             ? setEmailError(false)
//             : setEmailError(true); // есть ошибка
//           break;
//         case "isName":
//           const nameRegEx = /^[a-z|а-яё|\s|-]+$/iu;
//           nameRegEx.test(String(value).toLowerCase())
//             ? setNameError(false)
//             : setNameError(true);
//           break;
//       }
//     }
//   }, [value,validations]); // [value, validations] массив зависимостейб прт тзменении одной из них, срабатывает функция
 
//   console.log('useValidation19',isEmpty,minLengthError)

//   useEffect(() => {
//     if (
//       isEmpty ||
//       maxLengthError ||
//       minLengthError ||
//       nameError ||
//       emailError
//     ) {
//       setInputValid(false);
//     } else {
//       setInputValid(true);
//     }
//   }, [isEmpty, maxLengthError, minLengthError, nameError, emailError]);



//   const validate = (event, name, value, valid) => {
//     switch (name) {
//         case 'name':
           
//               !value ?   setErrors({
//                 ...errors,
//                 username:'пусто выросла капуста'
//             }):value.length < 3?  setErrors({
//                 ...errors,
//                 username:'MIN 3 letters'
//             }):value.length > 5? (setErrors({
//                 ...errors,
//                 username:'Max 5 letters'
//             })):(setErrors({
//                 ...errors,
//                 username:''
//             }))
//             break;
    
//         case 'email':
//             if(
//                 !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
//             ){
//                 setErrors({
//                     ...errors,
//                     email:'Enter a valid email address'
//                 })
//             }else{

        
                
//             }
//         break;
        
//         case 'password':
        
//             !value?    setErrors({
//                 ...errors,
//                 password:'пусто'
//             }):value.length < 8?  setErrors({
//                 ...errors,
//                 password:'MIN 8 letters'
//             }):!new RegExp(  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
//             ?(setErrors({
//                 ...errors,
//                 password:'Шаблон'
//             })):value.length > 16?(setErrors({
//                 ...errors,
//                 password:'Max 16 letters'
//             })):(setErrors({
//                 ...errors,
//                 password:''
//             }))
//         break;
        
//         default:
//             break;
//     }
    
// }


//   return {
//     isEmpty,
//     minLengthError,
//     maxLengthError,
//     nameError,
//     emailError,
//     inputValid,
//     errors,
//     validate
//   };

   
// };













