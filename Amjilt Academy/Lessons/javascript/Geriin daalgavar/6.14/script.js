const profile = document.querySelector(".profile");
const avatar = document.querySelector("#avatar");
const fullname = document.querySelector("#fullname");
const profession = document.querySelector("#profession");
const intro = document.querySelector("#intro");
const btn = document.querySelector("#btn");
const age = document.querySelector("#Age");
const phonenumber = document.querySelector("#PhoneNumber");
const like = document.querySelector("#Like");
const generate = document.querySelector(".generate");

btn.addEventListener("click", function () {
  let user = {
    fullname: fullname.value,
    profession: profession.value,
    avatar: avatar.value,
    intro: intro.value,
    age: age.value,
    phonenumber: phonenumber.value,
    like: like.value, 
  };
  displayUserProfile(user);
  generate.classList.add("none");
});

function displayUserProfile (obj) {
  profile.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="user">
    <div class="avatar">
        <img src="${obj.avatar}" alt="">
    </div>
    <div class="info">
        <h1>${obj.fullname}</h1>
        <p>${obj.profession}</p>
        <p class="intro">${obj.intro}</p>
        <div class="contact">
            <a href="https://instagram.com" target="_blank" >
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/login"  target="_blank">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/"  target="_blank">
                <i class="fab fa-facebook-f"></i>
            </a>
        </div>
        <div class="followers">
            <div class="details">
                <h2>${obj.age}</h2>
                <p>Age</p>
            </div>
            <div class="details">
                <h2>${obj.phonenumber}</h2>
                <p>Phone Number</p>
            </div>
            <div class="details">
                <h2>${obj.like}</h2>
                <p>Like</p>
            </div>
        </div>
        <button>Follow ${obj.fullname}</button>
    </div>
</div>
    `
  )
}