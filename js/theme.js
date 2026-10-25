(function () {
  var root = document.documentElement;
  var button = document.querySelector("[data-theme-toggle]");
  var themeColor = document.querySelector('meta[name="theme-color"]');

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      /* Storage can be blocked. The choice still applies for this view. */
    }
    var night = theme === "dark";
    if (button) {
      button.textContent = night ? "Paper" : "Night";
      button.setAttribute("aria-pressed", night ? "true" : "false");
    }
    if (themeColor) themeColor.setAttribute("content", night ? "#1F1F28" : "#F3FAE1");
  }

  if (button) {
    button.addEventListener("click", function () {
      apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  apply(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
})();
