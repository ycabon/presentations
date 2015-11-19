define([
  "./bind",

  "esri/core/Accessor",
  "esri/core/declare",

  "esri/core/accessorSupport/introspect",
  "esri/core/accessorSupport/Property"
], function(
  bind,
  Accessor, declare,
  introspect, Property
) {

  var Binding = bind.Binding;
  
  function AccessorBinding(accessor) {
    this.accessor = accessor;
  }

  AccessorBinding.prototype = new Binding({});

  AccessorBinding.prototype.to = function(source) {
    Binding.prototype.to.apply(this, arguments);
    source = this.source;
    var accessor = this.accessor;
    source.receive(function(value) {
      accessor.set('value', value);
    });
    accessor.watch('value', function(value, oldValue, property) {
      source.put(value);
    });
    return this;
  };

  AccessorBinding.prototype.get = function(key, callback) {
    return this['_' + key] || (this['_' + key] = new AccessorPropertyBinding(this.accessor, key));
  };

  AccessorBinding.prototype.keys = function(callback) {
    for (var i in this.accessor) {
      if (i.charAt(0) != '_') {
        callback(i, this.get(i));
      }
    }
  };

  // This constructor provides property bindings for the accessor bindings.
  function AccessorPropertyBinding(accessor, name) {
    this.accessor = accessor;
    this.name = name;
  }

  AccessorPropertyBinding.prototype = new Binding();

  AccessorPropertyBinding.prototype.getValue = function(callback) {
    // get the value of this property
    var accessor = this.accessor, 
    name = this.name;
    // get the current value
    callback(accessor.get(name) || []);
    // watch for changes
    accessor.watch(name, function(newValue, oldValue, name) {
      callback(newValue || []);
    });
  };
  
  AccessorPropertyBinding.prototype.is = function(value) {
    // don't go through setters, it is bubbling up through the source
    this.accessor._accessorProps.cache.set(this.name, value);
  }

  AccessorPropertyBinding.prototype.put = function(value) {
    this.accessor[this.name] = value;
  }

  declare.after(function(ctor) {
    var meta = introspect(ctor).classMetadata;
    var prop = meta.properties["_binding"] = new Property("_binding", {
      getter: function() {
        return new AccessorBinding(this);
      }
    });
    Object.defineProperty(ctor.prototype, "_binding", prop.getDescriptor());
  });

  return {
    load: function(id, req, load){
      load();
    }
  };

});
