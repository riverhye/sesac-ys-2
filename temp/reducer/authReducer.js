// authReducer.js
const initialState = {
  isLogIn: false,
  memberId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogIn: true,
        memberId: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogIn: false,
        memberId: null,
      };
    default:
      return state;
  }
};

export default authReducer;

// const initialState = {
//   user: {
//     isLogIn: false,
//     memberId: null,
//   },
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'LOGIN_SUCCESS':
//       return {
//         user: {
//           ...state.user,
//           isLoggedIn: true,
//           memberId: action.payload,
//         },
//       };
//     case 'LOGOUT':
//       return {
//         user: {
//           isLoggedIn: false,
//           memberId: null,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
