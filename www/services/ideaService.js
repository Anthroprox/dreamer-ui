service.service('ideaService', function ($q, $http) {
    var service = {};

    service.ideaList = function () {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/idea/list"
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };

    service.ideaNew = function (parameter) {
        var d = $q.defer();
        $http({
            method: "POST",
            url: "http://localhost:8080/idea/new",
            data: parameter
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };
      service.ideaTenList = function (id) {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/idea/top/"+id
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };
    return service;
});
