document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            document.querySelectorAll('.error-message').forEach(el => {
                el.textContent = '';
            });
            
            let isValid = true;
            
            // Validate name
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                name.nextElementSibling.textContent = 'Name is required';
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                email.nextElementSibling.textContent = 'Email is required';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                email.nextElementSibling.textContent = 'Please enter a valid email';
                isValid = false;
            }
            
            // Validate message
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                message.nextElementSibling.textContent = 'Message is required';
                isValid = false;
            }
            
            if (isValid) {
                // In a real application, you would send the form data to a server here
                // For demonstration, we'll just show a success message
                contactForm.reset();
                formSuccess.style.display = 'block';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }
        });
    }
});