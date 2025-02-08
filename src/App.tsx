import { Box } from '@chakra-ui/react'
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'
import Projects from './components/sections/Projects/Projects'
import Contact from './components/sections/Contact/Contact'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import FloatingColorMode from './components/common/FloatingColorMode'

export default function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box as="main" flex="1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
      <Footer />
      <FloatingColorMode />
    </Box>
  )
} 