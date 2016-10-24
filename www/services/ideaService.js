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

    return service;
});
