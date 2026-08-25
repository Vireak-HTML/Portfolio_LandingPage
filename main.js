const skilldata = [
  {
    name: "HTML",
    image: "IMG/html.png",
  },
  {
    name: "CSS",
    image: "IMG/css.png",
  },
  {
    name: "JavaScript",
    image: "IMG/js.png",
  },
  {
    name: "Bootstrap",
    image: "IMG/bootstrap.png",
  },
  {
    name: "ReactJS",
    image: "IMG/react.png",
  },
  {
    name: "PHP",
    image: "IMG/php.png",
  },
  {
    name: "Laravel",
    image: "IMG/laravel.png",
  },
  {
    name: "JAVA",
    image: "IMG/java.png",
  },
  {
    name: "Git",
    image: "IMG/git.png",
  },
  {
    name: "GitHub",
    image: "IMG/github.png",
  },
  {
    name: "MySQL",
    image: "IMG/mysql.png",
  },
  {
    name: "Linux",
    image: "IMG/linux-platform.png",
  },
  {
    name: "C#",
    image: "IMG/csharp.png",
  },
  {
    name: "C++",
    image: "IMG/cpp.png",
  },
  {
    name: "Photoshop",
    image: "IMG/photoshop.png",
  },
  {
    name: "Illustrator",
    image: "IMG/illustrator.png",
  },
  {
    name: "Canva",
    image: "IMG/canva.jpe",
  },
];

    const cartContainer = document.getElementById("cardContainer");
    skilldata.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card skill-card";
      card.style =
        "display: grid; grid-template-columns: 1fr 2fr; align-items: center;";
      card.innerHTML = `<img src="${item.image}" alt="${item.name}" class="m-auto" width="30px">
      <p class="skill-detail fs-4 fw-bolder m-0" >${item.name}</p>
      `;
      cartContainer.append(card);
    });


document.querySelectorAll(".nav-link").forEach((element) => {
  element.addEventListener("click", function () {
    document.querySelectorAll(".nav-link").forEach((el) => {
      el.classList.remove("active");
    });
    this.classList.add("active");

    const navbar = document.getElementById("mainNavbar");
    const toggler = document.querySelector(".navbar-toggler");
    const collapse = bootstrap.Collapse.getOrCreateInstance(navbar, {
      toggle: false,
    });
    collapse.hide();
    collapse.dispose();
    navbar.classList.remove("show", "collapsing");
    navbar.classList.add("collapse");
    navbar.style.height = "";
    toggler.setAttribute("aria-expanded", "false");
  });
});
function reset() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
function telegramSend() {
  window.open("https://t.me/S_CVireak", "_blank");
}
function phoneCall() {
  alert("Phone Number: +855 97 462 4244");
}
function sendEmail() {
  const serviceID = "service_vmgythl";
  const templateID = "template_7ajcxu9";
  const userID = "a0HWM7XH7LgtZt-ml";

  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    to_name: "Svay Chanvireak",
  };

  emailjs.send(serviceID, templateID, templateParams, userID).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email sent successfully!");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Failed to send email. Please try again later.");
    },
  );
  document.getElementById("emailForm").reset();
}
