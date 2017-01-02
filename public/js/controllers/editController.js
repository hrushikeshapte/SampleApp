/**
 * Created by Hrushi on 7/31/15.
 */

//Controller for public/partials/edit-product.html

app.controller("editController", function ($scope, $http, apiService, $routeParams) {

    //Init function gets called when partial is loaded in index.html
    $scope.init = function(){

        //http call to productId
        var productResult = apiService.getProductId($routeParams.id);
        productResult.success(function(data){
            populate(data);
        });

        productResult.error(function(data){
           alert("There was an error, please try again");
            window.location.href = '/' ;
        });

        //getting params from rest Api url
        $scope.navID = $routeParams.id;
    };

    //New array based on edited values
    var populate = function(products){
        $scope.name= products[0].name;
        $scope.description = products[0].description;
        $scope.width = products[0].width;
        $scope.height = products[0].height;
        $scope.length = products[0].length;
        $scope.weight = products[0].weight;
        $scope.value = products[0].value;
    };

    $scope.submit = function(){

        //Adjusting data to convert from cm to m and g to kg
        console.log(this.widthSelect.name);
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

        $scope.info = [
            this.name,
            this.description,
            this.width,
            this.length,
            this.height,
            this.weight,
            this.value,
            $routeParams.id
        ] ;

     // http call to editProduct apiService
     var edit = apiService.editProduct($scope.info);
        edit.success(function(data){
            alert("Edit Successful");
            window.location.href = '/productInfo';
        });

        edit.error(function(data){
           alert("Something went wrong. Please try again later");
            window.location.href = '/';
        });
    }

});
