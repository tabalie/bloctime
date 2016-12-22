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
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
            })

            // .state('album', {
            //     url: '/album',
            //     controller: 'AlbumCtrl as album',
            //     templateUrl: '/templates/album.html'
            // })
    }

    angular
        .module('blocTime', ['ui.router', 'firebase'])
        .config(config);
})();
