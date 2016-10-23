control.controller('loginCtrl', function ($scope, $ionicPopup, $state,categoryService) {
    categoryService.categoryList();
    
    $scope.data = {};
    $scope.login = function () {
        $ionicPopup.alert({
            title: 'Login deshabilitado!',
            template: 'Ingreso sin confirmacion de credenciales.'
        });
        $state.go('tab.now', {}, {reload: true});
    };
});