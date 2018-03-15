(function(){
	//1. 配置
	require.config({
	      //基本路径
	    baseUrl: 'js/',
	    //映射: name: path
	    paths: {
	      /*注意!!!:路径后面不能加.js*/
	      //引入第三方模块
	      'jquery': 'libs/jquery-1.10.1',
	      'angular': 'libs/angular',
	      'angular-messages': 'libs/angular-messages',

	      //自定义模块
	      'message': 'modules/message',
	      'show': 'modules/show'
	    },
	    //配置不兼容AMD的模块
	    shim: {
	      angular: {
	        exports: 'angular'
	      },
	      'angular-messages' : {
	        exports : 'angular-messages',
	        deps : ['angular']
	      }
	    }
	})

	require(['jquery','angular','angular-messages'], function($, angular){
		$('#showResult').css('backgroundColor','#FBFCD1');

		angular.module('myApp', ['ngMessages'])
		.controller('app-ctrl',['$scope', function($scope){
			$scope.showMessage = function(){
				require(['show'], function(show){
					show();
				})
			}
		}])
	    angular.bootstrap(document.getElementById('showResult'), ['myApp'])
	})

})()