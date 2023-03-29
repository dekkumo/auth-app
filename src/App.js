import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import SignUp from './components/SignUp/SignUp'
import MainPage from './components/MainPage/MainPage';
import MyProfile from './components/MyProfile/MyProfile';
import PrivatePage from './components/PrivatePage/PrivatePage';
import AuthPage from './components/AuthPage/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<AuthPage />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
        <Route element={<PrivatePage />}>
          <Route path='/mainpage' element={<MainPage />} />
          <Route path='/profile' element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
