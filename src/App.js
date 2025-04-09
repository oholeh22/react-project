import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
  constructor(props) {
    super(props);

    const savedUsers = localStorage.getItem("users");
    this.state = {
      users: savedUsers
        ? JSON.parse(savedUsers)
        : [
            {
              id: 1,
              firstName: "Alex",
              lastName: "Yannes",
              bio: "Bloger, youtuber",
              age: 24,
              isHappy: true,
            },
            {
              id: 2,
              firstName: "Dima",
              lastName: "Tretyakov",
              bio: "Moishik, citizen",
              age: 42,
              isHappy: false,
            },
          ],
    };

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      localStorage.setItem("users", JSON.stringify(this.state.users));
    }
  }

  render() {
    return (
      <div>
        <Header title="Список пользователей" />
        <main>
          <Users
            users={this.state.users}
            onEdit={this.editUser}
            onDelete={this.deleteUser}
          />
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    );
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
  }

  editUser(updatedUser) {
    const updatedUsers = this.state.users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    this.setState({ users: updatedUsers });
  }

  addUser(user) {
    const maxId = this.state.users.reduce(
      (max, u) => (u.id > max ? u.id : max),
      0
    );
    const id = maxId + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }
}

export default App;
