export const selectUser = (user) => {
  console.log("You clicked on user: ", user.first);
  return {
    type:"USER_SELECTED",
    payload: user
  } //this bit is action
}; // this whole function is an action creator

