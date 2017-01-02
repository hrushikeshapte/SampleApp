/**
 * Created by Hrushi on 7/30/15.
 */

//Controller for public/partials/view-products.html

app.controller("viewProductController", function ($scope, $http,$resource,apiService) {

    //Initialization function
    $scope.initProduct = function(){

        //http call to apiService
        var result = apiService.getProduct();
        result.success(function(data){
            $scope.results =  data;

        });

        result.error(function(data){
            alert("There was an error, please try again");
            window.location.href = '/' ;
        });
    };

    //If user inputs into search
    $scope.search = function(){
        //http call to search api service
        var result = apiService.searchProduct($scope.searchText);
        result.success(function(data){
           $scope.results = data;
        });

        result.error(function(data){
            alert("There was an error, please try again");
            window.location.href = '/' ;
        });
    }

});