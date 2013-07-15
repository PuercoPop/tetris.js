function oContains(xs, x){
  var result = _.map(xs, function(elem) {
    return _.isEqual(elem, x);
  });
  return _.some(result);
  
}
