$( function() {

  earlyAccess = $.cookie('earlyAccess');
  flash = $('.js-flash');
  flashText = $('.js-flash-text');
  learnMoreButton = $('.js-learn-more-button');
  learnMoreSection = $('.js-learn-more-section');
  signUpButton = $('.js-sign-up-button');
  spanOR = $('.or');
  signUpSection = $('.js-sign-up-section');
  thankYouSection = $('.js-thank-you-section');

  signUpButton.click( function() {
    mixpanel.track("Sign Up - top button");
    $('html, body').animate({
      scrollTop: signUpSection.offset().top
    }, 1200);
  });

  learnMoreButton.click( function() {
    mixpanel.track("Learn More");
    $('html, body').animate({
      scrollTop: learnMoreSection.offset().top
    }), 600;
  })

  if( earlyAccess == 'true' ) {
    signUpSection.hide();
    signUpButton.hide();
    spanOR.hide();
    thankYouSection.show();
    showFlash();
    hideFlash();
  }



  function showFlash() {
    flash.delay(500).slideDown({
      duration: 1500,
      easing: 'easeOutElastic',
      complete: function() { flashText.toggleClass('opacity-0 opacity-1'); }
    });
  }

  function hideFlash() {
    flashText.delay(8000).fadeOut('slow', function() {
      flash.slideUp('slow');
    });
  }

  monthlyUse = $('.js-pricing-monthly');
  singleUse = $('.js-pricing-single');

  monthlyUse.click( function() {
    $('.single-use').fadeOut();
    $('.monthly').fadeIn();
    singleUse.removeClass('is-active');
    monthlyUse.addClass('is-active');
  });  

  singleUse.click( function() {
    $('.monthly').fadeOut();
    $('.single-use').fadeIn();
    monthlyUse.removeClass('is-active');
    singleUse.addClass('is-active');
  });



});


function validateForm() {
  mixpanel.track("Sign Up");
  return true;
}