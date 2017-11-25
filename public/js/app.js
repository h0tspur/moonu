var Moonu = (function() {
  var getThings = function() {
    var dateString = getTheDate();
    var things = getThingsFromDate(dateString);
    return things;
  };

  var getThingsFromDate = function(dateString) {
    if (dateString != null) {
      var data = localStorage.getItem(dateString);
      if (data != null) {
        return JSON.parse(data);
      }
      else {
        return { 'firstThing' : 'Achieve world peace.', 'secondThing' : 'End world hunger.', 'thirdThing' : 'Stop pollution.' };
      }
    }
  };

  var setThingsToDate = function(dateString, things) {
    //Local
    localStorage.setItem(dateString, JSON.stringify(things));
    //Online
    Firebase.saveToFirebaseDb(dateString, things);
  };

  var getTheDate = function() {
    var date = new Date();
    var dateString = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear();
    return dateString;
  }

  return {
    fillThings : function() {
      var things = getThings();
      $('#goalOne').text(things['firstThing']);
      $('#goalTwo').text(things['secondThing']);
      $('#goalThree').text(things['thirdThing']);
    },
    saveThings : function() {
      var firstThing = $('#goalOne').text() || '';
      var secondThing = $('#goalTwo').text() || '';
      var thirdThing = $('#goalThree').text() || '';
      var things = { 'firstThing' : firstThing, 'secondThing' : secondThing, 'thirdThing' : thirdThing };
      var dateString = getTheDate();
      setThingsToDate(dateString, things);
    }
  }
})();
