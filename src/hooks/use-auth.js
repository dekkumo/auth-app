import { useSelector } from "react-redux";

export function useAuth() {
  const {email, token, id} = useSelector(state => state.user)

  localStorage.setItem('email', JSON.stringify(email))

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}
