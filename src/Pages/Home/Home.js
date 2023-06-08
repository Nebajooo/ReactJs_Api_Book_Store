import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home;

//npm install react-router-dom@6, npm install react-icons --save