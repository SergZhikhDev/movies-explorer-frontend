import  { useState } from 'react'
// import {omit} from 'lodash'
import { useValidation } from './useValidation';

const useForm = (callback, validationsConfig) => {
    
    //Form values
    const [values, setValues] = useState({});
    //Errors
    // const [errors, setErrors] = useState({});
    const valid = useValidation(values, validationsConfig); //value-значенин, validations-обект с видами валидации


//     const validate = (event, name, value, valid) => {
//         //A function to validate each input values
// const erUsN = 'MIN 3 letters'

//         switch (name) {
//             case 'name':
               
//                 !   value ?   setErrors({
//                     ...errors,
//                     username:'пусто'
//                 }):value.length < 3?  setErrors({
//                     ...errors,
//                     username:erUsN
//                 }):value.length > 5? (setErrors({
//                     ...errors,
//                     username:'Max 5 letters'
//                 })):(setErrors({
//                     ...errors,
//                     username:''
//                 }))
//                 break;
        
//             case 'email':
//                 if(
//                     !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
//                 ){
//                     setErrors({
//                         ...errors,
//                         email:'Enter a valid email address'
//                     })
//                 }else{

//                     // let newObj = omit(errors, "email");
//                     // setErrors(newObj);
                    
//                 }
//             break;
            
//             case 'password':
            
//                 !value?    setErrors({
//                     ...errors,
//                     password:'пусто'
//                 }):value.length < 8?  setErrors({
//                     ...errors,
//                     password:'MIN 8 letters'
//                 }):!new RegExp(  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
//                 ?(setErrors({
//                     ...errors,
//                     password:'Шаблон'
//                 })):value.length > 16?(setErrors({
//                     ...errors,
//                     password:'Max 16 letters'
//                 })):(setErrors({
//                     ...errors,
//                     password:''
//                 }))
//             break;
            
//             default:
//                 break;
//         }
        
//     }

  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

       valid.validate(event,name,val);
        //Let's set these values in state

        setValues({
            ...values,
            [name]:val,
        })

    }


    const handleSubmit = (e) => {
     e.preventDefault(e);

            callback();


    }
    const onBlur = (e) => {

    };

    return {
        values,
        // errors,
        onBlur,
        handleChange,
        handleSubmit,
        ...valid,
    }
}

export default useForm
