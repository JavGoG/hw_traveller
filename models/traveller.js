const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journeys) => {
    return journeys.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journeys) => {
    return journeys.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journeys) => {
    return journeys.transport == transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journeys) => {
    return journeys.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journeys) => {
    return total += journeys.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journeys) => {
    return journeys.transport}).filter((value, index, self) => self.indexOf(value) === index)
  
};


module.exports = Traveller;
