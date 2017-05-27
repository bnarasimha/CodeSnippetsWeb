angular.module('codeSnip').controller('addSnipCtrl', function($scope, $http){
    $scope.Submit = function(){
        var codeSnippet = {language:$scope.language, title: $scope.title, codesnippet:$scope.codeSnip}; 
        console.log(codeSnippet);
        
        $http.post('http://localhost:8082/api/addCodeSnippet', codeSnippet)
        .success(function(data){
            alert('Added Successfully');
            $scope.language = '';
            $scope.title = '';
            $scope.codeSnip = '';
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
});