// ...existing code...

// Menu button toggle (copied logic from about.html)
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const menuOptions = document.getElementById('menuOptions');

  menuBtn.addEventListener('click', function () {
    if (menuOptions.style.display === 'flex') {
      menuOptions.style.display = 'none';
    } else {
      menuOptions.style.display = 'flex';
    }
  });

  // Optional: Hide menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!menuBtn.contains(e.target) && !menuOptions.contains(e.target)) {
      menuOptions.style.display = 'none';
    }
  });
});

// ...existing code...