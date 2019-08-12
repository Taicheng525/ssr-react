import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log('asdfasdfa', auth);
  return (
    <div>
      <Link to="/"> React SSR</Link>
      <br/>
      <a href="http://10.249.213.229/login">asdfasfd</a>
    </div>
  )
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);