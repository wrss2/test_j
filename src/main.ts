//main entry point
import angular from 'angular';
import 'ui-router';
import 'ui-router-angularjs';

import { AppComponent  } from './app.component';
import { LoginComponent } from './login/login.components';
import { GroupComponent } from './group/group.components';
import { AvatarComponent } from './avatar/avatar.components';
import { SubmitComponent } from './submit/submit.components';
import { PopupComponent } from './popup/popup.components';


class AppConfig {
  constructor(
    $stateProvider: ng.ui.IStateProvider, 
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    ) {

    $stateProvider
    .state('form', {
      url: "/form",
      views:{
        '':{
          component: 'formComponent' 
        },
        'popup@form':{
          component: 'popupComponent'
          },
      },
            
    })
    .state('form.login', {
      url: '/login',
      views:{
        'form@form':{
          component: 'loginComponent'
          },
      }
    }) 
    .state('form.group', {
      url: '/group',
      views:{
        'form@form':{
          component: 'groupComponent'
          },
      }      
    })      
    .state('form.avatar', {
      url: '/avatar',
      views:{
        'form@form':{
          component: 'avatarComponent'
          },
      }        
    })       
    .state('form.submit', {
      url: '/submit', 
      views:{
        'form@form':{
          component: 'submitComponent'
          },
      }        
    })     
    $urlRouterProvider.otherwise('/form/login');
  }
}

let appModule = 
  angular.module('app', ['ui.router'])
  .component('formComponent', new AppComponent())
  .component('loginComponent',new LoginComponent())
  .component('groupComponent',new GroupComponent())
  .component('avatarComponent',new AvatarComponent())
  .component('submitComponent',new SubmitComponent())
  .component('popupComponent',new PopupComponent())
  .config(AppConfig);
  

appModule.directive("fileread", [function () {
  return {
      scope: {
          fileread: "=",
          choosen: "="
      },
      link: function (scope, element, attributes) {
          element.bind("change", function (changeEvent) {
              var reader = new FileReader();
              reader.onload = function (loadEvent) {
                  scope.$apply(function () {
                      scope.fileread = loadEvent.target.result;
                      scope.choosen = true;
                  });
              }
              reader.readAsDataURL(changeEvent.target.files[0]);
          });
      }
  }
}]);
angular.bootstrap(document, [ appModule.name ]);