document.getElementById('admin-login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('user-login').style.display = 'none';
    document.getElementById('admin-login').style.display = 'block';
});

document.getElementById('user-login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('user-login').style.display = 'block';
});

function login1() {
    const username = document.getElementById('admin-username').value.trim();
    const password = document.getElementById('admin-password').value.trim();
    
    if (username === "admin"& password === "admin1234") {
        window.location.href = "../admin-page/admins.html";
    } else {
        alert("Invalid credentials");
    }
}