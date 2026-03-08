document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     HERO OWL ANIMATION
  ==========================*/

  const owl = document.querySelector(".hero-image");

  if (owl) {
    owl.addEventListener("click", () => {
      owl.classList.add("fly");

      setTimeout(() => {
        owl.classList.remove("fly");
      }, 1200);
    });
  }

  /* =========================
     SCROLL REVEAL
  ==========================*/

  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.15
    });

    reveals.forEach((section) => observer.observe(section));
  }

  /* =========================
     FAQ ACCORDION
  ==========================*/

  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {

      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains("open");

      document.querySelectorAll(".faq-answer").forEach((item) => {
        item.classList.remove("open");
      });

      document.querySelectorAll(".faq-question").forEach((item) => {
        item.classList.remove("active");
      });

      if (!isOpen) {
        answer.classList.add("open");
        question.classList.add("active");
      }

    });
  });

  /* =========================
     TESTIMONIAL SLIDER
  ==========================*/

  const testimonials = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (testimonials.length > 0) {

    let currentIndex = 0;

    function showTestimonial(index) {

      testimonials.forEach((card) => {
        card.classList.remove("active");
      });

      dots.forEach((dot) => {
        dot.classList.remove("active-dot");
      });

      testimonials[index].classList.add("active");

      if (dots[index]) {
        dots[index].classList.add("active-dot");
      }

    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= testimonials.length) currentIndex = 0;
        showTestimonial(currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = testimonials.length - 1;
        showTestimonial(currentIndex);
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        showTestimonial(currentIndex);
      });
    });

  }

});