var myapp = angular.module("myapp", []);
myapp.controller("mycontroller", function($scope,$http) {
	$scope.login = function() {
		console.log("用户登陆:" + $scope.username + "," + $scope.password);
		// $http.get("http://172.19.25.198:8080/app/h5/login?username=1111&password=1111",{
		// 	username: '1111',
		// 	password: '1111',
		// }).then(function success(response){
		// 	console.log("haha")
		// 	console.log(response)
		// },
		// function error (response){
		// 	console.log(response)
		// })

		mui.ajax("http://172.19.25.198:8080/app/h5/login", {
			data: {
				username: '1111',
				password: '1111',
			},
			dataType: 'JSON',
			type: 'GET',
			timeout:2000,
			success: function(data) {
				console.log(data);
			},
			error: function(xhr, type, errorThrown) {
				mui.mui.toast('失败')
			}
		});
	}
})
