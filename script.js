$(function() {
  $('li .tab-link').on('click', function() {
    var target = $(this).attr('href');
    var active = $('.active a');
    var liActive = $('.active');
    var showing = $(active).attr('href');
    var time = 300;
    
    if (target === showing) {
      
    } else {
      $(showing).toggle(time);
      $(liActive).removeClass('active');
      $(target).toggle(time);
      var li =  $(this).closest('li');
      li.addClass('active');
      
      console.log(showing);
      console.log(target);
      console.log(showing);
      
    }
    
  });
});
