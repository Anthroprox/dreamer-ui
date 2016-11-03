service.service('ideaService', function ($q, $http, opinionService) {
    var service = {};

    var getIdeaFromBackend = function () {
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


    var setApproveAndDisapproveToListIdea = function (list_ideas) {
        return list_ideas.map(function (i) {
            opinionService.findTotalApproveFromIdea(i.id)
                    .then(function (approve) {
                        i["approve"] = approve;
                    });

            opinionService.findTotalDisApproveFromIdea(i.id)
                    .then(function (approve) {
                        i["disapprove"] = approve;
                    });

            return i;
        });
    };

    service.ideaList = function () {
        return getIdeaFromBackend()
                .then(setApproveAndDisapproveToListIdea)
                ;
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
            url: "http://localhost:8080/idea/top/" + id
        }).then(function Succes(response) {
            d.resolve(response.data);
        }, function Error(response) {
            d.reject(response.data);
        });
        return d.promise;
    };
    return service;
});
