
document.addEventListener('DOMContentLoaded', function() {
            // Testimonial data
            const testimonials = [
                {
                    quote: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.",
                    image: "../img/testimonials.svg",
                    name: "Jenny Wilson",
                    job: "Vice President"
                },
                {
                    quote: "Their team delivered exceptional results on our project. The attention to detail and creative solutions were impressive.",
                    image: "../img/testimonials.svg",
                    name: "Michael Chen",
                    job: "Product Manager"
                },
                {
                    quote: "We've seen a significant improvement in our conversion rates since implementing their recommendations. Highly recommended!",
                    image: "../img/testimonials.svg",
                    name: "Sarah Johnson",
                    job: "Marketing Director"
                }
            ];
            
            // DOM elements
            const blockquote = document.querySelector('.testimonials__blockquote');
            const image = document.querySelector('.testimonials__img');
            const nameEl = document.querySelector('.testimonials__name');
            const jobEl = document.querySelector('.testimonials__job');
            const leftArrow = document.querySelector('.left-arrow');
            const rightArrow = document.querySelector('.right-arrow');
            const dots = document.querySelectorAll('.dot');
            
            let currentIndex = 0;
            
            // Function to update testimonial
            function updateTestimonial(index) {
                const testimonial = testimonials[index];
                
                blockquote.textContent = testimonial.quote;
                image.src = testimonial.image;
                image.alt = testimonial.name;
                nameEl.textContent = testimonial.name;
                jobEl.textContent = testimonial.job;
                
                // Update active dot
                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
                
                // Update arrow active states
                if (index === 0) {
                    leftArrow.classList.add('active');
                } else {
                    leftArrow.classList.remove('active');
                }
                
                if (index === testimonials.length - 1) {
                    rightArrow.classList.add('active');
                } else {
                    rightArrow.classList.remove('active');
                }
            }
            
            // Event listeners for arrows
            leftArrow.addEventListener('click', function() {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateTestimonial(currentIndex);
                }
            });
            
            rightArrow.addEventListener('click', function() {
                if (currentIndex < testimonials.length - 1) {
                    currentIndex++;
                    updateTestimonial(currentIndex);
                }
            });
            
            // Event listeners for dots
            dots.forEach((dot) => {
                dot.addEventListener('click', function() {
currentIndex = parseInt(this.getAttribute('data-index'));
                    updateTestimonial(currentIndex);
                });
            });
        });
        




        document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq__items');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq__questions');
                
                question.addEventListener('click', () => {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });
        });