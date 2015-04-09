apiTest.controller('CategoriesController', function ($scope, $routeParams, appService) {
    $scope.categories = [];
    $scope.category = {};
    $scope.alert = {showAlert: false, alertClass: 'success', msg: ''};
    $scope.dataAvailable = true;

    appService.getData('categories', $routeParams.id).then(function (data) {
            console.log(data);
            $scope.category = data;
        },
        function (error) {
            $scope.alert = {showAlert: true, msg: error, alertClass: 'danger'};
        }
    );
 
    $scope.loadCategories = function () {
        appService.getData('categories').then(function (data) {
                angular.forEach(data, function (value) {
                    $scope.categories.push(value);
                });
            },
            function (error) {
                $scope.alert = {showAlert:true, msg: error, alertClass: 'danger'};
            }
        );
    };
 
    $scope.loadCategories();
});