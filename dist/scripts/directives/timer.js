(function() {
    function timer($interval) {

        return {
            templateUrl: '/templates/directives/timer.html',
            replace: true,
            restrict: 'E',
            scope: {},
            link: function(scope, element, attributes) {


                scope.startTimer = 'Start';
                scope.takeBreak = 'Break';
                scope.startTime = 2500;
                var cansInt;

                var countdown = function() {
                    scope.startTimer--;
                };

                // must cancel interval!!!!!
                scope.stop = function() {
                    $interval.cancel(cancInt);
                }

                scope.startStopTimer = function(startButton) {

                    // startTimer
                    scope.startTimer = (startTimer === 'Start') ? 'Stop' : 'Start';
                        if (scope.startTimer === 'Stop') {
                            promise = $interval(countdown, 1000);
                        } else if (scope.startTimer === 'Start') {
                            scope.stop();
                            scope.startTime = 2500;
                        }
                    };


                    // start break

                    scope.breakTime = function() {
                        return scope.takeBreak;
                    };
            }
        }
    };

angular
    .module('blocTime')
    .directive('timer', timer);

})();
