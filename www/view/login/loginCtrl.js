control.controller('loginCtrl', function ($scope, $ionicPopup, $state, loginService) {
    $scope.login = function (id,password) {
        loginService.login({
            "id": id,
            "password": password
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