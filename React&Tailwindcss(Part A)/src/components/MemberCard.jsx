/**
 * MemberCard Component
 * 
 * Displays individual team member information including:
 * - Profile photo
 * - Name and job title
 * - Department
 * - Social media links
 * - Hover animations
 */
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MemberCard = ({ member }) => {
    return (
      <div className="
        bg-[#FAFAFA] border border-gray-100 w-full rounded-lg p-6 shadow-md cursor-pointer
        transform transition-all duration-500 ease-in-out
        hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02]
      ">
        {/* Member profile image with hover effect */}
        <img 
          src={member.photo} 
          alt={member.name} 
          className="
            w-32 h-32 rounded-full mx-auto mb-4 object-cover 
            border-4 border-blue-100 transition-transform
            duration-300 ease-in-out group-hover:scale-110
          "
        />
        
        {/* Member name with hover color transition */}
        <h3 className="text-xl font-bold text-center text-gray-800 transition-colors duration-300 hover:text-blue-600">
          {member.name}
        </h3>
        
        {/* Job title and department information */}
        <p className="text-blue-600 text-center mb-2">{member.jobTitle}</p>
        <p className="text-gray-500 text-center text-sm mb-4">{member.department}</p>
        
        {/* Social media links with icons */}
        <div className="flex justify-center space-x-4">
          <a 
            href={member.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="
              text-blue-700 hover:text-blue-900
              transition-colors duration-300
            "
            aria-label={`${member.name}'s LinkedIn profile`}
          >
           <FaLinkedin size={25}/>
          </a>
          <a 
            href={member.social.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="
              text-sky-500 hover:text-sky-700
              transition-colors duration-300
            "
            aria-label={`${member.name}'s Twitter profile`}
          >
            <FaXTwitter size={25}/>
          </a>
        </div>
      </div>
    );
  };
 
export default MemberCard;