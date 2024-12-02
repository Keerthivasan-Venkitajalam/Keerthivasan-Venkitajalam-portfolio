// Project List
var projects = document.querySelector(".project_list");

var project_data = [
  {
    name: "XOS File Management and Retrieval",
    repository: "https://lnkd.in/gC24v6ur",
    description: "Demonstrated file management concepts like block allocation, FAT indexing, and efficient storage mechanisms.",
    year: 2023,
    tech_stack: "C, File Systems"
  },
  {
    name: "Maintenance Needs and Traffic Anomalies in Network Devices Using Machine Learning",
    repository: "https://lnkd.in/gcirVzbt",
    description: "Designed machine learning solutions for predictive maintenance in network devices, reducing downtime.",
    year: 2022,
    tech_stack: "Python, Scikit-Learn, IoT"
  },
  {
    name: "Deadlock and Cycle Detection",
    repository: "https://lnkd.in/gCnksMJc",
    description: "Implemented four algorithms to detect deadlocks in resource allocation graphs.",
    year: 2021,
    tech_stack: "C, Algorithms"
  },
  {
    name: "Remote Sensing and Machine Learning",
    repository: "https://lnkd.in/gTxDwQbr",
    description: "Integrated remote sensing and image processing techniques with machine learning for disaster prediction.",
    year: 2024,
    tech_stack: "Python, Remote Sensing, Machine Learning"
  },
  {
    name: "AI Algorithms for Personalized Medicine Based on Genomic Data",
    repository: "https://lnkd.in/gZjzjZAz",
    description: "Developed AI models for analyzing genomic and clinical data to predict individual treatment responses.",
    year: 2023,
    tech_stack: "Python, AI, Genomics"
  },
  {
    name: "ILS on TSP and Machine Learning Integration",
    repository: "https://lnkd.in/grJUV7CJ",
    description: "Implemented Iterated Local Search (ILS) for the Traveling Salesman Problem with sequential and parallel execution.",
    year: 2022,
    tech_stack: "Python, Machine Learning, Optimization"
  },
  {
    name: "Remotif.ai",
    repository: "https://github.com/remotifai",
    description: "IoT-based remote health monitoring system integrating sensors for vital sign tracking.",
    year: 2023,
    tech_stack: "IoT, Python, Healthcare"
  },
  {
    name: "Skin Cancer Detection Using AI",
    repository: "https://github.com/skin-cancer-ai",
    description: "Leveraged machine learning techniques for early and accurate detection of skin cancer.",
    year: 2023,
    tech_stack: "Python, Deep Learning, Computer Vision"
  },
  {
    name: "Evolumin Healthcare Monitoring System",
    repository: "https://github.com/evolumin-healthcare",
    description: "Advanced monitoring system using IoT and AI to improve patient health outcomes.",
    year: 2024,
    tech_stack: "IoT, AI, Healthcare"
  },
  {
    name: "Fake News Prediction",
    repository: "https://lnkd.in/gHAGc3jv",
    description: "Built a machine learning model using RandomForestClassifier to detect fake news.",
    year: 2022,
    tech_stack: "Python, Machine Learning"
  },
  {
    name: "Graphs and Neural Networks",
    repository: "https://lnkd.in/gxsH5Hyi",
    description: "Explored applications of neural networks in graph-based data for enhanced predictions.",
    year: 2023,
    tech_stack: "Python, Neural Networks, Graph Theory"
  },
  {
    name: "Prediction of Used Car Prices",
    repository: "https://lnkd.in/gs9KbFbu",
    description: "Developed a regression model to predict car prices using features like mileage, brand, and age.",
    year: 2022,
    tech_stack: "Python, Machine Learning, Regression"
  },
  {
    name: "Stock Portfolio Management Design",
    repository: "https://lnkd.in/gbH5u67E",
    description: "Designed a website to manage stock portfolios, emphasizing user-friendly interfaces.",
    year: 2021,
    tech_stack: "HTML, CSS, JavaScript"
  },
  {
    name: "MP3 Player in Java",
    repository: "https://lnkd.in/gAnxYtP4",
    description: "Created a Java-based MP3 player with features like play, pause, and track selection.",
    year: 2021,
    tech_stack: "Java, Audio Processing"
  },
  {
    name: "Image Processing in MIPS",
    repository: "https://lnkd.in/gbApXppq",
    description: "Implemented image processing algorithms using MIPS assembly language for optimized performance.",
    year: 2020,
    tech_stack: "MIPS, Assembly, Image Processing"
  },
  {
    name: "Diabetes Prediction",
    repository: "https://github.com/diabetes-prediction",
    description: "Developed a predictive model for diabetes onset based on health factors.",
    year: 2021,
    tech_stack: "Python, Machine Learning, Healthcare"
  },
  {
    name: "GDSC Solutions Challenge 2023: Air Flight Dynamics",
    repository: "https://lnkd.in/g7JRxASG",
    description: "Minimized air flight emissions and optimized fuel efficiency through trajectory management.",
    year: 2023,
    tech_stack: "Python, AI, Aerospace"
  },
  {
    name: "Facial Recognition Using PCA-SVD",
    repository: "https://lnkd.in/gxsH5Hyi",
    description: "Implemented a facial recognition system using Principal Component Analysis and Singular Value Decomposition.",
    year: 2022,
    tech_stack: "Python, Machine Learning, Computer Vision"
  },
  {
    name: "Serial Binary Adder Using SR Flip Flop",
    repository: "https://lnkd.in/g7WB7ZVP",
    description: "Designed a binary adder for efficient computations in digital circuits.",
    year: 2022,
    tech_stack: "Digital Logic, Hardware"
  },
  {
    name: "Matrix Operations Header File",
    repository: "https://lnkd.in/gHAGc3jv",
    description: "Created a header file in C for matrix operations, including addition, multiplication, and inversion.",
    year: 2022,
    tech_stack: "C, Algorithms"
  }
];

// Add projects to the page
project_data.forEach(function (project) {
  var projectElement = document.createElement("div");
  projectElement.classList.add("project");

  // Project Title
  var projectTitle = document.createElement("h2");
  projectTitle.textContent = project.name;
  projectTitle.classList.add("title");

  // Project Link
  var projectLink = document.createElement("a");
  projectLink.href = project.repository;
  projectLink.textContent = "View Repository";
  projectLink.setAttribute('target', '_blank'); // To open in new tab

  // Project Description
  var projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;

  // Year (Floating Element)
  var projectYear = document.createElement("div");
  projectYear.classList.add("year");
  projectYear.textContent = project.year;

  // Tech Stack (Floating Element)
  var projectTechStack = document.createElement("div");
  projectTechStack.classList.add("tech-stack");
  projectTechStack.textContent = project.tech_stack;

  // Append all elements to project
  projectElement.appendChild(projectTitle);
  projectElement.appendChild(projectLink);
  projectElement.appendChild(projectDescription);
  projectElement.appendChild(projectYear);
  projectElement.appendChild(projectTechStack);

  // Append project to the main project list
  projects.appendChild(projectElement);
});
