(function() {
    function HomeCtrl($scope, $interval) {

        // state of counter/timer on load - stopped and ready to start work session
        $scope.state = "stopped";
        $scope.buttonText = "Start";

        // counter at start
        $scope.counter = 25000;

        // declare timer interval variable
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
            // change button text from "Start" to "Stop"
            $scope.buttonText = "Stop";
        };

        // stop timer method
        $scope.stopTimer = function(myInterval) {
            // must cancel interval!
            $interval.cancel(myInterval);
            $scope.state = "stopped";
            // change button text from "Stop" to "Start"
            $scope.buttonText = "Start";
        };

        // break
        // take 5 minute break and then startTimer

    }

    angular
        .module('bloctime')
        .controller('HomeCtrl', HomeCtrl);
})();
