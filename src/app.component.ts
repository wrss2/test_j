import angular from 'angular';

export  class AppComponent {
  templateUrl: string = './src/app.html';
  controller: object = AppComponentController;
  controllerAs = 'vm';
};

export default class AppComponentController {

    public static $inject = ["$scope", "$http", "$q", "$state" , "$rootScope", "$location" , '$timeout' ];
  
    constructor(
      private $scope:IScope,
      private $http: ng.IHttpService,
      private $q: ng.IQService,
      private $state,
      private $rootScope,
      private $location:ILocationService
      private $timeout;
    ) {
  
      this.$scope.$on("popup", function(evt,data){ 
        $scope.$emit.popup_show = true; 
      })
      this.$http.get('./mock.json').then(data => {
        localStorage.setItem('groups',JSON.stringify(data.data);
      }); 

    }
  
    $onInit():void {
      console.log("Main App")
       
    }  
  
    getClass(path):string { 
      return (this.$location.path().substr(0, path.length) === path) ? 'selected' : '';
    }
}


