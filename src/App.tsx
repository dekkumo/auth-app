import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import SignUp from './components/SignUp/SignUp'
import MainPage from './components/MainPage/MainPage';
import MyProfile from './components/MyProfile/MyProfile';
import PrivatePage from './components/PrivatePage/PrivatePage';
import AuthPage from './components/AuthPage/AuthPage';
import Posts from './components/Posts/Posts';
import Theme from './components/Theme/Theme';
import { useAppSelector } from './hook';

const App: React.FC = () => {

  const theme = useAppSelector(state => state.theme)

  return (
    <BrowserRouter>
      <Theme />
      <div className={theme === 'light' ? 'wrapper light_wrapper' : 'wrapper dark_wrapper'}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<AuthPage />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>
          <Route element={<PrivatePage />}>
            <Route path='/mainpage' element={<MainPage />} />
            <Route path='/profile' element={<MyProfile />} />
            <Route path='/posts' element={<Posts />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
