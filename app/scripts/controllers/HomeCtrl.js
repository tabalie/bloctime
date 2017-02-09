(function() {
    function HomeCtrl() {
        this.heroTitle = "Let's get to work!";
    }

    angular
        .module('bloctime')
        .controller('HomeCtrl', HomeCtrl);
})();
