import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { set } from 'mongoose';
import React from 'react'
import { data, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

export default function SignIn() {
  const [formData, setFormData] = React.useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim()
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill in all fields.'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } 
    catch(error) { 
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to="/" className='whitespace-nowrap font-bold dark:text-black text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>FANA</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign in with your email and password
            or with your Google account.
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Email' />
              <TextInput type='email' placeholder='abc@xyz.com' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Password' />
              <TextInput type='password' placeholder='Enter Password' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className='pl-3'>Loading...</span>
                  </>                  
                ) : 'Sign In'
              }
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Dont have an account?</span>
            <Link to='/sign-up' className='text-blue-500 hover:underline ml-1'>
              Sign Up 
            </Link>
          </div>
          {errorMessage && (
            <Alert color='failure' className='mt-5'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>      
    </div>
  );
}
