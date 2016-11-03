control.controller('tenCtrl', function ($scope, categoryService, ideaService, opinionService, loginService) {
    $scope.selected = {
        "Item": {}
    };
    $scope.ideas = [];

    var assignCategory = function (list) {
        $scope.categories = list;
    };
    var assingIdeas = function (list) {
        $scope.ideas = list;
    };
    var error = function (object) {
        console.log(object);   
    };
    function loadCategoryList() {
        categoryService.categoryList()
                .then(assignCategory)
                .catch(error);
    }
    ;
    function loadIdeas() {
        if ($scope.selected.Item.id)
            ideaService
                    .ideaTenList($scope.selected.Item.id)
                    .then(assingIdeas)
                    .catch(error);
    }
    ;
    $scope.ideasFilter = function () {
        loadIdeas($scope.selected.Item.id);
    }
    ;
    $scope.assignApprove = function (idIdea) {
        opinionService.opinionNew({
            "user": {"id": loginService.getLoginInformation().id},
            "idea": {"id": idIdea},
            "type": {"id": 1}
        })
                .then(loadIdeas)
                .catch(error);
    };
    $scope.assingDisapprove = function (idIdea) {
        opinionService.opinionNew({
            "user": {"id": loginService.getLoginInformation().id},
            "idea": {"id": idIdea},
            "type": {"id": 2}
        })
                .then(loadIdeas)
                .catch(error);
    };
    (function init() {
        loadCategoryList();
    })();
});