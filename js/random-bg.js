// Change Background Color Function For Card
function changeBackground(randomBg) {
    const element = document.getElementById(randomBg);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = "#" + randomColor;
  }
//Declare An Array For Random Background Change
const randomBgId = ["triangle-bg", "rectangle-bg", "parallelogram-bg", "rhombus-bg", "pentagon-bg", "ellipse-bg"];
// Declare A Function To Handle The Mouseenter Event
function handleMouseEnter(event) {
  const element = event.target;
  changeBackground(element.id);
}
// Add An Event Listener To Each ID In The Array
randomBgId.forEach(id => {
  const element = document.getElementById(id);
  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);
});
 // Set The Background Color To The Default Color
function handleMouseLeave(event) {
    const element = event.target;
    const defaultColor = element.getAttribute('data-default-color');
    element.style.backgroundColor = defaultColor;
  }
  

  