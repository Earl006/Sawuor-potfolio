import React, { useEffect, useRef } from 'react';

function Skills() {
  const skillsData = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 75 },
    { name: 'Git and GitHub', percentage: 70 },
  ];

  const circleRefs = useRef([]);

  useEffect(() => {
    circleRefs.current.forEach((circle, index) => {
      const percentage = skillsData[index].percentage;
      const circumference = circle.getTotalLength();
      const offset = (100 - percentage) * circumference / 100;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;
      circle.getBoundingClientRect();
      circle.style.transition = 'stroke-dashoffset 1s ease-in-out';
      circle.style.strokeDashoffset = offset;
    });
  }, []);

  return (
    <div id='skills' className="bg-gray-100 font-sans py-8 px-4 md:px-8">
      <h1 className="text-center text-3xl mt-8 text-gray-800">Skills</h1>
      <div className="h-1 w-16 bg-yellow-500 mx-auto mt-4 mb-8" />
      <div className="flex flex-wrap justify-center mt-8">
        {skillsData.map((skill, index) => (
          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" key={index}>
            <div className="relative h-64 w-64 mx-auto mb-4">
              <svg className="w-full h-full">
                <circle
                  ref={ref => (circleRefs.current[index] = ref)}
                  className="text-green-500 fill-transparent stroke-current stroke-4"
                  cx="50%"
                  cy="50%"
                  r="90"
                  strokeWidth={16}
                ></circle>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-2xl font-bold text-black">{skill.percentage}%</span>
                <span className="text-sm text-gray-700 block">{skill.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
