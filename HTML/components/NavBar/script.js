//helps debug
document.querySelectorAll('.menuLinks a').forEach(link => {
  link.addEventListener('click', () => {
    console.log("User clicked: " + link.textContent);
  });
});