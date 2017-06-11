  var myapp = angular.module('myapp', []);
  myapp.controller('produtoController', function($scope){

//Lista de produtos
    $scope.listProdutos = [
      {id: "001", produto: "Feijão mulatinho", validade: "25-11-2017", fabricante:"JJ Alimentos"},
      {id: "002", produto: "Arroz Integral",  validade: "12-02-2018", fabricante:"FJ Alimentos"},
      {id: "003", produto: "Macarrão spaghetti", validade: "09-06-2018", fabricante: "MALA Alimentos"}
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
