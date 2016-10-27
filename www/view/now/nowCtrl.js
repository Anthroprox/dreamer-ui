control.controller('nowCtrl', function ($scope, $http, ideaService, categoryService) {

    $scope.selectedItem = 1;
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
    }
    ;
    $scope.ideasFilter = function(categoryId) {
        var i = 0;
        $scope.ideasByCategory = [];
        for (i; i < $scope.ideas.length; i++) {
            if ($scope.ideas[i].category.id == categoryId) {
                $scope.ideasByCategory.push($scope.ideas[i]);
            }
        }
    }
    ;
    (function init() {
        loadCategoryList();
        loadIdeas();
        //$scope.ideasFilter();
    })();

});