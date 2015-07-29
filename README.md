# brightspot-js-toggle-item

This plugin is a simple item toggling helper. It consists of a simple module and a plugin that allows it to use the bsp-util plugin pattern to instantiate the plugin. 

## Usage

brightspot-js-toggle-item takes a toggle trigger and attaches clicks to the trigger, to toggle-in the toggled item. 

The default classes are `toggle-item` and `toggle-trigger` and the following markup works well:

	<div class="my wrapper" data-bsp-toggle-item>
		<div class="the-thing toggle-item"></div>
		<div class="toggle-trigger"><a href="#">Trigger the toggle</a></div>
	</div>

This plugin will 

* Take clicks on `toggle-trigger` and add the `toggle-in` class to the `toggle-item`
* Add `toggle-trigger-in` class to the `toggle-trigger`
* Take the base class of the `toggle-item` and add a `toggle-in` class based on that to the body. In the above markup example, it will add a `the-thing-toggle-in` class to the body

## TODO:

Need to add unit testing and functionality for clicking off the toggle somewhere on the body