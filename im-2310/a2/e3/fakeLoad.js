/*
this is a function that handles the fake load time -
it takes in a number in ms tha defines how long the fake load will be 
and a url to load, in this case just a reference to the hosono.html file
*/
function loadPageAfterDelay(loadTime, url){
  /* the first step is to show the loading bar element */
  // hide link
  document.getElementById("load-link").style.display = 'none';
  // show throbber
  document.getElementById("load-throbber").style.display = 'block';
  /* if you want to add or change anything else once link is clicked below here is where you'd do so */
  /* then the second part is actually following the link using a setTimeout() */
  /*
  setTimeout() is a JS method (see modules) that allows us to run some code after a 
  set amount of time - in this case it's running an arrow function (see modules but 
  essentially a function without a name that we want to run once) after time set in
  the loadTime parameter (this is a number that represents ms) 
  */
  setTimeout(() => {
    window.location.href = url;
  }, loadTime);
  
}