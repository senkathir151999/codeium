import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import Profile from './Profile';
import SignUpForm from './Pages/Signup';
import Layout from './Utilities/Layout';

function App() {
  console.log("appppp")
  return (
  <Router>
      <Routes>
        {console.log("console")}
      <Route exact path="/signup" element={<SignUpForm/>} />
      {/* <Route exact path="/login" component={LoginForm} />
      <PrivateRoute exact path="/" component={Home} /> */}
     <Route exact path="/" element={<Layout/>}> 
     <Route exact path="/home" element={<Home/>} />
     </Route>
    </Routes>
  </Router>
  );
}

export default App;