control.controller('loginCtrl', function ($scope, $ionicPopup, $state, userService) {
    userService.userNew({
        "username": "user1",
        "password": 123
    }).then(function (data) {
        console.log(data);
    },function (data) {
        console.log(data);
    });

    $scope.data = {};
    $scope.login = function () {
        $ionicPopup.alert({
            title: 'Login deshabilitado!',
            template: 'Ingreso sin confirmacion de credenciales.'
        });
        $state.go('tab.now', {}, {reload: true});
    };
});