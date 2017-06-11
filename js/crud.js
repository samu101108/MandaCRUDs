  var myapp = angular.module('myapp', []);
  myapp.controller('usuarioController', function($scope){

//Lista de usuários
    $scope.listProducts = [
      {id:'001', nome:"Luciano", email: 'luciano@fatec.br',     login:'lucianofatec'},
      {id:'002', nome:'Hanter',  email: 'hanter@fatec.br',      login:'hanterfatec'},
  		{id:'003', nome:'Paulo',	 email: 'paulo@fatec.br',		    login:'paulofatec'},
  		{id:'004', nome:'Samuel',  email: 'samu101108@gmail.com', login: 'samu101108'}
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
