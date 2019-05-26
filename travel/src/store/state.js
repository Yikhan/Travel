
let defaultCity = "北京"

// 检查浏览器是否支持本地缓存
// 如果用户关闭了本地缓存则不能使用localStorage
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