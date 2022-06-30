import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SearchBar from './component/search_bar'
import SearchBar2 from './component/search_bar2'
import UserList from './component/user_list'
import UserDetail from './component/user_detail'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  getFakeMembers = (count, nat, gen) =>
    new Promise((resolves, rejects) => {
      const api = `https://api.randomuser.me/?nat=${nat}&gender=${gen}&results=${count}`;
      const request = new XMLHttpRequest();
      request.open("GET", api);
      request.onload = () =>
        request.status === 200 ?
          resolves(JSON.parse(request.response).results) :
          rejects(Error(request.statusText));
      request.onerror = (err) => rejects(err);
      request.send();
    });

  userSearch(count, nat, gen) {
    this.getFakeMembers(count, nat, gen).then(
      (users) => this.setState({ users, selectedNat: nat, selectedGender: gen, selectedUser: users[0] }),
      (err) => console.log(new Error("failed"))
    );
  }

  constructor(props) {
    super(props)

    this.state = {
      users: [],
      selectedNat: "",
      selectedGender: "",
      selectedUser: "",
    }
    this.userSearch(5, "US", "female")

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchBar onSearchTermChange={(term) => this.userSearch(5, term, this.state.selectedGender)} />
          <SearchBar2 onSearchTermChange={(term2) => this.userSearch(5, this.state.selectedNat, term2)} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <UserList
                users={this.state.users}
                onUserSelect={(selectedUser) => this.setState({ selectedUser })}
              />
            </div>
            <div className="col-md-6">
              <UserDetail user={this.state.selectedUser} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
