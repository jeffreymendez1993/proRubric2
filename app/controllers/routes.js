<<<<<<< HEAD
var myApp = angular.module('myApp', 
	['ngRoute','ngAnimate','ui.bootstrap']);
// , 'btford.socket-io', 'myApp.dashboardController'
=======
var myApp = angular.module('myApp', ['ngRoute','ngAnimate','ui.bootstrap']);
>>>>>>> 3f0a451412d109ae8a9d30efe2fa6f1c0ae3ffcd

myApp.config(['$interpolateProvider', function($interpolateProvider){
  // $interpolateProvider used to differentiate uses for angular from express
  $interpolateProvider.startSymbol('{[{'); 
  $interpolateProvider.endSymbol('}]}'); 
}])

<<<<<<< HEAD
// myApp.factory('mySocket', function (socketFactory) {
// 	var mySocket = socketFactory();
// 	mySocket.forward('error');
// 	return mySocket;
// 	return socketFactory();
// 	console.log(mySocket);
// });

// myApp.controller('dashboardController', function($scope, socket){
// 	socket.forward('someEvent', $scope);
//     $scope.$on('socket:someEvent', function (ev, data) {
//       $scope.theData = data;
//     });
// });


// configure our routes
myApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : '/signin.handlebars',
			controller  : 'signinController'
		})
		.when('/signup', {
			templateUrl : '/signup.handlebars',
			controller  : 'signupController'
		})
		// route for the about page
		.when('/myCourse', {
			templateUrl : '/my_courses.handlebars',
			controller  : 'dashboardController'
		})
		.when('/editRubric', {
			templateUrl : '/edit_rubric.handlebars',
			controller  : 'rubricController'
		})
		.when('/audit', {
			templateUrl : '/audit.handlebars',
			controller  : 'auditController'
		})
		// route for the contact page
		.when('/contact', {
			templateUrl : '/activites.handlebars',
			controller  : 'contactController'
		})

		.when('/dashboard', {
			templateUrl : '/dashboard.handlebars',
			controller  : 'dashboardController'

		})
		.when('/form', {
			templateUrl : '/form.handlebars',
			controller  : 'AccordionDemoCtrl'
		})
		.when('/rubric', {
			templateUrl : '/rubric.handlebars',
			controller  : 'rubricController'

		});
});

//Avoid duplicating event handlers when a user navigates back and forth between routes:


// create the controller and inject Angular's $scope
myApp.controller('signinController', function($scope){

});
myApp.controller('formController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

myApp.controller('signupController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

myApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

myApp.controller('rubricController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

myApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});
=======
	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : '/signin.handlebars',
				controller  : 'signinController'
			})
			.when('/signup', {
				templateUrl : '/signup.handlebars',
				controller  : 'signupController'
			})
			// route for the about page
			.when('/myCourse', {
				templateUrl : '/my_courses.handlebars',
				controller  : 'dashboardController'
			})
			.when('/editRubric', {
				templateUrl : '/edit_rubric.handlebars',
				controller  : 'rubricController'
			})
			.when('/audit', {
				templateUrl : '/audit.handlebars',
				controller  : 'auditController'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : '/activites.handlebars',
				controller  : 'contactController'
			})

			.when('/dashboard', {
				templateUrl : '/dashboard.handlebars',
				controller  : 'dashboardController'

			})
			.when('/form', {
				templateUrl : '/form.handlebars',
				controller  : 'AccordionDemoCtrl'
			})
			.when('/rubric', {
				templateUrl : '/rubric.handlebars',
				controller  : 'rubricController'

			});
	});

	// create the controller and inject Angular's $scope
	myApp.controller('signinController', function($scope){

	});
	myApp.controller('formController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	myApp.controller('signupController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	myApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	myApp.controller('rubricController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	myApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
>>>>>>> 3f0a451412d109ae8a9d30efe2fa6f1c0ae3ffcd
