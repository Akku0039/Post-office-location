document.addEventListener("DOMContentLoaded", function() {
  // Function to fetch user's IP information from the API
  function getUserIPInfo() {
    fetch('https://ipinfo.io?token=YOUR_API_TOKEN')
      .then(response => response.json())
      .then(data => {
        document.getElementById('ipAddress').innerText = data.ip;
        document.getElementById('region').innerText = data.region;
        document.getElementById('city').innerText = data.city;
        document.getElementById('latitude').innerText = data.loc.split(',')[0];
        document.getElementById('longitude').innerText = data.loc.split(',')[1];
        document.getElementById('hostname').innerText = data.hostname;
        document.getElementById('organization').innerText = data.org;
      })
      .catch(error => console.error('Error fetching IP information:', error));
  }

  // Call the function to fetch IP information when the page loads
  getUserIPInfo();
});
document.addEventListener("DOMContentLoaded", function() {
    // Assuming you have fetched nearby post offices data and stored it in the variable 'nearbyPostOfficesData'
    const nearbyPostOfficesData = [
      { Name: "Post Office 1", BranchType: "Type A", DeliveryStatus: "Delivered", District: "District 1", Division: "Division A" },
      { Name: "Post Office 2", BranchType: "Type B", DeliveryStatus: "Pending", District: "District 2", Division: "Division B" },
      { Name: "Post Office 3", BranchType: "Type C", DeliveryStatus: "Delivered", District: "District 1", Division: "Division A" },
      // Add more post office data here
    ];
  
    // Function to create and display the list of post offices
    function displayPostOffices() {
      const postOfficesList = document.getElementById('postOfficesList');
  
      // Loop through the nearby post offices data and create boxes for each post office
      nearbyPostOfficesData.forEach(postOffice => {
        const boxItem = document.createElement('div');
        boxItem.className = 'box-item';
        boxItem.innerHTML = `
          <strong>Name:</strong> ${postOffice.Name}<br>
          <strong>Branch Type:</strong> ${postOffice.BranchType}<br>
          <strong>Delivery Status:</strong> ${postOffice.DeliveryStatus}<br>
          <strong>District:</strong> ${postOffice.District}<br>
          <strong>Division:</strong> ${postOffice.Division}<br>
        `;
        postOfficesList.appendChild(boxItem);
      });
    }
  
    // Call the function to display the list of post offices when the page loads
    displayPostOffices();
  });
  