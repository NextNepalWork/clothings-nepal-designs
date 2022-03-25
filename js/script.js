(function ($) {
  'use strict';
  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '<div class="slick-control-prev"><i class="tf-ion-android-arrow-back"></i></div>',
    nextArrow: '<div class="slick-control-next"><i class="tf-ion-android-arrow-forward"></i></div>'
  });
  // Count Down JS
  // $('#simple-timer').syotimer({
  //   year: 2020,
  //   month: 5,
  //   day: 9,
  //   hour: 20,
  //   minute: 30
  // });
  // overlay search
  $('.search_toggle').on('click', function (e) {
    e.preventDefault();
    //$(this).toggleClass('active');
    $('.search_toggle').toggleClass('active');
    $('.overlay').toggleClass('open');
    setTimeout(function () {
      $('.search-form .form-control').focus();
    }, 400);
  });
  // bootstrap slider range
  $('.range-track').slider({});
  $('.range-track').on('slide', function (slideEvt) {
    $('.value').text('$' + slideEvt.value[0] + ' - ' + '$' + slideEvt.value[1]);
  });
  // instafeed
  if (($('#instafeed').length) !== 0) {
    var userId = $('#instafeed').attr('data-userId');
    var accessToken = $('#instafeed').attr('data-accessToken');
    var userFeed = new Instafeed({
      get: 'user',
      userId: userId,
      resolution: 'low_resolution',
      accessToken: accessToken,
      limit: 6,
      template: '<div class="col-lg-2 col-md-3 col-sm-4 col-6 px-0 mb-4"><div class="instagram-post mx-2"><img class="img-fluid w-100" src="{{image}}" alt="instagram-image"><ul class="list-inline text-center"><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-heart mr-2"></i>{{likes}}</a></li><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-comments mr-2"></i>{{comments}}</a></li></ul></div></div>'
    });
    userFeed.run();
  }
  $('.widget-categories .has-children').on('click', function () {
    $('.widget-categories .has-children').removeClass('expanded');
    $(this).addClass('expanded');
  });
})(jQuery);
// Category
$(".slick_category").slick({
  autoplay: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});
// Category Ends
// Flash start
$(".flash_men").slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
});
// Flash end
// Countdown start
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;
      //   document.getElementById("days").innerText = Math.floor(distance / (day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));
      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
// Countdown end
// Countdown Two start
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;
      //   document.getElementById("days").innerText = Math.floor(distance / (day)),
      (document.getElementById("hours_a").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes_a").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds_a").innerText = Math.floor(
        (distance % minute) / second
      ));
      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
// Countdown Two end
// Delivery info search start
//https://codepen.io/saravanajd/pen/GGPQbY?editors=0010
function create_custom_dropdowns() {
  $("select").each(function (i, select) {
    if (!$(this).next().hasClass("dropdown-select")) {
      $(this).after(
        '<div class="dropdown-select wide ' +
        ($(this).attr("class") || "") +
        '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>'
      );
      var dropdown = $(this).next();
      var options = $(select).find("option");
      var selected = $(this).find("option:selected");
      dropdown
        .find(".current")
        .html(selected.data("display-text") || selected.text());
      options.each(function (j, o) {
        var display = $(o).data("display-text") || "";
        dropdown
          .find("ul")
          .append(
            '<li class="option ' +
            ($(o).is(":selected") ? "selected" : "") +
            '" data-value="' +
            $(o).val() +
            '" data-display-text="' +
            display +
            '">' +
            $(o).text() +
            "</li>"
          );
      });
    }
  });
  $(".dropdown-select ul").before(
    '<div class="dd-search"><input id="txtSearchValue" autocomplete="off" onkeyup="filter()" class="dd-searchbox" type="text"></div>'
  );
}
// Event listeners
// Open/close
$(document).on("click", ".dropdown-select", function (event) {
  if ($(event.target).hasClass("dd-searchbox")) {
    return;
  }
  $(".dropdown-select").not($(this)).removeClass("open");
  $(this).toggleClass("open");
  if ($(this).hasClass("open")) {
    $(this).find(".option").attr("tabindex", 0);
    $(this).find(".selected").focus();
  } else {
    $(this).find(".option").removeAttr("tabindex");
    $(this).focus();
  }
});
// Close when clicking outside
$(document).on("click", function (event) {
  if ($(event.target).closest(".dropdown-select").length === 0) {
    $(".dropdown-select").removeClass("open");
    $(".dropdown-select .option").removeAttr("tabindex");
  }
  event.stopPropagation();
});

