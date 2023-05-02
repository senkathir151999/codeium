import React, { useState } from 'react';
import Input from '../../Components/Input';
import axios from 'axios';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation for name
    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }

    // Validation for email
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }

    // Validation for password
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }

    // Validation for confirm password
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
    console.log(name, email, password, confirmPassword);
    if (name && email && password && confirmPassword) {
      submit();
    }
  }
//   const submit = async () => {

//     try {
//       const response = await axios.post('/api/login', { email, password });
//       const { token } = response.data;

//       localStorage.setItem('token', token);
//       window.location.reload();
//     } catch (error) {
//       console.error(error);
//     }
//   };
  return (
  <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <Input
        id="name"
        label="Name"
        name="name"
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={handleNameChange}
        error={nameError}
      />
      <Input
        id="email"
        label="Email"
        name="email"
        type="email"
        value={email}
        placeholder="Enter your email address"
        onChange={handleEmailChange}
        error={emailError}
      />
      <Input
        id="password"
        label="Password"
        name="password"
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={handlePasswordChange}
        error={passwordError}
      />
      <Input
        id="confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        placeholder="Confirm your password"
        onChange={handleConfirmPasswordChange}
        error={confirmPasswordError}
      />
      <button type="submit">Sign Up</button>
    </form>
  </>
  );
}

export default SignUpForm;