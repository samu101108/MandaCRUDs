  var myapp = angular.module('myapp', []);
  myapp.controller('fornecedorController', function($scope){

//Lista de produtos
    $scope.listFornecedores = [
        {	codigo: "001",fornecedores: "JJ Alimentos",endereco: "Rua Rio Chuí, 25",
        razaoSocial: "João José Alimentos LTDA", cnpj: "99.999.999/9999-99",telefone: "(81)3333-4444"} ,
        { codigo: "002", fornecedores: "FJ Alimentos",endereco: "Rua Rio Prado, 521" ,
         razaoSocial: "Fernando Jaime Alimentos LTDA",cnpj: "99.999.999/9999-99",telefone: "(81)3333-4455"},
        {codigo: "003", fornecedores: "MALA Alimentos",endereco:"Rua Rio Chuí, 25",
        razaoSocial: "Maria Lúcia Andrade Alimentos LTDA", cnpj: "99.999.999/9999-99",telefone: "(81)3333-6698"}
    	];

//Adicionar registro à tabela
    $scope.add = function(){
      if($scope.nome && $scope.email && $scope.login){
      $scope.listProducts.push(
  {
    id:$scope.id,
    nome:$scope.nome,
    email:$scope.email,
    login:$scope.login
  });
}
    $scope.id = '';
    $scope.nome = '';
    $scope.email = '';
    $scope.login = '';
    };

//Editar/Salvar linha na tabela
    $scope.edit = function(){
      var index = getSelectedIndex($scope.id); <!--Essa linha pega a função definida abaixo-->
      $scope.listProducts[index].nome = $scope.nome;
      $scope.listProducts[index].email = $scope.email;
      $scope.listProducts[index].login = $scope.login;
    };

//Editar linha de tabela
    $scope.selectEdit = function(id){
      var index = getSelectedIndex(id); <!--Essa linha pega a função definida abaixo-->
      var product = $scope.listProducts[index];
      $scope.id = product.id;
      $scope.nome = product.nome;
      $scope.email = product.email;
      $scope.login = product.login;
    };

//Deletar linha de tabela
    $scope.del = function(id){
      var result = confirm('Tem certeza?');
      if(result===true){
        var index = getSelectedIndex(id); <!--Essa linha pega a função definida abaixo-->
        $scope.listProducts.splice(index, 1);
      }
    };

    function getSelectedIndex(id){
      for(var i=0; i<$scope.listProducts.length; i++)
        if($scope.listProducts[i].id==id)
          return i;
      return -1;
    }
  });
