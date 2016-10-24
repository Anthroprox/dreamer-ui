control.controller('loginCtrl', function ($scope, $ionicPopup, $state, loginService) {
    $scope.login = function () {
        loginService.login({
            "id": "1",
            "password": '123'
        }).then(function (data) {
            $scope.data=data;
            $ionicPopup.alert({
                title: 'Login deshabilitado!',
                template: JSON.stringify(data)
            });
            $state.go('tab.now', {}, {reload: true});
        }, function (data) {
            $ionicPopup.alert({
                title: 'Error!',
                template: JSON.stringify($scope.data)
            });
        });
    };
});