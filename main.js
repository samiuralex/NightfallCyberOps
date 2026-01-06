document.addEventListener('DOMContentLoaded', () => {
    // Text Scramble Effect
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    document.querySelectorAll('.glitch-text').forEach(target => {
        let iteration = 0;
        const originalText = target.dataset.text;
        let interval = null;

        const scramble = () => {
            clearInterval(interval);
            iteration = 0;

            interval = setInterval(() => {
                target.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        // Run on load
        scramble();

        // Run on hover
        target.addEventListener('mouseover', scramble);
    });

    // Console Intro
    console.log("%c NIGHTFALL CYBER OPS ", "background: #000; color: #00ff41; font-size: 20px; padding: 10px; border: 2px solid #00ff41;");
    console.log("System Status: OPERATIONAL");
    console.log("Intelligence: GATHERING");

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});
