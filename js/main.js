$(function(){
  $('.js-encoded-email').each(function(){
    this.href = 'mailto:' + this.getAttribute('data-encoded').replace(/\/\w\//g,'')
  })
});
