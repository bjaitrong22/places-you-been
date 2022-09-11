function PlacesYouBeen() {
  this.destinations = {};
  this.currentId = 0;
  
}

PlacesYouBeen.prototype.addDestination = function(destination) {
  this.destinations[destination.country] = destination;
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

PlacesYouBeen.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
};

PlacesYouBeen.prototype.findDestination = function() {
  if(this.destinations[id] !== undefined) {
    return this.destinations[id];
  }
  return false;
};

PlacesYouBeen.prototype.deleteDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false;
  }
  delete this.destinations[id];
  return true;
};

function Destination(country, city, season) {
  this.country = country;
  this.city = city;
  this.season = season;
}

Destination.prototype.location = function() {
  return this.city + " "+ this.country;
};
