angular.module('reviewApp').directive('filmsDirective', function(mainService){
  return {
    restrict: 'A',
    templateUrl: './views/films.html',
    scope: {
      film: '='
    },
    link: function(scope, element, attrs){
      element.on('click', function(){
        var arr = []
        // console.log(mainService.myFilms);
        mainService.myFilms.forEach(function(val){
          mainService.getFilms(val).then(function(res){
            arr.push(res.data.title)
          })
        })
        console.log(arr);
        scope.theFilms = arr
      })
    }
  }
})
