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

        scope.film.forEach(function(val){
          mainService.getFilms(val).then(function(res){
            arr.push(res.data.title)
          })
        })
        scope.theFilms = arr
      })
    }
  }
})
