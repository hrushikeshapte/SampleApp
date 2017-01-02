/**
 * Created by Hrushi on 7/30/15.
 */

//Controller for route '/' (index.html and login.html)

app.controller("mainController", function ($scope, $http,apiService) {

    //Initializing values
    $scope.init = function(){
      $scope.choice = 0;

        //Login form function
        $scope.loginForm = function(){
            var credentials = [
                $scope.username,
                $scope.password
            ];

            //http call to login function
            var response = apiService.login(credentials);
            response.success(function(data){
                window.location.href = '/';
            });

            response.error(function(data){
               alert("Check username/password and try again");
            });
        };

        //http call to logout function
        $scope.logout = function(){
           apiService.logout().success(function(data){
               window.location.href = '/';
           });

            apiService.logout().error(function(data){
                alert("Error logging out");
            });
        };

        //Initializing metrics on add products page
        $scope.metricsInfo = [
            {name :'m'},
            {name :'cm'}
        ];

        $scope.weightInfo = [
            {name :'kg'},
            {name :'g'}
        ];

        $scope.valueInfo = [
            {name :'USD'},
            {name :'AED'},
            {name :'CAD'},
            {name :'EUR'},
            {name :'GBP'},
            {name :'INR'}
        ];

        //Setting initial values of metrics dropdown for add
        $scope.widthSelect = $scope.metricsInfo[0];
        $scope.lengthSelect = $scope.metricsInfo[0];
        $scope.heightSelect = $scope.metricsInfo[0];
        $scope.weightSelect = $scope.weightInfo[0];
        $scope.valueSelect = $scope.valueInfo[0];

    };

});



