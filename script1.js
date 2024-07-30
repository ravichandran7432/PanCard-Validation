document.getElementById('panForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const panNumber = document.getElementById('panNumber').value;
    const result = document.getElementById('result');

    // Regular expression to validate PAN card number
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (panRegex.test(panNumber)) {
        result.textContent = 'The PAN card number is valid.';
        result.style.color = 'green';
    } else {
        result.textContent = 'The PAN card number is invalid. Please enter a valid PAN number.';
        result.style.color = 'red';
    }
});