
let defaultCity = "北京"

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} 
catch (e) {
  console.log("Error when try to use local storage")
}

export default {
  city: defaultCity
}