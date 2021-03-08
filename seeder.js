const seeder = require('mongoose-seed');
 
// Connect to MongoDB
const db = "mongodb://localhost/social-network-api";
seeder.connect(db, function() {
 
  // Load Models
  seeder.loadModels([
    "models/Users",
    "models/Thoughts"
  ]);
   seeder.clearModels(['Users','Thoughts'], function() {
 
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});

 
const data = [{
    'model': 'Users',
    'documents': [
        {
            'username':'jorgeebn16',
            'email': 'jorgeebn16@gmail.com'
        },
        {
            'username': 'schummi01',
            'email': 'schummi01@gmail.com'
        }
    ]

}];