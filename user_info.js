document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch user's location information from the API
    function getUserLocationInfo() {
      fetch('https://ipinfo.io?token=YOUR_API_TOKEN')
        .then(response => response.json())
        .then(data => {
          // Display date and time
          const currentDateTime = new Date().toLocaleString();
          document.getElementById('dateTime').innerText = currentDateTime;
  
          // Display time zone
          const timeZone = data.timezone;
          document.getElementById('timeZone').innerText = timeZone;
  
          // Display pincode
          const pincode = data.postal;
          document.getElementById('pincode').innerText = pincode;
  
          // Show message based on pincode
          const message = getMessageByPincode(pincode);
          document.getElementById('message').innerText = message;
        })
        .catch(error => console.error('Error fetching user information:', error));
    }
  
    // Function to get message based on the pincode
    function getMessageByPincode(pincode) {
      // You can define your own messages based on different pincodes
      switch (pincode) {
        case '123456':
          return 'You are in a specific location with pincode 123456.';
        case '789012':
          return 'You are in another location with pincode 789012.';
        default:
          return 'No specific message for this pincode.';
      }
    }
  
    // Call the function to fetch user location information when the page loads
    getUserLocationInfo();
  });
  