/**
 * Created by Hrushi on 8/1/15.
 */

//Controller for public/partials/order-details.html

app.controller("orderDetailsController", function ($scope, $http,apiService,$routeParams) {

    //Initialization function for page
    $scope.initDetails = function(){
        //http call to api service
        var productResult = apiService.viewOrderDetails($routeParams.id);
        productResult.success(function(data){
            $scope.detailInfo =  data;
        });

        productResult.error(function(data){
            alert("There was an error, please try again");
            window.location.href = '/' ;
        });

        $scope.navID = $routeParams.id;
    };

    //Function executed on delete button click
    $scope.deleteOrder = function(){
        var answer = confirm('Are you sure you want to delete this order ? You cannot undo this action');
        //if user answers yes
        if(answer){
            //Call apiService for delete
        var productResult = apiService.deleteOrder($routeParams.id);
        productResult.success(function(data){
            window.location.href = '/productInfo' ;
        });

            productResult.error(function(data){
                alert("There was an error, please try again");
                window.location.href = '/' ;
            });
      }
    }

});