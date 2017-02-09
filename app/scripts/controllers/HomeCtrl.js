(function() {
    function HomeCtrl() {

        this.timerDisplay = 10000;

        // startTimer
        // count down the timer by 1 every second

        // reset
        // reset timerDisplay back to highest amount

        // break
        // take 5 minute break and then startTimer


    }

    angular
        .module('bloctime')
        .controller('HomeCtrl', HomeCtrl);
})();
