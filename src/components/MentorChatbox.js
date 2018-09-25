import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ActionCable } from 'react-actioncable-provider';
import * as actions from  '../actions';
import { API_ROOT } from '../constants';
import Cable from './Cable'
import NewConversationForm from './NewConversationForm'
import MessagesArea from './MessagesArea';



// import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

class MentorChatbox extends React.Component {

  state = {
    conversations: [],
    activeConversation: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/api/v1/conversations`)
      .then(res => res.json())
      .then(conversations => this.setState({ conversations }));
  };

  handleClick = id => {
    this.setState({ activeConversation: id });
  };

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.setState({
      conversations: [...this.state.conversations, conversation]
    });
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
    console.log('MentorChatbox props', this.props)

    const { conversations, activeConversation } = this.state;

    return (
      <Dialog maxWidth="lg" onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <div style={{width:'600px', height:'800px'}}>
          {/* <div style={{width:'600px', height:'80px', backgroundColor:'black'}}>

          </div> */}


          <div className="conversationsList">
        <ActionCable
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleReceivedConversation}
        />
        {this.state.conversations.length ? (
          <Cable
            conversations={conversations}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>Conversations</h2>
        <ul>{mapConversations(conversations, this.handleClick)}</ul>
        <NewConversationForm />
        {activeConversation ? (
          <MessagesArea
            conversation={findActiveConversation(
              conversations,
              activeConversation
            )}
          />
        ) : null}
      </div>


          {/* <div style={{position:'absolute', bottom:'0', width:'600px', height:'160px', backgroundColor:'black'}}>

          </div> */}
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
