(function() {
    function HomeCtrl($scope, $interval) {

        // state of timer on load - stopped and ready to start work session
        $scope.state = "stopped";
        $scope.button = "Start";

        // counter at start
        $scope.counter = 25000;

        // declare interval variable
        var myInterval;

        // function that counts down 1 from the starting counter time
        var timerCountdown = function(counter) {
            $scope.counter = $scope.counter - 1;
        };


        // need startTimer and stopTimer to toggle between
        //    start and stop/reset timer
        
        // start timer method
        $scope.startTimer = function() {
            myInterval = $interval(timerCountdown, 1000);
            $scope.state = "countingDown";
            $scope.button = "Stop";
        };

        // stop timer method
        $scope.stopTimer = function(myInterval) {
            // must cancel interval!
            $interval.cancel(myInterval);
            $scope.state = "stopped";
            $scope.button = "Start";
        };

        // break
        // take 5 minute break and then startTimer

    }

    angular
        .module('bloctime')
        .controller('HomeCtrl', HomeCtrl);
})();
