var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
    $scope.users = []; //declare an empty array
    $http.get("http://jsonplaceholder.typicode.com/posts").success(function(response){ 
        $scope.users = response;  //ajax request to fetch data into $scope.users
    });

    $scope.sort = function(keyname){
    	$scope.sortKey = keyname; //set the sortKey to the param passed
    	$scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    $scope.pageSize = 5; // default pageSize
    $scope.pageSizeOptions = [5,10,25,50,100]; // options for select 

    $scope.changePageSize = function(items){
    	$scope.pageSize = items;
    };
});