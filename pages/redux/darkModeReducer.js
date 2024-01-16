export const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return !state;
    default:
      return state;
  }
};
