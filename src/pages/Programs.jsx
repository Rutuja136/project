import "../App.css"


function Programs() {
  const ProgramsData = [
  {
    id: 1,
    title: "Let's Study Smart, Let's Become Smarter",
    image: "/src/assets/learning.png",
    description:
      "Learn smart study techniques that help students achieve maximum results in minimum time.",
    benefits: [
      "Time Management",
      "Smart Study Techniques",
      "Better Concentration",
      "Improved Academic Performance",
    ],
    color: "blue",
    path: "/program/smart-study",
  },

  {
    id: 2,
    title: "21 Days – 21 Minutes Miracle",
    image: "/src/assets/time.png",
    description:
      "A simple method to replace negative mental patterns with positive habits through consistent daily practice.",
    benefits: [
      "Positive Thinking",
      "Habit Building",
      "Self Discipline",
      "Mental Transformation",
    ],
    color: "orange",
    path: "/program/21-days-miracle",
  },

  {
    id: 3,
    title: "Secret of a Healthy Mind and Life",
    image: "/src/assets/health.webp",
    description:
      "Train your mind effectively to achieve a healthy, balanced, and successful life.",
    benefits: [
      "Mental Wellness",
      "Healthy Lifestyle",
      "Stress Management",
      "Emotional Balance",
    ],
    color: "green",
    path: "/program/healthy-mind",
  },

  {
    id: 4,
    title: "SMART Scholar Test",
    image: "/src/assets/trophy.png",
    description:
      "A unique assessment designed to identify students' abilities, intelligence, potential, and future success indicators.",
    benefits: [
      "Aptitude Analysis",
      "IQ Assessment",
      "Career Guidance",
      "Performance Report",
    ],
    color: "purple",
    path: "/program/sst-exam",
  },
];


  return (
    <div>
      <h1>PROGRAMS</h1>
      <div className="cards">
        {ProgramsData.map((program)=>(
          <div className="card" key={program.id}>
            <h2>{program.title}</h2>

            <p>{program.description}</p>
            <ul className="list">
              {program.benefits.map((benefit,idx)=>(
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;