gsap.registerPlugin(ScrollToPlugin);

// document.querySelector("#section1Btn").forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:70}});
//     });
//   });




// document.querySelector("#section1Btn").forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:70}});
//     });
//   });
  
  
 
//   document.getElementById("section1Btn").addEventListener("click", displayDate);

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();

 
 
  document.getElementById("section1").addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#scrollme" , offsetY:70}});

});


// document.getElementById("section1").addEventListener("click", function() {
//     alert("Hello World!");
//   });