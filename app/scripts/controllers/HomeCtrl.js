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
            $scope.counter = $scope.counter - 1000;
        };

        // need startTimer and stopTimer to toggle between
        //    start and stop/reset timer

        // start timer method
        var startTimer = function() {
            // interval is in milliseconds
            myInterval = $interval(timerCountdown, 1000);
            $scope.isCountingDown = true;
            // change button text from "Start" to "Stop"
            $scope.buttonText = "Reset";
        };

        // reset timer method
        // stops timer and resets counter to 25000
        var resetTimer = function() {
            // must cancel interval! should log "true" if interval canceled
            console.log($interval.cancel(myInterval));
            $scope.isCountingDown = false;
            // change button text from "Stop" to "Start"
            $scope.buttonText = "Start";
            // resets timer counter
            $scope.counter = 25000;
        };

        // $scope.toggle =
        // if state stopped then kjglj
        // if state countingDown then asdlfsldf

        $scope.toggleTimer = function() {
            if ($scope.isCountingDown) {
                resetTimer();
            } else {
                startTimer();
            }
        };


        // break
        // listen for a break (in this case, counter = 0)
        // keep track of completed breaks so i know when to have longer break
        // take 5 minute break once timer  gets to 0, and then auto start work session startTimer

    }

    angular
        .module('bloctime')
        .controller('HomeCtrl', HomeCtrl);
})();
