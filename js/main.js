// Button Event
const btnElment = document.getElementById('btn-login');
btnElment.addEventListener('click', function (e) {
    e.preventDefault();
    
    // fixed Number & pin
    const mobileNumber = 11111111111;
    const pinNumber = 1234;

    // User data
    const userNumber = document.getElementById('user-number').value;
    const userPin = document.getElementById('user-pin').value;

    // Converted NUMBER & PIN
    const userNumberConverted = parseInt(userNumber);
    const userPinConverted = parseInt(userPin);

    // Condition Checked
    if (userNumberConverted === mobileNumber && userPinConverted === pinNumber) {
        confirm('Right Credential✅')
    }else {
        confirm('Wrong Credential❌')
    }
})