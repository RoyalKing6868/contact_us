import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import ContactForm from './Components/ContactFrom/ContactForm'
function App() {
  return (
    <div className='container'>
      <Navigation/>
      <main className='main_container'>
        <ContactHeader/>
        <ContactForm/>
      </main>
    </div>
  )
}

export default App
