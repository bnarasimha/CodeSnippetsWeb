(function(){
    'use strict'

    function codeSnipDetailController($rootScope, $scope, $routeParams, $http, $location, codeSnipDetailService, languageService, listCodeSnippetsService){
        
        $scope._id = $routeParams.ID;
        var hostUrl = 'http://' + $location.host() + ':' + $location.port() + '/#/';
        
        var labels = [];

        languageService.getlanguages().then(function(response){
            $scope.languages = response.data;
        });

        codeSnipDetailService.getCodeSnipDetail($scope._id).then(function(response){
            $scope.snipDetail = response.data;
            $scope.tags = labels = $scope.snipDetail.tags.split(',');

            if ($rootScope.userId == $scope.snipDetail.userId)
                $scope.EditAllowed = true;
            else
                $scope.EditAllowed = false;
        });

        codeSnipDetailService.getCodeSnippetVotes($scope._id).then(function(response){
            $scope.codeSnippetVotes = response.data;
        });

        $scope.Back = function(){
            location.href = hostUrl;
        }

        $scope.Update = function(){

            var codeSnippet = {
                language: $scope.snipDetail.language,
                title: $scope.snipDetail.title,
                codesnippet: $scope.snipDetail.codesnippet,
                urlreference: $scope.snipDetail.urlreference,
                tags: labels.toString(),
                _id : $scope.snipDetail._id,
            };
            console.log(codeSnippet);
            codeSnipDetailService.updateCodeSnippet(codeSnippet).then(function(response){
                console.log('Updated successfully');
            });
            alert('Updated Successfully');
            location.href = hostUrl;
        }

        $scope.Delete = function(){            
            codeSnipDetailService.deleteCodeSnippet($scope.snipDetail._id).then(function(response){
                console.log('Delete successfull');
            });
            alert('Deleted Successfully');
            location.href = hostUrl;
         }

         $scope.AddLabel = function () {
            if($scope.newTag != undefined){
                labels.push($scope.newTag);
                $scope.tags = labels;
                $scope.newTag = '';
                document.querySelector("#newTag").focus();
            }
        }

        $scope.RemoveLabel = function (tag) {
            labels.splice(labels.indexOf(tag), 1);
            $scope.tags = labels;
        }

        $scope.voteForCodeSnippet = function(){

            if($scope.codeSnippetVotes == null)
            {
                var addCodeSnippetVote = {
                    codeSnippetId: $scope.snipDetail._id,
                    votes: "1"
                }
                codeSnipDetailService.addCodeSnippetVote(addCodeSnippetVote).then(function(respose){
                    console.log("Voted successfully");
                })
            }
            else
            {
                var noOfVotes = parseInt($scope.codeSnippetVotes.votes) +  1;

                var updateCodeSnippetVote = {
                    codeSnippetId: $scope.snipDetail._id,
                    votes: noOfVotes.toString()
                };

                codeSnipDetailService.addCodeSnippetVote(updateCodeSnippetVote).then(function(respose){
                    console.log("Voted successfully");
                })
            }
        }
    }    

    angular.module('codeSnip').controller('codeSnipDetailController', ['$rootScope', '$scope', '$routeParams', '$http', '$location', 'codeSnipDetailService', 'languageService', 'listCodeSnippetsService', codeSnipDetailController]);
})();