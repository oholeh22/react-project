import React from "react"
import AddUser from "./AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false
    }
  }
    render() {
        const { user } = this.props;
        return (
          <div className="user">
            <IoCloseCircleSharp onClick={() => this.props.onDelete(user.id)} className="delete-icon"/>
            <IoHammerSharp onClick={() =>
              this.setState({
                editForm: !this.state.editForm
              })
             } className="edit-icon"/>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.bio}</p>
            <b>{user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>

            {this.state.editForm && <AddUser />}
          </div>
        );
      }
  }

  export default User