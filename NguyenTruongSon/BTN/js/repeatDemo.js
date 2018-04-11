var app = angular.module("myApp",[]);
app.controller("myController", function($scope){
	var employee = [
		{firstName:"Nguyen Duc",lastName :"Thai",gender:"Male",salary:5000},
		{firstName:"Tong Thanh",lastName :"Son",gender:"Male",salary:2000},
		{firstName:"Nguyen Truong",lastName :"Son",gender:"Male",salary:4000},
		{firstName:"Nguyen Ba",lastName :"Tien",gender:"Male",salary:5000}
	]
	$scope.employee=employee;
});