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
  var environment  = '{{environment}}';
  var _this;
  var logger;
  var logText;
  var slickDefaults;
  var slickSettings;
  var slickOptions;
  var sliderOptions;
  var sliderSettings;

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

      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        var pageState   = $('#no_flicker').css("display");
        var pageVisible = (pageState == 'block') ? true: false;
        if ( j1.getState() === 'finished' && pageVisible ) {

          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');

          {% for slider in slick_settings.sliders %} {% if slider.enabled %}

          sliderOptions  = $.extend({}, {{slider.options | replace: 'nil', 'null' | replace: '=>', ':' }});
          sliderSettings = $.extend(true, {}, slickDefaults, sliderOptions );

          $('.featured-post-slider').slick({
            dots:                       sliderSettings.dots,
            speed:                      sliderSettings.speed,
            autoplay:                   sliderSettings.autoplay,
            arrows:                     sliderSettings.arrows,
            slidesToShow:               sliderSettings.slidesToShow,
            slidesToScroll:             sliderSettings.slidesToScroll,
            responsive: [
                                        {
                                          breakpoint: 1024,
                                          settings: {
                                            slidesToShow: 3
                                          }
                                        },
                                        {
                                          breakpoint: 600,
                                          settings: {
                                            slidesToShow: 2
                                          }
                                        },
                                        {
                                          breakpoint: 480,
                                          settings: {
                                            slidesToShow: 1
                                          }
                                        }
            ]
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
