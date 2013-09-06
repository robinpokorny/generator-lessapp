require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'<% if (lessBootstrap) { %>,
        bootstrapAffix: '../bower_components/bootstrap/js/affix',
        bootstrapAlert: '../bower_components/bootstrap/js/alert',
        bootstrapButton: '../bower_components/bootstrap/js/button',
        bootstrapCarousel: '../bower_components/bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/bootstrap/js/collapse',
        bootstrapPopover: '../bower_components/bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/bootstrap/js/transition'<% } %>
    }<% if (lessBootstrap) { %>,
    shim: {
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery']
        },
        bootstrapCollapse: {
            deps: ['jquery']
        },
        bootstrapPopover: {
            deps: ['jquery']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery']
        },
        bootstrapTooltip: {
            deps: ['jquery']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }
    }<% } %>
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
