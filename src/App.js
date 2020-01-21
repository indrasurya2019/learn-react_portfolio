import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import MyCard from './components/MyCard';

function App() {
  return (
    <div className='App'>
      <Header />
      <Profile />
      <br />
      <hr />
      <h1 style={{ textAlign: 'center' }}>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corrupti
        provident rem aliquid dolores natus magnam enim soluta esse qui
        consequatur ratione repellendus debitis voluptates voluptas dolore
        voluptate impedit cumque nihil expedita! Impedit autem deserunt atque
        culpa nemo. Sequi, cupiditate.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corrupti
        provident rem aliquid dolores natus magnam enim soluta esse qui
        consequatur ratione repellendus debitis voluptates voluptas dolore
        voluptate impedit cumque nihil expedita! Impedit autem deserunt atque
        culpa nemo. Sequi, cupiditate.
      </p>
      <br />
      <br />
      <hr />
      <MyCard />
      <hr />
      <h3 style={{ textAlign: 'center' }}>
        contact me :indra.works2019@gmail.com
      </h3>
      <br />
      <hr />
      <div className='icons' style={{ textAlign: 'center' }}>
        <a style={{ color: 'black', margin: '5px' }} href='/#'>
          <i className='fab fa-twitter fa-2x'></i>
        </a>
        <a style={{ color: 'black', margin: '5px' }} href='/#'>
          <i className='fab fa-instagram fa-2x'></i>
        </a>
        <a style={{ color: 'black', margin: '5px' }} href='/#'>
          <i class='fab fa-linkedin fa-2x'></i>
        </a>
        <a style={{ color: 'black', margin: '5px' }} href='/#'>
          <i class='fab fa-facebook fa-2x'></i>
        </a>
      </div>
    </div>
  );
}

export default App;
