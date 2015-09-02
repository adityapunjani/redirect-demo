self.onfetch = function(event) {
  event.respondWith(fetch(new Request(event.request.url , {redirect : "manual"})));
};