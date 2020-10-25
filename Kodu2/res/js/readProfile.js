$(document).ready(function(){
    $.getJSON('https://private-anon-dca38451c4-wad20postit.apiary-mock.com/users/1', function(data){
        displayUser(data);
      });
});

function displayUser(info) {

    $("#profile-picture").attr("src",info.avatar)


    let p = 
    `<p>${info.firstname} ${info.lastname}<br>${info.email}</p>
    `

    $(".dropdown-content").prepend(p);
}