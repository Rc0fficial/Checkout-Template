const initialState = {
    firstName: '',
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FIRST_NAME':
        return { ...state, firstName: action.payload };
      default:
        return state;
    }
  };
  