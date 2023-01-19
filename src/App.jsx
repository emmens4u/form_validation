import { useState } from 'react'
import FormInput from './components/FormInput';
import './index.css'

function App() {

  return (
    <form className='flex flex-col justify-center items-center  h-full'>
      <FormInput placeholder="Username" />
      <FormInput placeholder="Email" />
      <FormInput placeholder="Full Name" />
      <FormInput placeholder="Phone Number" />
    </form>
  );
}

export default App
