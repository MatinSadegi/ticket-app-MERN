import React, { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import authImage from '../../images/question.jpg';
import EmployeeSignIn from './Employees/EmployeeSignIn';
import StudentSignUp from './Students/StudentSignUp';
import SignIn from './Students/SignIn';


const Auth = () => {
      const [isStudent, setIsStudent] = useState(true);
      const [isSignUp, setIsSignUp] = useState(true);
  return (
    <div className='min-h-screen sm:h-screen relative flex overflow-hidden '>
      <ErrorMessage />
      <img
        src={authImage}
        alt='authImage'
        className='hidden lg:block w-[35%] h-full'
      />
      {isSignUp && isStudent && <StudentSignUp setIsSignUp={setIsSignUp} setIsStudent={setIsStudent} />}
      {isSignUp && !isStudent && <EmployeeSignIn setIsSignUp={setIsSignUp} setIsStudent={setIsStudent} />}
      {!isSignUp && <SignIn setIsSignUp={setIsSignUp}/>} 
    </div>
  );
};

export default Auth;
