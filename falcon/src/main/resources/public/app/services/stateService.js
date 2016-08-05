(function() {
    'use strict';
    
     angular.module("app")
        .factory("StateService",  ['$location', '$resource', 'notify', StateService]);       
       
        function StateService($location, $resource, notify) {
            var restResource = $resource('/states/' + ':id', { id: '@_id' }, { update: { method: 'PUT' } });
            
            var service = {
        		save: save,
        		update: update,
                remove: remove,
                findAll: findAll,
                findById: findById
            };
            return service;
            
            function save($scope, register){
            	restResource.save(register,
    	    		function(data, status) {
    	    			$location.path('/statelist');
    	    			notify.successOnSave();
    	        	}, 
    	        	function(data, status) {
    	        		$scope.message = "Não foi possível Salvar o registro.";
    	        	});
            };
            
            function update($scope, register){
            	restResource.update(register,
			    		function(data, status) {
			    			$location.path('/statelist');
			    			notify.successOnSave();
			        	}, 
			        	function(data, status) {
			        		$scope.message = "Não foi possível Alterar o registro.";
		        	});
            };  
            
            function remove(register, listFromRemove){
            	if (register) {
	            	restResource.delete({id:register.id},
		        		function(data) {
			        		var index = listFromRemove.indexOf(register);
			        		listFromRemove.splice(index, 1);
			        		notify.successOnRemove();
		        		});
            	}
            };      
            
            function findAll(){
            	return restResource.query(function(result) {
            		return result;
            	});
            };
            
            function findById(registerId){
            	return restResource.get({id:registerId})
            };
        }    
})();  