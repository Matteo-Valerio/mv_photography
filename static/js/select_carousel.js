var isMobile = window.innerWidth < 768;

if (isMobile) {
  document.getElementById('desktopContent').style.display = 'none';
} else {
  document.getElementById('mobileContent').style.display = 'none';
}