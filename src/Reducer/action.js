export const githubLoadingAction = { type: "USER_LOADING" };
export const githubSuccessAction = { type: "USER_SUCCESS" };
export const githubFailureAction = { type: "USER_FAILURE" };

export const fetchUser = (dispatch, query) => {
  dispatch(githubLoadingAction);
  fetch("https://api.github.com/search/users?" + `q=${query}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({ ...githubSuccessAction, payload: res.items });
    })
    .catch((err) => {
      dispatch(githubFailureAction);
    });
};