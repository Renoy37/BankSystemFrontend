import React from 'react';
import { helix } from 'ldrs'; // Ensure this import is correct based on the library documentation

helix.register(); // Ensure this registration is needed and correct

function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Default values shown */}
      <l-helix
        size="108"
        speed="1.9"
        color="black"
      >
      </l-helix>
    </div>
  );
}

export default Loading;
