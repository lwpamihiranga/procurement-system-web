const LoginService = {
    loginSiteManager: function(userId, password) {
        console.log('Login as site manager');
    },
    loginManagmentStaff: function(userId, password) {
        console.log('Login as managment staff');
    },
    loginAccountingStaff: function(userId, password) {
        console.log('Login as accounting staff');
    }
}

export default LoginService;