var xValues = ["Mar", "Apr", "May", "Jun", "Jul","Aug"];
var yValues = [1000, 2500, 4000,4400, 4400,4000];
var barColors = ["green", "green","green","green","green","green"];
var cardNumberText=''

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Total New Drivers"
    }
  }
});



var drivers = [
  {
    STATUS: "Active",
    "MOXEY ID": "123456",
    TRANSPORTER: "Trans1",
    "DRIVER NAME(EN)": "John Smith",
    "DRIVER NAME(AR)": "جون سميث",
    "EXTERNAL CUSTOMER ID": "987654321",
    "MOBILE NUMBER": "1234567890",
    "CARD NUMBER": "111122223333",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "789012",
    TRANSPORTER: "Trans2",
    "DRIVER NAME(EN)": "Jane Doe",
    "DRIVER NAME(AR)": "جين دو",
    "EXTERNAL CUSTOMER ID": "567890123",
    "MOBILE NUMBER": "0987654321",
    "CARD NUMBER": "444455556666",
    ACTION: "Edit"
  },
  {
    STATUS: "Inactive",
    "MOXEY ID": "345678",
    TRANSPORTER: "Trans3",
    "DRIVER NAME(EN)": "Michael Johnson",
    "DRIVER NAME(AR)": "مايكل جونسون",
    "EXTERNAL CUSTOMER ID": "456789012",
    "MOBILE NUMBER": "9876543210",
    "CARD NUMBER": "777788889999",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "901234",
    TRANSPORTER: "Trans4",
    "DRIVER NAME(EN)": "Emily Brown",
    "DRIVER NAME(AR)": "إميلي براون",
    "EXTERNAL CUSTOMER ID": "234567890",
    "MOBILE NUMBER": "8765432109",
    "CARD NUMBER": "000011112222",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "567890",
    TRANSPORTER: "Trans5",
    "DRIVER NAME(EN)": "David Wilson",
    "DRIVER NAME(AR)": "ديفيد ويلسون",
    "EXTERNAL CUSTOMER ID": "345678901",
    "MOBILE NUMBER": "7654321098",
    "CARD NUMBER": "333344445555",
    ACTION: "Edit"
  },
  {
    STATUS: "Inactive",
    "MOXEY ID": "234567",
    TRANSPORTER: "Trans6",
    "DRIVER NAME(EN)": "Olivia Miller",
    "DRIVER NAME(AR)": "أوليفيا ميلر",
    "EXTERNAL CUSTOMER ID": "678901234",
    "MOBILE NUMBER": "6543210987",
    "CARD NUMBER": "666677778888",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "890123",
    TRANSPORTER: "Trans7",
    "DRIVER NAME(EN)": "Ethan Anderson",
    "DRIVER NAME(AR)": "إيثان أندرسون",
    "EXTERNAL CUSTOMER ID": "789012345",
    "MOBILE NUMBER": "5432109876",
    "CARD NUMBER": "999900001111",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "456789",
    TRANSPORTER: "Trans8",
    "DRIVER NAME(EN)": "Ava Martinez",
    "DRIVER NAME(AR)": "أفا مارتينيز",
    "EXTERNAL CUSTOMER ID": "901234567",
    "MOBILE NUMBER": "4321098765",
    "CARD NUMBER": "222233334444",
    ACTION: "Edit"
  },
  {
    STATUS: "Inactive",
    "MOXEY ID": "012345",
    TRANSPORTER: "Trans9",
    "DRIVER NAME(EN)": "Sophia Thompson",
    "DRIVER NAME(AR)": "صوفيا طومسون",
    "EXTERNAL CUSTOMER ID": "123456789",
    "MOBILE NUMBER": "3210987654",
    "CARD NUMBER": "555566667777",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "678901",
    TRANSPORTER: "Trans10",
    "DRIVER NAME(EN)": "Noah Garcia",
    "DRIVER NAME(AR)": "نوح غارسيا",
    "EXTERNAL CUSTOMER ID": "234567890",
    "MOBILE NUMBER": "2109876543",
    "CARD NUMBER": "888899990000",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "234561",
    TRANSPORTER: "Trans11",
    "DRIVER NAME(EN)": "Emma Lee",
    "DRIVER NAME(AR)": "إيما لي",
    "EXTERNAL CUSTOMER ID": "345678901",
    "MOBILE NUMBER": "1098765432",
    "CARD NUMBER": "111122223333",
    ACTION: "Edit"
  },
  {
    STATUS: "Inactive",
    "MOXEY ID": "890123",
    TRANSPORTER: "Trans12",
    "DRIVER NAME(EN)": "Liam Perez",
    "DRIVER NAME(AR)": "ليام بيريز",
    "EXTERNAL CUSTOMER ID": "456789012",
    "MOBILE NUMBER": "0987654321",
    "CARD NUMBER": "444455556666",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "456781",
    TRANSPORTER: "Trans13",
    "DRIVER NAME(EN)": "Olivia Cook",
    "DRIVER NAME(AR)": "أوليفيا كوك",
    "EXTERNAL CUSTOMER ID": "567890123",
    "MOBILE NUMBER": "9876543210",
    "CARD NUMBER": "777788889999",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "012349",
    TRANSPORTER: "Trans14",
    "DRIVER NAME(EN)": "Ethan Torres",
    "DRIVER NAME(AR)": "إيثان توريس",
    "EXTERNAL CUSTOMER ID": "678901234",
    "MOBILE NUMBER": "8765432109",
    "CARD NUMBER": "000011112222",
    ACTION: "Edit"
  },
  {
    STATUS: "Inactive",
    "MOXEY ID": "678905",
    TRANSPORTER: "Trans15",
    "DRIVER NAME(EN)": "Mia Gray",
    "DRIVER NAME(AR)": "ميا جراي",
    "EXTERNAL CUSTOMER ID": "789012345",
    "MOBILE NUMBER": "7654321098",
    "CARD NUMBER": "333344445555",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "345678",
    TRANSPORTER: "Trans16",
    "DRIVER NAME(EN)": "Isabella Hill",
    "DRIVER NAME(AR)": "إيزابيلا هيل",
    "EXTERNAL CUSTOMER ID": "890123456",
    "MOBILE NUMBER": "6543210987",
    "CARD NUMBER": "666677778888",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "901236",
    TRANSPORTER: "Trans17",
    "DRIVER NAME(EN)": "Alexander Baker",
    "DRIVER NAME(AR)": "ألكسندر بيكر",
    "EXTERNAL CUSTOMER ID": "901234567",
    "MOBILE NUMBER": "5432109876",
    "CARD NUMBER": "999900001111",
    ACTION: "Edit"
  },
  {
    STATUS: "Inactive",
    "MOXEY ID": "567892",
    TRANSPORTER: "Trans18",
    "DRIVER NAME(EN)": "James Bell",
    "DRIVER NAME(AR)": "جيمس بيل",
    "EXTERNAL CUSTOMER ID": "012345678",
    "MOBILE NUMBER": "4321098765",
    "CARD NUMBER": "222233334444",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "234563",
    TRANSPORTER: "Trans19",
    "DRIVER NAME(EN)": "Sophia Turner",
    "DRIVER NAME(AR)": "صوفيا تيرنر",
    "EXTERNAL CUSTOMER ID": "123456789",
    "MOBILE NUMBER": "3210987654",
    "CARD NUMBER": "555566667777",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "890125",
    TRANSPORTER: "Trans20",
    "DRIVER NAME(EN)": "Benjamin Adams",
    "DRIVER NAME(AR)": "بنيامين آدمز",
    "EXTERNAL CUSTOMER ID": "234567890",
    "MOBILE NUMBER": "2109876543",
    "CARD NUMBER": "888899990000",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "456783",
    TRANSPORTER: "Trans21",
    "DRIVER NAME(EN)": "Amelia Wright",
    "DRIVER NAME(AR)": "أميليا رايت",
    "EXTERNAL CUSTOMER ID": "345678901",
    "MOBILE NUMBER": "1098765432",
    "CARD NUMBER": "111122223333",
    ACTION: "Edit"
  },
  {
    STATUS: "Inactive",
    "MOXEY ID": "678907",
    TRANSPORTER: "Trans22",
    "DRIVER NAME(EN)": "Daniel Hill",
    "DRIVER NAME(AR)": "دانيال هيل",
    "EXTERNAL CUSTOMER ID": "456789012",
    "MOBILE NUMBER": "0987654321",
    "CARD NUMBER": "444455556666",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "012341",
    TRANSPORTER: "Trans23",
    "DRIVER NAME(EN)": "Mia Murphy",
    "DRIVER NAME(AR)": "ميا مورفي",
    "EXTERNAL CUSTOMER ID": "567890123",
    "MOBILE NUMBER": "9876543210",
    "CARD NUMBER": "777788889999",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "234565",
    TRANSPORTER: "Trans24",
    "DRIVER NAME(EN)": "Jacob Martin",
    "DRIVER NAME(AR)": "جاكوب مارتن",
    "EXTERNAL CUSTOMER ID": "678901234",
    "MOBILE NUMBER": "8765432109",
    "CARD NUMBER": "000011112222",
    ACTION: "Edit"
  },
  {
    STATUS: "Inactive",
    "MOXEY ID": "890127",
    TRANSPORTER: "Trans25",
    "DRIVER NAME(EN)": "Charlotte Hill",
    "DRIVER NAME(AR)": "شارلوت هيل",
    "EXTERNAL CUSTOMER ID": "789012345",
    "MOBILE NUMBER": "7654321098",
    "CARD NUMBER": "333344445555",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "456785",
    TRANSPORTER: "Trans26",
    "DRIVER NAME(EN)": "Aiden Carter",
    "DRIVER NAME(AR)": "أيدن كارتر",
    "EXTERNAL CUSTOMER ID": "901234567",
    "MOBILE NUMBER": "6543210987",
    "CARD NUMBER": "666677778888",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "012343",
    TRANSPORTER: "Trans27",
    "DRIVER NAME(EN)": "Harper Collins",
    "DRIVER NAME(AR)": "هاربر كولينز",
    "EXTERNAL CUSTOMER ID": "012345678",
    "MOBILE NUMBER": "5432109876",
    "CARD NUMBER": "999900001111",
    ACTION: "Edit"
  },
  {
    STATUS: "Inactive",
    "MOXEY ID": "678909",
    TRANSPORTER: "Trans28",
    "DRIVER NAME(EN)": "Lucas Reed",
    "DRIVER NAME(AR)": "لوكاس ريد",
    "EXTERNAL CUSTOMER ID": "123456789",
    "MOBILE NUMBER": "4321098765",
    "CARD NUMBER": "222233334444",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "234567",
    TRANSPORTER: "Trans29",
    "DRIVER NAME(EN)": "Evelyn Ramirez",
    "DRIVER NAME(AR)": "إيفلين راميريز",
    "EXTERNAL CUSTOMER ID": "234567890",
    "MOBILE NUMBER": "3210987654",
    "CARD NUMBER": "555566667777",
    ACTION: "Edit"
  },
  {
    STATUS: "Active",
    "MOXEY ID": "890129",
    TRANSPORTER: "Trans30",
    "DRIVER NAME(EN)": "Logan Wood",
    "DRIVER NAME(AR)": "لوغان وود",
    "EXTERNAL CUSTOMER ID": "345678901",
    "MOBILE NUMBER": "2109876543",
    "CARD NUMBER": "888899990000",
    ACTION: "Edit"
  }
];
 // Array to store driver data

 document.getElementById('submitButton').addEventListener('click', function(event) {

  event.preventDefault(); // Prevent form submission
  
  
  // Get form inputs
  var firstName = document.getElementById('firstName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();
  var dateOfBirth = document.querySelector('.form-datepicker').value;
  var mobileNumber = document.getElementById('mobileNumber').value.trim();
  var cardNumber = document.getElementById('cardName').value.trim();
  var country = document.getElementById('country').value.trim();
  var cityOfBirth = document.getElementById('cityOfBirth').value.trim();
  var town = document.getElementById('town').value.trim();


   
  
  // Perform validations
  var isValid = true;
  var firstNameError = document.querySelector('.firstName-error');
  var lastNameError = document.querySelector('.lastName-error');
  var mobileNumberError = document.querySelector('.mobileNumber-error');
  var cardNameError = document.querySelector('.cardName-error');
  var datepickerError = document.querySelector('.datepicker-error');
  var countryError = document.querySelector('.country-error');
  var CityofBirthError = document.querySelector('.cityOfBirth-error');
  var townError = document.querySelector('.town-error');

  // Reset error messages
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  mobileNumberError.textContent = "";
  cardNameError.textContent = "";
  datepickerError.textContent = "";
  CityofBirthError.textContent =""
  countryError.textContent =""
  townError.textContent =" "
  if (!cityOfBirth) {
    CityofBirthError.textContent = "Please select city of birth";
    isValid = false;
  }

  if (!town) {
    townError.textContent = "Please select town";
    isValid = false;
  }
 
  if (!firstName) {
    firstNameError.textContent = "First Name is required";
    isValid = false;
  }

  if (!lastName) {
    lastNameError.textContent = "Last Name is required";
    isValid = false;
  }

  if (!mobileNumber) {
    mobileNumberError.textContent = "Mobile Number is required";
    isValid = false;
  } else if (mobileNumber.length !== 10) {
    mobileNumberError.textContent = "Mobile Number should be 10 digits";
    isValid = false;
  }

  if (!country) {
    countryError.textContent = "Please select country";
    isValid = false;
  }
  if (!cardNumber) {
    cardNameError.textContent = "Name of the Card is required";
    isValid = false;
  }
  var currentDate = new Date();
  var selectedDate = new Date(dateOfBirth);
  var ageDiff = currentDate - selectedDate;
  var ageDate = new Date(ageDiff);
  var age = Math.abs(ageDate.getUTCFullYear() - 1970);
  console.log(dateOfBirth)
  if(!dateOfBirth){
    datepickerError.textContent = "Please select date of birth";
    isValid = false;
  }

  if (age < 18) {
    
    datepickerError.textContent = "The driver should be at least 18 years old.";
    isValid = false;
  }

  if (isValid) {
    // Create driver object
    var driver = {
      STATUS: "Pending",
      "MOXEY ID": "123456",
      TRANSPORTER: "Trans1",
      "DRIVER NAME(EN)": firstName,
      "DRIVER NAME(AR)": "جون سميث",
      "EXTERNAL CUSTOMER ID": "987654321",
      "MOBILE NUMBER": mobileNumber,
      "CARD NUMBER": cardNumber
    };

    
    drivers.push(driver);
    document.getElementById('driverForm').reset();
    var inProcessCountElement = document.getElementById('inProcessCount');
    var inProcessCount = parseInt(inProcessCountElement.textContent);
    inProcessCount++;
    inProcessCountElement.textContent = inProcessCount;
  
    var totalCount = drivers.length;
    document.getElementById('totalCount').textContent = totalCount;

    displayDrivers();

    var addDriverModal = new bootstrap.Modal(document.getElementById('addDriverModal'));
    addDriverModal.hide();
    // Close the modal
    
  }
});



var currentPage = 1;
var rowsPerPage = 10;

function displayDrivers(page) {
  var startIndex = (page - 1) * rowsPerPage;
  var endIndex = startIndex + rowsPerPage;
  var driversToDisplay = drivers.slice(startIndex, endIndex);

  var tableBody = document.getElementById('driverTableBody');
  tableBody.innerHTML = '';

  for (var i = 0; i < driversToDisplay.length; i++) {
    var driver = driversToDisplay[i];
    var row = document.createElement('tr');

    // ... code to create table cells
    var statusCell = document.createElement('td');
    statusCell.textContent = driver.STATUS;
    row.appendChild(statusCell);

    var moxeyIdCell = document.createElement('td');
    moxeyIdCell.textContent = driver['MOXEY ID'];
    row.appendChild(moxeyIdCell);

    var transporterCell = document.createElement('td');
    transporterCell.textContent = driver.TRANSPORTER;
    row.appendChild(transporterCell);

    var driverNameEnCell = document.createElement('td');
    driverNameEnCell.textContent = driver['DRIVER NAME(EN)'];
    row.appendChild(driverNameEnCell);

    var driverNameArCell = document.createElement('td');
    driverNameArCell.textContent = driver['DRIVER NAME(AR)'];
    row.appendChild(driverNameArCell);

    var externalCustomerIdCell = document.createElement('td');
    externalCustomerIdCell.textContent = driver['EXTERNAL CUSTOMER ID'];
    row.appendChild(externalCustomerIdCell);

    var mobileNumberCell = document.createElement('td');
    mobileNumberCell.textContent = driver['MOBILE NUMBER'];
    row.appendChild(mobileNumberCell);

    var cardNumberCell = document.createElement('td');
    var lastDigits = driver['CARD NUMBER'].slice(-4); 
    var hiddenDigits = '*'.repeat(driver['CARD NUMBER'].length - 4); 
    var  cardNumberText = hiddenDigits + lastDigits; 
    cardNumberCell.textContent = cardNumberText;
    row.appendChild(cardNumberCell);

    (function(driver, cardNumberCell) {
      var actionCell = document.createElement('td');
      var icon = document.createElement('i');
      icon.classList.add('fa-regular', 'fa-eye');
      actionCell.addEventListener('click', function() {
        toggleCardNumber(icon, cardNumberCell, driver['CARD NUMBER']);
      });
      actionCell.appendChild(icon);
      row.appendChild(actionCell);
    })(driver, cardNumberCell);

   
   



    tableBody.appendChild(row);
  }

  // Update count of current page records
  var currentPageCount = driversToDisplay.length;
  document.getElementById('currentPageCount').textContent = currentPageCount;
}

function updatePagination() {
  var prevButton = document.getElementById('prevButton');
  var nextButton = document.getElementById('nextButton');

  if (currentPage === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentPage === Math.ceil(drivers.length / rowsPerPage)) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }

  // Update count of all records
  var totalCount = drivers.length;
  document.getElementById('totalCount').textContent = totalCount;
}

