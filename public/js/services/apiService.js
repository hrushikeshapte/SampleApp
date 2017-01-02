/**
 * Created by Hrushi on 7/31/15.
 */

//All http calls to server made from this Api

app.factory('apiService',['$http', function($http){
    return{
        getProduct:function(){
            return $http.get('/api/productInfo');
        },

        getProductId:function(id){
            return $http.get('/api/productInfo/'+id)
        },

        createProduct:function(data){
            return $http.post('/api/product',data);
        },

        editProduct: function(data){
            return $http.post('/api/editProduct',data);
        },

        placeOrder:function(data){
            return $http.post('/api/orderProduct',data)
        },

        viewOrder:function(id){
            return $http.get('/api/orderInfo/'+id)
        },

        viewOrderDetails:function(id){
            return $http.get('/api/orderDetails/'+id)
        },

        deleteProduct:function(id){
            return $http.put('/api/deleteProduct/'+id)
        },

        deleteOrder:function(id){
            return $http.put('/api/deleteOrder/'+id)
        },

        searchProduct:function(text){
            return $http.get('/api/searchProduct/'+text)
        },

        login:function(data){
            return $http.post('api/login',data);
        },

        logout:function(){
            return $http.get('/api/logout');
        }

    }
}]);