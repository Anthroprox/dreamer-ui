service.service('loginService', function ($q, $http) {
    var storage = localStorage;

    var service = {};



    service.login = function (obj) {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/user/login/" + obj.username + "/" + obj.password
        }).then(function Success(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };

    service.isLogged = function () {
        var o = storage.getItem('session');
        if (o === undefined || o === null)
            return false;
        else
            return o;
    };

    service.enableSession = function () {
        storage.setItem('session', true);
    };

    service.disableSession = function () {
        storage.setItem('session', false);
    };


    service.setLoginInformation = function (data) {
        storage.setItem('user', JSON.stringify(data));
    };

    service.getLoginInformation = function () {
        return JSON.parse(storage.getItem('user'));
    };

    return service;
});