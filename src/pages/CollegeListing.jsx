import React, { useState, useEffect } from 'react';
import './CollegeListing.css';
import { Link } from 'react-router-dom';
// Dummy data for colleges
const collegeData = [
  {
    id: 1,
    name: "Harvard University",
    location: "Cambridge, MA",
    type: "Private",
    category: "Ivy League",
    ranking: 2,
    tuition: 54768,
    acceptanceRate: "4%",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800",
    tags: ["Research", "Liberal Arts", "Business"]
  },
  {
    id: 2,
    name: "Stanford University",
    location: "Stanford, CA",
    type: "Private",
    category: "Research",
    ranking: 3,
    tuition: 56169,
    acceptanceRate: "4%",
    image: "https://images.unsplash.com/photo-1603437119287-4a3732b685f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXN8ZW58MHx8MHx8fDA%3D",
    tags: ["Engineering", "Computer Science", "Research"]
  },
  {
    id: 3,
    name: "MIT",
    location: "Cambridge, MA",
    type: "Private",
    category: "Research",
    ranking: 4,
    tuition: 55878,
    acceptanceRate: "7%",
    image: "https://images.unsplash.com/photo-1566835745069-cebca4b64ce3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZXN8ZW58MHx8MHx8fDA%3D",
    tags: ["Engineering", "Technology", "Research"]
  },
  {
    id: 4,
    name: "University of California, Berkeley",
    location: "Berkeley, CA",
    type: "Public",
    category: "Research",
    ranking: 22,
    tuition: 14312,
    acceptanceRate: "16%",
    image:  "https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZXN8ZW58MHx8MHx8fDA%3D",
    tags: ["Research", "Science", "Public"]
  },
  {
    id: 5,
    name: "University of Michigan",
    location: "Ann Arbor, MI",
    type: "Public",
    category: "Research",
    ranking: 23,
    tuition: 15948,
    acceptanceRate: "23%",
    image: "https://images.unsplash.com/photo-1560106371-71f9c5ca9f42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sbGVnZXN8ZW58MHx8MHx8fDA%3D",
    tags: ["Sports", "Research", "Public"]
  },
  {
    id: 6,
    name: "Yale University",
    location: "New Haven, CT",
    type: "Private",
    category: "Ivy League",
    ranking: 5,
    tuition: 57700,
    acceptanceRate: "6%",
    image:"https://images.unsplash.com/photo-1561525985-654e6a2fa04a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sbGVnZXN8ZW58MHx8MHx8fDA%3D",
    tags: ["Liberal Arts", "Research", "Ivy League"]
  },
  {
    id: 7,
    name: "Princeton University",
    location: "Princeton, NJ",
    type: "Private",
    category: "Ivy League",
    ranking: 1,
    tuition: 56010,
    acceptanceRate: "6%",
    image:  "https://images.unsplash.com/photo-1620650764255-6797e68c7904?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2VzfGVufDB8fDB8fHww",
    tags: ["Liberal Arts", "Engineering", "Ivy League"]
  },
  {
    id: 8,
    name: "Columbia University",
    location: "New York, NY",
    type: "Private",
    category: "Ivy League",
    ranking: 6,
    tuition: 63530,
    acceptanceRate: "5%",
    image: "https://images.unsplash.com/photo-1612155576354-da59a4aca3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGxlZ2VzfGVufDB8fDB8fHww",
    tags: ["Urban", "Research", "Business"]
  },
  {
    id: 9,
    name: "University of Chicago",
    location: "Chicago, IL",
    type: "Private",
    category: "Research",
    ranking: 6,
    tuition: 60552,
    acceptanceRate: "6%",
    image: "https://images.unsplash.com/photo-1616428394230-ba242d33e3ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbGxlZ2VzfGVufDB8fDB8fHww",
    tags: ["Research", "Economics", "Liberal Arts"]
  },
  {
    id: 10,
    name: "California Institute of Technology",
    location: "Pasadena, CA",
    type: "Private",
    category: "Research",
    ranking: 9,
    tuition: 58680,
    acceptanceRate: "7%",
    image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbGxlZ2VzfGVufDB8fDB8fHww",
    tags: ["Engineering", "Science", "Research"]
  },
  {
    id: 11,
    name: "Duke University",
    location: "Durham, NC",
    type: "Private",
    category: "Research",
    ranking: 10,
    tuition: 60489,
    acceptanceRate: "8%",
    image: "https://images.unsplash.com/photo-1663942465101-18af0f5e7760?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxjb2xsZWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Medicine", "Research", "Sports"]
  },
  {
    id: 12,
    name: "University of Pennsylvania",
    location: "Philadelphia, PA",
    type: "Private",
    category: "Ivy League",
    ranking: 8,
    tuition: 61710,
    acceptanceRate: "8%",
    image: "https://images.unsplash.com/photo-1621009047117-30b97f97965b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxjb2xsZWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Business", "Medicine", "Ivy League"]
  },
  {
    id: 13,
    name: "Northwestern University",
    location: "Evanston, IL",
    type: "Private",
    category: "Research",
    ranking: 9,
    tuition: 59889,
    acceptanceRate: "8%",
    image: "https://images.unsplash.com/photo-1714494977504-26dccaaa3207?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxjb2xsZWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Journalism", "Business", "Research"]
  },
  {
    id: 14,
    name: "University of California, Los Angeles",
    location: "Los Angeles, CA",
    type: "Public",
    category: "Research",
    ranking: 20,
    tuition: 13804,
    acceptanceRate: "14%",
    image: "https://images.unsplash.com/photo-1706078352329-977b4cb3f889?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxjb2xsZWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Sports", "Arts", "Public"]
  },
  {
    id: 15,
    name: "Johns Hopkins University",
    location: "Baltimore, MD",
    type: "Private",
    category: "Research",
    ranking: 9,
    tuition: 57010,
    acceptanceRate: "11%",
    image: "https://images.unsplash.com/photo-1741622197924-5dae6fbd8bef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxjb2xsZWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Medicine", "Research", "International"]
  },
  {
    id: 16,
    name: "Brown University",
    location: "Providence, RI",
    type: "Private",
    category: "Ivy League",
    ranking: 14,
    tuition: 62304,
    acceptanceRate: "7%",
    image: "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxjb2xsZWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Liberal Arts", "Open Curriculum", "Ivy League"]
  },
  {
    id: 17,
    name: "Cornell University",
    location: "Ithaca, NY",
    type: "Private",
    category: "Ivy League",
    ranking: 17,
    tuition: 61015,
    acceptanceRate: "11%",
    image: "https://images.unsplash.com/photo-1554320691-f543fec70942?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxjb2xsZWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Agriculture", "Engineering", "Hotel Management"]
  },
  {
    id: 18,
    name: "Rice University",
    location: "Houston, TX",
    type: "Private",
    category: "Research",
    ranking: 17,
    tuition: 52895,
    acceptanceRate: "9%",
    image: "https://images.unsplash.com/photo-1702151554223-f749a139f164?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxjb2xsZWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Engineering", "Natural Sciences", "Research"]
  },
  {
    id: 19,
    name: "University of Notre Dame",
    location: "Notre Dame, IN",
    type: "Private",
    category: "Research",
    ranking: 19,
    tuition: 58843,
    acceptanceRate: "16%",
    image: "https://images.unsplash.com/photo-1625264202024-af262c22cf0a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxjb2xsZWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Catholic", "Liberal Arts", "Business"]
  },
  {
    id: 20,
    name: "Vanderbilt University",
    location: "Nashville, TN",
    type: "Private",
    category: "Research",
    ranking: 14,
    tuition: 56966,
    acceptanceRate: "10%",
    image: "https://images.unsplash.com/photo-1616079482812-62c95cd27ea7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxjb2xsZWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Medicine", "Education", "Research"]
  }
];

