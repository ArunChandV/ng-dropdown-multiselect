(function () {

	'use strict';

	var dependencies = ['ng-dropdown-multiselect'];

	angular.module('ngDropdownMultiselectDemo', dependencies)

		/* @ngInject */
		.controller('ngDropdownMultiselectDemoCtrl', function ($scope) {

			$scope.examplemodel = [{'id':1}];
			$scope.$watch('examplemodel', function () { $scope.asd = $scope.examplemodel.id; },true);
			$scope.exampledata = [
				{id: 1, label: 'David'},
				{id: 2, label: 'Jhon'},
				{id: 3, label: 'Danny'}];
			$scope.examplesettings = {
				showCheckAll: true,
				showUncheckAll: true,
				toggleCheckAllNone: true,
				dynamicTitle: true,
				smartButtonMaxItems: 3,
				enableNewItem: true,
				// selectionLimit: 2,
				enableEdit: true,
				closeOnMouseOut: true
			};

			$scope.exampleevents = {
				onNewItemAdd: function (newItem) {
					var id = $scope.exampledata.length + 1;
					$scope.exampledata.push({id:id, label:newItem});
					console.log(newItem);
				},
				// onItemEdit: function (id, label) {
				// 	// debugger;
				// },
				// onItemRemove: function (id) {
				// 	// debugger;
				// }
			};

		});

})();