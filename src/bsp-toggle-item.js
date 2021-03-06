/**
 * BSP Toggle takes a toggle trigger and attaches clicks to the trigger, to toggle-in the toggled item. 
 * 
 * The default classes are "toggle-item" and "toggle-trigger" and the following markup works well
 *
 * <div class="my wrapper" data-bsp-toggle-item>
 *    <div class="the-thing toggle-item"></div>
 *     <div class="toggle-trigger"><a href="#">Trigger the toggle</a></div>
 * </div>
 *
 * This plugin will take clicks on "toggle-trigger" and add the "toggle-in" class to the toggle-item
 * It will also add "toggle-trigger-in" class to the "toggle-trigger"
 * It will finally take the base class of the "toggle-item" and add a class to the body. In the above
 * markup example, it will add a "the-thing-toggle-in" class to the body
 *
 * Lastly, a click off the item somewhere on the body will toggle it off
 *
 */

import $ from 'jquery';
import bsp_utils from 'bsp-utils';

var bsp_toggle_item = {

    'defaults': {
        toggleItem: '.toggle-item',
        toggleTrigger: '.toggle-trigger',
        toggleClass: 'toggle-in'
    },

    init: function($parent, options) {

        var self = this;
        self.settings = $.extend({}, self.defaults, options);

        // cache a bunch of selectors
        self.$parent = $parent;
        self.$toggleItem = self.$parent.find(self.settings.toggleItem);
        self.$trigger = self.$parent.find(self.settings.toggleTrigger);
        self.$body = $('body');

        // kick it off
        self.addClickHandler();
        
    },

    'addClickHandler': function() {
        var self = this;

        // when we click on the trigger we want to go ahead and toggle, as well as add 
        // a handler to the body so when you click "off" the toggled item, it will untoggle it
        self.$parent.find(self.settings.toggleTrigger).on('click.toggle', function(e){
            e.preventDefault();

            //self.addBodyHandler();

            self.toggleHelper($(this));
        });
    },

    // TODO: figure out a prettier way to do this
    // 
    // if we detect a click somewhere on the body not on the toggle item itself, close itself
    // 'addBodyHandler': function() {
    //     var self = this;

    //     // kill any other clicks for toggling
    //     self.$body.off('click.toggle-out');

    //     // note no return false or prevent default here, we want those actions to happen, we just want to 
    //     // toggle out the toggled in item
    //     self.$body.on('click.toggle-out', function(e) {

    //         // if the click is outside the toggle item and trigger, then toggle it out
    //         if (!$(e.target).parents(self.settings.toggleItem).length && !$(e.target).parents(self.settings.toggleTrigger).length) {
    //             self.toggleHelper(self.$body);
    //         }

    //     });
    // },

    'toggleHelper' : function($target) {
        var self = this;

        // gets the base class from the trigger item
        var baseClass = self.$toggleItem.attr('class').split(' ')[0];

        // add it to the body so we have an identifier there
        self.$body.toggleClass(baseClass + '-' + self.settings.toggleClass);

        // Toggle the item
        self.$toggleItem.toggleClass(self.settings.toggleClass);

        // Toggle the trigger
        self.$trigger.toggleClass(self.settings.toggleClass);

        // kill any clicks on the body
        self.$body.off('click.toggle-out');
    }

};

export default bsp_toggle_item;
