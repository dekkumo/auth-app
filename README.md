# Auth App 

Авторизация на **React** с использованием _firebase_ и _redux toolkit_

Функционал:
- Роутинг
- Ограничение переходов на определенные страницы, если пользователь не авторизован
  `const AuthPage = () => {
    const location = useLocation()
    let {isAuth} = useAuth()

    return isAuth ? (
      <Navigate to='/mainpage' state={{from: location}} />
    ) : (
      <Outlet />
    )
  }`
- Данные пользователя сохраняются в firebase
