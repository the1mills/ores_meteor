var IRLibLoader = {};

IRLibLoader.load = function(src) {
  var handle, self;
  self = this;
  if (!this._libs[src]) {
    this._libs[src] = {
      src: src,
      ready: false,
      readyDeps: new Deps.Dependency
    };
    $.getScript(src, function() {
      var lib;
      lib = self._libs[src];
      lib.ready = true;
      return lib.readyDeps.changed();
    });
  }
  handle = {
    ready: function() {
      var lib;
      lib = self._libs[src];
      lib.readyDeps.depend();
      return lib.ready;
    }
  };
  return handle;
};