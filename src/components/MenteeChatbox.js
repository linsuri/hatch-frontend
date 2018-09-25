import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ActionCable } from 'react-actioncable-provider';
import * as actions from  '../actions';
import { API_ROOT } from '../constants';
import Cable from './Cable'
import NewConversationForm from './NewConversationForm'
import MessagesArea from './MessagesArea';
import NewMessageForm from './NewMessageForm'


// import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

class MenteeChatbox extends React.Component {

  state = {
    relationship: null,
    messages: [],
    // activeConversation: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/api/v1/relationships`)
      .then(res => res.json())
      .then(json => this.setState({
        relationship: json.filter(relationship => relationship.mentor.id === this.props.user.id).find(relationship => relationship.mentee.id === this.props.mentee.id),
        messages: json.filter(relationship => relationship.mentor.id === this.props.user.id).find(relationship => relationship.mentee.id === this.props.mentee.id).messages,
      })
      )
      // .then(json => console.log('json', json.filter(relationship => relationship.mentee.id === this.props.user.id).find(relationship => relationship.mentor.id === this.props.mentor.id).messages));
  };

  handleClick = id => {
    this.setState({ activeConversation: id });
  };

  handleReceivedConversation = response => {
    // console.log('response', response)
    const { message } = response;
    this.setState({
      messages: [...this.state.messages, message]
    }, () => console.log('setting state of messages', this.state.messages));
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const conversations = [...this.state.conversations];
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message];
    this.setState({ conversations });
  };



  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, ...other } = this.props;
    // const { conversations, messages } = this.props;
    // console.log('MenteeChatbox props', this.props)

    const { conversations, activeConversation } = this.state;

    return (
      <Dialog maxWidth="lg" onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <div style={{width:'600px', height:'800px'}}>
          {/* <div style={{width:'600px', height:'80px', backgroundColor:'black'}}>

          </div> */}


          <div className="messageList">
        <ActionCable
          channel={{ channel: 'MessagesChannel' }}
          onReceived={this.handleReceivedConversation}
        />
        {/* {this.state.conversations.length ? (
          <Cable
            conversations={conversations}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null} */}
        <h2>Messages</h2>
        <ul>
          {this.state.messages.map(message => <li key={message.id}>{message.text}</li>)}
        </ul>
        {/* <ul>{mapConversations(conversations, this.handleClick)}</ul> */}
        {/* <NewConversationForm /> */}
        {/* {activeConversation ? (
          <MessagesArea
            conversation={findActiveConversation(
              conversations,
              activeConversation
            )}
          />
        ) : null} */}
        <NewMessageForm relationship={this.state.relationship} />
      </div>


          {/* <div style={{position:'absolute', bottom:'0', width:'600px', height:'160px', backgroundColor:'black'}}>

          </div> */}
        </div>
      </Dialog>
    )
  }
}

function mapStateToProps(state) {
  // console.log('MenteeChatbox state', state);
  return {
    user: state.usersReducer.user,
    // conversations: state.dashboardReducer.conversations,
    // activeConversation: state.dashboardReducer.conversations,
  }
}

export default compose(
  // withStyles(styles),
  connect(mapStateToProps, actions)
)(MenteeChatbox);


const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    conversation => conversation.id === activeConversation
  );
};

const mapConversations = (conversations, handleClick) => {
  return conversations.map(conversation => {
    return (
      <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
        {conversation.title}
      </li>
    );
  });
};
