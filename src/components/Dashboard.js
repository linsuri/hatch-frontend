import React from 'react'
import LoggedInHeader from './LoggedInHeader'
import MentorsContainer from './MentorsContainer'
import MenteesContainer from './MenteesContainer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'
import withAuth from '../hocs/withAuth'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 'auto',
    marginLeft: 150,
    marginRight: 150,
    position: 'relative',
    top: 100,
    zIndex: 1,
  },
})

const Dashboard = (props) => {

  const { classes, theme } = props

  return (
    <div className={classes.root}>
      <LoggedInHeader />
      <AppBar position="relative" color="default">
        <Tabs
          value={props.dashboardTab}
          onChange={(event, value) => props.dashboardClickTab(event, value)}
          indicatorColor="primary"
          textColor="primary"
          fullWidth >
          <Tab label="My Mentors" />
          <Tab label="My Mentees" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={props.dashboardTab}
        onChangeIndex={(index) => props.dashboardChangeTab(index)} >
        <TabContainer dir={theme.direction}>
          <MentorsContainer />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <MenteesContainer />
        </TabContainer>
      </SwipeableViews>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

function mapStateToProps({ dashboardReducer: { dashboardTab } }) {
  return {
    dashboardTab,
  }
}

export default withAuth(compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, actions)
)(Dashboard))
