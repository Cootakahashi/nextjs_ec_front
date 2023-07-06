const { de } = require("date-fns/locale");

const initialState = {
  user: null,
  isAuthenticated: null,
  loading: false,
  checkout_url: null,
  checkout_detail: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // ユーザー登録
    default:
      return state;
  }
};

export default authReducer;
