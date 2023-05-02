export function dom () {
    const bookListSection = document.getElementById('booklist');
    const addNewBookSection = document.getElementById('addnewbook');
    const contactSection = document.getElementById('contact');

    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('a[href^="#"]');

    // Set the default link and section
    const defaultLink = document.querySelector('#booklist-link');
    const defaultSection = document.querySelector('#booklist');

    return {
        bookListSection,
        addNewBookSection,
        contactSection,
        sections,
        links,
        defaultLink,
        defaultSection
    };
  }