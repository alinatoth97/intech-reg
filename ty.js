function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }
  
  var language = {
    hu: {
      pagetitle: "Regisztráció",
      thankyou: "Köszönjük!",
      sentemail: "Az {email}-re elküldtük a további információkat.",
    },
    en: {
      pagetitle: "Registration",
      thankyou: "Thank you!",
      sentemail: "An e-mail has been sent to {e-mail} with further informations.",
    },
  };
  
  if (window.location.hash) {
    if (window.location.hash == "#en") {
      title.textContent = language.en.pagetitle;
      thanks.textContent = language.en.thankyou;
      emailsent.textContent = language.en.sentemail;
    }
  }