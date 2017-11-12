import angular from 'angular';

export class LoginComponent {
  templateUrl: string = './src/login/login.html';
  controller: object =  LoginComponentController;
  controllerAs = 'vm';
  require: object = {parent: '^formComponent'};
};



export default class LoginComponentController  {
  
  public static $inject = ["$scope","$state"];

  constructor(
    private $scope, 
    private $state
  ) {}
  
    $onInit() {
      console.log("Login") 
    }
  
    isMatch():boolean{
      if (this.$scope.password != this.$scope.password2) {
        return true;
      }else{
         return false;
      }
    }


    next():void{
      console.log("Next");
      this.$state.go("form.group");
    }

    check_login():boolean{
      if( this.$scope.email!="" && (this.$scope.password == this.$scope.password2) && this.$scope.password!="" && this.$scope.password!=undefined  && this.$scope.email!=undefined  ){
        localStorage.setItem("email",this.$scope.email);
        return false;
      }else{          
        return true;
      }   
    }
  
  }