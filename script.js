document.addEventListener('DOMContentLoaded', () => {
    // --- Your original code (unchanged) ---
    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', login);

    const clickableItems = document.querySelectorAll('.clickable-item');
    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            itemClicked(item.textContent);
        });
    });

    // --- FIX STARTS HERE ---
    // 1. Get the password input field
    const passwordInput = document.getElementById('password');

    // 2. Add an event listener for key presses on the password field
    passwordInput.addEventListener('keydown', function(event) {
        // 3. Check if the key that was pressed is the "Enter" key
        if (event.key === 'Enter') {
            // Prevent any default browser behavior (like adding a new line)
            event.preventDefault(); 
            
            // 4. Call your existing login function
            login();
        }
    });
    // --- FIX ENDS HERE ---
});


// --- Your original functions (unchanged) ---
function login() {
    const password = document.getElementById('password').value;
    const correctPassword = 'jh2.0123'; // You can change this password
    if (password === correctPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        alert('Wrong password!');
    }
}

function itemClicked(itemName) {
    alert('You clicked on: ' + itemName);
    // You can add more functionality here, like redirecting to another page
    // window.location.href = 'your-link-here.html';
}
