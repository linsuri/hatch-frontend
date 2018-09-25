import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { API_ROOT, HEADERS } from '../constants';

class NewMessageForm extends React.Component {
  state = {
    text: '',
    relationship_id: this.props.relationship.id,
    user_id: this.props.user_id
  };

  // componentWillReceiveProps = nextProps => {
  //   this.setState({ conversation_id: nextProps.conversation_id });
  // };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/api/v1/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: '' });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

function mapStateToProps(state) {
  // console.log('Dashboard state', state);
  return {
    user_id: state.usersReducer.user.id,
  }
}

export default compose(
  // withStyles(styles),
  connect(mapStateToProps, null)
)(NewMessageForm);
