apiTest.controller('IndexController', function ($scope, appService) {
    $scope.products = [];
    $scope.categories = [];
    $scope.distributors = [];
    $scope.alert = {showAlert: false, alertClass: 'success', msg: ''};
    $scope.dataAvailable = true;
 
    $scope.loadProducts = function () {
        appService.getData('products').then(function (data) {
                // angular.forEach(data, function (value) {
                //     $scope.products.push(value);
                // });
                $scope.products = data;
            },
            function (error) {
                $scope.alert = {showAlert:true, msg: error, alertClass: 'danger'};
            }
        );
    };

    $scope.select = function() {
        alert(13);
    };

    appService.getData('categories').then(function(data) {
                $scope.categories = data;
            },
            function(error) {
                $scope.alert = {showAlert:true, msg: error, alertClass: 'danger'};
            }
    );

    appService.getData('distributors').then(function(data) {
                $scope.distributors = data;
            },
            function(error) {
                $scope.alert = {showAlert:true, msg: error, alertClass: 'danger'};
            }
    );
 
    $scope.loadProducts();
});