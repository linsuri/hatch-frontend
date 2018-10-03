import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { API_ROOT, HEADERS } from '../constants';
// import withAuth from '../hocs/withAuth'

import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 530
  },
});

class NewMessageForm extends React.Component {
  state = {
    text: '',
    relationship_id: this.props.relationship.id,
    user_id: this.props.user_id
  };

  // componentWillReceiveProps = nextProps => {
  //   this.setState({ conversation_id: nextProps.conversation_id });
  // };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    if (event.key === 'Enter' && this.state.text !== '') {
      fetch(`${API_ROOT}/api/v1/messages`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({message: this.state})
      })
      this.setState({ text: '' });
    }
  };

  render = () => {
    // console.log('newmessage props', this.props)
    const { classes } = this.props;

    return (
      <div className="newMessageForm">
        <TextField
          id="new-message"
          placeholder="Send your message here"
          multiline
          className={classes.textField}
          margin="normal"
          variant="filled"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyUp={this.handleSubmit}
        />
        {/* <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
          />
          <input type="submit" />
        </form> */}
      </div>
    );
  };
}

NewMessageForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // console.log('Dashboard state', state);
  return {
    user_id: state.usersReducer.user.id,
  }
}

// export default withAuth(compose(
//   withStyles(styles),
//   connect(mapStateToProps, null)
// )(NewMessageForm));
export default compose(
  withStyles(styles),
  connect(mapStateToProps, null)
)(NewMessageForm)
