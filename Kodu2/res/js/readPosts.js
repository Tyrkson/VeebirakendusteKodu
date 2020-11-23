$(document).ready(function(){

  $(".main-container").on('click', 'button.like-button', function(){
    if($(this).css("background-color") != "rgb(0, 0, 255)") $(this).css('background-color', "blue")
    else $(this).css("background-color", "#8a8a8a")
  })

  $.getJSON('https://private-anon-9ce6c4c524-wad20postit.apiary-mock.com/posts', function(data){
    $.each(data, function(index, value){
      displayPost(value);
    });
  });

});

function displayPost(d){

  let media = ""

  if(d.media != null){
    if(d.media.type === 'image'){
      media = `<div class="post-image">
            <img src="${d.media.url}" alt="">
              </div>`
    }else{
      media = `<div class="post-image">
            <video controls><source src="${d.media.url}" type="video/mp4"></video>
              </div>`
    }
  }

  let div = `
  <div class="post">
    <div class="post-author">
      <span class="post-author-info">
        <img src="${d.author.avatar}" alt="Post author">
        <small>${d.author.firstname} ${d.author.lastname}</small>
      </span>
      <small>${d.createTime}</small>
    </div>`
        + media +
    `<div class="post-title">
      <h3>${d.text != null ? d.text : ""}</h3>
    </div>
      <div class="post-actions">
        <button type="button" name="like" class="like-button">${d.likes}</button>
    </div>
  </div>`
  $(".main-container").append(div);
}
