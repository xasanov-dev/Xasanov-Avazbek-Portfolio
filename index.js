/* ===== Smooth Scroll ===== */
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

/* ===== Scroll Reveal ===== */
const sections = document.querySelectorAll("[data-animate]");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const elementTop = section.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===== Project Card 3D Tilt ===== */
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (x - centerX) / 15;
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateY(-10px)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1) translateY(0)`;
    });
});

/* ===== Button Ripple ===== */
const buttons = document.querySelectorAll(".btn-contact, .contact-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        const rect = btn.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});
