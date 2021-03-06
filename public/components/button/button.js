(function () {
	'use strict';

	class Button {
		constructor (options) {
			this.el = document.createElement('button');
			this.el.innerHTML = options.text;
			this.el.style.backgroundColor = options.backgroundColor || '#4dca62';
			this.el.classList.add('button');

			this.setAttrs(options.attrs);
		}

		setAttrs (attrs) {
			Object.keys(attrs).forEach(name => {
				this.el.setAttribute(name, attrs[name]);
			})
		}

		static include (btn, el) {
			el.appendChild(btn.el);
		}
	}

	window.Button = Button;

})();
