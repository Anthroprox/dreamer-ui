service.service('opinionService', function ($q, $http) {
    var service = {};

    service.opinionList = function () {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/opinion/list"
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };
    
    service.opinionNew = function (parameter) {
        var d = $q.defer();
        $http({
            method: "POST",
            url: "http://localhost:8080/opinion/new",
            data: parameter
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };
    
    service.findTotalApproveFromIdea = function (parameter) {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/opinion/count/approve/".concat(parameter)
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };
    
    service.findTotalDisApproveFromIdea = function (parameter) {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/opinion/count/disapprove/".concat(parameter)
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };


    return service;
});

