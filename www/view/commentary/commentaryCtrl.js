control.controller('commentaryCtrl', function ($q,$scope, commentaryService, loginService) {
    $scope.list_comentaries = [];
    $scope.comentary = {
        "idea": {
            "id": -1
        },
        "user": {
            "id": -1
        },
        "message": ""
    };
    
    var newPromise = function(){
        var defer = $q.defer();
        defer.resolve();
        return defer.promise;
    };
    
    var setListComentaries = function (list) {
        $scope.list_comentaries = list;
    };
    var getComentariesByIdea = function () {
        commentaryService
                .getCommentaryByIdea($scope.comentary.idea.id)
                .then(setListComentaries);
    };
    
    var getUserId= function(){
      $scope.comentary.user.id = loginService.getLoginInformation().id;  
    };
    
    var getIdeaId= function(){
        $scope.comentary.idea.id = 2;
    }
    
    var clearMessageOnComentaryTextArea = function(){
        $scope.comentary.message = "";
    };
    
    $scope.post = function () {
        commentaryService
                .commentaryNew($scope.comentary)
                .then(getComentariesByIdea)
                .then(clearMessageOnComentaryTextArea)
        ;
    };
    
    (function init(){
        newPromise()
                .then(getUserId)
                .then(getIdeaId)
                .then(getComentariesByIdea)
        ;
    })();
});
