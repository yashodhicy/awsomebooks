export function Navigation() {
    const bookListSection = document.getElementById('booklist');
    const addNewBookSection = document.getElementById('addnewbook');
    const contactSection = document.getElementById('contact');

    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('a[href^="#"]');

    // Set the default link and section
    const defaultLink = document.querySelector('#booklist-link');
    const defaultSection = document.querySelector('#booklist');

    // Remove the hide class from the default section
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

