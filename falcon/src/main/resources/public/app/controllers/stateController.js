(function(){	
	'use strict';

	angular.module('app')
		.controller("StateAddController", ['$scope', 'StateService', StateAddController])
		.controller("StateEditController", ['$scope', '$routeParams', 'StateService', StateEditController])
		.controller("StateListController", ['$scope', 'StateService', StateListController]);
	
	function StateAddController($scope, StateService){
		var self = this;
		$scope.register = new Register();  
		
		function Register(id, name, country) {
			this.id = id;
		    this.name = name;
		    this.country = country;
		}
		
		$scope.submitForm = save;
		function save() {
			StateService.save($scope, $scope.register);
        }   
	}
	
	function StateEditController($scope, $routeParams, StateService){
		var self = this;
		$scope.register = StateService.findById($routeParams.id);
		
		$scope.submitForm = save;
		function save() {
			StateService.update($scope, $scope.register);
        }   
	}
	
    function StateListController($scope,StateService){
    	var self = this;
        $scope.register;  

        $scope.removeRegister = removeRegister;
        $scope.selectRegister = selectRegister;
        
        init();
        
        function init() {
        	findAll();
        }        
        
        function findAll() {
        	$scope.registers = StateService.findAll();
        }
        
        function selectRegister(register) {
        	$scope.register = register;
        }
        
        function removeRegister() {
        	StateService.remove($scope.register, $scope.registers);
        }    
    }     
    
})();