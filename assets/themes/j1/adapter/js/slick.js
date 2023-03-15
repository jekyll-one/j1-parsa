---
regenerate:                             true
---

{% capture cache %}

{% comment %}
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/slick.js
 # Liquid template to create the Template Adapter for J1 Slick
 #
 # Product/Info:
 # http://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # Test data:
 #  {{ liquid_var | debug }}
 # cookie_options: {{ cookie_options | debug }}
 # -----------------------------------------------------------------------------
{% endcomment %}

{% comment %} Liquid var initialization
-------------------------------------------------------------------------------- {% endcomment %}

{% comment %} Set config files
-------------------------------------------------------------------------------- {% endcomment %}
{% assign environment         = site.environment %}
{% assign blocks              = site.data.blocks %}
{% assign modules             = site.data.modules %}
{% assign template_config     = site.data.j1_config %}

{% comment %} Set config data
-------------------------------------------------------------------------------- {% endcomment %}
{% assign slick_defaults      = modules.defaults.slick.defaults %}
{% assign slick_settings      = modules.slick.settings %}

{% comment %} Set config options
-------------------------------------------------------------------------------- {% endcomment %}

{% comment %} Set variables
-------------------------------------------------------------------------------- {% endcomment %}

{% comment %} Detect prod mode
-------------------------------------------------------------------------------- {% endcomment %}
{% assign production = false %}
{% if environment == 'prod' or environment == 'production' %}
  {% assign production = true %}
{% endif %}

/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/slick.js
 # JS Adapter for J1 Slick
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2023 Juergen Adams
 #
 #  J1 Theme is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Theme/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: {{site.time}}
 # -----------------------------------------------------------------------------
*/

// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.slick = (function (j1, window) {
  var environment               = '{{environment}}';
  var responsiveSettings        = [];
