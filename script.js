// Theme toggling function
function toggleThemeDark() {
    var body = document.body;
    body.classList.toggle("dark-theme");
}

var header = document.getElementById("heder");

// Set default selected car button
window.onload = function() {
    showCar(0); // Show Audi A7 by default
};

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const choices = mobileMenu.querySelectorAll('a');
    const inputFields = document.querySelectorAll('.input-field');

    if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        mobileMenu.classList.add('hide');
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 500); // Match the duration of the transition

        choices.forEach(choice => {
            choice.removeEventListener('click', handleChoiceClick);
        });
        setTimeout(() => {
            inputFields.forEach(input => {
                input.style.display = 'flex';
            });
        }, 500);
    } else {
        mobileMenu.style.display = 'flex';

        inputFields.forEach(input => {
            input.style.display = 'none';
        });


        setTimeout(() => {
            mobileMenu.classList.remove('hide');
            mobileMenu.classList.add('show');
        }, 10); // Small delay to allow the display change to take effect

        choices.forEach(choice => {
            choice.addEventListener('click', handleChoiceClick);
        });
    }
}

function handleChoiceClick() {
    toggleMenu();
}




function smoothScrollTo(targetId) {
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
        var targetPosition = targetElement.offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
var lastScrollTop = 0;

// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    var currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        header.style.top = "-100px";
        backToTopBtn.style.bottom = "10px";
    } else {
        header.style.top = "0";
        backToTopBtn.style.bottom = "-10px";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

const cars = [
    {
        image: "https://i.ibb.co/bHDb1TL/Mercedes-Benz-E-Class.png",
        price: "$45 / rent per day",
        details: [
            { label: "Mark", value: "Mercedes" },
            { label: "Model", value: "Benz E-Class" },
            { label: "Year", value: "2014" },
            { label: "Doors", value: "4/5" },
            { label: "AC", value: "Yes" },
            { label: "Transmission", value: "Automatic" },
            { label: "Fuel", value: "Gasoline" }
        ]
    },
    {
        image: "https://i.ibb.co/1R74DFn/Audi-A7.png",
        price: "$40 / rent per day",
        details: [
            { label: "Mark", value: "Audi" },
            { label: "Model", value: "A7" },
            { label: "Year", value: "2015" },
            { label: "Doors", value: "4/5" },
            { label: "AC", value: "Yes" },
            { label: "Transmission", value: "Automatic" },
            { label: "Fuel", value: "Gasoline" }
        ]
    },
    {
        image: "https://i.ibb.co/y0m9qPy/Volkswagen.png",
        price: "$35 / rent per day",
        details: [
            { label: "Mark", value: "Volkswagen" },
            { label: "Model", value: "Tiguan" },
            { label: "Year", value: "2014" },
            { label: "Doors", value: "4/5" },
            { label: "AC", value: "Yes" },
            { label: "Transmission", value: "Manual" },
            { label: "Fuel", value: "Diesel" }
        ]
    },
    {
        image: "https://i.ibb.co/qmL6Hp9/BMW-Series.png",
        price: "$45 / rent per day",
        details: [
            { label: "Mark", value: "BMW" },
            { label: "Model", value: "Q5" },
            { label: "Year", value: "2016" },
            { label: "Doors", value: "4/5" },
            { label: "AC", value: "Yes" },
            { label: "Transmission", value: "Automatic" },
            { label: "Fuel", value: "Gasoline" }
        ]
    },
    {
        image: "https://i.ibb.co/kK4TbQJ/Ford-Focus.png",
        price: "$30 / rent per day",
        details: [
            { label: "Mark", value: "Ford" },
            { label: "Model", value: "Focus" },
            { label: "Year", value: "2010" },
            { label: "Doors", value: "4/5" },
            { label: "AC", value: "Yes" },
            { label: "Transmission", value: "Manual" },
            { label: "Fuel", value: "Diesel" }
        ]
    },
    {
        image: "https://i.ibb.co/SBXhSZ9/Honda-Civic.png",
        price: "$45 / rent per day",
        details: [
            { label: "Mark", value: "Honda" },
            { label: "Model", value: "Civic" },
            { label: "Year", value: "2016" },
            { label: "Doors", value: "4/5" },
            { label: "AC", value: "Yes" },
            { label: "Transmission", value: "Automatic" },
            { label: "Fuel", value: "Gasoline" }
        ]
    },
    {
        image: "https://i.ibb.co/526jRkV/Hyundai-Sonata.png",
        price: "$35 / rent per day",
        details: [
            { label: "Mark", value: "Hyundai" },
            { label: "Model", value: "Sonata" },
            { label: "Year", value: "2013" },
            { label: "Doors", value: "4/5" },
            { label: "AC", value: "Yes" },
            { label: "Transmission", value: "Manual" },
            { label: "Fuel", value: "Diesel" }
        ]
    },
    {
        image: "https://i.ibb.co/MsM5FYy/Nissan.png",
        price: "$35 / rent per day",
        details: [
            { label: "Mark", value: "Nissan" },
            { label: "Model", value: "QASHQAI" },
            { label: "Year", value: "2010" },
            { label: "Doors", value: "4/5" },
            { label: "AC", value: "Yes" },
            { label: "Transmission", value: "Manual" },
            { label: "Fuel", value: "Diesel" }
        ]
    },
    {
        image: "https://i.ibb.co/FsHTGdC/Toyota-Corolla.png",
        price: "$40 / rent per day",
        details: [
            { label: "Mark", value: "Toyota" },
            { label: "Model", value: "Corolla" },
            { label: "Year", value: "2015" },
            { label: "Doors", value: "4/5" },
            { label: "AC", value: "Yes" },
            { label: "Transmission", value: "Automatic" },
            { label: "Fuel", value: "Gasoline" }
        ]
    },
    // Add other car objects here
];

function showCar(index,button) {
    const car = cars[index];
    document.getElementById('car-image').src = car.image;
    document.querySelector('#car-info .price').innerText = car.price;
    const table = document.querySelector('#car-info table');
    table.innerHTML = '';
    car.details.forEach(detail => {
        const row = document.createElement('tr');
        const labelCell = document.createElement('td');
        labelCell.innerText = detail.label;
        const valueCell = document.createElement('td');
        valueCell.innerText = detail.value;
        row.appendChild(labelCell);
        row.appendChild(valueCell);
        table.appendChild(row);
    });
    document.querySelectorAll('.car-btn').forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

document.querySelectorAll('.single-Question .question').forEach(question => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;
        const answer = parent.querySelector('.answer');
        const icon = parent.querySelector('.fleche i');

        if (parent.classList.contains('active')) {
            answer.style.maxHeight = '0';
            answer.style.padding = '0 10px';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
            parent.classList.remove('active');
        } else {
            document.querySelectorAll('.single-Question .answer').forEach(a => {
                a.style.maxHeight = '0';
                a.style.padding = '0 10px';
            });
            document.querySelectorAll('.single-Question .fleche i').forEach(i => {
                i.classList.remove('fa-chevron-up');
                i.classList.add('fa-chevron-down');
            });
            document.querySelectorAll('.single-Question').forEach(q => q.classList.remove('active'));
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.padding = '10px';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
            parent.classList.add('active');
        }
    });
});