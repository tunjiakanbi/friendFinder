// code for apiRoutes.js file
// Displays all friends

var fs = require("fs");




//  var friendsData = require("../data/friends.json");
var friendsFile = './app/data/friends.json';

var friendsData = [];
fs.readFile(friendsFile, (err, data) => {
  if (err) throw err;
  // friendsData.concat(JSON.parse(data));
  console.log(JSON.parse(data))
  // console.log("Friends data from my new JSON file: ")
  console.log(friendsData);
  friendsData = JSON.parse(data);
  console.log(friendsData);
});
//JSON.parse(friendsData);


// console.log(friendsData);


module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });

  // Displays a single friend or returns false
  app.post("/api/friends", function (req, res) {
    console.log(req.body);
    //math logic to determine best match
    friendsData.push(req.body);
    var newData = JSON.stringify(friendsData)

    fs.writeFile(friendsFile, newData, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');

      // console.log(friendsData[0]);

    });
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    var totalDifference = 0;
    for (var i = 0; i < friendsData.length; i++) {
      console.log(friendsData[i].name);
      totalDifference = 0;
      for (var a = 0; a < friends[i].scores[a]; a++) {
        totalDifference += Math.abs(parseInt(newData[a]) - parseInt(friendsData[i].scores[a]));
        if (totalDifference <= bestMatch.friendDifference) {

          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
          
      }
    }console.log(res.json(bestMatch));
  });
}
//   end code