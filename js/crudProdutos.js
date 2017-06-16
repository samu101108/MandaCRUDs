  var myapp = angular.module('myapp', ['ngMask']);
  myapp.controller('produtoController', function($scope){

//Lista de produtos
    $scope.listProdutos = [
      {id: "001", produto: "Feijão mulatinho", validade: "25-11-2017", fabricante:"JJ Alimentos"},
      {id: "002", produto: "Arroz Integral",  validade: "12-02-2018", fabricante:"FJ Alimentos"},
      {id: "003", produto: "Macarrão spaghetti", validade: "09-06-2018", fabricante: "MALA Alimentos"}
  	];

//Adicionar registro à tabela
    $scope.addProduto = function(){
      if($scope.produto && $scope.validade && $scope.fabricante ){
      $scope.listProdutos.push(
  {
    produto:$scope.produto,
    validade:$scope.validade,
    fabricante:$scope.fabricante
  });
}
    $scope.produto = '';
    $scope.validade = '';
    $scope.fabricante = '';
    };

//Editar/Salvar linha na tabela
    $scope.edit = function(){
      var index = getSelectedIndex($scope.id); //Essa linha pega a função definida abaixo
      $scope.listProdutos[index].produto = $scope.produto;
      $scope.listProdutos[index].validade = $scope.validade;
      $scope.listProdutos[index].fabricante = $scope.fabricante;
    };

//Editar linha de tabela
    $scope.selectEdit = function(id){
      var index = getSelectedIndex(id);
      // Essa linha pega a função definida abaixo
      var product = $scope.listProdutos[index];
      $scope.id = product.id;
      $scope.produto = product.produto;
      $scope.validade = product.validade;
      $scope.fabricante = product.fabricante;
    };

//Deletar linha de tabela
    $scope.del = function(id){
      var result = confirm('Tem certeza?');
      if(result===true){
        var index = getSelectedIndex(id); //Essa linha pega a função definida abaixo
        $scope.listProdutos.splice(index, 1);
      }
    };

    function getSelectedIndex(id){
      for(var i=0; i<$scope.listProdutos.length; i++)
        if($scope.listProdutos[i].id==id)
          return i;
      return -1;
    }
  });
