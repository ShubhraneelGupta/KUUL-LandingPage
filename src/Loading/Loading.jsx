import React, { useState, useEffect } from 'react';

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-screen">
          {/* Add your loading animation or message here */}
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          {/* Your main app content goes here */}
          <h1>Welcome to my app!</h1>
        </div>
      )}
    </div>
  );
}

export default Loading;