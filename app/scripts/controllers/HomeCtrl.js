(function() {
    function HomeCtrl($scope, $timeout) {

        // current timer
        $scope.counter = 25000;

        // timer method
        $scope.onTimeout = function() {
            if($scope/counter === 0) {
                $scope.$broadcast('timer-stopped', 0);
                $timeout.cancel(myTimeout);
                return;
            }
            $scope.counter--;
            mytimeout = $timeout($scope.onTimeout, 1000);
        };

        // start timer
        $scope.startTimer = function() {
            mytimeout = $timeout($scope.onTimeout, 1000);
        };

        // stop and reset timer
        $scope.stopTimer = function() {
            $scope.$braodcast('timer-stopped', $scope.counter);
            $scope.counter = 90;
            $timeout.cancel(mytimeout);
        }

        // take a break - stops timer
        // $scope.$on('timer-stopped', function(event, remaining) {
        // });


        // $interval(timer, 25000);

        // startTimer
        // count down the timer by 1 every second
        // $scope.startTimer = function() {
        //     $scope.$broadcast('timer-start');
        //     $scope.timerRunning = true;
        // };

        // reset
        // reset timerDisplay back to highest amount

        // break
        // take 5 minute break and then startTimer

    }

    angular
        .module('bloctime')
        .controller('HomeCtrl', HomeCtrl);
})();
