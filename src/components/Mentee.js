import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from  '../actions/actions';
import MenteeDetails from './MenteeDetails'
import Chatbox from './Chatbox'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

class Mentee extends React.Component {

  state = {
    detailsOpen: false,
    chatOpen: false,
  }

  handleDetailsClickOpen = () => {
    this.setState({
      detailsOpen: true,
    });
  };

  handleChatClickOpen = () => {
    this.setState({
      chatOpen: true,
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

  render() {
    console.log('Mentee props', this.props);

    const { classes } = this.props;
    const { first_name, last_name, job_title } = this.props.mentee;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            height="200"
            image="https://vignette.wikia.nocookie.net/brooklynnine-nine/images/d/d4/Season4.jpg/revision/latest/scale-to-width-down/337?cb=20160815182818"
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
          <MenteeDetails
            open={this.state.detailsOpen}
            onClose={this.handleDetailsClose}
            mentee={this.props.mentee}
            classes={classes}
          />
          <Button
            size="small"
            color="primary"
            onClick={this.handleChatClickOpen}
          >
            Chat
          </Button>
          <Chatbox
            open={this.state.chatOpen}
            onClose={this.handleChatClose}
            mentee={this.props.mentee}
            // classes={classes}
          />
        </CardActions>
      </Card>
    )
  }
}

Mentee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(null, actions)
)(Mentee);
