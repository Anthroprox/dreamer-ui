service.service('commentaryService', function ($q, $http) {
    var service = {};

    service.commentaryList = function () {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/commentary/list"
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };
    
    service.commentaryNew = function (parameter) {
        var d = $q.defer();
        $http({
            method: "POST",
            url: "http://localhost:8080/commentary/new",
            data: parameter
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };

    return service;
});