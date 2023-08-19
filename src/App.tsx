import * as React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/MainSection/Main';


function App() {
  return (
  <>
    <div className='App'>
    <Header title={'Wine With Me'}/>
    </div>
    <Main handleOnClick={()=> {console.log('Wine Selected')}}/>
    <Footer/>
  </>
  );
}

export default App;
