  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

// Weather widget 
  window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
  window.weatherWidgetConfig.push({
      selector:".weatherWidget",
      apiKey:"5ZEMB4TLV4DPN0P1X346BEZA5",//"D9MEGAH3BLHHWDGYV6R7HDC5N" 
      location:"Melbourne, Australia", //enter an addres
      unitGroup:"metric", //"us" or "metric"
      forecastDays:5, //how many days forecast to show
      title:"Melbourne", //optional title to show in the 
      showTitle:true, 
      showConditions:true
  });
 
  (function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://www.visualcrossing.com/widgets/forecast/weather-forecast-widget-d3.js?ver=5.3.2';
  s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();


// Corona Counter
    var apiUrl = 'https://services1.arcgis.com/vHnIGBHHqDR6y0CR/arcgis/rest/services/Victorian_LGA_Cases/FeatureServer/0/query?where=OBJECTID%3D173&outFields=*&outSR=4326&f=json';
    fetch(apiUrl).then(response => {
      return response.json();
    }).then(data => {
      // Work with JSON data here
     
      var ActiveCases= data.features[0].attributes["ActiveCases"];
      var TotalCases= data.features[0].attributes["Cases"];
      document.getElementById("totalCases").innerHTML = TotalCases;
      document.getElementById("activeCases").innerHTML = ActiveCases;
    }).catch(err => {
      // Do something for an error here
      document.getElementById("totalCases").innerHTML = "No data";
      document.getElementById("activeCases").innerHTML = "No data";
    });
    