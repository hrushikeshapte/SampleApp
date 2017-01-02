/**
 * Created by Hrushi on 8/1/15.
 */

//Controller for public/partials/order.html

app.controller("orderController", function ($scope, $http,apiService,$routeParams) {

    //Initialization function
    $scope.init = function(){

        //call to smarty street API for address validation
        var ss = jQuery.LiveAddress({ key: '3053333398497503358'});

        // http call to getProductId api service
        var productResult = apiService.getProductId($routeParams.id);
        productResult.success(function(data){
            $scope.productName =  data[0].name;
        });

        productResult.error(function(data){
            alert("There was an error, please try again");
            window.location.href = '/' ;
        });

        //assigning routes params (id) to navId variable
        $scope.navID = $routeParams.id;

    };

    $scope.submit = function(){
        //creating new array containing order information
        var orderInfo = [
            $routeParams.id,
            $scope.name,
            $scope.address,
            $scope.city,
            $scope.state,
            $scope.zip,
            $scope.number,
            $scope.quantity
        ];

        console.log($scope.city);

        var order = apiService.placeOrder(orderInfo);
        order.success(function(data){
            alert("Order Successful");
            window.location.href = '/productInfo';
        });

        order.error(function(data){
            alert("Something went wrong, please try again later");
            window.location.href = '/';
        })

    };

});