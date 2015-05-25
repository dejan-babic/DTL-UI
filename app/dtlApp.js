(function(){
	'use strict';

	/**
	 * Definition of the app & basic configuration
	 */
	angular.module('dtl', [
			'ngRoute',
			'ng.deviceDetector',
			'dtlSystemMessage',
			'dtlConfig'
		])
		.config(function ($routeProvider) {
			$routeProvider.when('/Home', {
				templateUrl: 'app/homepage/templates/views/home.html',
				controller: 'homeCtrl',
				controllerAs: 'home',
				resolve: {
					books: function($q, $timeout) {
						var deferred = $q.defer();
						$timeout(function() {
							deferred.resolve([{"id":"KnCXVDTEjsgC","title":"C++ Programing","authors":["Donald Walker"],"publisher":"Global Media","publishedDate":"2007","pageCount":232,"printType":"BOOK","categories":["C++ (Computer program language)"],"thumbnail":"http://bks5.books.google.com/books/content?id=KnCXVDTEjsgC&printsec=frontcover&img=1&zoom=1&source=gbs_api","language":"en","link":"http://books.google.com/books?id=KnCXVDTEjsgC&dq=intitle:programing&as_pt=BOOKS&hl=&source=gbs_api"},{"id":"UKT2w51OjcAC","title":"Java 2 Programing Little Black Book (Ver. 1.4)","authors":["Alain Trottier"],"publisher":"Dreamtech Press","publishedDate":"2002-12-23","pageCount":456,"printType":"BOOK","thumbnail":"http://bks6.books.google.com/books/content?id=UKT2w51OjcAC&printsec=frontcover&img=1&zoom=1&source=gbs_api","language":"en","link":"http://books.google.com/books?id=UKT2w51OjcAC&dq=intitle:programing&as_pt=BOOKS&hl=&source=gbs_api"},{"id":"MBhQeuTtgQoC","title":"Goal programing","authors":["Bruce G. Hansen","United States. Forest Service","Northeastern Forest Experiment Station (Radnor, Pa.)"],"publishedDate":"1977","pageCount":4,"printType":"BOOK","categories":["Christmas tree growing"],"language":"en","link":"http://books.google.com/books?id=MBhQeuTtgQoC&dq=intitle:programing&as_pt=BOOKS&hl=&source=gbs_api"},{"id":"oMwEAAAAIAAJ","title":"Comments on Khachian's algorithm for linear programing","authors":["Stanford University. Systems Optimization Laboratory","George B. Dantzig"],"publishedDate":"1979","pageCount":7,"printType":"BOOK","thumbnail":"http://bks8.books.google.com/books/content?id=oMwEAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","language":"en","link":"http://books.google.com/books?id=oMwEAAAAIAAJ&dq=intitle:programing&as_pt=BOOKS&hl=&source=gbs_api"},{"id":"bWdsMwEACAAJ","title":"Effects of Transitional Goal-setting and Programing on the Number of Children in Foster Care who Will Meet the High School Graduation Requirement","authors":["Kim Smith"],"publishedDate":"2011","printType":"BOOK","categories":["Dissertations, Academic"],"language":"en","link":"http://books.google.com/books?id=bWdsMwEACAAJ&dq=intitle:programing&as_pt=BOOKS&hl=&source=gbs_api"},{"id":"-AQOtwAACAAJ","title":"Parallel Programing with Interoperable MPI","authors":["William Lowry George","John G. Hagedorn","Judith E. Devaney","Information Technology Laboratory (National Institute of Standards and Technology). Mathematical and Computational Sciences Division"],"publishedDate":"2003","pageCount":12,"printType":"BOOK","categories":["Beowulf clusters (Computer systems)"],"language":"en","link":"http://books.google.com/books?id=-AQOtwAACAAJ&dq=intitle:programing&as_pt=BOOKS&hl=&source=gbs_api"},{"id":"QnoNnwEACAAJ","title":"College Wind Band Programing","authors":["Lynn Ruth Gelpi"],"publishedDate":"1984","pageCount":312,"printType":"BOOK","categories":["Band music"],"language":"en","link":"http://books.google.com/books?id=QnoNnwEACAAJ&dq=intitle:programing&as_pt=BOOKS&hl=&source=gbs_api"},{"id":"-8KrHAAACAAJ","title":"Excessive Programing and Procurement of Sweetened Condensed Milk for Vietnam","authors":["United States. Congress. House. Committee on Government Operations"],"publishedDate":"1968","pageCount":9,"printType":"BOOK","categories":["Condensed milk"],"language":"en","link":"http://books.google.com/books?id=-8KrHAAACAAJ&dq=intitle:programing&as_pt=BOOKS&hl=&source=gbs_api"},{"id":"NN86nQEACAAJ","title":"Agricultural Programing","authors":["Food and Agriculture Organization of the United Nations"],"publishedDate":"1960","pageCount":50,"printType":"BOOK","categories":["Agricultural assistance"],"language":"en","link":"http://books.google.com/books?id=NN86nQEACAAJ&dq=intitle:programing&as_pt=BOOKS&hl=&source=gbs_api"},{"id":"cYPxSAAACAAJ","title":"County Specific and Targeted Analysis for CVD/Diabetes Programing","authors":["Maryland. Department of Health and Mental Hygiene"],"publishedDate":"1989","printType":"BOOK","language":"en","link":"http://books.google.com/books?id=cYPxSAAACAAJ&dq=intitle:programing&as_pt=BOOKS&hl=&source=gbs_api"}]);
						}, 5000);
						return deferred.promise;
					}
				}
			});
			$routeProvider.when('/Load', {
				templateUrl: 'app/splashscreen/templates/views/splash.html',
				controller: 'splashCtrl',
				controllerAs: 'splash'
			});
			$routeProvider.otherwise({ redirectTo: '/Load' });
		})
		.config(function ($logProvider, CONFIG) {
			$logProvider.debugEnabled(CONFIG.DEBUG);
		});
})();