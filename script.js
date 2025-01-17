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

// Ensure showCar sets the active class on the correct button
function showCar(index) {
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

const signInButton = document.getElementById('SignInPanelButton');
const signUpButton = document.getElementById('SignUpPanelButton');
const container = document.getElementById('LoginPopup');

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Function to create overlay
function toggleOverlay() {
    var overlay = document.getElementById("overlay");

    if (!overlay) {
        document.body.insertAdjacentHTML('beforeend', '<div id="overlay" class="overlay"></div>');
        document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
        overlay.remove();
        document.body.style.overflow = ''; // Re-enable scrolling
    }
}
// Toggle login popup
function toggleLoginPopup() {
    var isHidden = container.classList.toggle("hidden");
    if (!isHidden) {
        toggleOverlay(); // Create overlay when the popup is shown
    } else {
        toggleOverlay(); // Remove overlay when the popup is hidden
        container.querySelectorAll("input[type='text'],input[type='email'], input[type='password'],button[type='submit']").forEach(function(input) {
            input.value = "";
            input.disabled = false ;
        });
        // Remove any existing error messages
        const existingErrorMessage = document.querySelector('.error-message');
        if (existingErrorMessage) {
            existingErrorMessage.remove();
        }
    }
}

function reserveCar() {
    // Get the currently displayed car type
    let carType = document.querySelector('.cars-switch .car-btn.active').getAttribute('data-car-type');
    
    // Set the car type in the booking form
    let carTypeSelect = document.getElementById('car-type');
    for (let i = 0; i < carTypeSelect.options.length; i++) {
        if (carTypeSelect.options[i].text === carType) {
            carTypeSelect.selectedIndex = i;
            break;
        }
    }

    // Optionally, scroll to the booking form
    document.getElementById('book').scrollIntoView({ behavior: 'smooth' });
}

// Function to handle Search form submission
document.getElementById('SearchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const selectedCar = document.getElementById('car-type').value;
    const pickupLocation = document.getElementById('pickup-location').value;
    const dropoffLocation = document.getElementById('dropoff-location').value;
    const pickupDate = document.getElementById('pickup-date').value;
    const dropoffDate = document.getElementById('dropoff-date').value;

    if (selectedCar ==='' || pickupLocation ==='' || dropoffLocation ==='' || pickupDate ==='' || dropoffDate ==='' ) {
        displayErrorMessage('All fields required!', 'search','#721c24')
    }
    // Validate dates
    const currentDate = new Date();
    const pickupDateObj = new Date(pickupDate);
    const dropoffDateObj = new Date(dropoffDate);

    // Check if pickup date is valid (not before current date)
    if (pickupDateObj < currentDate) {
        showHighPropertyMessages('Pick-up date must be today or a future date.', 'red');
        return;
    }

    // Check if drop-off date is valid (at least 1 day after pick-up date)
    const minDropoffDate = new Date(pickupDateObj);
    minDropoffDate.setDate(minDropoffDate.getDate() + 1); // Add 1 day to pickup date

    if (dropoffDateObj <= pickupDateObj || dropoffDateObj < minDropoffDate) {
        showHighPropertyMessages('Drop-off date must be at least 1 day after the pick-up date.', 'red');
        return;
    }

    // Create an object to hold the form data
    const formData = {
        carType: selectedCar,
        pickupLocation: pickupLocation,
        dropoffLocation: dropoffLocation,
        pickupDate: pickupDate,
        dropoffDate: dropoffDate
    };

    // Process the form data (e.g., send to a server, log to console)
    console.log('Form Data:', formData);

    
});

function showHighPropertyMessages(notification,color){
    const message = document.createElement('div');
    message.textContent= notification ;
    message.style.backgroundColor= color ;
    message.classList.add('notification'); // Add the CSS class to the created div

    document.body.appendChild(message); // Append the message to the body of the document
    setInterval(function(){
        message.classList.add('hidden');
    },3000)
}

// Function to display error message
function displayErrorMessage(message, type, color) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.style.color = color;
    errorMessage.classList.add("error-message");

    const errorClose = document.createElement('div');
    errorClose.addEventListener('click', () => {
        errorMessage.remove();
    });
    errorClose.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
    `;
    errorClose.classList.add('Inputs-Error-Close');
    errorMessage.appendChild(errorClose);

    // Add slide-in animation
    errorMessage.style.animation = "slideIn 0.3s ease forwards";

    // Remove any existing error messages
    const existingErrorMessage = document.querySelector('.error-message');
    if (existingErrorMessage) {
        existingErrorMessage.remove();
    }

    // Insert error message after appropriate input field
    let inputField;
    if (type === 'search') {
        inputField = document.getElementById('SearchForm');
    }

    if (inputField) {
        inputField.parentNode.insertBefore(errorMessage, inputField);
    }
}
