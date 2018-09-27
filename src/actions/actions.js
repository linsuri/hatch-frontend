export function openProfileMenu(event) {
  return {
    type: 'OPEN_PROFILE_MENU',
    payload: event.currentTarget
  }
}

export function closeProfileMenu() {
  return {
    type: 'CLOSE_PROFILE_MENU',
    payload: null
  }
}

export function openNotificationsMenu(event) {
  return {
    type: 'OPEN_NOTIFICATIONS_MENU',
    payload: event.currentTarget
  }
}

export function closeNotificationsMenu() {
  return {
    type: 'CLOSE_NOTIFICATIONS_MENU',
    payload: null
  }
}

// export const fetchAllNotifications = (user_id) => {
//   return (dispatch) => {
//     fetch("http://localhost:3000/api/v1/users")
//     .then(res => res.json())
//     .then(json => console.log(json.filter(user => user.id === user_id)))
//   }
// }
//
// export function setAllNotifications(user) {
//   const allRelationships = [ ...user.active_relationships, ...user.passive_relationships ]
//   return {
//     type: 'SET_ALL_NOTIFICATIONS',
//     payload: allRelationships,
//   }
// }

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
