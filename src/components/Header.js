import React from 'react';

function Header() {
  const headerStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    backgroundColor: 'lavender',
    paddingTop: '50px',
    paddingBottom: '50px',
    marginBottom: '10px'
  }
  const h1Header = {
    fontWeight: 'bold'
  }
  return (
    <div className="page-header" style={headerStyle}>
      <h1 style={h1Header}>Revenge of Pierre</h1>
    </div>
  )
}

export default Header;