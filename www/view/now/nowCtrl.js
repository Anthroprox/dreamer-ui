control.controller('nowCtrl', function ($scope, $http, ideaService, categoryService, opinionService, loginService) {
    
    $scope.selected = {
        "item": {}
    };
    
    $scope.selected.item = {
        "id": -1,
        "name": ""
    };
    $scope.ideas = "";
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
    function loadIdeas() {
        ideaService.ideaList()
                .then(assingIdeas)
                .catch(error);
        //  console.log($scope.selectedItem);
    }
    ;
    $scope.ideasFilter = function () {
        var i = 0;
        $scope.ideasByCategory = [];
        for (i; i < $scope.ideas.length; i++) {
            if ($scope.ideas[i].category.id === $scope.selected.Item.id) {
                $scope.ideasByCategory.push($scope.ideas[i]);
            }
        }
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
        loadIdeas();
        $scope.ideasFilter();
    })();

});