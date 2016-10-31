control.controller('loginCtrl', function ($q, $scope, $ionicPopup, $state, loginService) {
    $scope.user = {
        username: "",
        password: ""
    };

    var newPromise = function () {
        var defer = $q.defer();
        defer.resolve();
        return defer.promise;
    };

    var checkEmptyUsername = function () {
        if ($scope.user.username.length === 0)
            throw "Usuario no puede estar en vacío";
    };

    var checkEmptyPassword = function () {
        if ($scope.user.password.length === 0)
            throw "Contraseña no puede estar en vacío";
    };

    var tryLogin = function () {
        return loginService.login({
            "username": $scope.user.username,
            "password": $scope.user.password
        });
    };
    

    var setIdUserOnLocalStorage = function (userinfo) {
        loginService.setLoginInformation(userinfo);
    };
    
    var enableSession = function(){
        loginService.enableSession();
    };

    var welcomeMessage = function () {
        var userinfo = loginService.getLoginInformation();
        
        $ionicPopup.alert({
            title: 'Felicitaciones!',
            template: "Bienvenido ".concat(userinfo.username, "!")
        });
    };

    var goToTabNow = function () {
        $state.go('tab.now', {}, {reload: true});
    };

    var reportError = function () {
        $ionicPopup.alert({
            title: 'Error!',
            template: "Usuario "
        });
    };

    $scope.login = function () {
        newPromise()
                .then(checkEmptyUsername)
                .then(checkEmptyPassword)
                .then(tryLogin)
                .then(setIdUserOnLocalStorage)
                .then(enableSession)
                .then(welcomeMessage)
                .then(goToTabNow)
                .catch(reportError)
                ;
    };
});