control.controller('loginCtrl', function ($scope, $ionicPopup, $state, loginService) {
    $scope.login = function (id, password) {
        loginService.login({
            "id": id,
            "password": password
        }).then(function (data) {
            $scope.data = data;
            $ionicPopup.alert({
                title: 'Felicitaciones!',
                template: "Bienvenido ".concat(data.username,"!")
            });
            $state.go('tab.now', {}, {reload: true});
        }).catch(function (data) {
            $ionicPopup.alert({
                title: 'Error!',
                template: "Usuario o contrasena incorrecta"
            });
        });
    };
});