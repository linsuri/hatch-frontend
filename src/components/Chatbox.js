import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from  '../actions';

// import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

class Chatbox extends React.Component {

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, ...other } = this.props;
    console.log('Chatbox props', this.props)

    return (
      <Dialog maxWidth="lg" onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <div style={{width:'600px', height:'800px'}}>
          <div style={{width:'600px', height:'80px', backgroundColor:'black'}}>

          </div>
          <div style={{position:'absolute', bottom:'0', width:'600px', height:'160px', backgroundColor:'black'}}>

          </div>
        </div>
      </Dialog>
    )
  }
}

export default compose(
  // withStyles(styles),
  connect(null, actions)
)(Chatbox);