function filter() {
  var valThis = $("#txtSearchValue").val();
  $(".dropdown-select ul > li").each(function () {
    var text = $(this).text();
    text.toLowerCase().indexOf(valThis.toLowerCase()) > -1 ?
      $(this).show() :
      $(this).hide();
  });
}
// Search
// Option click
$(document).on("click", ".dropdown-select .option", function (event) {
  $(this).closest(".list").find(".selected").removeClass("selected");
  $(this).addClass("selected");
  var text = $(this).data("display-text") || $(this).text();
  $(this).closest(".dropdown-select").find(".current").text(text);
  $(this)
    .closest(".dropdown-select")
    .prev("select")
    .val($(this).data("value"))
    .trigger("change");
});
// Keyboard events
$(document).on("keydown", ".dropdown-select", function (event) {
  var focused_option = $(
    $(this).find(".list .option:focus")[0] ||
    $(this).find(".list .option.selected")[0]
  );
  // Space or Enter
  //if (event.keyCode == 32 || event.keyCode == 13) {
  if (event.keyCode == 13) {
    if ($(this).hasClass("open")) {
      focused_option.trigger("click");
    } else {
      $(this).trigger("click");
    }
    return false;
    // Down
  } else if (event.keyCode == 40) {
    if (!$(this).hasClass("open")) {
      $(this).trigger("click");
    } else {
      focused_option.next().focus();
    }
    return false;
    // Up
  } else if (event.keyCode == 38) {
    if (!$(this).hasClass("open")) {
      $(this).trigger("click");
    } else {
      var focused_option = $(
        $(this).find(".list .option:focus")[0] ||
        $(this).find(".list .option.selected")[0]
      );
      focused_option.prev().focus();
    }
    return false;
    // Esc
  } else if (event.keyCode == 27) {
    if ($(this).hasClass("open")) {
      $(this).trigger("click");
    }
    return false;
  }
});
$(document).ready(function () {
  create_custom_dropdowns();
});
// Delivery info search end
//================================== Payment select image start
/*
https://codepen.io/petermkc/pen/EwVQrb
 * imgCheckbox
 *
 * Version: 0.5.3
 * License: GPLv2
 * Author:  James Cuénod
 *
 */
