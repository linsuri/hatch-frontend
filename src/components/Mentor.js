import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ActionCable } from 'react-actioncable-provider';
import * as actions from  '../actions';
import MentorDetails from './MentorDetails'
import MentorChatbox from './MentorChatbox'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

const styles = {
  card: {
    maxWidth: 300,
    display: 'inline-block',
    margin: 15,
  },
  media: {
    objectFit: 'cover',
  },
};

class Mentor extends React.Component {

  state = {
    detailsOpen: false,
    chatOpen: false,
    newMessage: 0,
  }

  handleDetailsClickOpen = () => {
    this.setState({
      detailsOpen: true,
    });
  };

  handleChatClickOpen = () => {
    this.setState({
      chatOpen: true,
      newMessage: 0,
    });
  };

  handleDetailsClose = () => {
    this.setState({
      detailsOpen: false,
    });
  };

  handleChatClose = () => {
    this.setState({
      chatOpen: false,
    });
  };

  receivedMessage = (response) => {
    if (response.message.relationship.mentor.id === this.props.mentor.id && response.message.relationship.mentee.id === this.props.user.id && !this.state.chatOpen) {
      this.setState({
        newMessage: this.state.newMessage + 1,
      })
    }
  }

  render() {
    // console.log('Mentor props', this.props);

    const { classes } = this.props;
    const { first_name, last_name, job_title } = this.props.mentor;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            height="200"
            image="/profile-placeholder.png"
            title="title"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {first_name} {last_name}
            </Typography>
            <Typography component="p">
              {job_title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={this.handleDetailsClickOpen}
          >
            Show Details
          </Button>
          <MentorDetails
            open={this.state.detailsOpen}
            onClose={this.handleDetailsClose}
            mentor={this.props.mentor}
            classes={classes}
          />
          <ActionCable
            channel={{ channel: 'MessagesChannel' }}
            onReceived={this.receivedMessage}
          />
          {this.state.newMessage > 0 ?
            <Badge badgeContent={this.state.newMessage} color="secondary">
              <Button
                size="small"
                color="primary"
                onClick={this.handleChatClickOpen}
              >
                Chat
              </Button>
            </Badge>
            :
            <Button
              size="small"
              color="primary"
              onClick={this.handleChatClickOpen}
            >
              Chat
            </Button>
          }
          <MentorChatbox
            open={this.state.chatOpen}
            onClose={this.handleChatClose}
            mentor={this.props.mentor}
          />
        </CardActions>
      </Card>
    )
  }
}

Mentor.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.usersReducer.user,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(Mentor);
