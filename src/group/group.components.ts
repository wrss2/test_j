import angular from 'angular';

export class GroupComponent {
  templateUrl: string = './src/group/group.html';
  controller: object = GroupComponentController;
  controllerAs = 'vm';
  require: object = {parent: '^formComponent'};
};


export default class GroupComponentController { 
  
       static $inject = ['$http', '$q', '$state', '$scope', '$rootScope'];
       constructor(
          private $http: ng.IHttpService,
          private $q: ng.IQService,
          private $state,
          private $scope,
          private $rootScope
        ) {
          this.$scope.group = JSON.parse(localStorage.getItem('groups'));  
        } 
  
      
        $onInit():void {
          console.log("Group") 
        }

  
        next():void{
          console.log("Next");
          this.$state.go("form.avatar");
        }
  
        check_group():boolean{
          console.log(this.$scope.group_value);
          if(this.$scope.group_value){
              localStorage.setItem("group",this.$scope.group_value.name);  
              return false;              
          }else{
              return true;
          }
  
        }
      }