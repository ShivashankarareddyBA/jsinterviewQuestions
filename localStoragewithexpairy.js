const mylocalStorage = {
    setItem: function(key, value, ttl) {
      const now = new Date();
      
      // Create an object that contains the value and the expiry time
      const item = {
        value: value,
        expiry: now.getTime() + ttl,
      };
      
      // Store the item in localStorage
      localStorage.setItem(key, JSON.stringify(item));
    },
    
    getItem: function(key) {
      const itemStr = localStorage.getItem(key);
      
      // If the item doesn't exist, return null
      if (!itemStr) {
        return null;
      }
      
      const item = JSON.parse(itemStr);
      const now = new Date();
      
      // Compare the expiry time with the current time
      if (now.getTime() > item.expiry) {
        // If the item is expired, remove it from storage and return null
        localStorage.removeItem(key);
        return null;
      }
      
      return item.value;
    }
  };
  
  // Example usage:
  mylocalStorage.setItem('foo', 'bar', 1000); // Store 'bar' with 1000ms expiration
  
  setTimeout(() => {
    console.log(mylocalStorage.getItem('foo')); // After 2 seconds, this should return null
  }, 2000);
  