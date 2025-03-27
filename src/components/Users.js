import React from "react"
import User from "./User"

class Users extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        users: [
          {
              id: 1,
              firstName: 'Alex',
              lastName: 'Yannes',
              bio: 'Bloger, youtuber',
              age: 24,
              isHappy: true
          },
          {
              id: 2,
              firstName: 'Dima',
              lastName: 'Tretyakov',
              bio: 'Moishik, citizen',
              age: 42,
              isHappy: false 
          }
      ]
      }
    }
    render() {
        if(this.state.users.length > 0)
      return (
        <div>
            {this.state.users.map((el) => (
              <User key={el.id} user={el}/>
            ))}
        </div>
      )
      else
      return (
        <div className="user">
            <h3>Пользователей нет</h3>
        </div>
      )
    }
  }

  export default Users