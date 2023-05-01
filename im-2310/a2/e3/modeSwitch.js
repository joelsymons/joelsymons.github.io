/* The following code handles the dark/light mode switch functionality */

// first we declare a global boolean to keep track of what mode we're in - by default we're starting in light mode
// instead of needing two variables we can phrase it as isDark - so if isDark is true
// it's in dark mode, but if isDark is false it's in light mode
let isDark = false;

// before we go messing about with our colour palette we set the default values - these are the same colour values as our CSS
let darkCol = "#171219";
let lightCol = "#f2fbeb";

// as we'll discuss in class with prefers-reduced-motion we can check user system preferences - in this case we'll 
// check if they have dark mode turned on - if so we'll instead set isDark to true and change the CSS variables
// this is exactly the same code block as in the function it just runs via an additional check when the page is loaded
// see my comments below for how this works
if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  isDark = true;
  document.documentElement.style.setProperty("--col-01", lightCol);
  document.documentElement.style.setProperty("--col-02", darkCol);
  document.getElementById("mode-button").innerHTML = "Light Mode";
}

function switchModes(){
  // when we run the function the first thing we want to do is check if we're currently in light or dark mode and then 
  // change the CSS variables accordingly to update our colour scheme

  // if we use an if statement we can see if isDark is currently set to true - while we could write it the longhand way eg:
  // if(isDark === true) we can also write a shortcut as seen below - if statements are used to seeing if something is true 
  // so if we give it a variable with nothing else it'll check if it's true by default. This only works for booleans - while we 
  // could put a number or string in here instead as long as it has a value it'll always return true
  if (isDark){
    /* change to light mode */
    // the first step is to update our isDark value to the new state of the page
    isDark = false;
    // then we want to update our underlying custom CSS variables
    document.documentElement.style.setProperty("--col-01", darkCol);
    document.documentElement.style.setProperty("--col-02", lightCol);
    // finally we want to update the text in the button
    document.getElementById("mode-button").innerHTML = "Dark Mode";
  } else {
    /* change to dark mode - same statements as above but in reverse */
    isDark = true;
    document.documentElement.style.setProperty("--col-01", lightCol);
    document.documentElement.style.setProperty("--col-02", darkCol);
    document.getElementById("mode-button").innerHTML = "Light Mode";
  }
}