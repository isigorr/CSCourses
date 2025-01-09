# CSCourses

Description
CSCourses is a frontend part of a website designed to sell courses that help users improve their skills in Counter-Strike. The site features smooth scrolling animations, engaging content, and an intuitive design to enhance user experience.

Features
Smooth scrolling animation for seamless navigation on the main page.
Scrolling animations to enhance user engagement and interactivity.
Four main pages:
    index.html: The main page showcasing the website with animations.
    base.html, semi-pro.html, pro.html: Course pages providing details about the respective Counter-Strike training courses, each with a button to purchase.
    purchase.html: Purchase page to complete transactions. (Not ready yet)
Custom design created in Figma.

Installation
1. Clone the repository:
    git clone https://github.com/isigorr/CSCourses
3. Navigate to the project folder:
    cd cscourses
5. Open index.html in your browser or serve the files using a simple web server (e.g., Live Server extension for VS Code).

Usage
Open the index.html file to access the main page. Use smooth scrolling to explore the page's sections.
Navigate to the base.html, semi-pro.html, or pro.html pages to view details about the respective courses. Each course page includes:
Detailed course description.
A purchase button that directs users to the purchase.html(Not ready yet) page.
The purchase.html page facilitates purchasing courses(Not ready yet).

Technologies Used
HTML: Structure and content of the pages.
CSS: Styling, animations, and responsive design using the following stylesheets:
style.css: Used for index.html and purchase.html.
stylecourses.css: Used for course pages.
adaptive.css: Ensures responsive design across devices.
JavaScript: Interactivity and animations using the GSAP.js library.

Folder structure
cscourses/
│
├── index.html          # Main page
├── base.html           # Base course page
├── semi-pro.html       # Advanced course page
├── pro.html            # Pro course page
├── purchase.html       # Purchase page
├── css/
│   ├── style.css       # Main stylesheet for index and purchase pages
│   ├── stylecourses.css # Stylesheet for course pages
│   └── adaptive.css    # Stylesheet for responsive design
├── js/
│   ├── script.js       # JavaScript file for animations and interactivity on the main page
│   └── purchase.js     # JavaScript file for animations and interactivity on the purchase page
├── img/                # Images for the website
├── libs/
│   └──gsap/
│       ├── gsap.min.js             # GSAP library
│       ├── ScrollSmoother.min.js   # GSAP library
│       └── ScrollTrigger.min.js    # GSAP library
└── README.md           # Project documentation

Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
    git checkout -b feature-name
3. Make your changes and commit them:
    git commit -m "Add some feature"
4. Push the changes to your fork:
    git push origin feature-name
5. Open a pull request.

License
This project has no license.
