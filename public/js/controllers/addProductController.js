/**
 * Created by Hrushi on 7/30/15.
 */

//Controller for public/partials/add-product.html

app.controller("addProductController", function ($scope, $http, apiService) {

    //Form submit function
    $scope.submit = function(){

        //Below if statements are used to convert data from cm to m / g to kg
        if(this.widthSelect.name == 'cm')
        {
            this.width = this.width/100 ;
        }

        if(this.heightSelect.name == 'cm')
        {
            this.height = this.height/100 ;
        }

        if(this.lengthSelect.name == 'cm')
        {
            this.length = this.length/100 ;
        }

        if(this.weightSelect.name == 'g')
        {
            this.weight = this.weight/1000 ;
        }

        //Creating new array to pass in data from the form
        $scope.info = [
            this.name,
            this.description,
            this.width,
            this.length,
            this.height,
            this.weight,
            this.value
        ] ;

     // Calling createProduct apiService ($http) to add new entry
        var create = apiService.createProduct($scope.info);
        create.success(function(data){
            alert("Add successful");
           window.location.href = '/' ;
        });

        create.error(function(data){
            alert("Something went wrong, please try again");
            window.location.href = '/' ;
        })
    }
});