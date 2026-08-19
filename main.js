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
