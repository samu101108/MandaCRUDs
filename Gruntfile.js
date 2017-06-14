module.exports = function(grunt) {
  grunt.initConfig({
    link_html: {
      your_target: {
        // Arquivos de origem com os pacotes
        //Arquivos com .js
        jsFiles: ['lib/angular/angular.js',
                  'lib/jquery/dist/jquery.min.js',
                  'lib/bootstrap/dist/js/bootstrap.min.js',
                  'lib/ngMask/dist/ngMask.min.js',
                  'js/crud.js'],
        //Arquivos com .CSS
        cssFiles: ['lib/bootstrap/dist/css/bootstrap.min.css',
                  'lib/font-awesome/css/font-awesome.min.css',
                  'css/styles.css'],
        //Alvo da inserção dos links
        targetHtml: ['*.html']  //neste caso, todos os arquivos .html da pasta
                                //atual serão afetados.
      },
    },
  });
  // Carregamento do plugin grunt-link-html
  grunt.loadNpmTasks('grunt-link-html');

  // Registro de uma tarefa padrão
  //todo a tarefa de link_html será executada no terminal
  //com o comando grunt default
  grunt.registerTask('default', ['link_html']);

};
