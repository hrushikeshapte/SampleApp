/**
 * Created by Hrushi on 8/1/15.
 */

//Controller for public/partials/product-info.html

app.controller("productInfoController", function ($scope, $http,apiService,$routeParams) {

    //Declaring variables for currency manipulation
    var currencyResults;
    var originalValue;

    //Initialization function
    $scope.init = function(){

        //Setting default currency to USD
        $scope.currency = "USD";

        //http call to api service
        var productResult = apiService.getProductId($routeParams.id);
        productResult.success(function(data){
            $scope.details =  data;
            originalValue = $scope.details[0].value;
        });

        productResult.error(function(data){
            alert("There was an error, please try again");
            window.location.href='/error';
        });

       var currency = $http.get('https://openexchangerates.org/api/latest.json?app_id=e630c2181b0047e8a86b620e45c8f910');
        currency.success(function(data){
            currencyResults = data;
        });

        currency.error(function(data){
            $scope.isDisabled = false;
        });

        $scope.navID = $routeParams.id;

    };

    //Below functions used to refresh value on dropdown currency selection
    $scope.usdClick = function(){
        $scope.details[0].value = originalValue;
        $scope.currency = "USD";
    };

    $scope.aedClick = function(){
       this.details[0].value = originalValue * currencyResults.rates.AED;
       $scope.currency = "AED";
    };

    $scope.gbpClick = function(){
        this.details[0].value = originalValue * currencyResults.rates.GBP;
        $scope.currency = "GBP";
    };

    $scope.euroClick = function(){
        this.details[0].value = originalValue * currencyResults.rates.EUR;
        $scope.currency = "EUR";
    };

    $scope.inrClick = function(){
        this.details[0].value = originalValue * currencyResults.rates.INR;
        $scope.currency = "INR";
    };

    //Delete a product .. called on click of delete
    $scope.remove = function(){
        var answer = confirm('Are you sure you want to delete? All associated product orders with this product will also be deleted. You cannot undo this action');
        //if user wants to delete product
        if(answer){
            //http call to delete api service
            var productResult = apiService.deleteProduct($routeParams.id);
            productResult.success(function(data){
                window.location.href= '/productInfo';
            });

            productResult.error(function(data){
                alert("There was an error, please try again");
                window.location.href = '/' ;
            });

        }
    }

});