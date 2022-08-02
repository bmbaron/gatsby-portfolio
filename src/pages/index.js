import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
})

function indexPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection /> 
      <ProjectSection /> 
      <Footer />
    </ThemeProvider>
  )
}

export default indexPage;