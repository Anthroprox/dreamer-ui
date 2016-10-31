control.controller('signupCtrl', function ($q, $scope, $state, $ionicPopup, userService) {
    $scope.user = {
        username: 'user2',
        password: '123',
        password2: '123'
    };

    var newPromise = function () {
        var defer = $q.defer();
        defer.resolve();
        return defer.promise;
    }

    var checkEmptyPassword = function () {
        if ($scope.user.password.length === 0)
            throw "Contraseña en blanco";
    };

    var checkEqualsPasswrod = function () {
        if (!angular.equals($scope.user.password, $scope.user.password2))
            throw "Contraseñas no son iguales";
    };

    var createNewUser = function () {
        return userService.userNew($scope.user);
    };

    var redirectToLogin = function () {
        $state.go('login', {}, {reload: false});
    };

    var reportSuccess = function (success) {
        $ionicPopup.alert({
            title: 'Notificación',
            template: "Usuario creado correctamente."
        });
    };

    var reportError = function (error) {
        $ionicPopup.alert({
            title: 'Error!',
            template: error
        });
    };

    var reportErrorCreation = function (error) {
        $ionicPopup.alert({
            title: 'Error!',
            template: "Usuario ya existe"
        });
    };


    $scope.create = function () {
        newPromise()
                .then(checkEmptyPassword)
                .then(checkEqualsPasswrod)
                .catch(reportError)
                .then(createNewUser)
                .then(reportSuccess)
                .then(redirectToLogin)
                .catch(reportErrorCreation)
                ;
    };

});
