import { Fragment, useState, useEffect } from 'react';
import { Component } from 'react/cjs/react.production.min';

import Users from './Users';
const DUMMY_USERS = [
    
    {id: 'u1', name:'Max'},
    {id: 'u2', name:'Manuel'},
    {id: 'u3', name:'Julie'},
]



class UserFinder extends Component {
    constructor() {
        super();
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
        if(prevState.searchTerm !== this.state.searchTerm){

        
    this.state({
    filteredUsers:DUMMY_USERS.filter((user) =>
     user.name.includes(this.state.searchTerm)
     ),
    })
}
  }


   searchChangeHandler = (event) => {
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