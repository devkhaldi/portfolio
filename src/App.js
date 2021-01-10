import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='container'>
      <form className='form'>
        <div className='form-group mt-1'>
          <label>Enter first name</label>
          <input type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label>Enter first name</label>
          <input type='text' className='form-control' />
        </div>
      </form>
      <button className='btn btn-success'>Click me</button>
    </div>
  )
}

export default App