//var sliderResponsiveSettings  = '[' + '\n';
  var _this;
  var logger;
  var logText;
  var slickDefaults;
  var slickSettings;
  var slickOptions;
  var sliderOptions;
  var sliderSettings;
  var sliderResponsiveSettings;

  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {

    // -------------------------------------------------------------------------
    // Initializer
    // -------------------------------------------------------------------------
    init: function (options) {

      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings  = $.extend({
        module_name: 'j1.adapter.cookieConsent',
        generated:   '{{site.time}}'
      }, options);

      // Load  module DEFAULTS|CONFIG
      slickDefaults = $.extend({}, {{slick_defaults | replace: 'nil', 'null' | replace: '=>', ':' }});
      slickSettings = $.extend({}, {{slick_settings | replace: 'nil', 'null' | replace: '=>', ':' }});
      slickOptions  = $.extend(true, {}, slickDefaults, slickSettings);

      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this         = j1.adapter.slick;
      logger        = log4javascript.getLogger('j1.adapter.slick');

      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');

      // load HTML portion for sliders configured
      console.debug('loading HTML portion for all sliders configured');
      _this.loadSliderHTML(slickOptions, slickOptions.sliders);

      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        var pageState   = $('#no_flicker').css("display");
        var pageVisible = (pageState == 'block') ? true: false;

        if ( j1.getState() === 'finished' && pageVisible ) {

          {% for slider in slick_settings.sliders %} {% if slider.enabled %}

          sliderOptions  = $.extend({}, {{slider.options | replace: 'nil', 'null' | replace: '=>', ':' }});
          sliderSettings = $.extend(true, {}, slickDefaults, sliderOptions );

          {% if slider.options.responsive %}
          // collect breakpoint settings
          responsiveSettings = $.extend({}, {{slider.responsive | replace: 'nil', 'null' | replace: '=>', ':' }});
          // initialize resposi settings
          sliderResponsiveSettings  = '[' + '\n';
          // generate breakpoint elements
          for (const [obj_key, obj_value] of Object.entries(responsiveSettings)) {
            var length = Object.keys(obj_value.settings).length;
            var count = 0;
            for (const [key, value] of Object.entries(obj_value.settings)) {
              count++;
              if (key == 'breakOn' && count == 1) {
                sliderResponsiveSettings += '  {' + '\n';
                sliderResponsiveSettings += '    breakpoint: ' + value + ',' + '\n';
                sliderResponsiveSettings += '    settings: {' + '\n';
              } else {
                sliderResponsiveSettings += '      ' + key + ': ' + value + ',' + '\n';
              }
              // close current breakpoint element
              if (count == length) {
                sliderResponsiveSettings += '    }' + '\n';
                sliderResponsiveSettings += '  },' + '\n';
              }
            }
          } // End generate breakpoint elements

          // close all breakpoint elements
          sliderResponsiveSettings += ']' + '\n';
          logger.debug('\n' + 'responsive settings: ' + '\n' + sliderResponsiveSettings);
          {% endif %}

          // initialize the slider
          $('.{{slider.selector}}').slick({
            accessibility:              sliderSettings.accessibility,
            adaptiveHeight:             sliderSettings.adaptiveHeight,
            arrows:                     sliderSettings.arrows,
            autoplay:                   sliderSettings.autoplay,
            autoplaySpeed:              sliderSettings.autoplaySpeed,
            centerMode:                 sliderSettings.centerMode,
            centerPadding:              sliderSettings.centerPadding,
            cssEase:                    sliderSettings.cssEase,
            dots:                       sliderSettings.dots,
            dotsClass:                  sliderSettings.dotsClass,
            draggable:                  sliderSettings.draggable,
            easing:                     sliderSettings.easing,
            edgeFriction:               sliderSettings.edgeFriction,
            fade:                       sliderSettings.fade,
            focusOnSelect:              sliderSettings.focusOnSelect,
            focusOnChange:              sliderSettings.focusOnChange,
            infinite:                   sliderSettings.infinite,
            initialSlide:               sliderSettings.initialSlide,
            lazyLoad:                   sliderSettings.lazyLoad,
            mobileFirst:                sliderSettings.mobileFirst,
            pauseOnDotsHover:           sliderSettings.pauseOnDotsHover,
            pauseOnFocus:               sliderSettings.pauseOnFocus,
            pauseOnHover:               sliderSettings.pauseOnHover,
            respondTo:                  sliderSettings.respondTo,
            rows:                       sliderSettings.rows,
            rtl:                        sliderSettings.rtl,
            slide:                      sliderSettings.slide,
            slidesPerRow:               sliderSettings.slidesPerRow,
            slidesToScroll:             sliderSettings.slidesToScroll,
            slidesToShow:               sliderSettings.slidesToShow,
            speed:                      sliderSettings.speed,
            swipe:                      sliderSettings.swipe,
            swipeToSlide:               sliderSettings.swipeToSlide,
            touchMove:                  sliderSettings.touchMove,
            touchThreshold:             sliderSettings.touchThreshold,
            useCSS:                     sliderSettings.useCSS,
            useTransform:               sliderSettings.useTransform,
            variableWidth:              sliderSettings.variableWidth,
            vertical:                   sliderSettings.vertical,
            verticalSwiping:            sliderSettings.verticalSwiping,
            waitForAnimate:             sliderSettings.waitForAnimate,
            zIndex:                     sliderSettings.zIndex,
            responsive:                 sliderResponsiveSettings
          });

          {% endif %} {% endfor %} // ENDFOR (all) sliders

          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialization finished');

          clearInterval(dependencies_met_page_ready);

        }
      }, 25);

    }, // END init

    // -------------------------------------------------------------------------
    // loadSliderHTML()
    // load all master sliders (HTML portion) dynanically configured
    // and enabled (AJAX) from data file
    // NOTE: Make sure the placeholder is available in the content page
    // eg. using the asciidoc extension masterslider::
    // -------------------------------------------------------------------------
    loadSliderHTML: function (options, slider) {
      var numSliders      = Object.keys(slider).length;
      var active_sliders  = numSliders;
      var xhr_data_path   = options.xhr_data_path + '/index.html';
      var xhr_container_id;

      // console.debug('load HTML portion of all sliders configured found in page');
      console.debug('number of sliders found: ' + numSliders);

      _this.setState('load_data');
      Object.keys(slider).forEach(function(key) {
        if (slider[key].enabled) {
          console.debug('load HTML data on slider id: ' + slider[key].id);

          xhr_container_id = slider[key].id;
          j1.loadHTML({
            xhr_container_id: xhr_container_id,
            xhr_data_path:    xhr_data_path,
            xhr_data_element: slider[key].id
          });
        } else {
          console.debug('slider found disabled on id: ' + slider[key].id);
          active_sliders--;
        }
      });
      console.debug('sliders loaded in page active|deactive: ' + active_sliders + '|' + numSliders);
      _this.setState('data_loaded');
    }, // END loadSliderHTML

    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);

      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);

      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // Place handling of command|action here
        //
        logger.info('\n' + message.text);
      }

      //
      // Place handling of other command|action here
      //

      return true;
    }, // END messageHandler

    // -------------------------------------------------------------------------
    // setState()
    // Sets the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: function (stat) {
      _this.state = stat;
    }, // END setState

    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return _this.state;
    }, // END getState

  }; // END return
})(j1, window);

{% endcapture %}
{{ cache | strip_empty_lines }}
{% assign cache = nil %}
