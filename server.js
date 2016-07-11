var express = require('express')
var app = express();
var url = require('url');

function monthName (m) {
  switch (m) {
    case 0:
      return "January";
      break;
    case 1:
      return "February";
      break;
    case 2:
      return "March";
      break;
    case 3:
      return "April";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "August";
      break;
    case 8:
      return "September";
      break;
    case 9:
      return "October";
      break;
    case 10:
      return "November";
      break;
    case 11:
     return "December";
     break;
    default:

  }
}

function cleanDate(d) {
    return new Date(+d.replace(/\/Date\((\d+)\)\//, '$1'));
}

app.use(express.static('public'));

app.get('/:time', function (req, res) {
  var arg = req.params.time;
  console.log(Date.parse(arg))
  if (!isNaN(Date.parse(arg)) || (!isNaN(arg) )) {
    if (!isNaN(Date.parse(arg))) {
      var d = new Date(arg);
    }
    else {
      unix_timestamp = arg.replace('/Date(', '').replace(')/', '')
      var d = new Date(parseInt(arg) * 1000);
      console.log(arg);
      console.log(parseInt(arg));

      console.log(d)
    }
    var y = d.getUTCFullYear();
    var dy = d.getUTCDate();
    var m = monthName(d.getUTCMonth());
    var u = d.getTime() / 1000;
    res.send({ "unixtime": u, "natural": m + " " + dy + ", " + y })
  }
  else {
    res.send(null);
  }

});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("listening on port " + port);
