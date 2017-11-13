import angular from 'angular';


export class AvatarComponent {
  templateUrl: string = './src/avatar/avatar.html';
  controller: object = AvatarComponentController;
  controllerAs = 'vm';
  require: object = {parent: '^formComponent'};
};


export default class AvatarComponentController {

    public static $inject = ["$scope", "$state", "$rootScope"]; 
      constructor(
      private $scope,
      private $state,
      private $rootScope
    ) {
      this.$scope.$on("image", function(evt,data){ 
         $scope.urlData = data;
      })

    }
  
    $onInit():void {
      console.log("Avatar");
      this.$scope.urlData = './assets/images/avatar.png'
    }

    next():void{
      console.log("Next");
      localStorage.setItem("image",this.$scope.urlData); 
      this.$state.go("form.submit");      
    }
  
    popup():void{
        console.log("Popup Show");
        this.$rootScope.$broadcast("popup",true);    
    }
  
  
}