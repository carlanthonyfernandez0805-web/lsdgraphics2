/* LSD Graphics — shared site script */
(function () {
  "use strict";

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  function setNav(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNav(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 980) setNav(false);
    });
  }

  /* Header shadow once the page scrolls */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Gallery lightbox (activates for real <img> photos in .gallery) */
  var lb = document.getElementById("lightbox");
  if (lb && typeof lb.showModal === "function") {
    var lbImg = lb.querySelector("img");
    var lbCap = lb.querySelector(".lightbox-caption");
    document.querySelectorAll(".work-tile .work-photo").forEach(function (img) {
      img.tabIndex = 0;
      img.setAttribute("role", "button");
      function open() {
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt;
        var cap = img.closest("figure") && img.closest("figure").querySelector("figcaption");
        lbCap.textContent = cap ? cap.textContent.trim() : "";
        lb.showModal();
      }
      img.addEventListener("click", open);
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.closest(".lightbox-close")) lb.close();
    });
  }

  /* Quote form
     To receive submissions, paste your form service URL into the
     form's data-endpoint attribute (e.g. a Formspree endpoint like
     https://formspree.io/f/xxxxxxx). Submissions are POSTed as FormData. */
  var form = document.getElementById("quote-form");
  if (form) {
    var status = form.querySelector(".form-status");
    var btn = form.querySelector('button[type="submit"]');
    var btnLabel = btn ? btn.querySelector(".btn-label") : null;
    var success = document.getElementById("quote-success");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";
      status.textContent = "";

      var endpoint = (form.getAttribute("data-endpoint") || "").trim();
      if (!endpoint) {
        status.textContent = "Preview mode: this form isn't connected to an inbox yet, so nothing was sent.";
        status.classList.add("is-info");
        return;
      }

      btn.disabled = true;
      var original = btnLabel ? btnLabel.textContent : "";
      if (btnLabel) btnLabel.textContent = "Sending…";

      fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed: " + res.status);
          form.hidden = true;
          if (success) { success.hidden = false; success.focus(); }
        })
        .catch(function () {
          status.textContent = "Your request couldn't be sent. Please check your connection and try again.";
          status.classList.add("is-error");
        })
        .then(function () {
          btn.disabled = false;
          if (btnLabel) btnLabel.textContent = original;
        });
    });
  }
})();
