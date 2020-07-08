$(function(){
  function buildHTML(chat){
    if ( chat.image ){
      let html =
        `<div class="Base__chat__display__info" data-chat-id=${chat.id}>
          <div class="Base__chat__display__info__name">
            ${chat.user_name}
          </div>
          <div class="Base__chat__display__info__time">
            ${chat.created_at}
          </div>
        </div>
        <div class="Base__chat__display__text">
          <p class="Base__chat__display__text__content">
            ${chat.content}
          </p>
          <img class="Base__chat__display__text__image" src="${chat.image}">
        </div>`
      return html;
    }else {
      let html = 
      `<div class="Base__chat__display__info" data-chat-id=${chat.id}>
        <div class="Base__chat__display__info__name">
          ${chat.user_name}
        </div>
        <div class="Base__chat__display__info__time">
          ${chat.created_at}
        </div>
      </div>
      <div class="Base__chat__display__text">
        <p class="Base__chat__display__text__content">
         ${chat.content}
        </p>
      </div>`
      return html;
    };
  }

  let reloadChats = function() {
    let last_chat_id = $('.Base__chat__display__info:last').data("chat-id");
    $.ajax({
      url: "api/chats",
      type: 'get',
      dataType: 'json',
      data: {id: last_chat_id}
    })
    .done(function(chats) {
      if (chats.length !== 0) {
        let insertHTML = '';
        $.each(chats, function(i, chat) {
          insertHTML += buildHTML(chat)
        });
        $('.Base__chat__display').append(insertHTML);
        $('.Base__chat__display').animate({ scrollTop: $('.Base__chat__display')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadChats, 7000);
});
