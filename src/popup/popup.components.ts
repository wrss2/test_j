import angular from 'angular';



export class PopupComponent {
  templateUrl: string = './src/popup/popup.html';
  controller: object =  PopupComponentController;
  controllerAs = 'vm';
  require: object = {parent: '^formComponent'};
};



export default class PopupComponentController {
  
    public static $inject = ["$scope", "$http", "$q", "$state" , "$rootScope", "$location" ];
  
    constructor(
      private $scope:IScope,
      private $http: ng.IHttpService,
      private $q: ng.IQService,
      private $state,
      private $rootScope,
      private $location:ILocationService
    ) {
   
      this.$scope.popup_show = false;
      this.$scope.file_choosen = false;
      this.$scope.$on("popup", function(evt,data){ 
        $scope.popup_show = true;
      })
    }
  
    $onInit():void { 
      console.log("Popup"); 
    }


    popup_hide():void{
        console.log("Click Hide");
        this.$scope.popup_show = false;
        this.$scope.file_choosen = false;    
    }
      
  
    upload():void{
      this.$scope.urlData =  this.$scope.vm.uploadme;
      this.$scope.popup_show = false;
      this.$rootScope.$broadcast('image',this.$scope.vm.uploadme);
  
    }     
  
  }