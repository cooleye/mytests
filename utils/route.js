(function(win){

  function Route(options){

      let routes = options.routes;
      let functions = {};

      for(let k in routes){
        functions[k] = options[routes[k]];
      }

      window.addEventListener('hashchange', function(e) {
          show();
      }, false);
      window.onload = function(){
          show();
      }

      function show(){
        let hash = location.hash.split('/')[1];
        hash = typeof hash == 'undefined' ? 'home' : hash;
        functions[hash]()
      }

  }


window.Route = Route;

})(window)
