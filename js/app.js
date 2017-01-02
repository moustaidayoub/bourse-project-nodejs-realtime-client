var app=angular.module("bourseApp",[]);
//var socket = io.connect('http://localhost:8300');
app.controller("bourseController",function($scope,$http){
	$scope.societes={};



	socket.on('connect', function(){console.log('Connected !!')});
	socket.on('refreshSocietes',function(data){
		console.log("arrived");
		$scope.societes=data;
	});

	
});