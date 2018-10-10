import React from 'react'
import { connect } from 'react-redux'
import * as actions from  '../actions'
import NewMessageForm from './NewMessageForm'

import Dialog from '@material-ui/core/Dialog'

const MentorChatbox = props => {

  const handleClose = () => {
    props.onClose(props.selectedValue)
  }

  const { classes, ...other } = props

  return (
    <Dialog maxWidth="lg" onClose={handleClose} aria-labelledby="simple-dialog-title" open={other.open}>
      <div style={{width:'600px', height:'800px'}}>
        <div style={{position: 'absolute', top: 0, width: '100%', height:'10%', backgroundColor: '#3f51b5', display: 'block'}}>
          <h3 style={{position: 'relative', top: 5, textAlign: 'center', color: 'white'}}>
            {props.mentor ? `${props.mentor.first_name} ${props.mentor.last_name}` : null}
          </h3>
        </div>
        <div style={{position: 'absolute', top: 66, width: '100%', height: '76%', overflow: 'scroll', display: 'block'}}>
          <ul style={{listStyleType: 'none'}}>
          {
            props.messages.map(message => {
              let floatStyle = (message.user_id === props.user.id) ? "right" : "left"
              return <li style={{clear: 'both', padding: '10px 17px 10px 17px', margin: '10px 50px 10px 10px', borderRadius: '15px', backgroundColor: '#dadce8', textAlign: floatStyle, float: floatStyle}} key={message.id}>{message.text}</li>
            })
          }
          </ul>
        </div>
        <div style={{position: 'absolute', bottom: 0, width: '100%', height: '13%', marginLeft: '25px'}}>
          {props.relationship ? <NewMessageForm relationship={props.relationship} /> : null}
        </div>
      </div>
    </Dialog>
  )
}

function mapStateToProps({ usersReducer: { user } }) {
  return {
    user,
  }
}

export default connect(mapStateToProps, actions)(MentorChatbox)
