angular.module('reviewApp').service('mainService', function($http){

  this.getCharacters = function(page){
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/?page=' + page
    })
  }

  this.getFilms = function(film){
      return $http({
        method: 'GET',
        url: film
      })
  }

  this.images = [{name: 'luke', photo: 'http://vignette3.wikia.nocookie.net/starwars/images/1/15/Luke_Skywalker_Ep_7_SWCT.png'},
{name: 'r2-d2', photo: 'https://pbs.twimg.com/profile_images/550409205531025408/bjZpXjK2.jpeg'}, {name: 'c-3po', photo: 'https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'}]

})
