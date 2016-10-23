control.controller('nowCtrl', function ($scope, $http) {
    $http({
        method: "GET",
        url: "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=danelhe"
    }).then(function mySucces(response) {
        $scope.myWelcome = response.data.geonames[0].name;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
    $scope.ideas = [
        {autor: 'When', fecha: '8/8/8', titulo: 'Idea 1', tipo: 'ambiente', cuerpo: 'Cuerpo', interesados: 5, comentarios: 4, foto: 'https://thumbs.dreamstime.com/z/het-pictogram-mannelijke-avatar-hipster-van-het-bedrijfsmensenprofiel-69046013.jpg'},
        {autor: 'Hege', fecha: '9/9/9', titulo: 'Idea 2', tipo: 'salud', cuerpo: 'Cuerpo', interesados: 9, comentarios: 8, foto: 'https://thumbs.dreamstime.com/z/retrato-masculino-del-icono-del-perfil-del-hombre-de-negocios-plano-47075259.jpg'},
        {autor: 'Kai', fecha: '5/5/5', titulo: 'Idea 3', tipo: 'ambiente', cuerpo: 'Cuerpo', interesados: 6, comentarios: 2, foto: 'http://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100333/33865016-Icono-del-perfil-retrato-de-la-mujer-avatar-femenino-Foto-de-archivo.jpg'}];
});