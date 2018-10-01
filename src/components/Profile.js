import React from 'react'
import LoggedInHeader from './LoggedInHeader'
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from  '../actions';
import withAuth from '../hocs/withAuth'

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Profile extends React.Component {

  state = {
    first_name: this.props.user.first_name,
    last_name: this.props.user.last_name,
    email_address: this.props.user.email_address,
    // password: '',
    job_title: this.props.user.job_title,
    // location: ,
    expertise: '',
    expertiseArray: [],
    bio: this.props.user.bio,
    linkedin: this.props.user.linkedin,
    github: this.props.user.github,
    personal_website: this.props.user.personal_website,
    mentor_status: this.props.user.mentor_status,
    will_buy_coffee: this.props.user.will_buy_coffee,
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleAddToArray = event => {
    console.log(event.key)
    if (event.key === 'Enter') {
      this.setState({
        expertiseArray: [ ...this.state.expertiseArray, {label: this.state.expertise}],
      },
      () => this.setState({expertise: '',}))
    }
  }

  handleDeleteChip = data => () => {
    this.setState(state => {
      const expertiseArray = (state.expertiseArray.length > 0 ? [...state.expertiseArray] : []);
      const chipToDelete = expertiseArray.indexOf(data);
      expertiseArray.splice(chipToDelete, 1);
      return { expertiseArray };
    });
  };

  handleSwitch = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    // console.log(this.state.mentor_status);
    return (
      <div>
        <LoggedInHeader />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Profile</h1>
        <Avatar
          alt=""
          src="/profile-placeholder.png"
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <Switch
          checked={this.state.mentor_status}
          onChange={this.handleSwitch('mentor_status')}
          value="mentor_status"
        /> Mentor Status
        <br />
        <Switch
          checked={this.state.will_buy_coffee}
          onChange={this.handleSwitch('will_buy_coffee')}
          value="will_buy_coffee"
        /> Willing to buy coffee or beverage of choice for mentors
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="first_name"
            label="First Name"
            className={classes.textField}
            margin="normal"
            helperText="Required"
            onChange={this.handleChange}
            value={this.state.first_name}
          />
          <TextField
            required
            id="last_name"
            label="Last Name"
            className={classes.textField}
            margin="normal"
            helperText="Required"
            onChange={this.handleChange}
            value={this.state.last_name}
          />
          <TextField
            required
            id="email_address"
            label="Email Address"
            className={classes.textField}
            margin="normal"
            helperText="Required"
            onChange={this.handleChange}
            value={this.state.email_address}
          />
          {/* <TextField
            required
            type="password"
            id="password"
            label="Password"
            defaultValue={}
            className={classes.textField}
            margin="normal"
            helperText="Required"
            onChange={this.handleChange}
            value={this.state.password}
          /> */}
          <TextField
            id="job_title"
            label="Job Title"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange}
            onKeyUp={this.handleAddToArray}
            value={this.state.job_title}
          />
          <TextField
            id="location"
            label="Location"
            // need to not hard code this
            defaultValue="New York, NY"
            className={classes.textField}
            margin="normal"
            helperText="Required"
            onChange={this.handleChange}
            // value={this.state.location}
          />
          {/* POST state once onSubmit like usual */}
          <TextField
            id="expertise"
            label="Expertise"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange}
            onKeyUp={this.handleAddToArray}
            value={this.state.expertise}
          />
          {this.state.expertiseArray.length > 0 ?
            this.state.expertiseArray.map((data, index) => (<Chip
              key={index}
              label={data.label}
              onDelete={this.handleDeleteChip(data)}
              className={classes.chip}
            />)) :
            null
          }
          <TextField
            id="bio"
            label="Bio"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange}
            value={this.state.bio}
          />
          <TextField
            id="linkedin"
            label="LinkedIn"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange}
            value={this.state.linkedin}
          />
          <TextField
            id="github"
            label="Github"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange}
            value={this.state.github}
          />
          <TextField
            id="personal_website"
            label="Personal Website"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange}
            value={this.state.personal_website}
          />
          <Button variant="contained" color="primary" className={classes.button}>
            Save
          </Button>
        </form>

      </div>
    )
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.usersReducer.user,
  }
}

export default withAuth(compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(Profile));
