import React from "react"
import User from "./User"

class Users extends React.Component {
    
  render() {
    const { users, onDelete } = this.props;
    return users.length > 0 ? (
      <div>
        {users.map((el) => (
          <User onDelete={onDelete} key={el.id} user={el} />
        ))}
      </div>
    ) : (
      <div className="user">
        <h3>Пользователей нет</h3>
      </div>
    );
  }

   


  }

  export default Users