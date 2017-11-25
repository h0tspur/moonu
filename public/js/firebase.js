var Firebase = (function() {
  firebase.initializeApp(config.firebaseConfig);
  var database = firebase.database();
  return {
    saveToFirebaseDb : function(date, data) {
      database.ref('dailylog/' + date).set(data);
    }
  }
})();
