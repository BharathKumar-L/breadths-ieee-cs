document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.studio-button');
    const popup = document.getElementById('event-popup');
    const eventDetails = document.getElementById('event-details');
    const closeButtons = document.querySelectorAll('.close-btn');
    

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const eventId = button.getAttribute('data-event');
            const content = document.getElementById(`${eventId}-content`);
            if (content) {
                eventDetails.innerHTML = content.innerHTML;
                popup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });

        button.addEventListener('touchend', () => {
            const eventId = button.getAttribute('data-event');
            const content = document.getElementById(`${eventId}-content`);
            if (content) {
                eventDetails.innerHTML = content.innerHTML;
                popup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeButtons.forEach(btn => {
        const closePopup = () => {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        };

        btn.addEventListener('click', closePopup);
        btn.addEventListener('touchend', closePopup);
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});