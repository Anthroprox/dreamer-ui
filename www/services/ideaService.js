service.service('ideaService', function ($q, $http, opinionService, commentaryService) {
    var storage = localStorage;
    var service = {};

    service.setIdeaInformation = function (data) {
        storage.setItem('idea', JSON.stringify(data));
    };

    service.getIdeaInformation = function () {
        return JSON.parse(storage.getItem('idea'));
    };

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
    var getIdeaByDateFromBackend = function () {
        var d = $q.defer();
        $http({
            method: "GET",
            url: "http://localhost:8080/idea/date/list"
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

            commentaryService.getCommentaryByIdea(i.id)
                    .then(function (list) {
                        i["comentary"] = list;
                    })
                    ;
            return i;
        });
    };

    service.ideaList = function () {
        return getIdeaFromBackend()
                .then(setApproveAndDisapproveToListIdea)
                ;
    };
    service.ideaByDateList = function () {
        return getIdeaByDateFromBackend()
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
        return d.promise.then(setApproveAndDisapproveToListIdea);
    };

    return service;
});
