const app = angular.module("app", []);

app.controller("WizardController", ($scope) => {
  $scope.vistas = "view1";

  $scope.firstStep = () => {
    $scope.vistas = "view1";
  };

  $scope.secondStep = () => {
    $scope.vistas = "view2";
    console.log("second");
  };

  $scope.thirdStep = () => {
    $scope.vistas = "view3";
  };
});
