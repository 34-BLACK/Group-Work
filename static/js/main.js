// Initialize the Vue instance
new Vue({
  el: "#app",
  data: {
    // Carousel image is in a paused state
    carouselPaused: false,

    // Form data
    form: {
      name: "",
      phone: "",
      email: "",
      carType: "",
      message: "",
    },

    // Form error message
    errors: {
      name: "",
      phone: "",
      email: "",
      carType: "",
      message: "",
    },

    // Test drive reservation form data
    testDriveForm: {
      name: "",
      phone: "",
      date: "",
      time: "",
      remark: "",
    },

    // Error message on the test drive reservation form
    testDriveErrors: {
      name: "",
      phone: "",
      date: "",
      time: "",
    },

    // The currently selected vehicle
    selectedCar: {},

    // Current date (for the minimum value of the date selector)
    minDate: "",

    // Form submission status
    formSubmitted: false,

    // The submitted form data
    submittedFormData: {
      name: "",
      phone: "",
      email: "",
      carType: "",
      message: "",
    },

    // Error prompt
    showError: false,
    errorMessage: "",

    // Automobile information data
    carInfo: [
      {
        id: 1,
        name: "Mercedes-benz S-Class sedan",
        description:
          "The Mercedes-Benz S-Class is a paragon of luxury sedans, offering unparalleled comfort and a sense of luxury. The advanced driving assistance system and luxurious interior design make every drive a pleasure.",
        price: "Starting from ¥1,090,000",
        engine: "3.0L inline six-cylinder turbocharged engine",
        acceleration: "5.1 seconds",
        topSpeed: "250km/h",
        image: "static/images/car1.jpg",
      },
      {
        id: 2,
        name: "BMW X7 SUV",
        description:
          "The BMW X7 is a luxurious large SUV, featuring a spacious seven-seat layout and powerful off-road capabilities. The exquisite interior and advanced technical configuration bring you an outstanding driving experience.",
        price: "Starting from ¥1,180,000",
        engine: "3.0L inline six-cylinder twin-turbocharged engine",
        acceleration: "5.8 seconds",
        topSpeed: "245km/h",
        image: "static/images/car2.jpg",
      },
      {
        id: 3,
        name: "Porsche 911 Carrera",
        description:
          "The Porsche 911 is synonymous with performance sports cars, perfectly blending classic design with modern technology. Its outstanding handling performance and exciting driving experience make it the top choice for sports car enthusiasts.",
        price: "Starting from ¥1,380,000",
        engine: "3.0L twin-turbocharged horizontally opposed six-cylinder engine",
        acceleration: "3.7 seconds",
        topSpeed: "293km/h",
        image: "static/images/car3.jpg",
      },
      {
        id: 4,
        name: "Tesla Model S",
        description:
          "The Tesla Model S is a high-performance electric sedan with astonishing acceleration performance and advanced autonomous driving functions. The long driving range and zero-emission features make it a perfect combination of environmental protection and luxury.",
        price: "Starting from ¥899,900",
        engine: "Dual-motor all-wheel drive",
        acceleration: "3.2 seconds",
        topSpeed: "250km/h",
        image: "static/images/car4.jpg",
      },
      {
        id: 5,
        name: "Audi A8L",
        description:
          "The Audi A8L is a luxury executive sedan, equipped with the all-new MMI touch system and AI intelligent driving assistance system. The spacious rear seats and top-of-the-line audio system offer passengers an ultimate experience.",
        price: "Starting from ¥928,800",
        engine: "3.0L V6 turbocharged engine",
        acceleration: "5.7 seconds",
        topSpeed: "250km/h",
        image: "static/images/car5.jpg",
      },
      {
        id: 6,
        name: "Land Rover Range Rover",
        description:
          "The Land Rover Range Rover is the pinnacle of SUVs, combining luxury, comfort and off-road capability. The all-terrain feedback system and advanced air suspension system ensure that you have the best experience in any road conditions.",
        price: "Starting from ¥1,680,000",
        engine: "5.0L V8 supercharged engine",
        acceleration: "5.4 seconds",
        topSpeed: "225km/h",
        image: "static/images/car6.jpg",
      },
      {
        id: 7,
        name: "Xiaomi su7",
        description:
          "The Xiaomi SU7 is a high-performance electric sedan with astonishing acceleration performance and advanced autonomous driving functions. The long driving range and zero-emission features make it a perfect combination of environmental protection and luxury。",
        price: "Starting from ¥219,900",
        engine: "Dual-motor all-wheel drive",
        acceleration: "3.2 seconds",
        topSpeed: "250km/h",
        image: "static/images/car7.jpg",
      },
      {
        id: 8,
        name: "Cadillac CT5",
        description:
          "The Cadillac CT5 is a luxury sedan, featuring spacious rear seats and a top-of-the-line audio system to offer passengers an ultimate experience.",
        price: "Starting from ¥299,900",
        engine: "2.0L inline four-cylinder turbocharged engine",
        acceleration: "6.9 seconds",
        topSpeed: "240km/h",
        image: "static/images/car8.jpg",
      },
      {
        id: 9,
        name: "Accord",
        description:
          "The Accord is a luxury sedan, featuring spacious rear seats and a top-of-the-line audio system to offer passengers an ultimate experience.",
        price: "Starting from ¥299,900",
        engine: "2.0L inline four-cylinder turbocharged engine",
        acceleration: "6.9 seconds",
        topSpeed: "240km/h",
        image: "static/images/car9.jpg",
      },
    ],
  },
  methods: {
    // Pause the carousel image
    pauseCarousel() {
      this.carouselPaused = true;
      try {
        let carousel = document.getElementById("carCarousel");
        let bsCarousel = bootstrap.Carousel.getInstance(carousel);
        if (bsCarousel) {
          bsCarousel.pause();
        }
      } catch (error) {
        this.showErrorMessage("Carousel operation failed:" + error.message);
      }
    },

    // Restore the carousel image
    resumeCarousel() {
      this.carouselPaused = false;
      try {
        let carousel = document.getElementById("carCarousel");
        let bsCarousel = bootstrap.Carousel.getInstance(carousel);
        if (bsCarousel) {
          bsCarousel.cycle();
        }
      } catch (error) {
        this.showErrorMessage("Carousel operation failed:" + error.message);
      }
    },

    // Display error messages
    showErrorMessage(message) {
      this.errorMessage = message;
      this.showError = true;

      // The error prompt will be automatically closed after 5 seconds
      setTimeout(() => {
        this.closeError();
      }, 5000);
    },

    // Turn off the error prompt
    closeError() {
      this.showError = false;
      this.errorMessage = "";
    },

    // Scroll to the specified section
    scrollToSection(sectionId) {
      try {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        } else {
          this.showErrorMessage(`The element with ID ${sectionId} cannot be found`);
        }
      } catch (error) {
        this.showErrorMessage("Page scrolling failed:" + error.message);
      }
    },

    // Open the pop-up window for booking a test drive
    openTestDriveModal(car) {
      try {
        this.selectedCar = car;
        this.resetTestDriveForm();
        const testDriveModal = new bootstrap.Modal(
          document.getElementById("testDriveModal")
        );
        testDriveModal.show();
      } catch (error) {
        this.showErrorMessage("Failed to open the reservation test drive pop-up window: " + error.message);
      }
    },

    // Submit the form for booking a test drive
    submitTestDriveForm() {
      try {
        // Reset the error message
        this.resetTestDriveErrors();

        // Verify the name
        if (!this.testDriveForm.name.trim()) {
          this.testDriveErrors.name = "Please enter your name";
        } else if (this.testDriveForm.name.length < 2) {
          this.testDriveErrors.name = "The name should be at least two characters long";
        }

        // Verify the phone number
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (!this.testDriveForm.phone.trim()) {
          this.testDriveErrors.phone = "Please enter your telephone number";
        } else if (!phoneRegex.test(this.testDriveForm.phone)) {
          this.testDriveErrors.phone = "Please enter a valid mobile phone number";
        }

        // Verification date
        if (!this.testDriveForm.date) {
          this.testDriveErrors.date = "Please select the appointment date";
        } else {
          // Verify whether the date is within the allowable range
          const selectedDate = new Date(this.testDriveForm.date);
          const today = new Date();
          const maxDate = new Date();
          maxDate.setMonth(maxDate.getMonth() + 3); //Appointments can be made up to three months later

          if (selectedDate < today) {
            this.testDriveErrors.date = "Please select a date today or later";
          } else if (selectedDate > maxDate) {
            this.testDriveErrors.date = "Test drives can be reserved for up to three months";
          }
        }

        // Verification time
        if (!this.testDriveForm.time) {
          this.testDriveErrors.time = "Please select the appointment time";
        }

        // Check for any mistakes
        if (this.hasTestDriveErrors()) {
          return;
        }

        // Simulated network request
        this.simulateNetworkRequest(() => {
          // If there are no errors, close the test drive pop-up window and display the success pop-up window
          const testDriveModal = bootstrap.Modal.getInstance(
            document.getElementById("testDriveModal")
          );
          if (testDriveModal) {
            testDriveModal.hide();
          }

          // Display a successful pop-up window
          setTimeout(() => {
            const successModal = new bootstrap.Modal(
              document.getElementById("successModal")
            );
            successModal.show();
          }, 500);
        });
      } catch (error) {
        this.showErrorMessage("Failed to submit the reservation form for the test drive: " + error.message);
      }
    },

    // Simulated network request
    simulateNetworkRequest(callback) {
      // Simulated network delay
      setTimeout(() => {
        // The simulation success rate is 90%
        if (Math.random() > 0.1) {
          callback();
        } else {
          this.showErrorMessage("The network request failed. Please try again later");
        }
      }, 1000);
    },

    // Reset the test drive reservation form
    resetTestDriveForm() {
      try {
        // Set the minimum date to today
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        this.minDate = `${year}-${month}-${day}`;

        // Reset the form data
        this.testDriveForm = {
          name: "",
          phone: "",
          date: this.minDate,
          time: "",
          remark: "",
        };

        // Reset the error message
        this.resetTestDriveErrors();
      } catch (error) {
        this.showErrorMessage("Failed to reset the form:" + error.message);
      }
    },

    // Reset the error message for booking a test drive
    resetTestDriveErrors() {
      this.testDriveErrors = {
        name: "",
        phone: "",
        date: "",
        time: "",
      };
    },

    // Check if there are any errors in the test drive reservation
    hasTestDriveErrors() {
      return Object.values(this.testDriveErrors).some((error) => error !== "");
    },

    //Form validation and submission
    submitForm() {
      try {
        // Reset the error message
        this.resetErrors();

        // Verify the name
        if (!this.form.name.trim()) {
          this.errors.name = "Please enter your name";
        } else if (this.form.name.length < 2) {
          this.errors.name = "The name should be at least two characters long";
        }

        //Verification phone number
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (!this.form.phone.trim()) {
          this.errors.phone = "Please enter your telephone number";
        } else if (!phoneRegex.test(this.form.phone)) {
          this.errors.phone = "Please enter a valid mobile phone number";
        }

        //Verify the mailbox
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.form.email.trim()) {
          this.errors.email = "Please enter your email address";
        } else if (!emailRegex.test(this.form.email)) {
          this.errors.email = "Please enter a valid email address";
        }

        // Verify the vehicle model
        if (!this.form.carType) {
          this.errors.carType = "Please select the vehicle model that interests you";
        }

        // Check for any mistakes
        if (this.hasErrors()) {
          // Scroll to the first error field
          this.scrollToFirstError();
          return;
        }

        // Simulated network request
        this.simulateNetworkRequest(() => {
          // Save the submitted form data
          this.submittedFormData = {
            name: this.form.name,
            phone: this.form.phone,
            email: this.form.email,
            carType: this.form.carType,
            message: this.form.message,
          };

          // Set the submitted status of the form
          this.formSubmitted = true;

          // Display the success message
          alert("The form submission was successful! We will contact you as soon as possible.");
        });
      } catch (error) {
        this.showErrorMessage("Failed to submit the form " + error.message);
      }
    },

    // Reset the error message
    resetErrors() {
      this.errors = {
        name: "",
        phone: "",
        email: "",
        carType: "",
        message: "",
      };
    },

    // Reset the form
    resetForm() {
      // Retain the submitted data but clear the current form
      this.form = {
        name: "",
        phone: "",
        email: "",
        carType: "",
        message: "",
      };
    },

    // Check for any mistakes
    hasErrors() {
      return Object.values(this.errors).some((error) => error !== "");
    },

    // Scroll to the first error field
    scrollToFirstError() {
      try {
        const firstErrorField = document.querySelector(".is-invalid");
        if (firstErrorField) {
          firstErrorField.focus();
          firstErrorField.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      } catch (error) {
        this.showErrorMessage("Failed to scroll to the error field: " + error.message);
      }
    },

    // Try to restore the form state from localStorage
    tryRestoreFormState() {
      try {
        const formSubmitted = localStorage.getItem("formSubmitted");
        if (formSubmitted === "true") {
          const savedData = localStorage.getItem("submittedFormData");
          if (savedData) {
            this.submittedFormData = JSON.parse(savedData);
            this.formSubmitted = true;
          }
        }
      } catch (error) {
        console.error("Failed to restore the form status:", error);
      }
    },
  },
  // Initialize the Bootstrap plugin after the component is mounted
  mounted() {
    try {
      // Set the minimum date to today
      const today = new Date();
      const year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();

      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;

      this.minDate = `${year}-${month}-${day}`;

      // Initialize the carousel image
      const carouselElement = document.getElementById("carCarousel");
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 5000,
          keyboard: true,
        });
      }

      // Initialize the accordion
      const accordionElement = document.getElementById("carAccordion");
      if (accordionElement) {
        const accordionItems =
          accordionElement.querySelectorAll(".accordion-button");
        accordionItems.forEach((item) => {
          item.addEventListener("click", function () {
            const isExpanded = this.getAttribute("aria-expanded") === "true";
            if (!isExpanded) {
              this.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          });
        });
      }

      // Smooth scroll navigation links
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          this.scrollToSection(targetId);
        });
      });

      // Try to restore the form state from localStorage
      this.tryRestoreFormState();
    } catch (error) {
      this.showErrorMessage("Initialization failure:" + error.message);
    }
  },
  // Save the form state before the component is destroyed
  beforeDestroy() {
    try {
      // If the form has been submitted, save the form status to localStorage
      if (this.formSubmitted) {
        localStorage.setItem(
          "submittedFormData",
          JSON.stringify(this.submittedFormData)
        );
        localStorage.setItem("formSubmitted", "true");
      }
    } catch (error) {
      console.error("Failed to save the form status:", error);
    }
  },
});
