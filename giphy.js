var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_XdMbNHVjWmrGmW2wmhMAZVb1IJoTzisH&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

