document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section, .profile, .download-section').forEach((el) => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const stars = skill.querySelectorAll('.stars i');
        let originalRating = 0;

        stars.forEach((star, index) => {
            if (star.classList.contains('fas')) {
                originalRating = index + 1;
            }
        });
        
        stars.forEach((star, index) => {
            star.addEventListener('mouseover', () => {
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.remove('far');
                    stars[i].classList.add('fas');
                }
            });

            star.addEventListener('mouseout', () => {
                stars.forEach((s, i) => {
                    if (i < originalRating) {
                        s.classList.remove('far');
                        s.classList.add('fas');
                    } else {
                        s.classList.remove('fas');
                        s.classList.add('far');
                    }
                });
            });
        });
    });
}); 
