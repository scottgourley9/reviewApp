angular.module('reviewApp').directive('enlargeDirective', function(mainService){
  return {
    restrict: 'A',
    scope: {
      films: '='
    },

    link: function(scope, element, attrs){
      var big = false
      element.on('click', function(){
        mainService.myFilms = scope.films;
        if(big){
          element.css({'font-size': '16px', 'color': 'red'})
          big = false
        }
        else {
          element.css('font-size', '50px')
          big = true
        }

      })
    }

  }
})
