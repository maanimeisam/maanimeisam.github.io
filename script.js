(function () {
  var root = document.documentElement;
  var toggleBtn = document.getElementById("themeToggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  // Always start in light mode; the visitor can switch manually.
  applyTheme("light");

  toggleBtn.addEventListener("click", function () {
    var isDark = root.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  });

  // The browser's print dialog can add its own header (page title + date)
  // and footer (URL + page number). We can't remove that from the page's
  // own code - it's a setting inside the browser's print dialog, not part
  // of the printed document - but blanking the title while printing keeps
  // at least the title portion of that header from showing our page name.
  var originalTitle = document.title;
  window.addEventListener("beforeprint", function () {
    document.title = "";
  });
  window.addEventListener("afterprint", function () {
    document.title = originalTitle;
  });
})();
