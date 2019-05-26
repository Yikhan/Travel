
export default {
  changeCurrentCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } 
    catch (e) {
      console.log("Error when try to use local storage")
    }
  }
}
