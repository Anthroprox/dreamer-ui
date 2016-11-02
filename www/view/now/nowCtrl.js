control.controller('nowCtrl', function ($scope, $http, ideaService, categoryService, opinionService, loginService) {

    $scope.selectedItem = {};
    $scope.ideas = "";
    $scope.ideasByCategory = [];
    $scope.likes = 0;
    
    $scope.$watch('$scope.selectedItem', function (newValue, oldValue, scope) {
        console.log($scope.selectedItem);
        console.log('quiero dormir');
    },true);

    var assignCategory = function (list) {
        $scope.categories = list;
    };
    var assingIdeas = function (list) {
        $scope.ideas = list;
        console.log($scope.ideas);
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
    $scope.ideasFilter = function (categoryId) {
        var i = 0;
        $scope.ideasByCategory = [];
        for (i; i < $scope.ideas.length; i++) {
            if ($scope.ideas[i].category.id == categoryId) {
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
        }).then(loadIdeas).catch(error);
    };
    $scope.assingDisapprove = function (idIdea) {
          opinionService.opinionNew({
            "user": {"id": loginService.getLoginInformation().id},
            "idea": {"id": idIdea},
            "type": {"id": 2}
        }).then(loadIdeas).catch(error);
    };
    (function init() {
        loadCategoryList();
        loadIdeas();
        //$scope.ideasFilter();
    })();

});