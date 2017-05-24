(function(){
    'use strict'

    function snipDetailController($scope, $routeParams){
        $scope.ID = $routeParams.ID;

        $scope.snipDetail = {'id':'1','language':'c#', 'title':'How to add two dates', 'CodeSnippet':"var localDateTime = new LocalDate(2000, 1, 10).AtMidnight();var period = new PeriodBuilder {Years = 11, Months = 2, Days = 5,Hours = 10, Minutes = 10, Seconds = 11}.Build();var result = localDateTime + period;"}
    }    

    angular.module('codeSnip').controller('snipDetailController', snipDetailController);
})();