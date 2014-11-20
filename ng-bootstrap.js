/*
 ng-bootsrap.js 
 <http://angularanimation.ya.com.tr>
 (c) 2014 Mehmet Ötkün <info [at] ya.com.tr>
  all rights reserved
  Under the terms of this license, the licensee is granted the following privileges:
  - The right to use the library as part of a website or application that is used for commercial purposes
  - The right to modify the library to suit his purpose.
*/
//if (typeof angular === 'undefined') { throw new Error('ngBootsrap\'s JavaScript requires angular') }
//NEED SOME OVERWRITE ON BOOTSTRAP COMPONENT
(function ($) {
    "use strict";
    var oldmodal = $.fn.modal;
    $.fn.modal = function () {
        var $this = $(this)
        var options = arguments[0]
        var target = arguments[1]
        if (options == 'toggle' && target) {
            var newdata = $.extend({}, $this.data('bs.modal').options, $(target).data())
            $this.data('bs.modal').options = newdata;
        }
        oldmodal.apply(this, arguments)
        return this;
    }
})(jQuery)
var bsApp = angular.module('ngBootstrap', ['ngAnimate'])
.provider('$modal', function () {
    var defaults = this.defaults = {
        animation: 'rotate',
        speed: 'fast',
        backdrop: true,
        keyboard: true,
        show: true
    };
    this.$get = function () {
        return { defaults: defaults };
    };
})
.directive('modal', ['$animate', '$modal', function ($animate, $modal) {
    return {
        restrict: 'AC',
        link: function (scope, element, attr) {
            var defaults = $modal.defaults;
            var data, dialog, backdrop;
            element.removeClass('fade')
            element.on('shown.bs.modal', function (evt) {
                data = element.data('bs.modal')
                options = angular.extend({}, defaults, data.options)
                dialog = element.find('.modal-dialog')
                backdrop = data.$backdrop;
                element.removeClass('fade')
                backdrop.removeClass('fade')
                if (dialog && options.animation) {
                    backdrop.addClass(options.speed)
                    dialog.addClass(options.speed)
                    $animate.addClass(backdrop, 'fade-in')
                    $animate.addClass(dialog, options.animation)
                }
            })
            element.on('hide.bs.modal', function (evt) {
                if (options.animation)
                    evt.preventDefault();
                if (dialog && options.animation) {
                    $animate.removeClass(backdrop, 'fade-in', function () {
                        backdrop.remove()
                    })
                    $animate.removeClass(dialog, options.animation, function () {
                        //now complate hiding the modal
                        element.modal('escape');
                        element.data('bs.modal').isShown = false;
                        $(document).off('focusin.bs.modal')
                        element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal');
                        element.modal('hideModal');
                        
                    })

                }

            })
            scope.$hide = function (event) {
                element.modal('hide')
            }
        }
    }
}])
.provider('$tabs', function () {
    var defaults = this.defaults = {
        animation: 'slide-right-left',
        speed: 'fast'
    };
    this.$get = function () {
        return { defaults: defaults };
    };
})
.directive('navTabs', ['$animate', '$tabs', function ($animate, $tabs) {
    return {
        restrict: 'AC',
        link: function postLink(scope, element, attr) {
            var options = angular.extend({}, $tabs.defaults)
            angular.forEach(['animation', 'speed'], function (key) {
                attr.$observe(key, function (newValue, oldValue) {
                    if (newValue)
                        options[key] = newValue;
                });
            })
            if (options.animation) {
                var toggles = element.find('a[data-toggle="tab"]')
                toggles.on('shown.bs.tab', function (e) {
                    var current = angular.element(angular.element(e.target).attr('href'))
                    var past = angular.element(angular.element(e.relatedTarget).attr('href'))
                    past.addClass(options.speed).css('display', 'block').css('position', 'absolute').css('top', '0px').css('left', '0px')
                    $animate.removeClass(past, options.animation, function () {
                        past.css('display', 'none').css('position', '').css('top', '').css('left', '')
                    })
                    current.addClass(options.speed).css('display', '').css('position', '').css('top', '').css('left', '')
                    $animate.addClass(current, options.animation, function () {
                    })

                })
            }
                

        },
    }
}])
.provider('$dropdown', function () {
    var defaults = this.defaults = {
        animation: 'sing',
        speed: 'fast'
    };
    this.$get = function () {
        return { defaults: defaults };
    };
})
.directive('dropdown', ['$animate', '$dropdown', function ($animate, $dropdown) {
    return {
        restrict: 'C',
        link: function (scope, element, attr) {
            //default options
            var options = angular.extend({}, $dropdown.defaults);

            //finding animation and speed options of dropdown
            angular.forEach(['animation', 'speed'], function (key) {
                attr.$observe(key, function (newValue, oldValue) {
                    if (newValue)
                        options[key] = newValue;
                });
            })
            var menu = element.find('.dropdown-menu')
            //listen to dropdown show
            element.on('show.bs.dropdown', function (evt) {
                if (options.animation) {
                    if (!menu.length)
                        menu = findTarget(evt.relatedTarget)
                    if (menu.length) {
                        menu.addClass(options.speed)
                        $animate.addClass(menu, options.animation)
                    }
                }
                
            })
            //listen to dropdown hide
            element.on('hide.bs.dropdown', function (evt) {
                if (options.animation) {
                    if (!menu.length)
                        menu = findTarget(evt.relatedTarget)
                    if (menu.length)
                        $animate.removeClass(menu, options.animation, function () {
                            menu.removeClass(options.speed)
                        })
                }
                
            })
            //finding dorpdown target if any menu not available
            function findTarget(relTarget) {
                return $($(relTarget).attr('data-target'))
            }
        }
    }
}])
.provider('$tooltip', function () {
    var defaults = this.defaults = {
        animation: 'fade-in',
        speed: 'fastest'
    };
    this.$get = function () {
        return { defaults: defaults };
    };
})
.provider('$popover', function () {
    var defaults = this.defaults = {
        animation: 'flip-x',
        speed: 'fast'
    };
    this.$get = function () {
        return { defaults: defaults };
    };
})
.directive('toggle', ['$animate', '$tooltip', '$popover', function ($animate, $tooltip, $popover) {
    return {
        restrict: 'AC',
        link: function (scope, element, attr) {
            //if toggle is not popover or tooltip return
            if (!/(popover|tooltip)/.test(attr.toggle))
                return;
            var type = attr.toggle, trigger = 'click';
            if (type == 'popover') {
                //create popover with animation option false
                //if animation option stay true, there will be conflict between bootstrap animation and you animation
                element.popover({ animation: false });
                attr.trigger && (trigger = attr.trigger)
            }
            else {
                //create tooltip with animation option false
                element.tooltip({ animation: false });
                trigger = attr.trigger ? attr.trigger : 'hover'
            }
            //your default option  
            var options = angular.extend({}, type == 'popover' ? $popover.defaults: $tooltip.defaults);

            //finding animation and speed options of popover or tooltip
            angular.forEach(['animation', 'speed'], function (key) {
                attr.$observe(key, function (newValue, oldValue) {
                    if (newValue)
                        options[key] = newValue;
                });
            })
            //listen to popover or tooltip show
            element.on('shown.bs.' + attr.toggle, function (evt) {
                var tip = element.data('bs.' + attr.toggle).$tip
                if (tip && options.animation) {
                    //add speed class
                    tip.addClass(options.speed)
                    //add animations effect class using addClass method of $animate
                    $animate.addClass(tip, options.animation)
                }
            })
            element.on('hide.bs.' + attr.toggle, function (evt) {
                var data = element.data('bs.' + attr.toggle)
                //you must prevent element hide by default
                if (options.animation)
                    evt.preventDefault();
                var tip = data.$tip
                if (tip && options.animation) {
                    //add animations effect class using removeClass method of $animate
                    $animate.removeClass(tip, options.animation, function () {
                        tip.removeClass(options.speed)
                        //manually detach the element after animation end.
                        //coplate remaining events of bs.tooltip or bs.popover 
                        tip.removeClass('in')
                        tip.detach()
                        element.trigger('hidden.bs.' + type)
                    });
                }

            })
        }
    }
}])
