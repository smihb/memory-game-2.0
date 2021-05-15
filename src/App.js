import React from 'react';
import Board from './components/Board';
import Header from './components/header';
import Menu from './components/menu';
import './css/App.css';
import 'font-awesome/css/font-awesome.css';
import { useSelector } from 'react-redux';
import dealer from './functions/dealCards';

const App = () => {
  const showMenu = useSelector(state=>state.showMenu)
  const showBoard = useSelector(state=>state.showBoard)
  const pairs = useSelector(state=>state.pairs)
  const cards = dealer(pairs)
  return (
    <div className="App">
      <Header />
      {showMenu && <Menu/>}
      {showBoard && <Board cards={cards}/>}
    </div>
  );
}

export default App;
