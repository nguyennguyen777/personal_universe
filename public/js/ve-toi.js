// Skill bar animation
const skillBars = document.querySelectorAll('.skill .fill');

const skillObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
};

const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Skill bar intersecting:', entry.target);
            const width = entry.target.getAttribute('data-width');
            if (width) {
                entry.target.style.width = width;
            }
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, skillObserverOptions);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

/*
// Testimonials slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const testimonialInterval = 5000; // 5 seconds

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize testimonials
if (testimonials.length > 0) {
    showTestimonial(0);
    setInterval(nextTestimonial, testimonialInterval);
}
*/ // Commenting out the old testimonial JS

// Interest cards hover effect
const interestCards = document.querySelectorAll('.interest-card');
interestCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Goals section animation
const goalCards = document.querySelectorAll('.goal-card');

const goalObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Trigger when 30% of the element is visible
};

const goalObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, goalObserverOptions);

goalCards.forEach(card => {
    goalObserver.observe(card);
});

// Initialize Swiper
const swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});