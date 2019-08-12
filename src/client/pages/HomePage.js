import React, { PureComponent } from 'react';

const Home = () => {
  return (
    <div>
      I'm the home component!!.
      <button onClick={() => { console.log('asdfasdf') }}>Press me!</button>
    </div>
  );
}

export default {
  component: Home
};