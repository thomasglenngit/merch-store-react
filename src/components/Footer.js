import React from 'react';

function Footer() {
  const footerStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    backgroundColor: 'orange',
    paddingTop: '25px',
    paddingBottom: '25px',
    marginBottom: '10px'
  }
  const h1Footer = {
    fontWeight: 'bold'
  }
  return (
    <div className="page-footer" style={footerStyle}>
      <h3 style={h1Footer}>Copyright: Joseph, Micheal, Taylor & Thomas; 2020</h3>
      <h5>We're almost out of bootcamp, hire us please!</h5>
    </div>
  )
}

export default Footer;