$(function(){
  function buildHTML(chat){
    if ( chat.image ){
      let html =
        `<div class="Base__chat__display__info">
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
        `<div class="Base__chat__display__info">
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

  $("[class^='Form']").on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Base__chat__display').append(html);
      $('.Base__chat__display').animate({ scrollTop: $('.Base__chat__display')[0].scrollHeight});
      $('Form')[0].reset();
      $('.Base__chat__form__area__sendBtn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });

  let reloadChats = function() {
    let last_chat_id = $('.Base__chat__display__info:last').data("chat-id");
    $.ajax({
      url: "api/chats",
      type: 'get',
      dataType: 'json',
      data: {id: last_chat_id}
    })
    .done(function(chats) {
      console.log('success');
    })
    .fail(function() {
      alert('error');
    });
  };
});
