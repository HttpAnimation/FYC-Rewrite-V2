document.addEventListener("DOMContentLoaded", function() {
    var customCenterTags = document.querySelectorAll("ct");
    customCenterTags.forEach(function(tag) {
      var div = document.createElement("div");
      div.className = "custom-center";
      while (tag.firstChild) {
        div.appendChild(tag.firstChild);
      }
      tag.parentNode.replaceChild(div, tag);
    });
  });