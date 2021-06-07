import React from "react";
import Image from "../assets/signup.png";
import Input from "./common/Input";
import CheckboxInput from './common/CheckboxInput';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="top">
        <div className="inner">
          <div>
            <h1>Sign up</h1>
            <p>Become part of the family</p>
          </div>
          <img src={Image} />
        </div>
      </div>
      <form className="form-container">
        <div className="form-row">
          <Input label="Surname" type="text" name='surname' placeholder='Enter Surname'/>
          <Input label="Email" type="email" name='email' placeholder='Enter Email'/>
          <Input label="Create Password" type="password" name="password" placeholder='*****'/>
          <CheckboxInput />
          <Input label="Next of Kin" type="text" name='next-of-kin' placeholder=''/>
          <Input label="Place of work" type="text" name='place-of-work' placeholder='What is the name of your company or business'/>
        </div>
        <div className="form-row">
           <Input label="First Name" type="text" name='first-name' placeholder='Enter First Name'/>
          <Input label="Date of Birth" type="text" name='dob' placeholder='xx/xx/xx'/>
          <Input label="Re-enter Password" type="password" name='confirm-password' placeholder='*****'/>
          <Input label="Next of Kin Relationship" type="text" name='kin-rel' placeholder=''/>
          <Input label="Profession" type="text"  name='prefession' placeholder='What do you do'/>
        </div>
        <div className="form-row">
          <Input label="Others" type="text" name='middle-name' placeholder='Enter middle name'/>
          <Input label="Address" type="text" name='address' placeholder='Enter your Address'/>
          <Input label="Number of Children" type="text"  name='children' placeholder='Enter the number of children you have'/>
        </div>
      </form>
    </div>
  );
};

export default Signup;
