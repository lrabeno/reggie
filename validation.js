// other way to declare a regex
// const reg2 = new RegExp(/[a-z]/, 'ig')

const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{11}$/,
};

// Validation function
function validate(field, regex) {
  //   console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    //console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
