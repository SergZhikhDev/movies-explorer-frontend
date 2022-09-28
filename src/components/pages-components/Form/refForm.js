//  отказ от рендеринга
import React, { useRef,useContext, useState } from "react";
import "./form.css";
import { FormInput } from "./FormInput";
 
export const Form =()=> {
    // const [userName, setUserName] = useState('')1del
//  const userNameRef = useRef() 2del

 
    console.log('рендер+')
    const handleSubmit =(e)=>{
        e.preventDefault();
        //    console.log(userNameRef) 2del
        // const data = new FormData(e.target)
        // console.log(Object.fromEntries(data.entries()))

        const data = Object.fromEntries(new FormData(e.target).entries())
        console.log(data.name)
    }
    return (
    <div className="trApp">
        <form onSubmit={handleSubmit} >
            <FormInput 
            // refer= {userNameRef} 2del
            name='name' 
             placeholder='User'></FormInput>
            <FormInput name='email' placeholder='Email'></FormInput>
            <FormInput name='password' placeholder='Password'></FormInput>
            <button>Submit</button>
        </form>
    </div>)
} 
// 
// import React, { useContext, useState } from "react";
// import "./FormInput.css";
 
//  export const FormInput =(props)=> {
//     return <div className="trformInput">
//         {/* <label>User</label> */}
//         <input 
//         // ref = {props.refer}
//         name={props.name}
//          placeholder={props.placeholder} 
//         //  onChange={e=>props.setUserName(e.target.value)} заменили на реф
         
//          />
//     </div>
// }













