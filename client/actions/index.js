export const selectUser = (user) => {
  console.log("You clicked on user: ", user.first);
  return {
    type:"USER_SELECTED",
    payload: user
  } //this bit is action
}; // this whole function is an action creator

export const addUser = (user) => {
  console.log("You add a user")
  return {
    type: "ADD_PEOPLE",
    payload: user
  }
}