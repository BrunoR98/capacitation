import React from 'react';
import Header from '../Header/Header';
import TripMaker from '../TripMaker/TripMaker'
import UserContext from '../Context/UserContext/UserContext';
import { user } from '../utils/User';

function App() {
  return (
    <>
      <UserContext.Provider value={user}>
        <Header />
      </UserContext.Provider>
      <TripMaker />
    </>
    );
}

export default App;
