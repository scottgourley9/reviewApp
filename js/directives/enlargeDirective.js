angular.module('reviewApp').directive('enlargeDirective', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      var big = false
      element.on('click', function(){
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
