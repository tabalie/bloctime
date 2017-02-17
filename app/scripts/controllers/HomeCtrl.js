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
            $interval.cancel(myInterval);
            $scope.isCountingDown = false;
            // change button text from "Stop" to "Start"
            $scope.buttonText = "Start";
            // resets timer counter
            $scope.counter = 25000;
        };

        // toggles between startTimer and resetTimer depending on state
        // of timer (isCountingDown true or false)

        $scope.toggleTimer = function() {
            if ($scope.isCountingDown) {
                resetTimer();
            } else {
                startTimer();
            }
        };

        // when not on a break, onBreak state is false. when on break is true
        var onBreak = false;
        var totalBreaks = 0;

        // break
        // when counter gets to 0, Start Break button appears. When clicked, 5 minute timer starts.
        //   onBreak state is true
        $scope.startBreak = function() {
            if ($scope.counter === 0) {
                $scope.buttonText = "Start break";
                $scope.counter = 5000;
                startTimer()
                onBreak = true;
                totalBreaks++;
            } else if (onBreak) {
                $scope.buttonText = "Reset break";
                $interval.cancel(myInterval);
                $scope.isCountingDown = false;
                $scope.counter = 5000;
                onBreak = false;
            } else {
                onBreak = false;
            }
        };

    }

    angular
        .module('bloctime')
        .controller('HomeCtrl', HomeCtrl);
})();
