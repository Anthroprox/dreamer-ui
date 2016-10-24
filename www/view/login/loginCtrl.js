control.controller('loginCtrl', function ($scope, $ionicPopup, $state,loginService) {
    $scope.data = {};
    $scope.login = function () {
        $ionicPopup.alert({
            title: 'Login deshabilitado!',
            template: 'Ingreso sin confirmacion de credenciales.'
        });
        $state.go('tab.now', {}, {reload: true});
    };
});