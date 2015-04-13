var app = angular.module('friendsList'); 

app.controller('mainCtrl', function($scope){
	$scope.friends = ["Jake", "Corbett", "Jacob", "Byron"]; 

	$scope.addFriend = function(){ //$scope is an object, so .addFriend() is a method! I get it now... 
		$scope.friends.push($scope.newFriend); 		
	}

	$scope.removeFriend = function(){
		if($scope.)
	}


}); 