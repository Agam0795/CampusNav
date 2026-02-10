// Room Search and Database Functions

// Add these functions to be called from the main script

function searchRooms() {
    const searchInput = document.getElementById('roomSearchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }
    
    // Search in room database
    const results = ROOM_DATABASE.filter(room => {
        // Search by room name
        if (room.roomName.toLowerCase().includes(searchTerm)) return true;
        if (room.roomCode.toLowerCase().includes(searchTerm)) return true;
        if (room.type.toLowerCase().includes(searchTerm)) return true;
        
        // Search by faculty name, designation, or specialization
        return room.faculty.some(faculty => 
            faculty.name.toLowerCase().includes(searchTerm) ||
            faculty.designation.toLowerCase().includes(searchTerm) ||
            faculty.department.toLowerCase().includes(searchTerm) ||
            faculty.specialization.toLowerCase().includes(searchTerm)
        );
    });
    
    // Display results in room cards
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const roomCardsContainer = document.getElementById('roomCardsContainer');
    const roomCards = document.getElementById('roomCards');
    const facultyDropdown = document.getElementById('facultyDropdown');
    
    if (results.length === 0) {
        alert('No results found for your search');
        return;
    }
    
    // Clear dropdown selection
    facultyDropdown.value = '';
    
    // Display results
    roomCards.innerHTML = results.map(room => {
        const facultyInfo = room.faculty.length > 0 
            ? room.faculty.map(f => 
                `<div class="faculty-member">
                    <i class="fas fa-user-tie"></i>
                    <div class="faculty-details">
                        <span class="faculty-name">${f.name}</span>
                        <span class="faculty-designation">${f.designation}</span>
                        ${f.specialization ? `<span class="faculty-specialization">${f.specialization}</span>` : ''}
                    </div>
                </div>`
              ).join('') 
            : '<div class="no-faculty"><i class="fas fa-info-circle"></i> No faculty assigned</div>';
        
        return `
            <div class="room-card">
                <div class="room-card-header">
                    <h4 class="room-name">${room.roomName}</h4>
                    <span class="room-type-badge">${room.type}</span>
                </div>
                <div class="room-faculty-list">
                    ${facultyInfo}
                </div>
                <button class="navigate-btn" onclick="navigateToRoom('${room.roomCode}')">
                    <i class="fas fa-route"></i> Navigate
                </button>
            </div>
        `;
    }).join('');
    
    roomCardsContainer.style.display = 'block';
    
    // Scroll to results
    roomCardsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function performRoomSearch() {
    const searchInput = document.getElementById('roomSearch');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const searchResults = document.getElementById('searchResults');
    
    if (!searchTerm) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
    }
    
    // Search in room database
    const results = ROOM_DATABASE.filter(room => {
        // Search by room name
        if (room.roomName.toLowerCase().includes(searchTerm)) return true;
        if (room.roomCode.toLowerCase().includes(searchTerm)) return true;
        if (room.type.toLowerCase().includes(searchTerm)) return true;
        
        // Search by faculty name, designation, or specialization
        return room.faculty.some(faculty => 
            faculty.name.toLowerCase().includes(searchTerm) ||
            faculty.designation.toLowerCase().includes(searchTerm) ||
            faculty.department.toLowerCase().includes(searchTerm) ||
            faculty.specialization.toLowerCase().includes(searchTerm)
        );
    });
    
    // Display results
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results"><i class="fas fa-info-circle"></i> No results found</div>';
        searchResults.style.display = 'block';
        return;
    }
    
    searchResults.innerHTML = results.map(room => {
        const facultyInfo = room.faculty.length > 0 
            ? `<div class="result-faculty">${room.faculty.map(f => 
                `<span class="faculty-tag">${f.name} - ${f.designation}</span>`
              ).join('')}</div>` 
            : '';
        
        return `
            <div class="search-result-item" onclick="selectRoomFromSearch('${room.roomCode}')">
                <div class="result-header">
                    <i class="fas fa-door-open"></i>
                    <div class="result-info">
                        <div class="result-title">${room.roomName}</div>
                        <div class="result-type">${room.type}</div>
                    </div>
                </div>
                ${facultyInfo}
            </div>
        `;
    }).join('');
    
    searchResults.style.display = 'block';
}

function selectRoomFromSearch(roomCode) {
    const room = ROOM_DATABASE.find(r => r.roomCode === roomCode);
    if (!room) return;
    
    // Check if this room has saved coordinates
    const savedDest = app.savedDestinations.find(dest => 
        dest.roomCode === roomCode
    );
    
    if (savedDest && savedDest.destinations && savedDest.destinations.length > 0) {
        // Room has coordinates, navigate to it
        window.selectDestination(savedDest.destinations[0]);
    } else {
        // Room doesn't have coordinates yet
        alert(`Room "${room.roomName}" hasn't been mapped yet.\nPlease enter the map and set the destination coordinates.`);
        window.enterMapWithoutDestination();
    }
}

// Initialize search event listeners
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('roomSearch');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            performRoomSearch();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performRoomSearch();
            }
        });
    }
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        const searchResults = document.getElementById('searchResults');
        const searchContainer = document.querySelector('.search-container');
        if (searchResults && searchContainer && !searchContainer.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
});
