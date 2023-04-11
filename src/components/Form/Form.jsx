import React, {useState} from 'react';
import './Form.css';
 
function Form() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    const handleSubmit=(e)=>{
      if(password !== confPassword)
      {
        alert("password Not Match");
      }
      else{
        alert('A form was submitted with Name :"' + name +
         +'" and Email :"' + email + '"');
         
      }
      e.preventDefault();
 
    }
  return (
    <div className="form-section">
    <header className="form-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
    <h2> Sign up for the newsletter</h2>
    <div className="img-container">
        <img src="https://www.hiusa.org/wp-content/uploads/2020/04/Alamo-Square-Park-SF-Holger-Link-unsplash-1000x550-compressor.jpg"  alt='error'/>
    </div>
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br/>
        <label>
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
        <label>
          Password:
        </label><br/>
        <input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}} /><br/>
        <label>
          Confirm Password:
        </label><br/>
        <input type="password" value={confPassword} required onChange={(e) => {handleConfPasswordChange(e)}} /><br/>
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
  );
}
 
export default Form;