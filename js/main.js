// Make scrollbar work
window.addEventListener("scroll", function(){
  document.querySelector("section#progress div").style.width = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100) + "%";
});

// Get all the number sections
document.querySelectorAll("section.number").forEach(function(section){
  // Get the height of the viewport for comparison
  var viewportHeight = document.documentElement.clientHeight;
  // Get the image source attribute
  var imgSrc = section.getAttribute("data-source");
  // On every scroll event, do things
  window.addEventListener("scroll", function(){
      // If sectionPos is low, the element is close to the viewport
      var sectionPos = section.getBoundingClientRect().top;
      // Returns true if an image is already loaded, else false
      var loaded = section.classList.contains("loaded");
      // If a data source attribute is set, has not already been loaded and element is close to being in view (i.e. less than 2 full viewportHeights away), then continue
      if (loaded == false && imgSrc && sectionPos - viewportHeight < 2*viewportHeight) {
        // Load the image
        section.setAttribute("style", "background-image:url(" + imgSrc + ")");
        // Set the class to loaded to prevent further attempts to load
        section.classList.add("loaded");
      }
  });
});
