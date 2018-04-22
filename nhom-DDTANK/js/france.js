angular.module("au revoir", ['ngAnimate']).controller("myCtrl", ["$scope", function($scope) {
    $scope.check = function() {
        var tmp = "au revoir";
        $scope.equal = angular.equals($scope.result,tmp);
    };
}]);

angular.module("bonjour", ['ngAnimate']).controller("myCtrl", ["$scope", function($scope) {
    $scope.check = function() {
        var tmp = "bonjour";
        $scope.equal = angular.equals($scope.result,tmp);
    };
}]);

angular.module("Cam sur", ['ngAnimate']).controller("myCtrl", ["$scope", function($scope) {
    $scope.check = function() {
        var tmp = "Cam sur";
        $scope.equal = angular.equals($scope.result,tmp);
    };
}]);

function submit_false() {
    document.getElementById("submit").style.backgroundColor="red";
    document.getElementById("submit").style.pointerEvents="none";
};

function submit_false1() {
    document.getElementById("submit1").style.backgroundColor="red";
    document.getElementById("submit1").style.pointerEvents="none";
};

function submit_true() {
    document.getElementById("submitTrue").classList.add("btn-success");
    document.getElementById("submit1").style.pointerEvents="none";
    document.getElementById("submit").style.pointerEvents="none";
    document.getElementById("win").style.visibility="visible";
    document.getElementById("win").scrollWidth();
};

app.directive('enterSubmit', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('keydown', function(event) {
                 var code = event.keyCode || event.which;
                 if (code === 13) {
                       if (!event.shiftKey) {
                            event.preventDefault();
                            scope.$apply(attrs.enterSubmit);
                       }
                 }
            });
        }
    }
});



