const features = document.getElementsByClassName("button");
const img = document.getElementById("img");
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");

features[0].addEventListener("click", function() {
    img.src = "../images/illustration-features-tab-1.svg";
    title.innerHTML = "Bookmark in one Click";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
});

features[1].addEventListener("click", function() {
    img.src = "../images/illustration-features-tab-2.svg";
    title.innerHTML = "Intelligent search";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
});

features[2].addEventListener("click", function() {
    img.src = "../images/illustration-features-tab-3.svg";
    title.innerHTML = "Share your bookmarks";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
});

function remove() {
    for (let i = 0; i < features.length; i++) {
        features[i].classList.remove("active");
    }
}

const questions = document.getElementsByClassName("questions-image");
const answers = document.getElementsByClassName("questions-text");
const arrow = document.getElementById("arrow");
const arrow1 = document.getElementById("arrow-1");
const arrow2 = document.getElementById("arrow-2");
const arrow3 = document.getElementById("arrow-3");
var rotation = 0;

for (let i = 0; i < answers.length; i++) {
    answers[i].style.display = "none";
  }

questions[0].addEventListener("click", function() {
    if(answers[0].style.display === "none") {
        rotation += 180;
        arrow.style.transform = "rotate(" + rotation + "deg)";
        answers[0].style.display = "block";
    } else {
        rotation += 180;
        arrow.style.transform = "rotate(" + rotation + "deg)";
        answers[0].style.display = "none";
        
    }
})

questions[1].addEventListener("click", function() {
    if(answers[1].style.display === "none") {
        rotation += 180;
        arrow1.style.transform = "rotate(" + rotation + "deg)";
        answers[1].style.display = "block";
    } else {
        arrow1.style.transform = "rotate(" + rotation + "deg)";
        answers[1].style.display = "none";
    }
})

questions[2].addEventListener("click", function() {
    if(answers[2].style.display === "none") {
        rotation += 180;
        arrow2.style.transform = "rotate(" + rotation + "deg)";
        answers[2].style.display = "block";
    } else {
        arrow2.style.transform = "rotate(" + rotation + "deg)";
        answers[2].style.display = "none";
    }
})

questions[3].addEventListener("click", function() {
    if(answers[3].style.display === "none") {
        rotation += 180;
        arrow3.style.transform = "rotate(" + rotation + "deg)";
        answers[3].style.display = "block";
    } else {
        arrow3.style.transform = "rotate(" + rotation + "deg)";
        answers[3].style.display = "none";
    }
})

// menu bar 
const menu = document.querySelector("#mobileNav");
const button = document.querySelector("#hamburger-menu");
const hamburgerIcon = document.querySelector("#hamburger-icon");


button.addEventListener("click", () => {
  let expand = button.getAttribute("aria-expanded");
  let logo = document.querySelector("#logo");

  if (expand = "false") {
    hamburgerIcon.classList.add("hidden");
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  } 

  button.setAttribute("aria-expanded", expand);

  if (expand === "true") {
    button.innerHTML = `<img class="text-3xl" src="/images/icon-hamburger.svg">`;
    logo.setAttribute("src", "/images/logo-bookmark.svg");
  } else {
    button.innerHTML = `<img class="text-3xl" src="/images/icon-close.svg">`;
    logo.setAttribute("src", "/images/logo-bookmark.svg");
  }
});


const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = document.querySelector("#email");
    const formGroup = document.querySelector("#form-group");
    const errorIcon = document.querySelector("#error-icon");
    const errorMsg = document.querySelector("#error-msg");
    if (email.value == "") {
      errorMsg.innerText = "Email cannot be empty";
      email.classList.add("error");
      errorIcon.classList.remove("hidden");
      errorMsg.classList.remove("hidden");
      formGroup.classList.add("error-form-group");
    } else if (!regex.test(email.value)) {
      errorMsg.innerText = "Whoops! make sure it's an email";
      email.classList.add("error");
      errorIcon.classList.remove("hidden");
      errorMsg.classList.remove("hidden");
    } else {
      errorIcon.classList.add("hidden");
      errorMsg.classList.add("hidden");
      email.classList.remove("error");
    }
  });
  