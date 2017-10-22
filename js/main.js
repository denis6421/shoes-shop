var app = angular.module("shop", []);

app.filter('searchFor', function() {

  return function(arr, searchString) {

    if (!searchString) {
      return arr;
    }

    var result = [];

    searchString = searchString.toLowerCase();

    angular.forEach(arr, function(item) {

      if (item.name.toLowerCase().indexOf(searchString) !== -1) {
        result.push(item);
      }

    });

    return result;
  };

});

app.controller("InstantSearchController", function($scope, $http) {
  $http.get('json/men-shoes.json').then(function(result) {
    $scope.items = result.data;
    $scope.name = "MEN SHOES & SNEAKERS";

  });

  $scope.men = function() {
    $(".hidden_img_container_wrapper").css("display", "none");
      $scope.clearSearch();
      $('.mobile_menu_button').toggleClass('open');
    $http.get('json/men-shoes.json').then(function(result) {
      $scope.items = result.data;
      $scope.name = "MEN SHOES & SNEAKERS";
    });
  }
  $scope.women = function() {
    $(".hidden_img_container_wrapper").css("display", "none");
      $scope.clearSearch();
      $('.mobile_menu_button').toggleClass('open');
    $http.get('json/women-shoes.json').then(function(result) {
      $scope.items = result.data;
      $scope.name = "WOMEN SHOES & SNEAKERS";
    });
  }
  $scope.boys = function() {
    $(".hidden_img_container_wrapper").css("display", "none");
      $scope.clearSearch();
      $('.mobile_menu_button').toggleClass('open');
    $http.get('json/boys-shoes.json').then(function(result) {
      $scope.items = result.data;
      $scope.name = "BOYS SHOES & SNEAKERS";

    });
  }
  $scope.girls = function() {
    $(".hidden_img_container_wrapper").css("display", "none");
      $scope.clearSearch();
      $('.mobile_menu_button').toggleClass('open');


    $http.get('json/girls-shoes.json').then(function(result) {
      $scope.items = result.data;

      $scope.name = "GIRLS SHOES & SNEAKERS";

    });

  }
  $scope.show = function($event) {
    $(".hidden_img_container_wrapper").fadeIn();
    $(".hidden_img_container").html('<img src = ' + $event.target.src + '>');
    $scope.hide();
  }
  $scope.hide = function() {
    $(".hidden_img_container_wrapper button").click(function() {
      $(".hidden_img_container_wrapper").fadeOut();

    })

  }
  $scope.typeOptions = [
    { name: 'High', value: 'price' },
    { name: 'Low', value: '-price' }
    ];

    $scope.price = {type : $scope.typeOptions[1].value};

      $scope.clearfunction = function(event){
       event.searchString=null;
    }
    $scope.clearSearch = function () {
       $scope.searchString = "";
   };
});
