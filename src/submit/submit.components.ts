import angular from 'angular';


export class SubmitComponent {
  templateUrl: string = './src/submit/submit.html';
  controller: object = SubmitComponentController;
  controllerAs = 'vm';
  require: object = {parent: '^formComponent'};
};


export default class SubmitComponentController {
    public static $inject = ["$scope","$state"];

    constructor(
      private $scope,
      private $state
    ) {}
  
    $onInit():void {
      console.log("Submit") 
      this.$scope.email = localStorage.getItem("email");
      this.$scope.group = localStorage.getItem("group");
      this.$scope.urlData = localStorage.getItem("image");        
    }
}