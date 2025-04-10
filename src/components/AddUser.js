import React from "react";
import PixelButton from "./PixelButton";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      bio: "",
      age: 1,
      isHappy: false,
    };
  }

  componentDidMount() {
    if (this.props.user) {
      this.setState({ ...this.props.user });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.user &&
      this.props.user.id !== (prevProps.user && prevProps.user.id)
    ) {
      this.setState({ ...this.props.user });
    }
  }

  handleSubmit = () => {
    const userAdd = { ...this.state };
    if (this.props.user) userAdd.id = this.props.user.id;
    this.props.onAdd(userAdd);
    this.setState({
      first_name: "",
      last_name: "",
      bio: "",
      age: 1,
      isHappy: false,
    });
  };

  render() {
    return (
      <form>
        <input
          placeholder="Имя"
          value={this.state.first_name}
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          placeholder="Фамилия"
          value={this.state.last_name}
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <textarea
          placeholder="Биография"
          value={this.state.bio}
          onChange={(e) => this.setState({ bio: e.target.value })}
        ></textarea>
        <input
          placeholder="Возраст"
          type="number"
          value={this.state.age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="isHappy">Счастлив?</label>
        <input
          type="checkbox"
          id="isHappy"
          checked={this.state.isHappy}
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />

        <PixelButton onClick={this.handleSubmit}>
          {this.props.user ? "Сохранить" : "Добавить"}
        </PixelButton>
      </form>
    );
  }
}

export default AddUser;