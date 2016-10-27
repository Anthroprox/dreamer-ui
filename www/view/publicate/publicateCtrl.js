control.controller('publicateCtrl', function ($q, $scope, $ionicPopup, categoryService, ideaService) {

    $scope.categoryList = [];
    $scope.publicate = {
        "title": "",
        "body": "",
        "category": {},
        "user": {
            "id": 5
        }
    };

    var newPromise = function () {
        var defer = $q.defer();
        defer.resolve();
        return defer.promise;
    };

    var loadCategoryList = function () {
        return categoryService.categoryList();
    };

    var assignCategoryList = function (list) {
        $scope.categoryList = list;
    };

    var assignFirstCategory = function () {
        $scope.publicate.category = $scope.categoryList[0];
    };


    var ErrorListaCategories = function (error) {
        $ionicPopup.alert({
            title: 'Error!',
            template: "Imposible obtener la lista de categorias"
        });
    };

    var SuccessCreateIdea = function () {
        $ionicPopup.alert({
            title: 'Publicación',
            template: "Idea publicada Satisfactoriamente"
        });
    };

    var errorPublicateIdea = function (error) {      
        throw (typeof error === 'object')? error.message : error;
    };

    var postCreateNewPublicate = function () {
        return ideaService.ideaNew($scope.publicate)
                .then(SuccessCreateIdea)
                ;
    };

    var checkEmptyTitle = function () {
        if ($scope.publicate.title.length === 0)
            throw "El título no puede estar vacío";
    };

    var checkEmptyBody = function () {
        if ($scope.publicate.body.length === 0)
            throw "El cuerpo no puede estar vacío";
    };

    var reportError = function (error) {
        throw error;
    };
    
    var throwError = function(error){
        $ionicPopup.alert({
            title: 'Error!',
            template: error
        });
    };

    $scope.public = function () {
        newPromise()
                .then(checkEmptyTitle)
                .then(checkEmptyBody)
                .catch(reportError)
                .then(postCreateNewPublicate)
                .catch(errorPublicateIdea)
                .catch(throwError)
                ;
    };


    function init() {
        loadCategoryList()
                .then(assignCategoryList)
                .then(assignFirstCategory)
                .catch(ErrorListaCategories)
                ;
    }

    init();
});