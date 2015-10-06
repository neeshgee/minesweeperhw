var Router = Backbone.Router.extend({
    routes: {
      '': 'showIndex',
      'game/:id': 'showGame'
    },

    showIndex: function() {
      var indexView = new IndexView();
      $('.container').html(indexView.render());
      console.log('hey');
    },

    showGame: function(gameId) {
      var game = new Game({id: gameId});
      var gameView = new GameView({model: game});
      $('.container').html(gameView.render());
      console.log('hey');
    },

    initialize: function() {
      Backbone.history.start();
      console.log('hey');

    }
  });
