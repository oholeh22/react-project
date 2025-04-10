import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      this.setState({ users: JSON.parse(savedUsers) });
    } else {
      axios.get(baseUrl).then((res) => {
        this.setState({ users: res.data.data });
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      localStorage.setItem("users", JSON.stringify(this.state.users));
    }
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
}

export default App;
