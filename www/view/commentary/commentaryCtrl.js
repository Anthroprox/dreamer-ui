control.controller('commentaryCtrl', function ($q, $rootScope, $scope, commentaryService, loginService, ideaService) {
    $scope.comentary = {
        "idea": {
            "id": -1
        },
        "user": {
            "id": -1
        },
        "message": ""
    };

    var newPromise = function () {
        var defer = $q.defer();
        defer.resolve();
        return defer.promise;
    };
    
    var setComentaries = function(datos){
        $scope.comentary.idea.comentary = angular.copy(datos);
    };
    
    var getComentariesByIdeaFromBackend = function(){
        commentaryService.getCommentaryByIdea($scope.comentary.idea.id)
                .then(setComentaries)
        ;
    };

    var getUserId = function () {
        $scope.comentary.user = angular.copy(loginService.getLoginInformation());
    };

    var getIdeaId = function () {
        $scope.comentary.idea = angular.copy(ideaService.getIdeaInformation());
    };

    var clearMessageOnComentaryTextArea = function () {
        $scope.comentary.message = "";
    };

    $scope.post = function () {
        commentaryService
                .commentaryNew($scope.comentary)
                .then(getComentariesByIdeaFromBackend)
                .then(clearMessageOnComentaryTextArea)
                .catch(function(error){
                    console.log(error);
                })
                ;
    };

    ($scope.init = function () {
        newPromise()
                .then(getUserId)
                .then(getIdeaId)
                .then(getComentariesByIdeaFromBackend)
                ;
    })();

    $rootScope.$on("someEvent", function () {
        $scope.init();
    });


});
