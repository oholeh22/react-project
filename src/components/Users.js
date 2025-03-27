import React from "react"

class Users extends React.Component {
    users = [
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
    render() {
        if(this.users.length > 0)
      return (
        <div>
            {this.users.map((el) => (<div className="user" key={el.id}> 
                <h3>{el.firstName} {el.lastName}</h3>
                <p>{el.bio}</p>
                <b>{el.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
            </div>))}
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