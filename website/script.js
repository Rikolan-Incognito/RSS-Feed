function copyToClipboard(text) {
    var input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    showNotification();
}

function showNotification() {
    var notification = document.getElementById('customNotification');
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 2000); // Hide the notification after 2 seconds (adjust as needed)
}
