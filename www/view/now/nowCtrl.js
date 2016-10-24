control.controller('nowCtrl', function ($scope, $http, ideaService, categoryService) {
$scope.selectedItem = ""; 
 var assignCategory = function (list){   
             $scope.categories = list;
        };     
        var error = function(object){        
            // print     
        };   
        function loadCategoryList(){        
                categoryService.categoryList()
                        .then(assignCategory)
                        .catch(error);
        } ;
        (function init(){      
            loadCategoryList();  
             loadIdeaList(); 
        })();
    
    //--
     var assignIdeas = function (list){   
             $scope.ideas = list;
        };        
        function loadIdeaList(){        
                ideaService.ideaList()
                        .then(assignIdeas)
                        .catch(error);
        } ;
         
});