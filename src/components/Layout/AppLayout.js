import React from 'react'
import Navbar from '../Navbar'
import Footer from './Footer'

const AppLayout = ({ children, showTrackApplication, isLoggedIn, onSignOut, signout }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar showTrackApplication={showTrackApplication} isLoggedIn={isLoggedIn} onSignOut={onSignOut} signout={signout} />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
