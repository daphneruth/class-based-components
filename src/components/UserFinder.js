import { Fragment, useState, useEffect } from 'react';
import { Component } from 'react/cjs/react.production.min';

import Users from './Users';

class UserFinder extends Component {
    constructor() {
        this.state = {
            filteredUsers:DUMMY_USERS,
            searchTerm:'',
        }
    }


//const UserFinder = () => {
  //const [filteredUsers, setFilteredUsers] = useState(this.props.users);
  //const [searchTerm, setSearchTerm] = useState('');

  //useEffect(() => {
    //setFilteredUsers(
      ComponentDidUpdate(prevProps, prevState) {
        
    this.state({
    filteredUsers:DUMMY_USERS.filter((user) =>
     user.name.includes(searchTerm)
     ),
    })
    
  }


  const searchChangeHandler = (event) => {
    setSearchTerm({searchTerm:event.target.value});
  };
render() {
  return (
    <Fragment>
      <input type='search' onChange={searchChangeHandler} />
      <Users users={filteredUsers} />
    </Fragment>
  );
} 

};

export default UserFinder;