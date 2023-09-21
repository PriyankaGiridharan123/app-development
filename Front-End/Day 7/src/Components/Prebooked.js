import React from 'react';
import './Eventtype.css';

const Prebooked = () => {
  return (
    <div className="online-event-container">
      <div className="event-section">
        <h2>Online Events</h2>
        <img
          src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Online Event"
        />
        <p>Description of online events goes here.</p>
      </div>

      <div className="event-section">
        <h2>Concerts</h2>
        <img
          src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Concert Event"
        />
        <p>Description of concerts goes here.</p>
      </div>

      <div className="event-section">
        <h2>Birthday Party</h2>
        <img
          src="https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Birthday Party Event"
        />
        <p>Description of birthday parties goes here.</p>
      </div>

      <div className="event-section">
        <h2>Fairs</h2>
        <img
          src="https://images.unsplash.com/photo-1561490497-43bc900ac2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Fair Event"
        />
        <p>Description of fairs goes here.</p>
      </div>
    </div>
  );
};

export default Prebooked;
