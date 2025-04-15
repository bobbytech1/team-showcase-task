import { useState, useEffect } from 'react';
import MemberCard from './MemberCard';
import TeamFilter from './TeamFilter';
import ReactPaginate from 'react-paginate';

export const TeamShowcase = () => {
  // State management for team data and UI states
  const [team, setTeam] = useState([]);          
  const [loading, setLoading] = useState(true);  
  const [filterLoading, setFilterLoading] = useState(false); 
  const [departmentFilter, setDepartmentFilter] = useState('All Departments'); 
  const [currentPage, setCurrentPage] = useState(0);
  const membersPerPage = 6; 

  
   //Fetches team data from API on component mount

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('https://crystaloptionstask.free.beeceptor.com/api/v1');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setTeam(data);
      } catch (error) {
        console.error('API Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  // Extract unique department values from team data (excluding undefined/null)
  const departments = [...new Set(team.map(member => member?.department).filter(Boolean))];


   //Filters team members based on selected department
   
  const filteredTeam = departmentFilter === 'All Departments' 
    ? team 
    : team.filter(member => member?.department === departmentFilter);

  // Pagination calculations
  const pageCount = Math.ceil(filteredTeam.length / membersPerPage);
  const paginatedTeam = filteredTeam.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage
  );

  
   //Handles department filter changes
   
  const handleApplyFilter = (department) => {
    setFilterLoading(true);
    setCurrentPage(0);
    
    // Simulate API delay (remove in production)
    setTimeout(() => {
      setDepartmentFilter(department);
      setFilterLoading(false);
    }, 500);
  };

 
   //Handles pagination page changes
  
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Loading state UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/Loading.gif" alt='Loading team data...'/>
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center'>
      <div className="py-12 w-full max-w-6xl px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h1>
        
        {/* Department filter component */}
        <TeamFilter 
          departments={departments} 
          onApplyFilter={handleApplyFilter}
          selectedDepartment={departmentFilter}
          isLoading={filterLoading}
        />

        {/* Conditional rendering based on loading/filter states */}
        {filterLoading ? (
          <div className="flex justify-center items-center h-60">
            <img src="/Loading.gif" alt='Applying filters...'/>
          </div>
        ) : (
          <>
            {/* Team members grid - responsive layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mx-0 mx-2">
              {paginatedTeam.map((member) => (
                <MemberCard key={member?.id} member={member} />
              ))}
            </div>

            {/* Empty state or pagination controls */}
            {filteredTeam.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">
                No team members found in {departmentFilter === 'All Departments' ? 'any' : 'the'} {departmentFilter.toLowerCase()} department.
              </p>
            ) : (
              <div className="mt-8 flex justify-center">
                <ReactPaginate
                  previousLabel="← Previous"
                  nextLabel="Next →"
                  breakLabel="..."
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                  forcePage={currentPage}
                  containerClassName="flex flex-wrap gap-2"
                  pageClassName="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer"
                  activeClassName="bg-blue-600 text-white border-blue-600 hover:text-black"
                  previousClassName="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer"
                  nextClassName="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer"
                  disabledClassName="opacity-50 cursor-not-allowed"
                  breakClassName="px-3 py-1"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
