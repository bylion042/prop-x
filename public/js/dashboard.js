// Notification BELL 
document.getElementById('bell-button').addEventListener('click', function () {
    const dropdown = document.getElementById('notification-dropdown');
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
});
