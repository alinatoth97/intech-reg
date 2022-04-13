//LANGUAGE CHANGE

function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

var language = {
  hu: {
    generaltitle: "Általános regisztráció",
    additionaltitle: "Egyéb kérdések",
    emailquestion: "E-mail cím*",
    passwordquestion: "Jelszó*",
    birthdatequestion: "Születési idő",
    newsletterquestion: "Szeretnék hírlevelet kapni.",
    GDPRquestion: "Hozzájárulok az adatkezeléshez.*",
    softwarequestion: "Milyen szoftverek találhatóak meg a gépeden?",
    computerquestion: "Laptopot vagy asztali gépet használsz?",
    otheroption: "Egyéb",
    writehere: "Kérem írd ide.",
    registration: "Regisztráció",
    explanation: "A *-gal jelölt mezők kitöltése kötelező.",
    pagetitle: "Regisztráció",
    thankyou: "Köszönjük!",
    sentemail: "Az {email}-re elküldtük a további információkat.",
  },
  en: {
    generaltitle: "General registration",
    additionaltitle: "Additional questions",
    emailquestion: "E-mail address*",
    passwordquestion: "Password*",
    birthdatequestion: "Date of birth",
    newsletterquestion: "I would like to sign up for newsletter.",
    GDPRquestion: "I accept the terms and conditions and the privacy policy.*",
    softwarequestion: "What softwares do you have on your computer?*",
    computerquestion: "Do you use laptop or desktop computer?*",
    otheroption: "Other",
    writehere: "Please write here.",
    registration: "Registration",
    explanation: "Fields with a * are required.",
    pagetitle: "Registration",
    thankyou: "Thank you!",
    sentemail: "An e-mail has been sent to {e-mail} with further informations.",
  },
};

if (window.location.hash) {
  if (window.location.hash == "#en") {
    general.textContent = language.en.generaltitle;
    additional.textContent = language.en.additionaltitle;
    email.textContent = language.en.emailquestion;
    password.textContent = language.en.passwordquestion;
    birthdate.textContent = language.en.birthdatequestion;
    newslet.textContent = language.en.newsletterquestion;
    GDPR.textContent = language.en.GDPRquestion;
    softwares.textContent = language.en.softwarequestion;
    computertitle.textContent = language.en.computerquestion;
    otherchoice.textContent = language.en.otheroption;
    write.textContent = language.en.writehere;
    reg.textContent = language.en.registration;
    expl.textContent = language.en.explanation;
    title.textContent = language.en.pagetitle;
    thanks.textContent = language.en.thankyou;
    emailsent.textContent = language.en.sentemail;
  }
}

//EMAIL VALIDATION

function ValidateEmail(input) {
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(emailRegex)) {
    document.regform.email.focus();
    document.getElementById("message-email").innerHTML =
        "";
    return true;
  } else {
    if (window.location.hash == "#en") {
      document.getElementById("message-email").innerHTML =
        "Invalid e-mail address!";
      document.regform.email.focus();

      return false;
    } else {
      document.getElementById("message-email").innerHTML = "Hibás e-mail cím!";
      document.regform.email.focus();

      return false;
    }
  }
}

//PASSWORD VALIDATION

function verifyPassword() {
  var pw = document.getElementById("passwordinput").value;

  //check empty password field
  if (pw == "") {
    if (window.location.hash == "#en") {
      document.getElementById("message-pw").innerHTML =
        "Fill the password please!";
      return false;
    } else {
      document.getElementById("message-pw").innerHTML =
        "Töltsd ki a jelszó mezőt!";
      return false;
    }
  }

  //minimum password length validation
  if (pw.length < 8) {
    if (window.location.hash == "#en") {
      document.getElementById("message-pw").innerHTML =
        "Password must be at least 8 characters and must contain at least one uppercase letter, one lowercase letter and a number.";
      return false;
    } else {
      document.getElementById("message-pw").innerHTML =
        "A jelszónak minimum 8 karakter hosszúnak kell lennie és tartalmaznia kell minimum egy kisbetűt, egy nagybetűt és egy számot.";
      return false;
    }
  }
}
//SHOW-HIDE PASSWORD

const togglePassword = document.querySelector("#togglePassword");
const showPassword = document.querySelector("#passwordinput");

togglePassword.addEventListener("click", function () {
  const type =
    showPassword.getAttribute("type") === "password" ? "text" : "password";
  showPassword.setAttribute("type", type);

  this.classList.toggle("bi-eye");
});

//APP CHECKBOX ONE IS REQUIRED

(function() {
  const form = document.querySelector('#regform');
  const checkboxes = form.querySelectorAll('input[name=app]');
  const checkboxLength = checkboxes.length;
  const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

  function init() {
      if (firstCheckbox) {
          for (let i = 0; i < checkboxLength; i++) {
              checkboxes[i].addEventListener('change', checkValidity);
          }

          checkValidity();
      }
  }

  function isChecked() {
      for (let i = 0; i < checkboxLength; i++) {
          if (checkboxes[i].checked) return true;
      }

      return false;
  }

  function checkValidity() {
      const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
      firstCheckbox.setCustomValidity(errorMessage);
  }

  init();
})();