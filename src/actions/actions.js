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

export const fetchAllNotifications = (user_id) => {
  return (dispatch) => {
    fetch("http://192.168.2.29:3000/api/v1/users")
    .then(res => res.json())
    .then(json => json.find(user => user.id === user_id))
    .then(user => {
      dispatch(setAllNotifications(user))
    })
  }
}

export function setAllNotifications(user) {
  let allNotifications = []
  // if (user.sent_notifications.length > 0 && user.received_notifications.length > 0) {
  //   allNotifications = [...user.sent_notifications, ...user.received_notifications]
  // } else if (user.sent_notifications.length === 0 && user.received_notifications.length > 0) {
  //   allNotifications = [...user.received_notifications]
  // } else if (user.sent_notifications.length > 0 && user.received_notifications.length === 0) {
  //   allNotifications = [...user.sent_notifications]
  // }
  if (user.received_notifications.length > 0) {
    allNotifications = [...user.received_notifications]
  }
  return {
    type: 'SET_ALL_NOTIFICATIONS',
    payload: allNotifications,
  }
}

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

// export function likePet(pet) {
//   return {
//     type: 'LIKE_PET',
//     payload: pet,
//   }
// }
//
// export function selectPet(pet) {
//   return {
//     type: SELECT_PET, // OPEN_PROFILE, CHANGE_PROFILE, CHANGE_DISPLAY_PET
//     payload: pet,
//   }
// }
//
// export function uploadPet(name, age, species) {
//   return {
//     type: 'ADD_PET',
//     payload: {
//       id: UUID(),
//       name,
//       age,
//       species,
//       gb: true,
//     }
//   }
// }
