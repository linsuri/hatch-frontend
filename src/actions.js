export function getMentors() {
  return {
    type: 'GET_MENTORS',
    payload: [
      { id: 2,
        first_name: 'Ray',
        last_name: 'Holt',
      },
    ],
  }
}

export function getMentees() {
  return {
    type: 'GET_MENTEES',
    payload: [
      { id: 3,
        first_name: 'Jakey',
        last_name: 'Peralta'
      },
    ],
  }
}

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
