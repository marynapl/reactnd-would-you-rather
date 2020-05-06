import React from 'react'
import LoginStatus from './LoginStatus'
import Nav from './Nav'

export default function TopBanner() {
  return (
    <header>
      <div className="grid-container">
        <div className="grid-x align-middle">
        <div className="cell small-12 medium-6 medium-order-2 medium-text-right">
            <LoginStatus />
          </div>
          <div className="cell small-12 medium-6 medium-order-1">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )
} 