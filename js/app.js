var apiTest = angular.module('apiTest', ['ngRoute']);

function pollsAppRouteConfig($routeProvider){
    $routeProvider.
        when('/', {
            controller: 'IndexController',
            templateUrl: 'partials/list.html'
        }).
        when('/categories', {
            controller: 'CategoriesController',
            templateUrl: 'partials/categories.html'
        }).
        when('/product/create', {
            controller: 'ProductsController',
            templateUrl: 'partials/productcreate.html'
        }).
        when('/product/update/:id', {
            controller: 'ProductsController',
            templateUrl: 'partials/product_update.html'
        }).
        when('/product/:id', {
            controller: 'ProductsController',
            templateUrl: 'partials/product.html'
        }).
        when('/category/:id', {
            controller: 'CategoriesController',
            templateUrl: 'partials/category.html'
        }).
        when('/distributor/:id', {
            controller: 'DistributorsController',
            templateUrl: 'partials/distributor.html'
        }).
        otherwise({
        	redirectTo: '/'
        });
}

apiTest.config(pollsAppRouteConfig);
apiTest.baseUrl = "http://localhost/task_developer_php/public_html/api/";