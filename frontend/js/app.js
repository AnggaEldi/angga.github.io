
var app = angular.module('demo', []);
app.controller('ShowData', function($scope, $http) {
    
    
	$scope.data = {};
	$scope.btn  = 'simpan';
    // get all data mhs
    $http.get('http://127.0.0.1:3000/mahasiswa').
        then(function(response) {
            $scope.mahasiswas = response.data;
        });
    // get all data mhs

    // add mhs
    $scope.addMhs = function(npm){
    	
    	if($scope.btn =='simpan')
    	{
    		$http.post('http://127.0.0.1:3000/mahasiswa',$scope.data).
    		  then(function(response) {
    		  	$scope.msg = 'berhasil menambah mahasiswa';
    		  	$scope.viewAllMhs();
    		  	$scope.data = {};
    		  });
    	}
    	else
    	{
    		$http.put('http://127.0.0.1:3000/mahasiswa/'+npm,$scope.data).
    		  then(function(response) {
    		  	$scope.msg = 'berhasil update mahasiswa';
    		  	$scope.viewAllMhs();
    		  	$scope.data = {};
    		  	$scope.btn  = 'simpan';
    		  });
    	}
    	
    }
    //add mhs

    // edit mhs
    $scope.editMhs = function(npm){
    	$http.get('http://127.0.0.1:3000/mahasiswa/'+npm,$scope.data).
    		  then(function(response) {
    		  	$scope.btn ='update';
    		  	console.log(response.data);
    		  	$scope.data.npm   = response.data[0].npm;
    		  	$scope.data.nama  = response.data[0].nama_mhs;
    		  	$scope.data.alamat= response.data[0].alamat;	
    		  });
    }
    //edit mhs

     // del mhs
    $scope.delMhs = function(npm){
    	$http.delete('http://127.0.0.1:3000/mahasiswa/'+npm,$scope.data).
    		  then(function(response) {
    		  	$scope.msg = 'berhasil hapus siswa';
    		  	$scope.viewAllMhs();
    		  });
    }
    //del mhs


    // view all mhs
     $scope.viewAllMhs = function(){
    	$http.get('http://127.0.0.1:3000/mahasiswa').
        	then(function(response) {
            	$scope.mahasiswas = response.data;
        	});
    }
    // view all mhs

});