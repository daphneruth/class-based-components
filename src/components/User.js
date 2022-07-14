import classes from './User.module.css';
import { Component } from 'react/cjs/react.production.min';

class user extends Component {
  render() {
    return <li Component={classes.user}>{this.props.name}</li>
  }
}
//const User = (props) => {
  //return <li className={classes.user}>{props.name}</li>;
//};

export default user;
