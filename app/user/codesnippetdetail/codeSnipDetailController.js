(function(){
    'use strict'

    function codeSnipDetailController($rootScope, $scope, $routeParams, $http, $location, codeSnipDetailService, languageService){
        
        var labels = [];

        $scope._id = $routeParams.ID;
        var hostUrl = 'http://' + $location.host() + ':' + $location.port() + '/#/';
        
        languageService.getlanguages().then(function(response){
            $scope.languages = response.data;
        });

        codeSnipDetailService.getCodeSnipDetail($scope._id).then(function(response){
            $scope.snipDetail = response.data;
            
            if ($rootScope.userId == $scope.snipDetail.userId)
                $scope.EditAllowed = true;
            else
                $scope.EditAllowed = false;

            if($scope.snipDetail.tags != undefined){
                $scope.tags = labels = $scope.snipDetail.tags.split(',');
            }
        });

        $scope.$on('GetCodSnippetComments', function(event, value){
            GetCodeSnippetComments();
        });

        GetCodeSnippetVotes();

        GetCodeSnippetComments();


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

        $scope.AddVoteForCodeSnippet = function(){

            if($scope.codeSnippetVotes == null)
            {
                var addCodeSnippetVote = {
                    codeSnippetId: $scope.snipDetail._id,
                    votes: "1"
                }
                codeSnipDetailService.addCodeSnippetVote(addCodeSnippetVote).then(function(respose){
                    console.log("Voted successfully");
                    $scope.codeSnippetVotes = respose.data;
                })
            }
            else
            {
                var noOfVotes = parseInt($scope.codeSnippetVotes.votes) +  1;

                var updateCodeSnippetVote = {
                    codeSnippetId: $scope.snipDetail._id,
                    votes: noOfVotes.toString()
                };

                codeSnipDetailService.updateCodeSnippetVote(updateCodeSnippetVote).then(function(respose){
                    console.log("Voted successfully");
                    $scope.codeSnippetVotes = respose.data;
                })
            }
        }

        $scope.AddComment = function(){
            var newCodeSnippetComment = {
                codeSnippetId: $scope.snipDetail._id,
                comment: $scope.codeSnipComment,
                userId: $rootScope.userId
            }

            codeSnipDetailService.addCodeSnippetComment(newCodeSnippetComment).then(function(response){
                console.log('Added comment successfully');
                $rootScope.$broadcast('GetCodSnippetComments', response.data);
            })
            $scope.codeSnipComment = '';
        }

        $scope.DeleteComment = function(codeCommentId){
            codeSnipDetailService.deleteCodeSnippetComment(codeCommentId).then(function(response){
                console.log('Added comment successfully');
                $rootScope.$broadcast('GetCodSnippetComments', response.data);
            });
        }

        function GetCodeSnippetComments(){
            var codeSnippetComments = new Array();

            codeSnipDetailService.getCodeSnippetComments($scope._id).then(function(response){
                if(response.data != undefined){                   
                    var i;
                    for (i = 0; i < response.data.length; i++) {
                        var canEdit = (response.data[i].userId == $rootScope.userId);

                        var commentObj = {
                            _id: response.data[i]._id,
                            comment : response.data[i].comment,
                            userId : response.data[i].userId,
                            codeSnippetId : response.data[i].codeSnippetId,
                            isEditAllowed :  canEdit
                        }
                        codeSnippetComments.push(commentObj);
                    }
                    $scope.codeSnippetComments = codeSnippetComments;
                }
            });
        }   

        function GetCodeSnippetVotes(){
            codeSnipDetailService.getCodeSnippetVotes($scope._id).then(function(response){
                $scope.codeSnippetVotes = response.data;
            });
        }
    }    

    angular.module('codeSnip').controller('codeSnipDetailController', ['$rootScope', '$scope', '$routeParams', '$http', '$location', 'codeSnipDetailService', 'languageService', codeSnipDetailController]);
})();