import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {
    render() {
        const { user } = this.props;
        return (
          <div className="user">
            <IoCloseCircleSharp onClick={() => this.props.onDelete(user.id)} className="delete-icon"/>
            <IoHammerSharp className="edit-icon"/>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.bio}</p>
            <b>{user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
          </div>
        );
      }
  }

  export default User