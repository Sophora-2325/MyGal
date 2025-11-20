const dl = document.querySelector(".submit");
const user = document.querySelector("#user");
const password = document.querySelector("#password");
dl.addEventListener("click", function (e) {
  e.preventDefault();
  if (user.value == "admin" && password.value == "123456")
    location.href = "../Data/主框架.html";
  else alert("用户名或密码错误");
});
