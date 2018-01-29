var timeAgoDate = document.getElementsByClassName("published-date");

for(var i = 0; i < timeAgoDate.length; i++){
  var dateAgo = timeAgoDate[i].innerHTML;
  var today = new Date(dateAgo);

  function timeAgo(today) {
    var seconds = Math.floor((new Date() - today) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + " yrs" + " ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " mos" + " ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days" + " ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hrs" + " ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " mins" + " ago";
    }
    return Math.floor(minutes) + " minutes";
  }

  timeAgoDate[i].innerHTML = timeAgo(today);
}
