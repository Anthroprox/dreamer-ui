service.service('typeService', function ($q, $http) {
    var service = {};

    service.typeList = function () {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/type/list"
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };

    return service;
});
