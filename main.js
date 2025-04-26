var typed= new Typed(".text",{
	strings: ["Bandaranayake College" , "Technology Society" , "Official Website"],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop:true
});

// ------------------------------------------------slider------------------------------------------------------------------

const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 4000); // Rotate every 4 seconds


// -----------------------------------------------------slider end------------------------------------------------------------

// -----------------------------------------------------Countdown Timer------------------------------------------------------


// Mehemai oyā countdown ekata daanna time eka
const targetDateString = "May 12, 2025 00:00:00";

document.getElementById("target-display").textContent = targetDateString;

const targetDate = new Date(targetDateString).getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById("message").textContent = "🎉 Countdown Complete!";
    updateCountdown(0, 0, 0, 0);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  updateCountdown(days, hours, minutes, seconds);
}, 1000);

function updateCountdown(days, hours, minutes, seconds) {
  document.getElementById("days").textContent = formatNumber(days);
  document.getElementById("hours").textContent = formatNumber(hours);
  document.getElementById("minutes").textContent = formatNumber(minutes);
  document.getElementById("seconds").textContent = formatNumber(seconds);
}

function formatNumber(num) {
  return num < 10 ? "0" + num : num;
}


// -----------------------------------------------------Countdown Timer------------------------------------------------------


