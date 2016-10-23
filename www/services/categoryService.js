service.service('categoryService', function ($q, $http) {
    var service = {};

    service.categoryList = function () {
        $http({
            method: "GET",
            url: "http://localhost:8080/category/list"
        }).then(function mySucces(response) {
            console.log(response);
        }, function myError(response) {
            console.log(response);
        });
    };

    return service;
});