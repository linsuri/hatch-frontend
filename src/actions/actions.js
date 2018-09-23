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
