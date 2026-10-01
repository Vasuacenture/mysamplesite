export default function decorate(block) {
	const picture = block.querySelector('picture');
	if (picture) {
		let emptyParent = picture.parentElement;
		block.prepend(picture);
		while (emptyParent && emptyParent !== block && emptyParent.childElementCount === 0 && !emptyParent.textContent.trim()) {
			const parent = emptyParent.parentElement;
			emptyParent.remove();
			emptyParent = parent;
		}
		block.classList.add('hero-has-image');
	}

	const content = document.createElement('div');
	content.className = 'hero-content';
	[...block.children].forEach((child) => {
		if (child !== picture) content.append(child);
	});
	block.append(content);
}
