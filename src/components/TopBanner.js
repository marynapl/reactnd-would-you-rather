import React from 'react'
import LoginStatus from './LoginStatus'
import Nav from './Nav'

export default function TopBanner() {
  return (
    <header>
      <div className="grid-container">
        <div className="grid-x align-middle">
          <div className="cell small-12 medium-5 medium-order-2 text-right">
            <LoginStatus />
          </div>
          <div className="cell small-12 medium-7 medium-order-1">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )
} 