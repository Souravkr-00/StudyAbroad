// src/pages/SeminarList.jsx
import React, { useState } from 'react';
import './SeminarList.css'; // Import the custom CSS

const SeminarList = () => {
  // Dummy data for seminars (same as before - 25 items)
  const seminarsData = [
    {
      id: 1,
      title: "Advanced Web Development Techniques",
      date: "2025-04-15",
      time: "10:00 AM - 4:00 PM",
      city: "Mumbai",
      venue: "Tech Hub Conference Center",
      organizer: "WebDev India",
      category: "Technology",
      thumbnail: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYmRldmVsb3BtZW50fGVufDB8fDB8fHww",
      seats: 120,
      price: "₹2,500"
    },
    {
      id: 2,
      title: "AI in Healthcare: Future Innovations",
      date: "2025-04-20",
      time: "9:30 AM - 5:30 PM",
      city: "Bangalore",
      venue: "Innovation Center",
      organizer: "HealthTech Alliance",
      category: "Healthcare",
      thumbnail: "https://plus.unsplash.com/premium_photo-1699387227141-04951848a45a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpJTIwaGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      seats: 80,
      price: "₹3,000"
    },
    {
      id: 3,
      title: "Financial Planning for Startups",
      date: "2025-04-25",
      time: "11:00 AM - 3:00 PM",
      city: "Delhi",
      venue: "Business Convention Hall",
      organizer: "Startup Finance Network",
      category: "Business",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcnR1cHN8ZW58MHx8MHx8fDA%3D",
      seats: 100,
      price: "₹1,800"
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      date: "2025-05-02",
      time: "10:00 AM - 6:00 PM",
      city: "Chennai",
      venue: "Marketing Hub",
      organizer: "DigiMark Pro",
      category: "Marketing",
      thumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      seats: 150,
      price: "₹2,200"
    },
    {
      id: 5,
      title: "Sustainable Architecture Design",
      date: "2025-05-08",
      time: "9:00 AM - 4:00 PM",
      city: "Hyderabad",
      venue: "Green Building Center",
      organizer: "Eco Architects India",
      category: "Architecture",
      thumbnail: "https://images.unsplash.com/photo-1649925652770-5c6f05ae8852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VzdGFpbmFibGUlMjBhcmNoaXRlY3R1cmFsfGVufDB8fDB8fHww",
      seats: 70,
      price: "₹2,800"
    },
    {
      id: 6,
      title: "Machine Learning for Beginners",
      date: "2025-05-10",
      time: "10:00 AM - 5:00 PM",
      city: "Pune",
      venue: "Tech University Campus",
      organizer: "AI Learning Hub",
      category: "Technology",
      thumbnail: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      seats: 90,
      price: "₹2,000"
    },
    {
      id: 7,
      title: "Content Creation Workshop",
      date: "2025-05-15",
      time: "12:00 PM - 6:00 PM",
      city: "Kolkata",
      venue: "Media Center",
      organizer: "Creative Content Labs",
      category: "Media",
      thumbnail: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMGNyZWF0aW9ufGVufDB8fDB8fHww",
      seats: 60,
      price: "₹1,500"
    },
    {
      id: 8,
      title: "Blockchain Technology Summit",
      date: "2025-05-18",
      time: "9:00 AM - 6:00 PM",
      city: "Mumbai",
      venue: "Fintech Convention Center",
      organizer: "Block Chain India",
      category: "Technology",
      thumbnail: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
      seats: 200,
      price: "₹4,000"
    },
    {
      id: 9,
      title: "Artificial Intelligence in Finance",
      date: "2025-05-22",
      time: "10:30 AM - 3:30 PM",
      city: "Bangalore",
      venue: "Finance Tech Park",
      organizer: "AI Finance Forum",
      category: "Finance",
      thumbnail: "https://plus.unsplash.com/premium_photo-1676637656277-498f73258bec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWklMjBpbiUyMGZpbmFuY2V8ZW58MHx8MHx8fDA%3D",
      seats: 85,
      price: "₹3,500"
    },
    {
      id: 10,
      title: "Educational Leadership Conference",
      date: "2025-05-25",
      time: "9:00 AM - 5:00 PM",
      city: "Delhi",
      venue: "National Education Center",
      organizer: "Education First",
      category: "Education",
      thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxlYWRlcnNoaXB8ZW58MHx8MHx8fDA%3D",
      seats: 120,
      price: "₹1,800"
    },
    {
      id: 11,
      title: "Cloud Computing Advancements",
      date: "2025-06-01",
      time: "10:00 AM - 4:00 PM",
      city: "Chennai",
      venue: "IT Park Conference Hall",
      organizer: "Cloud Tech Network",
      category: "Technology",
      thumbnail: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
      seats: 110,
      price: "₹2,600"
    },
    {
      id: 12,
      title: "Renewable Energy Solutions",
      date: "2025-06-05",
      time: "9:30 AM - 5:30 PM",
      city: "Hyderabad",
      venue: "Energy Research Center",
      organizer: "Green Energy Alliance",
      category: "Energy",
      thumbnail: "https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVuZXdhYmxlJTIwZW5lcmd5fGVufDB8fDB8fHww",
      seats: 80,
      price: "₹2,200"
    },
    {
      id: 13,
      title: "Data Science for Business Insights",
      date: "2025-06-10",
      time: "10:00 AM - 6:00 PM",
      city: "Pune",
      venue: "Analytics Hub",
      organizer: "Data Insights India",
      category: "Technology",
      thumbnail: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
      seats: 95,
      price: "₹2,800"
    },
    {
      id: 14,
      title: "Digital Photography Workshop",
      date: "2025-06-15",
      time: "11:00 AM - 5:00 PM",
      city: "Kolkata",
      venue: "Arts Center",
      organizer: "Visual Arts Society",
      category: "Arts",
      thumbnail: "https://images.unsplash.com/photo-1620674156044-52b714665d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZ2l0YWwlMjBwaG90b3Nob3B8ZW58MHx8MHx8fDA%3D",
      seats: 50,
      price: "₹1,200"
    },
    {
      id: 15,
      title: "Cybersecurity Best Practices",
      date: "2025-06-20",
      time: "9:00 AM - 5:00 PM",
      city: "Mumbai",
      venue: "Security Conference Center",
      organizer: "Cyber Defense Network",
      category: "Security",
      thumbnail: "https://images.unsplash.com/photo-1660644807804-ffacfd7a4137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN5YmVyc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
      seats: 130,
      price: "₹3,200"
    },
    {
      id: 16,
      title: "Mobile App Development Workshop",
      date: "2025-06-25",
      time: "10:00 AM - 4:00 PM",
      city: "Bangalore",
      venue: "Developer Hub",
      organizer: "App Developers India",
      category: "Technology",
      thumbnail: "https://plus.unsplash.com/premium_photo-1683936163005-a506303344b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      seats: 75,
      price: "₹2,000"
    },
    {
      id: 17,
      title: "Marketing Analytics Conference",
      date: "2025-07-02",
      time: "9:30 AM - 5:30 PM",
      city: "Delhi",
      venue: "Marketing Research Center",
      organizer: "Analytics Marketing Group",
      category: "Marketing",
      thumbnail: "https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFya2V0JTIwYW5hbHlzaXN8ZW58MHx8MHx8fDA%3D",
      seats: 110,
      price: "₹2,400"
    },
    {
      id: 18,
      title: "Supply Chain Management Summit",
      date: "2025-07-08",
      time: "10:00 AM - 6:00 PM",
      city: "Chennai",
      venue: "Logistics Convention Center",
      organizer: "Supply Chain India",
      category: "Business",
      thumbnail: "https://images.unsplash.com/photo-1554769944-3138b076c38a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwcGx5JTIwY2hhaW4lMjBtYW5hZ21lbnR8ZW58MHx8MHx8fDA%3D",
      seats: 90,
      price: "₹2,200"
    },
    {
      id: 19,
      title: "UX/UI Design Principles",
      date: "2025-07-12",
      time: "11:00 AM - 5:00 PM",
      city: "Hyderabad",
      venue: "Design Studio",
      organizer: "User Experience Forum",
      category: "Design",
      thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dWklMkZ1eHxlbnwwfHwwfHx8MA%3D%3D",
      seats: 65,
      price: "₹1,800"
    },
    {
      id: 20,
      title: "IoT Solutions for Smart Cities",
      date: "2025-07-18",
      time: "9:00 AM - 5:00 PM",
      city: "Pune",
      venue: "Smart City Convention Center",
      organizer: "IoT Innovations",
      category: "Technology",
      thumbnail: "https://images.unsplash.com/photo-1638734255266-7597abac8571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW90JTIwZGV2aWNlfGVufDB8fDB8fHww",
      seats: 120,
      price: "₹2,500"
    },
    {
      id: 21,
      title: "Creative Writing Workshop",
      date: "2025-07-22",
      time: "10:30 AM - 3:30 PM",
      city: "Kolkata",
      venue: "Literary Arts Center",
      organizer: "Writers Guild India",
      category: "Arts",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JlYXRpdmUlMjB3cml0aW5nfGVufDB8fDB8fHww",
      seats: 40,
      price: "₹1,200"
    },
    {
      id: 22,
      title: "Financial Technology Innovations",
      date: "2025-07-25",
      time: "9:00 AM - 6:00 PM",
      city: "Mumbai",
      venue: "FinTech Hub",
      organizer: "Financial Innovation Forum",
      category: "Finance",
      thumbnail: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmluYW5jZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
      seats: 150,
      price: "₹3,500"
    },
    {
      id: 23,
      title: "Agile Project Management",
      date: "2025-08-01",
      time: "10:00 AM - 4:00 PM",
      city: "Bangalore",
      venue: "Project Management Institute",
      organizer: "Agile Management Group",
      category: "Business",
      thumbnail: "https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFnaWxlJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
      seats: 85,
      price: "₹2,300"
    },
    {
      id: 24,
      title: "Public Health Research Symposium",
      date: "2025-08-05",
      time: "9:30 AM - 5:30 PM",
      city: "Delhi",
      venue: "Health Research Center",
      organizer: "Public Health Foundation",
      category: "Healthcare",
      thumbnail: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVibGljJTIwaGVhbHRofGVufDB8fDB8fHww",
      seats: 100,
      price: "₹2,000"
    },
    {
      id: 25,
      title: "Robotics and Automation Conference",
      date: "2025-08-10",
      time: "9:00 AM - 5:00 PM",
      city: "Chennai",
      venue: "Robotics Research Institute",
      organizer: "Automation Technology Forum",
      category: "Technology",
      thumbnail: "https://plus.unsplash.com/premium_photo-1663075913794-6c742d7d6c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
      seats: 120,
      price: "₹3,000"
    }
  ];

  // List of cities for filter with color codes
  const cities = [
    { name: "All Cities", color: "#3B82F6" }, // Blue
    { name: "Mumbai", color: "#EF4444" }, // Red
    { name: "Delhi", color: "#10B981" }, // Green
    { name: "Bangalore", color: "#F59E0B" }, // Amber
    { name: "Chennai", color: "#8B5CF6" }, // Purple
    { name: "Hyderabad", color: "#EC4899" }, // Pink
    { name: "Pune", color: "#6366F1" }, // Indigo
    { name: "Kolkata", color: "#14B8A6" } // Teal
  ];
  
  // Get category color
  const getCategoryColor = (category) => {
    const categoryColors = {
      "Technology": "#3B82F6", // Blue
      "Healthcare": "#10B981", // Green
      "Business": "#F59E0B", // Amber
      "Marketing": "#8B5CF6", // Purple
      "Architecture": "#EC4899", // Pink
      "Media": "#6366F1", // Indigo
      "Finance": "#EF4444", // Red
      "Education": "#14B8A6", // Teal
      "Energy": "#F97316", // Orange
      "Security": "#7C3AED", // Violet
      "Arts": "#06B6D4", // Cyan
      "Design": "#D946EF" // Fuchsia
    };
    
    return categoryColors[category] || "#3B82F6"; // Default to blue
  };
  
  // State for city filter
  const [selectedCity, setSelectedCity] = useState("All Cities");
  
  // Filter seminars based on selected city
  const filteredSeminars = selectedCity === "All Cities" 
    ? seminarsData 
    : seminarsData.filter(seminar => seminar.city === selectedCity);

  return (
    <div className="seminar-container">
      <div className="seminar-header">
        <h1>Upcoming Seminars</h1>
        <p>Discover industry-leading seminars across major cities in India</p>
      </div>
      
      {/* City Filter */}
      <div className="filter-container">
        <h2>Filter by City</h2>
        <div className="filter-buttons">
          {cities.map(city => (
            <button
              key={city.name}
              onClick={() => setSelectedCity(city.name)}
              className={`filter-btn ${selectedCity === city.name ? 'active' : ''}`}
              style={selectedCity === city.name ? 
                { backgroundColor: city.color, borderColor: city.color } : 
                { borderColor: city.color, color: city.color }
              }
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      {/* Seminar Count */}
      <div className="result-count">
        Showing {filteredSeminars.length} seminars {selectedCity !== "All Cities" && `in ${selectedCity}`}
      </div>

      {/* Seminar Cards Grid */}
      <div className="seminar-grid">
        {filteredSeminars.map(seminar => (
          <div key={seminar.id} className="seminar-card">
            <div className="card-image">
              <img src={seminar.thumbnail} alt={seminar.title} />
              <span className="category-badge" style={{ backgroundColor: getCategoryColor(seminar.category) }}>
                {seminar.category}
              </span>
            </div>
            <div className="card-content">
              <h3>{seminar.title}</h3>
              
              <div className="info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="info-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{seminar.date}</span>
              </div>
              
              <div className="info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="info-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{seminar.time}</span>
              </div>
              
              <div className="info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="info-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{seminar.city}, {seminar.venue}</span>
              </div>
              
              <div className="info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="info-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>{seminar.seats} seats available</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="price">{seminar.price}</div>
              <button className="register-btn" style={{ backgroundColor: getCategoryColor(seminar.category) }}>
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty state if no seminars match filter */}
      {filteredSeminars.length === 0 && (
        <div className="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="empty-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3>No seminars found in {selectedCity}</h3>
          <p>Try selecting a different city</p>
          <button 
            className="reset-btn"
            onClick={() => setSelectedCity("All Cities")}
          >
            Show All Seminars
          </button>
        </div>
      )}
    </div>
  );
};

export default SeminarList;