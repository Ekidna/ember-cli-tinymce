import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['text-editor'],

    _options: {
        skin_url: '/ember-cli-tinymce/tinymce/skins/lightgray',
        theme_url: '/ember-cli-tinymce/tinymce/themes/modern/theme.min.js',
        external_plugins: {
          image: '/ember-cli-tinymce/tinymce/plugins/image/plugin.min.js',
          link: '/ember-cli-tinymce/tinymce/plugins/link/plugin.min.js',
          table: '/ember-cli-tinymce/tinymce/plugins/table/plugin.min.js'
        },
        menubar: false,
        toolbar1: 'bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link table image'
    },

    didInsertElement: function() {
        var component = this;
        var options = this.get('_options');

        Ember.merge(options, {
          setup: function(editor) {
            // bind change event
            component.set('editor', editor);
            editor.on('change', function() {
              component.set('value',
                 editor.getContent());
            });
          }
        });

        this.$('textarea').tinymce(options);
    },

    valueChanged: Ember.computed('value',function () {
        var controller = this;
        tinymce.editors.filter(function (editor) {
          return editor.id === controller.get('editor').id;
        }).forEach(function (editor) {
          editor.setContent(controller.get('value'));
        });
    }),
});
