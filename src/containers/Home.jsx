import React from "react";
import { connect } from "react-redux";

import Nav from "../components/Nav";
import Header from "../components/Header";

import { logoutUser } from "../actions/logout";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.props.dispatch(logoutUser());
  }

  render() {
    const { auth } = this.props;
    return (
      <div>
        <Header />
        <Nav auth={auth} handleLogOut={this.handleLogOut} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Home);
