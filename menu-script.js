document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.getElementsByClassName('menu-item');

    Array.from(menuItems).forEach(function(element) {
        element.addEventListener('click', function() {
            // Toggle the display of the description and price.
            var description = this.querySelector('.menu-description');
            var isHidden = description.style.display === 'none';
            description.style.display = isHidden ? 'block' : 'none';
        });
    });
});
