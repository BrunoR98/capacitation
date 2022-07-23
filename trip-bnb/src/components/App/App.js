import React from 'react';

//Components
import Header from '../Header/Header';
import TripMaker from '../TripMaker/TripMaker'

//Context
import UserContext from '../Context/UserContext/UserContext';

//Utils
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
