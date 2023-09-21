import React from 'react';
import './Dashboard.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import 
{ BsFillPeopleFill, BsClock, BsBarChartLineFill, BsBarChartSteps}
 from 'react-icons/bs'
function Dashboard() {
    const username = useSelector((state) => state.user.username);
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-header-left">
          <h3>Dashboard</h3>
        </div>
        <div className="dashboard-header-right">
          <h2>UNPLUGGED EVENTS</h2>
        </div>
      </header>
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
         
        </div>
        <nav className="sidebar-navigation">
          <ul>
            <li><Link to="/event-types" className='event-types'>Event Types</Link></li>
            <li><Link to="/upcoming" className='upcoming'>Upcoming Events</Link></li>
            <li><Link to="/prebooked" className='prebooked'>Prebooked Events</Link></li>
          </ul>
        </nav>
        <div className="logout-button-container">
          <Link to="/">
            <button className="logout-button">Logout</button>
          </Link>
        </div>
      </aside>
      <div>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Seats Available</h3>
            <BsFillPeopleFill className='card_icon'/>
          </div>
          <h2>300</h2>
        </div>
        <div className='card'>
                <div className='card-inner'>
                    <h3>Seats Filled</h3>
                    <BsFillPeopleFill className='card_icon'/>
                </div>
                <h2>200</h2>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Hours</h3>
                    <BsClock className='card_icon'/>
                </div>
                <h2>10</h2>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Upcoming Event</h3>
                    <BsBarChartSteps className='card_icon'/>
                </div>
                <h2>AS Concert</h2>
            </div>
      </div>
      <div className="welcome-container">
        <div className="circular-box">
          <h1>Welcome, {username}!❤️</h1>
          <p>We're thrilled to have you here at UNPLUGGED EVENTS, where organizing and hosting events has never been easier.

          Are you ready to embark on a journey that will simplify event planning, streamline registration, and enhance your attendees' experience? You're in the right place!
          
          With our cutting-edge platform, you'll discover a world of possibilities to create memorable and successful events. Whether you're a seasoned event pro or just getting started, we've got the tools and features to make your events stand out.
          
          Join our community of event enthusiasts, and let's make your vision come to life. Let's get started!"</p>
        </div>
        <div className='img'>
        <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2VsZWJyYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"></img>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Dashboard;
