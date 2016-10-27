service.service('categoryService', function ($q, $http) {
    var service = {};

    service.categoryList = function () {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/category/list"
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };

    service.categoryNew = function (parameter) {
        var d = $q.defer();
        $http({
            method: "POST",
            url: "http://localhost:8080/category/new",
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