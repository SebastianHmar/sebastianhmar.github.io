$(document).ready(function() {

    $('.menu-icon').on('click', function(){
      $(this).toggleClass('change');
      $('.header-list').toggleClass('open');
    });

    $(function() {
      $('.header-logo h2').fadeIn(1000);
      $('.faq-list-item').click(function () {
        var $answer = $(this).find('.answer');
        if ($answer.hasClass('open')) {
          $answer.removeClass('open');
          $answer.slideUp();
          $(this).find('span').text('+');
        } else {
          $answer.addClass('open');
          $answer.slideDown();
          $(this).find('span').text('-');
        }
      });

      $('.header-logo').click(function() {
        $('html, body').animate({
            'scrollTop': 0
          }, 'slow'
        )
        return false;
      });

      $('.header-list a').click(function () {

        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate(
          {'scrollTop':position - 80}, 900
        );
		  /*
		   event.preventDefault();
		   event.stopPropagation(); */
        return false;
      });

    });
  });