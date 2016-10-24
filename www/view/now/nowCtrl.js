control.controller('nowCtrl', function ($scope, $http, ideaService, categoryService) {
$scope.selectedItem = ""; 
 var assignCategory = function (list){   
             $scope.data=list;
        };   
        var assingIdeas = function(list){
            $scope.ideas=list;
        };
        var error = function(object){        
            // print     
        };   
        function loadCategoryList(){        
                categoryService.categoryList()
                        .then(assignCategory)
                        .catch(error);
        } ;
        function loadIdeas(){
            ideaService.ideaList()
                        .then(assingIdeas)
                        .catch(error);
        };
        (function init(){      
            loadCategoryList();
            loadIdeas();
        })();
});