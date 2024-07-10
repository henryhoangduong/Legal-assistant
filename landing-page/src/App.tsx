import React from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import { theme } from './themes'
import { Hero } from './section/Hero'
import { NavBar } from './components/NavBar'
import { Feature } from './section/Feature'
import { Blog } from './section/Blog'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Hero />
      <Feature />
      <Blog />
    </ThemeProvider>
  )
}

export default App
