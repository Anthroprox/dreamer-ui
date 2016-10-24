service.service('loginService', function ($q, $http) {
    var service = {};

    service.categoryList = function () {
        $http({
            method: "GET",
            url: "http://localhost:8080/user/login/1/123"
        }).then(function mySucces(response) {
            console.log(response);
        }, function myError(response) {
            console.log(response);
        });
    };

    return service;
});