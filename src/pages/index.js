import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'


function IndexPage() {
  const [darkMode, setDarkMode] = useState(false)
  const darkTheme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header setMode={setDarkMode} darkMode={darkMode} />
      <HeroSection /> 
      <ProjectSection darkMode={darkMode} /> 
      <Footer />
    </ThemeProvider>
  )
}

export default IndexPage;