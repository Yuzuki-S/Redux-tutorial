import React from 'react'
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'
// This might need to be turned into a stateful (class-based) component
const App = () => (
  <div className='app'>
    <h1>Cool People List:</h1>
    <UserList />
    <hr/>
    <h1>Cool People Details:</h1>
    <UserDetail />
  </div>
);

export default App
