import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'

class MenteeDetails extends React.Component {

  handleClose = () => {
    this.props.onClose(this.props.selectedValue)
  }

  render() {
    const { classes, ...other } = this.props
    const { first_name, last_name, job_title, expertise, bio, email_address, linkedin, github, personal_website } = this.props.mentee

    return (
      <Dialog maxWidth="lg" onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <Card className={classes.card} style={{maxWidth: 500}}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              height="300"
              image="/profile-placeholder.png"
              title="title" />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {first_name} {last_name}
              </Typography>
              <Typography variant="subheading">
                {job_title}
              <Typography component="p">
                Email Address: {email_address}
              </Typography>
              </Typography>
              {expertise !== "" ?
                <Typography component="p">
                  Expertise: {expertise}
                </Typography> :
                null
              }
              {bio !== "" ?
                <Typography component="p">
                  Expertise: {bio}
                </Typography> :
                null
              }
              {linkedin !== "" ?
                <Typography component="p">
                  Expertise: {linkedin}
                </Typography> :
                null
              }
              {github !== "" ?
                <Typography component="p">
                  Expertise: {github}
                </Typography> :
                null
              }
              {personal_website !== "" ?
                <Typography component="p">
                  Expertise: {personal_website}
                </Typography> :
                null
              }
            </CardContent>
          </CardActionArea>
        </Card>
      </Dialog>
    )
  }
}

export default MenteeDetails
