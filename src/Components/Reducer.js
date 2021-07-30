const initialState = { logged: false };

const Reducer = (state = initialState, action) => {
  if (action.type === "login") {
    return {
      ...state,
      logged: true,
    };
  } else if (action.type === "logout") {
    return {
      ...state,
      logged: false,
    };
  }

  return state;
};

export default Reducer;
