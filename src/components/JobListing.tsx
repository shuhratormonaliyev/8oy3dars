interface JobListingProps {
    company: string
    position: string
    postedAt: string
    contractType: string
    location: string
    isNew: boolean
    isFeatured: boolean
    skills: string[]
  }
  
  export default function JobListingCard({
    company = "Photosnap",
    position = "Senior Frontend Developer",
    postedAt = "1d ago",
    contractType = "Full Time",
    location = "USA only",
    isNew = true,
    isFeatured = true,
    skills = ["Frontend", "Senior", "HTML", "CSS", "JavaScript"]
  }: JobListingProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between w-full mt-4">
        <div className="flex items-center space-x-4">
          <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center text-white text-xs font-bold">
            PHOTOSNAP
          </div>
          <div>
            <div className="flex items-center space-y-2 mb-2">
              <h2 className="text-lg font-bold text-teal-500">{company}</h2>
              {isNew && (
                <span className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW!
                </span>
              )}
              {isFeatured && (
                <span className="bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">{position}</h3>
            <div className="text-gray-500 flex items-center space-x-2 text-sm">
              <span>{postedAt}</span>
              <span>•</span>
              <span>{contractType}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 flex-wrap">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-teal-100 text-teal-500 px-2 py-1 rounded-full text-sm font-semibold m-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )
  }