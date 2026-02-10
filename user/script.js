// Constants
const CELL_TYPES = {
    EMPTY: 0,
    OBSTACLE: 1,
    SHIP: 2,
    PORT: 3,
    FIXED_PATH: 4
};

// MongoDB Configuration
const MONGODB_URI = "mongodb+srv://agam16042006_db_user:agamsingh@cluster0.axzokiy.mongodb.net/?appName=Cluster0";

// Room Database with Faculty/Staff Information
const ROOM_DATABASE = [
    {
        roomName: "C LAB",
        roomCode: "CLAB",
        faculty: [],
        type: "Laboratory",
        coordinates: null
    },
    {
        roomName: "CM Markan Office",
        roomCode: "CM_OFFICE",
        faculty: [
            { name: "Prof. C.M. Markan", designation: "Professor", department: "Computer Science", specialization: "" }
        ],
        type: "Faculty Office",
        coordinates: null
    },
    {
        roomName: "LR 1",
        roomCode: "LR1",
        faculty: [],
        type: "Lecture Room",
        coordinates: null
    },
    {
        roomName: "Store Physics",
        roomCode: "STORE_PHY",
        faculty: [],
        type: "Store",
        coordinates: null
    },
    {
        roomName: "Printer Room",
        roomCode: "PRINTER",
        faculty: [],
        type: "Service",
        coordinates: null
    },
    {
        roomName: "IOT Staff Room",
        roomCode: "IOT_STAFF",
        faculty: [],
        type: "Staff Room",
        coordinates: null
    },
    {
        roomName: "Mechanics Lab",
        roomCode: "MECH_LAB",
        faculty: [],
        type: "Laboratory",
        coordinates: null
    },
    {
        roomName: "5G Lab",
        roomCode: "5G_LAB",
        faculty: [],
        type: "Laboratory",
        coordinates: null
    },
    {
        roomName: "IOT LAB",
        roomCode: "IOT_LAB",
        faculty: [],
        type: "Laboratory",
        coordinates: null
    },
    {
        roomName: "CS Staff Room",
        roomCode: "CS_STAFF",
        faculty: [
            { name: "Prof. Sandeep Paul", designation: "Professor", department: "Computer Science", specialization: "" },
            { name: "Dr. Lotika Singh", designation: "Assistant Professor", department: "Computer Science", specialization: "" }
        ],
        type: "Staff Room",
        coordinates: null
    },
    {
        roomName: "Prof. K. Soami Daya Office",
        roomCode: "DAYA_OFFICE",
        faculty: [
            { name: "Prof. K. Soami Daya", designation: "Professor", department: "Computer Science", specialization: "" }
        ],
        type: "Faculty Office",
        coordinates: null
    },
    {
        roomName: "Dr. Sonali Bhatnagar Office",
        roomCode: "SONALI_OFFICE",
        faculty: [
            { name: "Dr. Sonali Bhatnagar", designation: "Assistant Professor", department: "Computer Science", specialization: "" }
        ],
        type: "Faculty Office",
        coordinates: null
    },
    {
        roomName: "Dr. Prem Sewak Sudhish Office",
        roomCode: "PSS_OFFICE",
        faculty: [
            { name: "Dr. Prem Sewak Sudhish", designation: "Associate Professor", department: "Computer Science", specialization: "" },
            { name: "Dr. Aman Prasad", designation: "Assistant Professor", department: "Computer Science", specialization: "" }
        ],
        type: "Faculty Office",
        coordinates: null
    },
    {
        roomName: "PVS, SSN, GMS Office",
        roomCode: "PVS_SSN_GMS",
        faculty: [
            { name: "Prof. Preetvanti Singh", designation: "Professor", department: "Computer Science", specialization: "" },
            { name: "Prof. Gur Mauj Saran Srivastava", designation: "Professor", department: "Computer Science", specialization: "" },
            { name: "Dr. Sanjay Saini", designation: "Assistant Professor", department: "Computer Science", specialization: "" }
        ],
        type: "Faculty Office",
        coordinates: null
    },
    {
        roomName: "Examination Office",
        roomCode: "EXAM",
        faculty: [],
        type: "Office",
        coordinates: null
    },
    {
        roomName: "CS & Physics HOD Office",
        roomCode: "HOD_CS_PHY",
        faculty: [
            { name: "Prof. Sukhdev Roy", designation: "Professor & Head of the Department", department: "Computer Science & Physics", specialization: "" }
        ],
        type: "HOD Office",
        coordinates: null
    },
    {
        roomName: "Electronics LAB",
        roomCode: "ELEC_LAB",
        faculty: [],
        type: "Laboratory",
        coordinates: null
    },
    {
        roomName: "Digital LAB",
        roomCode: "DIGITAL_LAB",
        faculty: [
            { name: "Dr. Siroman Prakash", designation: "Assistant Professor", department: "Electronics", specialization: "" }
        ],
        type: "Laboratory",
        coordinates: null
    },
    {
        roomName: "Image Processing Lab",
        roomCode: "IMG_PROC",
        faculty: [
            { name: "Prof. C. Vasantha Lakshmi", designation: "Professor", department: "Computer Science", specialization: "Image Processing" }
        ],
        type: "Laboratory",
        coordinates: null
    }
];

// Extended Staff Directory - Additional Departments (FACULTY OF SCIENCE)
const STAFF_DIRECTORY = [
    // Department of Botany
    {
        roomName: "Botany Department",
        roomCode: "BOTANY_DEPT",
        faculty: [
            { name: "Dr. Santendra Kumar Soni", designation: "Associate Professor & Head", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "santendrasoni@yahoo.com" },
            { name: "Dr. Rajiv Ranjan", designation: "Associate Professor", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "rajivranjanbt@gmail.com" },
            { name: "Prof. Guru Prasad Satsangi", designation: "Emeritus-Professor", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "gurupsatsangi@gmail.com" },
            { name: "Dr. Sharmita Gupta", designation: "Assistant Professor", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "drsharmitagupta@yahoo.com" },
            { name: "Dr. Prem Saran Tirumalai", designation: "Assistant Professor", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "premtsaran@dei.ac.in" },
            { name: "Dr. Akhilesh Kumar", designation: "Assistant Professor", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "akhilpbh@rediffmail.com" },
            { name: "Dr. Akbar Ali", designation: "Assistant Professor", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "akbarali@dei.ac.in" },
            { name: "Dr. Sanjay Yadav", designation: "Assistant Professor", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "sanjayyadav@dei.ac.in" },
            { name: "Dr. Anuradha Patel", designation: "Assistant Professor", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "anuradhapatelau@gmail.com" },
            { name: "Dr. Vijay Kumar Dalal", designation: "Assistant Professor", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "dalalvijay@dei.ac.in" },
            { name: "Dr. Preksha Shrivastav", designation: "Guest Faculty", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "prekshashrivastav@dei.ac.in" },
            { name: "Dr. Rachana Shrivastav", designation: "Guest Faculty", department: "Botany", specialization: "", phone: "(0562) 280 1545", email: "rachna.ga@gmail.com" }
        ],
        type: "Department Office",
        coordinates: null
    },
    // Department of Chemistry
    {
        roomName: "Chemistry Department",
        roomCode: "CHEMISTRY_DEPT",
        faculty: [
            { name: "Prof. Rohit Shrivastav", designation: "Professor & Head", department: "Chemistry", specialization: "", phone: "(0562) 280 1545", email: "rohitshrivastav_dei@yahoo.co.in" },
            { name: "Prof. S P Satsangee", designation: "Professor", department: "Chemistry", specialization: "", phone: "(0562) 280 1545", email: "incharge.usic@dei.ac.in" },
            { name: "Dr. Anita Lakhani", designation: "Professor", department: "Chemistry", specialization: "", phone: "(0562) 280 1545", email: "anitasaran2003@yahoo.co.in" },
            { name: "Dr. Radhika Singh", designation: "Professor", department: "Chemistry", specialization: "", phone: "(0562) 280 1545", email: "radhikasingh@dei.ac.in" },
            { name: "Dr. Pushpa Sahni", designation: "Assistant Professor", department: "Chemistry", specialization: "", phone: "(0562) 280 1545", email: "deipushpasahni@gmail.com" },
            { name: "Dr. Sudheer Kumar Verma", designation: "Assistant Professor", department: "Chemistry", specialization: "", phone: "(0562) 280 1545", email: "sudhirverma101@gmail.com" },
            { name: "Dr. Ranjit Kumar", designation: "Assistant Professor", department: "Chemistry", specialization: "", phone: "(0562) 280 1545", email: "rkschem@rediffmail.com" },
            { name: "Dr. Aparna Satsangi", designation: "Assistant Professor", department: "Chemistry", specialization: "", phone: "(0562) 280 1545", email: "srivastava_aparna@yahoo.com" },
            { name: "Dr. Manju Srivastava", designation: "Assistant Professor", department: "Chemistry", specialization: "", phone: "(0562) 280 1545", email: "rsmanjusrivastava@gmail.com" },
            { name: "Dr. Nazia Siddiqui", designation: "Assistant Professor", department: "Chemistry", specialization: "", phone: "(0562) 280 1545", email: "dr.naazsiddiqui@gmail.com" }
        ],
        type: "Department Office",
        coordinates: null
    },
    // Department of Mathematics
    {
        roomName: "Mathematics Department",
        roomCode: "MATH_DEPT",
        faculty: [
            { name: "Prof. Gunjan Agarwal", designation: "Professor & Head", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "" },
            { name: "Prof. Gursaran", designation: "Professor", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "gursaran.db@gmail.com" },
            { name: "Prof. Kamal Srivastava", designation: "Professor", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "kamal.sri@dei.ac.in" },
            { name: "Prof. Shambhu Sharma", designation: "Professor", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "shambhusharma@dei.ac.in" },
            { name: "Dr. Agam Prasad Tyagi", designation: "Associate Professor", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "tyagidei@gmail.com" },
            { name: "Dr. Richa Bansal", designation: "Assistant Professor", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "richabansal2007@gmail.com" },
            { name: "Dr. Antika Thapar", designation: "Assistant Professor", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "antikathapar@gmail.com" },
            { name: "Dr. Soumya Sinha", designation: "Assistant Professor", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "soumyasinha68@gmail.com" },
            { name: "Dr. Suchi Agarwal", designation: "Assistant Professor", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "" },
            { name: "Dr. Nivedita Sharma", designation: "Assistant Professor", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "" },
            { name: "Dr. Dharna Satsangi", designation: "Assistant Professor", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "" },
            { name: "Dr. Yogita Singh Kardam", designation: "Assistant Professor (Temporary)", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "" },
            { name: "Dr. Soami Pyari Sinha", designation: "Guest Faculty", department: "Mathematics", specialization: "", phone: "(0562) 280 1545", email: "" }
        ],
        type: "Department Office",
        coordinates: null
    },
    // Department of Physics & Computer Science
    {
        roomName: "Physics & Computer Science Department",
        roomCode: "PHY_CS_DEPT",
        faculty: [
            { name: "Prof. Sukhdev Roy", designation: "Professor & Head", department: "Computer Science & Physics", specialization: "", phone: "(0562) 280 1545", email: "sukhdevroy@dei.ac.in" },
            { name: "Prof. C.M. Markan", designation: "Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "cm.markan@dei.ac.in" },
            { name: "Prof. Preetvanti Singh", designation: "Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "" },
            { name: "Prof. C. Vasantha Lakshmi", designation: "Professor", department: "Computer Science", specialization: "Image Processing", phone: "(0562) 280 1545", email: "vasanthalakshmi@dei.ac.in" },
            { name: "Prof. Gur Mauj Saran Srivastava", designation: "Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "gurmaujsaran@gmail.com" },
            { name: "Prof. Sandeep Paul", designation: "Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "spaul.dei@gmail.com" },
            { name: "Prof. K. Soami Daya", designation: "Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "sdayak@gmail.com" },
            { name: "Dr. Ashok Jangid", designation: "Associate Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "" },
            { name: "Dr. Prem Sewak Sudhish", designation: "Associate Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "sudhish@dei.ac.in" },
            { name: "Dr. Sanjay Saini", designation: "Assistant Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "sanjay.s.saini@gmail.com" },
            { name: "Dr. Sonali Bhatnagar", designation: "Assistant Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "sonalibhatnagar@dei.ac.in" },
            { name: "Dr. Lotika Singh", designation: "Assistant Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "lotikasingh@dei.ac.in" },
            { name: "Mr. Satish Kumar", designation: "Assistant Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "bauzsatish@yahoo.co.in" },
            { name: "Dr. Siroman Prakash", designation: "Assistant Professor", department: "Electronics", specialization: "", phone: "(0562) 280 1545", email: "sprakash@dei.ac.in" },
            { name: "Dr. Dayal Pyari Srivastava", designation: "Assistant Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "dppinki@yahoo.co.in" },
            { name: "Dr. Aman Prasad", designation: "Assistant Professor", department: "Computer Science", specialization: "", phone: "(0562) 280 1545", email: "amanprasad2891@gmail.com" }
        ],
        type: "Department Office",
        coordinates: null
    },
    // Department of Zoology
    {
        roomName: "Zoology Department",
        roomCode: "ZOOLOGY_DEPT",
        faculty: [
            { name: "Prof. Sant Prakash", designation: "Professor & Head", department: "Zoology", specialization: "", phone: "(0562) 280 1545", email: "santprakashdr@dei.ac.in" },
            { name: "Prof. Alka Prakash", designation: "Professor", department: "Zoology", specialization: "", phone: "(0562) 280 1545", email: "alkaprakash.prakash@gmail.com" },
            { name: "Dr. Shabd Preet", designation: "Professor", department: "Zoology", specialization: "", phone: "(0562) 280 1545", email: "preetshabd@gmail.com" },
            { name: "Dr. Amla Chopra", designation: "Assistant Professor", department: "Zoology", specialization: "", phone: "(0562) 280 1545", email: "amla@dei.ac.in" },
            { name: "Dr. Lalit Mohan", designation: "Assistant Professor", department: "Zoology", specialization: "", phone: "(0562) 280 1545", email: "lalitmohan_dei@rediffmail.com" },
            { name: "Dr. Reshma Bhatnagar", designation: "Assistant Professor", department: "Zoology", specialization: "", phone: "(0562) 280 1545", email: "reshma.bhatnagar@gmail.com" },
            { name: "Dr. Priyanka Gautam", designation: "Assistant Professor", department: "Zoology", specialization: "", phone: "(0562) 280 1545", email: "drpriya18@gmail.com" },
            { name: "Dr. Arun Pratap Sikarwar", designation: "Assistant Professor", department: "Zoology", specialization: "", phone: "(0562) 280 1545", email: "arunsikarwar@dei.ac.in" },
            { name: "Ms. Shruti Sharma", designation: "Assistant Professor", department: "Zoology", specialization: "", phone: "(0562) 280 1545", email: "" },
            { name: "Dr. Nikita Sharma", designation: "Assistant Professor", department: "Zoology", specialization: "", phone: "(0562) 280 1545", email: "" }
        ],
        type: "Department Office",
        coordinates: null
    },
    // Dairy Technology
    {
        roomName: "Dairy Technology Department",
        roomCode: "DAIRY_TECH",
        faculty: [
            { name: "Dr. Mogla Achal Maharaj Kishore", designation: "Lecturer", department: "Dairy Technology", specialization: "B.Tech (DT), PGDBA (HR), PhD", phone: "", email: "" },
            { name: "Dr. Bopal Singh", designation: "Senior Lecturer", department: "Dairy Technology", specialization: "B.Tech (FT), M.Tech & PhD (DT)", phone: "", email: "" },
            { name: "Dr. Shuba Anand", designation: "Lecturer", department: "Dairy Technology", specialization: "B.Tech & M.Tech (BT), PhD (Botany)", phone: "", email: "" },
            { name: "Ms. Rashmi Rajput", designation: "Lecturer", department: "Dairy Technology", specialization: "B.Voc (FPP) & M.Voc (DT)", phone: "", email: "" },
            { name: "Mr. Neetesh Rathaur", designation: "Lecturer", department: "Dairy Technology", specialization: "B.Sc. & M.Voc (DT)", phone: "", email: "" },
            { name: "Mr. Ajay Kushwah", designation: "Guest Faculty", department: "Dairy Technology", specialization: "B.Voc (DT) & MBA", phone: "", email: "" },
            { name: "Mr. Vikas Verma", designation: "Guest Faculty", department: "Dairy Technology", specialization: "B.Voc & M.Voc (DT)", phone: "", email: "" },
            { name: "Ms. Prity Mehta", designation: "Guest Faculty", department: "Dairy Technology", specialization: "B.Voc & M.Voc (DT)", phone: "", email: "" }
        ],
        type: "Department Office",
        coordinates: null
    }
];

// Merge STAFF_DIRECTORY into ROOM_DATABASE
ROOM_DATABASE.push(...STAFF_DIRECTORY);

// DEFAULT SAVED DESTINATIONS - These will be loaded when localStorage is empty
// Export your local data using the "Export Data" button and paste the savedDestinations array here
const DEFAULT_SAVED_DESTINATIONS = [
    // Paste exported savedDestinations here for permanent deployment data
    // Example format:
    // {
    //     "name": "C LAB",
    //     "destinations": [{ "row": 100, "col": 200 }],
    //     "timestamp": "2026-02-11T00:00:00.000Z",
    //     "roomCode": "CLAB"
    // }
];

const WEATHER_CONFIG = {
    none: { impact: 0, name: "Calm Seas" },
    rain: { impact: 2, name: "Rainy" },
    storm: { impact: 5, name: "Stormy" }
};

const OBSTACLE_MAP = {
    [CELL_TYPES.OBSTACLE]: { type: "obstacle", cost: 5 }
};

// Priority Queue Implementation
class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift().element;
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    contains(element, comparator) {
        return this.elements.some(item => comparator(item.element, element));
    }
}

// Main App Class
class PathfindingApp {
    constructor() {
        this.canvas = document.getElementById("gridCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.backgroundImg = new Image();
        this.backgroundImg.src = "Screenshot_21-6-2025_10573_earth.google.com.jpeg";
        this.backgroundImg.onload = () => {
            this.drawGrid();
        };
        this.initProperties();
        this.populateDestinationSlide(); // Populate the initial destination selection slide
        // Create a Set for fast lookup of available coordinates
        this.availablePathSet = new Set(
            this.availablePathCoordinates.map(coord => `${coord.row},${coord.col}`)
        );
        this.setupEventListeners();
        this.initGrid();
        this.updateDestinationDropdown(); // Initialize the destination dropdown
        this.drawGrid(); // Draw grid immediately after initialization
    }

    initProperties() {
        this.canvas.width = 1481;
        this.canvas.height = 722;
        this.gridCols = 370;
        this.gridRows = 180;
        this.cellWidth = this.canvas.width / this.gridCols;
        this.cellHeight = this.canvas.height / this.gridRows;
        this.grid = [];
        this.sources = [{ row: 164, col: 109 }]; // Fixed starting point
        this.destinations = [];
        this.obstacles = [];
        this.fixedPathPoints = [];
        this.paths = [];
        this.isDarkMode = false;
        this.mode = "source";
        this.weatherEffect = "none";
        this.showReturnPath = false;
        this.returnPath = null;
        this.isReturnPathVisible = false;
        this.returnPathCost = 0;
        this.totalPathCost = 0;
        this.totalCostWithReturn = 0;
        this.allowDiagonal = true;
        this.selectedObstacleType = CELL_TYPES.OBSTACLE; // Single obstacle type
        this.multiSelectPoints = []; // Store points for polygon drawing
        this.isDrawingPolygon = false;
        this.constraintAreaPoints = []; // Store points for constraint area polygon
        this.isDrawingConstraintArea = false;
        this.constraintArea = null; // Store the constraint area polygon
        this.areObstaclesHidden = true;
        this.selectionStart = null;
        this.selectionEnd = null;
        this.selectionRect = null;
        this.savedDestinations = this.loadSavedDestinations(); // Load saved destinations from localStorage
        this.isBrushing = false; // Track if we're in brush mode
        this.lastBrushedCell = null; // Track last painted cell to avoid duplicates
        this.roomDatabase = ROOM_DATABASE; // Load room database
        this.mergeDestinationsWithRooms(); // Automatically match and merge data

        // Available path coordinates - only these cells can be traversed
        this.availablePathCoordinates = [{ "row": 59, "col": 225 }, { "row": 2, "col": 259 }, { "row": 3, "col": 259 }, { "row": 4, "col": 259, "": 1 }, { "row": 7, "col": 259 }, { "row": 9, "col": 259 }, { "row": 10, "col": 259 }, { "row": 11, "col": 259 }, { "row": 12, "col": 259 }, { "row": 13, "col": 259 }, { "row": 14, "col": 259 }, { "row": 14, "col": 260 }, { "row": 15, "col": 260 }, { "row": 16, "col": 260 }, { "row": 17, "col": 260 }, { "row": 18, "col": 260 }, { "row": 19, "col": 260 }, { "row": 20, "col": 260 }, { "row": 21, "col": 260 }, { "row": 22, "col": 260 }, { "row": 23, "col": 260 }, { "row": 24, "col": 260 }, { "row": 25, "col": 260 }, { "row": 26, "col": 260 }, { "row": 27, "col": 260 }, { "row": 28, "col": 260 }, { "row": 29, "col": 260 }, { "row": 30, "col": 260 }, { "row": 31, "col": 260 }, { "row": 33, "col": 260 }, { "row": 34, "col": 260 }, { "row": 35, "col": 260 }, { "row": 36, "col": 260 }, { "row": 37, "col": 260 }, { "row": 38, "col": 260 }, { "row": 39, "col": 260 }, { "row": 40, "col": 260 }, { "row": 41, "col": 260 }, { "row": 42, "col": 260 }, { "row": 43, "col": 260 }, { "row": 44, "col": 260 }, { "row": 45, "col": 260 }, { "row": 46, "col": 260 }, { "row": 47, "col": 260 }, { "row": 48, "col": 260 }, { "row": 49, "col": 260 }, { "row": 50, "col": 260 }, { "row": 50, "col": 261 }, { "row": 51, "col": 261 }, { "row": 52, "col": 261 }, { "row": 53, "col": 261 }, { "row": 54, "col": 261 }, { "row": 55, "col": 261 }, { "row": 56, "col": 261 }, { "row": 57, "col": 261 }, { "row": 33, "col": 259 }, { "row": 32, "col": 259 }, { "row": 31, "col": 259 }, { "row": 32, "col": 260 }, { "row": 8, "col": 259 }, { "row": 15, "col": 259 }, { "row": 16, "col": 259 }, { "row": 17, "col": 259 }, { "row": 5, "col": 259 }, { "row": 6, "col": 259 }, { "row": 3, "col": 188 }, { "row": 4, "col": 188 }, { "row": 5, "col": 188 }, { "row": 6, "col": 188 }, { "row": 7, "col": 188 }, { "row": 8, "col": 188 }, { "row": 9, "col": 188 }, { "row": 10, "col": 188 }, { "row": 11, "col": 188 }, { "row": 12, "col": 188 }, { "row": 13, "col": 188 }, { "row": 14, "col": 188 }, { "row": 15, "col": 188 }, { "row": 16, "col": 188 }, { "row": 17, "col": 188 }, { "row": 18, "col": 188 }, { "row": 19, "col": 188 }, { "row": 20, "col": 188 }, { "row": 21, "col": 188 }, { "row": 22, "col": 188 }, { "row": 23, "col": 188 }, { "row": 24, "col": 188 }, { "row": 25, "col": 188 }, { "row": 26, "col": 188 }, { "row": 27, "col": 188 }, { "row": 28, "col": 188 }, { "row": 29, "col": 188 }, { "row": 30, "col": 188 }, { "row": 31, "col": 188 }, { "row": 32, "col": 188 }, { "row": 33, "col": 188 }, { "row": 34, "col": 188 }, { "row": 35, "col": 188 }, { "row": 36, "col": 188 }, { "row": 37, "col": 188 }, { "row": 38, "col": 188 }, { "row": 39, "col": 188 }, { "row": 40, "col": 188 }, { "row": 41, "col": 188 }, { "row": 42, "col": 188 }, { "row": 43, "col": 188 }, { "row": 44, "col": 188 }, { "row": 45, "col": 188 }, { "row": 46, "col": 188 }, { "row": 47, "col": 188 }, { "row": 48, "col": 188 }, { "row": 49, "col": 188 }, { "row": 50, "col": 188 }, { "row": 51, "col": 188 }, { "row": 52, "col": 188 }, { "row": 53, "col": 188 }, { "row": 54, "col": 179 }, { "row": 54, "col": 180 }, { "row": 54, "col": 181 }, { "row": 54, "col": 182 }, { "row": 54, "col": 183 }, { "row": 54, "col": 184 }, { "row": 54, "col": 185 }, { "row": 54, "col": 186 }, { "row": 54, "col": 187 }, { "row": 54, "col": 188 }, { "row": 54, "col": 189 }, { "row": 54, "col": 190 }, { "row": 54, "col": 191 }, { "row": 54, "col": 192 }, { "row": 54, "col": 193 }, { "row": 54, "col": 194 }, { "row": 54, "col": 195 }, { "row": 54, "col": 196 }, { "row": 54, "col": 197 }, { "row": 54, "col": 200 }, { "row": 54, "col": 201 }, { "row": 54, "col": 202 }, { "row": 54, "col": 203 }, { "row": 54, "col": 204 }, { "row": 54, "col": 205 }, { "row": 54, "col": 206 }, { "row": 54, "col": 207 }, { "row": 54, "col": 208 }, { "row": 54, "col": 209 }, { "row": 54, "col": 210 }, { "row": 54, "col": 211 }, { "row": 54, "col": 212 }, { "row": 54, "col": 213 }, { "row": 54, "col": 214 }, { "row": 54, "col": 215 }, { "row": 54, "col": 216 }, { "row": 55, "col": 216 }, { "row": 56, "col": 216 }, { "row": 57, "col": 216 }, { "row": 58, "col": 216 }, { "row": 59, "col": 216 }, { "row": 59, "col": 217 }, { "row": 59, "col": 218 }, { "row": 59, "col": 219 }, { "row": 59, "col": 220 }, { "row": 59, "col": 221 }, { "row": 59, "col": 222 }, { "row": 59, "col": 223 }, { "row": 59, "col": 224 }, { "row": 59, "col": 226 }, { "row": 59, "col": 227 }, { "row": 58, "col": 227 }, { "row": 57, "col": 227 }, { "row": 56, "col": 227 }, { "row": 55, "col": 227 }, { "row": 54, "col": 227 }, { "row": 53, "col": 227 }, { "row": 52, "col": 227 }, { "row": 51, "col": 227 }, { "row": 50, "col": 227 }, { "row": 49, "col": 227 }, { "row": 48, "col": 227 }, { "row": 47, "col": 227 }, { "row": 46, "col": 227 }, { "row": 45, "col": 227 }, { "row": 44, "col": 227 }, { "row": 43, "col": 227 }, { "row": 42, "col": 227 }, { "row": 41, "col": 227 }, { "row": 40, "col": 227 }, { "row": 39, "col": 227 }, { "row": 38, "col": 227 }, { "row": 37, "col": 227 }, { "row": 36, "col": 227 }, { "row": 35, "col": 227 }, { "row": 34, "col": 227 }, { "row": 33, "col": 227 }, { "row": 32, "col": 227 }, { "row": 31, "col": 227 }, { "row": 30, "col": 227 }, { "row": 29, "col": 227 }, { "row": 28, "col": 227 }, { "row": 27, "col": 227 }, { "row": 26, "col": 227 }, { "row": 25, "col": 227 }, { "row": 24, "col": 227 }, { "row": 23, "col": 226 }, { "row": 22, "col": 226 }, { "row": 21, "col": 226 }, { "row": 20, "col": 226 }, { "row": 19, "col": 226 }, { "row": 18, "col": 226 }, { "row": 17, "col": 226 }, { "row": 16, "col": 226 }, { "row": 15, "col": 226 }, { "row": 15, "col": 225 }, { "row": 14, "col": 225 }, { "row": 13, "col": 225 }, { "row": 12, "col": 225 }, { "row": 12, "col": 224 }, { "row": 11, "col": 224 }, { "row": 10, "col": 224 }, { "row": 9, "col": 224 }, { "row": 8, "col": 224 }, { "row": 7, "col": 224 }, { "row": 6, "col": 224 }, { "row": 5, "col": 224 }, { "row": 4, "col": 224 }, { "row": 3, "col": 224 }, { "row": 2, "col": 224 }, { "row": 52, "col": 228 }, { "row": 52, "col": 229 }, { "row": 52, "col": 230 }, { "row": 52, "col": 231 }, { "row": 52, "col": 232 }, { "row": 52, "col": 233 }, { "row": 52, "col": 234 }, { "row": 52, "col": 235 }, { "row": 52, "col": 236 }, { "row": 52, "col": 237 }, { "row": 52, "col": 238 }, { "row": 52, "col": 239 }, { "row": 52, "col": 240 }, { "row": 52, "col": 241 }, { "row": 52, "col": 242 }, { "row": 52, "col": 243 }, { "row": 52, "col": 244 }, { "row": 52, "col": 245 }, { "row": 52, "col": 246 }, { "row": 52, "col": 247 }, { "row": 52, "col": 248 }, { "row": 52, "col": 249 }, { "row": 52, "col": 250 }, { "row": 52, "col": 251 }, { "row": 52, "col": 252 }, { "row": 52, "col": 253 }, { "row": 52, "col": 254 }, { "row": 52, "col": 255 }, { "row": 52, "col": 256 }, { "row": 52, "col": 257 }, { "row": 52, "col": 258 }, { "row": 52, "col": 259 }, { "row": 52, "col": 260 }, { "row": 51, "col": 244 }, { "row": 50, "col": 244 }, { "row": 49, "col": 244 }, { "row": 48, "col": 244 }, { "row": 47, "col": 244 }, { "row": 46, "col": 244 }, { "row": 45, "col": 244 }, { "row": 44, "col": 244 }, { "row": 43, "col": 244 }, { "row": 42, "col": 244 }, { "row": 41, "col": 244 }, { "row": 40, "col": 244 }, { "row": 55, "col": 179 }, { "row": 56, "col": 179 }, { "row": 57, "col": 179 }, { "row": 58, "col": 179 }, { "row": 59, "col": 179 }, { "row": 60, "col": 179 }, { "row": 61, "col": 179 }, { "row": 62, "col": 179 }, { "row": 63, "col": 179 }, { "row": 64, "col": 179 }, { "row": 65, "col": 179 }, { "row": 66, "col": 179 }, { "row": 67, "col": 179 }, { "row": 68, "col": 179 }, { "row": 69, "col": 179 }, { "row": 70, "col": 179 }, { "row": 71, "col": 179 }, { "row": 55, "col": 198 }, { "row": 56, "col": 198 }, { "row": 57, "col": 198 }, { "row": 58, "col": 198 }, { "row": 59, "col": 198 }, { "row": 60, "col": 198 }, { "row": 61, "col": 198 }, { "row": 62, "col": 198 }, { "row": 63, "col": 198 }, { "row": 64, "col": 198 }, { "row": 65, "col": 198 }, { "row": 66, "col": 198 }, { "row": 67, "col": 198 }, { "row": 68, "col": 198 }, { "row": 69, "col": 198 }, { "row": 70, "col": 198 }, { "row": 71, "col": 198 }, { "row": 60, "col": 221 }, { "row": 61, "col": 221 }, { "row": 62, "col": 221 }, { "row": 63, "col": 221 }, { "row": 64, "col": 221 }, { "row": 65, "col": 221 }, { "row": 66, "col": 221 }, { "row": 67, "col": 221 }, { "row": 69, "col": 221 }, { "row": 70, "col": 221 }, { "row": 71, "col": 221 }, { "row": 72, "col": 221 }, { "row": 68, "col": 221 }, { "row": 60, "col": 220 }, { "row": 61, "col": 220 }, { "row": 62, "col": 220 }, { "row": 63, "col": 220 }, { "row": 64, "col": 220 }, { "row": 65, "col": 220 }, { "row": 66, "col": 220 }, { "row": 67, "col": 220 }, { "row": 68, "col": 220 }, { "row": 69, "col": 220 }, { "row": 70, "col": 220 }, { "row": 71, "col": 220 }, { "row": 60, "col": 218 }, { "row": 61, "col": 218 }, { "row": 62, "col": 218 }, { "row": 63, "col": 218 }, { "row": 64, "col": 218 }, { "row": 65, "col": 218 }, { "row": 66, "col": 218 }, { "row": 67, "col": 218 }, { "row": 68, "col": 218 }, { "row": 69, "col": 218 }, { "row": 70, "col": 218 }, { "row": 71, "col": 218 }, { "row": 71, "col": 219 }, { "row": 70, "col": 219 }, { "row": 69, "col": 219 }, { "row": 68, "col": 219 }, { "row": 67, "col": 219 }, { "row": 60, "col": 219 }, { "row": 61, "col": 219 }, { "row": 63, "col": 219 }, { "row": 64, "col": 219 }, { "row": 65, "col": 219 }, { "row": 66, "col": 219 }, { "row": 62, "col": 219 }, { "row": 60, "col": 224 }, { "row": 61, "col": 224 }, { "row": 62, "col": 224 }, { "row": 63, "col": 224 }, { "row": 64, "col": 224 }, { "row": 65, "col": 224 }, { "row": 66, "col": 224 }, { "row": 67, "col": 224 }, { "row": 68, "col": 224 }, { "row": 69, "col": 224 }, { "row": 70, "col": 224 }, { "row": 70, "col": 223 }, { "row": 70, "col": 222 }, { "row": 69, "col": 223 }, { "row": 69, "col": 222 }, { "row": 68, "col": 222 }, { "row": 68, "col": 223 }, { "row": 67, "col": 223 }, { "row": 67, "col": 222 }, { "row": 66, "col": 222 }, { "row": 65, "col": 223 }, { "row": 71, "col": 163 }, { "row": 71, "col": 164 }, { "row": 71, "col": 165 }, { "row": 71, "col": 166 }, { "row": 71, "col": 167 }, { "row": 71, "col": 168 }, { "row": 71, "col": 169 }, { "row": 71, "col": 170 }, { "row": 71, "col": 171 }, { "row": 71, "col": 172 }, { "row": 71, "col": 173 }, { "row": 71, "col": 174 }, { "row": 71, "col": 175 }, { "row": 71, "col": 176 }, { "row": 71, "col": 177 }, { "row": 71, "col": 178 }, { "row": 71, "col": 180 }, { "row": 71, "col": 181 }, { "row": 71, "col": 182 }, { "row": 71, "col": 183 }, { "row": 71, "col": 184 }, { "row": 71, "col": 185 }, { "row": 71, "col": 186 }, { "row": 71, "col": 187 }, { "row": 71, "col": 188 }, { "row": 71, "col": 189 }, { "row": 71, "col": 190 }, { "row": 71, "col": 191 }, { "row": 71, "col": 192 }, { "row": 71, "col": 193 }, { "row": 71, "col": 194 }, { "row": 71, "col": 195 }, { "row": 71, "col": 196 }, { "row": 71, "col": 197 }, { "row": 71, "col": 199 }, { "row": 71, "col": 200 }, { "row": 71, "col": 201 }, { "row": 71, "col": 202 }, { "row": 71, "col": 203 }, { "row": 71, "col": 204 }, { "row": 71, "col": 205 }, { "row": 71, "col": 206 }, { "row": 71, "col": 207 }, { "row": 71, "col": 208 }, { "row": 71, "col": 209 }, { "row": 71, "col": 210 }, { "row": 71, "col": 211 }, { "row": 71, "col": 212 }, { "row": 71, "col": 213 }, { "row": 71, "col": 214 }, { "row": 71, "col": 215 }, { "row": 71, "col": 216 }, { "row": 71, "col": 217 }, { "row": 71, "col": 222 }, { "row": 71, "col": 223 }, { "row": 71, "col": 224 }, { "row": 71, "col": 225 }, { "row": 71, "col": 226 }, { "row": 71, "col": 227 }, { "row": 71, "col": 228 }, { "row": 71, "col": 229 }, { "row": 71, "col": 230 }, { "row": 71, "col": 231 }, { "row": 71, "col": 232 }, { "row": 71, "col": 233 }, { "row": 71, "col": 234 }, { "row": 71, "col": 235 }, { "row": 71, "col": 236 }, { "row": 71, "col": 237 }, { "row": 71, "col": 238 }, { "row": 71, "col": 239 }, { "row": 71, "col": 240 }, { "row": 71, "col": 241 }, { "row": 71, "col": 242 }, { "row": 71, "col": 243 }, { "row": 71, "col": 244 }, { "row": 71, "col": 245 }, { "row": 71, "col": 246 }, { "row": 71, "col": 247 }, { "row": 71, "col": 248 }, { "row": 71, "col": 249 }, { "row": 71, "col": 250 }, { "row": 71, "col": 251 }, { "row": 71, "col": 252 }, { "row": 71, "col": 253 }, { "row": 71, "col": 254 }, { "row": 71, "col": 255 }, { "row": 71, "col": 256 }, { "row": 71, "col": 257 }, { "row": 71, "col": 258 }, { "row": 71, "col": 259 }, { "row": 71, "col": 260 }, { "row": 71, "col": 261 }, { "row": 71, "col": 262 }, { "row": 71, "col": 263 }, { "row": 71, "col": 264 }, { "row": 71, "col": 265 }, { "row": 71, "col": 266 }, { "row": 71, "col": 267 }, { "row": 71, "col": 268 }, { "row": 71, "col": 269 }, { "row": 71, "col": 270 }, { "row": 72, "col": 163 }, { "row": 72, "col": 164 }, { "row": 72, "col": 165 }, { "row": 72, "col": 166 }, { "row": 72, "col": 167 }, { "row": 72, "col": 168 }, { "row": 72, "col": 169 }, { "row": 72, "col": 170 }, { "row": 72, "col": 171 }, { "row": 72, "col": 172 }, { "row": 72, "col": 173 }, { "row": 72, "col": 174 }, { "row": 72, "col": 175 }, { "row": 72, "col": 176 }, { "row": 72, "col": 177 }, { "row": 72, "col": 178 }, { "row": 72, "col": 179 }, { "row": 72, "col": 180 }, { "row": 72, "col": 181 }, { "row": 72, "col": 182 }, { "row": 72, "col": 183 }, { "row": 72, "col": 184 }, { "row": 72, "col": 185 }, { "row": 72, "col": 186 }, { "row": 72, "col": 187 }, { "row": 72, "col": 188 }, { "row": 72, "col": 189 }, { "row": 72, "col": 190 }, { "row": 72, "col": 191 }, { "row": 72, "col": 192 }, { "row": 72, "col": 193 }, { "row": 72, "col": 194 }, { "row": 72, "col": 195 }, { "row": 72, "col": 196 }, { "row": 72, "col": 197 }, { "row": 72, "col": 198 }, { "row": 72, "col": 199 }, { "row": 72, "col": 200 }, { "row": 72, "col": 201 }, { "row": 72, "col": 202 }, { "row": 72, "col": 203 }, { "row": 72, "col": 204 }, { "row": 72, "col": 205 }, { "row": 72, "col": 206 }, { "row": 72, "col": 207 }, { "row": 72, "col": 208 }, { "row": 72, "col": 209 }, { "row": 72, "col": 210 }, { "row": 72, "col": 211 }, { "row": 72, "col": 212 }, { "row": 72, "col": 213 }, { "row": 72, "col": 214 }, { "row": 72, "col": 215 }, { "row": 72, "col": 216 }, { "row": 72, "col": 217 }, { "row": 72, "col": 218 }, { "row": 72, "col": 219 }, { "row": 72, "col": 220 }, { "row": 72, "col": 222 }, { "row": 72, "col": 223 }, { "row": 72, "col": 224 }, { "row": 72, "col": 225 }, { "row": 72, "col": 226 }, { "row": 72, "col": 227 }, { "row": 72, "col": 228 }, { "row": 72, "col": 229 }, { "row": 72, "col": 230 }, { "row": 72, "col": 231 }, { "row": 72, "col": 232 }, { "row": 72, "col": 233 }, { "row": 72, "col": 234 }, { "row": 72, "col": 235 }, { "row": 72, "col": 236 }, { "row": 72, "col": 237 }, { "row": 72, "col": 238 }, { "row": 72, "col": 239 }, { "row": 72, "col": 240 }, { "row": 72, "col": 241 }, { "row": 72, "col": 242 }, { "row": 72, "col": 243 }, { "row": 72, "col": 244 }, { "row": 72, "col": 245 }, { "row": 72, "col": 246 }, { "row": 72, "col": 247 }, { "row": 72, "col": 248 }, { "row": 72, "col": 249 }, { "row": 72, "col": 250 }, { "row": 72, "col": 251 }, { "row": 72, "col": 252 }, { "row": 72, "col": 253 }, { "row": 72, "col": 254 }, { "row": 72, "col": 255 }, { "row": 72, "col": 256 }, { "row": 72, "col": 257 }, { "row": 72, "col": 258 }, { "row": 72, "col": 259 }, { "row": 72, "col": 260 }, { "row": 72, "col": 261 }, { "row": 72, "col": 262 }, { "row": 72, "col": 263 }, { "row": 72, "col": 264 }, { "row": 72, "col": 265 }, { "row": 72, "col": 266 }, { "row": 72, "col": 267 }, { "row": 72, "col": 268 }, { "row": 72, "col": 269 }, { "row": 72, "col": 270 }, { "row": 73, "col": 163 }, { "row": 73, "col": 164 }, { "row": 73, "col": 165 }, { "row": 73, "col": 166 }, { "row": 73, "col": 167 }, { "row": 73, "col": 168 }, { "row": 73, "col": 169 }, { "row": 73, "col": 170 }, { "row": 73, "col": 171 }, { "row": 73, "col": 172 }, { "row": 73, "col": 173 }, { "row": 73, "col": 174 }, { "row": 73, "col": 175 }, { "row": 73, "col": 176 }, { "row": 73, "col": 177 }, { "row": 73, "col": 178 }, { "row": 73, "col": 179 }, { "row": 73, "col": 180 }, { "row": 73, "col": 181 }, { "row": 73, "col": 182 }, { "row": 73, "col": 183 }, { "row": 73, "col": 184 }, { "row": 73, "col": 185 }, { "row": 73, "col": 186 }, { "row": 73, "col": 187 }, { "row": 73, "col": 188 }, { "row": 73, "col": 189 }, { "row": 73, "col": 190 }, { "row": 73, "col": 191 }, { "row": 73, "col": 192 }, { "row": 73, "col": 193 }, { "row": 73, "col": 194 }, { "row": 73, "col": 195 }, { "row": 73, "col": 196 }, { "row": 73, "col": 197 }, { "row": 73, "col": 198 }, { "row": 73, "col": 199 }, { "row": 73, "col": 200 }, { "row": 73, "col": 201 }, { "row": 73, "col": 202 }, { "row": 73, "col": 203 }, { "row": 73, "col": 204 }, { "row": 73, "col": 205 }, { "row": 73, "col": 206 }, { "row": 73, "col": 207 }, { "row": 73, "col": 208 }, { "row": 73, "col": 209 }, { "row": 73, "col": 210 }, { "row": 73, "col": 211 }, { "row": 73, "col": 212 }, { "row": 73, "col": 213 }, { "row": 73, "col": 214 }, { "row": 73, "col": 215 }, { "row": 73, "col": 216 }, { "row": 73, "col": 217 }, { "row": 73, "col": 218 }, { "row": 73, "col": 219 }, { "row": 73, "col": 220 }, { "row": 73, "col": 221 }, { "row": 73, "col": 222 }, { "row": 73, "col": 223 }, { "row": 73, "col": 224 }, { "row": 73, "col": 225 }, { "row": 73, "col": 226 }, { "row": 73, "col": 227 }, { "row": 73, "col": 228 }, { "row": 73, "col": 229 }, { "row": 73, "col": 230 }, { "row": 73, "col": 231 }, { "row": 73, "col": 232 }, { "row": 73, "col": 233 }, { "row": 73, "col": 234 }, { "row": 73, "col": 235 }, { "row": 73, "col": 236 }, { "row": 73, "col": 237 }, { "row": 73, "col": 238 }, { "row": 73, "col": 239 }, { "row": 73, "col": 240 }, { "row": 73, "col": 241 }, { "row": 73, "col": 242 }, { "row": 73, "col": 243 }, { "row": 73, "col": 244 }, { "row": 73, "col": 245 }, { "row": 73, "col": 246 }, { "row": 73, "col": 247 }, { "row": 73, "col": 248 }, { "row": 73, "col": 249 }, { "row": 73, "col": 250 }, { "row": 73, "col": 251 }, { "row": 73, "col": 252 }, { "row": 73, "col": 253 }, { "row": 73, "col": 254 }, { "row": 73, "col": 255 }, { "row": 73, "col": 256 }, { "row": 73, "col": 257 }, { "row": 73, "col": 258 }, { "row": 73, "col": 259 }, { "row": 73, "col": 260 }, { "row": 73, "col": 261 }, { "row": 73, "col": 262 }, { "row": 73, "col": 263 }, { "row": 73, "col": 264 }, { "row": 73, "col": 265 }, { "row": 73, "col": 266 }, { "row": 73, "col": 267 }, { "row": 73, "col": 268 }, { "row": 73, "col": 269 }, { "row": 73, "col": 270 }, { "row": 74, "col": 163 }, { "row": 74, "col": 164 }, { "row": 74, "col": 165 }, { "row": 74, "col": 166 }, { "row": 74, "col": 167 }, { "row": 74, "col": 168 }, { "row": 74, "col": 169 }, { "row": 74, "col": 170 }, { "row": 74, "col": 171 }, { "row": 74, "col": 172 }, { "row": 74, "col": 173 }, { "row": 74, "col": 174 }, { "row": 74, "col": 175 }, { "row": 74, "col": 176 }, { "row": 74, "col": 177 }, { "row": 74, "col": 178 }, { "row": 74, "col": 179 }, { "row": 74, "col": 180 }, { "row": 74, "col": 181 }, { "row": 74, "col": 182 }, { "row": 74, "col": 183 }, { "row": 74, "col": 184 }, { "row": 74, "col": 185 }, { "row": 74, "col": 186 }, { "row": 74, "col": 187 }, { "row": 74, "col": 188 }, { "row": 74, "col": 189 }, { "row": 74, "col": 190 }, { "row": 74, "col": 191 }, { "row": 74, "col": 192 }, { "row": 74, "col": 193 }, { "row": 74, "col": 194 }, { "row": 74, "col": 195 }, { "row": 74, "col": 196 }, { "row": 74, "col": 197 }, { "row": 74, "col": 198 }, { "row": 74, "col": 199 }, { "row": 74, "col": 200 }, { "row": 74, "col": 201 }, { "row": 74, "col": 202 }, { "row": 74, "col": 203 }, { "row": 74, "col": 204 }, { "row": 74, "col": 205 }, { "row": 74, "col": 206 }, { "row": 74, "col": 207 }, { "row": 74, "col": 208 }, { "row": 74, "col": 209 }, { "row": 74, "col": 210 }, { "row": 74, "col": 211 }, { "row": 74, "col": 212 }, { "row": 74, "col": 213 }, { "row": 74, "col": 214 }, { "row": 74, "col": 215 }, { "row": 74, "col": 216 }, { "row": 74, "col": 217 }, { "row": 74, "col": 218 }, { "row": 74, "col": 219 }, { "row": 74, "col": 220 }, { "row": 74, "col": 221 }, { "row": 74, "col": 222 }, { "row": 74, "col": 223 }, { "row": 74, "col": 224 }, { "row": 74, "col": 225 }, { "row": 74, "col": 226 }, { "row": 74, "col": 227 }, { "row": 74, "col": 228 }, { "row": 74, "col": 229 }, { "row": 74, "col": 230 }, { "row": 74, "col": 231 }, { "row": 74, "col": 232 }, { "row": 74, "col": 233 }, { "row": 74, "col": 234 }, { "row": 74, "col": 235 }, { "row": 74, "col": 236 }, { "row": 74, "col": 237 }, { "row": 74, "col": 238 }, { "row": 74, "col": 239 }, { "row": 74, "col": 240 }, { "row": 74, "col": 241 }, { "row": 74, "col": 242 }, { "row": 74, "col": 243 }, { "row": 74, "col": 244 }, { "row": 74, "col": 245 }, { "row": 74, "col": 246 }, { "row": 74, "col": 247 }, { "row": 74, "col": 248 }, { "row": 74, "col": 249 }, { "row": 74, "col": 250 }, { "row": 74, "col": 251 }, { "row": 74, "col": 252 }, { "row": 74, "col": 253 }, { "row": 74, "col": 254 }, { "row": 74, "col": 255 }, { "row": 74, "col": 256 }, { "row": 74, "col": 257 }, { "row": 74, "col": 258 }, { "row": 74, "col": 259 }, { "row": 74, "col": 260 }, { "row": 74, "col": 261 }, { "row": 74, "col": 262 }, { "row": 74, "col": 263 }, { "row": 74, "col": 264 }, { "row": 74, "col": 265 }, { "row": 74, "col": 266 }, { "row": 74, "col": 267 }, { "row": 74, "col": 268 }, { "row": 74, "col": 269 }, { "row": 74, "col": 270 }, { "row": 75, "col": 163 }, { "row": 75, "col": 164 }, { "row": 75, "col": 165 }, { "row": 75, "col": 166 }, { "row": 75, "col": 167 }, { "row": 75, "col": 168 }, { "row": 75, "col": 169 }, { "row": 75, "col": 170 }, { "row": 75, "col": 171 }, { "row": 75, "col": 172 }, { "row": 75, "col": 173 }, { "row": 75, "col": 174 }, { "row": 75, "col": 175 }, { "row": 75, "col": 176 }, { "row": 75, "col": 177 }, { "row": 75, "col": 178 }, { "row": 75, "col": 179 }, { "row": 75, "col": 180 }, { "row": 75, "col": 181 }, { "row": 75, "col": 182 }, { "row": 75, "col": 183 }, { "row": 75, "col": 184 }, { "row": 75, "col": 185 }, { "row": 75, "col": 186 }, { "row": 75, "col": 187 }, { "row": 75, "col": 188 }, { "row": 75, "col": 189 }, { "row": 75, "col": 190 }, { "row": 75, "col": 191 }, { "row": 75, "col": 192 }, { "row": 75, "col": 193 }, { "row": 75, "col": 194 }, { "row": 75, "col": 195 }, { "row": 75, "col": 196 }, { "row": 75, "col": 197 }, { "row": 75, "col": 198 }, { "row": 75, "col": 199 }, { "row": 75, "col": 200 }, { "row": 75, "col": 201 }, { "row": 75, "col": 202 }, { "row": 75, "col": 203 }, { "row": 75, "col": 204 }, { "row": 75, "col": 205 }, { "row": 75, "col": 206 }, { "row": 75, "col": 207 }, { "row": 75, "col": 208 }, { "row": 75, "col": 209 }, { "row": 75, "col": 210 }, { "row": 75, "col": 211 }, { "row": 75, "col": 212 }, { "row": 75, "col": 213 }, { "row": 75, "col": 214 }, { "row": 75, "col": 215 }, { "row": 75, "col": 216 }, { "row": 75, "col": 217 }, { "row": 75, "col": 218 }, { "row": 75, "col": 219 }, { "row": 75, "col": 220 }, { "row": 75, "col": 221 }, { "row": 75, "col": 222 }, { "row": 75, "col": 223 }, { "row": 75, "col": 224 }, { "row": 75, "col": 225 }, { "row": 75, "col": 226 }, { "row": 75, "col": 227 }, { "row": 75, "col": 228 }, { "row": 75, "col": 229 }, { "row": 75, "col": 230 }, { "row": 75, "col": 231 }, { "row": 75, "col": 232 }, { "row": 75, "col": 233 }, { "row": 75, "col": 234 }, { "row": 75, "col": 235 }, { "row": 75, "col": 236 }, { "row": 75, "col": 237 }, { "row": 75, "col": 238 }, { "row": 75, "col": 239 }, { "row": 75, "col": 240 }, { "row": 75, "col": 241 }, { "row": 75, "col": 242 }, { "row": 75, "col": 243 }, { "row": 75, "col": 244 }, { "row": 75, "col": 245 }, { "row": 75, "col": 246 }, { "row": 75, "col": 247 }, { "row": 75, "col": 248 }, { "row": 75, "col": 249 }, { "row": 75, "col": 250 }, { "row": 75, "col": 251 }, { "row": 75, "col": 252 }, { "row": 75, "col": 253 }, { "row": 75, "col": 254 }, { "row": 75, "col": 255 }, { "row": 75, "col": 256 }, { "row": 75, "col": 257 }, { "row": 75, "col": 258 }, { "row": 75, "col": 259 }, { "row": 75, "col": 260 }, { "row": 75, "col": 261 }, { "row": 75, "col": 262 }, { "row": 75, "col": 263 }, { "row": 75, "col": 264 }, { "row": 75, "col": 265 }, { "row": 75, "col": 266 }, { "row": 75, "col": 267 }, { "row": 75, "col": 268 }, { "row": 75, "col": 269 }, { "row": 75, "col": 270 }, { "row": 76, "col": 163 }, { "row": 76, "col": 164 }, { "row": 76, "col": 165 }, { "row": 76, "col": 166 }, { "row": 76, "col": 167 }, { "row": 76, "col": 168 }, { "row": 76, "col": 169 }, { "row": 76, "col": 170 }, { "row": 76, "col": 171 }, { "row": 76, "col": 172 }, { "row": 76, "col": 173 }, { "row": 76, "col": 174 }, { "row": 76, "col": 175 }, { "row": 76, "col": 176 }, { "row": 76, "col": 177 }, { "row": 76, "col": 178 }, { "row": 76, "col": 179 }, { "row": 76, "col": 180 }, { "row": 76, "col": 181 }, { "row": 76, "col": 182 }, { "row": 76, "col": 183 }, { "row": 76, "col": 184 }, { "row": 76, "col": 185 }, { "row": 76, "col": 186 }, { "row": 76, "col": 187 }, { "row": 76, "col": 188 }, { "row": 76, "col": 189 }, { "row": 76, "col": 190 }, { "row": 76, "col": 191 }, { "row": 76, "col": 192 }, { "row": 76, "col": 193 }, { "row": 76, "col": 194 }, { "row": 76, "col": 195 }, { "row": 76, "col": 196 }, { "row": 76, "col": 197 }, { "row": 76, "col": 198 }, { "row": 76, "col": 199 }, { "row": 76, "col": 200 }, { "row": 76, "col": 201 }, { "row": 76, "col": 202 }, { "row": 76, "col": 203 }, { "row": 76, "col": 204 }, { "row": 76, "col": 205 }, { "row": 76, "col": 206 }, { "row": 76, "col": 207 }, { "row": 76, "col": 208 }, { "row": 76, "col": 209 }, { "row": 76, "col": 210 }, { "row": 76, "col": 211 }, { "row": 76, "col": 212 }, { "row": 76, "col": 213 }, { "row": 76, "col": 214 }, { "row": 76, "col": 215 }, { "row": 76, "col": 216 }, { "row": 76, "col": 217 }, { "row": 76, "col": 218 }, { "row": 76, "col": 219 }, { "row": 76, "col": 220 }, { "row": 76, "col": 221 }, { "row": 76, "col": 222 }, { "row": 76, "col": 223 }, { "row": 76, "col": 224 }, { "row": 76, "col": 225 }, { "row": 76, "col": 226 }, { "row": 76, "col": 227 }, { "row": 76, "col": 228 }, { "row": 76, "col": 229 }, { "row": 76, "col": 230 }, { "row": 76, "col": 231 }, { "row": 76, "col": 232 }, { "row": 76, "col": 233 }, { "row": 76, "col": 234 }, { "row": 76, "col": 235 }, { "row": 76, "col": 236 }, { "row": 76, "col": 237 }, { "row": 76, "col": 238 }, { "row": 76, "col": 239 }, { "row": 76, "col": 240 }, { "row": 76, "col": 241 }, { "row": 76, "col": 242 }, { "row": 76, "col": 243 }, { "row": 76, "col": 244 }, { "row": 76, "col": 245 }, { "row": 76, "col": 246 }, { "row": 76, "col": 247 }, { "row": 76, "col": 248 }, { "row": 76, "col": 249 }, { "row": 76, "col": 250 }, { "row": 76, "col": 251 }, { "row": 76, "col": 252 }, { "row": 76, "col": 253 }, { "row": 76, "col": 254 }, { "row": 76, "col": 255 }, { "row": 76, "col": 256 }, { "row": 76, "col": 257 }, { "row": 76, "col": 258 }, { "row": 76, "col": 259 }, { "row": 76, "col": 260 }, { "row": 76, "col": 261 }, { "row": 76, "col": 262 }, { "row": 76, "col": 263 }, { "row": 76, "col": 264 }, { "row": 76, "col": 265 }, { "row": 76, "col": 266 }, { "row": 76, "col": 267 }, { "row": 76, "col": 268 }, { "row": 76, "col": 269 }, { "row": 76, "col": 270 }, { "row": 53, "col": 243 }, { "row": 55, "col": 243 }, { "row": 56, "col": 243 }, { "row": 59, "col": 243 }, { "row": 60, "col": 243 }, { "row": 61, "col": 243 }, { "row": 62, "col": 243 }, { "row": 63, "col": 243 }, { "row": 64, "col": 243 }, { "row": 65, "col": 243 }, { "row": 66, "col": 243 }, { "row": 67, "col": 243 }, { "row": 68, "col": 243 }, { "row": 69, "col": 243 }, { "row": 70, "col": 243 }, { "row": 58, "col": 243 }, { "row": 57, "col": 243 }, { "row": 54, "col": 243 }, { "row": 60, "col": 222 }, { "row": 60, "col": 223 }, { "row": 61, "col": 222 }, { "row": 61, "col": 223 }, { "row": 62, "col": 223 }, { "row": 63, "col": 223 }, { "row": 64, "col": 223 }, { "row": 66, "col": 223 }, { "row": 65, "col": 222 }, { "row": 64, "col": 222 }, { "row": 63, "col": 222 }, { "row": 62, "col": 222 }, { "row": 58, "col": 261 }, { "row": 59, "col": 261 }, { "row": 60, "col": 261 }, { "row": 61, "col": 261 }, { "row": 62, "col": 261 }, { "row": 63, "col": 261 }, { "row": 64, "col": 261 }, { "row": 65, "col": 261 }, { "row": 66, "col": 261 }, { "row": 70, "col": 261 }, { "row": 69, "col": 261 }, { "row": 68, "col": 261 }, { "row": 67, "col": 261 }, { "row": 72, "col": 159 }, { "row": 72, "col": 160 }, { "row": 72, "col": 161 }, { "row": 72, "col": 162 }, { "row": 73, "col": 154 }, { "row": 73, "col": 155 }, { "row": 73, "col": 156 }, { "row": 73, "col": 157 }, { "row": 73, "col": 158 }, { "row": 73, "col": 159 }, { "row": 73, "col": 160 }, { "row": 73, "col": 161 }, { "row": 73, "col": 162 }, { "row": 74, "col": 149 }, { "row": 74, "col": 150 }, { "row": 74, "col": 151 }, { "row": 74, "col": 152 }, { "row": 74, "col": 153 }, { "row": 74, "col": 154 }, { "row": 74, "col": 155 }, { "row": 74, "col": 156 }, { "row": 74, "col": 157 }, { "row": 74, "col": 158 }, { "row": 74, "col": 159 }, { "row": 74, "col": 160 }, { "row": 74, "col": 161 }, { "row": 74, "col": 162 }, { "row": 75, "col": 144 }, { "row": 75, "col": 145 }, { "row": 75, "col": 146 }, { "row": 75, "col": 147 }, { "row": 75, "col": 148 }, { "row": 75, "col": 149 }, { "row": 75, "col": 150 }, { "row": 75, "col": 151 }, { "row": 75, "col": 152 }, { "row": 75, "col": 153 }, { "row": 75, "col": 154 }, { "row": 75, "col": 155 }, { "row": 75, "col": 156 }, { "row": 75, "col": 157 }, { "row": 75, "col": 158 }, { "row": 75, "col": 159 }, { "row": 75, "col": 160 }, { "row": 75, "col": 161 }, { "row": 75, "col": 162 }, { "row": 76, "col": 143 }, { "row": 76, "col": 144 }, { "row": 76, "col": 145 }, { "row": 76, "col": 146 }, { "row": 76, "col": 147 }, { "row": 76, "col": 148 }, { "row": 76, "col": 149 }, { "row": 76, "col": 150 }, { "row": 76, "col": 151 }, { "row": 76, "col": 152 }, { "row": 76, "col": 153 }, { "row": 76, "col": 154 }, { "row": 76, "col": 155 }, { "row": 76, "col": 156 }, { "row": 76, "col": 157 }, { "row": 76, "col": 158 }, { "row": 76, "col": 159 }, { "row": 76, "col": 160 }, { "row": 76, "col": 161 }, { "row": 76, "col": 162 }, { "row": 77, "col": 142 }, { "row": 77, "col": 143 }, { "row": 77, "col": 144 }, { "row": 77, "col": 145 }, { "row": 77, "col": 146 }, { "row": 77, "col": 147 }, { "row": 77, "col": 148 }, { "row": 77, "col": 149 }, { "row": 77, "col": 150 }, { "row": 77, "col": 151 }, { "row": 77, "col": 152 }, { "row": 77, "col": 153 }, { "row": 77, "col": 154 }, { "row": 77, "col": 155 }, { "row": 77, "col": 156 }, { "row": 77, "col": 157 }, { "row": 77, "col": 158 }, { "row": 78, "col": 141 }, { "row": 78, "col": 142 }, { "row": 78, "col": 143 }, { "row": 78, "col": 144 }, { "row": 78, "col": 145 }, { "row": 78, "col": 146 }, { "row": 78, "col": 147 }, { "row": 78, "col": 148 }, { "row": 78, "col": 149 }, { "row": 78, "col": 150 }, { "row": 78, "col": 151 }, { "row": 78, "col": 152 }, { "row": 78, "col": 153 }, { "row": 78, "col": 154 }, { "row": 78, "col": 155 }, { "row": 78, "col": 156 }, { "row": 78, "col": 157 }, { "row": 79, "col": 140 }, { "row": 79, "col": 141 }, { "row": 79, "col": 142 }, { "row": 79, "col": 143 }, { "row": 79, "col": 144 }, { "row": 79, "col": 145 }, { "row": 79, "col": 146 }, { "row": 79, "col": 147 }, { "row": 79, "col": 148 }, { "row": 79, "col": 149 }, { "row": 79, "col": 150 }, { "row": 79, "col": 151 }, { "row": 79, "col": 152 }, { "row": 79, "col": 153 }, { "row": 79, "col": 154 }, { "row": 79, "col": 155 }, { "row": 80, "col": 138 }, { "row": 80, "col": 139 }, { "row": 80, "col": 140 }, { "row": 80, "col": 141 }, { "row": 80, "col": 142 }, { "row": 80, "col": 143 }, { "row": 80, "col": 144 }, { "row": 80, "col": 145 }, { "row": 80, "col": 146 }, { "row": 80, "col": 147 }, { "row": 80, "col": 148 }, { "row": 80, "col": 149 }, { "row": 80, "col": 150 }, { "row": 80, "col": 151 }, { "row": 80, "col": 152 }, { "row": 80, "col": 153 }, { "row": 80, "col": 154 }, { "row": 81, "col": 136 }, { "row": 81, "col": 137 }, { "row": 81, "col": 138 }, { "row": 81, "col": 139 }, { "row": 81, "col": 140 }, { "row": 81, "col": 141 }, { "row": 81, "col": 142 }, { "row": 81, "col": 143 }, { "row": 81, "col": 144 }, { "row": 81, "col": 145 }, { "row": 81, "col": 146 }, { "row": 81, "col": 147 }, { "row": 81, "col": 148 }, { "row": 81, "col": 149 }, { "row": 81, "col": 150 }, { "row": 81, "col": 151 }, { "row": 81, "col": 152 }, { "row": 82, "col": 133 }, { "row": 82, "col": 134 }, { "row": 82, "col": 135 }, { "row": 82, "col": 136 }, { "row": 82, "col": 137 }, { "row": 82, "col": 138 }, { "row": 82, "col": 139 }, { "row": 82, "col": 140 }, { "row": 82, "col": 141 }, { "row": 82, "col": 142 }, { "row": 82, "col": 143 }, { "row": 82, "col": 144 }, { "row": 82, "col": 145 }, { "row": 82, "col": 146 }, { "row": 82, "col": 147 }, { "row": 82, "col": 148 }, { "row": 82, "col": 149 }, { "row": 82, "col": 150 }, { "row": 83, "col": 132 }, { "row": 83, "col": 133 }, { "row": 83, "col": 134 }, { "row": 83, "col": 135 }, { "row": 83, "col": 136 }, { "row": 83, "col": 137 }, { "row": 83, "col": 138 }, { "row": 83, "col": 139 }, { "row": 83, "col": 140 }, { "row": 83, "col": 141 }, { "row": 83, "col": 142 }, { "row": 83, "col": 143 }, { "row": 83, "col": 144 }, { "row": 83, "col": 145 }, { "row": 83, "col": 146 }, { "row": 83, "col": 147 }, { "row": 83, "col": 148 }, { "row": 84, "col": 131 }, { "row": 84, "col": 132 }, { "row": 84, "col": 133 }, { "row": 84, "col": 134 }, { "row": 84, "col": 135 }, { "row": 84, "col": 136 }, { "row": 84, "col": 137 }, { "row": 84, "col": 138 }, { "row": 84, "col": 139 }, { "row": 84, "col": 140 }, { "row": 84, "col": 141 }, { "row": 84, "col": 142 }, { "row": 84, "col": 143 }, { "row": 84, "col": 144 }, { "row": 84, "col": 145 }, { "row": 85, "col": 129 }, { "row": 85, "col": 130 }, { "row": 85, "col": 131 }, { "row": 85, "col": 132 }, { "row": 85, "col": 133 }, { "row": 85, "col": 134 }, { "row": 85, "col": 135 }, { "row": 85, "col": 136 }, { "row": 85, "col": 137 }, { "row": 85, "col": 138 }, { "row": 85, "col": 139 }, { "row": 85, "col": 140 }, { "row": 85, "col": 141 }, { "row": 85, "col": 142 }, { "row": 85, "col": 143 }, { "row": 86, "col": 129 }, { "row": 86, "col": 130 }, { "row": 86, "col": 131 }, { "row": 86, "col": 132 }, { "row": 86, "col": 133 }, { "row": 86, "col": 134 }, { "row": 86, "col": 135 }, { "row": 86, "col": 136 }, { "row": 86, "col": 137 }, { "row": 86, "col": 138 }, { "row": 86, "col": 139 }, { "row": 86, "col": 140 }, { "row": 87, "col": 128 }, { "row": 87, "col": 129 }, { "row": 87, "col": 130 }, { "row": 87, "col": 131 }, { "row": 87, "col": 132 }, { "row": 87, "col": 133 }, { "row": 87, "col": 134 }, { "row": 87, "col": 135 }, { "row": 87, "col": 136 }, { "row": 87, "col": 137 }, { "row": 88, "col": 128 }, { "row": 88, "col": 129 }, { "row": 88, "col": 130 }, { "row": 88, "col": 131 }, { "row": 88, "col": 132 }, { "row": 88, "col": 133 }, { "row": 88, "col": 134 }, { "row": 88, "col": 135 }, { "row": 88, "col": 136 }, { "row": 89, "col": 127 }, { "row": 89, "col": 128 }, { "row": 89, "col": 129 }, { "row": 89, "col": 130 }, { "row": 89, "col": 131 }, { "row": 89, "col": 132 }, { "row": 89, "col": 133 }, { "row": 89, "col": 134 }, { "row": 89, "col": 135 }, { "row": 90, "col": 126 }, { "row": 90, "col": 127 }, { "row": 90, "col": 128 }, { "row": 90, "col": 129 }, { "row": 90, "col": 130 }, { "row": 90, "col": 131 }, { "row": 90, "col": 132 }, { "row": 90, "col": 133 }, { "row": 90, "col": 134 }, { "row": 91, "col": 125 }, { "row": 91, "col": 126 }, { "row": 91, "col": 127 }, { "row": 91, "col": 128 }, { "row": 91, "col": 129 }, { "row": 91, "col": 130 }, { "row": 91, "col": 131 }, { "row": 91, "col": 132 }, { "row": 91, "col": 133 }, { "row": 92, "col": 124 }, { "row": 92, "col": 125 }, { "row": 92, "col": 126 }, { "row": 92, "col": 127 }, { "row": 92, "col": 128 }, { "row": 92, "col": 129 }, { "row": 92, "col": 130 }, { "row": 92, "col": 131 }, { "row": 92, "col": 132 }, { "row": 93, "col": 122 }, { "row": 93, "col": 123 }, { "row": 93, "col": 124 }, { "row": 93, "col": 125 }, { "row": 93, "col": 126 }, { "row": 93, "col": 127 }, { "row": 93, "col": 128 }, { "row": 93, "col": 129 }, { "row": 93, "col": 130 }, { "row": 93, "col": 131 }, { "row": 94, "col": 121 }, { "row": 94, "col": 122 }, { "row": 94, "col": 123 }, { "row": 94, "col": 124 }, { "row": 94, "col": 125 }, { "row": 94, "col": 126 }, { "row": 94, "col": 127 }, { "row": 94, "col": 128 }, { "row": 94, "col": 129 }, { "row": 95, "col": 120 }, { "row": 95, "col": 121 }, { "row": 95, "col": 122 }, { "row": 95, "col": 123 }, { "row": 95, "col": 124 }, { "row": 95, "col": 125 }, { "row": 95, "col": 126 }, { "row": 95, "col": 127 }, { "row": 95, "col": 128 }, { "row": 95, "col": 129 }, { "row": 96, "col": 118 }, { "row": 96, "col": 119 }, { "row": 96, "col": 120 }, { "row": 96, "col": 121 }, { "row": 96, "col": 122 }, { "row": 96, "col": 123 }, { "row": 96, "col": 124 }, { "row": 96, "col": 125 }, { "row": 96, "col": 126 }, { "row": 96, "col": 127 }, { "row": 96, "col": 128 }, { "row": 97, "col": 118 }, { "row": 97, "col": 119 }, { "row": 97, "col": 120 }, { "row": 97, "col": 121 }, { "row": 97, "col": 122 }, { "row": 97, "col": 123 }, { "row": 97, "col": 124 }, { "row": 97, "col": 125 }, { "row": 97, "col": 126 }, { "row": 97, "col": 127 }, { "row": 98, "col": 117 }, { "row": 98, "col": 118 }, { "row": 98, "col": 119 }, { "row": 98, "col": 120 }, { "row": 98, "col": 121 }, { "row": 98, "col": 122 }, { "row": 98, "col": 123 }, { "row": 98, "col": 124 }, { "row": 98, "col": 125 }, { "row": 98, "col": 126 }, { "row": 99, "col": 117 }, { "row": 99, "col": 118 }, { "row": 99, "col": 119 }, { "row": 99, "col": 120 }, { "row": 99, "col": 121 }, { "row": 99, "col": 122 }, { "row": 99, "col": 123 }, { "row": 99, "col": 124 }, { "row": 99, "col": 125 }, { "row": 100, "col": 116 }, { "row": 100, "col": 117 }, { "row": 100, "col": 118 }, { "row": 100, "col": 119 }, { "row": 100, "col": 120 }, { "row": 100, "col": 121 }, { "row": 100, "col": 122 }, { "row": 100, "col": 123 }, { "row": 100, "col": 124 }, { "row": 101, "col": 116 }, { "row": 101, "col": 117 }, { "row": 101, "col": 118 }, { "row": 101, "col": 119 }, { "row": 101, "col": 120 }, { "row": 101, "col": 121 }, { "row": 101, "col": 122 }, { "row": 101, "col": 123 }, { "row": 102, "col": 115 }, { "row": 102, "col": 116 }, { "row": 102, "col": 117 }, { "row": 102, "col": 118 }, { "row": 102, "col": 119 }, { "row": 102, "col": 120 }, { "row": 102, "col": 121 }, { "row": 102, "col": 122 }, { "row": 103, "col": 115 }, { "row": 103, "col": 116 }, { "row": 103, "col": 117 }, { "row": 103, "col": 118 }, { "row": 103, "col": 119 }, { "row": 103, "col": 120 }, { "row": 103, "col": 121 }, { "row": 103, "col": 122 }, { "row": 104, "col": 114 }, { "row": 104, "col": 115 }, { "row": 104, "col": 116 }, { "row": 104, "col": 117 }, { "row": 104, "col": 118 }, { "row": 104, "col": 119 }, { "row": 104, "col": 120 }, { "row": 104, "col": 121 }, { "row": 105, "col": 113 }, { "row": 105, "col": 114 }, { "row": 105, "col": 115 }, { "row": 105, "col": 116 }, { "row": 105, "col": 117 }, { "row": 105, "col": 118 }, { "row": 105, "col": 119 }, { "row": 105, "col": 120 }, { "row": 106, "col": 113 }, { "row": 106, "col": 114 }, { "row": 106, "col": 115 }, { "row": 106, "col": 116 }, { "row": 106, "col": 117 }, { "row": 106, "col": 118 }, { "row": 106, "col": 119 }, { "row": 106, "col": 120 }, { "row": 107, "col": 113 }, { "row": 107, "col": 114 }, { "row": 107, "col": 115 }, { "row": 107, "col": 116 }, { "row": 107, "col": 117 }, { "row": 107, "col": 118 }, { "row": 107, "col": 119 }, { "row": 108, "col": 112 }, { "row": 108, "col": 113 }, { "row": 108, "col": 114 }, { "row": 108, "col": 115 }, { "row": 108, "col": 116 }, { "row": 108, "col": 117 }, { "row": 108, "col": 118 }, { "row": 109, "col": 112 }, { "row": 109, "col": 113 }, { "row": 109, "col": 114 }, { "row": 109, "col": 115 }, { "row": 109, "col": 116 }, { "row": 109, "col": 117 }, { "row": 110, "col": 111 }, { "row": 110, "col": 112 }, { "row": 110, "col": 113 }, { "row": 110, "col": 114 }, { "row": 110, "col": 115 }, { "row": 110, "col": 116 }, { "row": 110, "col": 117 }, { "row": 111, "col": 111 }, { "row": 111, "col": 112 }, { "row": 111, "col": 113 }, { "row": 111, "col": 114 }, { "row": 111, "col": 115 }, { "row": 111, "col": 116 }, { "row": 112, "col": 110 }, { "row": 112, "col": 111 }, { "row": 112, "col": 112 }, { "row": 112, "col": 113 }, { "row": 112, "col": 114 }, { "row": 112, "col": 115 }, { "row": 112, "col": 116 }, { "row": 113, "col": 110 }, { "row": 113, "col": 111 }, { "row": 113, "col": 112 }, { "row": 113, "col": 113 }, { "row": 113, "col": 114 }, { "row": 113, "col": 115 }, { "row": 114, "col": 109 }, { "row": 114, "col": 110 }, { "row": 114, "col": 111 }, { "row": 114, "col": 112 }, { "row": 114, "col": 113 }, { "row": 114, "col": 114 }, { "row": 114, "col": 115 }, { "row": 115, "col": 108 }, { "row": 115, "col": 109 }, { "row": 115, "col": 110 }, { "row": 115, "col": 111 }, { "row": 115, "col": 112 }, { "row": 115, "col": 113 }, { "row": 115, "col": 114 }, { "row": 116, "col": 108 }, { "row": 116, "col": 109 }, { "row": 116, "col": 110 }, { "row": 116, "col": 111 }, { "row": 116, "col": 112 }, { "row": 116, "col": 113 }, { "row": 116, "col": 114 }, { "row": 117, "col": 107 }, { "row": 117, "col": 108 }, { "row": 117, "col": 109 }, { "row": 117, "col": 110 }, { "row": 117, "col": 111 }, { "row": 117, "col": 112 }, { "row": 117, "col": 113 }, { "row": 118, "col": 106 }, { "row": 118, "col": 107 }, { "row": 118, "col": 108 }, { "row": 118, "col": 109 }, { "row": 118, "col": 110 }, { "row": 118, "col": 111 }, { "row": 118, "col": 112 }, { "row": 119, "col": 105 }, { "row": 119, "col": 106 }, { "row": 119, "col": 107 }, { "row": 119, "col": 108 }, { "row": 119, "col": 109 }, { "row": 119, "col": 110 }, { "row": 119, "col": 111 }, { "row": 119, "col": 112 }, { "row": 120, "col": 105 }, { "row": 120, "col": 106 }, { "row": 120, "col": 107 }, { "row": 120, "col": 108 }, { "row": 120, "col": 109 }, { "row": 120, "col": 110 }, { "row": 120, "col": 111 }, { "row": 121, "col": 104 }, { "row": 121, "col": 105 }, { "row": 121, "col": 106 }, { "row": 121, "col": 107 }, { "row": 121, "col": 108 }, { "row": 121, "col": 109 }, { "row": 121, "col": 110 }, { "row": 122, "col": 103 }, { "row": 122, "col": 104 }, { "row": 122, "col": 105 }, { "row": 122, "col": 106 }, { "row": 122, "col": 107 }, { "row": 122, "col": 108 }, { "row": 122, "col": 109 }, { "row": 122, "col": 110 }, { "row": 123, "col": 103 }, { "row": 123, "col": 104 }, { "row": 123, "col": 105 }, { "row": 123, "col": 106 }, { "row": 123, "col": 107 }, { "row": 123, "col": 108 }, { "row": 123, "col": 109 }, { "row": 124, "col": 102 }, { "row": 124, "col": 103 }, { "row": 124, "col": 104 }, { "row": 124, "col": 105 }, { "row": 124, "col": 106 }, { "row": 124, "col": 107 }, { "row": 124, "col": 108 }, { "row": 125, "col": 101 }, { "row": 125, "col": 102 }, { "row": 125, "col": 103 }, { "row": 125, "col": 104 }, { "row": 125, "col": 105 }, { "row": 125, "col": 106 }, { "row": 125, "col": 107 }, { "row": 125, "col": 108 }, { "row": 126, "col": 100 }, { "row": 126, "col": 101 }, { "row": 126, "col": 102 }, { "row": 126, "col": 103 }, { "row": 126, "col": 104 }, { "row": 126, "col": 105 }, { "row": 126, "col": 106 }, { "row": 126, "col": 107 }, { "row": 127, "col": 100 }, { "row": 127, "col": 101 }, { "row": 127, "col": 102 }, { "row": 127, "col": 103 }, { "row": 127, "col": 104 }, { "row": 127, "col": 105 }, { "row": 127, "col": 106 }, { "row": 128, "col": 100 }, { "row": 128, "col": 101 }, { "row": 128, "col": 102 }, { "row": 128, "col": 103 }, { "row": 128, "col": 104 }, { "row": 128, "col": 105 }, { "row": 128, "col": 106 }, { "row": 129, "col": 100 }, { "row": 129, "col": 101 }, { "row": 129, "col": 102 }, { "row": 129, "col": 103 }, { "row": 129, "col": 104 }, { "row": 129, "col": 105 }, { "row": 129, "col": 106 }, { "row": 130, "col": 100 }, { "row": 130, "col": 101 }, { "row": 130, "col": 102 }, { "row": 130, "col": 103 }, { "row": 130, "col": 104 }, { "row": 130, "col": 105 }, { "row": 130, "col": 106 }, { "row": 131, "col": 100 }, { "row": 131, "col": 101 }, { "row": 131, "col": 102 }, { "row": 131, "col": 103 }, { "row": 131, "col": 104 }, { "row": 131, "col": 105 }, { "row": 131, "col": 106 }, { "row": 132, "col": 100 }, { "row": 132, "col": 101 }, { "row": 132, "col": 102 }, { "row": 132, "col": 103 }, { "row": 132, "col": 104 }, { "row": 132, "col": 105 }, { "row": 132, "col": 106 }, { "row": 133, "col": 100 }, { "row": 133, "col": 101 }, { "row": 133, "col": 102 }, { "row": 133, "col": 103 }, { "row": 133, "col": 104 }, { "row": 133, "col": 105 }, { "row": 133, "col": 106 }, { "row": 134, "col": 100 }, { "row": 134, "col": 101 }, { "row": 134, "col": 102 }, { "row": 134, "col": 103 }, { "row": 134, "col": 104 }, { "row": 134, "col": 105 }, { "row": 134, "col": 106 }, { "row": 135, "col": 100 }, { "row": 135, "col": 101 }, { "row": 135, "col": 102 }, { "row": 135, "col": 103 }, { "row": 135, "col": 104 }, { "row": 135, "col": 105 }, { "row": 135, "col": 106 }, { "row": 136, "col": 100 }, { "row": 136, "col": 101 }, { "row": 136, "col": 102 }, { "row": 136, "col": 103 }, { "row": 136, "col": 104 }, { "row": 136, "col": 105 }, { "row": 136, "col": 106 }, { "row": 137, "col": 100 }, { "row": 137, "col": 101 }, { "row": 137, "col": 102 }, { "row": 137, "col": 103 }, { "row": 137, "col": 104 }, { "row": 137, "col": 105 }, { "row": 138, "col": 99 }, { "row": 138, "col": 100 }, { "row": 138, "col": 101 }, { "row": 138, "col": 102 }, { "row": 138, "col": 103 }, { "row": 138, "col": 104 }, { "row": 138, "col": 105 }, { "row": 138, "col": 106 }, { "row": 139, "col": 100 }, { "row": 139, "col": 101 }, { "row": 139, "col": 102 }, { "row": 139, "col": 103 }, { "row": 139, "col": 104 }, { "row": 139, "col": 105 }, { "row": 139, "col": 106 }, { "row": 140, "col": 100 }, { "row": 140, "col": 101 }, { "row": 140, "col": 102 }, { "row": 140, "col": 103 }, { "row": 140, "col": 104 }, { "row": 140, "col": 105 }, { "row": 140, "col": 106 }, { "row": 141, "col": 100 }, { "row": 141, "col": 101 }, { "row": 141, "col": 102 }, { "row": 141, "col": 103 }, { "row": 141, "col": 104 }, { "row": 141, "col": 105 }, { "row": 141, "col": 106 }, { "row": 142, "col": 100 }, { "row": 142, "col": 101 }, { "row": 142, "col": 102 }, { "row": 142, "col": 103 }, { "row": 142, "col": 104 }, { "row": 142, "col": 105 }, { "row": 142, "col": 106 }, { "row": 143, "col": 100 }, { "row": 143, "col": 101 }, { "row": 143, "col": 102 }, { "row": 143, "col": 103 }, { "row": 143, "col": 104 }, { "row": 143, "col": 105 }, { "row": 143, "col": 106 }, { "row": 143, "col": 107 }, { "row": 144, "col": 101 }, { "row": 144, "col": 102 }, { "row": 144, "col": 103 }, { "row": 144, "col": 104 }, { "row": 144, "col": 105 }, { "row": 144, "col": 106 }, { "row": 144, "col": 107 }, { "row": 145, "col": 101 }, { "row": 145, "col": 102 }, { "row": 145, "col": 103 }, { "row": 145, "col": 104 }, { "row": 145, "col": 105 }, { "row": 145, "col": 106 }, { "row": 145, "col": 107 }, { "row": 146, "col": 101 }, { "row": 146, "col": 102 }, { "row": 146, "col": 103 }, { "row": 146, "col": 104 }, { "row": 146, "col": 105 }, { "row": 146, "col": 106 }, { "row": 146, "col": 107 }, { "row": 147, "col": 101 }, { "row": 147, "col": 102 }, { "row": 147, "col": 103 }, { "row": 147, "col": 104 }, { "row": 147, "col": 105 }, { "row": 147, "col": 106 }, { "row": 147, "col": 107 }, { "row": 148, "col": 101 }, { "row": 148, "col": 102 }, { "row": 148, "col": 103 }, { "row": 148, "col": 104 }, { "row": 148, "col": 105 }, { "row": 148, "col": 106 }, { "row": 148, "col": 107 }, { "row": 149, "col": 101 }, { "row": 149, "col": 102 }, { "row": 149, "col": 103 }, { "row": 149, "col": 104 }, { "row": 149, "col": 105 }, { "row": 149, "col": 106 }, { "row": 149, "col": 107 }, { "row": 149, "col": 108 }, { "row": 150, "col": 102 }, { "row": 150, "col": 103 }, { "row": 150, "col": 104 }, { "row": 150, "col": 105 }, { "row": 150, "col": 106 }, { "row": 150, "col": 107 }, { "row": 150, "col": 108 }, { "row": 151, "col": 102 }, { "row": 151, "col": 103 }, { "row": 151, "col": 104 }, { "row": 151, "col": 105 }, { "row": 151, "col": 106 }, { "row": 151, "col": 107 }, { "row": 151, "col": 108 }, { "row": 152, "col": 102 }, { "row": 152, "col": 103 }, { "row": 152, "col": 104 }, { "row": 152, "col": 105 }, { "row": 152, "col": 106 }, { "row": 152, "col": 107 }, { "row": 152, "col": 108 }, { "row": 153, "col": 102 }, { "row": 153, "col": 103 }, { "row": 153, "col": 104 }, { "row": 153, "col": 105 }, { "row": 153, "col": 106 }, { "row": 153, "col": 107 }, { "row": 153, "col": 108 }, { "row": 154, "col": 102 }, { "row": 154, "col": 103 }, { "row": 154, "col": 104 }, { "row": 154, "col": 105 }, { "row": 154, "col": 106 }, { "row": 154, "col": 107 }, { "row": 154, "col": 108 }, { "row": 155, "col": 103 }, { "row": 155, "col": 104 }, { "row": 155, "col": 105 }, { "row": 155, "col": 106 }, { "row": 155, "col": 107 }, { "row": 155, "col": 108 }, { "row": 156, "col": 103 }, { "row": 156, "col": 104 }, { "row": 156, "col": 105 }, { "row": 156, "col": 106 }, { "row": 156, "col": 107 }, { "row": 156, "col": 108 }, { "row": 156, "col": 109 }, { "row": 157, "col": 103 }, { "row": 157, "col": 104 }, { "row": 157, "col": 105 }, { "row": 157, "col": 106 }, { "row": 157, "col": 107 }, { "row": 157, "col": 108 }, { "row": 157, "col": 109 }, { "row": 158, "col": 103 }, { "row": 158, "col": 104 }, { "row": 158, "col": 105 }, { "row": 158, "col": 106 }, { "row": 158, "col": 107 }, { "row": 158, "col": 108 }, { "row": 158, "col": 109 }, { "row": 159, "col": 103 }, { "row": 159, "col": 104 }, { "row": 159, "col": 105 }, { "row": 159, "col": 106 }, { "row": 159, "col": 107 }, { "row": 159, "col": 108 }, { "row": 159, "col": 109 }, { "row": 159, "col": 110 }, { "row": 160, "col": 103 }, { "row": 160, "col": 104 }, { "row": 160, "col": 105 }, { "row": 160, "col": 106 }, { "row": 160, "col": 107 }, { "row": 160, "col": 108 }, { "row": 160, "col": 109 }, { "row": 160, "col": 110 }, { "row": 161, "col": 104 }, { "row": 161, "col": 105 }, { "row": 161, "col": 106 }, { "row": 161, "col": 107 }, { "row": 161, "col": 108 }, { "row": 161, "col": 109 }, { "row": 161, "col": 110 }, { "row": 162, "col": 104 }, { "row": 162, "col": 105 }, { "row": 162, "col": 106 }, { "row": 162, "col": 107 }, { "row": 162, "col": 108 }, { "row": 162, "col": 109 }, { "row": 162, "col": 110 }, { "row": 162, "col": 111 }, { "row": 163, "col": 105 }, { "row": 163, "col": 106 }, { "row": 163, "col": 107 }, { "row": 163, "col": 108 }, { "row": 163, "col": 109 }, { "row": 163, "col": 110 }, { "row": 163, "col": 111 }, { "row": 164, "col": 105 }, { "row": 164, "col": 106 }, { "row": 164, "col": 107 }, { "row": 164, "col": 108 }, { "row": 164, "col": 110 }, { "row": 164, "col": 111 }, { "row": 165, "col": 105 }, { "row": 165, "col": 106 }, { "row": 165, "col": 107 }, { "row": 165, "col": 108 }, { "row": 165, "col": 109 }, { "row": 165, "col": 110 }, { "row": 165, "col": 111 }, { "row": 77, "col": 264 }, { "row": 77, "col": 265 }, { "row": 77, "col": 266 }, { "row": 77, "col": 267 }, { "row": 77, "col": 268 }, { "row": 77, "col": 269 }, { "row": 77, "col": 270 }, { "row": 78, "col": 264 }, { "row": 78, "col": 265 }, { "row": 78, "col": 266 }, { "row": 78, "col": 267 }, { "row": 78, "col": 268 }, { "row": 78, "col": 269 }, { "row": 78, "col": 270 }, { "row": 79, "col": 264 }, { "row": 79, "col": 265 }, { "row": 79, "col": 266 }, { "row": 79, "col": 267 }, { "row": 79, "col": 268 }, { "row": 79, "col": 269 }, { "row": 79, "col": 270 }, { "row": 80, "col": 264 }, { "row": 80, "col": 265 }, { "row": 80, "col": 266 }, { "row": 80, "col": 267 }, { "row": 80, "col": 268 }, { "row": 80, "col": 269 }, { "row": 80, "col": 270 }, { "row": 81, "col": 264 }, { "row": 81, "col": 265 }, { "row": 81, "col": 266 }, { "row": 81, "col": 267 }, { "row": 81, "col": 268 }, { "row": 81, "col": 269 }, { "row": 81, "col": 270 }, { "row": 82, "col": 264 }, { "row": 82, "col": 265 }, { "row": 82, "col": 266 }, { "row": 82, "col": 267 }, { "row": 82, "col": 268 }, { "row": 82, "col": 269 }, { "row": 82, "col": 270 }, { "row": 83, "col": 264 }, { "row": 83, "col": 265 }, { "row": 83, "col": 266 }, { "row": 83, "col": 267 }, { "row": 83, "col": 268 }, { "row": 83, "col": 269 }, { "row": 83, "col": 270 }, { "row": 84, "col": 264 }, { "row": 84, "col": 265 }, { "row": 84, "col": 266 }, { "row": 84, "col": 267 }, { "row": 84, "col": 268 }, { "row": 84, "col": 269 }, { "row": 84, "col": 270 }, { "row": 85, "col": 264 }, { "row": 85, "col": 265 }, { "row": 85, "col": 266 }, { "row": 85, "col": 267 }, { "row": 85, "col": 268 }, { "row": 85, "col": 269 }, { "row": 85, "col": 270 }, { "row": 86, "col": 264 }, { "row": 86, "col": 265 }, { "row": 86, "col": 266 }, { "row": 86, "col": 267 }, { "row": 86, "col": 268 }, { "row": 86, "col": 269 }, { "row": 86, "col": 270 }, { "row": 87, "col": 264 }, { "row": 87, "col": 265 }, { "row": 87, "col": 266 }, { "row": 87, "col": 267 }, { "row": 87, "col": 268 }, { "row": 87, "col": 269 }, { "row": 87, "col": 270 }, { "row": 88, "col": 264 }, { "row": 88, "col": 265 }, { "row": 88, "col": 266 }, { "row": 88, "col": 267 }, { "row": 88, "col": 268 }, { "row": 88, "col": 269 }, { "row": 88, "col": 270 }, { "row": 89, "col": 264 }, { "row": 89, "col": 265 }, { "row": 89, "col": 266 }, { "row": 89, "col": 267 }, { "row": 89, "col": 268 }, { "row": 89, "col": 269 }, { "row": 89, "col": 270 }, { "row": 90, "col": 264 }, { "row": 90, "col": 265 }, { "row": 90, "col": 266 }, { "row": 90, "col": 267 }, { "row": 90, "col": 268 }, { "row": 90, "col": 269 }, { "row": 90, "col": 270 }, { "row": 91, "col": 264 }, { "row": 91, "col": 265 }, { "row": 91, "col": 266 }, { "row": 91, "col": 267 }, { "row": 91, "col": 268 }, { "row": 91, "col": 269 }, { "row": 91, "col": 270 }, { "row": 92, "col": 264 }, { "row": 92, "col": 265 }, { "row": 92, "col": 266 }, { "row": 92, "col": 267 }, { "row": 92, "col": 268 }, { "row": 92, "col": 269 }, { "row": 92, "col": 270 }, { "row": 93, "col": 264 }, { "row": 93, "col": 265 }, { "row": 93, "col": 266 }, { "row": 93, "col": 267 }, { "row": 93, "col": 268 }, { "row": 93, "col": 269 }, { "row": 93, "col": 270 }, { "row": 94, "col": 264 }, { "row": 94, "col": 265 }, { "row": 94, "col": 266 }, { "row": 94, "col": 267 }, { "row": 94, "col": 268 }, { "row": 94, "col": 269 }, { "row": 94, "col": 270 }, { "row": 95, "col": 264 }, { "row": 95, "col": 265 }, { "row": 95, "col": 266 }, { "row": 95, "col": 267 }, { "row": 95, "col": 268 }, { "row": 95, "col": 269 }, { "row": 95, "col": 270 }, { "row": 96, "col": 264 }, { "row": 96, "col": 265 }, { "row": 96, "col": 266 }, { "row": 96, "col": 267 }, { "row": 96, "col": 268 }, { "row": 96, "col": 269 }, { "row": 96, "col": 270 }, { "row": 97, "col": 264 }, { "row": 97, "col": 265 }, { "row": 97, "col": 266 }, { "row": 97, "col": 267 }, { "row": 97, "col": 268 }, { "row": 97, "col": 269 }, { "row": 97, "col": 270 }, { "row": 98, "col": 264 }, { "row": 98, "col": 265 }, { "row": 98, "col": 266 }, { "row": 98, "col": 267 }, { "row": 98, "col": 268 }, { "row": 98, "col": 269 }, { "row": 98, "col": 270 }, { "row": 99, "col": 264 }, { "row": 99, "col": 265 }, { "row": 99, "col": 266 }, { "row": 99, "col": 267 }, { "row": 99, "col": 268 }, { "row": 99, "col": 269 }, { "row": 99, "col": 270 }, { "row": 100, "col": 263 }, { "row": 100, "col": 264 }, { "row": 100, "col": 265 }, { "row": 100, "col": 266 }, { "row": 100, "col": 267 }, { "row": 100, "col": 268 }, { "row": 100, "col": 269 }, { "row": 101, "col": 263 }, { "row": 101, "col": 264 }, { "row": 101, "col": 265 }, { "row": 101, "col": 266 }, { "row": 101, "col": 267 }, { "row": 101, "col": 268 }, { "row": 101, "col": 269 }, { "row": 102, "col": 263 }, { "row": 102, "col": 264 }, { "row": 102, "col": 265 }, { "row": 102, "col": 266 }, { "row": 102, "col": 267 }, { "row": 102, "col": 268 }, { "row": 102, "col": 269 }, { "row": 103, "col": 263 }, { "row": 103, "col": 264 }, { "row": 103, "col": 265 }, { "row": 103, "col": 266 }, { "row": 103, "col": 267 }, { "row": 103, "col": 268 }, { "row": 103, "col": 269 }, { "row": 104, "col": 263 }, { "row": 104, "col": 264 }, { "row": 104, "col": 265 }, { "row": 104, "col": 266 }, { "row": 104, "col": 267 }, { "row": 104, "col": 268 }, { "row": 104, "col": 269 }, { "row": 105, "col": 263 }, { "row": 105, "col": 264 }, { "row": 105, "col": 265 }, { "row": 105, "col": 266 }, { "row": 105, "col": 267 }, { "row": 105, "col": 268 }, { "row": 105, "col": 269 }, { "row": 106, "col": 263 }, { "row": 106, "col": 264 }, { "row": 106, "col": 265 }, { "row": 106, "col": 266 }, { "row": 106, "col": 267 }, { "row": 106, "col": 268 }, { "row": 106, "col": 269 }, { "row": 107, "col": 263 }, { "row": 107, "col": 264 }, { "row": 107, "col": 265 }, { "row": 107, "col": 266 }, { "row": 107, "col": 267 }, { "row": 107, "col": 268 }, { "row": 107, "col": 269 }, { "row": 108, "col": 263 }, { "row": 108, "col": 264 }, { "row": 108, "col": 265 }, { "row": 108, "col": 266 }, { "row": 108, "col": 267 }, { "row": 108, "col": 268 }, { "row": 108, "col": 269 }, { "row": 109, "col": 263 }, { "row": 109, "col": 264 }, { "row": 109, "col": 265 }, { "row": 109, "col": 266 }, { "row": 109, "col": 267 }, { "row": 109, "col": 268 }, { "row": 109, "col": 269 }, { "row": 110, "col": 263 }, { "row": 110, "col": 264 }, { "row": 110, "col": 265 }, { "row": 110, "col": 266 }, { "row": 110, "col": 267 }, { "row": 110, "col": 268 }, { "row": 110, "col": 269 }, { "row": 111, "col": 263 }, { "row": 111, "col": 264 }, { "row": 111, "col": 265 }, { "row": 111, "col": 266 }, { "row": 111, "col": 267 }, { "row": 111, "col": 268 }, { "row": 111, "col": 269 }, { "row": 112, "col": 263 }, { "row": 112, "col": 264 }, { "row": 112, "col": 265 }, { "row": 112, "col": 266 }, { "row": 112, "col": 267 }, { "row": 112, "col": 268 }, { "row": 112, "col": 269 }, { "row": 113, "col": 263 }, { "row": 113, "col": 264 }, { "row": 113, "col": 265 }, { "row": 113, "col": 266 }, { "row": 113, "col": 267 }, { "row": 113, "col": 268 }, { "row": 113, "col": 269 }, { "row": 114, "col": 263 }, { "row": 114, "col": 264 }, { "row": 114, "col": 265 }, { "row": 114, "col": 266 }, { "row": 114, "col": 267 }, { "row": 114, "col": 268 }, { "row": 114, "col": 269 }, { "row": 115, "col": 263 }, { "row": 115, "col": 264 }, { "row": 115, "col": 265 }, { "row": 115, "col": 266 }, { "row": 115, "col": 267 }, { "row": 115, "col": 268 }, { "row": 115, "col": 269 }, { "row": 116, "col": 263 }, { "row": 116, "col": 264 }, { "row": 116, "col": 265 }, { "row": 116, "col": 266 }, { "row": 116, "col": 267 }, { "row": 116, "col": 268 }, { "row": 116, "col": 269 }, { "row": 117, "col": 263 }, { "row": 117, "col": 264 }, { "row": 117, "col": 265 }, { "row": 117, "col": 266 }, { "row": 117, "col": 267 }, { "row": 117, "col": 268 }, { "row": 117, "col": 269 }, { "row": 118, "col": 263 }, { "row": 118, "col": 264 }, { "row": 118, "col": 265 }, { "row": 118, "col": 266 }, { "row": 118, "col": 267 }, { "row": 118, "col": 268 }, { "row": 118, "col": 269 }, { "row": 119, "col": 263 }, { "row": 119, "col": 264 }, { "row": 119, "col": 265 }, { "row": 119, "col": 266 }, { "row": 119, "col": 267 }, { "row": 119, "col": 268 }, { "row": 119, "col": 269 }, { "row": 120, "col": 263 }, { "row": 120, "col": 264 }, { "row": 120, "col": 265 }, { "row": 120, "col": 266 }, { "row": 120, "col": 267 }, { "row": 120, "col": 268 }, { "row": 120, "col": 269 }, { "row": 121, "col": 263 }, { "row": 121, "col": 264 }, { "row": 121, "col": 265 }, { "row": 121, "col": 266 }, { "row": 121, "col": 267 }, { "row": 121, "col": 268 }, { "row": 121, "col": 269 }, { "row": 122, "col": 263 }, { "row": 122, "col": 264 }, { "row": 122, "col": 265 }, { "row": 122, "col": 266 }, { "row": 122, "col": 267 }, { "row": 122, "col": 268 }, { "row": 122, "col": 269 }, { "row": 123, "col": 262 }, { "row": 123, "col": 263 }, { "row": 123, "col": 264 }, { "row": 123, "col": 265 }, { "row": 123, "col": 266 }, { "row": 123, "col": 267 }, { "row": 123, "col": 268 }, { "row": 123, "col": 269 }, { "row": 124, "col": 262 }, { "row": 124, "col": 263 }, { "row": 124, "col": 264 }, { "row": 124, "col": 265 }, { "row": 124, "col": 266 }, { "row": 124, "col": 267 }, { "row": 124, "col": 268 }, { "row": 125, "col": 262 }, { "row": 125, "col": 263 }, { "row": 125, "col": 264 }, { "row": 125, "col": 265 }, { "row": 125, "col": 266 }, { "row": 125, "col": 267 }, { "row": 125, "col": 268 }, { "row": 126, "col": 262 }, { "row": 126, "col": 263 }, { "row": 126, "col": 264 }, { "row": 126, "col": 265 }, { "row": 126, "col": 266 }, { "row": 126, "col": 267 }, { "row": 126, "col": 268 }, { "row": 127, "col": 262 }, { "row": 127, "col": 263 }, { "row": 127, "col": 264 }, { "row": 127, "col": 265 }, { "row": 127, "col": 266 }, { "row": 127, "col": 267 }, { "row": 127, "col": 268 }, { "row": 128, "col": 262 }, { "row": 128, "col": 263 }, { "row": 128, "col": 264 }, { "row": 128, "col": 265 }, { "row": 128, "col": 266 }, { "row": 128, "col": 267 }, { "row": 128, "col": 268 }, { "row": 129, "col": 262 }, { "row": 129, "col": 263 }, { "row": 129, "col": 264 }, { "row": 129, "col": 265 }, { "row": 129, "col": 266 }, { "row": 129, "col": 267 }, { "row": 129, "col": 268 }, { "row": 130, "col": 262 }, { "row": 130, "col": 263 }, { "row": 130, "col": 264 }, { "row": 130, "col": 265 }, { "row": 130, "col": 266 }, { "row": 130, "col": 267 }, { "row": 130, "col": 268 }, { "row": 131, "col": 262 }, { "row": 131, "col": 263 }, { "row": 131, "col": 264 }, { "row": 131, "col": 265 }, { "row": 131, "col": 266 }, { "row": 131, "col": 267 }, { "row": 131, "col": 268 }, { "row": 132, "col": 262 }, { "row": 132, "col": 263 }, { "row": 132, "col": 264 }, { "row": 132, "col": 265 }, { "row": 132, "col": 266 }, { "row": 132, "col": 267 }, { "row": 132, "col": 268 }, { "row": 133, "col": 262 }, { "row": 133, "col": 263 }, { "row": 133, "col": 264 }, { "row": 133, "col": 265 }, { "row": 133, "col": 266 }, { "row": 133, "col": 267 }, { "row": 133, "col": 268 }, { "row": 134, "col": 262 }, { "row": 134, "col": 263 }, { "row": 134, "col": 264 }, { "row": 134, "col": 265 }, { "row": 134, "col": 266 }, { "row": 134, "col": 267 }, { "row": 134, "col": 268 }, { "row": 135, "col": 262 }, { "row": 135, "col": 263 }, { "row": 135, "col": 264 }, { "row": 135, "col": 265 }, { "row": 135, "col": 266 }, { "row": 135, "col": 267 }, { "row": 135, "col": 268 }, { "row": 136, "col": 262 }, { "row": 136, "col": 263 }, { "row": 136, "col": 264 }, { "row": 136, "col": 265 }, { "row": 136, "col": 266 }, { "row": 136, "col": 267 }, { "row": 136, "col": 268 }, { "row": 137, "col": 262 }, { "row": 137, "col": 263 }, { "row": 137, "col": 264 }, { "row": 137, "col": 265 }, { "row": 137, "col": 266 }, { "row": 137, "col": 267 }, { "row": 137, "col": 268 }, { "row": 138, "col": 262 }, { "row": 138, "col": 263 }, { "row": 138, "col": 264 }, { "row": 138, "col": 265 }, { "row": 138, "col": 266 }, { "row": 138, "col": 267 }, { "row": 138, "col": 268 }, { "row": 139, "col": 262 }, { "row": 139, "col": 263 }, { "row": 139, "col": 264 }, { "row": 139, "col": 265 }, { "row": 139, "col": 266 }, { "row": 139, "col": 267 }, { "row": 139, "col": 268 }, { "row": 140, "col": 262 }, { "row": 140, "col": 263 }, { "row": 140, "col": 264 }, { "row": 140, "col": 265 }, { "row": 140, "col": 266 }, { "row": 140, "col": 267 }, { "row": 140, "col": 268 }, { "row": 141, "col": 262 }, { "row": 141, "col": 263 }, { "row": 141, "col": 264 }, { "row": 141, "col": 265 }, { "row": 141, "col": 266 }, { "row": 141, "col": 267 }, { "row": 141, "col": 268 }, { "row": 142, "col": 262 }, { "row": 142, "col": 263 }, { "row": 142, "col": 264 }, { "row": 142, "col": 265 }, { "row": 142, "col": 266 }, { "row": 142, "col": 267 }, { "row": 142, "col": 268 }, { "row": 143, "col": 262 }, { "row": 143, "col": 263 }, { "row": 143, "col": 264 }, { "row": 143, "col": 265 }, { "row": 143, "col": 266 }, { "row": 143, "col": 267 }, { "row": 143, "col": 268 }, { "row": 144, "col": 262 }, { "row": 144, "col": 263 }, { "row": 144, "col": 264 }, { "row": 144, "col": 265 }, { "row": 144, "col": 266 }, { "row": 144, "col": 267 }, { "row": 144, "col": 268 }, { "row": 145, "col": 262 }, { "row": 145, "col": 263 }, { "row": 145, "col": 264 }, { "row": 145, "col": 265 }, { "row": 145, "col": 266 }, { "row": 145, "col": 267 }, { "row": 145, "col": 268 }, { "row": 146, "col": 262 }, { "row": 146, "col": 263 }, { "row": 146, "col": 264 }, { "row": 146, "col": 265 }, { "row": 146, "col": 266 }, { "row": 146, "col": 267 }, { "row": 146, "col": 268 }, { "row": 147, "col": 261 }, { "row": 147, "col": 262 }, { "row": 147, "col": 263 }, { "row": 147, "col": 264 }, { "row": 147, "col": 265 }, { "row": 147, "col": 266 }, { "row": 147, "col": 267 }, { "row": 147, "col": 268 }, { "row": 148, "col": 261 }, { "row": 148, "col": 262 }, { "row": 148, "col": 263 }, { "row": 148, "col": 264 }, { "row": 148, "col": 265 }, { "row": 148, "col": 266 }, { "row": 148, "col": 267 }, { "row": 149, "col": 261 }, { "row": 149, "col": 262 }, { "row": 149, "col": 263 }, { "row": 149, "col": 264 }, { "row": 149, "col": 265 }, { "row": 149, "col": 266 }, { "row": 149, "col": 267 }, { "row": 150, "col": 261 }, { "row": 150, "col": 262 }, { "row": 150, "col": 263 }, { "row": 150, "col": 264 }, { "row": 150, "col": 265 }, { "row": 150, "col": 266 }, { "row": 150, "col": 267 }, { "row": 151, "col": 261 }, { "row": 151, "col": 262 }, { "row": 151, "col": 263 }, { "row": 151, "col": 264 }, { "row": 151, "col": 265 }, { "row": 151, "col": 266 }, { "row": 151, "col": 267 }, { "row": 152, "col": 261 }, { "row": 152, "col": 262 }, { "row": 152, "col": 263 }, { "row": 152, "col": 264 }, { "row": 152, "col": 265 }, { "row": 152, "col": 266 }, { "row": 152, "col": 267 }, { "row": 153, "col": 261 }, { "row": 153, "col": 262 }, { "row": 153, "col": 263 }, { "row": 153, "col": 264 }, { "row": 153, "col": 265 }, { "row": 153, "col": 266 }, { "row": 153, "col": 267 }, { "row": 154, "col": 261 }, { "row": 154, "col": 262 }, { "row": 154, "col": 263 }, { "row": 154, "col": 264 }, { "row": 154, "col": 265 }, { "row": 154, "col": 266 }, { "row": 154, "col": 267 }, { "row": 155, "col": 261 }, { "row": 155, "col": 262 }, { "row": 155, "col": 263 }, { "row": 155, "col": 264 }, { "row": 155, "col": 265 }, { "row": 155, "col": 266 }, { "row": 155, "col": 267 }, { "row": 156, "col": 261 }, { "row": 156, "col": 262 }, { "row": 156, "col": 263 }, { "row": 156, "col": 264 }, { "row": 156, "col": 265 }, { "row": 156, "col": 266 }, { "row": 156, "col": 267 }, { "row": 157, "col": 261 }, { "row": 157, "col": 262 }, { "row": 157, "col": 263 }, { "row": 157, "col": 264 }, { "row": 157, "col": 265 }, { "row": 157, "col": 266 }, { "row": 157, "col": 267 }, { "row": 158, "col": 261 }, { "row": 158, "col": 262 }, { "row": 158, "col": 263 }, { "row": 158, "col": 264 }, { "row": 158, "col": 265 }, { "row": 158, "col": 266 }, { "row": 158, "col": 267 }, { "row": 159, "col": 261 }, { "row": 159, "col": 262 }, { "row": 159, "col": 263 }, { "row": 159, "col": 264 }, { "row": 159, "col": 265 }, { "row": 159, "col": 266 }, { "row": 159, "col": 267 }, { "row": 160, "col": 261 }, { "row": 160, "col": 262 }, { "row": 160, "col": 263 }, { "row": 160, "col": 264 }, { "row": 160, "col": 265 }, { "row": 160, "col": 266 }, { "row": 160, "col": 267 }, { "row": 161, "col": 261 }, { "row": 161, "col": 262 }, { "row": 161, "col": 263 }, { "row": 161, "col": 264 }, { "row": 161, "col": 265 }, { "row": 161, "col": 266 }, { "row": 161, "col": 267 }, { "row": 162, "col": 261 }, { "row": 162, "col": 262 }, { "row": 162, "col": 263 }, { "row": 162, "col": 264 }, { "row": 162, "col": 265 }, { "row": 162, "col": 266 }, { "row": 162, "col": 267 }, { "row": 163, "col": 261 }, { "row": 163, "col": 262 }, { "row": 163, "col": 263 }, { "row": 163, "col": 264 }, { "row": 163, "col": 265 }, { "row": 163, "col": 266 }, { "row": 163, "col": 267 }, { "row": 164, "col": 261 }, { "row": 164, "col": 262 }, { "row": 164, "col": 263 }, { "row": 164, "col": 264 }, { "row": 164, "col": 265 }, { "row": 164, "col": 266 }, { "row": 164, "col": 267 }, { "row": 165, "col": 261 }, { "row": 165, "col": 262 }, { "row": 165, "col": 263 }, { "row": 165, "col": 264 }, { "row": 165, "col": 265 }, { "row": 165, "col": 266 }, { "row": 165, "col": 267 }, { "row": 166, "col": 261 }, { "row": 166, "col": 262 }, { "row": 166, "col": 263 }, { "row": 166, "col": 264 }, { "row": 166, "col": 265 }, { "row": 166, "col": 266 }, { "row": 166, "col": 267 }, { "row": 167, "col": 261 }, { "row": 167, "col": 262 }, { "row": 167, "col": 263 }, { "row": 167, "col": 264 }, { "row": 167, "col": 265 }, { "row": 167, "col": 266 }, { "row": 167, "col": 267 }, { "row": 168, "col": 261 }, { "row": 168, "col": 262 }, { "row": 168, "col": 263 }, { "row": 168, "col": 264 }, { "row": 168, "col": 265 }, { "row": 168, "col": 266 }, { "row": 168, "col": 267 }, { "row": 169, "col": 261 }, { "row": 169, "col": 262 }, { "row": 169, "col": 263 }, { "row": 169, "col": 264 }, { "row": 169, "col": 265 }, { "row": 169, "col": 266 }, { "row": 169, "col": 267 }, { "row": 170, "col": 260 }, { "row": 170, "col": 261 }, { "row": 170, "col": 262 }, { "row": 170, "col": 263 }, { "row": 170, "col": 264 }, { "row": 170, "col": 265 }, { "row": 170, "col": 266 }, { "row": 170, "col": 267 }, { "row": 74, "col": 147 }, { "row": 74, "col": 148 }, { "row": 73, "col": 150 }, { "row": 73, "col": 151 }, { "row": 73, "col": 152 }, { "row": 73, "col": 153 }, { "row": 72, "col": 156 }, { "row": 72, "col": 157 }, { "row": 72, "col": 158 }, { "row": 71, "col": 162 }, { "row": 71, "col": 161 }, { "row": 71, "col": 160 }, { "row": 71, "col": 159 }, { "row": 71, "col": 158 }, { "row": 71, "col": 157 }, { "row": 71, "col": 156 }, { "row": 71, "col": 155 }, { "row": 72, "col": 155 }, { "row": 72, "col": 154 }, { "row": 72, "col": 153 }, { "row": 72, "col": 152 }, { "row": 73, "col": 149 }, { "row": 73, "col": 148 }, { "row": 77, "col": 159 }, { "row": 87, "col": 138 }, { "row": 86, "col": 126 }, { "row": 86, "col": 127 }, { "row": 86, "col": 128 }, { "row": 87, "col": 122 }, { "row": 87, "col": 123 }, { "row": 87, "col": 124 }, { "row": 87, "col": 125 }, { "row": 87, "col": 126 }, { "row": 87, "col": 127 }, { "row": 88, "col": 118 }, { "row": 88, "col": 119 }, { "row": 88, "col": 120 }, { "row": 88, "col": 121 }, { "row": 88, "col": 122 }, { "row": 88, "col": 123 }, { "row": 88, "col": 124 }, { "row": 88, "col": 125 }, { "row": 88, "col": 126 }, { "row": 89, "col": 115 }, { "row": 89, "col": 116 }, { "row": 89, "col": 117 }, { "row": 89, "col": 118 }, { "row": 89, "col": 119 }, { "row": 89, "col": 120 }, { "row": 89, "col": 121 }, { "row": 89, "col": 122 }, { "row": 89, "col": 123 }, { "row": 89, "col": 124 }, { "row": 89, "col": 125 }, { "row": 89, "col": 126 }, { "row": 90, "col": 111 }, { "row": 90, "col": 112 }, { "row": 90, "col": 113 }, { "row": 90, "col": 114 }, { "row": 90, "col": 115 }, { "row": 90, "col": 116 }, { "row": 90, "col": 117 }, { "row": 90, "col": 118 }, { "row": 90, "col": 119 }, { "row": 90, "col": 120 }, { "row": 90, "col": 121 }, { "row": 90, "col": 122 }, { "row": 90, "col": 123 }, { "row": 90, "col": 124 }, { "row": 90, "col": 125 }, { "row": 91, "col": 107 }, { "row": 91, "col": 108 }, { "row": 91, "col": 109 }, { "row": 91, "col": 110 }, { "row": 91, "col": 111 }, { "row": 91, "col": 112 }, { "row": 91, "col": 113 }, { "row": 91, "col": 114 }, { "row": 91, "col": 115 }, { "row": 91, "col": 116 }, { "row": 91, "col": 117 }, { "row": 91, "col": 118 }, { "row": 91, "col": 119 }, { "row": 91, "col": 120 }, { "row": 91, "col": 121 }, { "row": 91, "col": 122 }, { "row": 91, "col": 123 }, { "row": 91, "col": 124 }, { "row": 92, "col": 102 }, { "row": 92, "col": 103 }, { "row": 92, "col": 104 }, { "row": 92, "col": 105 }, { "row": 92, "col": 106 }, { "row": 92, "col": 107 }, { "row": 92, "col": 108 }, { "row": 92, "col": 109 }, { "row": 92, "col": 110 }, { "row": 92, "col": 111 }, { "row": 92, "col": 112 }, { "row": 92, "col": 113 }, { "row": 92, "col": 114 }, { "row": 92, "col": 115 }, { "row": 92, "col": 116 }, { "row": 92, "col": 117 }, { "row": 92, "col": 118 }, { "row": 92, "col": 119 }, { "row": 92, "col": 120 }, { "row": 92, "col": 121 }, { "row": 92, "col": 122 }, { "row": 92, "col": 123 }, { "row": 93, "col": 97 }, { "row": 93, "col": 98 }, { "row": 93, "col": 99 }, { "row": 93, "col": 100 }, { "row": 93, "col": 101 }, { "row": 93, "col": 102 }, { "row": 93, "col": 103 }, { "row": 93, "col": 104 }, { "row": 93, "col": 105 }, { "row": 93, "col": 106 }, { "row": 93, "col": 107 }, { "row": 93, "col": 108 }, { "row": 93, "col": 109 }, { "row": 93, "col": 110 }, { "row": 93, "col": 111 }, { "row": 93, "col": 112 }, { "row": 93, "col": 113 }, { "row": 93, "col": 114 }, { "row": 93, "col": 115 }, { "row": 93, "col": 116 }, { "row": 93, "col": 117 }, { "row": 93, "col": 118 }, { "row": 93, "col": 119 }, { "row": 93, "col": 120 }, { "row": 93, "col": 121 }, { "row": 94, "col": 93 }, { "row": 94, "col": 94 }, { "row": 94, "col": 95 }, { "row": 94, "col": 96 }, { "row": 94, "col": 97 }, { "row": 94, "col": 98 }, { "row": 94, "col": 99 }, { "row": 94, "col": 100 }, { "row": 94, "col": 101 }, { "row": 94, "col": 102 }, { "row": 94, "col": 103 }, { "row": 94, "col": 104 }, { "row": 94, "col": 105 }, { "row": 94, "col": 106 }, { "row": 94, "col": 107 }, { "row": 94, "col": 108 }, { "row": 94, "col": 109 }, { "row": 94, "col": 110 }, { "row": 94, "col": 111 }, { "row": 94, "col": 112 }, { "row": 94, "col": 113 }, { "row": 94, "col": 114 }, { "row": 94, "col": 115 }, { "row": 94, "col": 116 }, { "row": 94, "col": 117 }, { "row": 94, "col": 118 }, { "row": 94, "col": 119 }, { "row": 94, "col": 120 }, { "row": 95, "col": 89 }, { "row": 95, "col": 90 }, { "row": 95, "col": 91 }, { "row": 95, "col": 92 }, { "row": 95, "col": 93 }, { "row": 95, "col": 94 }, { "row": 95, "col": 95 }, { "row": 95, "col": 97 }, { "row": 95, "col": 98 }, { "row": 95, "col": 99 }, { "row": 95, "col": 100 }, { "row": 95, "col": 101 }, { "row": 95, "col": 102 }, { "row": 95, "col": 103 }, { "row": 95, "col": 104 }, { "row": 95, "col": 105 }, { "row": 95, "col": 106 }, { "row": 95, "col": 107 }, { "row": 95, "col": 108 }, { "row": 95, "col": 109 }, { "row": 95, "col": 110 }, { "row": 95, "col": 111 }, { "row": 95, "col": 112 }, { "row": 95, "col": 113 }, { "row": 95, "col": 114 }, { "row": 95, "col": 115 }, { "row": 95, "col": 116 }, { "row": 95, "col": 117 }, { "row": 95, "col": 118 }, { "row": 95, "col": 119 }, { "row": 96, "col": 80 }, { "row": 96, "col": 81 }, { "row": 96, "col": 82 }, { "row": 96, "col": 83 }, { "row": 96, "col": 84 }, { "row": 96, "col": 85 }, { "row": 96, "col": 86 }, { "row": 96, "col": 87 }, { "row": 96, "col": 88 }, { "row": 96, "col": 89 }, { "row": 96, "col": 90 }, { "row": 96, "col": 91 }, { "row": 96, "col": 92 }, { "row": 96, "col": 93 }, { "row": 96, "col": 105 }, { "row": 96, "col": 106 }, { "row": 96, "col": 107 }, { "row": 96, "col": 108 }, { "row": 96, "col": 109 }, { "row": 96, "col": 110 }, { "row": 96, "col": 111 }, { "row": 96, "col": 112 }, { "row": 96, "col": 113 }, { "row": 96, "col": 114 }, { "row": 96, "col": 115 }, { "row": 96, "col": 116 }, { "row": 96, "col": 117 }, { "row": 97, "col": 80 }, { "row": 97, "col": 81 }, { "row": 97, "col": 82 }, { "row": 97, "col": 83 }, { "row": 97, "col": 84 }, { "row": 97, "col": 85 }, { "row": 97, "col": 86 }, { "row": 97, "col": 87 }, { "row": 97, "col": 88 }, { "row": 97, "col": 89 }, { "row": 97, "col": 90 }, { "row": 97, "col": 91 }, { "row": 97, "col": 108 }, { "row": 97, "col": 109 }, { "row": 97, "col": 110 }, { "row": 97, "col": 111 }, { "row": 97, "col": 112 }, { "row": 97, "col": 113 }, { "row": 97, "col": 114 }, { "row": 97, "col": 115 }, { "row": 97, "col": 116 }, { "row": 97, "col": 117 }, { "row": 98, "col": 79 }, { "row": 98, "col": 80 }, { "row": 98, "col": 81 }, { "row": 98, "col": 82 }, { "row": 98, "col": 83 }, { "row": 98, "col": 84 }, { "row": 98, "col": 85 }, { "row": 98, "col": 86 }, { "row": 98, "col": 87 }, { "row": 98, "col": 88 }, { "row": 98, "col": 107 }, { "row": 98, "col": 108 }, { "row": 98, "col": 109 }, { "row": 98, "col": 110 }, { "row": 98, "col": 111 }, { "row": 98, "col": 112 }, { "row": 98, "col": 113 }, { "row": 98, "col": 114 }, { "row": 98, "col": 115 }, { "row": 98, "col": 116 }, { "row": 99, "col": 79 }, { "row": 99, "col": 80 }, { "row": 99, "col": 81 }, { "row": 99, "col": 82 }, { "row": 99, "col": 83 }, { "row": 99, "col": 84 }, { "row": 99, "col": 85 }, { "row": 99, "col": 86 }, { "row": 99, "col": 106 }, { "row": 99, "col": 107 }, { "row": 99, "col": 108 }, { "row": 99, "col": 109 }, { "row": 99, "col": 110 }, { "row": 99, "col": 111 }, { "row": 99, "col": 112 }, { "row": 99, "col": 113 }, { "row": 99, "col": 114 }, { "row": 99, "col": 115 }, { "row": 99, "col": 116 }, { "row": 100, "col": 79 }, { "row": 100, "col": 80 }, { "row": 100, "col": 81 }, { "row": 100, "col": 82 }, { "row": 100, "col": 83 }, { "row": 100, "col": 84 }, { "row": 100, "col": 85 }, { "row": 100, "col": 107 }, { "row": 100, "col": 108 }, { "row": 100, "col": 109 }, { "row": 100, "col": 110 }, { "row": 100, "col": 111 }, { "row": 100, "col": 112 }, { "row": 100, "col": 113 }, { "row": 100, "col": 114 }, { "row": 100, "col": 115 }, { "row": 101, "col": 78 }, { "row": 101, "col": 79 }, { "row": 101, "col": 80 }, { "row": 101, "col": 81 }, { "row": 101, "col": 82 }, { "row": 101, "col": 83 }, { "row": 101, "col": 84 }, { "row": 101, "col": 108 }, { "row": 101, "col": 109 }, { "row": 101, "col": 110 }, { "row": 101, "col": 111 }, { "row": 101, "col": 112 }, { "row": 101, "col": 113 }, { "row": 101, "col": 114 }, { "row": 101, "col": 115 }, { "row": 102, "col": 77 }, { "row": 102, "col": 78 }, { "row": 102, "col": 79 }, { "row": 102, "col": 80 }, { "row": 102, "col": 81 }, { "row": 102, "col": 82 }, { "row": 102, "col": 83 }, { "row": 102, "col": 109 }, { "row": 102, "col": 110 }, { "row": 102, "col": 111 }, { "row": 102, "col": 112 }, { "row": 102, "col": 113 }, { "row": 102, "col": 114 }, { "row": 103, "col": 77 }, { "row": 103, "col": 78 }, { "row": 103, "col": 79 }, { "row": 103, "col": 80 }, { "row": 103, "col": 81 }, { "row": 103, "col": 110 }, { "row": 103, "col": 111 }, { "row": 103, "col": 112 }, { "row": 103, "col": 113 }, { "row": 103, "col": 114 }, { "row": 104, "col": 77 }, { "row": 104, "col": 78 }, { "row": 104, "col": 79 }, { "row": 104, "col": 80 }, { "row": 104, "col": 81 }, { "row": 104, "col": 110 }, { "row": 104, "col": 111 }, { "row": 104, "col": 112 }, { "row": 104, "col": 113 }, { "row": 105, "col": 77 }, { "row": 105, "col": 78 }, { "row": 105, "col": 79 }, { "row": 105, "col": 80 }, { "row": 105, "col": 110 }, { "row": 105, "col": 111 }, { "row": 105, "col": 112 }, { "row": 106, "col": 76 }, { "row": 106, "col": 77 }, { "row": 106, "col": 78 }, { "row": 106, "col": 79 }, { "row": 106, "col": 80 }, { "row": 106, "col": 111 }, { "row": 106, "col": 112 }, { "row": 107, "col": 76 }, { "row": 107, "col": 77 }, { "row": 107, "col": 78 }, { "row": 107, "col": 79 }, { "row": 107, "col": 80 }, { "row": 107, "col": 111 }, { "row": 107, "col": 112 }, { "row": 108, "col": 75 }, { "row": 108, "col": 76 }, { "row": 108, "col": 77 }, { "row": 108, "col": 78 }, { "row": 108, "col": 79 }, { "row": 108, "col": 80 }, { "row": 109, "col": 75 }, { "row": 109, "col": 76 }, { "row": 109, "col": 77 }, { "row": 109, "col": 78 }, { "row": 109, "col": 79 }, { "row": 109, "col": 80 }, { "row": 110, "col": 76 }, { "row": 110, "col": 77 }, { "row": 110, "col": 78 }, { "row": 110, "col": 79 }, { "row": 110, "col": 80 }, { "row": 111, "col": 76 }, { "row": 111, "col": 77 }, { "row": 111, "col": 78 }, { "row": 111, "col": 79 }, { "row": 111, "col": 80 }, { "row": 112, "col": 77 }, { "row": 112, "col": 78 }, { "row": 112, "col": 79 }, { "row": 112, "col": 80 }, { "row": 112, "col": 81 }, { "row": 113, "col": 78 }, { "row": 113, "col": 79 }, { "row": 113, "col": 80 }, { "row": 113, "col": 81 }, { "row": 113, "col": 82 }, { "row": 114, "col": 78 }, { "row": 114, "col": 79 }, { "row": 114, "col": 80 }, { "row": 114, "col": 81 }, { "row": 114, "col": 82 }, { "row": 114, "col": 83 }, { "row": 115, "col": 79 }, { "row": 115, "col": 80 }, { "row": 115, "col": 81 }, { "row": 115, "col": 82 }, { "row": 115, "col": 83 }, { "row": 116, "col": 79 }, { "row": 116, "col": 80 }, { "row": 116, "col": 81 }, { "row": 116, "col": 82 }, { "row": 116, "col": 83 }, { "row": 116, "col": 84 }, { "row": 116, "col": 85 }, { "row": 117, "col": 80 }, { "row": 117, "col": 81 }, { "row": 117, "col": 82 }, { "row": 117, "col": 83 }, { "row": 117, "col": 84 }, { "row": 117, "col": 85 }, { "row": 117, "col": 86 }, { "row": 118, "col": 81 }, { "row": 118, "col": 82 }, { "row": 118, "col": 83 }, { "row": 118, "col": 84 }, { "row": 118, "col": 85 }, { "row": 118, "col": 86 }, { "row": 118, "col": 87 }, { "row": 119, "col": 82 }, { "row": 119, "col": 83 }, { "row": 119, "col": 84 }, { "row": 119, "col": 85 }, { "row": 119, "col": 86 }, { "row": 119, "col": 87 }, { "row": 119, "col": 88 }, { "row": 120, "col": 83 }, { "row": 120, "col": 84 }, { "row": 120, "col": 85 }, { "row": 120, "col": 86 }, { "row": 120, "col": 87 }, { "row": 120, "col": 88 }, { "row": 120, "col": 89 }, { "row": 121, "col": 84 }, { "row": 121, "col": 85 }, { "row": 121, "col": 86 }, { "row": 121, "col": 87 }, { "row": 121, "col": 88 }, { "row": 121, "col": 89 }, { "row": 121, "col": 90 }, { "row": 122, "col": 85 }, { "row": 122, "col": 86 }, { "row": 122, "col": 87 }, { "row": 122, "col": 88 }, { "row": 122, "col": 89 }, { "row": 122, "col": 90 }, { "row": 122, "col": 91 }, { "row": 123, "col": 86 }, { "row": 123, "col": 87 }, { "row": 123, "col": 88 }, { "row": 123, "col": 89 }, { "row": 123, "col": 90 }, { "row": 123, "col": 91 }, { "row": 123, "col": 92 }, { "row": 124, "col": 87 }, { "row": 124, "col": 88 }, { "row": 124, "col": 89 }, { "row": 124, "col": 90 }, { "row": 124, "col": 91 }, { "row": 124, "col": 92 }, { "row": 124, "col": 93 }, { "row": 125, "col": 88 }, { "row": 125, "col": 89 }, { "row": 125, "col": 90 }, { "row": 125, "col": 91 }, { "row": 125, "col": 92 }, { "row": 125, "col": 93 }, { "row": 125, "col": 94 }, { "row": 125, "col": 95 }, { "row": 126, "col": 89 }, { "row": 126, "col": 90 }, { "row": 126, "col": 91 }, { "row": 126, "col": 92 }, { "row": 126, "col": 93 }, { "row": 126, "col": 94 }, { "row": 126, "col": 95 }, { "row": 126, "col": 96 }, { "row": 127, "col": 90 }, { "row": 127, "col": 91 }, { "row": 127, "col": 92 }, { "row": 127, "col": 93 }, { "row": 127, "col": 94 }, { "row": 127, "col": 95 }, { "row": 127, "col": 96 }, { "row": 127, "col": 97 }, { "row": 127, "col": 98 }, { "row": 128, "col": 91 }, { "row": 128, "col": 92 }, { "row": 128, "col": 93 }, { "row": 128, "col": 94 }, { "row": 128, "col": 95 }, { "row": 128, "col": 96 }, { "row": 128, "col": 97 }, { "row": 128, "col": 98 }, { "row": 128, "col": 99 }, { "row": 129, "col": 92 }, { "row": 129, "col": 93 }, { "row": 129, "col": 94 }, { "row": 129, "col": 95 }, { "row": 129, "col": 96 }, { "row": 129, "col": 97 }, { "row": 129, "col": 98 }, { "row": 129, "col": 99 }, { "row": 130, "col": 93 }, { "row": 130, "col": 94 }, { "row": 130, "col": 95 }, { "row": 130, "col": 96 }, { "row": 130, "col": 97 }, { "row": 130, "col": 98 }, { "row": 130, "col": 99 }, { "row": 131, "col": 94 }, { "row": 131, "col": 95 }, { "row": 131, "col": 96 }, { "row": 131, "col": 97 }, { "row": 131, "col": 98 }, { "row": 131, "col": 99 }, { "row": 132, "col": 95 }, { "row": 132, "col": 96 }, { "row": 132, "col": 97 }, { "row": 132, "col": 98 }, { "row": 132, "col": 99 }, { "row": 133, "col": 96 }, { "row": 133, "col": 97 }, { "row": 133, "col": 98 }, { "row": 133, "col": 99 }, { "row": 134, "col": 96 }, { "row": 134, "col": 97 }, { "row": 134, "col": 98 }, { "row": 134, "col": 99 }, { "row": 135, "col": 97 }, { "row": 135, "col": 98 }, { "row": 135, "col": 99 }, { "row": 136, "col": 98 }, { "row": 136, "col": 99 }, { "row": 137, "col": 98 }, { "row": 137, "col": 99 }, { "row": 88, "col": 127 }, { "row": 96, "col": 103 }, { "row": 96, "col": 102 }, { "row": 96, "col": 104 }, { "row": 97, "col": 104 }, { "row": 97, "col": 105 }, { "row": 98, "col": 105 }, { "row": 98, "col": 106 }, { "row": 97, "col": 107 }, { "row": 97, "col": 106 }, { "row": 96, "col": 94 }, { "row": 96, "col": 95 }, { "row": 95, "col": 96 }, { "row": 98, "col": 89 }, { "row": 99, "col": 87 }, { "row": 100, "col": 87 }, { "row": 100, "col": 86 }, { "row": 101, "col": 85 }, { "row": 102, "col": 84 }, { "row": 103, "col": 82 }, { "row": 107, "col": 75 }, { "row": 107, "col": 74 }, { "row": 106, "col": 74 }, { "row": 105, "col": 74 }, { "row": 104, "col": 74 }, { "row": 104, "col": 75 }, { "row": 103, "col": 75 }, { "row": 103, "col": 76 }, { "row": 102, "col": 76 }, { "row": 101, "col": 77 }, { "row": 100, "col": 78 }, { "row": 99, "col": 78 }, { "row": 104, "col": 76 }, { "row": 105, "col": 76 }, { "row": 106, "col": 75 }, { "row": 105, "col": 75 }, { "row": 99, "col": 88 }, { "row": 98, "col": 90 }, { "row": 97, "col": 92 }, { "row": 96, "col": 96 }, { "row": 96, "col": 97 }, { "row": 96, "col": 98 }, { "row": 96, "col": 99 }, { "row": 96, "col": 100 }, { "row": 96, "col": 101 }, { "row": 98, "col": 104 }, { "row": 89, "col": 114 }, { "row": 87, "col": 120 }, { "row": 87, "col": 121 }, { "row": 86, "col": 123 }, { "row": 86, "col": 124 }, { "row": 86, "col": 125 }, { "row": 85, "col": 128 }, { "row": 84, "col": 130 }, { "row": 77, "col": 141 }, { "row": 77, "col": 140 }, { "row": 78, "col": 140 }, { "row": 78, "col": 139 }, { "row": 79, "col": 139 }, { "row": 79, "col": 138 }, { "row": 80, "col": 137 }, { "row": 70, "col": 172 }, { "row": 70, "col": 173 }, { "row": 70, "col": 174 }, { "row": 70, "col": 175 }, { "row": 70, "col": 176 }, { "row": 70, "col": 177 }, { "row": 70, "col": 178 }, { "row": 70, "col": 180 }, { "row": 70, "col": 181 }, { "row": 70, "col": 182 }, { "row": 70, "col": 183 }, { "row": 70, "col": 184 }, { "row": 70, "col": 185 }, { "row": 70, "col": 186 }, { "row": 70, "col": 187 }, { "row": 70, "col": 188 }, { "row": 70, "col": 189 }, { "row": 70, "col": 190 }, { "row": 70, "col": 191 }, { "row": 70, "col": 192 }, { "row": 70, "col": 193 }, { "row": 70, "col": 194 }, { "row": 70, "col": 195 }, { "row": 70, "col": 196 }, { "row": 70, "col": 197 }, { "row": 70, "col": 199 }, { "row": 70, "col": 217 }, { "row": 70, "col": 216 }, { "row": 70, "col": 215 }, { "row": 70, "col": 214 }, { "row": 70, "col": 200 }, { "row": 70, "col": 201 }, { "row": 70, "col": 202 }, { "row": 70, "col": 203 }, { "row": 70, "col": 204 }, { "row": 70, "col": 205 }, { "row": 70, "col": 206 }, { "row": 70, "col": 207 }, { "row": 70, "col": 208 }, { "row": 70, "col": 209 }, { "row": 70, "col": 210 }, { "row": 70, "col": 211 }, { "row": 70, "col": 212 }, { "row": 70, "col": 213 }, { "row": 71, "col": 271 }, { "row": 71, "col": 272 }, { "row": 71, "col": 273 }, { "row": 71, "col": 274 }, { "row": 71, "col": 275 }, { "row": 71, "col": 276 }, { "row": 71, "col": 277 }, { "row": 71, "col": 278 }, { "row": 71, "col": 279 }, { "row": 71, "col": 280 }, { "row": 71, "col": 281 }, { "row": 71, "col": 282 }, { "row": 72, "col": 271 }, { "row": 72, "col": 272 }, { "row": 72, "col": 273 }, { "row": 72, "col": 274 }, { "row": 72, "col": 275 }, { "row": 72, "col": 276 }, { "row": 72, "col": 277 }, { "row": 72, "col": 278 }, { "row": 72, "col": 279 }, { "row": 72, "col": 280 }, { "row": 72, "col": 281 }, { "row": 72, "col": 282 }, { "row": 72, "col": 283 }, { "row": 72, "col": 284 }, { "row": 72, "col": 285 }, { "row": 72, "col": 286 }, { "row": 72, "col": 287 }, { "row": 72, "col": 288 }, { "row": 72, "col": 289 }, { "row": 72, "col": 290 }, { "row": 72, "col": 291 }, { "row": 72, "col": 292 }, { "row": 72, "col": 293 }, { "row": 72, "col": 294 }, { "row": 72, "col": 295 }, { "row": 72, "col": 296 }, { "row": 72, "col": 297 }, { "row": 72, "col": 298 }, { "row": 72, "col": 299 }, { "row": 72, "col": 300 }, { "row": 72, "col": 301 }, { "row": 72, "col": 302 }, { "row": 72, "col": 303 }, { "row": 72, "col": 304 }, { "row": 72, "col": 305 }, { "row": 72, "col": 306 }, { "row": 72, "col": 307 }, { "row": 72, "col": 308 }, { "row": 72, "col": 309 }, { "row": 72, "col": 310 }, { "row": 72, "col": 311 }, { "row": 72, "col": 312 }, { "row": 72, "col": 313 }, { "row": 72, "col": 314 }, { "row": 72, "col": 315 }, { "row": 72, "col": 316 }, { "row": 72, "col": 317 }, { "row": 72, "col": 318 }, { "row": 72, "col": 319 }, { "row": 72, "col": 320 }, { "row": 72, "col": 321 }, { "row": 72, "col": 322 }, { "row": 72, "col": 323 }, { "row": 72, "col": 324 }, { "row": 72, "col": 325 }, { "row": 72, "col": 326 }, { "row": 72, "col": 327 }, { "row": 72, "col": 328 }, { "row": 72, "col": 329 }, { "row": 72, "col": 330 }, { "row": 72, "col": 331 }, { "row": 72, "col": 332 }, { "row": 72, "col": 333 }, { "row": 72, "col": 334 }, { "row": 72, "col": 335 }, { "row": 72, "col": 336 }, { "row": 72, "col": 337 }, { "row": 73, "col": 271 }, { "row": 73, "col": 272 }, { "row": 73, "col": 273 }, { "row": 73, "col": 274 }, { "row": 73, "col": 275 }, { "row": 73, "col": 276 }, { "row": 73, "col": 277 }, { "row": 73, "col": 278 }, { "row": 73, "col": 279 }, { "row": 73, "col": 280 }, { "row": 73, "col": 281 }, { "row": 73, "col": 282 }, { "row": 73, "col": 283 }, { "row": 73, "col": 284 }, { "row": 73, "col": 285 }, { "row": 73, "col": 286 }, { "row": 73, "col": 287 }, { "row": 73, "col": 288 }, { "row": 73, "col": 289 }, { "row": 73, "col": 290 }, { "row": 73, "col": 291 }, { "row": 73, "col": 292 }, { "row": 73, "col": 293 }, { "row": 73, "col": 294 }, { "row": 73, "col": 295 }, { "row": 73, "col": 296 }, { "row": 73, "col": 297 }, { "row": 73, "col": 298 }, { "row": 73, "col": 299 }, { "row": 73, "col": 300 }, { "row": 73, "col": 301 }, { "row": 73, "col": 302 }, { "row": 73, "col": 303 }, { "row": 73, "col": 304 }, { "row": 73, "col": 305 }, { "row": 73, "col": 306 }, { "row": 73, "col": 307 }, { "row": 73, "col": 308 }, { "row": 73, "col": 309 }, { "row": 73, "col": 310 }, { "row": 73, "col": 311 }, { "row": 73, "col": 312 }, { "row": 73, "col": 313 }, { "row": 73, "col": 314 }, { "row": 73, "col": 315 }, { "row": 73, "col": 316 }, { "row": 73, "col": 317 }, { "row": 73, "col": 318 }, { "row": 73, "col": 319 }, { "row": 73, "col": 320 }, { "row": 73, "col": 321 }, { "row": 73, "col": 322 }, { "row": 73, "col": 323 }, { "row": 73, "col": 324 }, { "row": 73, "col": 325 }, { "row": 73, "col": 326 }, { "row": 73, "col": 327 }, { "row": 73, "col": 328 }, { "row": 73, "col": 329 }, { "row": 73, "col": 330 }, { "row": 73, "col": 331 }, { "row": 73, "col": 332 }, { "row": 73, "col": 333 }, { "row": 73, "col": 334 }, { "row": 73, "col": 335 }, { "row": 73, "col": 336 }, { "row": 73, "col": 337 }, { "row": 73, "col": 338 }, { "row": 74, "col": 271 }, { "row": 74, "col": 272 }, { "row": 74, "col": 273 }, { "row": 74, "col": 274 }, { "row": 74, "col": 275 }, { "row": 74, "col": 276 }, { "row": 74, "col": 277 }, { "row": 74, "col": 278 }, { "row": 74, "col": 279 }, { "row": 74, "col": 280 }, { "row": 74, "col": 281 }, { "row": 74, "col": 282 }, { "row": 74, "col": 283 }, { "row": 74, "col": 284 }, { "row": 74, "col": 285 }, { "row": 74, "col": 286 }, { "row": 74, "col": 287 }, { "row": 74, "col": 288 }, { "row": 74, "col": 289 }, { "row": 74, "col": 290 }, { "row": 74, "col": 291 }, { "row": 74, "col": 292 }, { "row": 74, "col": 293 }, { "row": 74, "col": 294 }, { "row": 74, "col": 295 }, { "row": 74, "col": 296 }, { "row": 74, "col": 297 }, { "row": 74, "col": 298 }, { "row": 74, "col": 299 }, { "row": 74, "col": 300 }, { "row": 74, "col": 301 }, { "row": 74, "col": 302 }, { "row": 74, "col": 303 }, { "row": 74, "col": 304 }, { "row": 74, "col": 305 }, { "row": 74, "col": 306 }, { "row": 74, "col": 307 }, { "row": 74, "col": 308 }, { "row": 74, "col": 309 }, { "row": 74, "col": 310 }, { "row": 74, "col": 311 }, { "row": 74, "col": 312 }, { "row": 74, "col": 313 }, { "row": 74, "col": 314 }, { "row": 74, "col": 315 }, { "row": 74, "col": 316 }, { "row": 74, "col": 317 }, { "row": 74, "col": 318 }, { "row": 74, "col": 319 }, { "row": 74, "col": 320 }, { "row": 74, "col": 321 }, { "row": 74, "col": 322 }, { "row": 74, "col": 323 }, { "row": 74, "col": 324 }, { "row": 74, "col": 325 }, { "row": 74, "col": 326 }, { "row": 74, "col": 327 }, { "row": 74, "col": 328 }, { "row": 74, "col": 329 }, { "row": 74, "col": 330 }, { "row": 74, "col": 331 }, { "row": 74, "col": 332 }, { "row": 74, "col": 333 }, { "row": 74, "col": 334 }, { "row": 74, "col": 335 }, { "row": 74, "col": 336 }, { "row": 74, "col": 337 }, { "row": 74, "col": 338 }, { "row": 75, "col": 271 }, { "row": 75, "col": 272 }, { "row": 75, "col": 273 }, { "row": 75, "col": 274 }, { "row": 75, "col": 275 }, { "row": 75, "col": 276 }, { "row": 75, "col": 277 }, { "row": 75, "col": 278 }, { "row": 75, "col": 279 }, { "row": 75, "col": 280 }, { "row": 75, "col": 281 }, { "row": 75, "col": 282 }, { "row": 75, "col": 283 }, { "row": 75, "col": 284 }, { "row": 75, "col": 285 }, { "row": 75, "col": 286 }, { "row": 75, "col": 287 }, { "row": 75, "col": 288 }, { "row": 75, "col": 289 }, { "row": 75, "col": 290 }, { "row": 75, "col": 291 }, { "row": 75, "col": 292 }, { "row": 75, "col": 293 }, { "row": 75, "col": 294 }, { "row": 75, "col": 295 }, { "row": 75, "col": 296 }, { "row": 75, "col": 297 }, { "row": 75, "col": 298 }, { "row": 75, "col": 299 }, { "row": 75, "col": 300 }, { "row": 75, "col": 301 }, { "row": 75, "col": 302 }, { "row": 75, "col": 303 }, { "row": 75, "col": 304 }, { "row": 75, "col": 305 }, { "row": 75, "col": 306 }, { "row": 75, "col": 307 }, { "row": 75, "col": 308 }, { "row": 75, "col": 309 }, { "row": 75, "col": 310 }, { "row": 75, "col": 311 }, { "row": 75, "col": 312 }, { "row": 75, "col": 313 }, { "row": 75, "col": 314 }, { "row": 75, "col": 315 }, { "row": 75, "col": 316 }, { "row": 75, "col": 317 }, { "row": 75, "col": 318 }, { "row": 75, "col": 319 }, { "row": 75, "col": 320 }, { "row": 75, "col": 321 }, { "row": 75, "col": 322 }, { "row": 75, "col": 323 }, { "row": 75, "col": 324 }, { "row": 75, "col": 325 }, { "row": 75, "col": 326 }, { "row": 75, "col": 327 }, { "row": 75, "col": 328 }, { "row": 75, "col": 329 }, { "row": 75, "col": 330 }, { "row": 75, "col": 331 }, { "row": 75, "col": 332 }, { "row": 75, "col": 333 }, { "row": 75, "col": 334 }, { "row": 75, "col": 335 }, { "row": 75, "col": 336 }, { "row": 75, "col": 337 }, { "row": 75, "col": 338 }, { "row": 76, "col": 271 }, { "row": 76, "col": 272 }, { "row": 76, "col": 273 }, { "row": 76, "col": 274 }, { "row": 76, "col": 275 }, { "row": 76, "col": 276 }, { "row": 76, "col": 277 }, { "row": 76, "col": 278 }, { "row": 76, "col": 279 }, { "row": 76, "col": 280 }, { "row": 76, "col": 281 }, { "row": 76, "col": 282 }, { "row": 76, "col": 283 }, { "row": 76, "col": 284 }, { "row": 76, "col": 285 }, { "row": 76, "col": 286 }, { "row": 76, "col": 287 }, { "row": 76, "col": 288 }, { "row": 76, "col": 289 }, { "row": 76, "col": 290 }, { "row": 76, "col": 291 }, { "row": 76, "col": 292 }, { "row": 76, "col": 293 }, { "row": 76, "col": 294 }, { "row": 76, "col": 295 }, { "row": 76, "col": 296 }, { "row": 76, "col": 297 }, { "row": 76, "col": 298 }, { "row": 76, "col": 299 }, { "row": 76, "col": 300 }, { "row": 76, "col": 301 }, { "row": 76, "col": 302 }, { "row": 76, "col": 303 }, { "row": 76, "col": 304 }, { "row": 76, "col": 305 }, { "row": 76, "col": 306 }, { "row": 76, "col": 307 }, { "row": 76, "col": 308 }, { "row": 76, "col": 309 }, { "row": 76, "col": 310 }, { "row": 76, "col": 311 }, { "row": 76, "col": 312 }, { "row": 76, "col": 313 }, { "row": 76, "col": 314 }, { "row": 76, "col": 315 }, { "row": 76, "col": 316 }, { "row": 76, "col": 317 }, { "row": 76, "col": 318 }, { "row": 76, "col": 319 }, { "row": 76, "col": 320 }, { "row": 76, "col": 321 }, { "row": 76, "col": 322 }, { "row": 76, "col": 323 }, { "row": 76, "col": 324 }, { "row": 76, "col": 325 }, { "row": 76, "col": 326 }, { "row": 76, "col": 327 }, { "row": 76, "col": 328 }, { "row": 76, "col": 329 }, { "row": 76, "col": 330 }, { "row": 76, "col": 331 }, { "row": 76, "col": 332 }, { "row": 76, "col": 333 }, { "row": 76, "col": 334 }, { "row": 76, "col": 335 }, { "row": 76, "col": 336 }, { "row": 76, "col": 337 }, { "row": 76, "col": 338 }, { "row": 77, "col": 271 }, { "row": 77, "col": 272 }, { "row": 77, "col": 273 }, { "row": 77, "col": 274 }, { "row": 77, "col": 275 }, { "row": 77, "col": 276 }, { "row": 77, "col": 277 }, { "row": 77, "col": 278 }, { "row": 77, "col": 279 }, { "row": 77, "col": 280 }, { "row": 77, "col": 281 }, { "row": 77, "col": 282 }, { "row": 77, "col": 283 }, { "row": 77, "col": 284 }, { "row": 77, "col": 285 }, { "row": 77, "col": 286 }, { "row": 77, "col": 287 }, { "row": 77, "col": 288 }, { "row": 77, "col": 289 }, { "row": 77, "col": 290 }, { "row": 77, "col": 291 }, { "row": 77, "col": 292 }, { "row": 77, "col": 293 }, { "row": 77, "col": 294 }, { "row": 77, "col": 295 }, { "row": 77, "col": 296 }, { "row": 77, "col": 297 }, { "row": 77, "col": 298 }, { "row": 77, "col": 299 }, { "row": 77, "col": 300 }, { "row": 77, "col": 301 }, { "row": 77, "col": 302 }, { "row": 77, "col": 303 }, { "row": 77, "col": 304 }, { "row": 77, "col": 305 }, { "row": 77, "col": 306 }, { "row": 77, "col": 307 }, { "row": 77, "col": 308 }, { "row": 77, "col": 309 }, { "row": 77, "col": 310 }, { "row": 77, "col": 311 }, { "row": 77, "col": 312 }, { "row": 77, "col": 313 }, { "row": 77, "col": 314 }, { "row": 77, "col": 315 }, { "row": 77, "col": 316 }, { "row": 77, "col": 317 }, { "row": 77, "col": 318 }, { "row": 77, "col": 319 }, { "row": 77, "col": 320 }, { "row": 77, "col": 321 }, { "row": 77, "col": 322 }, { "row": 77, "col": 323 }, { "row": 77, "col": 324 }, { "row": 77, "col": 325 }, { "row": 77, "col": 326 }, { "row": 77, "col": 327 }, { "row": 77, "col": 328 }, { "row": 77, "col": 329 }, { "row": 77, "col": 330 }, { "row": 77, "col": 331 }, { "row": 77, "col": 332 }, { "row": 77, "col": 333 }, { "row": 77, "col": 334 }, { "row": 77, "col": 335 }, { "row": 77, "col": 336 }, { "row": 77, "col": 337 }, { "row": 77, "col": 338 }, { "row": 78, "col": 271 }, { "row": 78, "col": 272 }, { "row": 78, "col": 273 }, { "row": 78, "col": 274 }, { "row": 78, "col": 275 }, { "row": 78, "col": 276 }, { "row": 78, "col": 277 }, { "row": 78, "col": 278 }, { "row": 78, "col": 279 }, { "row": 78, "col": 280 }, { "row": 78, "col": 281 }, { "row": 78, "col": 282 }, { "row": 78, "col": 283 }, { "row": 78, "col": 284 }, { "row": 78, "col": 285 }, { "row": 78, "col": 286 }, { "row": 78, "col": 287 }, { "row": 78, "col": 288 }, { "row": 78, "col": 289 }, { "row": 78, "col": 290 }, { "row": 78, "col": 291 }, { "row": 78, "col": 292 }, { "row": 78, "col": 293 }, { "row": 78, "col": 294 }, { "row": 78, "col": 295 }, { "row": 78, "col": 296 }, { "row": 78, "col": 297 }, { "row": 78, "col": 298 }, { "row": 78, "col": 299 }, { "row": 78, "col": 300 }, { "row": 78, "col": 301 }, { "row": 78, "col": 302 }, { "row": 78, "col": 303 }, { "row": 78, "col": 304 }, { "row": 78, "col": 305 }, { "row": 78, "col": 306 }, { "row": 78, "col": 307 }, { "row": 78, "col": 308 }, { "row": 78, "col": 309 }, { "row": 78, "col": 310 }, { "row": 78, "col": 311 }, { "row": 78, "col": 312 }, { "row": 78, "col": 313 }, { "row": 78, "col": 314 }, { "row": 78, "col": 315 }, { "row": 78, "col": 316 }, { "row": 78, "col": 317 }, { "row": 78, "col": 318 }, { "row": 78, "col": 319 }, { "row": 78, "col": 320 }, { "row": 78, "col": 321 }, { "row": 78, "col": 322 }, { "row": 78, "col": 323 }, { "row": 78, "col": 324 }, { "row": 78, "col": 325 }, { "row": 78, "col": 326 }, { "row": 78, "col": 327 }, { "row": 78, "col": 328 }, { "row": 78, "col": 329 }, { "row": 78, "col": 330 }, { "row": 78, "col": 331 }, { "row": 78, "col": 332 }, { "row": 78, "col": 333 }, { "row": 78, "col": 334 }, { "row": 78, "col": 335 }, { "row": 78, "col": 336 }, { "row": 78, "col": 337 }, { "row": 78, "col": 338 }, { "row": 79, "col": 271 }, { "row": 79, "col": 272 }, { "row": 79, "col": 273 }, { "row": 79, "col": 274 }, { "row": 79, "col": 275 }, { "row": 79, "col": 276 }, { "row": 79, "col": 277 }, { "row": 79, "col": 278 }, { "row": 79, "col": 279 }, { "row": 79, "col": 280 }, { "row": 79, "col": 281 }, { "row": 79, "col": 282 }, { "row": 79, "col": 283 }, { "row": 79, "col": 284 }, { "row": 79, "col": 285 }, { "row": 79, "col": 286 }, { "row": 79, "col": 287 }, { "row": 79, "col": 288 }, { "row": 79, "col": 289 }, { "row": 79, "col": 290 }, { "row": 79, "col": 291 }, { "row": 79, "col": 292 }, { "row": 79, "col": 293 }, { "row": 79, "col": 294 }, { "row": 79, "col": 295 }, { "row": 79, "col": 296 }, { "row": 79, "col": 297 }, { "row": 79, "col": 298 }, { "row": 79, "col": 299 }, { "row": 79, "col": 300 }, { "row": 79, "col": 301 }, { "row": 79, "col": 302 }, { "row": 79, "col": 303 }, { "row": 79, "col": 304 }, { "row": 79, "col": 305 }, { "row": 79, "col": 306 }, { "row": 79, "col": 307 }, { "row": 79, "col": 308 }, { "row": 79, "col": 309 }, { "row": 79, "col": 310 }, { "row": 79, "col": 311 }, { "row": 79, "col": 312 }, { "row": 79, "col": 313 }, { "row": 79, "col": 314 }, { "row": 79, "col": 315 }, { "row": 79, "col": 316 }, { "row": 79, "col": 317 }, { "row": 79, "col": 318 }, { "row": 79, "col": 319 }, { "row": 79, "col": 320 }, { "row": 79, "col": 321 }, { "row": 79, "col": 322 }, { "row": 79, "col": 323 }, { "row": 79, "col": 324 }, { "row": 79, "col": 325 }, { "row": 79, "col": 326 }, { "row": 79, "col": 327 }, { "row": 79, "col": 328 }, { "row": 79, "col": 329 }, { "row": 79, "col": 330 }, { "row": 79, "col": 331 }, { "row": 79, "col": 332 }, { "row": 79, "col": 333 }, { "row": 79, "col": 334 }, { "row": 79, "col": 335 }, { "row": 79, "col": 336 }, { "row": 79, "col": 337 }, { "row": 79, "col": 338 }, { "row": 80, "col": 304 }, { "row": 80, "col": 305 }, { "row": 80, "col": 306 }, { "row": 80, "col": 307 }, { "row": 80, "col": 308 }, { "row": 80, "col": 309 }, { "row": 80, "col": 310 }, { "row": 80, "col": 311 }, { "row": 80, "col": 312 }, { "row": 80, "col": 313 }, { "row": 80, "col": 314 }, { "row": 80, "col": 315 }, { "row": 80, "col": 316 }, { "row": 80, "col": 317 }, { "row": 80, "col": 318 }, { "row": 80, "col": 319 }, { "row": 80, "col": 320 }, { "row": 80, "col": 321 }, { "row": 80, "col": 322 }, { "row": 80, "col": 323 }, { "row": 80, "col": 324 }, { "row": 80, "col": 325 }, { "row": 80, "col": 326 }, { "row": 80, "col": 327 }, { "row": 80, "col": 328 }, { "row": 80, "col": 329 }, { "row": 80, "col": 330 }, { "row": 80, "col": 331 }, { "row": 80, "col": 332 }, { "row": 80, "col": 333 }, { "row": 80, "col": 334 }, { "row": 80, "col": 335 }, { "row": 80, "col": 336 }, { "row": 80, "col": 337 }, { "row": 80, "col": 338 }, { "row": 71, "col": 283 }, { "row": 71, "col": 284 }, { "row": 71, "col": 285 }, { "row": 71, "col": 286 }, { "row": 71, "col": 287 }, { "row": 71, "col": 288 }, { "row": 71, "col": 289 }, { "row": 71, "col": 290 }, { "row": 71, "col": 291 }, { "row": 71, "col": 292 }, { "row": 71, "col": 293 }, { "row": 71, "col": 294 }, { "row": 71, "col": 298 }, { "row": 71, "col": 300 }, { "row": 71, "col": 301 }, { "row": 71, "col": 302 }, { "row": 71, "col": 303 }, { "row": 71, "col": 304 }, { "row": 71, "col": 305 }, { "row": 71, "col": 306 }, { "row": 71, "col": 307 }, { "row": 71, "col": 308 }, { "row": 71, "col": 309 }, { "row": 71, "col": 310 }, { "row": 71, "col": 311 }, { "row": 71, "col": 312 }, { "row": 71, "col": 313 }, { "row": 71, "col": 314 }, { "row": 71, "col": 315 }, { "row": 71, "col": 316 }, { "row": 71, "col": 317 }, { "row": 71, "col": 318 }, { "row": 71, "col": 319 }, { "row": 71, "col": 320 }, { "row": 71, "col": 321 }, { "row": 71, "col": 323 }, { "row": 71, "col": 324 }, { "row": 71, "col": 325 }, { "row": 71, "col": 326 }, { "row": 71, "col": 327 }, { "row": 71, "col": 328 }, { "row": 71, "col": 331 }, { "row": 71, "col": 332 }, { "row": 71, "col": 334 }, { "row": 71, "col": 335 }, { "row": 71, "col": 336 }, { "row": 71, "col": 337 }, { "row": 71, "col": 333 }, { "row": 71, "col": 330 }, { "row": 71, "col": 329 }, { "row": 71, "col": 322 }, { "row": 70, "col": 308 }, { "row": 70, "col": 307 }, { "row": 70, "col": 306 }, { "row": 70, "col": 305 }, { "row": 71, "col": 299 }, { "row": 71, "col": 295 }, { "row": 71, "col": 296 }, { "row": 71, "col": 297 }, { "row": 0, "col": 279 }, { "row": 0, "col": 280 }, { "row": 0, "col": 281 }, { "row": 0, "col": 282 }, { "row": 0, "col": 283 }, { "row": 0, "col": 284 }, { "row": 0, "col": 285 }, { "row": 1, "col": 279 }, { "row": 1, "col": 280 }, { "row": 1, "col": 281 }, { "row": 1, "col": 282 }, { "row": 1, "col": 283 }, { "row": 1, "col": 284 }, { "row": 1, "col": 285 }, { "row": 2, "col": 279 }, { "row": 2, "col": 280 }, { "row": 2, "col": 281 }, { "row": 2, "col": 282 }, { "row": 2, "col": 283 }, { "row": 2, "col": 284 }, { "row": 2, "col": 285 }, { "row": 2, "col": 286 }, { "row": 3, "col": 279 }, { "row": 3, "col": 280 }, { "row": 3, "col": 281 }, { "row": 3, "col": 282 }, { "row": 3, "col": 283 }, { "row": 3, "col": 284 }, { "row": 3, "col": 285 }, { "row": 3, "col": 286 }, { "row": 4, "col": 279 }, { "row": 4, "col": 280 }, { "row": 4, "col": 281 }, { "row": 4, "col": 282 }, { "row": 4, "col": 283 }, { "row": 4, "col": 284 }, { "row": 4, "col": 285 }, { "row": 4, "col": 286 }, { "row": 5, "col": 279 }, { "row": 5, "col": 280 }, { "row": 5, "col": 281 }, { "row": 5, "col": 282 }, { "row": 5, "col": 283 }, { "row": 5, "col": 284 }, { "row": 5, "col": 285 }, { "row": 5, "col": 286 }, { "row": 6, "col": 279 }, { "row": 6, "col": 280 }, { "row": 6, "col": 281 }, { "row": 6, "col": 282 }, { "row": 6, "col": 283 }, { "row": 6, "col": 284 }, { "row": 6, "col": 285 }, { "row": 6, "col": 286 }, { "row": 7, "col": 279 }, { "row": 7, "col": 280 }, { "row": 7, "col": 281 }, { "row": 7, "col": 282 }, { "row": 7, "col": 283 }, { "row": 7, "col": 284 }, { "row": 7, "col": 285 }, { "row": 7, "col": 286 }, { "row": 8, "col": 279 }, { "row": 8, "col": 280 }, { "row": 8, "col": 281 }, { "row": 8, "col": 282 }, { "row": 8, "col": 283 }, { "row": 8, "col": 284 }, { "row": 8, "col": 285 }, { "row": 8, "col": 286 }, { "row": 9, "col": 279 }, { "row": 9, "col": 280 }, { "row": 9, "col": 281 }, { "row": 9, "col": 282 }, { "row": 9, "col": 283 }, { "row": 9, "col": 284 }, { "row": 9, "col": 285 }, { "row": 9, "col": 286 }, { "row": 10, "col": 279 }, { "row": 10, "col": 280 }, { "row": 10, "col": 281 }, { "row": 10, "col": 282 }, { "row": 10, "col": 283 }, { "row": 10, "col": 284 }, { "row": 10, "col": 285 }, { "row": 10, "col": 286 }, { "row": 11, "col": 279 }, { "row": 11, "col": 280 }, { "row": 11, "col": 281 }, { "row": 11, "col": 282 }, { "row": 11, "col": 283 }, { "row": 11, "col": 284 }, { "row": 11, "col": 285 }, { "row": 11, "col": 286 }, { "row": 12, "col": 279 }, { "row": 12, "col": 280 }, { "row": 12, "col": 281 }, { "row": 12, "col": 282 }, { "row": 12, "col": 283 }, { "row": 12, "col": 284 }, { "row": 12, "col": 285 }, { "row": 12, "col": 286 }, { "row": 13, "col": 279 }, { "row": 13, "col": 280 }, { "row": 13, "col": 281 }, { "row": 13, "col": 282 }, { "row": 13, "col": 283 }, { "row": 13, "col": 284 }, { "row": 13, "col": 285 }, { "row": 13, "col": 286 }, { "row": 14, "col": 279 }, { "row": 14, "col": 280 }, { "row": 14, "col": 281 }, { "row": 14, "col": 282 }, { "row": 14, "col": 283 }, { "row": 14, "col": 284 }, { "row": 14, "col": 285 }, { "row": 14, "col": 286 }, { "row": 15, "col": 279 }, { "row": 15, "col": 280 }, { "row": 15, "col": 281 }, { "row": 15, "col": 282 }, { "row": 15, "col": 283 }, { "row": 15, "col": 284 }, { "row": 15, "col": 285 }, { "row": 15, "col": 286 }, { "row": 16, "col": 279 }, { "row": 16, "col": 280 }, { "row": 16, "col": 281 }, { "row": 16, "col": 282 }, { "row": 16, "col": 283 }, { "row": 16, "col": 284 }, { "row": 16, "col": 285 }, { "row": 16, "col": 286 }, { "row": 17, "col": 279 }, { "row": 17, "col": 280 }, { "row": 17, "col": 281 }, { "row": 17, "col": 282 }, { "row": 17, "col": 283 }, { "row": 17, "col": 284 }, { "row": 17, "col": 285 }, { "row": 17, "col": 286 }, { "row": 18, "col": 279 }, { "row": 18, "col": 280 }, { "row": 18, "col": 281 }, { "row": 18, "col": 282 }, { "row": 18, "col": 283 }, { "row": 18, "col": 284 }, { "row": 18, "col": 285 }, { "row": 18, "col": 286 }, { "row": 19, "col": 279 }, { "row": 19, "col": 280 }, { "row": 19, "col": 281 }, { "row": 19, "col": 282 }, { "row": 19, "col": 283 }, { "row": 19, "col": 284 }, { "row": 19, "col": 285 }, { "row": 19, "col": 286 }, { "row": 20, "col": 279 }, { "row": 20, "col": 280 }, { "row": 20, "col": 281 }, { "row": 20, "col": 282 }, { "row": 20, "col": 283 }, { "row": 20, "col": 284 }, { "row": 20, "col": 285 }, { "row": 20, "col": 286 }, { "row": 21, "col": 279 }, { "row": 21, "col": 280 }, { "row": 21, "col": 281 }, { "row": 21, "col": 282 }, { "row": 21, "col": 283 }, { "row": 21, "col": 284 }, { "row": 21, "col": 285 }, { "row": 21, "col": 286 }, { "row": 22, "col": 279 }, { "row": 22, "col": 280 }, { "row": 22, "col": 281 }, { "row": 22, "col": 282 }, { "row": 22, "col": 283 }, { "row": 22, "col": 284 }, { "row": 22, "col": 285 }, { "row": 22, "col": 286 }, { "row": 23, "col": 279 }, { "row": 23, "col": 280 }, { "row": 23, "col": 281 }, { "row": 23, "col": 282 }, { "row": 23, "col": 283 }, { "row": 23, "col": 284 }, { "row": 23, "col": 285 }, { "row": 23, "col": 286 }, { "row": 24, "col": 279 }, { "row": 24, "col": 280 }, { "row": 24, "col": 281 }, { "row": 24, "col": 282 }, { "row": 24, "col": 283 }, { "row": 24, "col": 284 }, { "row": 24, "col": 285 }, { "row": 24, "col": 286 }, { "row": 25, "col": 279 }, { "row": 25, "col": 280 }, { "row": 25, "col": 281 }, { "row": 25, "col": 282 }, { "row": 25, "col": 283 }, { "row": 25, "col": 284 }, { "row": 25, "col": 285 }, { "row": 25, "col": 286 }, { "row": 25, "col": 287 }, { "row": 26, "col": 279 }, { "row": 26, "col": 280 }, { "row": 26, "col": 281 }, { "row": 26, "col": 282 }, { "row": 26, "col": 283 }, { "row": 26, "col": 284 }, { "row": 26, "col": 285 }, { "row": 26, "col": 286 }, { "row": 26, "col": 287 }, { "row": 27, "col": 279 }, { "row": 27, "col": 280 }, { "row": 27, "col": 281 }, { "row": 27, "col": 282 }, { "row": 27, "col": 283 }, { "row": 27, "col": 284 }, { "row": 27, "col": 285 }, { "row": 27, "col": 286 }, { "row": 27, "col": 287 }, { "row": 28, "col": 279 }, { "row": 28, "col": 280 }, { "row": 28, "col": 281 }, { "row": 28, "col": 282 }, { "row": 28, "col": 283 }, { "row": 28, "col": 284 }, { "row": 28, "col": 285 }, { "row": 28, "col": 286 }, { "row": 28, "col": 287 }, { "row": 29, "col": 279 }, { "row": 29, "col": 280 }, { "row": 29, "col": 281 }, { "row": 29, "col": 282 }, { "row": 29, "col": 283 }, { "row": 29, "col": 284 }, { "row": 29, "col": 285 }, { "row": 29, "col": 286 }, { "row": 29, "col": 287 }, { "row": 30, "col": 279 }, { "row": 30, "col": 280 }, { "row": 30, "col": 281 }, { "row": 30, "col": 282 }, { "row": 30, "col": 283 }, { "row": 30, "col": 284 }, { "row": 30, "col": 285 }, { "row": 30, "col": 286 }, { "row": 30, "col": 287 }, { "row": 31, "col": 279 }, { "row": 31, "col": 280 }, { "row": 31, "col": 281 }, { "row": 31, "col": 282 }, { "row": 31, "col": 283 }, { "row": 31, "col": 284 }, { "row": 31, "col": 285 }, { "row": 31, "col": 286 }, { "row": 31, "col": 287 }, { "row": 32, "col": 279 }, { "row": 32, "col": 280 }, { "row": 32, "col": 281 }, { "row": 32, "col": 282 }, { "row": 32, "col": 283 }, { "row": 32, "col": 284 }, { "row": 32, "col": 285 }, { "row": 32, "col": 286 }, { "row": 32, "col": 287 }, { "row": 33, "col": 279 }, { "row": 33, "col": 280 }, { "row": 33, "col": 281 }, { "row": 33, "col": 282 }, { "row": 33, "col": 283 }, { "row": 33, "col": 284 }, { "row": 33, "col": 285 }, { "row": 33, "col": 286 }, { "row": 33, "col": 287 }, { "row": 34, "col": 279 }, { "row": 34, "col": 280 }, { "row": 34, "col": 281 }, { "row": 34, "col": 282 }, { "row": 34, "col": 283 }, { "row": 34, "col": 284 }, { "row": 34, "col": 285 }, { "row": 34, "col": 286 }, { "row": 34, "col": 287 }, { "row": 35, "col": 279 }, { "row": 35, "col": 280 }, { "row": 35, "col": 281 }, { "row": 35, "col": 282 }, { "row": 35, "col": 283 }, { "row": 35, "col": 284 }, { "row": 35, "col": 285 }, { "row": 35, "col": 286 }, { "row": 35, "col": 287 }, { "row": 36, "col": 279 }, { "row": 36, "col": 280 }, { "row": 36, "col": 281 }, { "row": 36, "col": 282 }, { "row": 36, "col": 283 }, { "row": 36, "col": 284 }, { "row": 36, "col": 285 }, { "row": 36, "col": 286 }, { "row": 36, "col": 287 }, { "row": 37, "col": 279 }, { "row": 37, "col": 280 }, { "row": 37, "col": 281 }, { "row": 37, "col": 282 }, { "row": 37, "col": 283 }, { "row": 37, "col": 284 }, { "row": 37, "col": 285 }, { "row": 37, "col": 286 }, { "row": 37, "col": 287 }, { "row": 38, "col": 279 }, { "row": 38, "col": 280 }, { "row": 38, "col": 281 }, { "row": 38, "col": 282 }, { "row": 38, "col": 283 }, { "row": 38, "col": 284 }, { "row": 38, "col": 285 }, { "row": 38, "col": 286 }, { "row": 38, "col": 287 }, { "row": 39, "col": 279 }, { "row": 39, "col": 280 }, { "row": 39, "col": 281 }, { "row": 39, "col": 282 }, { "row": 39, "col": 283 }, { "row": 39, "col": 284 }, { "row": 39, "col": 285 }, { "row": 39, "col": 286 }, { "row": 39, "col": 287 }, { "row": 40, "col": 279 }, { "row": 40, "col": 280 }, { "row": 40, "col": 281 }, { "row": 40, "col": 282 }, { "row": 40, "col": 283 }, { "row": 40, "col": 284 }, { "row": 40, "col": 285 }, { "row": 40, "col": 286 }, { "row": 40, "col": 287 }, { "row": 41, "col": 279 }, { "row": 41, "col": 280 }, { "row": 41, "col": 281 }, { "row": 41, "col": 282 }, { "row": 41, "col": 283 }, { "row": 41, "col": 284 }, { "row": 41, "col": 285 }, { "row": 41, "col": 286 }, { "row": 41, "col": 287 }, { "row": 42, "col": 279 }, { "row": 42, "col": 280 }, { "row": 42, "col": 281 }, { "row": 42, "col": 282 }, { "row": 42, "col": 283 }, { "row": 42, "col": 284 }, { "row": 42, "col": 285 }, { "row": 42, "col": 286 }, { "row": 42, "col": 287 }, { "row": 43, "col": 279 }, { "row": 43, "col": 280 }, { "row": 43, "col": 281 }, { "row": 43, "col": 282 }, { "row": 43, "col": 283 }, { "row": 43, "col": 284 }, { "row": 43, "col": 285 }, { "row": 43, "col": 286 }, { "row": 43, "col": 287 }, { "row": 44, "col": 279 }, { "row": 44, "col": 280 }, { "row": 44, "col": 281 }, { "row": 44, "col": 282 }, { "row": 44, "col": 283 }, { "row": 44, "col": 284 }, { "row": 44, "col": 285 }, { "row": 44, "col": 286 }, { "row": 44, "col": 287 }, { "row": 45, "col": 279 }, { "row": 45, "col": 280 }, { "row": 45, "col": 281 }, { "row": 45, "col": 282 }, { "row": 45, "col": 283 }, { "row": 45, "col": 284 }, { "row": 45, "col": 285 }, { "row": 45, "col": 286 }, { "row": 45, "col": 287 }, { "row": 46, "col": 279 }, { "row": 46, "col": 280 }, { "row": 46, "col": 281 }, { "row": 46, "col": 282 }, { "row": 46, "col": 283 }, { "row": 46, "col": 284 }, { "row": 46, "col": 285 }, { "row": 46, "col": 286 }, { "row": 46, "col": 287 }, { "row": 47, "col": 279 }, { "row": 47, "col": 280 }, { "row": 47, "col": 281 }, { "row": 47, "col": 282 }, { "row": 47, "col": 283 }, { "row": 47, "col": 284 }, { "row": 47, "col": 285 }, { "row": 47, "col": 286 }, { "row": 47, "col": 287 }, { "row": 48, "col": 279 }, { "row": 48, "col": 280 }, { "row": 48, "col": 281 }, { "row": 48, "col": 282 }, { "row": 48, "col": 283 }, { "row": 48, "col": 284 }, { "row": 48, "col": 285 }, { "row": 48, "col": 286 }, { "row": 48, "col": 287 }, { "row": 48, "col": 288 }, { "row": 49, "col": 279 }, { "row": 49, "col": 280 }, { "row": 49, "col": 281 }, { "row": 49, "col": 282 }, { "row": 49, "col": 283 }, { "row": 49, "col": 284 }, { "row": 49, "col": 285 }, { "row": 49, "col": 286 }, { "row": 49, "col": 287 }, { "row": 49, "col": 288 }, { "row": 50, "col": 279 }, { "row": 50, "col": 280 }, { "row": 50, "col": 281 }, { "row": 50, "col": 282 }, { "row": 50, "col": 283 }, { "row": 50, "col": 284 }, { "row": 50, "col": 285 }, { "row": 50, "col": 286 }, { "row": 50, "col": 287 }, { "row": 50, "col": 288 }, { "row": 51, "col": 279 }, { "row": 51, "col": 280 }, { "row": 51, "col": 281 }, { "row": 51, "col": 282 }, { "row": 51, "col": 283 }, { "row": 51, "col": 284 }, { "row": 51, "col": 285 }, { "row": 51, "col": 286 }, { "row": 51, "col": 287 }, { "row": 51, "col": 288 }, { "row": 52, "col": 279 }, { "row": 52, "col": 280 }, { "row": 52, "col": 281 }, { "row": 52, "col": 282 }, { "row": 52, "col": 283 }, { "row": 52, "col": 284 }, { "row": 52, "col": 285 }, { "row": 52, "col": 286 }, { "row": 52, "col": 287 }, { "row": 52, "col": 288 }, { "row": 53, "col": 279 }, { "row": 53, "col": 280 }, { "row": 53, "col": 281 }, { "row": 53, "col": 282 }, { "row": 53, "col": 283 }, { "row": 53, "col": 284 }, { "row": 53, "col": 285 }, { "row": 53, "col": 286 }, { "row": 53, "col": 287 }, { "row": 53, "col": 288 }, { "row": 54, "col": 279 }, { "row": 54, "col": 280 }, { "row": 54, "col": 281 }, { "row": 54, "col": 282 }, { "row": 54, "col": 283 }, { "row": 54, "col": 284 }, { "row": 54, "col": 285 }, { "row": 54, "col": 286 }, { "row": 54, "col": 287 }, { "row": 54, "col": 288 }, { "row": 55, "col": 279 }, { "row": 55, "col": 280 }, { "row": 55, "col": 281 }, { "row": 55, "col": 282 }, { "row": 55, "col": 283 }, { "row": 55, "col": 284 }, { "row": 55, "col": 285 }, { "row": 55, "col": 286 }, { "row": 55, "col": 287 }, { "row": 55, "col": 288 }, { "row": 56, "col": 279 }, { "row": 56, "col": 280 }, { "row": 56, "col": 281 }, { "row": 56, "col": 282 }, { "row": 56, "col": 283 }, { "row": 56, "col": 284 }, { "row": 56, "col": 285 }, { "row": 56, "col": 286 }, { "row": 56, "col": 287 }, { "row": 56, "col": 288 }, { "row": 57, "col": 279 }, { "row": 57, "col": 280 }, { "row": 57, "col": 281 }, { "row": 57, "col": 282 }, { "row": 57, "col": 283 }, { "row": 57, "col": 284 }, { "row": 57, "col": 285 }, { "row": 57, "col": 286 }, { "row": 57, "col": 287 }, { "row": 57, "col": 288 }, { "row": 58, "col": 279 }, { "row": 58, "col": 280 }, { "row": 58, "col": 281 }, { "row": 58, "col": 282 }, { "row": 58, "col": 283 }, { "row": 58, "col": 284 }, { "row": 58, "col": 285 }, { "row": 58, "col": 286 }, { "row": 58, "col": 287 }, { "row": 58, "col": 288 }, { "row": 59, "col": 279 }, { "row": 59, "col": 280 }, { "row": 59, "col": 281 }, { "row": 59, "col": 282 }, { "row": 59, "col": 283 }, { "row": 59, "col": 284 }, { "row": 59, "col": 285 }, { "row": 59, "col": 286 }, { "row": 59, "col": 287 }, { "row": 59, "col": 288 }, { "row": 60, "col": 279 }, { "row": 60, "col": 280 }, { "row": 60, "col": 281 }, { "row": 60, "col": 282 }, { "row": 60, "col": 283 }, { "row": 60, "col": 284 }, { "row": 60, "col": 285 }, { "row": 60, "col": 286 }, { "row": 60, "col": 287 }, { "row": 60, "col": 288 }, { "row": 61, "col": 279 }, { "row": 61, "col": 280 }, { "row": 61, "col": 281 }, { "row": 61, "col": 282 }, { "row": 61, "col": 283 }, { "row": 61, "col": 284 }, { "row": 61, "col": 285 }, { "row": 61, "col": 286 }, { "row": 61, "col": 287 }, { "row": 61, "col": 288 }, { "row": 62, "col": 279 }, { "row": 62, "col": 280 }, { "row": 62, "col": 281 }, { "row": 62, "col": 282 }, { "row": 62, "col": 283 }, { "row": 62, "col": 284 }, { "row": 62, "col": 285 }, { "row": 62, "col": 286 }, { "row": 62, "col": 287 }, { "row": 62, "col": 288 }, { "row": 63, "col": 279 }, { "row": 63, "col": 280 }, { "row": 63, "col": 281 }, { "row": 63, "col": 282 }, { "row": 63, "col": 283 }, { "row": 63, "col": 284 }, { "row": 63, "col": 285 }, { "row": 63, "col": 286 }, { "row": 63, "col": 287 }, { "row": 63, "col": 288 }, { "row": 64, "col": 279 }, { "row": 64, "col": 280 }, { "row": 64, "col": 281 }, { "row": 64, "col": 282 }, { "row": 64, "col": 283 }, { "row": 64, "col": 284 }, { "row": 64, "col": 285 }, { "row": 64, "col": 286 }, { "row": 64, "col": 287 }, { "row": 64, "col": 288 }, { "row": 65, "col": 279 }, { "row": 65, "col": 280 }, { "row": 65, "col": 281 }, { "row": 65, "col": 282 }, { "row": 65, "col": 283 }, { "row": 65, "col": 284 }, { "row": 65, "col": 285 }, { "row": 65, "col": 286 }, { "row": 65, "col": 287 }, { "row": 65, "col": 288 }, { "row": 66, "col": 279 }, { "row": 66, "col": 280 }, { "row": 66, "col": 281 }, { "row": 66, "col": 282 }, { "row": 66, "col": 283 }, { "row": 66, "col": 284 }, { "row": 66, "col": 285 }, { "row": 66, "col": 286 }, { "row": 66, "col": 287 }, { "row": 66, "col": 288 }, { "row": 67, "col": 279 }, { "row": 67, "col": 280 }, { "row": 67, "col": 281 }, { "row": 67, "col": 282 }, { "row": 67, "col": 283 }, { "row": 67, "col": 284 }, { "row": 67, "col": 285 }, { "row": 67, "col": 286 }, { "row": 67, "col": 287 }, { "row": 67, "col": 288 }, { "row": 68, "col": 279 }, { "row": 68, "col": 280 }, { "row": 68, "col": 281 }, { "row": 68, "col": 282 }, { "row": 68, "col": 283 }, { "row": 68, "col": 284 }, { "row": 68, "col": 285 }, { "row": 68, "col": 286 }, { "row": 68, "col": 287 }, { "row": 68, "col": 288 }, { "row": 69, "col": 279 }, { "row": 69, "col": 280 }, { "row": 69, "col": 281 }, { "row": 69, "col": 282 }, { "row": 69, "col": 283 }, { "row": 69, "col": 284 }, { "row": 69, "col": 285 }, { "row": 69, "col": 286 }, { "row": 69, "col": 287 }, { "row": 69, "col": 288 }, { "row": 70, "col": 279 }, { "row": 70, "col": 280 }, { "row": 70, "col": 281 }, { "row": 70, "col": 282 }, { "row": 70, "col": 283 }, { "row": 70, "col": 284 }, { "row": 70, "col": 285 }, { "row": 70, "col": 286 }, { "row": 70, "col": 287 }, { "row": 70, "col": 288 }, { "row": 131, "col": 269 }, { "row": 131, "col": 270 }, { "row": 131, "col": 271 }, { "row": 131, "col": 272 }, { "row": 131, "col": 273 }, { "row": 131, "col": 274 }, { "row": 131, "col": 275 }, { "row": 131, "col": 276 }, { "row": 131, "col": 277 }, { "row": 131, "col": 278 }, { "row": 131, "col": 279 }, { "row": 131, "col": 280 }, { "row": 131, "col": 281 }, { "row": 131, "col": 282 }, { "row": 131, "col": 283 }, { "row": 131, "col": 284 }, { "row": 131, "col": 285 }, { "row": 132, "col": 269 }, { "row": 132, "col": 270 }, { "row": 132, "col": 271 }, { "row": 132, "col": 272 }, { "row": 132, "col": 273 }, { "row": 132, "col": 274 }, { "row": 132, "col": 275 }, { "row": 132, "col": 276 }, { "row": 132, "col": 277 }, { "row": 132, "col": 278 }, { "row": 132, "col": 279 }, { "row": 132, "col": 280 }, { "row": 132, "col": 281 }, { "row": 132, "col": 282 }, { "row": 132, "col": 283 }, { "row": 132, "col": 284 }, { "row": 132, "col": 285 }, { "row": 132, "col": 286 }, { "row": 132, "col": 287 }, { "row": 132, "col": 288 }, { "row": 132, "col": 289 }, { "row": 132, "col": 290 }, { "row": 132, "col": 291 }, { "row": 132, "col": 292 }, { "row": 132, "col": 293 }, { "row": 132, "col": 294 }, { "row": 132, "col": 295 }, { "row": 132, "col": 296 }, { "row": 132, "col": 297 }, { "row": 132, "col": 298 }, { "row": 132, "col": 299 }, { "row": 132, "col": 300 }, { "row": 132, "col": 301 }, { "row": 132, "col": 302 }, { "row": 132, "col": 303 }, { "row": 133, "col": 269 }, { "row": 133, "col": 270 }, { "row": 133, "col": 271 }, { "row": 133, "col": 272 }, { "row": 133, "col": 273 }, { "row": 133, "col": 274 }, { "row": 133, "col": 275 }, { "row": 133, "col": 276 }, { "row": 133, "col": 277 }, { "row": 133, "col": 278 }, { "row": 133, "col": 279 }, { "row": 133, "col": 280 }, { "row": 133, "col": 281 }, { "row": 133, "col": 282 }, { "row": 133, "col": 283 }, { "row": 133, "col": 284 }, { "row": 133, "col": 285 }, { "row": 133, "col": 286 }, { "row": 133, "col": 287 }, { "row": 133, "col": 288 }, { "row": 133, "col": 289 }, { "row": 133, "col": 290 }, { "row": 133, "col": 291 }, { "row": 133, "col": 292 }, { "row": 133, "col": 293 }, { "row": 133, "col": 294 }, { "row": 133, "col": 295 }, { "row": 133, "col": 296 }, { "row": 133, "col": 297 }, { "row": 133, "col": 298 }, { "row": 133, "col": 299 }, { "row": 133, "col": 300 }, { "row": 133, "col": 301 }, { "row": 133, "col": 302 }, { "row": 133, "col": 303 }, { "row": 133, "col": 304 }, { "row": 133, "col": 305 }, { "row": 133, "col": 306 }, { "row": 133, "col": 307 }, { "row": 133, "col": 308 }, { "row": 133, "col": 309 }, { "row": 133, "col": 310 }, { "row": 133, "col": 311 }, { "row": 133, "col": 312 }, { "row": 133, "col": 313 }, { "row": 133, "col": 314 }, { "row": 133, "col": 315 }, { "row": 133, "col": 316 }, { "row": 133, "col": 317 }, { "row": 133, "col": 318 }, { "row": 133, "col": 319 }, { "row": 133, "col": 320 }, { "row": 133, "col": 321 }, { "row": 134, "col": 269 }, { "row": 134, "col": 270 }, { "row": 134, "col": 271 }, { "row": 134, "col": 272 }, { "row": 134, "col": 273 }, { "row": 134, "col": 274 }, { "row": 134, "col": 275 }, { "row": 134, "col": 276 }, { "row": 134, "col": 277 }, { "row": 134, "col": 278 }, { "row": 134, "col": 279 }, { "row": 134, "col": 280 }, { "row": 134, "col": 281 }, { "row": 134, "col": 282 }, { "row": 134, "col": 283 }, { "row": 134, "col": 284 }, { "row": 134, "col": 285 }, { "row": 134, "col": 286 }, { "row": 134, "col": 287 }, { "row": 134, "col": 288 }, { "row": 134, "col": 289 }, { "row": 134, "col": 290 }, { "row": 134, "col": 291 }, { "row": 134, "col": 292 }, { "row": 134, "col": 293 }, { "row": 134, "col": 294 }, { "row": 134, "col": 295 }, { "row": 134, "col": 296 }, { "row": 134, "col": 297 }, { "row": 134, "col": 298 }, { "row": 134, "col": 299 }, { "row": 134, "col": 300 }, { "row": 134, "col": 301 }, { "row": 134, "col": 302 }, { "row": 134, "col": 303 }, { "row": 134, "col": 304 }, { "row": 134, "col": 305 }, { "row": 134, "col": 306 }, { "row": 134, "col": 307 }, { "row": 134, "col": 308 }, { "row": 134, "col": 309 }, { "row": 134, "col": 310 }, { "row": 134, "col": 311 }, { "row": 134, "col": 312 }, { "row": 134, "col": 313 }, { "row": 134, "col": 314 }, { "row": 134, "col": 315 }, { "row": 134, "col": 316 }, { "row": 134, "col": 317 }, { "row": 134, "col": 318 }, { "row": 134, "col": 319 }, { "row": 134, "col": 320 }, { "row": 134, "col": 321 }, { "row": 134, "col": 322 }, { "row": 134, "col": 323 }, { "row": 134, "col": 324 }, { "row": 134, "col": 325 }, { "row": 134, "col": 326 }, { "row": 134, "col": 327 }, { "row": 134, "col": 328 }, { "row": 134, "col": 329 }, { "row": 134, "col": 330 }, { "row": 134, "col": 331 }, { "row": 134, "col": 332 }, { "row": 134, "col": 333 }, { "row": 134, "col": 334 }, { "row": 134, "col": 335 }, { "row": 134, "col": 336 }, { "row": 134, "col": 337 }, { "row": 134, "col": 338 }, { "row": 134, "col": 339 }, { "row": 135, "col": 287 }, { "row": 135, "col": 288 }, { "row": 135, "col": 289 }, { "row": 135, "col": 290 }, { "row": 135, "col": 291 }, { "row": 135, "col": 292 }, { "row": 135, "col": 293 }, { "row": 135, "col": 294 }, { "row": 135, "col": 295 }, { "row": 135, "col": 296 }, { "row": 135, "col": 297 }, { "row": 135, "col": 298 }, { "row": 135, "col": 299 }, { "row": 135, "col": 300 }, { "row": 135, "col": 301 }, { "row": 135, "col": 302 }, { "row": 135, "col": 303 }, { "row": 135, "col": 304 }, { "row": 135, "col": 305 }, { "row": 135, "col": 306 }, { "row": 135, "col": 307 }, { "row": 135, "col": 308 }, { "row": 135, "col": 309 }, { "row": 135, "col": 310 }, { "row": 135, "col": 311 }, { "row": 135, "col": 312 }, { "row": 135, "col": 313 }, { "row": 135, "col": 314 }, { "row": 135, "col": 315 }, { "row": 135, "col": 316 }, { "row": 135, "col": 317 }, { "row": 135, "col": 318 }, { "row": 135, "col": 319 }, { "row": 135, "col": 320 }, { "row": 135, "col": 321 }, { "row": 135, "col": 322 }, { "row": 135, "col": 323 }, { "row": 135, "col": 324 }, { "row": 135, "col": 325 }, { "row": 135, "col": 326 }, { "row": 135, "col": 327 }, { "row": 135, "col": 328 }, { "row": 135, "col": 329 }, { "row": 135, "col": 330 }, { "row": 135, "col": 331 }, { "row": 135, "col": 332 }, { "row": 135, "col": 333 }, { "row": 135, "col": 334 }, { "row": 135, "col": 335 }, { "row": 135, "col": 336 }, { "row": 135, "col": 337 }, { "row": 135, "col": 338 }, { "row": 135, "col": 339 }, { "row": 136, "col": 305 }, { "row": 136, "col": 306 }, { "row": 136, "col": 307 }, { "row": 136, "col": 308 }, { "row": 136, "col": 309 }, { "row": 136, "col": 310 }, { "row": 136, "col": 311 }, { "row": 136, "col": 312 }, { "row": 136, "col": 313 }, { "row": 136, "col": 314 }, { "row": 136, "col": 315 }, { "row": 136, "col": 316 }, { "row": 136, "col": 317 }, { "row": 136, "col": 318 }, { "row": 136, "col": 319 }, { "row": 136, "col": 320 }, { "row": 136, "col": 321 }, { "row": 136, "col": 322 }, { "row": 136, "col": 323 }, { "row": 136, "col": 324 }, { "row": 136, "col": 325 }, { "row": 136, "col": 326 }, { "row": 136, "col": 327 }, { "row": 136, "col": 328 }, { "row": 136, "col": 329 }, { "row": 136, "col": 330 }, { "row": 136, "col": 331 }, { "row": 136, "col": 332 }, { "row": 136, "col": 333 }, { "row": 136, "col": 334 }, { "row": 136, "col": 335 }, { "row": 136, "col": 336 }, { "row": 136, "col": 337 }, { "row": 136, "col": 338 }, { "row": 136, "col": 339 }, { "row": 137, "col": 323 }, { "row": 137, "col": 324 }, { "row": 137, "col": 325 }, { "row": 137, "col": 326 }, { "row": 137, "col": 327 }, { "row": 137, "col": 328 }, { "row": 137, "col": 329 }, { "row": 137, "col": 330 }, { "row": 137, "col": 331 }, { "row": 137, "col": 332 }, { "row": 137, "col": 333 }, { "row": 137, "col": 334 }, { "row": 137, "col": 335 }, { "row": 137, "col": 336 }, { "row": 137, "col": 337 }, { "row": 137, "col": 338 }, { "row": 137, "col": 339 }, { "row": 130, "col": 285 }, { "row": 129, "col": 285 }, { "row": 128, "col": 285 }, { "row": 127, "col": 285 }, { "row": 126, "col": 285 }, { "row": 125, "col": 285 }, { "row": 124, "col": 285 }, { "row": 123, "col": 285 }, { "row": 122, "col": 285 }, { "row": 122, "col": 286 }, { "row": 122, "col": 287 }, { "row": 122, "col": 288 }, { "row": 122, "col": 289 }, { "row": 123, "col": 289 }, { "row": 124, "col": 289 }, { "row": 125, "col": 289 }, { "row": 126, "col": 289 }, { "row": 127, "col": 289 }, { "row": 128, "col": 289 }, { "row": 129, "col": 289 }, { "row": 130, "col": 289 }, { "row": 131, "col": 289 }, { "row": 131, "col": 288 }, { "row": 131, "col": 287 }, { "row": 131, "col": 286 }, { "row": 130, "col": 286 }, { "row": 129, "col": 286 }, { "row": 128, "col": 286 }, { "row": 127, "col": 286 }, { "row": 126, "col": 286 }, { "row": 125, "col": 286 }, { "row": 124, "col": 286 }, { "row": 123, "col": 286 }, { "row": 123, "col": 288 }, { "row": 124, "col": 288 }, { "row": 125, "col": 288 }, { "row": 126, "col": 288 }, { "row": 127, "col": 288 }, { "row": 128, "col": 288 }, { "row": 129, "col": 288 }, { "row": 129, "col": 287 }, { "row": 130, "col": 287 }, { "row": 130, "col": 288 }, { "row": 128, "col": 287 }, { "row": 127, "col": 287 }, { "row": 126, "col": 287 }, { "row": 125, "col": 287 }, { "row": 124, "col": 287 }, { "row": 123, "col": 287 }, { "row": 137, "col": 318 }, { "row": 138, "col": 318 }, { "row": 139, "col": 318 }, { "row": 140, "col": 318 }, { "row": 141, "col": 318 }, { "row": 142, "col": 318 }, { "row": 143, "col": 318 }, { "row": 144, "col": 318 }, { "row": 145, "col": 318 }, { "row": 146, "col": 318 }, { "row": 147, "col": 318 }, { "row": 148, "col": 318 }, { "row": 149, "col": 318 }, { "row": 137, "col": 319 }, { "row": 138, "col": 319 }, { "row": 139, "col": 319 }, { "row": 140, "col": 319 }, { "row": 141, "col": 319 }, { "row": 142, "col": 319 }, { "row": 143, "col": 319 }, { "row": 144, "col": 319 }, { "row": 145, "col": 319 }, { "row": 146, "col": 319 }, { "row": 147, "col": 319 }, { "row": 148, "col": 319 }, { "row": 139, "col": 321 }, { "row": 137, "col": 321 }, { "row": 138, "col": 321 }, { "row": 140, "col": 321 }, { "row": 141, "col": 321 }, { "row": 142, "col": 321 }, { "row": 143, "col": 321 }, { "row": 144, "col": 321 }, { "row": 145, "col": 321 }, { "row": 146, "col": 321 }, { "row": 147, "col": 321 }, { "row": 148, "col": 321 }, { "row": 148, "col": 320 }, { "row": 147, "col": 320 }, { "row": 146, "col": 320 }, { "row": 145, "col": 320 }, { "row": 144, "col": 320 }, { "row": 143, "col": 320 }, { "row": 142, "col": 320 }, { "row": 141, "col": 320 }, { "row": 140, "col": 320 }, { "row": 139, "col": 320 }, { "row": 138, "col": 320 }, { "row": 137, "col": 320 }, { "row": 137, "col": 322 }, { "row": 138, "col": 322 }, { "row": 139, "col": 322 }, { "row": 140, "col": 322 }, { "row": 141, "col": 322 }, { "row": 142, "col": 322 }, { "row": 143, "col": 322 }, { "row": 144, "col": 322 }, { "row": 145, "col": 322 }, { "row": 146, "col": 322 }, { "row": 157, "col": 268 }, { "row": 157, "col": 269 }, { "row": 157, "col": 270 }, { "row": 157, "col": 271 }, { "row": 158, "col": 268 }, { "row": 158, "col": 269 }, { "row": 158, "col": 271 }, { "row": 158, "col": 272 }, { "row": 158, "col": 270 }, { "row": 159, "col": 268 }, { "row": 159, "col": 269 }, { "row": 159, "col": 270 }, { "row": 159, "col": 271 }, { "row": 160, "col": 271 }, { "row": 161, "col": 271 }, { "row": 161, "col": 270 }, { "row": 161, "col": 269 }, { "row": 161, "col": 268 }, { "row": 160, "col": 269 }, { "row": 160, "col": 268 }, { "row": 160, "col": 270 }, { "row": 160, "col": 272 }, { "row": 160, "col": 273 }, { "row": 159, "col": 273 }, { "row": 158, "col": 273 }, { "row": 157, "col": 273 }, { "row": 156, "col": 273 }, { "row": 156, "col": 272 }, { "row": 157, "col": 272 }, { "row": 159, "col": 272 }, { "row": 161, "col": 272 }, { "row": 162, "col": 272 }, { "row": 163, "col": 272 }, { "row": 162, "col": 273 }, { "row": 161, "col": 273 }, { "row": 163, "col": 273 }, { "row": 164, "col": 273 }, { "row": 165, "col": 273 }, { "row": 166, "col": 273 }, { "row": 166, "col": 272 }, { "row": 165, "col": 272 }, { "row": 164, "col": 272 }, { "row": 165, "col": 274 }, { "row": 165, "col": 275 }, { "row": 165, "col": 276 }, { "row": 165, "col": 277 }, { "row": 165, "col": 278 }, { "row": 165, "col": 279 }, { "row": 165, "col": 280 }, { "row": 165, "col": 281 }, { "row": 165, "col": 282 }, { "row": 165, "col": 283 }, { "row": 165, "col": 284 }, { "row": 165, "col": 285 }, { "row": 165, "col": 286 }, { "row": 165, "col": 287 }, { "row": 165, "col": 288 }, { "row": 165, "col": 289 }, { "row": 165, "col": 290 }, { "row": 165, "col": 291 }, { "row": 165, "col": 292 }, { "row": 165, "col": 293 }, { "row": 165, "col": 294 }, { "row": 165, "col": 295 }, { "row": 165, "col": 296 }, { "row": 165, "col": 297 }, { "row": 165, "col": 298 }, { "row": 165, "col": 300 }, { "row": 166, "col": 300 }, { "row": 166, "col": 301 }, { "row": 166, "col": 302 }, { "row": 166, "col": 303 }, { "row": 166, "col": 304 }, { "row": 166, "col": 305 }, { "row": 166, "col": 306 }, { "row": 166, "col": 307 }, { "row": 166, "col": 308 }, { "row": 166, "col": 309 }, { "row": 166, "col": 310 }, { "row": 166, "col": 311 }, { "row": 166, "col": 312 }, { "row": 166, "col": 313 }, { "row": 166, "col": 314 }, { "row": 166, "col": 315 }, { "row": 166, "col": 316 }, { "row": 166, "col": 317 }, { "row": 166, "col": 318 }, { "row": 166, "col": 319 }, { "row": 166, "col": 320 }, { "row": 166, "col": 321 }, { "row": 166, "col": 322 }, { "row": 166, "col": 325 }, { "row": 166, "col": 326 }, { "row": 166, "col": 327 }, { "row": 166, "col": 328 }, { "row": 166, "col": 330 }, { "row": 166, "col": 331 }, { "row": 166, "col": 332 }, { "row": 165, "col": 332 }, { "row": 164, "col": 332 }, { "row": 163, "col": 332 }, { "row": 162, "col": 332 }, { "row": 157, "col": 332 }, { "row": 156, "col": 331 }, { "row": 156, "col": 330 }, { "row": 156, "col": 329 }, { "row": 156, "col": 328 }, { "row": 156, "col": 327 }, { "row": 156, "col": 326 }, { "row": 156, "col": 325 }, { "row": 156, "col": 324 }, { "row": 156, "col": 322 }, { "row": 156, "col": 321 }, { "row": 156, "col": 319 }, { "row": 156, "col": 317 }, { "row": 156, "col": 316 }, { "row": 156, "col": 315 }, { "row": 156, "col": 314 }, { "row": 156, "col": 313 }, { "row": 156, "col": 312 }, { "row": 156, "col": 311 }, { "row": 156, "col": 310 }, { "row": 165, "col": 308 }, { "row": 166, "col": 275 }, { "row": 166, "col": 276 }, { "row": 166, "col": 298 }, { "row": 166, "col": 297 }, { "row": 166, "col": 296 }, { "row": 166, "col": 295 }, { "row": 166, "col": 299 }, { "row": 166, "col": 294 }, { "row": 166, "col": 293 }, { "row": 166, "col": 291 }, { "row": 166, "col": 290 }, { "row": 166, "col": 289 }, { "row": 166, "col": 288 }, { "row": 166, "col": 287 }, { "row": 166, "col": 292 }, { "row": 166, "col": 286 }, { "row": 166, "col": 285 }, { "row": 166, "col": 284 }, { "row": 166, "col": 283 }, { "row": 166, "col": 282 }, { "row": 166, "col": 281 }, { "row": 166, "col": 280 }, { "row": 166, "col": 279 }, { "row": 166, "col": 278 }, { "row": 166, "col": 277 }, { "row": 166, "col": 274 }, { "row": 155, "col": 273 }, { "row": 154, "col": 273 }, { "row": 153, "col": 273 }, { "row": 153, "col": 274 }, { "row": 153, "col": 275 }, { "row": 153, "col": 276 }, { "row": 153, "col": 277 }, { "row": 153, "col": 278 }, { "row": 153, "col": 279 }, { "row": 153, "col": 280 }, { "row": 154, "col": 282 }, { "row": 154, "col": 283 }, { "row": 154, "col": 284 }, { "row": 154, "col": 285 }, { "row": 154, "col": 286 }, { "row": 154, "col": 287 }, { "row": 154, "col": 288 }, { "row": 154, "col": 289 }, { "row": 154, "col": 290 }, { "row": 154, "col": 291 }, { "row": 154, "col": 292 }, { "row": 154, "col": 293 }, { "row": 154, "col": 294 }, { "row": 154, "col": 295 }, { "row": 154, "col": 296 }, { "row": 154, "col": 297 }, { "row": 154, "col": 298 }, { "row": 154, "col": 299 }, { "row": 154, "col": 300 }, { "row": 154, "col": 302 }, { "row": 154, "col": 303 }, { "row": 154, "col": 304 }, { "row": 154, "col": 305 }, { "row": 153, "col": 305 }, { "row": 153, "col": 304 }, { "row": 153, "col": 303 }, { "row": 153, "col": 302 }, { "row": 153, "col": 301 }, { "row": 153, "col": 300 }, { "row": 153, "col": 299 }, { "row": 153, "col": 298 }, { "row": 153, "col": 297 }, { "row": 153, "col": 296 }, { "row": 153, "col": 295 }, { "row": 153, "col": 294 }, { "row": 153, "col": 293 }, { "row": 153, "col": 292 }, { "row": 153, "col": 291 }, { "row": 153, "col": 290 }, { "row": 153, "col": 289 }, { "row": 153, "col": 288 }, { "row": 153, "col": 287 }, { "row": 153, "col": 286 }, { "row": 153, "col": 284 }, { "row": 153, "col": 283 }, { "row": 153, "col": 282 }, { "row": 153, "col": 281 }, { "row": 154, "col": 274 }, { "row": 154, "col": 275 }, { "row": 154, "col": 276 }, { "row": 154, "col": 277 }, { "row": 154, "col": 278 }, { "row": 154, "col": 279 }, { "row": 154, "col": 280 }, { "row": 154, "col": 281 }, { "row": 153, "col": 285 }, { "row": 154, "col": 301 }, { "row": 153, "col": 272 }, { "row": 154, "col": 272 }, { "row": 155, "col": 272 }, { "row": 165, "col": 307 }, { "row": 165, "col": 306 }, { "row": 165, "col": 301 }, { "row": 165, "col": 302 }, { "row": 165, "col": 303 }, { "row": 165, "col": 304 }, { "row": 165, "col": 305 }, { "row": 165, "col": 309 }, { "row": 165, "col": 310 }, { "row": 165, "col": 311 }, { "row": 165, "col": 312 }, { "row": 165, "col": 313 }, { "row": 165, "col": 314 }, { "row": 165, "col": 315 }, { "row": 165, "col": 316 }, { "row": 165, "col": 317 }, { "row": 165, "col": 318 }, { "row": 165, "col": 319 }, { "row": 165, "col": 321 }, { "row": 165, "col": 322 }, { "row": 165, "col": 323 }, { "row": 165, "col": 324 }, { "row": 165, "col": 325 }, { "row": 165, "col": 326 }, { "row": 165, "col": 327 }, { "row": 165, "col": 328 }, { "row": 165, "col": 329 }, { "row": 165, "col": 330 }, { "row": 165, "col": 331 }, { "row": 166, "col": 329 }, { "row": 166, "col": 323 }, { "row": 165, "col": 320 }, { "row": 150, "col": 318 }, { "row": 151, "col": 318 }, { "row": 152, "col": 318 }, { "row": 153, "col": 318 }, { "row": 154, "col": 318 }, { "row": 155, "col": 318 }, { "row": 156, "col": 318 }, { "row": 156, "col": 320 }, { "row": 156, "col": 323 }, { "row": 155, "col": 321 }, { "row": 155, "col": 320 }, { "row": 154, "col": 320 }, { "row": 153, "col": 320 }, { "row": 152, "col": 320 }, { "row": 151, "col": 320 }, { "row": 150, "col": 320 }, { "row": 149, "col": 320 }, { "row": 149, "col": 321 }, { "row": 150, "col": 321 }, { "row": 151, "col": 321 }, { "row": 152, "col": 321 }, { "row": 153, "col": 321 }, { "row": 154, "col": 321 }, { "row": 155, "col": 322 }, { "row": 153, "col": 322 }, { "row": 152, "col": 322 }, { "row": 151, "col": 322 }, { "row": 149, "col": 322 }, { "row": 150, "col": 322 }, { "row": 149, "col": 319 }, { "row": 150, "col": 319 }, { "row": 151, "col": 319 }, { "row": 152, "col": 319 }, { "row": 153, "col": 319 }, { "row": 154, "col": 319 }, { "row": 155, "col": 319 }, { "row": 155, "col": 317 }, { "row": 155, "col": 316 }, { "row": 155, "col": 315 }, { "row": 155, "col": 314 }, { "row": 155, "col": 313 }, { "row": 155, "col": 310 }, { "row": 154, "col": 310 }, { "row": 147, "col": 322 }, { "row": 148, "col": 322 }, { "row": 154, "col": 311 }, { "row": 154, "col": 312 }, { "row": 155, "col": 312 }, { "row": 155, "col": 311 }, { "row": 159, "col": 305 }, { "row": 160, "col": 305 }, { "row": 161, "col": 305 }, { "row": 162, "col": 305 }, { "row": 163, "col": 305 }, { "row": 165, "col": 299 }, { "row": 155, "col": 304 }, { "row": 156, "col": 304 }, { "row": 157, "col": 304 }, { "row": 158, "col": 304 }, { "row": 159, "col": 304 }, { "row": 160, "col": 304 }, { "row": 161, "col": 304 }, { "row": 162, "col": 304 }, { "row": 163, "col": 304 }, { "row": 164, "col": 304 }, { "row": 164, "col": 305 }, { "row": 157, "col": 305 }, { "row": 156, "col": 305 }, { "row": 155, "col": 305 }, { "row": 158, "col": 305 }, { "row": 166, "col": 324 }, { "row": 157, "col": 331 }, { "row": 158, "col": 331 }, { "row": 159, "col": 331 }, { "row": 160, "col": 331 }, { "row": 161, "col": 331 }, { "row": 162, "col": 331 }, { "row": 163, "col": 331 }, { "row": 164, "col": 331 }, { "row": 161, "col": 332 }, { "row": 160, "col": 332 }, { "row": 159, "col": 332 }, { "row": 155, "col": 331 }, { "row": 155, "col": 332 }, { "row": 156, "col": 332 }, { "row": 158, "col": 332 }, { "row": 155, "col": 330 }, { "row": 155, "col": 323 }, { "row": 155, "col": 324 }, { "row": 155, "col": 325 }, { "row": 155, "col": 326 }, { "row": 155, "col": 327 }, { "row": 155, "col": 328 }, { "row": 155, "col": 329 }, { "row": 154, "col": 322 }, { "row": 3, "col": 189 }, { "row": 4, "col": 189 }, { "row": 5, "col": 189 }, { "row": 6, "col": 189 }, { "row": 7, "col": 189 }, { "row": 8, "col": 189 }, { "row": 9, "col": 189 }, { "row": 10, "col": 189 }, { "row": 11, "col": 189 }, { "row": 12, "col": 189 }, { "row": 13, "col": 189 }, { "row": 14, "col": 189 }, { "row": 15, "col": 189 }, { "row": 16, "col": 189 }, { "row": 17, "col": 189 }, { "row": 18, "col": 189 }, { "row": 19, "col": 189 }, { "row": 20, "col": 189 }, { "row": 21, "col": 189 }, { "row": 22, "col": 189 }, { "row": 23, "col": 189 }, { "row": 24, "col": 189 }, { "row": 25, "col": 189 }, { "row": 26, "col": 189 }, { "row": 27, "col": 189 }, { "row": 28, "col": 189 }, { "row": 29, "col": 189 }, { "row": 30, "col": 189 }, { "row": 31, "col": 189 }, { "row": 32, "col": 189 }, { "row": 33, "col": 189 }, { "row": 34, "col": 189 }, { "row": 35, "col": 189 }, { "row": 36, "col": 189 }, { "row": 37, "col": 189 }, { "row": 38, "col": 189 }, { "row": 39, "col": 189 }, { "row": 40, "col": 189 }, { "row": 41, "col": 189 }, { "row": 42, "col": 189 }, { "row": 43, "col": 189 }, { "row": 44, "col": 189 }, { "row": 45, "col": 189 }, { "row": 46, "col": 189 }, { "row": 47, "col": 189 }, { "row": 48, "col": 189 }, { "row": 49, "col": 189 }, { "row": 50, "col": 189 }, { "row": 51, "col": 189 }, { "row": 52, "col": 189 }, { "row": 53, "col": 189 }, { "row": 55, "col": 180 }, { "row": 56, "col": 180 }, { "row": 57, "col": 180 }, { "row": 58, "col": 180 }, { "row": 59, "col": 180 }, { "row": 60, "col": 180 }, { "row": 61, "col": 180 }, { "row": 62, "col": 180 }, { "row": 63, "col": 180 }, { "row": 64, "col": 180 }, { "row": 65, "col": 180 }, { "row": 66, "col": 180 }, { "row": 67, "col": 180 }, { "row": 68, "col": 180 }, { "row": 69, "col": 180 }, { "row": 55, "col": 197 }, { "row": 56, "col": 197 }, { "row": 57, "col": 197 }, { "row": 58, "col": 197 }, { "row": 59, "col": 197 }, { "row": 60, "col": 197 }, { "row": 61, "col": 197 }, { "row": 62, "col": 197 }, { "row": 63, "col": 197 }, { "row": 64, "col": 197 }, { "row": 65, "col": 197 }, { "row": 66, "col": 197 }, { "row": 67, "col": 197 }, { "row": 68, "col": 197 }, { "row": 69, "col": 197 }, { "row": 69, "col": 199 }, { "row": 68, "col": 199 }, { "row": 67, "col": 199 }, { "row": 66, "col": 199 }, { "row": 65, "col": 199 }, { "row": 64, "col": 199 }, { "row": 63, "col": 199 }, { "row": 62, "col": 199 }, { "row": 61, "col": 199 }, { "row": 55, "col": 199 }, { "row": 56, "col": 199 }, { "row": 57, "col": 199 }, { "row": 58, "col": 199 }, { "row": 59, "col": 199 }, { "row": 60, "col": 199 }, { "row": 55, "col": 181 }, { "row": 56, "col": 181 }, { "row": 57, "col": 181 }, { "row": 58, "col": 181 }, { "row": 59, "col": 181 }, { "row": 60, "col": 181 }, { "row": 61, "col": 181 }, { "row": 62, "col": 181 }, { "row": 63, "col": 181 }, { "row": 64, "col": 181 }, { "row": 65, "col": 181 }, { "row": 66, "col": 181 }, { "row": 67, "col": 181 }, { "row": 68, "col": 181 }, { "row": 69, "col": 181 }, { "row": 53, "col": 242 }, { "row": 54, "col": 242 }, { "row": 55, "col": 242 }, { "row": 56, "col": 242 }, { "row": 57, "col": 242 }, { "row": 58, "col": 242 }, { "row": 59, "col": 242 }, { "row": 60, "col": 242 }, { "row": 61, "col": 242 }, { "row": 62, "col": 242 }, { "row": 63, "col": 242 }, { "row": 64, "col": 242 }, { "row": 65, "col": 242 }, { "row": 66, "col": 242 }, { "row": 67, "col": 242 }, { "row": 68, "col": 242 }, { "row": 69, "col": 242 }, { "row": 70, "col": 242 }, { "row": 70, "col": 244 }, { "row": 69, "col": 244 }, { "row": 68, "col": 244 }, { "row": 67, "col": 244 }, { "row": 66, "col": 244 }, { "row": 65, "col": 244 }, { "row": 64, "col": 244 }, { "row": 63, "col": 244 }, { "row": 62, "col": 244 }, { "row": 61, "col": 244 }, { "row": 60, "col": 244 }, { "row": 59, "col": 244 }, { "row": 58, "col": 244 }, { "row": 57, "col": 244 }, { "row": 56, "col": 244 }, { "row": 55, "col": 244 }, { "row": 54, "col": 244 }, { "row": 53, "col": 244 }, { "row": 53, "col": 228 }, { "row": 53, "col": 229 }, { "row": 53, "col": 230 }, { "row": 53, "col": 231 }, { "row": 53, "col": 232 }, { "row": 53, "col": 233 }, { "row": 53, "col": 234 }, { "row": 53, "col": 235 }, { "row": 53, "col": 236 }, { "row": 53, "col": 237 }, { "row": 53, "col": 238 }, { "row": 53, "col": 239 }, { "row": 53, "col": 240 }, { "row": 53, "col": 241 }, { "row": 53, "col": 245 }, { "row": 53, "col": 246 }, { "row": 53, "col": 247 }, { "row": 53, "col": 248 }, { "row": 53, "col": 249 }, { "row": 53, "col": 250 }, { "row": 53, "col": 251 }, { "row": 53, "col": 252 }, { "row": 53, "col": 253 }, { "row": 53, "col": 254 }, { "row": 53, "col": 255 }, { "row": 53, "col": 256 }, { "row": 53, "col": 257 }, { "row": 53, "col": 258 }, { "row": 53, "col": 259 }, { "row": 53, "col": 260 }, { "row": 54, "col": 260 }, { "row": 56, "col": 260 }, { "row": 55, "col": 260 }, { "row": 57, "col": 260 }, { "row": 58, "col": 260 }, { "row": 59, "col": 260 }, { "row": 60, "col": 260 }, { "row": 61, "col": 260 }, { "row": 62, "col": 260 }, { "row": 63, "col": 260 }, { "row": 64, "col": 260 }, { "row": 65, "col": 260 }, { "row": 66, "col": 260 }, { "row": 67, "col": 260 }, { "row": 68, "col": 260 }, { "row": 69, "col": 260 }, { "row": 70, "col": 260 }, { "row": 70, "col": 262 }, { "row": 69, "col": 262 }, { "row": 68, "col": 262 }, { "row": 67, "col": 262 }, { "row": 66, "col": 262 }, { "row": 65, "col": 262 }, { "row": 64, "col": 262 }, { "row": 63, "col": 262 }, { "row": 62, "col": 262 }, { "row": 61, "col": 262 }, { "row": 60, "col": 262 }, { "row": 59, "col": 262 }, { "row": 58, "col": 262 }, { "row": 57, "col": 262 }, { "row": 56, "col": 262 }, { "row": 55, "col": 262 }, { "row": 54, "col": 262 }, { "row": 53, "col": 262 }, { "row": 52, "col": 262 }, { "row": 55, "col": 182 }, { "row": 55, "col": 183 }, { "row": 55, "col": 184 }, { "row": 55, "col": 185 }, { "row": 55, "col": 186 }, { "row": 55, "col": 188 }, { "row": 55, "col": 189 }, { "row": 55, "col": 190 }, { "row": 55, "col": 191 }, { "row": 55, "col": 192 }, { "row": 55, "col": 193 }, { "row": 55, "col": 187 }, { "row": 55, "col": 194 }, { "row": 55, "col": 195 }, { "row": 55, "col": 196 }, { "row": 55, "col": 200 }, { "row": 55, "col": 201 }, { "row": 55, "col": 202 }, { "row": 55, "col": 203 }, { "row": 55, "col": 204 }, { "row": 55, "col": 205 }, { "row": 55, "col": 206 }, { "row": 55, "col": 207 }, { "row": 55, "col": 208 }, { "row": 55, "col": 209 }, { "row": 55, "col": 210 }, { "row": 55, "col": 211 }, { "row": 55, "col": 212 }, { "row": 55, "col": 213 }, { "row": 55, "col": 214 }, { "row": 55, "col": 215 }, { "row": 55, "col": 217 }, { "row": 56, "col": 217 }, { "row": 57, "col": 217 }, { "row": 58, "col": 217 }, { "row": 60, "col": 217 }, { "row": 60, "col": 226 }, { "row": 60, "col": 227 }, { "row": 61, "col": 227 }, { "row": 61, "col": 226 }, { "row": 61, "col": 225 }, { "row": 60, "col": 225 }, { "row": 58, "col": 226 }, { "row": 57, "col": 226 }, { "row": 56, "col": 226 }, { "row": 55, "col": 226 }, { "row": 54, "col": 226 }, { "row": 53, "col": 226 }, { "row": 52, "col": 226 }, { "row": 51, "col": 226 }, { "row": 50, "col": 226 }, { "row": 49, "col": 226 }, { "row": 48, "col": 226 }, { "row": 47, "col": 226 }, { "row": 46, "col": 226 }, { "row": 45, "col": 226 }, { "row": 44, "col": 226 }, { "row": 43, "col": 226 }, { "row": 42, "col": 226 }, { "row": 41, "col": 226 }, { "row": 40, "col": 226 }, { "row": 39, "col": 226 }, { "row": 38, "col": 226 }, { "row": 37, "col": 226 }, { "row": 36, "col": 226 }, { "row": 35, "col": 226 }, { "row": 34, "col": 226 }, { "row": 33, "col": 226 }, { "row": 32, "col": 226 }, { "row": 31, "col": 226 }, { "row": 30, "col": 226 }, { "row": 29, "col": 226 }, { "row": 28, "col": 226 }, { "row": 27, "col": 226 }, { "row": 26, "col": 226 }, { "row": 25, "col": 226 }, { "row": 24, "col": 226 }, { "row": 24, "col": 225 }, { "row": 22, "col": 225 }, { "row": 23, "col": 225 }, { "row": 21, "col": 225 }, { "row": 20, "col": 225 }, { "row": 19, "col": 224 }, { "row": 18, "col": 224 }, { "row": 17, "col": 224 }, { "row": 16, "col": 224 }, { "row": 15, "col": 224 }, { "row": 14, "col": 224 }, { "row": 14, "col": 223 }, { "row": 13, "col": 223 }, { "row": 12, "col": 223 }, { "row": 11, "col": 223 }, { "row": 10, "col": 223 }, { "row": 9, "col": 223 }, { "row": 8, "col": 223 }, { "row": 7, "col": 223 }, { "row": 6, "col": 223 }, { "row": 5, "col": 223 }, { "row": 4, "col": 223 }, { "row": 51, "col": 260 }, { "row": 49, "col": 261 }, { "row": 48, "col": 261 }, { "row": 47, "col": 261 }, { "row": 46, "col": 261 }, { "row": 45, "col": 261 }, { "row": 44, "col": 261 }, { "row": 43, "col": 261 }, { "row": 42, "col": 261 }, { "row": 41, "col": 261 }, { "row": 40, "col": 261 }, { "row": 39, "col": 261 }, { "row": 38, "col": 261 }, { "row": 37, "col": 261 }, { "row": 36, "col": 261 }, { "row": 35, "col": 261 }, { "row": 34, "col": 261 }, { "row": 33, "col": 261 }, { "row": 32, "col": 261 }, { "row": 31, "col": 261 }, { "row": 30, "col": 261 }, { "row": 29, "col": 261 }, { "row": 28, "col": 261 }, { "row": 27, "col": 261 }, { "row": 26, "col": 261 }, { "row": 25, "col": 261 }, { "row": 24, "col": 261 }, { "row": 23, "col": 261 }, { "row": 22, "col": 261 }, { "row": 21, "col": 261 }, { "row": 20, "col": 261 }, { "row": 19, "col": 261 }, { "row": 18, "col": 261 }, { "row": 18, "col": 259 }, { "row": 19, "col": 259 }, { "row": 13, "col": 260 }, { "row": 12, "col": 260 }, { "row": 11, "col": 260 }, { "row": 10, "col": 260 }, { "row": 9, "col": 260 }, { "row": 8, "col": 260 }, { "row": 7, "col": 260 }, { "row": 6, "col": 260 }, { "row": 5, "col": 260 }, { "row": 4, "col": 260 }, { "row": 3, "col": 260 }, { "row": 2, "col": 260 }, { "row": 13, "col": 224 }, { "row": 16, "col": 225 }, { "row": 17, "col": 225 }, { "row": 18, "col": 225 }, { "row": 19, "col": 225 }, { "row": 25, "col": 225 }, { "row": 26, "col": 225 }, { "row": 51, "col": 242 }, { "row": 50, "col": 242 }, { "row": 49, "col": 242 }, { "row": 48, "col": 242 }, { "row": 47, "col": 242 }, { "row": 46, "col": 242 }, { "row": 45, "col": 242 }, { "row": 44, "col": 242 }, { "row": 43, "col": 242 }, { "row": 42, "col": 242 }, { "row": 41, "col": 242 }, { "row": 40, "col": 242 }, { "row": 39, "col": 242 }, { "row": 39, "col": 243 }, { "row": 39, "col": 244 }, { "row": 40, "col": 243 }, { "row": 41, "col": 243 }, { "row": 42, "col": 243 }, { "row": 43, "col": 243 }, { "row": 44, "col": 243 }, { "row": 45, "col": 243 }, { "row": 46, "col": 243 }, { "row": 47, "col": 243 }, { "row": 48, "col": 243 }, { "row": 49, "col": 243 }, { "row": 50, "col": 243 }, { "row": 51, "col": 243 }, { "row": 54, "col": 199 }, { "row": 54, "col": 198 }, { "row": 53, "col": 216 }, { "row": 52, "col": 216 }, { "row": 51, "col": 216 }, { "row": 50, "col": 216 }, { "row": 50, "col": 215 }, { "row": 49, "col": 215 }, { "row": 49, "col": 216 }, { "row": 53, "col": 208 }, { "row": 52, "col": 208 }, { "row": 51, "col": 208 }, { "row": 51, "col": 209 }, { "row": 50, "col": 209 }, { "row": 50, "col": 208 }, { "row": 50, "col": 210 }, { "row": 51, "col": 210 }, { "row": 52, "col": 210 }, { "row": 52, "col": 209 }, { "row": 50, "col": 214 }, { "row": 49, "col": 214 }, { "row": 50, "col": 212 }, { "row": 51, "col": 212 }, { "row": 52, "col": 212 }, { "row": 53, "col": 212 }, { "row": 51, "col": 214 }, { "row": 51, "col": 215 }, { "row": 47, "col": 225 }, { "row": 47, "col": 224 }, { "row": 47, "col": 223 }, { "row": 47, "col": 222 }, { "row": 47, "col": 221 }, { "row": 48, "col": 221 }, { "row": 49, "col": 221 }, { "row": 50, "col": 221 }, { "row": 50, "col": 222 }, { "row": 50, "col": 223 }, { "row": 49, "col": 223 }, { "row": 48, "col": 223 }, { "row": 48, "col": 222 }, { "row": 49, "col": 222 }, { "row": 44, "col": 225 }, { "row": 44, "col": 224 }, { "row": 44, "col": 223 }, { "row": 44, "col": 222 }, { "row": 44, "col": 221 }, { "row": 42, "col": 225 }, { "row": 42, "col": 224 }, { "row": 42, "col": 223 }, { "row": 42, "col": 222 }, { "row": 42, "col": 221 }, { "row": 39, "col": 225 }, { "row": 39, "col": 224 }, { "row": 39, "col": 223 }, { "row": 39, "col": 222 }, { "row": 39, "col": 221 }, { "row": 36, "col": 225 }, { "row": 36, "col": 224 }, { "row": 36, "col": 223 }, { "row": 36, "col": 222 }, { "row": 31, "col": 225 }, { "row": 31, "col": 224 }, { "row": 31, "col": 223 }, { "row": 31, "col": 222 }, { "row": 31, "col": 221 }, { "row": 27, "col": 225 }, { "row": 27, "col": 224 }, { "row": 27, "col": 223 }, { "row": 27, "col": 222 }, { "row": 27, "col": 221 }, { "row": 23, "col": 224 }, { "row": 23, "col": 222 }, { "row": 23, "col": 221 }, { "row": 23, "col": 220 }, { "row": 23, "col": 223 }, { "row": 15, "col": 223 }, { "row": 19, "col": 223 }, { "row": 19, "col": 222 }, { "row": 19, "col": 221 }, { "row": 19, "col": 220 }, { "row": 14, "col": 222 }, { "row": 14, "col": 221 }, { "row": 14, "col": 220 }, { "row": 8, "col": 222 }, { "row": 8, "col": 221 }, { "row": 8, "col": 220 }, { "row": 8, "col": 219 }, { "row": 7, "col": 225 }, { "row": 7, "col": 226 }, { "row": 7, "col": 227 }, { "row": 13, "col": 226 }, { "row": 13, "col": 227 }, { "row": 13, "col": 228 }, { "row": 18, "col": 227 }, { "row": 18, "col": 228 }, { "row": 18, "col": 229 }, { "row": 18, "col": 230 }, { "row": 22, "col": 227 }, { "row": 22, "col": 228 }, { "row": 22, "col": 229 }, { "row": 22, "col": 230 }, { "row": 27, "col": 228 }, { "row": 27, "col": 229 }, { "row": 27, "col": 230 }, { "row": 27, "col": 231 }, { "row": 32, "col": 228 }, { "row": 32, "col": 229 }, { "row": 32, "col": 230 }, { "row": 32, "col": 231 }, { "row": 32, "col": 232 }, { "row": 36, "col": 228 }, { "row": 36, "col": 230 }, { "row": 36, "col": 231 }, { "row": 36, "col": 232 }, { "row": 36, "col": 229 }, { "row": 39, "col": 228 }, { "row": 39, "col": 229 }, { "row": 39, "col": 230 }, { "row": 39, "col": 231 }, { "row": 45, "col": 228 }, { "row": 45, "col": 229 }, { "row": 45, "col": 230 }, { "row": 51, "col": 230 }, { "row": 49, "col": 230 }, { "row": 48, "col": 230 }, { "row": 47, "col": 230 }, { "row": 46, "col": 230 }, { "row": 50, "col": 230 }, { "row": 51, "col": 232 }, { "row": 50, "col": 232 }, { "row": 49, "col": 232 }, { "row": 48, "col": 232 }, { "row": 51, "col": 234 }, { "row": 50, "col": 234 }, { "row": 49, "col": 234 }, { "row": 49, "col": 235 }, { "row": 49, "col": 236 }, { "row": 50, "col": 236 }, { "row": 51, "col": 236 }, { "row": 51, "col": 235 }, { "row": 50, "col": 235 }, { "row": 49, "col": 241 }, { "row": 49, "col": 240 }, { "row": 49, "col": 239 }, { "row": 48, "col": 239 }, { "row": 47, "col": 239 }, { "row": 47, "col": 238 }, { "row": 48, "col": 238 }, { "row": 49, "col": 238 }, { "row": 38, "col": 243 }, { "row": 37, "col": 243 }, { "row": 36, "col": 243 }, { "row": 35, "col": 243 }, { "row": 34, "col": 243 }, { "row": 33, "col": 243 }, { "row": 32, "col": 243 }, { "row": 32, "col": 242 }, { "row": 33, "col": 242 }, { "row": 34, "col": 242 }, { "row": 34, "col": 244 }, { "row": 33, "col": 244 }, { "row": 32, "col": 244 }, { "row": 50, "col": 245 }, { "row": 50, "col": 246 }, { "row": 50, "col": 247 }, { "row": 51, "col": 252 }, { "row": 50, "col": 252 }, { "row": 49, "col": 252 }, { "row": 49, "col": 253 }, { "row": 49, "col": 254 }, { "row": 58, "col": 218 }, { "row": 58, "col": 219 }, { "row": 58, "col": 222 }, { "row": 58, "col": 223 }, { "row": 58, "col": 224 }, { "row": 58, "col": 225 }, { "row": 58, "col": 221 }, { "row": 58, "col": 220 }, { "row": 57, "col": 218 }, { "row": 57, "col": 220 }, { "row": 57, "col": 221 }, { "row": 57, "col": 222 }, { "row": 57, "col": 223 }, { "row": 57, "col": 224 }, { "row": 57, "col": 219 }, { "row": 60, "col": 216 }, { "row": 53, "col": 179 }, { "row": 52, "col": 179 }, { "row": 51, "col": 179 }, { "row": 50, "col": 179 }, { "row": 51, "col": 178 }, { "row": 51, "col": 177 }, { "row": 52, "col": 177 }, { "row": 52, "col": 176 }, { "row": 52, "col": 175 }, { "row": 51, "col": 175 }, { "row": 51, "col": 176 }, { "row": 55, "col": 178 }, { "row": 55, "col": 177 }, { "row": 55, "col": 176 }, { "row": 55, "col": 175 }, { "row": 53, "col": 182 }, { "row": 52, "col": 182 }, { "row": 51, "col": 182 }, { "row": 53, "col": 186 }, { "row": 52, "col": 186 }, { "row": 51, "col": 186 }, { "row": 53, "col": 192 }, { "row": 52, "col": 192 }, { "row": 51, "col": 192 }, { "row": 53, "col": 195 }, { "row": 53, "col": 194 }, { "row": 52, "col": 194 }, { "row": 51, "col": 194 }, { "row": 45, "col": 187 }, { "row": 45, "col": 186 }, { "row": 45, "col": 185 }, { "row": 45, "col": 184 }, { "row": 45, "col": 190 }, { "row": 45, "col": 191 }, { "row": 45, "col": 192 }, { "row": 45, "col": 193 }, { "row": 41, "col": 190 }, { "row": 41, "col": 191 }, { "row": 41, "col": 192 }, { "row": 41, "col": 193 }, { "row": 41, "col": 187 }, { "row": 41, "col": 186 }, { "row": 41, "col": 185 }, { "row": 41, "col": 184 }];

        // Create a Set for fast lookup of available coordinates
        this.availablePathSet = new Set(
            this.availablePathCoordinates.map(coord => `${coord.row},${coord.col}`)
        );
    }

    setupEventListeners() {
        document.getElementById("allowDiagonal").addEventListener("change", (e) => {
            this.allowDiagonal = e.target.checked;
        });

        // Handle multi-select polygon drawing
        this.canvas.addEventListener('dblclick', (e) => {
            if (this.mode === 'multiSelect' && this.multiSelectPoints.length >= 3) {
                this.completePolygonAndFill();
            } else if (this.mode === 'constrainArea' && this.constraintAreaPoints.length >= 3) {
                this.completeConstraintArea();
            }
        });

        // Handle obstacle brush mode with improved event handling
        this.canvas.addEventListener('mousedown', (e) => {
            if (this.mode === 'obstacle') {
                if (e.button === 2) { // Right click
                    e.preventDefault();
                    e.stopPropagation();
                    this.isBrushing = true;
                    this.lastBrushedCell = null;
                    this.paintObstacle(e);
                    console.log('Started brushing'); // Debug log

                    // Capture mouse for better drag handling
                    this.canvas.setPointerCapture && this.canvas.setPointerCapture(e.pointerId);
                }
            }
        });

        this.canvas.addEventListener('mousemove', (e) => {
            if (this.mode === 'obstacle' && this.isBrushing) {
                e.preventDefault();
                e.stopPropagation();
                this.paintObstacle(e);
            }
        });

        // Handle mouseup globally to catch when mouse is released outside canvas
        document.addEventListener('mouseup', (e) => {
            if (this.isBrushing && e.button === 2) {
                e.preventDefault();
                e.stopPropagation();
                this.isBrushing = false;
                this.lastBrushedCell = null;
                this.updateUI();
                console.log('Stopped brushing'); // Debug log
            }
        });

        // Alternative: also handle on canvas
        this.canvas.addEventListener('mouseup', (e) => {
            if (this.mode === 'obstacle' && this.isBrushing && e.button === 2) {
                e.preventDefault();
                e.stopPropagation();
                this.isBrushing = false;
                this.lastBrushedCell = null;
                this.updateUI();
                console.log('Stopped brushing on canvas'); // Debug log
            }
        });

        // Prevent context menu on right click - multiple approaches
        this.canvas.addEventListener('contextmenu', (e) => {
            if (this.mode === 'obstacle') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        });

        // Also prevent on document level when in obstacle mode
        document.addEventListener('contextmenu', (e) => {
            if (this.mode === 'obstacle' && e.target === this.canvas) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            const destinationDropdown = document.getElementById("destinationDropdown");
            const destinationDropdownToggle = document.querySelector(".destination-dropdown button");

            // Close destination dropdown
            if (!event.target.matches('.destination-dropdown button') &&
                !event.target.closest('.destination-dropdown .dropdown-menu') &&
                destinationDropdown && destinationDropdown.classList.contains("show-dropdown")) {
                this.closeDestinationDropdown();
            }

            // Close modal when clicking outside
            const modal = document.getElementById('saveDestinationModal');
            if (event.target === modal) {
                this.closeSaveDestinationDialog();
            }
        });
    }

    initGrid() {
        // Initialize grid with all cells as obstacles by default
        this.grid = Array.from({ length: this.gridRows }, () => Array(this.gridCols).fill(CELL_TYPES.OBSTACLE));

        // Mark only available path coordinates as empty (traversable)
        this.availablePathCoordinates.forEach(coord => {
            if (coord.row >= 0 && coord.row < this.gridRows &&
                coord.col >= 0 && coord.col < this.gridCols) {
                this.grid[coord.row][coord.col] = CELL_TYPES.EMPTY;
            }
        });

        this.sources = [{ row: 164, col: 109 }]; // Fixed starting point
        this.destinations = [];
        this.obstacles = [];
        this.paths = [];
        this.returnPath = null;
        this.returnPathCost = 0;
        this.isReturnPathVisible = false;
        this.totalPathCost = 0;
        this.totalCostWithReturn = 0;

        document.getElementById("toggleReturnPath").disabled = true;
        document.getElementById("toggleReturnPath").classList.remove("active");
        this.updateUI();

        // Set the fixed starting point on the grid (ensure it's available)
        if (this.availablePathSet.has('164,109')) {
            this.grid[164][109] = CELL_TYPES.SHIP;
        } else {
            console.warn('Starting point (164,109) is not in available path coordinates!');
            // Force the starting point to be available
            this.grid[164][109] = CELL_TYPES.SHIP;
            this.availablePathSet.add('164,109');
        }
    }

    setMode(newMode) {
        this.mode = newMode;
        document.querySelectorAll("button").forEach(button => button.classList.remove("active"));
        const button = document.querySelector(`button[onclick*="setMode('${newMode}')"]`);
        if (button) button.classList.add("active");

        // Show/hide complete polygon button
        const completeBtn = document.getElementById("completePolygonBtn");
        if (completeBtn) {
            if (newMode === 'multiSelect') {
                completeBtn.classList.remove('hidden');
            } else {
                completeBtn.classList.add('hidden');
            }
        }

        // Show/hide obstacle instructions
        const obstacleInstructions = document.getElementById("obstacleInstructions");
        if (obstacleInstructions) {
            if (newMode === 'obstacle') {
                obstacleInstructions.classList.remove('hidden');
            } else {
                obstacleInstructions.classList.add('hidden');
            }
        }

        // Show/hide constraint area instructions and button
        const constraintInstructions = document.getElementById("constraintInstructions");
        const completeConstraintBtn = document.getElementById("completeConstraintBtn");
        if (constraintInstructions && completeConstraintBtn) {
            if (newMode === 'constrainArea') {
                constraintInstructions.classList.remove('hidden');
                completeConstraintBtn.classList.remove('hidden');
            } else {
                constraintInstructions.classList.add('hidden');
                completeConstraintBtn.classList.add('hidden');
            }
        }

        // Reset states when switching modes
        this.isBrushing = false;
        this.lastBrushedCell = null;

        // Reset multi-select state when switching modes
        if (newMode !== 'multiSelect') {
            this.multiSelectPoints = [];
            this.isDrawingPolygon = false;
            this.selectionRect = null;
        } else {
            // Start polygon drawing mode
            this.multiSelectPoints = [];
            this.isDrawingPolygon = true;
            this.selectionRect = null;
        }

        // Reset constraint area state when switching modes
        if (newMode !== 'constrainArea') {
            this.constraintAreaPoints = [];
            this.isDrawingConstraintArea = false;
        } else {
            // Start constraint area drawing mode
            this.constraintAreaPoints = [];
            this.isDrawingConstraintArea = true;
        }
    }

    setObstacleType(type) {
        // Simplified to single obstacle type
        this.selectedObstacleType = CELL_TYPES.OBSTACLE;
        this.setMode('obstacle');
    }

    getGridPosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return {
            row: Math.floor(y / this.cellHeight),
            col: Math.floor(x / this.cellWidth)
        };
    }

    paintObstacle(event) {
        const position = this.getGridPosition(event);
        const { row, col } = position;

        // Check if position is valid
        if (row < 0 || row >= this.gridRows || col < 0 || col >= this.gridCols) return;

        // Check if this is the same cell we just painted (avoid duplicates during drag)
        if (this.lastBrushedCell &&
            this.lastBrushedCell.row === row &&
            this.lastBrushedCell.col === col) return;

        // Only paint on empty cells
        if (this.grid[row][col] === CELL_TYPES.EMPTY) {
            this.grid[row][col] = this.selectedObstacleType;
            this.obstacles.push({ row, col, type: this.selectedObstacleType });
            this.lastBrushedCell = { row, col };
            console.log(`Painted obstacle at row: ${row}, col: ${col}`); // Debug log
            this.drawGrid(); // Immediate visual feedback
        }
    }

    drawPolygon() {
        if (this.multiSelectPoints.length < 2) return;

        // Draw lines connecting the points
        this.ctx.strokeStyle = "rgba(255, 0, 0, 0.8)";
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();

        const firstPoint = this.multiSelectPoints[0];
        this.ctx.moveTo(
            firstPoint.col * this.cellWidth + this.cellWidth / 2,
            firstPoint.row * this.cellHeight + this.cellHeight / 2
        );

        for (let i = 1; i < this.multiSelectPoints.length; i++) {
            const point = this.multiSelectPoints[i];
            this.ctx.lineTo(
                point.col * this.cellWidth + this.cellWidth / 2,
                point.row * this.cellHeight + this.cellHeight / 2
            );
        }

        // If we have 3+ points, show preview line back to start
        if (this.multiSelectPoints.length >= 3) {
            this.ctx.lineTo(
                firstPoint.col * this.cellWidth + this.cellWidth / 2,
                firstPoint.row * this.cellHeight + this.cellHeight / 2
            );
        }

        this.ctx.stroke();

        // Draw points
        this.ctx.fillStyle = "rgba(255, 0, 0, 0.9)";
        this.multiSelectPoints.forEach(point => {
            this.ctx.beginPath();
            this.ctx.arc(
                point.col * this.cellWidth + this.cellWidth / 2,
                point.row * this.cellHeight + this.cellHeight / 2,
                Math.min(this.cellWidth, this.cellHeight) / 4,
                0,
                Math.PI * 2
            );
            this.ctx.fill();
        });
    }

    completePolygonAndFill() {
        if (this.multiSelectPoints.length < 3) {
            alert('Need at least 3 points to create a polygon!');
            return;
        }

        // Fill all grid cells inside the polygon
        this.fillPolygonWithObstacles();

        // Reset polygon drawing
        this.multiSelectPoints = [];
        this.isDrawingPolygon = false;

        // Switch back to obstacle mode
        this.setMode('obstacle');

        this.updateUI();
        this.drawGrid();
    }

    fillPolygonWithObstacles() {
        // Get bounding box of the polygon
        const minRow = Math.min(...this.multiSelectPoints.map(p => p.row));
        const maxRow = Math.max(...this.multiSelectPoints.map(p => p.row));
        const minCol = Math.min(...this.multiSelectPoints.map(p => p.col));
        const maxCol = Math.max(...this.multiSelectPoints.map(p => p.col));

        // Check each cell in the bounding box
        for (let row = minRow; row <= maxRow; row++) {
            for (let col = minCol; col <= maxCol; col++) {
                if (this.isPointInsidePolygon(row, col)) {
                    if (this.grid[row] && this.grid[row][col] === CELL_TYPES.EMPTY) {
                        this.grid[row][col] = this.selectedObstacleType;
                        this.obstacles.push({ row, col, type: this.selectedObstacleType });
                    }
                }
            }
        }
    }

    isPointInsidePolygon(testRow, testCol) {
        // Ray casting algorithm to determine if point is inside polygon
        const testX = testCol + 0.5; // Center of cell
        const testY = testRow + 0.5; // Center of cell

        let inside = false;
        const polygon = this.multiSelectPoints;

        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i].col + 0.5;
            const yi = polygon[i].row + 0.5;
            const xj = polygon[j].col + 0.5;
            const yj = polygon[j].row + 0.5;

            if (((yi > testY) !== (yj > testY)) &&
                (testX < (xj - xi) * (testY - yi) / (yj - yi) + xi)) {
                inside = !inside;
            }
        }

        return inside;
    }

    // Constraint Area Functions
    drawConstraintArea() {
        if (this.constraintAreaPoints.length < 2) return;

        // Draw lines connecting the points in blue
        this.ctx.strokeStyle = "rgba(0, 123, 255, 0.8)";
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();

        const firstPoint = this.constraintAreaPoints[0];
        this.ctx.moveTo(
            firstPoint.col * this.cellWidth + this.cellWidth / 2,
            firstPoint.row * this.cellHeight + this.cellHeight / 2
        );

        for (let i = 1; i < this.constraintAreaPoints.length; i++) {
            const point = this.constraintAreaPoints[i];
            this.ctx.lineTo(
                point.col * this.cellWidth + this.cellWidth / 2,
                point.row * this.cellHeight + this.cellHeight / 2
            );
        }

        // If we have 3+ points, show preview line back to start
        if (this.constraintAreaPoints.length >= 3) {
            this.ctx.lineTo(
                firstPoint.col * this.cellWidth + this.cellWidth / 2,
                firstPoint.row * this.cellHeight + this.cellHeight / 2
            );
        }

        this.ctx.stroke();

        // Draw points in blue
        this.ctx.fillStyle = "rgba(0, 123, 255, 0.9)";
        this.constraintAreaPoints.forEach(point => {
            this.ctx.beginPath();
            this.ctx.arc(
                point.col * this.cellWidth + this.cellWidth / 2,
                point.row * this.cellHeight + this.cellHeight / 2,
                Math.min(this.cellWidth, this.cellHeight) / 4,
                0,
                Math.PI * 2
            );
            this.ctx.fill();
        });

        // Fill the area with semi-transparent overlay if completed
        if (this.constraintArea && this.constraintArea.length >= 3) {
            this.ctx.fillStyle = "rgba(0, 123, 255, 0.1)";
            this.ctx.beginPath();
            this.ctx.moveTo(
                this.constraintArea[0].col * this.cellWidth + this.cellWidth / 2,
                this.constraintArea[0].row * this.cellHeight + this.cellHeight / 2
            );
            for (let i = 1; i < this.constraintArea.length; i++) {
                this.ctx.lineTo(
                    this.constraintArea[i].col * this.cellWidth + this.cellWidth / 2,
                    this.constraintArea[i].row * this.cellHeight + this.cellHeight / 2
                );
            }
            this.ctx.closePath();
            this.ctx.fill();
        }
    }

    completeConstraintArea() {
        if (this.constraintAreaPoints.length < 3) {
            alert('Need at least 3 points to create a constraint area!');
            return;
        }

        // Save the constraint area
        this.constraintArea = [...this.constraintAreaPoints];

        // Reset constraint area drawing
        this.constraintAreaPoints = [];
        this.isDrawingConstraintArea = false;

        // Switch back to destination mode
        this.setMode('destination');

        this.updateUI();
        this.drawGrid();

        alert('Constraint area set! Pathfinding will now only travel through this area.');
    }

    clearConstraintArea() {
        this.constraintArea = null;
        this.constraintAreaPoints = [];
        this.isDrawingConstraintArea = false;
        this.drawGrid();
        alert('Constraint area cleared!');
    }

    isPointInsideConstraintArea(testRow, testCol) {
        if (!this.constraintArea || this.constraintArea.length < 3) {
            return true; // No constraint area set, allow all points
        }

        // Always allow source and destination points
        if (this.grid[testRow] && this.grid[testRow][testCol] === CELL_TYPES.SHIP) {
            return true; // Always allow ship/source
        }
        if (this.grid[testRow] && this.grid[testRow][testCol] === CELL_TYPES.PORT) {
            return true; // Always allow port/destination
        }

        // Ray casting algorithm to determine if point is inside constraint area
        const testX = testCol + 0.5; // Center of cell
        const testY = testRow + 0.5; // Center of cell

        let inside = false;
        const polygon = this.constraintArea;

        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i].col + 0.5;
            const yi = polygon[i].row + 0.5;
            const xj = polygon[j].col + 0.5;
            const yj = polygon[j].row + 0.5;

            if (((yi > testY) !== (yj > testY)) &&
                (testX < (xj - xi) * (testY - yi) / (yj - yi) + xi)) {
                inside = !inside;
            }
        }

        return inside;
    }

    toggleObstaclesVisibility() {
        // Toggle the visibility state
        this.areObstaclesHidden = !this.areObstaclesHidden;

        // Update button state
        const button = document.getElementById("toggleObstaclesBtn");
        if (button) {
            button.classList.toggle("active");
            button.textContent = this.areObstaclesHidden ? "👁️ Show Obstacles" : "👁️ Hide Obstacles";
        }

        // Redraw the grid to reflect changes
        this.drawGrid();
    }

    toggleReturnPath() {
        if (this.destinations.length < 2) {
            alert("Need at least 2 destinations to show return path");
            return;
        }

        this.isReturnPathVisible = !this.isReturnPathVisible;
        document.getElementById("toggleReturnPath").classList.toggle("active");

        if (this.isReturnPathVisible && !this.returnPath) {
            const lastPoint = this.destinations[this.destinations.length - 1];
            const firstSource = this.sources[0];
            this.returnPath = this.aStar(lastPoint, firstSource);
            if (this.returnPath) {
                this.returnPathCost = this.calculatePathCost(this.returnPath);
                this.totalCostWithReturn = this.totalPathCost + this.returnPathCost;
            }
        }

        this.drawGrid();
        this.paths.forEach(({ path, index }) => this.animatePath(path, index));

        if (this.isReturnPathVisible && this.returnPath) {
            this.animatePath(this.returnPath, "R");
        }

        this.updateUI();
    }

    drawGrid() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw background image if loaded
        if (this.backgroundImg && this.backgroundImg.complete) {
            this.ctx.drawImage(this.backgroundImg, 0, 0, this.canvas.width, this.canvas.height);
        }

        // Draw grid cells
        for (let row = 0; row < this.gridRows; row++) {
            for (let col = 0; col < this.gridCols; col++) {
                const x = col * this.cellWidth;
                const y = row * this.cellHeight;

                // Check if this cell is in available path coordinates
                const isAvailablePath = this.availablePathSet.has(`${row},${col}`);

                // Draw cell background based on availability
                if (isAvailablePath) {
                    // Available path cells - light blue tint
                    this.ctx.fillStyle = "rgba(173, 216, 230, 0.3)"; // Light blue for walkable areas
                    this.ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
                } else {
                    // Non-available cells - slightly darker
                    this.ctx.fillStyle = "rgba(128, 128, 128, 0.2)"; // Gray for non-walkable areas
                    this.ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
                }

                // Draw fixed path points first (so they appear under other elements)
                if (this.grid[row][col] === CELL_TYPES.FIXED_PATH) {
                    this.ctx.fillStyle = "rgba(255, 165, 0, 0.7)"; // Orange for fixed path
                    this.ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
                }

                // Only draw obstacles if they're not hidden
                if (!this.areObstaclesHidden) {
                    // Draw obstacles - make them more visible for non-available areas
                    if (this.grid[row][col] === CELL_TYPES.OBSTACLE) {
                        if (isAvailablePath) {
                            // This shouldn't happen, but if it does, show it as a conflict
                            this.ctx.fillStyle = "#FF4444"; // Red for conflicting obstacles
                        } else {
                            this.ctx.fillStyle = "#696969"; // Dark gray for normal obstacles
                        }
                        this.ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
                    }
                }
                // Draw sources (ships)
                else if (this.grid[row][col] === CELL_TYPES.SHIP) {
                    this.ctx.fillStyle = "#FF0000"; // Red for ships
                    this.ctx.beginPath();
                    this.ctx.arc(
                        x + this.cellWidth / 2,
                        y + this.cellHeight / 2,
                        Math.min(this.cellWidth, this.cellHeight) / 3,
                        0,
                        Math.PI * 2
                    );
                    this.ctx.fill();
                }
                // Draw destinations (ports)
                else if (this.grid[row][col] === CELL_TYPES.PORT) {
                    this.ctx.fillStyle = "#008000"; // Green for ports
                    this.ctx.beginPath();
                    this.ctx.arc(
                        x + this.cellWidth / 2,
                        y + this.cellHeight / 2,
                        Math.min(this.cellWidth, this.cellHeight) / 3,
                        0,
                        Math.PI * 2
                    );
                    this.ctx.fill();
                }
            }
        }

        // Draw fixed path lines connecting the points
        if (this.fixedPathPoints.length > 1) {
            this.ctx.strokeStyle = "rgba(255, 165, 0, 0.7)";
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(
                this.fixedPathPoints[0].col * this.cellWidth + this.cellWidth / 2,
                this.fixedPathPoints[0].row * this.cellHeight + this.cellHeight / 2
            );

            for (let i = 1; i < this.fixedPathPoints.length; i++) {
                this.ctx.lineTo(
                    this.fixedPathPoints[i].col * this.cellWidth + this.cellWidth / 2,
                    this.fixedPathPoints[i].row * this.cellHeight + this.cellHeight / 2
                );
            }
            this.ctx.stroke();
        }

        // Draw selection rectangle if active
        if (this.selectionRect) {
            this.ctx.strokeStyle = "rgba(0, 123, 255, 0.8)";
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(
                this.selectionRect.x,
                this.selectionRect.y,
                this.selectionRect.width,
                this.selectionRect.height
            );
        }

        // Draw polygon while in multi-select mode
        if (this.mode === 'multiSelect' && this.multiSelectPoints.length > 0) {
            this.drawPolygon();
        }

        // Draw constraint area while in constraint mode
        if (this.mode === 'constrainArea' && this.constraintAreaPoints.length > 0) {
            this.drawConstraintArea();
        }

        // Draw completed constraint area if it exists
        if (this.constraintArea && this.constraintArea.length >= 3) {
            this.drawConstraintArea();
        }
    }

    handleCanvasClick(event) {
        // Only handle left clicks for this method
        if (event.button !== 0) return;

        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const col = Math.floor(x / this.cellWidth);
        const row = Math.floor(y / this.cellHeight);

        if (row < 0 || row >= this.gridRows || col < 0 || col >= this.gridCols) return;

        if (this.mode === "multiSelect") {
            // Add point to polygon
            this.multiSelectPoints.push({ row, col });
            this.drawGrid();
            return;
        }

        if (this.mode === "constrainArea") {
            // Add point to constraint area polygon
            this.constraintAreaPoints.push({ row, col });
            this.drawGrid();
            return;
        }

        if (this.mode === "destination" && this.grid[row][col] === CELL_TYPES.EMPTY) {
            // Check if the destination is on an available path coordinate
            if (!this.availablePathSet.has(`${row},${col}`)) {
                alert("Destinations can only be placed on walkable path cells (highlighted areas).");
                return;
            }
            this.destinations.push({ row, col });
            this.grid[row][col] = CELL_TYPES.PORT;
        } else if (this.mode === "obstacle" && this.grid[row][col] === CELL_TYPES.EMPTY) {
            this.grid[row][col] = this.selectedObstacleType;
            this.obstacles.push({ row, col, type: this.selectedObstacleType });
        } else if (this.mode === "fixedPath" && this.grid[row][col] === CELL_TYPES.EMPTY) {
            this.grid[row][col] = CELL_TYPES.FIXED_PATH;
            this.fixedPathPoints.push({ row, col });
        } else if (this.mode === "remove") {
            this.grid[row][col] = CELL_TYPES.EMPTY;
            this.destinations = this.destinations.filter(d => d.row !== row || d.col !== col);
            this.obstacles = this.obstacles.filter(o => o.row !== row || o.col !== col);
            this.fixedPathPoints = this.fixedPathPoints.filter(fp => fp.row !== row || fp.col !== col);
        }

        this.updateUI();
        this.drawGrid();
    }

    findPath() {
        console.log('Starting pathfinding...'); // Debug log
        if (this.sources.length === 0 || this.destinations.length === 0) {
            alert("Please set at least one source and one destination.");
            return;
        }

        console.log('Sources:', this.sources); // Debug log
        console.log('Destinations:', this.destinations); // Debug log
        console.log('Constraint area:', this.constraintArea); // Debug log

        this.paths = [];
        this.returnPath = null;
        this.returnPathCost = 0;
        this.totalPathCost = 0;
        this.totalCostWithReturn = 0;
        this.isReturnPathVisible = false;
        document.getElementById("toggleReturnPath").classList.remove("active");

        // Create one continuous path through all destinations
        if (this.destinations.length === 1) {
            // Single destination - simple path
            const source = this.sources[0];
            const destination = this.destinations[0];
            const path = this.aStar(source, destination);

            if (path) {
                console.log(`Single path found with ${path.length} steps`); // Debug log
                const pathCost = this.calculatePathCost(path);
                this.paths.push({
                    path,
                    cost: pathCost,
                    index: 1
                });
                this.totalPathCost = pathCost;
            }
        } else {
            // Multiple destinations - create continuous path
            this.createContinuousPath();
        }

        document.getElementById("toggleReturnPath").disabled = this.destinations.length <= 1;
        this.updateUI();
        this.paths.forEach(({ path, index }) => this.animatePath(path, index));
    }

    createContinuousPath() {
        let currentPoint = this.sources[0];
        let remainingDestinations = [...this.destinations];
        let continuousPath = [];
        let totalCost = 0;

        // Start with the source point
        continuousPath.push(currentPoint);

        // Visit each destination in optimal order
        while (remainingDestinations.length > 0) {
            const closestDestination = this.findClosestDestination(currentPoint, remainingDestinations);
            console.log(`Finding path segment from (${currentPoint.row}, ${currentPoint.col}) to (${closestDestination.row}, ${closestDestination.col})`); // Debug log

            const pathSegment = this.aStar(currentPoint, closestDestination);

            if (pathSegment) {
                console.log(`Path segment found with ${pathSegment.length} steps`); // Debug log

                // Add the path segment to the continuous path
                // Skip the first point of the segment since it's the same as the current point
                continuousPath = continuousPath.concat(pathSegment.slice(1));

                const segmentCost = this.calculatePathCost(pathSegment);
                totalCost += segmentCost;

                // Move to the destination and remove it from remaining
                currentPoint = closestDestination;
                remainingDestinations = remainingDestinations.filter(d =>
                    d.row !== closestDestination.row || d.col !== closestDestination.col
                );
            } else {
                console.log(`No path segment found from (${currentPoint.row}, ${currentPoint.col}) to (${closestDestination.row}, ${closestDestination.col})`); // Debug log
                break; // Can't continue if we can't reach a destination
            }
        }

        if (continuousPath.length > 1) {
            console.log(`Continuous path created with ${continuousPath.length} total steps`); // Debug log
            this.paths.push({
                path: continuousPath,
                cost: totalCost,
                index: 1
            });
            this.totalPathCost = totalCost;
        }
    }

    findClosestDestination(source, destinationsList) {
        return destinationsList.reduce((closest, dest) =>
            !closest || this.heuristic(source, dest) < this.heuristic(source, closest) ? dest : closest, null);
    }

    aStar(start, end) {
        if (!end) return null;

        console.log(`A* starting from (${start.row}, ${start.col}) to (${end.row}, ${end.col})`); // Debug log

        const openSet = new PriorityQueue();
        openSet.enqueue(start, 0);

        const cameFrom = {};
        const gScore = Array.from({ length: this.gridRows }, () => Array(this.gridCols).fill(Infinity));
        const fScore = Array.from({ length: this.gridRows }, () => Array(this.gridCols).fill(Infinity));

        gScore[start.row][start.col] = 0;
        fScore[start.row][start.col] = this.heuristic(start, end);

        let iterations = 0; // Debug counter

        while (!openSet.isEmpty()) {
            iterations++;
            if (iterations > 10000) { // Prevent infinite loops
                console.log('A* exceeded maximum iterations'); // Debug log
                break;
            }

            const current = openSet.dequeue();

            if (current.row === end.row && current.col === end.col) {
                console.log(`A* found path in ${iterations} iterations`); // Debug log
                return this.reconstructPath(cameFrom, current);
            }

            // Define possible movements (4 or 8 directions)
            const directions = this.allowDiagonal ? [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1], // Cardinal directions
                [-1, -1],
                [-1, 1],
                [1, 1],
                [1, -1] // Diagonal directions
            ] : [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1] // Cardinal directions only
            ];

            for (const [dx, dy] of directions) {
                const neighbor = {
                    row: current.row + dy,
                    col: current.col + dx
                };

                // Check bounds
                if (neighbor.row < 0 || neighbor.row >= this.gridRows ||
                    neighbor.col < 0 || neighbor.col >= this.gridCols) {
                    continue;
                }

                // Check if the cell is in available path coordinates
                if (!this.availablePathSet.has(`${neighbor.row},${neighbor.col}`)) {
                    continue;
                }

                // Check if it's a valid cell type for pathfinding
                if (this.grid[neighbor.row][neighbor.col] !== CELL_TYPES.EMPTY &&
                    this.grid[neighbor.row][neighbor.col] !== CELL_TYPES.PORT &&
                    this.grid[neighbor.row][neighbor.col] !== CELL_TYPES.SHIP &&
                    this.grid[neighbor.row][neighbor.col] !== CELL_TYPES.FIXED_PATH) {
                    continue;
                }

                // Check constraint area if defined
                if (!this.isPointInsideConstraintArea(neighbor.row, neighbor.col)) {
                    continue;
                }

                // Diagonal movement cost is sqrt(2) ≈ 1.4
                const movementCost = (dx !== 0 && dy !== 0) ? 1.4 : 1;
                const tempG = gScore[current.row][current.col] +
                    this.getMovementCost(neighbor) * movementCost;

                if (tempG < gScore[neighbor.row][neighbor.col]) {
                    cameFrom[`${neighbor.row},${neighbor.col}`] = current;
                    gScore[neighbor.row][neighbor.col] = tempG;
                    fScore[neighbor.row][neighbor.col] = tempG + this.heuristic(neighbor, end);

                    if (!openSet.contains(neighbor, (a, b) => a.row === b.row && a.col === b.col)) {
                        openSet.enqueue(neighbor, fScore[neighbor.row][neighbor.col]);
                    }
                }
            }
        }
        console.log(`A* failed to find path after ${iterations} iterations`); // Debug log
        return null;
    }

    getMovementCost(cell) {
        if (this.grid[cell.row][cell.col] === CELL_TYPES.EMPTY ||
            this.grid[cell.row][cell.col] === CELL_TYPES.SHIP ||
            this.grid[cell.row][cell.col] === CELL_TYPES.PORT) {
            return 1;
        }

        // Fixed path has a very low cost to encourage the algorithm to use it
        if (this.grid[cell.row][cell.col] === CELL_TYPES.FIXED_PATH) {
            return 0.1; // Much lower cost than empty cells to encourage path usage
        }

        const baseCost = (OBSTACLE_MAP[this.grid[cell.row][cell.col]] && OBSTACLE_MAP[this.grid[cell.row][cell.col]].cost) || 1;
        const weatherImpact = WEATHER_CONFIG[this.weatherEffect].impact;
        return baseCost + weatherImpact;
    }

    reconstructPath(cameFrom, current) {
        const path = [];
        while (cameFrom[`${current.row},${current.col}`]) {
            path.push(current);
            current = cameFrom[`${current.row},${current.col}`];
        }
        path.push(current); // Add the starting point
        return path.reverse();
    }

    calculatePathCost(path) {
        return path.reduce((sum, cell) => sum + this.getMovementCost(cell), 0);
    }

    animatePath(path, pathIndex) {
        path.forEach(({ row, col }, index) => {
            setTimeout(() => {
                if (this.grid[row][col] !== CELL_TYPES.SHIP && this.grid[row][col] !== CELL_TYPES.PORT) {
                    this.ctx.fillStyle = pathIndex === "R" ? "purple" : "blue";
                    this.ctx.fillRect(col * this.cellWidth, row * this.cellHeight, this.cellWidth, this.cellHeight);
                    this.ctx.strokeStyle = "#333";
                    this.ctx.strokeRect(col * this.cellWidth, row * this.cellHeight, this.cellWidth, this.cellHeight);

                    if (this.paths.length > 1 || pathIndex === "R") {
                        this.ctx.fillStyle = "white";
                        this.ctx.font = `${Math.max(10, this.cellHeight / 2)}px Arial`;
                        this.ctx.textAlign = "center";
                        this.ctx.textBaseline = "middle";
                        this.ctx.fillText(
                            pathIndex,
                            col * this.cellWidth + this.cellWidth / 2,
                            row * this.cellHeight + this.cellHeight / 2
                        );
                    }
                }
            }, 10 * index);
        });
    }

    heuristic(a, b) {
        // Euclidean distance
        return Math.sqrt(Math.pow(a.row - b.row, 2) + Math.pow(a.col - b.col, 2));
    }

    clearGrid() {
        this.fixedPathPoints = [];
        this.multiSelectPoints = [];
        this.isDrawingPolygon = false;
        this.constraintAreaPoints = [];
        this.isDrawingConstraintArea = false;
        this.constraintArea = null;
        this.initGrid();
        this.drawGrid();
    }

    updateUI() {
        document.getElementById("sourceCount").textContent = this.sources.length;
        document.getElementById("destinationCount").textContent = this.destinations.length;
        document.getElementById("obstacleCount").textContent = this.obstacles.length;
        document.getElementById("pathCount").textContent = this.paths.length;

        let pathCostHTML = "";

        if (this.paths.length === 1 && this.destinations.length > 1) {
            // Single continuous path through multiple destinations
            const path = this.paths[0];
            pathCostHTML = `<strong>Continuous Path:</strong><br>`;
            pathCostHTML += `Length: ${path.path.length} steps<br>`;
            pathCostHTML += `Visits ${this.destinations.length} destinations<br>`;
            pathCostHTML += `Total Cost: ${path.cost.toFixed(2)}`;
        } else {
            // Multiple separate paths or single destination
            pathCostHTML = this.paths.map(({ cost, index }) =>
                `Path ${index}: Cost = ${cost.toFixed(2)}`).join("<br>");
        }

        pathCostHTML += (pathCostHTML ? "<br><br>" : "") +
            `<strong>Total Path Cost: ${this.totalPathCost.toFixed(2)}</strong>`;

        if (this.isReturnPathVisible && this.returnPath) {
            pathCostHTML += `<br><span style="color: purple; font-weight: bold;">
                            Return Path Cost: ${this.returnPathCost.toFixed(2)}</span>
                            <br><strong>Total Cost (with return): ${this.totalCostWithReturn.toFixed(2)}</strong>`;
        }

        document.getElementById("pathCost").innerHTML = pathCostHTML || "No paths found.";
    }

    generateObstacles() {
        const obstacleCount = Math.floor(this.gridRows * this.gridCols * 0.2);
        this.obstacles = [];

        for (let i = 0; i < obstacleCount; i++) {
            let row, col;
            do {
                row = Math.floor(Math.random() * this.gridRows);
                col = Math.floor(Math.random() * this.gridCols);
            } while (this.grid[row][col] !== CELL_TYPES.EMPTY);

            // Randomly select obstacle type (now just one type)
            this.grid[row][col] = CELL_TYPES.OBSTACLE;
            this.obstacles.push({ row, col, type: CELL_TYPES.OBSTACLE });
        }

        this.updateUI();
        this.drawGrid();
    }

    replayPaths() {
        this.drawGrid();
        this.paths.forEach(({ path, index }) => this.animatePath(path, index));
        if (this.isReturnPathVisible && this.returnPath) {
            this.animatePath(this.returnPath, "R");
        }
    }

    saveGrid() {
        const data = {
            gridRows: this.gridRows,
            gridCols: this.gridCols,
            grid: this.grid,
            sources: this.sources,
            destinations: this.destinations,
            obstacles: this.obstacles,
            fixedPathPoints: this.fixedPathPoints,
            constraintArea: this.constraintArea,
            weatherEffect: this.weatherEffect
        };

        const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "gridState.json";
        a.click();
        URL.revokeObjectURL(url);
    }

    loadGrid() {
        document.getElementById("loadInput").click();
    }

    handleLoad(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                this.gridRows = data.gridRows || 180;
                this.gridCols = data.gridCols || 370;
                this.cellWidth = this.canvas.width / this.gridCols;
                this.cellHeight = this.canvas.height / this.gridRows;
                this.grid = data.grid;
                this.sources = data.sources || [];
                this.destinations = data.destinations || [];
                this.obstacles = data.obstacles || [];
                this.fixedPathPoints = data.fixedPathPoints || [];
                this.constraintArea = data.constraintArea || null;
                this.weatherEffect = data.weatherEffect || "none";

                // Update UI elements
                document.getElementById("gridSize").value = this.gridSize;
                document.getElementById("weather").value = this.weatherEffect;

                // Clear any existing paths since we're loading a new grid
                this.paths = [];
                this.returnPath = null;
                this.isReturnPathVisible = false;
                document.getElementById("toggleReturnPath").classList.remove("active");

                this.updateUI();
                this.drawGrid();
            } catch (error) {
                console.error("Error loading grid:", error);
                alert("Failed to load grid file. Please check the console for details.");
            }
        };
        reader.readAsText(file);
    }

    updateWeather() {
        this.weatherEffect = document.getElementById("weather").value;
        this.updateUI();

        // Recalculate paths if they exist
        if (this.paths.length > 0) {
            this.findPath();
        }
    }

    // Destination Management Methods
    loadSavedDestinations() {
        const saved = localStorage.getItem('pathfindingDestinations');
        if (saved) {
            return JSON.parse(saved);
        }
        // If localStorage is empty, use default destinations (for deployment)
        if (typeof DEFAULT_SAVED_DESTINATIONS !== 'undefined' && DEFAULT_SAVED_DESTINATIONS.length > 0) {
            localStorage.setItem('pathfindingDestinations', JSON.stringify(DEFAULT_SAVED_DESTINATIONS));
            return [...DEFAULT_SAVED_DESTINATIONS];
        }
        return [];
    }

    saveSavedDestinations() {
        localStorage.setItem('pathfindingDestinations', JSON.stringify(this.savedDestinations));
    }

    showSaveDestinationDialog() {
        if (this.destinations.length === 0) {
            alert('Please set a destination first before saving!');
            return;
        }

        // Show modal
        const modal = document.getElementById('saveDestinationModal');
        const input = document.getElementById('destinationName');
        modal.style.display = 'block';
        input.focus();
        input.value = '';

        // Handle Enter key in input
        input.onkeypress = (e) => {
            if (e.key === 'Enter') {
                this.saveDestination();
            }
        };
    }

    closeSaveDestinationDialog() {
        const modal = document.getElementById('saveDestinationModal');
        modal.style.display = 'none';
    }

    saveDestination() {
        const nameInput = document.getElementById('destinationName');
        const name = nameInput.value.trim();

        if (!name) {
            alert('Please enter a name for the destination!');
            return;
        }

        if (this.destinations.length === 0) {
            alert('No destination to save!');
            return;
        }

        // Check if name already exists
        if (this.savedDestinations.some(dest => dest.name === name)) {
            alert('A destination with this name already exists!');
            return;
        }

        // Save current destinations
        const savedDestination = {
            name: name,
            destinations: [...this.destinations],
            timestamp: new Date().toISOString()
        };

        this.savedDestinations.push(savedDestination);
        this.saveSavedDestinations();
        this.updateDestinationDropdown();
        this.closeSaveDestinationDialog();

        alert(`Destination "${name}" saved successfully!`);
    }

    updateDestinationDropdown() {
        const dropdown = document.getElementById('destinationDropdown');
        dropdown.innerHTML = '';

        if (this.savedDestinations.length === 0) {
            dropdown.innerHTML = '<div style="padding: 10px; color: #666; font-style: italic;">No saved destinations</div>';
            return;
        }

        this.savedDestinations.forEach((dest, index) => {
            const button = document.createElement('button');
            button.textContent = `📍 ${dest.name}`;
            button.onclick = () => this.loadSavedDestination(index);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '🗑️';
            deleteBtn.style.marginLeft = '5px';
            deleteBtn.style.background = '#ef4444';
            deleteBtn.style.border = 'none';
            deleteBtn.style.borderRadius = '3px';
            deleteBtn.style.color = 'white';
            deleteBtn.style.padding = '2px 6px';
            deleteBtn.style.cursor = 'pointer';
            deleteBtn.onclick = (e) => {
                e.stopPropagation();
                this.deleteSavedDestination(index);
            };

            const container = document.createElement('div');
            container.style.display = 'flex';
            container.style.alignItems = 'center';
            container.style.justifyContent = 'space-between';
            container.appendChild(button);
            container.appendChild(deleteBtn);

            dropdown.appendChild(container);
        });
    }

    loadSavedDestination(index) {
        const savedDest = this.savedDestinations[index];
        if (!savedDest) return;

        // Clear current destinations
        this.destinations.forEach(dest => {
            this.grid[dest.row][dest.col] = CELL_TYPES.EMPTY;
        });

        // Set new destinations
        this.destinations = [...savedDest.destinations];
        this.destinations.forEach(dest => {
            this.grid[dest.row][dest.col] = CELL_TYPES.PORT;
        });

        // Find path automatically
        this.findPath();
        this.updateUI();
        this.drawGrid();
        this.closeDestinationDropdown();
    }

    deleteSavedDestination(index) {
        const dest = this.savedDestinations[index];
        if (confirm(`Delete destination "${dest.name}"?`)) {
            this.savedDestinations.splice(index, 1);
            this.saveSavedDestinations();
            this.updateDestinationDropdown();
        }
    }

    toggleDestinationDropdown() {
        const dropdown = document.getElementById("destinationDropdown");
        if (dropdown) {
            dropdown.classList.toggle("show-dropdown");
            this.updateDestinationDropdown();
        }
    }

    closeDestinationDropdown() {
        const dropdown = document.getElementById("destinationDropdown");
        if (dropdown) {
            dropdown.classList.remove("show-dropdown");
        }
    }

    populateDestinationSlide() {
        const destinationSelect = document.getElementById('destinationDropdownSelect');
        if (!destinationSelect) return;

        // Clear existing options except the first placeholder
        destinationSelect.innerHTML = '<option value="">Select a destination...</option>';

        if (this.savedDestinations.length === 0) {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'No saved destinations available';
            option.disabled = true;
            destinationSelect.appendChild(option);
            return;
        }

        this.savedDestinations.forEach((dest, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `📍 ${dest.name}`;
            destinationSelect.appendChild(option);
        });
    }

    mergeDestinationsWithRooms() {
        // Automatically match saved destinations with room database
        this.savedDestinations.forEach(dest => {
            if (!dest.roomCode || dest.roomCode === '') {
                // Try to match by name or keywords
                const matchedRoom = this.findMatchingRoom(dest.name);
                if (matchedRoom) {
                    dest.roomCode = matchedRoom.roomCode;
                    dest.roomInfo = matchedRoom;
                    console.log(`Auto-matched "${dest.name}" with room "${matchedRoom.roomName}"`);
                }
            } else {
                // Room code exists, load full room info
                const room = ROOM_DATABASE.find(r => r.roomCode === dest.roomCode);
                if (room) {
                    dest.roomInfo = room;
                }
            }
        });

        // Update room database with coordinates from saved destinations
        this.savedDestinations.forEach(dest => {
            if (dest.roomCode && dest.destinations && dest.destinations.length > 0) {
                const room = ROOM_DATABASE.find(r => r.roomCode === dest.roomCode);
                if (room) {
                    room.coordinates = dest.destinations[0];
                }
            }
        });

        this.saveSavedDestinations();
    }

    findMatchingRoom(destinationName) {
        const searchTerm = destinationName.toLowerCase();
        
        // Direct name match
        let match = ROOM_DATABASE.find(room => 
            room.roomName.toLowerCase() === searchTerm
        );
        if (match) return match;

        // Partial name match
        match = ROOM_DATABASE.find(room => 
            room.roomName.toLowerCase().includes(searchTerm) ||
            searchTerm.includes(room.roomName.toLowerCase())
        );
        if (match) return match;

        // Match by room code
        match = ROOM_DATABASE.find(room => 
            room.roomCode.toLowerCase() === searchTerm.replace(/\s+/g, '_')
        );
        if (match) return match;

        // Match by keywords in name
        const keywords = searchTerm.split(/\s+/);
        match = ROOM_DATABASE.find(room => {
            const roomNameLower = room.roomName.toLowerCase();
            return keywords.some(keyword => 
                keyword.length > 2 && roomNameLower.includes(keyword)
            );
        });
        if (match) return match;

        // Match by faculty name
        match = ROOM_DATABASE.find(room => 
            room.faculty.some(faculty => 
                faculty.name.toLowerCase().includes(searchTerm) ||
                searchTerm.includes(faculty.name.toLowerCase())
            )
        );
        if (match) return match;

        // Match by type
        if (searchTerm.includes('lab')) {
            match = ROOM_DATABASE.find(room => room.type === 'Laboratory');
        } else if (searchTerm.includes('office')) {
            match = ROOM_DATABASE.find(room => room.type.includes('Office'));
        }

        return match;
    }

    initGrid() {
        // Initialize grid with all cells as obstacles by default
        this.grid = Array.from({ length: this.gridRows }, () => Array(this.gridCols).fill(CELL_TYPES.OBSTACLE));

        // Mark only available path coordinates as empty (traversable)
        this.availablePathCoordinates.forEach(coord => {
            if (coord.row >= 0 && coord.row < this.gridRows &&
                coord.col >= 0 && coord.col < this.gridCols) {
                this.grid[coord.row][coord.col] = CELL_TYPES.EMPTY;
            }
        });

        this.sources = [{ row: 164, col: 109 }]; // Fixed starting point
        this.destinations = [];
        this.obstacles = [];
        this.paths = [];
        this.returnPath = null;
        this.returnPathCost = 0;
        this.isReturnPathVisible = false;
        this.totalPathCost = 0;
        this.totalCostWithReturn = 0;

        document.getElementById("toggleReturnPath").disabled = true;
        document.getElementById("toggleReturnPath").classList.remove("active");
        this.updateUI();

        // Set the fixed starting point on the grid (ensure it's available)
        if (this.availablePathSet.has('164,109')) {
            this.grid[164][109] = CELL_TYPES.SHIP;
        } else {
            console.warn('Starting point (164,109) is not in available path coordinates!');
            // Force the starting point to be available
            this.grid[164][109] = CELL_TYPES.SHIP;
            this.availablePathSet.add('164,109');
        }
    }

    setMode(newMode) {
        this.mode = newMode;
        document.querySelectorAll("button").forEach(button => button.classList.remove("active"));
        const button = document.querySelector(`button[onclick*="setMode('${newMode}')"]`);
        if (button) button.classList.add("active");

        // Show/hide complete polygon button
        const completeBtn = document.getElementById("completePolygonBtn");
        if (completeBtn) {
            if (newMode === 'multiSelect') {
                completeBtn.classList.remove('hidden');
            } else {
                completeBtn.classList.add('hidden');
            }
        }

        // Show/hide obstacle instructions
        const obstacleInstructions = document.getElementById("obstacleInstructions");
        if (obstacleInstructions) {
            if (newMode === 'obstacle') {
                obstacleInstructions.classList.remove('hidden');
            } else {
                obstacleInstructions.classList.add('hidden');
            }
        }

        // Show/hide constraint area instructions and button
        const constraintInstructions = document.getElementById("constraintInstructions");
        const completeConstraintBtn = document.getElementById("completeConstraintBtn");
        if (constraintInstructions && completeConstraintBtn) {
            if (newMode === 'constrainArea') {
                constraintInstructions.classList.remove('hidden');
                completeConstraintBtn.classList.remove('hidden');
            } else {
                constraintInstructions.classList.add('hidden');
                completeConstraintBtn.classList.add('hidden');
            }
        }

        // Reset states when switching modes
        this.isBrushing = false;
        this.lastBrushedCell = null;

        // Reset multi-select state when switching modes
        if (newMode !== 'multiSelect') {
            this.multiSelectPoints = [];
            this.isDrawingPolygon = false;
            this.selectionRect = null;
        } else {
            // Start polygon drawing mode
            this.multiSelectPoints = [];
            this.isDrawingPolygon = true;
            this.selectionRect = null;
        }

        // Reset constraint area state when switching modes
        if (newMode !== 'constrainArea') {
            this.constraintAreaPoints = [];
            this.isDrawingConstraintArea = false;
        } else {
            // Start constraint area drawing mode
            this.constraintAreaPoints = [];
            this.isDrawingConstraintArea = true;
        }
    }

    setObstacleType(type) {
        // Simplified to single obstacle type
        this.selectedObstacleType = CELL_TYPES.OBSTACLE;
        this.setMode('obstacle');
    }

    getGridPosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return {
            row: Math.floor(y / this.cellHeight),
            col: Math.floor(x / this.cellWidth)
        };
    }

    paintObstacle(event) {
        const position = this.getGridPosition(event);
        const { row, col } = position;

        // Check if position is valid
        if (row < 0 || row >= this.gridRows || col < 0 || col >= this.gridCols) return;

        // Check if this is the same cell we just painted (avoid duplicates during drag)
        if (this.lastBrushedCell &&
            this.lastBrushedCell.row === row &&
            this.lastBrushedCell.col === col) return;

        // Only paint on empty cells
        if (this.grid[row][col] === CELL_TYPES.EMPTY) {
            this.grid[row][col] = this.selectedObstacleType;
            this.obstacles.push({ row, col, type: this.selectedObstacleType });
            this.lastBrushedCell = { row, col };
            console.log(`Painted obstacle at row: ${row}, col: ${col}`); // Debug log
            this.drawGrid(); // Immediate visual feedback
        }
    }

    drawPolygon() {
        if (this.multiSelectPoints.length < 2) return;

        // Draw lines connecting the points
        this.ctx.strokeStyle = "rgba(255, 0, 0, 0.8)";
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();

        const firstPoint = this.multiSelectPoints[0];
        this.ctx.moveTo(
            firstPoint.col * this.cellWidth + this.cellWidth / 2,
            firstPoint.row * this.cellHeight + this.cellHeight / 2
        );

        for (let i = 1; i < this.multiSelectPoints.length; i++) {
            const point = this.multiSelectPoints[i];
            this.ctx.lineTo(
                point.col * this.cellWidth + this.cellWidth / 2,
                point.row * this.cellHeight + this.cellHeight / 2
            );
        }

        // If we have 3+ points, show preview line back to start
        if (this.multiSelectPoints.length >= 3) {
            this.ctx.lineTo(
                firstPoint.col * this.cellWidth + this.cellWidth / 2,
                firstPoint.row * this.cellHeight + this.cellHeight / 2
            );
        }

        this.ctx.stroke();

        // Draw points
        this.ctx.fillStyle = "rgba(255, 0, 0, 0.9)";
        this.multiSelectPoints.forEach(point => {
            this.ctx.beginPath();
            this.ctx.arc(
                point.col * this.cellWidth + this.cellWidth / 2,
                point.row * this.cellHeight + this.cellHeight / 2,
                Math.min(this.cellWidth, this.cellHeight) / 4,
                0,
                Math.PI * 2
            );
            this.ctx.fill();
        });
    }

    completePolygonAndFill() {
        if (this.multiSelectPoints.length < 3) {
            alert('Need at least 3 points to create a polygon!');
            return;
        }

        // Fill all grid cells inside the polygon
        this.fillPolygonWithObstacles();

        // Reset polygon drawing
        this.multiSelectPoints = [];
        this.isDrawingPolygon = false;

        // Switch back to obstacle mode
        this.setMode('obstacle');

        this.updateUI();
        this.drawGrid();
    }

    fillPolygonWithObstacles() {
        // Get bounding box of the polygon
        const minRow = Math.min(...this.multiSelectPoints.map(p => p.row));
        const maxRow = Math.max(...this.multiSelectPoints.map(p => p.row));
        const minCol = Math.min(...this.multiSelectPoints.map(p => p.col));
        const maxCol = Math.max(...this.multiSelectPoints.map(p => p.col));

        // Check each cell in the bounding box
        for (let row = minRow; row <= maxRow; row++) {
            for (let col = minCol; col <= maxCol; col++) {
                if (this.isPointInsidePolygon(row, col)) {
                    if (this.grid[row] && this.grid[row][col] === CELL_TYPES.EMPTY) {
                        this.grid[row][col] = this.selectedObstacleType;
                        this.obstacles.push({ row, col, type: this.selectedObstacleType });
                    }
                }
            }
        }
    }

    isPointInsidePolygon(testRow, testCol) {
        // Ray casting algorithm to determine if point is inside polygon
        const testX = testCol + 0.5; // Center of cell
        const testY = testRow + 0.5; // Center of cell

        let inside = false;
        const polygon = this.multiSelectPoints;

        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i].col + 0.5;
            const yi = polygon[i].row + 0.5;
            const xj = polygon[j].col + 0.5;
            const yj = polygon[j].row + 0.5;

            if (((yi > testY) !== (yj > testY)) &&
                (testX < (xj - xi) * (testY - yi) / (yj - yi) + xi)) {
                inside = !inside;
            }
        }

        return inside;
    }

    // Constraint Area Functions
    drawConstraintArea() {
        if (this.constraintAreaPoints.length < 2) return;

        // Draw lines connecting the points in blue
        this.ctx.strokeStyle = "rgba(0, 123, 255, 0.8)";
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();

        const firstPoint = this.constraintAreaPoints[0];
        this.ctx.moveTo(
            firstPoint.col * this.cellWidth + this.cellWidth / 2,
            firstPoint.row * this.cellHeight + this.cellHeight / 2
        );

        for (let i = 1; i < this.constraintAreaPoints.length; i++) {
            const point = this.constraintAreaPoints[i];
            this.ctx.lineTo(
                point.col * this.cellWidth + this.cellWidth / 2,
                point.row * this.cellHeight + this.cellHeight / 2
            );
        }

        // If we have 3+ points, show preview line back to start
        if (this.constraintAreaPoints.length >= 3) {
            this.ctx.lineTo(
                firstPoint.col * this.cellWidth + this.cellWidth / 2,
                firstPoint.row * this.cellHeight + this.cellHeight / 2
            );
        }

        this.ctx.stroke();

        // Draw points in blue
        this.ctx.fillStyle = "rgba(0, 123, 255, 0.9)";
        this.constraintAreaPoints.forEach(point => {
            this.ctx.beginPath();
            this.ctx.arc(
                point.col * this.cellWidth + this.cellWidth / 2,
                point.row * this.cellHeight + this.cellHeight / 2,
                Math.min(this.cellWidth, this.cellHeight) / 4,
                0,
                Math.PI * 2
            );
            this.ctx.fill();
        });

        // Fill the area with semi-transparent overlay if completed
        if (this.constraintArea && this.constraintArea.length >= 3) {
            this.ctx.fillStyle = "rgba(0, 123, 255, 0.1)";
            this.ctx.beginPath();
            this.ctx.moveTo(
                this.constraintArea[0].col * this.cellWidth + this.cellWidth / 2,
                this.constraintArea[0].row * this.cellHeight + this.cellHeight / 2
            );
            for (let i = 1; i < this.constraintArea.length; i++) {
                this.ctx.lineTo(
                    this.constraintArea[i].col * this.cellWidth + this.cellWidth / 2,
                    this.constraintArea[i].row * this.cellHeight + this.cellHeight / 2
                );
            }
            this.ctx.closePath();
            this.ctx.fill();
        }
    }

    completeConstraintArea() {
        if (this.constraintAreaPoints.length < 3) {
            alert('Need at least 3 points to create a constraint area!');
            return;
        }

        // Save the constraint area
        this.constraintArea = [...this.constraintAreaPoints];

        // Reset constraint area drawing
        this.constraintAreaPoints = [];
        this.isDrawingConstraintArea = false;

        // Switch back to destination mode
        this.setMode('destination');

        this.updateUI();
        this.drawGrid();

        alert('Constraint area set! Pathfinding will now only travel through this area.');
    }

    clearConstraintArea() {
        this.constraintArea = null;
        this.constraintAreaPoints = [];
        this.isDrawingConstraintArea = false;
        this.drawGrid();
        alert('Constraint area cleared!');
    }

    isPointInsideConstraintArea(testRow, testCol) {
        if (!this.constraintArea || this.constraintArea.length < 3) {
            return true; // No constraint area set, allow all points
        }

        // Always allow source and destination points
        if (this.grid[testRow] && this.grid[testRow][testCol] === CELL_TYPES.SHIP) {
            return true; // Always allow ship/source
        }
        if (this.grid[testRow] && this.grid[testRow][testCol] === CELL_TYPES.PORT) {
            return true; // Always allow port/destination
        }

        // Ray casting algorithm to determine if point is inside constraint area
        const testX = testCol + 0.5; // Center of cell
        const testY = testRow + 0.5; // Center of cell

        let inside = false;
        const polygon = this.constraintArea;

        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i].col + 0.5;
            const yi = polygon[i].row + 0.5;
            const xj = polygon[j].col + 0.5;
            const yj = polygon[j].row + 0.5;

            if (((yi > testY) !== (yj > testY)) &&
                (testX < (xj - xi) * (testY - yi) / (yj - yi) + xi)) {
                inside = !inside;
            }
        }

        return inside;
    }

    toggleObstaclesVisibility() {
        // Toggle the visibility state
        this.areObstaclesHidden = !this.areObstaclesHidden;

        // Update button state
        const button = document.getElementById("toggleObstaclesBtn");
        if (button) {
            button.classList.toggle("active");
            button.textContent = this.areObstaclesHidden ? "👁️ Show Obstacles" : "👁️ Hide Obstacles";
        }

        // Redraw the grid to reflect changes
        this.drawGrid();
    }

    toggleReturnPath() {
        if (this.destinations.length < 2) {
            alert("Need at least 2 destinations to show return path");
            return;
        }

        this.isReturnPathVisible = !this.isReturnPathVisible;
        document.getElementById("toggleReturnPath").classList.toggle("active");

        if (this.isReturnPathVisible && !this.returnPath) {
            const lastPoint = this.destinations[this.destinations.length - 1];
            const firstSource = this.sources[0];
            this.returnPath = this.aStar(lastPoint, firstSource);
            if (this.returnPath) {
                this.returnPathCost = this.calculatePathCost(this.returnPath);
                this.totalCostWithReturn = this.totalPathCost + this.returnPathCost;
            }
        }

        this.drawGrid();
        this.paths.forEach(({ path, index }) => this.animatePath(path, index));

        if (this.isReturnPathVisible && this.returnPath) {
            this.animatePath(this.returnPath, "R");
        }

        this.updateUI();
    }

    drawGrid() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw background image if loaded
        if (this.backgroundImg && this.backgroundImg.complete) {
            this.ctx.drawImage(this.backgroundImg, 0, 0, this.canvas.width, this.canvas.height);
        }

        // Draw grid cells
        for (let row = 0; row < this.gridRows; row++) {
            for (let col = 0; col < this.gridCols; col++) {
                const x = col * this.cellWidth;
                const y = row * this.cellHeight;

                // Check if this cell is in available path coordinates
                const isAvailablePath = this.availablePathSet.has(`${row},${col}`);

                // Draw cell background based on availability
                if (isAvailablePath) {
                    // Available path cells - light blue tint
                    this.ctx.fillStyle = "rgba(173, 216, 230, 0.3)"; // Light blue for walkable areas
                    this.ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
                } else {
                    // Non-available cells - slightly darker
                    this.ctx.fillStyle = "rgba(128, 128, 128, 0.2)"; // Gray for non-walkable areas
                    this.ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
                }

                // Draw fixed path points first (so they appear under other elements)
                if (this.grid[row][col] === CELL_TYPES.FIXED_PATH) {
                    this.ctx.fillStyle = "rgba(255, 165, 0, 0.7)"; // Orange for fixed path
                    this.ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
                }

                // Only draw obstacles if they're not hidden
                if (!this.areObstaclesHidden) {
                    // Draw obstacles - make them more visible for non-available areas
                    if (this.grid[row][col] === CELL_TYPES.OBSTACLE) {
                        if (isAvailablePath) {
                            // This shouldn't happen, but if it does, show it as a conflict
                            this.ctx.fillStyle = "#FF4444"; // Red for conflicting obstacles
                        } else {
                            this.ctx.fillStyle = "#696969"; // Dark gray for normal obstacles
                        }
                        this.ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
                    }
                }
                // Draw sources (ships)
                else if (this.grid[row][col] === CELL_TYPES.SHIP) {
                    this.ctx.fillStyle = "#FF0000"; // Red for ships
                    this.ctx.beginPath();
                    this.ctx.arc(
                        x + this.cellWidth / 2,
                        y + this.cellHeight / 2,
                        Math.min(this.cellWidth, this.cellHeight) / 3,
                        0,
                        Math.PI * 2
                    );
                    this.ctx.fill();
                }
                // Draw destinations (ports)
                else if (this.grid[row][col] === CELL_TYPES.PORT) {
                    this.ctx.fillStyle = "#008000"; // Green for ports
                    this.ctx.beginPath();
                    this.ctx.arc(
                        x + this.cellWidth / 2,
                        y + this.cellHeight / 2,
                        Math.min(this.cellWidth, this.cellHeight) / 3,
                        0,
                        Math.PI * 2
                    );
                    this.ctx.fill();
                }
            }
        }

        // Draw fixed path lines connecting the points
        if (this.fixedPathPoints.length > 1) {
            this.ctx.strokeStyle = "rgba(255, 165, 0, 0.7)";
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(
                this.fixedPathPoints[0].col * this.cellWidth + this.cellWidth / 2,
                this.fixedPathPoints[0].row * this.cellHeight + this.cellHeight / 2
            );

            for (let i = 1; i < this.fixedPathPoints.length; i++) {
                this.ctx.lineTo(
                    this.fixedPathPoints[i].col * this.cellWidth + this.cellWidth / 2,
                    this.fixedPathPoints[i].row * this.cellHeight + this.cellHeight / 2
                );
            }
            this.ctx.stroke();
        }

        // Draw selection rectangle if active
        if (this.selectionRect) {
            this.ctx.strokeStyle = "rgba(0, 123, 255, 0.8)";
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(
                this.selectionRect.x,
                this.selectionRect.y,
                this.selectionRect.width,
                this.selectionRect.height
            );
        }

        // Draw polygon while in multi-select mode
        if (this.mode === 'multiSelect' && this.multiSelectPoints.length > 0) {
            this.drawPolygon();
        }

        // Draw constraint area while in constraint mode
        if (this.mode === 'constrainArea' && this.constraintAreaPoints.length > 0) {
            this.drawConstraintArea();
        }

        // Draw completed constraint area if it exists
        if (this.constraintArea && this.constraintArea.length >= 3) {
            this.drawConstraintArea();
        }
    }

    handleCanvasClick(event) {
        // Only handle left clicks for this method
        if (event.button !== 0) return;

        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const col = Math.floor(x / this.cellWidth);
        const row = Math.floor(y / this.cellHeight);

        if (row < 0 || row >= this.gridRows || col < 0 || col >= this.gridCols) return;

        if (this.mode === "multiSelect") {
            // Add point to polygon
            this.multiSelectPoints.push({ row, col });
            this.drawGrid();
            return;
        }

        if (this.mode === "constrainArea") {
            // Add point to constraint area polygon
            this.constraintAreaPoints.push({ row, col });
            this.drawGrid();
            return;
        }

        if (this.mode === "destination" && this.grid[row][col] === CELL_TYPES.EMPTY) {
            // Check if the destination is on an available path coordinate
            if (!this.availablePathSet.has(`${row},${col}`)) {
                alert("Destinations can only be placed on walkable path cells (highlighted areas).");
                return;
            }
            this.destinations.push({ row, col });
            this.grid[row][col] = CELL_TYPES.PORT;
        } else if (this.mode === "obstacle" && this.grid[row][col] === CELL_TYPES.EMPTY) {
            this.grid[row][col] = this.selectedObstacleType;
            this.obstacles.push({ row, col, type: this.selectedObstacleType });
        } else if (this.mode === "fixedPath" && this.grid[row][col] === CELL_TYPES.EMPTY) {
            this.grid[row][col] = CELL_TYPES.FIXED_PATH;
            this.fixedPathPoints.push({ row, col });
        } else if (this.mode === "remove") {
            this.grid[row][col] = CELL_TYPES.EMPTY;
            this.destinations = this.destinations.filter(d => d.row !== row || d.col !== col);
            this.obstacles = this.obstacles.filter(o => o.row !== row || o.col !== col);
            this.fixedPathPoints = this.fixedPathPoints.filter(fp => fp.row !== row || fp.col !== col);
        }

        this.updateUI();
        this.drawGrid();
    }

    findPath() {
        console.log('Starting pathfinding...'); // Debug log
        if (this.sources.length === 0 || this.destinations.length === 0) {
            alert("Please set at least one source and one destination.");
            return;
        }

        console.log('Sources:', this.sources); // Debug log
        console.log('Destinations:', this.destinations); // Debug log
        console.log('Constraint area:', this.constraintArea); // Debug log

        this.paths = [];
        this.returnPath = null;
        this.returnPathCost = 0;
        this.totalPathCost = 0;
        this.totalCostWithReturn = 0;
        this.isReturnPathVisible = false;
        document.getElementById("toggleReturnPath").classList.remove("active");

        // Create one continuous path through all destinations
        if (this.destinations.length === 1) {
            // Single destination - simple path
            const source = this.sources[0];
            const destination = this.destinations[0];
            const path = this.aStar(source, destination);

            if (path) {
                console.log(`Single path found with ${path.length} steps`); // Debug log
                const pathCost = this.calculatePathCost(path);
                this.paths.push({
                    path,
                    cost: pathCost,
                    index: 1
                });
                this.totalPathCost = pathCost;
            }
        } else {
            // Multiple destinations - create continuous path
            this.createContinuousPath();
        }

        document.getElementById("toggleReturnPath").disabled = this.destinations.length <= 1;
        this.updateUI();
        this.paths.forEach(({ path, index }) => this.animatePath(path, index));
    }

    createContinuousPath() {
        let currentPoint = this.sources[0];
        let remainingDestinations = [...this.destinations];
        let continuousPath = [];
        let totalCost = 0;

        // Start with the source point
        continuousPath.push(currentPoint);

        // Visit each destination in optimal order
        while (remainingDestinations.length > 0) {
            const closestDestination = this.findClosestDestination(currentPoint, remainingDestinations);
            console.log(`Finding path segment from (${currentPoint.row}, ${currentPoint.col}) to (${closestDestination.row}, ${closestDestination.col})`); // Debug log

            const pathSegment = this.aStar(currentPoint, closestDestination);

            if (pathSegment) {
                console.log(`Path segment found with ${pathSegment.length} steps`); // Debug log

                // Add the path segment to the continuous path
                // Skip the first point of the segment since it's the same as the current point
                continuousPath = continuousPath.concat(pathSegment.slice(1));

                const segmentCost = this.calculatePathCost(pathSegment);
                totalCost += segmentCost;

                // Move to the destination and remove it from remaining
                currentPoint = closestDestination;
                remainingDestinations = remainingDestinations.filter(d =>
                    d.row !== closestDestination.row || d.col !== closestDestination.col
                );
            } else {
                console.log(`No path segment found from (${currentPoint.row}, ${currentPoint.col}) to (${closestDestination.row}, ${closestDestination.col})`); // Debug log
                break; // Can't continue if we can't reach a destination
            }
        }

        if (continuousPath.length > 1) {
            console.log(`Continuous path created with ${continuousPath.length} total steps`); // Debug log
            this.paths.push({
                path: continuousPath,
                cost: totalCost,
                index: 1
            });
            this.totalPathCost = totalCost;
        }
    }

    findClosestDestination(source, destinationsList) {
        return destinationsList.reduce((closest, dest) =>
            !closest || this.heuristic(source, dest) < this.heuristic(source, closest) ? dest : closest, null);
    }

    aStar(start, end) {
        if (!end) return null;

        console.log(`A* starting from (${start.row}, ${start.col}) to (${end.row}, ${end.col})`); // Debug log

        const openSet = new PriorityQueue();
        openSet.enqueue(start, 0);

        const cameFrom = {};
        const gScore = Array.from({ length: this.gridRows }, () => Array(this.gridCols).fill(Infinity));
        const fScore = Array.from({ length: this.gridRows }, () => Array(this.gridCols).fill(Infinity));

        gScore[start.row][start.col] = 0;
        fScore[start.row][start.col] = this.heuristic(start, end);

        let iterations = 0; // Debug counter

        while (!openSet.isEmpty()) {
            iterations++;
            if (iterations > 10000) { // Prevent infinite loops
                console.log('A* exceeded maximum iterations'); // Debug log
                break;
            }

            const current = openSet.dequeue();

            if (current.row === end.row && current.col === end.col) {
                console.log(`A* found path in ${iterations} iterations`); // Debug log
                return this.reconstructPath(cameFrom, current);
            }

            // Define possible movements (4 or 8 directions)
            const directions = this.allowDiagonal ? [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1], // Cardinal directions
                [-1, -1],
                [-1, 1],
                [1, 1],
                [1, -1] // Diagonal directions
            ] : [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1] // Cardinal directions only
            ];

            for (const [dx, dy] of directions) {
                const neighbor = {
                    row: current.row + dy,
                    col: current.col + dx
                };

                // Check bounds
                if (neighbor.row < 0 || neighbor.row >= this.gridRows ||
                    neighbor.col < 0 || neighbor.col >= this.gridCols) {
                    continue;
                }

                // Check if the cell is in available path coordinates
                if (!this.availablePathSet.has(`${neighbor.row},${neighbor.col}`)) {
                    continue;
                }

                // Check if it's a valid cell type for pathfinding
                if (this.grid[neighbor.row][neighbor.col] !== CELL_TYPES.EMPTY &&
                    this.grid[neighbor.row][neighbor.col] !== CELL_TYPES.PORT &&
                    this.grid[neighbor.row][neighbor.col] !== CELL_TYPES.SHIP &&
                    this.grid[neighbor.row][neighbor.col] !== CELL_TYPES.FIXED_PATH) {
                    continue;
                }

                // Check constraint area if defined
                if (!this.isPointInsideConstraintArea(neighbor.row, neighbor.col)) {
                    continue;
                }

                // Diagonal movement cost is sqrt(2) ≈ 1.4
                const movementCost = (dx !== 0 && dy !== 0) ? 1.4 : 1;
                const tempG = gScore[current.row][current.col] +
                    this.getMovementCost(neighbor) * movementCost;

                if (tempG < gScore[neighbor.row][neighbor.col]) {
                    cameFrom[`${neighbor.row},${neighbor.col}`] = current;
                    gScore[neighbor.row][neighbor.col] = tempG;
                    fScore[neighbor.row][neighbor.col] = tempG + this.heuristic(neighbor, end);

                    if (!openSet.contains(neighbor, (a, b) => a.row === b.row && a.col === b.col)) {
                        openSet.enqueue(neighbor, fScore[neighbor.row][neighbor.col]);
                    }
                }
            }
        }
        console.log(`A* failed to find path after ${iterations} iterations`); // Debug log
        return null;
    }

    getMovementCost(cell) {
        if (this.grid[cell.row][cell.col] === CELL_TYPES.EMPTY ||
            this.grid[cell.row][cell.col] === CELL_TYPES.SHIP ||
            this.grid[cell.row][cell.col] === CELL_TYPES.PORT) {
            return 1;
        }

        // Fixed path has a very low cost to encourage the algorithm to use it
        if (this.grid[cell.row][cell.col] === CELL_TYPES.FIXED_PATH) {
            return 0.1; // Much lower cost than empty cells to encourage path usage
        }

        const baseCost = (OBSTACLE_MAP[this.grid[cell.row][cell.col]] && OBSTACLE_MAP[this.grid[cell.row][cell.col]].cost) || 1;
        const weatherImpact = WEATHER_CONFIG[this.weatherEffect].impact;
        return baseCost + weatherImpact;
    }

    reconstructPath(cameFrom, current) {
        const path = [];
        while (cameFrom[`${current.row},${current.col}`]) {
            path.push(current);
            current = cameFrom[`${current.row},${current.col}`];
        }
        path.push(current); // Add the starting point
        return path.reverse();
    }

    calculatePathCost(path) {
        return path.reduce((sum, cell) => sum + this.getMovementCost(cell), 0);
    }

    animatePath(path, pathIndex) {
        path.forEach(({ row, col }, index) => {
            setTimeout(() => {
                if (this.grid[row][col] !== CELL_TYPES.SHIP && this.grid[row][col] !== CELL_TYPES.PORT) {
                    this.ctx.fillStyle = pathIndex === "R" ? "purple" : "blue";
                    this.ctx.fillRect(col * this.cellWidth, row * this.cellHeight, this.cellWidth, this.cellHeight);
                    this.ctx.strokeStyle = "#333";
                    this.ctx.strokeRect(col * this.cellWidth, row * this.cellHeight, this.cellWidth, this.cellHeight);

                    if (this.paths.length > 1 || pathIndex === "R") {
                        this.ctx.fillStyle = "white";
                        this.ctx.font = `${Math.max(10, this.cellHeight / 2)}px Arial`;
                        this.ctx.textAlign = "center";
                        this.ctx.textBaseline = "middle";
                        this.ctx.fillText(
                            pathIndex,
                            col * this.cellWidth + this.cellWidth / 2,
                            row * this.cellHeight + this.cellHeight / 2
                        );
                    }
                }
            }, 10 * index);
        });
    }

    heuristic(a, b) {
        // Euclidean distance
        return Math.sqrt(Math.pow(a.row - b.row, 2) + Math.pow(a.col - b.col, 2));
    }

    clearGrid() {
        this.fixedPathPoints = [];
        this.multiSelectPoints = [];
        this.isDrawingPolygon = false;
        this.constraintAreaPoints = [];
        this.isDrawingConstraintArea = false;
        this.constraintArea = null;
        this.initGrid();
        this.drawGrid();
    }

    updateUI() {
        document.getElementById("sourceCount").textContent = this.sources.length;
        document.getElementById("destinationCount").textContent = this.destinations.length;
        document.getElementById("obstacleCount").textContent = this.obstacles.length;
        document.getElementById("pathCount").textContent = this.paths.length;

        let pathCostHTML = "";

        if (this.paths.length === 1 && this.destinations.length > 1) {
            // Single continuous path through multiple destinations
            const path = this.paths[0];
            pathCostHTML = `<strong>Continuous Path:</strong><br>`;
            pathCostHTML += `Length: ${path.path.length} steps<br>`;
            pathCostHTML += `Visits ${this.destinations.length} destinations<br>`;
            pathCostHTML += `Total Cost: ${path.cost.toFixed(2)}`;
        } else {
            // Multiple separate paths or single destination
            pathCostHTML = this.paths.map(({ cost, index }) =>
                `Path ${index}: Cost = ${cost.toFixed(2)}`).join("<br>");
        }

        pathCostHTML += (pathCostHTML ? "<br><br>" : "") +
            `<strong>Total Path Cost: ${this.totalPathCost.toFixed(2)}</strong>`;

        if (this.isReturnPathVisible && this.returnPath) {
            pathCostHTML += `<br><span style="color: purple; font-weight: bold;">
                                Return Path Cost: ${this.returnPathCost.toFixed(2)}</span>
                                <br><strong>Total Cost (with return): ${this.totalCostWithReturn.toFixed(2)}</strong>`;
        }

        document.getElementById("pathCost").innerHTML = pathCostHTML || "No paths found.";
    }

    generateObstacles() {
        const obstacleCount = Math.floor(this.gridRows * this.gridCols * 0.2);
        this.obstacles = [];

        for (let i = 0; i < obstacleCount; i++) {
            let row, col;
            do {
                row = Math.floor(Math.random() * this.gridRows);
                col = Math.floor(Math.random() * this.gridCols);
            } while (this.grid[row][col] !== CELL_TYPES.EMPTY);

            // Randomly select obstacle type (now just one type)
            this.grid[row][col] = CELL_TYPES.OBSTACLE;
            this.obstacles.push({ row, col, type: CELL_TYPES.OBSTACLE });
        }

        this.updateUI();
        this.drawGrid();
    }

    replayPaths() {
        this.drawGrid();
        this.paths.forEach(({ path, index }) => this.animatePath(path, index));
        if (this.isReturnPathVisible && this.returnPath) {
            this.animatePath(this.returnPath, "R");
        }
    }

    saveGrid() {
        const data = {
            gridRows: this.gridRows,
            gridCols: this.gridCols,
            grid: this.grid,
            sources: this.sources,
            destinations: this.destinations,
            obstacles: this.obstacles,
            fixedPathPoints: this.fixedPathPoints,
            constraintArea: this.constraintArea,
            weatherEffect: this.weatherEffect
        };

        const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "gridState.json";
        a.click();
        URL.revokeObjectURL(url);
    }

    loadGrid() {
        document.getElementById("loadInput").click();
    }

    handleLoad(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                this.gridRows = data.gridRows || 180;
                this.gridCols = data.gridCols || 370;
                this.cellWidth = this.canvas.width / this.gridCols;
                this.cellHeight = this.canvas.height / this.gridRows;
                this.grid = data.grid;
                this.sources = data.sources || [];
                this.destinations = data.destinations || [];
                this.obstacles = data.obstacles || [];
                this.fixedPathPoints = data.fixedPathPoints || [];
                this.constraintArea = data.constraintArea || null;
                this.weatherEffect = data.weatherEffect || "none";

                // Update UI elements
                document.getElementById("gridSize").value = this.gridSize;
                document.getElementById("weather").value = this.weatherEffect;

                // Clear any existing paths since we're loading a new grid
                this.paths = [];
                this.returnPath = null;
                this.isReturnPathVisible = false;
                document.getElementById("toggleReturnPath").classList.remove("active");

                this.updateUI();
                this.drawGrid();
            } catch (error) {
                console.error("Error loading grid:", error);
                alert("Failed to load grid file. Please check the console for details.");
            }
        };
        reader.readAsText(file);
    }

    updateWeather() {
        this.weatherEffect = document.getElementById("weather").value;
        this.updateUI();

        // Recalculate paths if they exist
        if (this.paths.length > 0) {
            this.findPath();
        }
    }

    // Destination Management Methods
    loadSavedDestinations() {
        const saved = localStorage.getItem('pathfindingDestinations');
        if (saved) {
            return JSON.parse(saved);
        }
        // If localStorage is empty, use default destinations (for deployment)
        if (typeof DEFAULT_SAVED_DESTINATIONS !== 'undefined' && DEFAULT_SAVED_DESTINATIONS.length > 0) {
            localStorage.setItem('pathfindingDestinations', JSON.stringify(DEFAULT_SAVED_DESTINATIONS));
            return [...DEFAULT_SAVED_DESTINATIONS];
        }
        return [];
    }

    saveSavedDestinations() {
        localStorage.setItem('pathfindingDestinations', JSON.stringify(this.savedDestinations));
    }

    showSaveDestinationDialog() {
        if (this.destinations.length === 0) {
            alert('Please set a destination first before saving!');
            return;
        }

        // Show modal
        const modal = document.getElementById('saveDestinationModal');
        const input = document.getElementById('destinationName');
        modal.style.display = 'block';
        input.focus();
        input.value = '';

        // Handle Enter key in input
        input.onkeypress = (e) => {
            if (e.key === 'Enter') {
                this.saveDestination();
            }
        };
    }

    closeSaveDestinationDialog() {
        const modal = document.getElementById('saveDestinationModal');
        modal.style.display = 'none';
    }

    saveDestination() {
        const nameInput = document.getElementById('destinationName');
        const name = nameInput.value.trim();

        if (!name) {
            alert('Please enter a name for the destination!');
            return;
        }

        if (this.destinations.length === 0) {
            alert('No destination to save!');
            return;
        }

        // Check if name already exists
        if (this.savedDestinations.some(dest => dest.name === name)) {
            alert('A destination with this name already exists!');
            return;
        }

        // Save current destinations
        const savedDestination = {
            name: name,
            destinations: [...this.destinations],
            timestamp: new Date().toISOString()
        };

        this.savedDestinations.push(savedDestination);
        this.saveSavedDestinations();
        this.updateDestinationDropdown();
        this.closeSaveDestinationDialog();

        alert(`Destination "${name}" saved successfully!`);
    }

    updateDestinationDropdown() {
        const dropdown = document.getElementById('destinationDropdown');
        dropdown.innerHTML = '';

        if (this.savedDestinations.length === 0) {
            dropdown.innerHTML = '<div style="padding: 10px; color: #666; font-style: italic;">No saved destinations</div>';
            return;
        }

        this.savedDestinations.forEach((dest, index) => {
            const button = document.createElement('button');
            button.textContent = ` ${dest.name}`;
            button.onclick = () => this.loadSavedDestination(index);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '🗑️';
            deleteBtn.style.marginLeft = '5px';
            deleteBtn.style.background = '#ef4444';
            deleteBtn.style.border = 'none';
            deleteBtn.style.borderRadius = '3px';
            deleteBtn.style.color = 'white';
            deleteBtn.style.padding = '2px 6px';
            deleteBtn.style.cursor = 'pointer';
            deleteBtn.onclick = (e) => {
                e.stopPropagation();
                this.deleteSavedDestination(index);
            };

            const container = document.createElement('div');
            container.style.display = 'flex';
            container.style.alignItems = 'center';
            container.style.justifyContent = 'space-between';
            container.appendChild(button);
            container.appendChild(deleteBtn);

            dropdown.appendChild(container);
        });
    }

    loadSavedDestination(index) {
        const savedDest = this.savedDestinations[index];
        if (!savedDest) return;

        // Clear current destinations
        this.destinations.forEach(dest => {
            this.grid[dest.row][dest.col] = CELL_TYPES.EMPTY;
        });

        // Set new destinations
        this.destinations = [...savedDest.destinations];
        this.destinations.forEach(dest => {
            this.grid[dest.row][dest.col] = CELL_TYPES.PORT;
        });

        // Find path automatically
        this.findPath();
        this.updateUI();
        this.drawGrid();
        this.closeDestinationDropdown();
    }

    toggleDestinationDropdown() {
        const dropdown = document.getElementById("destinationDropdown");
        if (dropdown) {
            dropdown.classList.toggle("show-dropdown");
            this.updateDestinationDropdown();
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const app = new PathfindingApp();

    // Check if redirected from Staff Directory with navigation request
    const navigateToRoom = sessionStorage.getItem('navigateToRoom');
    if (navigateToRoom) {
        sessionStorage.removeItem('navigateToRoom');
        
        // Wait for app to initialize, then navigate
        setTimeout(() => {
            const room = ROOM_DATABASE.find(r => r.roomCode === navigateToRoom);
            if (room) {
                const savedDest = app.savedDestinations.find(dest => dest.roomCode === navigateToRoom);
                if (savedDest && savedDest.destinations && savedDest.destinations.length > 0) {
                    window.selectDestination(savedDest.destinations[0]);
                }
            }
        }, 500);
    }

    // Expose functions to global scope for HTML buttons
    window.initGrid = () => {
        const newSize = parseInt(document.getElementById("gridSize").value);
        if (newSize >= 40 && newSize <= 200) {
            app.gridSize = newSize;
            app.cellSize = 600 / app.gridSize;
            app.initGrid();
            app.drawGrid();
        } else {
            alert("Grid size must be between 40 and 200");
        }
    };

    window.setMode = (mode) => app.setMode(mode);
    window.toggleReturnPath = () => app.toggleReturnPath();
    window.findPath = () => app.findPath();
    window.clearGrid = () => app.clearGrid();
    window.generateObstacles = () => app.generateObstacles();
    window.replayPaths = () => app.replayPaths();
    window.saveGrid = () => app.saveGrid();
    window.loadGrid = () => app.loadGrid();
    window.handleLoad = (e) => app.handleLoad(e);
    window.updateWeather = () => app.updateWeather();
    window.toggleObstaclesVisibility = () => app.toggleObstaclesVisibility();
    
    // Export all data function for deployment
    window.exportAllData = () => {
        const exportData = {
            savedDestinations: app.savedDestinations,
            timestamp: new Date().toISOString(),
            note: "Copy this data to DEFAULT_SAVED_DESTINATIONS in script.js for deployment"
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'campusnav-export-data.json';
        a.click();
        URL.revokeObjectURL(url);
        
        // Also log to console for easy copy
        console.log('=== EXPORTED DATA ===');
        console.log('Copy this array content to DEFAULT_SAVED_DESTINATIONS:');
        console.log(JSON.stringify(app.savedDestinations, null, 2));
        
        alert('Data exported! Check your downloads folder for campusnav-export-data.json\\n\\nTo make this permanent:\\n1. Copy the savedDestinations array from the file\\n2. Paste it into DEFAULT_SAVED_DESTINATIONS in script.js');
    };

    // Destination management functions
    window.showSaveDestinationDialog = () => app.showSaveDestinationDialog();
    window.closeSaveDestinationDialog = () => app.closeSaveDestinationDialog();
    window.saveDestination = () => app.saveDestination();
    window.toggleDestinationDropdown = () => app.toggleDestinationDropdown();

    // Multi-select polygon functions
    window.completePolygonAndFill = () => app.completePolygonAndFill();

    // Constraint area functions
    window.completeConstraintArea = () => app.completeConstraintArea();
    window.clearConstraintArea = () => app.clearConstraintArea();

    // Admin navbar functions
    window.openPathFixer = () => {
        // Open path fixer in a new tab
        window.open('../admin path set/index.html', '_blank');
    };

    // Handle path selector dropdown
    window.togglePathDropdown = () => {
        const dropdown = document.getElementById('pathDropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    };

    // Close dropdown when clicking outside
    window.addEventListener('click', (e) => {
        const dropdown = document.getElementById('pathDropdown');
        const btn = document.getElementById('pathSelectorBtn');
        if (dropdown && !btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    // Logout functionality
    window.logout = () => {
        localStorage.removeItem('displayName');
        localStorage.removeItem('isLoggedIn');
        window.location.href = '../login/index.html';
    };

    // Destination slide functions
    window.selectDestination = (destination) => {
        const destinationSlide = document.getElementById('destinationSlide');
        const mapContainer = document.getElementById('mapContainer');
        const destinationInfoBar = document.getElementById('destinationInfoBar');
        const destinationInfoName = document.getElementById('destinationInfoName');
        const destinationInfoDetails = document.getElementById('destinationInfoDetails');
        
        // Set the destination on the map
        app.destinations = [destination];
        app.grid[destination.row][destination.col] = CELL_TYPES.PORT;
        
        // Find room information from database
        let roomInfo = null;
        let destName = 'Destination';
        let detailsHTML = '';
        
        // Find matching saved destination
        const savedDest = app.savedDestinations.find(dest => 
            dest.destinations && dest.destinations.some(d => d.row === destination.row && d.col === destination.col)
        );
        
        if (savedDest && savedDest.roomCode) {
            // Get room from database
            roomInfo = ROOM_DATABASE.find(r => r.roomCode === savedDest.roomCode);
        }
        
        if (roomInfo) {
            // Display room name
            destName = roomInfo.roomName;
            
            // Display faculty names and room type
            if (roomInfo.faculty && roomInfo.faculty.length > 0) {
                const facultyNames = roomInfo.faculty.map(f => 
                    `<span class="faculty-badge"><i class="fas fa-user"></i> ${f.name}</span>`
                ).join('');
                detailsHTML = `<span style="opacity: 0.85;">${roomInfo.type}</span> ${facultyNames}`;
            } else {
                detailsHTML = `<span style="opacity: 0.85;">${roomInfo.type}</span>`;
            }
        } else if (savedDest) {
            // Fallback to saved destination name
            destName = savedDest.name;
        }
        
        // Update destination info bar
        if (destinationInfoName) {
            destinationInfoName.textContent = destName;
        }
        if (destinationInfoDetails) {
            destinationInfoDetails.innerHTML = detailsHTML;
        }
        
        // Animate slide transition
        destinationSlide.classList.add('slide-out');
        
        setTimeout(() => {
            destinationSlide.style.display = 'none';
            mapContainer.style.display = 'flex';
            if (destinationInfoBar) {
                destinationInfoBar.style.display = 'block';
            }
            
            // Find and show the path
            app.findPath();
            app.updateUI();
            app.drawGrid();
        }, 500);
    };

    window.enterMapWithoutDestination = () => {
        const destinationSlide = document.getElementById('destinationSlide');
        const mapContainer = document.getElementById('mapContainer');
        const destinationInfoBar = document.getElementById('destinationInfoBar');
        
        // Animate slide transition
        destinationSlide.classList.add('slide-out');
        
        setTimeout(() => {
            destinationSlide.style.display = 'none';
            mapContainer.style.display = 'flex';
            if (destinationInfoBar) {
                destinationInfoBar.style.display = 'none';
            }
            app.drawGrid();
        }, 500);
    };

    window.clearCurrentDestination = () => {
        const destinationInfoBar = document.getElementById('destinationInfoBar');
        
        if (confirm('Clear current destination and path?')) {
            // Clear destinations
            app.destinations.forEach(dest => {
                app.grid[dest.row][dest.col] = CELL_TYPES.EMPTY;
            });
            app.destinations = [];
            app.paths = [];
            app.returnPath = null;
            app.isReturnPathVisible = false;
            
            // Hide info bar
            if (destinationInfoBar) {
                destinationInfoBar.style.display = 'none';
            }
            
            // Redraw
            app.updateUI();
            app.drawGrid();
        }
    };

    window.loadSelectedDestination = () => {
        const destinationSelect = document.getElementById('destinationDropdownSelect');
        if (!destinationSelect || !destinationSelect.value) {
            alert('Please select a destination first');
            return;
        }
        
        const index = parseInt(destinationSelect.value);
        const dest = app.savedDestinations[index];
        
        if (dest && dest.destinations && dest.destinations.length > 0) {
            window.selectDestination(dest.destinations[0]);
        }
    };

    // Load departments based on faculty selection
    window.loadDepartments = () => {
        const facultySelect = document.getElementById('facultySelect');
        const departmentContainer = document.getElementById('departmentContainer');
        const facultyDropdown = document.getElementById('facultyDropdown');
        const roomCardsContainer = document.getElementById('roomCardsContainer');
        
        if (!facultySelect || !facultySelect.value) {
            departmentContainer.style.display = 'none';
            roomCardsContainer.style.display = 'none';
            return;
        }
        
        const selectedFaculty = facultySelect.value;
        
        // Define departments for each faculty
        const facultyDepartments = {
            'Science': [
                { value: 'Computer Science', label: 'Computer Science & Physics' },
                { value: 'Botany', label: 'Botany' },
                { value: 'Chemistry', label: 'Chemistry' },
                { value: 'Mathematics', label: 'Mathematics' },
                { value: 'Zoology', label: 'Zoology' }
            ],
            'Engineering': [
                { value: 'Electronics', label: 'Electronics' },
                { value: 'Computer Science', label: 'Computer Science' }
            ],
            'Technology': [
                { value: 'Dairy Technology', label: 'Dairy Technology' },
                { value: 'Electronics', label: 'Electronics' }
            ],
            'Arts': [
                { value: 'Office', label: 'Administrative Offices' }
            ],
            'Commerce': [
                { value: 'Office', label: 'Administrative Offices' }
            ]
        };
        
        // Populate department dropdown
        const departments = facultyDepartments[selectedFaculty] || [];
        
        facultyDropdown.innerHTML = '<option value="">Select a department...</option>';
        departments.forEach(dept => {
            facultyDropdown.innerHTML += `<option value="${dept.value}">${dept.label}</option>`;
        });
        
        // Add common options
        facultyDropdown.innerHTML += `
            <option value="Laboratory">Laboratories</option>
            <option value="All">All Rooms in ${selectedFaculty}</option>
        `;
        
        departmentContainer.style.display = 'block';
        roomCardsContainer.style.display = 'none';
    };

    // Faculty room loading and navigation
    window.loadFacultyRooms = () => {
        const facultyDropdown = document.getElementById('facultyDropdown');
        const roomCardsContainer = document.getElementById('roomCardsContainer');
        const roomCards = document.getElementById('roomCards');
        
        if (!facultyDropdown || !facultyDropdown.value) {
            roomCardsContainer.style.display = 'none';
            return;
        }
        
        const selectedFaculty = facultyDropdown.value;
        let filteredRooms = [];
        
        if (selectedFaculty === 'All') {
            filteredRooms = ROOM_DATABASE;
        } else if (selectedFaculty === 'Laboratory') {
            filteredRooms = ROOM_DATABASE.filter(room => room.type === 'Laboratory');
        } else if (selectedFaculty === 'Office') {
            filteredRooms = ROOM_DATABASE.filter(room => 
                room.type === 'Office' || room.type === 'Service' || room.type === 'Store' || room.type === 'Lecture Room'
            );
        } else {
            filteredRooms = ROOM_DATABASE.filter(room => 
                room.faculty.some(f => f.department.includes(selectedFaculty))
            );
        }
        
        if (filteredRooms.length === 0) {
            roomCards.innerHTML = '<div class="no-rooms-message">No rooms found for this selection</div>';
            roomCardsContainer.style.display = 'block';
            return;
        }
        
        // Display room cards with merged data
        roomCards.innerHTML = filteredRooms.map(room => {
            // Check if room has coordinates (is mapped)
            const isMapped = room.coordinates || app.savedDestinations.some(dest => dest.roomCode === room.roomCode);
            const mappedBadge = isMapped ? '<span style="background: #28a745; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-left: 0.5rem;">✓ Mapped</span>' : '<span style="background: #ffc107; color: #000; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-left: 0.5rem;">Not Mapped</span>';
            
            const facultyHTML = room.faculty.length > 0 ?
                `<div class="room-card-faculty">
                    <div class="faculty-label">Faculty/Staff (${room.faculty.length})</div>
                    ${room.faculty.map(faculty => `
                        <div class="faculty-member">
                            <div class="faculty-name"><i class="fas fa-user"></i> ${faculty.name}</div>
                            <div class="faculty-designation">${faculty.designation}</div>
                            ${faculty.specialization ? `<div class="faculty-specialization">Specialization: ${faculty.specialization}</div>` : ''}
                        </div>
                    `).join('')}
                </div>` : '<div class="room-card-faculty"><div class="faculty-label">No faculty assigned</div></div>';
            
            return `
                <div class="room-card ${isMapped ? 'room-mapped' : ''}" id="room-${room.roomCode}">
                    <div class="room-card-header">
                        <i class="fas fa-door-open room-card-icon"></i>
                        <div class="room-card-title">
                            <div class="room-card-name">${room.roomName}${mappedBadge}</div>
                            <div class="room-card-type">${room.type}</div>
                        </div>
                    </div>
                    ${facultyHTML}
                    <div class="room-card-footer">
                        <button class="get-directions-card-btn" onclick="navigateToRoom('${room.roomCode}')" ${!isMapped ? 'title="Room not yet mapped"' : ''}>
                            <i class="fas fa-${isMapped ? 'directions' : 'map-marked-alt'}"></i> ${isMapped ? 'Get Directions' : 'Set Location'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        roomCardsContainer.style.display = 'block';
    };

    window.navigateToRoom = (roomCode) => {
        const room = ROOM_DATABASE.find(r => r.roomCode === roomCode);
        if (!room) return;
        
        // Check if room has saved coordinates
        const savedDest = app.savedDestinations.find(dest => dest.roomCode === roomCode);
        
        if (savedDest && savedDest.destinations && savedDest.destinations.length > 0) {
            // Navigate to the room
            window.selectDestination(savedDest.destinations[0]);
        } else {
            // Room not mapped yet
            const proceed = confirm(`Room "${room.roomName}" hasn't been mapped yet.\n\nWould you like to enter the map and set its location?`);
            if (proceed) {
                window.enterMapWithoutDestination();
            }
        }
    };

    // Toast notification function
    window.showToast = (message, type = 'info') => {
        // Create toast element if it doesn't exist
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.className = `toast toast-${type} show`;

        // Auto hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    };

    // Dropdown action functions
    // Note: These are already defined globally above, so removing duplicates

    // Admin name management
    const adminDisplayNameElement = document.getElementById('adminDisplayName');
    const storedName = localStorage.getItem('displayName');
    if (adminDisplayNameElement && storedName) {
        // Display admin name with "Admin - " prefix if it's an admin login
        if (storedName.startsWith('Admin - ')) {
            adminDisplayNameElement.textContent = storedName.replace('Admin - ', '');
        } else {
            adminDisplayNameElement.textContent = storedName || 'Admin';
        }
    }

    // Admin Path Set button event
    const adminPathSetBtn = document.getElementById('adminPathSetBtn');
    if (adminPathSetBtn) {
        adminPathSetBtn.addEventListener('click', () => {
            // Open the admin path set page in same tab
            window.location.href = '../admin path set/index.html';
        });
    }

    // Actions dropdown functionality
    const actionsDropdownBtn = document.getElementById('actionsDropdownBtn');
    const actionsDropdownContent = document.getElementById('actionsDropdownContent');

    if (actionsDropdownBtn && actionsDropdownContent) {
        actionsDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            actionsDropdownContent.classList.toggle('show');
        });
    }

    // Close actions dropdown when clicking outside
    window.addEventListener('click', (e) => {
        if (actionsDropdownContent && !e.target.closest('.admin-dropdown')) {
            actionsDropdownContent.classList.remove('show');
        }
    });

    // Admin logout button event
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', logout);
    }

    // Path selector button event (keep for backward compatibility)
    const pathSelectorBtn = document.getElementById('pathSelectorBtn');
    if (pathSelectorBtn) {
        pathSelectorBtn.addEventListener('click', togglePathDropdown);
    }

    // Logout button event (keep for backward compatibility)
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }

    // Handle canvas clicks
    document.getElementById("gridCanvas").addEventListener("click", (e) => app.handleCanvasClick(e));
});