(function ($) {
  var CHK_TOGGLE = 0;
  var CHK_SELECT = 1;
  var CHK_DESELECT = 2;
  var CHECKMARK_POSITION = {};
  var imgCheckboxClass = function (element, options, id) {
    var $wrapperElement,
      $finalStyles = {},
      grayscaleStyles = {
        "span.imgCheckbox .img_select": {
          transform: "scale(1)",
          filter: "none",
          "-webkit-filter": "grayscale(0)",
        },
        "span.imgCheckbox.imgChked .img_select": {
          // "filter": "gray", //TODO - this line probably will not work but is necessary for IE
          filter: "grayscale(1)",
          "-webkit-filter": "grayscale(1)",
        },
      },
      scaleStyles = {
        "span.imgCheckbox .img_select": {
          transform: "scale(1)",
        },
        "span.imgCheckbox.imgChked .img_select": {
          transform: "scale(0.8)",
        },
      },
      scaleCheckMarkStyles = {
        "span.imgCheckbox::before": {
          transform: "scale(0)",
        },
        "span.imgCheckbox.imgChked::before": {
          transform: "scale(1)",
        },
      },
      fadeCheckMarkStyles = {
        "span.imgCheckbox::before": {
          opacity: "0",
        },
        "span.imgCheckbox.imgChked::before": {
          opacity: "1",
        },
      };
    /* *** STYLESHEET STUFF *** */
    // shove in the custom check mark
    if (options.checkMarkImage !== false)
      $.extend(true, $finalStyles, {
        "span.imgCheckbox::before": {
          "background-image": "url('" + options.checkMarkImage + "')",
        },
      });
    // give the checkmark dimensions
    var chkDimensions = options.checkMarkSize.split(" ");
    $.extend(true, $finalStyles, {
      "span.imgCheckbox::before": {
        width: chkDimensions[0],
        height: chkDimensions[chkDimensions.length - 1],
      },
    });
    // give the checkmark a position
    $.extend(true, $finalStyles, {
      "span.imgCheckbox::before": CHECKMARK_POSITION[options.checkMarkPosition],
    });
    // fixed image sizes
    if (options.fixedImageSize) {
      var imgDimensions = options.fixedImageSize.split(" ");
      $.extend(true, $finalStyles, {
        "span.imgCheckbox .img_select": {
          width: imgDimensions[0],
          height: imgDimensions[imgDimensions.length - 1],
        },
      });
    }
    var conditionalExtend = [{
        doExtension: options.graySelected,
        style: grayscaleStyles,
      },
      {
        doExtension: options.scaleSelected,
        style: scaleStyles,
      },
      {
        doExtension: options.scaleCheckMark,
        style: scaleCheckMarkStyles,
      },
      {
        doExtension: options.fadeCheckMark,
        style: fadeCheckMarkStyles,
      },
    ];
    conditionalExtend.forEach(function (extension) {
      if (extension.doExtension) $.extend(true, $finalStyles, extension.style);
    });
    $finalStyles = $.extend(
      true, {},
      defaultStyles,
      $finalStyles,
      options.styles
    );
    // Now that we've built up our styles, inject them
    injectStylesheet($finalStyles, id);
    /* *** DOM STUFF *** */
    element.wrap("<span class='imgCheckbox" + id + "'>");
    $wrapperElement = element.parent();
    // set up select/deselect functions
    $wrapperElement.each(function () {
      var $that = $(this);
      $(this)
        .data("imgchk.deselect", function () {
          changeSelection(
            $that,
            CHK_DESELECT,
            options.addToForm,
            options.radio,
            options.canDeselect,
            $wrapperElement
          );
        })
        .data("imgchk.select", function () {
          changeSelection(
            $that,
            CHK_SELECT,
            options.addToForm,
            options.radio,
            options.canDeselect,
            $wrapperElement
          );
        });
      $(this)
        .children()
        .first()
        .data("imgchk.deselect", function () {
          changeSelection(
            $that,
            CHK_DESELECT,
            options.addToForm,
            options.radio,
            options.canDeselect,
            $wrapperElement
          );
        })
        .data("imgchk.select", function () {
          changeSelection(
            $that,
            CHK_SELECT,
            options.addToForm,
            options.radio,
            options.canDeselect,
            $wrapperElement
          );
        });
    });
    // preselect elements
    if (options.preselect.length > 0) {
      $wrapperElement.each(function (index) {
        if (options.preselect.indexOf(index) >= 0) $(this).addClass("imgChked");
      });
    }
    // set up click handler
    $wrapperElement.click(function () {
      var el = $(this);
      changeSelection(
        el,
        CHK_TOGGLE,
        options.addToForm,
        options.radio,
        options.canDeselect,
        $wrapperElement
      );
      if (options.onclick) options.onclick(el);
    });
    /* *** INJECT INTO FORM *** */
    if (options.addToForm instanceof jQuery || options.addToForm === true) {
      if (options.addToForm === true) {
        options.addToForm = $(element).closest("form");
      }
      if (options.addToForm.length === 0) {
        if (options.debugMessages)
          console.log("imgCheckbox: no form found (looks for form by default)");
        options.addToForm = false;
      }
    }
    if (options.addToForm !== false) {
      $(element).each(function (index) {
        var hiddenElementId = "hEI" + id + "-" + index;
        $(this).parent().data("hiddenElementId", hiddenElementId);
        var imgName = $(this).attr("name");
        imgName =
          typeof imgName != "undefined" ?
          imgName :
          $(this)
          .attr("src")
          .match(/\/(.*)\.[\w]+$/)[1];
        $("<input />")
          .attr("type", "checkbox")
          .attr("name", imgName)
          .addClass(hiddenElementId)
          .css("display", "none")
          .prop("checked", $(this).parent().hasClass("imgChked"))
          .appendTo(options.addToForm);
      });
    }
    return this;
  };
  /* CSS Injection */
  function injectStylesheet(stylesObject, id) {
    // Create a blank style
    var style = document.createElement("style");
    // WebKit hack
    style.appendChild(document.createTextNode(""));
    // Add the <style> element to the page
    document.head.appendChild(style);
    var stylesheet = document.styleSheets[document.styleSheets.length - 1];
    for (var selector in stylesObject) {
      if (stylesObject.hasOwnProperty(selector)) {
        compatInsertRule(
          stylesheet,
          selector,
          buildRules(stylesObject[selector]),
          id
        );
      }
    }
  }

  function buildRules(ruleObject) {
    var ruleSet = "";
    for (var property in ruleObject) {
      if (ruleObject.hasOwnProperty(property)) {
        ruleSet += property + ":" + ruleObject[property] + ";";
      }
    }
    return ruleSet;
  }

  function compatInsertRule(stylesheet, selector, cssText, id) {
    var modifiedSelector = selector.replace(
      ".imgCheckbox",
      ".imgCheckbox" + id
    );
    // IE8 uses "addRule", everyone else uses "insertRule"
    if (stylesheet.insertRule) {
      stylesheet.insertRule(modifiedSelector + "{" + cssText + "}", 0);
    } else {
      stylesheet.addRule(modifiedSelector, cssText, 0);
    }
  }

  function changeSelection(
    $chosenElement,
    howToModify,
    addToForm,
    radio,
    canDeselect,
    $wrapperElement
  ) {
    if (radio && howToModify !== CHK_DESELECT) {
      $wrapperElement.not($chosenElement).removeClass("imgChked");
      if (canDeselect) {
        $chosenElement.toggleClass("imgChked");
      } else {
        $chosenElement.addClass("imgChked");
      }
    } else {
      switch (howToModify) {
        case CHK_DESELECT:
          $chosenElement.removeClass("imgChked");
          break;
        case CHK_TOGGLE:
          $chosenElement.toggleClass("imgChked");
          break;
        case CHK_SELECT:
          $chosenElement.addClass("imgChked");
          break;
      }
    }
    if (addToForm) updateFormValues(radio ? $wrapperElement : $chosenElement);
  }

  function updateFormValues($element) {
    $element.each(function () {
      $("." + $(this).data("hiddenElementId")).prop(
        "checked",
        $(this).hasClass("imgChked")
      );
    });
  }
  /* Init */
  $.fn.imgCheckbox = function (options) {
    if ($(this).data("imgCheckboxId"))
      //already initialised: old instance = $.fn.imgCheckbox.instances[$(this).data("imgCheckboxId") - 1];
      return this;
    else {
      var optionsWithDefaults = $.extend(
        true, {},
        $.fn.imgCheckbox.defaults,
        options
      );
      var $that = new imgCheckboxClass(
        $(this),
        optionsWithDefaults,
        $.fn.imgCheckbox.instances.length
      );
      $(this).data("imgCheckboxId", $.fn.imgCheckbox.instances.push($that));
      if (optionsWithDefaults.onload) optionsWithDefaults.onload();
      return this;
    }
  };
  $.fn.deselect = function () {
    if (this.data("imgchk.deselect")) {
      this.data("imgchk.deselect")();
    }
    return this;
  };
  $.fn.select = function () {
    if (this.data("imgchk.select")) {
      this.data("imgchk.select")();
    }
    return this;
  };
  $.fn.imgCheckbox.instances = [];
  $.fn.imgCheckbox.defaults = {
    checkMarkImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzQ2LjM4NCkiPjxwYXRoIGZpbGw9IiMxZWM4MWUiIGZpbGwtb3BhY2l0eT0iLjgiIGQ9Ik0zMiAzNDYuNGEzMiAzMiAwIDAgMC0zMiAzMiAzMiAzMiAwIDAgMCAzMiAzMiAzMiAzMiAwIDAgMCAzMi0zMiAzMiAzMiAwIDAgMC0zMi0zMnptMjEuMyAxMC4zbC0yNC41IDQxTDkuNSAzNzVsMTcuNyA5LjYgMjYtMjh6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuNSAzNzUuMmwxOS4zIDIyLjQgMjQuNS00MS0yNiAyOC4yeiIvPjwvZz48L3N2Zz4=",
    graySelected: true,
    scaleSelected: true,
    fixedImageSize: false,
    checkMarkSize: "30px",
    checkMarkPosition: "top-left",
    scaleCheckMark: true,
    fadeCheckMark: false,
    addToForm: true,
    preselect: [],
    radio: false,
    canDeselect: false,
    onload: false,
    onclick: false,
    debugMessages: false,
  };
  var defaultStyles = {
    "span.imgCheckbox .img_select": {
      display: "block",
      margin: "0",
      padding: "0",
      "transition-duration": "300ms",
    },
    "span.imgCheckbox.imgChked .img_select": {},
    "span.imgCheckbox": {
      "user-select": "none",
      "-webkit-user-select": "none" /* Chrome all / Safari all */ ,
      "-moz-user-select": "none" /* Firefox all */ ,
      "-ms-user-select": "none" /* IE 10+ */ ,
      position: "relative",
      padding: "0",
      margin: "5px",
      display: "inline-block",
      border: "1px solid transparent",
      "transition-duration": "300ms",
    },
    "span.imgCheckbox.imgChked": {
      "border-color": "#ccc",
    },
    "span.imgCheckbox::before": {
      display: "block",
      "background-size": "100% 100%",
      content: "''",
      color: "white",
      "font-weight": "bold",
      "border-radius": "50%",
      position: "absolute",
      margin: "0.5%",
      "z-index": "1",
      "text-align": "center",
      // "transition-duration": "300ms",
    },
    "span.imgCheckbox.imgChked::before": {
      top: "42%",
      left: "47%",
    },
  };
})(jQuery);
$(".img_select").imgCheckbox({
  onclick: function (el) {
    var isChecked = el.hasClass("imgChked"),
      imgEl = el.children()[0]; // the img element
    console.log(
      imgEl.name + " is now " + (isChecked ? "checked" : "not-checked") + "!"
    );
  },
});
// Payment select image end
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
// CART QUANTITY INCREAS AND DECREASE START
// https://codepen.io/AximA/pen/wEpeME
function increaseValue() {
  var value = parseInt(document.getElementById("numbers").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("numbers").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("numbers").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("numbers").value = value;
}
// CART QUANTITY INCREAS AND DECREASE  END
$("#categories-list").hover(
  function () {
    $('.category-list').collapse('show');
  },
  function () {
    $('.category-list').collapse('hide');
  });
// MOBILE SEARCH START
$(".search_icon_new").click(function () {
  $(".sub_search").css("opacity", "1");
  $(".search_icon_new").hide();
});
$("body").on("click", function (e) {
  if (
    $(e.target).closest(".search_icon_new").length === 0 &&
    $(e.target).closest(".sub_search").length === 0
  ) {
    $(".search_icon_new").show();
    $(".sub_search").css("opacity", "0");
  }
});
// MOBILE SEARCH END