import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './pages/HomePage/HomePage';
import Message from './pages/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileAction } from './redux/Auth/auth.action';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store => store);

  useEffect(() => {
    dispatch(getProfileAction(jwt))
  }, [jwt])

  return (
    <div className="">
      {/* <Authentication></Authentication>       */}
     
      <Routes>
        <Route path='/*' element={auth.user?<HomePage/> : <Authentication/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/*' element={<Authentication/>}/>

     
      </Routes>
    </div>
  );
}

export default App;
