import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ActionCable } from 'react-actioncable-provider';
import * as actions from  '../actions';
import { API_ROOT } from '../constants';
// import Cable from './Cable'
// import NewConversationForm from './NewConversationForm'
// import MessagesArea from './MessagesArea';
import NewMessageForm from './NewMessageForm'


// import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

class MentorChatbox extends React.Component {

  state = {
    relationship: null,
    messages: [],
    // activeConversation: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/api/v1/relationships`)
      .then(res => res.json())
      .then(json => this.setState({
        relationship: json.filter(relationship => relationship.mentee.id === this.props.user.id).find(relationship => relationship.mentor.id === this.props.mentor.id),
        messages: json.filter(relationship => relationship.mentee.id === this.props.user.id).find(relationship => relationship.mentor.id === this.props.mentor.id).messages,
      })
      )
  };

  handleReceivedMessage = response => {
    // console.log('response', response)
    const { message } = response;
    this.setState({
      messages: [...this.state.messages, message]
    });
  };

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, ...other } = this.props;

    return (
      <Dialog maxWidth="lg" onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={other.open}>
        <div style={{width:'600px', height:'800px'}}>
          <ActionCable
            channel={{ channel: 'MessagesChannel' }}
            onReceived={this.handleReceivedMessage}
          />
          <div style={{position: 'absolute', top: 0, width: '100%', height:'10%', backgroundColor: '#3f51b5', display: 'block'}}>
            <h3 style={{position: 'relative', top: 5, textAlign: 'center', color: 'white'}}>
              {this.props.mentor ? `${this.props.mentor.first_name} ${this.props.mentor.last_name}` : null}
            </h3>
          </div>
          <div style={{position: 'absolute', top: 66, width: '100%', height: '76%', overflow: 'scroll', display: 'block'}}>
            <ul style={{listStyleType: 'none'}}>
            {
              this.state.messages.map(message => {
                let floatStyle = (message.user_id === this.props.user.id) ? "right" : "left"
                return <li style={{clear: 'both', padding: '10px 17px 10px 17px', margin: '10px 50px 10px 10px', borderRadius: '15px', backgroundColor: '#dadce8', textAlign: floatStyle, float: floatStyle}} key={message.id}>{message.text}</li>
              })
            }
            </ul>
          </div>
          <div style={{position: 'absolute', bottom: 0, width: '100%', height: '13%', marginLeft: '25px'}}>
            {this.state.relationship ? <NewMessageForm relationship={this.state.relationship} /> : null}
          </div>
        </div>
      </Dialog>
    )
  }
}

function mapStateToProps(state) {
  // console.log('MentorChatbox state', state);
  return {
    user: state.usersReducer.user,
    // conversations: state.dashboardReducer.conversations,
    // activeConversation: state.dashboardReducer.conversations,
  }
}

export default compose(
  // withStyles(styles),
  connect(mapStateToProps, actions)
)(MentorChatbox);

//
// const findActiveConversation = (conversations, activeConversation) => {
//   return conversations.find(
//     conversation => conversation.id === activeConversation
//   );
// };
//
// const mapConversations = (conversations, handleClick) => {
//   return conversations.map(conversation => {
//     return (
//       <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
//         {conversation.title}
//       </li>
//     );
//   });
// };
