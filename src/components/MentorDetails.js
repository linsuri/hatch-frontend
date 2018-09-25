import React from 'react'

// import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

class MentorDetails extends React.Component {

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, ...other } = this.props;
    console.log('Details props', this.props)
    const { first_name, last_name, job_title, expertise, bio, email_address, linkedin, github, personal_website, profile_pic } = this.props.mentor

    return (
      <Dialog maxWidth="lg" onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <Card className={classes.card} style={{maxWidth: 500}}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              height="300"
              image="https://vignette.wikia.nocookie.net/brooklynnine-nine/images/d/d4/Season4.jpg/revision/latest/scale-to-width-down/337?cb=20160815182818"
              title="title"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {first_name} {last_name}
              </Typography>
              <Typography component="p">
                {job_title}
                <br />
                Expertise: {expertise}
                <br />
                Bio: {bio}
                <br />
                Email Address: {email_address}
                <br />
                LinkedIn: {linkedin}
                <br />
                GitHub: {github}
                <br />
                Personal Website: {personal_website}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Dialog>
    )
  }
}

export default MentorDetails