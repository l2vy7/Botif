var toastContainer = document.createElement("div");
toastContainer.classList.add("toastContainer");
$(document.body).append(toastContainer);
var container = toastContainer;

var queue = 0;

var botif = function (title, description, options) {
  queue++;

  var notif = document.createElement("div");
  notif.classList.add("notif");

  $(container).append(notif);

  notif.style.opacity = "0";

  notif.innerHTML = `
  <div class="wrapper">
    ${
      options.symbol
        ? `<div class="symbol ${options.level}">
      <h1>${
        options.level === "info"
          ? "i"
          : options.level === "warning"
          ? "!"
          : options.level === "error"
          ? "x"
          : options.level === "success"
          ? "✓"
          : "x"
      }</h1>
    </div>`
        : ""
    }
    <div class="content">
      <h3 class="title">${title}</h3>
      ${options.description ? `<p class="content">${description}</p>` : ""}
    </div>
  </div>
  <div class="bar"></div>
  </div>
    `;
  setTimeout(function () {
    notif.classList.add("remove");
    notif.remove();
  }, options.delay);
};
