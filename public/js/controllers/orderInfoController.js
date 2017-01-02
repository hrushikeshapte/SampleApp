/**
 * Created by Hrushi on 8/1/15.
 */

//Controller for public/partials/order-info.html

app.controller("orderInfoController", function ($scope, $http,apiService,$routeParams) {

    //Initialization function
    $scope.init = function(){

        $scope.navID = $routeParams.id;

        //http call to apiService
        var productResult = apiService.viewOrder($routeParams.id);
        productResult.success(function(data){
            $scope.orderInfo =  data;
        });

        productResult.error(function(data){
            alert("There was an error, please try again");
            window.location.href = '/' ;
        });

    };

});