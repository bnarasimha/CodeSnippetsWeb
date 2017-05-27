angular.module('codeSnip').controller('addSnipCtrl', function($scope, $http){
    $scope.Submit = function(){
        var codeSnippet = {language:$scope.language, title: $scope.title, codesnippet:$scope.codeSnip}; 
        console.log(codeSnippet);
        
        $http.post('http://localhost:8082/api/addCodeSnippet', codeSnippet)
        .success(function(data){
            console.log('Code snippet added');
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
});