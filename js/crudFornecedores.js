  var myapp = angular.module('myapp', []);
  myapp.controller('fornecedorController', function($scope){

//Lista de produtos
    $scope.listFornecedores = [
        {	id: "001",fornecedor: "JJ Alimentos",endereco: "Rua Rio Chuí, 25",
        razaoSocial: "João José Alimentos LTDA", cnpj: "99.999.999/9999-99",telefone:"(81)3333-4444"} ,
        { id: "002", fornecedor: "FJ Alimentos",endereco: "Rua Rio Prado, 521" ,
         razaoSocial: "Fernando Jaime Alimentos LTDA",cnpj: "99.999.999/9999-99",telefone:"(81)3333-4455"},
        {id: "003", fornecedor: "MALA Alimentos",endereco:"Rua Rio Chuí, 25",
        razaoSocial: "Maria Lúcia Andrade Alimentos LTDA", cnpj: "99.999.999/9999-99",telefone:"(81)3333-6698"}
    	];

//Adicionar registro à tabela
    $scope.addFornecedor = function(){
      if($scope.fornecedor && $scope.endereco && $scope.razaoSocial && $scope.cnpj
      && $scope.telefone){
      $scope.listFornecedores.push(
  {
    id:$scope.id,
    fornecedor:$scope.fornecedor,
    endereco:$scope.endereco,
    razaoSocial:$scope.razaoSocial,
    cnpj:$scope.cnpj,
    telefone:$scope.telefone
  });
}
    $scope.id = '';
    $scope.fornecedor = '';
    $scope.endereco = '';
    $scope.razaoSocial = '';
    $scope.cnpj = '';
    $scope.telefone = '';
    };

//Editar/Salvar linha na tabela
    $scope.edit = function(){
      var index = getSelectedIndex($scope.id); //Essa linha pega a função definida abaixo
      $scope.listFornecedores[index].fornecedor = $scope.fornecedor;
      $scope.listFornecedores[index].endereco = $scope.endereco;
      $scope.listFornecedores[index].razaoSocial = $scope.razaoSocial;
      $scope.listFornecedores[index].cnpj = $scope.cnpj;
      $scope.listFornecedores[index].telefone = $scope.telefone;
    };

//Editar linha de tabela
    $scope.selectEdit = function(id){
      var index = getSelectedIndex(id); //Essa linha pega a função definida abaixo
      var fornecedor = $scope.listFornecedores[index];
      $scope.id = fornecedor.id;
      $scope.fornecedor = fornecedor.fornecedor;
      $scope.endereco = fornecedor.endereco;
      $scope.razaoSocial = fornecedor.razaoSocial;
      $scope.cnpj = fornecedor.cnpj;
      $scope.telefone = fornecedor.telefone;
    };

//Deletar linha de tabela
    $scope.del = function(id){
      var result = confirm('Tem certeza?');
      if(result===true){
        var index = getSelectedIndex(id); //Essa linha pega a função definida abaixo
        $scope.listFornecedores.splice(index, 1);
      }
    };

    function getSelectedIndex(id){
      for(var i=0; i<$scope.listFornecedores.length; i++)
        if($scope.listFornecedores[i].id==id)
          return i;
      return -1;
    }
  });
