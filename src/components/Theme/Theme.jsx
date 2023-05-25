import React, { useEffect } from 'react'
import cl from './Theme.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../store/slices/themeSlice'
import cn from 'classnames'

const Theme = ({className}) => {

  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(toggleTheme(next))
  }

  return (
    <div 
      onClick={handleChange}
      className={cn(
    		className,
    		cl.root,
    		theme === 'dark' ? cl.dark : cl.light)}
    >
    </div>
  )
}

export default Theme