// Get all unique tags from college data
const getAllTags = () => {
  const tagSet = new Set();
  collegeData.forEach(college => {
    college.tags.forEach(tag => tagSet.add(tag));
  });
  return [...tagSet];
};

// Get all unique college types
const getAllTypes = () => {
  const typeSet = new Set();
  collegeData.forEach(college => typeSet.add(college.type));
  return [...typeSet];
};

const CollegeListing = () => {
  const [filters, setFilters] = useState({
    tags: [],
    types: [],
    search: '',
  });
  const [colleges, setColleges] = useState(collegeData);
  const [allTags] = useState(getAllTags());
  const [allTypes] = useState(getAllTypes());

  // Filter colleges based on selected filters
  useEffect(() => {
    let filteredColleges = collegeData;

    // Filter by tags
    if (filters.tags.length > 0) {
      filteredColleges = filteredColleges.filter(college => 
        filters.tags.some(tag => college.tags.includes(tag))
      );
    }

    // Filter by types
    if (filters.types.length > 0) {
      filteredColleges = filteredColleges.filter(college => 
        filters.types.includes(college.type)
      );
    }

    // Filter by search
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredColleges = filteredColleges.filter(college => 
        college.name.toLowerCase().includes(searchTerm) || 
        college.location.toLowerCase().includes(searchTerm)
      );
    }

    setColleges(filteredColleges);
  }, [filters]);

  // Toggle tag filter
  const toggleTagFilter = (tag) => {
    setFilters(prevFilters => {
      if (prevFilters.tags.includes(tag)) {
        return {
          ...prevFilters,
          tags: prevFilters.tags.filter(t => t !== tag)
        };
      } else {
        return {
          ...prevFilters,
          tags: [...prevFilters.tags, tag]
        };
      }
    });
  };

  // Toggle type filter
  const toggleTypeFilter = (type) => {
    setFilters(prevFilters => {
      if (prevFilters.types.includes(type)) {
        return {
          ...prevFilters,
          types: prevFilters.types.filter(t => t !== type)
        };
      } else {
        return {
          ...prevFilters,
          types: [...prevFilters.types, type]
        };
      }
    });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      search: e.target.value
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      tags: [],
      types: [],
      search: '',
    });
  };

  return (
    <div className="college-listing-container">
      <div className="header-section">
        <h1>Explore Top Colleges</h1>
        <p>Find the perfect college to match your academic goals and interests</p>
      </div>
      
      <div className="filter-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search colleges by name or location..."
            value={filters.search}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        
        <div className="filter-container">
          <div className="filter-group">
            <h3>Filter by Type</h3>
            <div className="filter-tags">
              {allTypes.map(type => (
                <button
                  key={type}
                  className={`filter-tag ${filters.types.includes(type) ? 'active' : ''}`}
                  onClick={() => toggleTypeFilter(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          <div className="filter-group">
            <h3>Filter by Features</h3>
            <div className="filter-tags">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`filter-tag ${filters.tags.includes(tag) ? 'active' : ''}`}
                  onClick={() => toggleTagFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {(filters.tags.length > 0 || filters.types.length > 0 || filters.search) && (
            <button className="reset-button" onClick={resetFilters}>
              Reset Filters
            </button>
          )}
        </div>
      </div>
      
      <div className="results-info">
        <p>Showing {colleges.length} colleges</p>
      </div>
      
      <div className="colleges-grid">
        {colleges.map(college => (
          <div className="college-card" key={college.id}>
            <div className="college-image">
              <img src={college.image} alt={college.name} />
            </div>
            <div className="college-info">
              <h2>{college.name}</h2>
              <p className="college-location">{college.location}</p>
              <div className="college-details">
                <span>Rank: #{college.ranking}</span>
                <span>Acceptance: {college.acceptanceRate}</span>
              </div>
              <p className="college-tuition">Tuition: ${college.tuition.toLocaleString()}/year</p>
              <div className="college-tags">
                {college.tags.map(tag => (
                  <span className="college-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <button className="view-button"><a href={`/college/${college.id}`}>View Details</a></button>
            </div>
          </div>
        ))}
      </div>
      
      {colleges.length === 0 && (
        <div className="no-results">
          <h3>No colleges match your search criteria</h3>
          <p>Try adjusting your filters or search term</p>
          <button className="reset-button" onClick={resetFilters}>
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CollegeListing;