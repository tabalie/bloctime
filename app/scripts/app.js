(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            //to display clean URLs to user without hashbang
            .html5Mode({
                enabled: true,
                requireBase: false
        });

        //to allow ui-view to load template associated with landing, album, and collection states
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })

            // Start a new session
            .state('start', {
                url: '/start',
                controller: 'StartCtrl as start',
                templateUrl: '/templates/start.html'
            })

            // Reset session
            .state('reset', {
                url: '/reset',
                controller: 'ResetCtrl as reset',
                templateUrl: '/templates/reset.html'
            })
    }

    angular
        .module('bloctime', ['ui.router', 'firebase'])
        .config(config);
})();
