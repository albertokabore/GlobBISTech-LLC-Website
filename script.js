document.getElementById("ctaBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formResponse").textContent = "✅ Message sent! We'll be in touch.";
  this.reset();
});
