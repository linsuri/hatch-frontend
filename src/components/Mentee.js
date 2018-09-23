import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from  '../actions/actions';

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

const Mentee = (props) => {
  // console.log('Mentee props', props);
  const { classes } = props;
  const { first_name, last_name } = props.mentee;
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
            Job Title
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Show Details
        </Button>
        <Button size="small" color="primary">
          Chat
        </Button>
      </CardActions>
    </Card>
    // <div className="card" onClick={() => props.getMentees()}>
    //   {first_name}
    //   {last_name}
    // </div>
  )
}

Mentee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(null, actions)
)(Mentee);

// export default connect(null, actions)(Mentee);
