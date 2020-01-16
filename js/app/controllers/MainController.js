function MainController($scope){
  $scope='Kevin';
}

angular
.module('app')
.controller('MainController', MainController);

module.controller('MainController', MainController);