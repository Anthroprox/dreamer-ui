control.controller('tenCtrl', function ($scope, categoryService,ideaService, opinionService, loginService) {
    
     $scope.selectedItem = 1;
    $scope.ideas = [];
    $scope.ideasByCategory = [];

    var assignCategory = function (list) {
        $scope.categories = list;
    };
    var assingIdeas = function (list) {
        $scope.ideas = list;
        //$scope.ideasFilter();
    };
    var error = function (object) {
        // print     
    };
    function loadCategoryList() {
        categoryService.categoryList()
                .then(assignCategory)
                .catch(error);
    }
    ;
    function loadIdeas(idea) {
        ideaService.ideaTenList(idea)
                .then(assingIdeas)
                .catch(error);
    }
    ;
    $scope.ideasFilter = function(categoryId) {
        loadIdeas(categoryId);
    }
    ;
    $scope.assignApprove = function (idIdea) {
        opinionService.opinionNew({
            "user": {"id": loginService.getLoginInformation().id},
            "idea": {"id": idIdea},
            "type": {"id": 1}
        })
                .then(loadIdeas)
                .then($scope.ideasFilter)
                .catch(error);
    };
    $scope.assingDisapprove = function (idIdea) {
        opinionService.opinionNew({
            "user": {"id": loginService.getLoginInformation().id},
            "idea": {"id": idIdea},
            "type": {"id": 2}
        })
                .then(loadIdeas)
                .then($scope.ideasFilter)
                .catch(error);
    };
    (function init() {
        loadCategoryList();
        loadIdeas(1);
        //$scope.ideasFilter();
    })();
});