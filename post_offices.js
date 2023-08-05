document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch nearby post offices based on user's location
    function getNearbyPostOffices(latitude, longitude) {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      const apiEndpoint = `https://api.postalpincode.in/pincode/nearby?lat=${latitude}&long=${longitude}`;
  
      fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
          // Create a list to display the post offices
          const postOfficesList = document.getElementById('postOfficesList');
          const ul = document.createElement('ul');
  
          // Loop through the post offices data and create list items
          data.forEach(postOffice => {
            const li = document.createElement('li');
            li.innerHTML = `
              <strong>Name:</strong> ${postOffice.Name}<br>
              <strong>Branch Type:</strong> ${postOffice.BranchType}<br>
              <strong>Delivery Status:</strong> ${postOffice.DeliveryStatus}<br>
              <strong>District:</strong> ${postOffice.District}<br>
              <strong>Division:</strong> ${postOffice.Division}<br>
              <br>
            `;
            ul.appendChild(li);
          });
  
          postOfficesList.appendChild(ul);
        })
        .catch(error => console.error('Error fetching post offices:', error));
    }
  
    // Function to get the user's location (latitude and longitude)
    function getUserLocation() {
      // Replace this with code to obtain user's latitude and longitude, e.g., using Geolocation API
      const latitude = 12.34; // Replace with actual latitude
      const longitude = 56.78; // Replace with actual longitude
  
      // Call the function to fetch nearby post offices
      getNearbyPostOffices(latitude, longitude);
    }
  
    // Call the function to get user's location when the page loads
    getUserLocation();
  });
  
  