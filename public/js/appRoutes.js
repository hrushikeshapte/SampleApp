/**
 * Created by Hrushi on 8/1/15.
 */

//All the routes to make app render as single page application
app.config(function($routeProvider,$locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html',
                controller: 'mainController'
            }).
            when('/productInfo', {
                templateUrl: 'partials/view-products.html',
                controller: 'viewProductController'
            }).
            when('/productInfo/:id', {
                templateUrl: '../partials/product-info.html',
                controller: 'productInfoController'
            }).
            when('/add-product', {
                templateUrl: 'partials/add-product.html',
                controller: 'addProductController'
            }).
            when('/editProduct/:id', {
                templateUrl: '../partials/edit-product.html',
                controller: 'editController'
            }).
            when('/orderProduct/:id', {
                templateUrl: '../partials/order.html',
                controller: 'orderController'
            }).
            when('/orderInfo/:id', {
                templateUrl: '../partials/order-info.html',
                controller: 'orderInfoController'
            }).
            when('/orderDetails/:id', {
                templateUrl: '../partials/order-details.html',
                controller: 'orderDetailsController'
            });

    $locationProvider.html5Mode({
            enabled:true,
            requireBase: false
        });
});