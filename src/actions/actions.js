// export function openProfileMenu(event) {
//   return {
//     type: 'OPEN_PROFILE_MENU',
//     payload: event.currentTarget
//   }
// }
//
// export function closeProfileMenu() {
//   return {
//     type: 'CLOSE_PROFILE_MENU',
//     payload: null
//   }
// }
//
// export function openNotificationsMenu(event) {
//
//   return {
//     type: 'OPEN_NOTIFICATIONS_MENU',
//     payload: event.currentTarget
//   }
// }
//
// export function closeNotificationsMenu() {
//   return {
//     type: 'CLOSE_NOTIFICATIONS_MENU',
//     payload: null
//   }
// }

export const acceptRequest = (mentor_id, mentee_id) => {
  return (dispatch) => {
    fetch("http://192.168.2.29:3000/api/v1/relationships", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        relationship: {
          mentee_id: mentee_id,
          mentor_id: mentor_id,
          accepted: true,
        }
      })
    })
  }
}

export const declineRequest = (mentor_id, mentee_id) => {
  return (dispatch) => {
    fetch("http://192.168.2.29:3000/api/v1/relationships", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        relationship: {
          mentee_id: mentee_id,
          mentor_id: mentor_id,
        }
      })
    })
  }
}

export function dashboardClickTab(event, value) {
  return {
    type: 'DASHBOARD_CLICK_TAB',
    payload: value
  }
}

export function dashboardChangeTab(index) {
  return {
    type: 'DASHBOARD_CHANGE_TAB',
    payload: index
  }
}

// export function setActiveConversation(id) {
//   return {
//     type: 'SET_ACTIVE_CONVERSATION',
//     payload: id
//   }
// }

// export function showDetails(details) {
//   return {
//     type: 'SHOW_DETAILS',
//     payload: details
//   }
// }
