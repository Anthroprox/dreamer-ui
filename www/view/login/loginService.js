service.service('loginService', function ($q, $http) {
    var service = {};


    service.login = function (obj) {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/user/login/"+obj.id+"/"+obj.password
        }).then(function Success(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };

    return service;
});