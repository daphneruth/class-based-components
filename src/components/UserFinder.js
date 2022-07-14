import { Fragment, useState, useEffect } from 'react';

import Users from './Users';

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(this.props.users);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      this.props.users.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <input type='search' onChange={searchChangeHandler} />
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;