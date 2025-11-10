// Simple session-based authentication (clears on refresh)
const Auth = {
    // Check if user is logged in
    isLoggedIn() {
        return sessionStorage.getItem('userType') !== null;
    },

    // Get user type (freelancer or client)
    getUserType() {
        return sessionStorage.getItem('userType');
    },

    // Login user
    login(userType) {
        sessionStorage.setItem('userType', userType);
    },

    // Logout user
    logout() {
        sessionStorage.removeItem('userType');
        window.location.href = 'index.html';
    },

    // Redirect to appropriate dashboard
    redirectToDashboard() {
        const userType = this.getUserType();
        if (userType === 'freelancer') {
            window.location.href = 'freelancer-dashboard.html';
        } else if (userType === 'client') {
            window.location.href = 'client-dashboard.html';
        }
    },

    // Check if page requires authentication
    requireAuth() {
        if (!this.isLoggedIn()) {
            // Store the current page to redirect back after login
            sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
            window.location.href = 'login.html';
        }
    },

    // Check if page requires specific user type
    requireUserType(requiredType) {
        if (!this.isLoggedIn()) {
            sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
            window.location.href = 'login.html';
            return false;
        }
        
        const userType = this.getUserType();
        if (userType !== requiredType) {
            alert(`This page is only accessible to ${requiredType}s`);
            this.redirectToDashboard();
            return false;
        }
        return true;
    }
};

// Export for use in other scripts
window.Auth = Auth;
