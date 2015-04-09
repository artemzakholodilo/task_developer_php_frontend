apiTest.controller('ProductsController', function ($scope, $routeParams, appService) {
    $scope.product = {};
    $scope.productDistributor = {};
    $scope.categories = [];
    $scope.alert = {showAlert: false, alertClass: 'success', msg: ''};


        appService.getData('products', $routeParams.id).then(function (data) {
                $scope.product = data.product;
                $scope.categories = data.categories;
                $scope.productDistributor = getDistributor($scope.product.distributor_id);
                console.log($scope.product, "product");
                console.log($scope.productDistributor, "distributor");
            },
            function (error) {
                $scope.alert = {showAlert: true, msg: error, alertClass: 'danger'};
            }
        ); 
 
    $scope.save = function () {
        if ($scope.product) {
            appService.postData('products', $scope.product).then(function (data) {
                    $scope.alert = { showAlert:true, msg: angular.fromJson(data).mesg, alertClass: 'success' };
                },
                function (error) {
                    $scope.alert = {showAlert:true, msg: error, alertClass: 'danger'};
                });
        } else {
            $scope.alert = {showAlert:true, msg: 'Select something please!', alertClass: 'warning'};
        }
    };

    $scope.update = function() {
        if ($scope.product) {
            appService.putData('products', $routeParams.id, $scope.product).then(function(data) {
                    console.log(data);
                },
                function(error) {
                    console.log("Error", error);
                }
            );
        } else {
            console.log("Something wrong");
        }
    };

    function getDistributor(id) {
        appService.getData('distributors', id).then(function (data) {
                console.log(data, "distributor");
                $scope.productDistributor = data;
            },
            function (error) {
                $scope.alert = {showAlert: true, msg: error, alertClass: 'danger'};
            }
        );

    };
});