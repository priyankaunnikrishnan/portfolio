import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
    </div>
    

  );
}

export default App
