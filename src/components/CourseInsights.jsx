import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CourseInsights = ({ insights }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        onMouseEnter={() => setExpanded(true)}
        className="text-white/80 hover:text-white border-b border-transparent hover:border-white/50 transition duration-200 flex items-center gap-2"
      >
        Course Insights {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {expanded && (
        <div className="mt-4 space-y-4 bg-white/5 p-4 rounded-lg">
          {/* Skills Gained */}
          <div className="grid grid-cols-2 gap-4">
            <h4 className="text-white/80 font-semibold">Skills Gained</h4>
            <ul className="text-white/60 list-disc list-inside">
              {insights.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="grid grid-cols-2 gap-4">
            <h4 className="text-white/80 font-semibold">Experience</h4>
            <ul className="text-white/60 list-disc list-inside">
              {insights.experience.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-4">
            <h4 className="text-white/80 font-semibold">Achievements</h4>
            <ul className="text-white/60 list-disc list-inside">
              {insights.achievements.map((achieve, index) => (
                <li key={index}>{achieve}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseInsights;