function handlePrevClick() {
  if (currentPage > 1) {
    currentPage--;
    displayDrivers(currentPage);
    updatePagination();
  }
}

function handleNextClick() {
  if (currentPage < Math.ceil(drivers.length / rowsPerPage)) {
    currentPage++;
    displayDrivers(currentPage);
    updatePagination();
  }
}

document.getElementById('prevButton').addEventListener('click', handlePrevClick);
document.getElementById('nextButton').addEventListener('click', handleNextClick);

displayDrivers(currentPage);
updatePagination();


function toggleCardNumber(icon, cardNumberCell, fullCardNumber) {
  if ((cardNumberCell.textContent).includes('*')) {
    console.log("if")
    cardNumberCell.textContent = fullCardNumber; // Show the full card number
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    console.log("else")
    var lastDigits = cardNumberCell.textContent.slice(-4); 
    var hiddenDigits = '*'.repeat(cardNumberCell.textContent.length - 4); 
    var  cardNumberText = hiddenDigits + lastDigits; 
    cardNumberCell.textContent = cardNumberText; // Hide the full card number
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}








// JSON data with countries and cities
const countryData = {
  "United Arab Emirates": [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Al Ain",
    "Ajman",
    "Ras Al Khaimah",
    "Fujairah",
    "Umm Al Quwain",
    "Khor Fakkan",
    "Dibba Al-Fujairah",
    "Dibba Al-Hisn",
    "Hatta",
    "Al Madam",
    "Kalba",
    "Madinat Zayed",
    "Liwa Oasis",
    "Mussafah",
    "Ghayathi",
    "Al Dhaid",
    "Al Ruwais"
  ],
  "Saudi Arabia": [
    "Riyadh",
    "Jeddah",
    "Mecca",
    "Medina",
    "Dammam",
    "Tabuk",
    "Buraidah",
    "Khamis Mushait",
    "Al Hufuf",
    "Ta'if",
    "Al Jubail",
    "Abha",
    "Najran",
    "Yanbu",
    "Al Khobar",
    "Ha'il",
    "Jubail Industrial City",
    "Hafar Al-Batin",
    "Al Mubarraz",
    "Al Kharj"
  ],
  "Egypt": [
    "Cairo",
    "Alexandria",
    "Giza",
    "Shubra El Kheima",
    "Port Said",
    "Suez",
    "Luxor",
    "El-Mahalla El-Kubra",
    "Tanta",
    "Asyut",
    "Ismailia",
    "Fayyum",
    "Zagazig",
    "Aswan",
    "Damietta",
    "Damanhur",
    "Minya",
    "Beni Suef",
    "Hurghada",
    "Qena"
  ]
}


// Function to populate the town select field based on the selected country
function populateTowns() {
  console.log("populate ")
  const countrySelect = document.getElementById("country");
  const townSelect = document.getElementById("town");
  const selectedCountry = countrySelect.value;

  // Clear the town select field
  townSelect.innerHTML = "<option value=''>Select Town</option>";

  // If a country is selected, retrieve the cities and populate the town select field
  if (selectedCountry) {
    const cities = countryData[selectedCountry];
    if (cities) {
      for (let i = 0; i < cities.length; i++) {
        const option = document.createElement("option");
        option.value = cities[i];
        option.text = cities[i];
        townSelect.appendChild(option);
      }
    }
  }
}

// Attach the populateTowns function to the change event of the country select field
document.getElementById("country").addEventListener("change", populateTowns);
