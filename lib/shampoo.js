export default function(root, options) {
    if (options === undefined) {
        var options = {};
    }

    var defaults = {
        "resetAttribute": "data-reset",
        "defaultAttribute": "data-default"
    };

    for (var key in defaults) {
        if (!options[key]) {
            options[key] = defaults[key];
        }
    }

    var root   = document.querySelector(root);
    var resets = root.querySelectorAll('[' + options.resetAttribute +']');

    var reset = function(resetElement) {
        var formSelector = resetElement.getAttribute(options.resetAttribute);
        var form         = root.querySelector(formSelector);

        var inputs = form.querySelectorAll('input[type="checkbox"], input[type="radio"]');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = inputs[i].getAttribute(options.defaultAttribute) !== null;
        }

        var inputs = form.querySelectorAll('select');
        for (var i = 0; i < inputs.length; i++) {

            if (inputs[i].getAttribute(options.defaultAttribute)) {
                for (var o = 0; o < input[i].options.length; o++) {
                    o.selected = inputs[i].getAttribute(options.defaultAttribute) == o.value ? 'selected' : '';
                }
            } else {
                inputs[i].options[0].selected = 'selected';
            }
        }

        var inputs = form.querySelectorAll('input[type="text"], input:not([type]), textarea');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = inputs[i].getAttribute('defaultAttribute');
        }

    };

    for (var i = 0; i < resets.length; i++) {
        var element      = resets[i];
        element.addEventListener('click', function(e) {
            e.preventDefault();
            reset(this);
        });
    }
}
