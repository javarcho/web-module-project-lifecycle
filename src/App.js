import React from 'react'
import './App.css';

import User from './components/User';
import Followers from './components/Followers';
import Following from './components/Following';

export default function App() {
  return (
    <div className="container">
    <div className="header">
    </div>
    <User/>

    <Followers/>
    <Following/>

    </div>

  )
}