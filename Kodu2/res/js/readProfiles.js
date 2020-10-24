let courses = [];

$(function () {
      loadProfileInfo()
          .then(function (response) {
            response.forEach(function(profile) {
              profile = new Profile(profile.firstname, profile.lastname, profile.avatar);
              addProfile(profile);
            });
          })
          .catch(function () {
              console.log('Error loading profile info');
          });
});

function addProfile(profile) {
    const div = `
    <div class="profile">
      <div class="profile-info">
        <img src="${profile.avatar}" alt="Post author" class="profilePicture"><br>
        <small>${profile.firstname} ${profile.lastname}</small>
      </div>
      <div class="follow">
        <button type="button" name="Follow" class="follow-button">Follow</button>
      </div>
    </div>`
    $('.main-container').append(div);
  }

function loadProfileInfo() {
    return $.get(
        {
            url: 'https://private-anon-1a35e33747-wad20postit.apiary-mock.com/profiles',
            success: function (response) {
                return response;
            },
            error: function () {
                console.log('error')
            }
        }
    );
}

$(document).ready(function() {
    $(".main-container").on('click', 'button.follow-button', function(){
        if ($(this).css("background-color") == "rgb(139, 0, 139)") {
            $(this).css({"background-color": "white", "color": "darkmagenta"}).html("Followed")
        }
        else {
            $(this).css({"background-color": "darkmagenta", "color": "white"}).html("Follow")
        }
      })

});