document.querySelectorAll('.copy-btn').forEach(function(button) {
    button.addEventListener('click', function(e) {
        var pre = e.target.parentElement;
        var text = pre.textContent;
        navigator.clipboard.writeText(text).then(function() {
            console.log('Copying to clipboard was successful!');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
        // Store the original button text
        const originalText = this.textContent;

        // Change the button text to 'Copied!'
        this.textContent = 'Copied!';

        // Change the button text back to the original text after 3 seconds
        setTimeout(() => {
            this.textContent = originalText;
        }, 2000);
    });
});