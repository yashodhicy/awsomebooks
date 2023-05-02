function Navigation(domElements) {
  const {
    sections, links, defaultLink, defaultSection,
  } = domElements;

  defaultSection.classList.remove('hide');

  // Trigger the click event on the default link
  const event = new MouseEvent('click');
  defaultLink.dispatchEvent(event);

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      // Prevent default link behavior
      event.preventDefault();

      // Toggle the hide class for each section
      sections.forEach((section) => {
        if (section.id === link.getAttribute('href').substring(1)) {
          section.classList.remove('hide');
        } else {
          section.classList.add('hide');
        }
      });
    });
  });
}

export default Navigation;