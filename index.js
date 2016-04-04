/* jshint node: true */
'use strict';
var pickFiles = require('broccoli-static-compiler');

module.exports = {
    name: 'ember-cli-tinymce',

    included: function(app) {
        this._super.included(app);

        app.import('bower_components/tinymce/tinymce.min.js', {destDir: 'assets/tinymce'});    
        app.import('bower_components/tinymce/jquery.tinymce.min.js', {destDir: 'assets/tinymce'});
        // app.import('bower_components/tinymce/themes/modern/theme.min.js', {destDir: 'assets/tinymce/themes/modern'});
        // app.import('bower_components/tinymce/plugins/image/plugin.min.js', {destDir: 'assets/tinymce/plugins/image'});
        // app.import('bower_components/tinymce/plugins/link/plugin.min.js', {destDir: 'assets/tinymce/plugins/link'});
        // app.import('bower_components/tinymce/plugins/table/plugin.min.js', {destDir: 'assets/tinymce/plugins/table'});
        // //app.import('bower_components/tinymce/skins/lightgray/skin.min.css', {destDir: 'assets/tinymce/skins/lightgray'});
        // //app.import('bower_components/tinymce/skins/lightgray/content.min.css', {destDir: 'assets/tinymce/skins/lightgray'});
        // app.import('bower_components/tinymce/skins/lightgray/fonts/tinymce.woff', {destDir: 'assets/fonts'});
        // app.import('bower_components/tinymce/skins/lightgray/fonts/tinymce.ttf', {destDir: 'assets/fonts'});

    },

    treeForPublic: function(tree) {
        this.ui.writeLine('Including tinymce assets');
        var tree = pickFiles('bower_components/tinymce/', {
          srcDir: '/',
          files: ['**/*.min.js', '**/*.min.css', '**/*.woff', '**/*.ttf'],
          destDir: '/tinymce'
        });
        this.ui.writeLine('...done');
        return this._super.treeForPublic.call(this, tree);
    },





};
