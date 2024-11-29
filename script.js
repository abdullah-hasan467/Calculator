
/*
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
const output = "";



const calculate=(btnValue)=>{
  if(btnValue.value === "=" && output !== ""){
    output =eval(output.replace('%',"/100"));
  }
  else if(btnValue==="AC"){
    output = "";
  }
  else if(btnValue==="DEL"){
    output = output.toString().slice(0,1);
  }
  else{
    if(output=== "" && specialChars.includes(btnValue)) return;
    output +=btnValue;
  }
}

buttons.forEach((button) => {
    button.addEventListener('click',(e) => calculate(e.target.dataset.value))
})


*/

let output = "";  // Declare `output` as a `let` variable so it can be modified.
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="]; // List of special characters.

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    try {
      // Replace '%' with "/100" to handle percentage calculation.
      output = eval(output.replace('%', "/100"));
      display.value = output; // Show the result on the display.
    } catch (error) {
      display.value = "Error"; // Show error message if there's a calculation error.
      output = "";
    }
  } else if (btnValue === "AC") {
    output = ""; // Clear the output when "AC" is pressed.
    display.value = output; // Update display.
  } else if (btnValue === "DEL") {
    output = output.slice(0, -1); // Delete the last character.
    display.value = output; // Update display.
  } else {
    // Prevent starting with a special character or consecutive special characters.
    if (output === "" && specialChars.includes(btnValue)) return;
    if (specialChars.includes(output.slice(-1)) && specialChars.includes(btnValue)) return;
    
    output += btnValue; // Append the value of the button pressed.
    display.value = output; // Update display.
  }
};

buttons.forEach((button) => {
  button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});

