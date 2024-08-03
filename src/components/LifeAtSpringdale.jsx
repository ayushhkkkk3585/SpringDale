import React from 'react';

const LifeAtSpringdale = () => {
  return (
    <div className="bg-teal-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Life at Springdale</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Section title="Extracurricular Activities">
          <List items={["Music", "Dance", "Drama", "Art", "Sports", "Robotics", "Debate Club", "Science Club"]} />
        </Section>
        
        <Section title="Clubs and Societies">
          <List items={["Literary Society", "Environmental Club", "Astronomy Club", "Coding Club"]} />
        </Section>
      </div>

      <Section title="Achievements" className="mt-8">
        <ul className="list-disc pl-5 space-y-2">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </Section>

      <Section title="Student Council" className="mt-8">
        <div className="grid md:grid-cols-3 gap-4">
          <CouncilMember role="President" name="Amy Parker" grade="12" />
          <CouncilMember role="Vice President" name="Rajiv Mehta" grade="11" />
          <CouncilMember role="Secretary" name="Lisa Wong" grade="10" />
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, children, className = "" }) => (
  <div className={`bg-white p-6 rounded-lg shadow ${className}`}>
    <h3 className="text-xl font-semibold mb-4 text-amber-600">{title}</h3>
    {children}
  </div>
);

const List = ({ items }) => (
  <ul className="grid grid-cols-2 gap-2">
    {items.map((item, index) => (
      <li key={index} className="bg-teal-50 p-2 rounded text-black">{item}</li>
    ))}
  </ul>
);

const CouncilMember = ({ role, name, grade }) => (
  <div className="bg-teal-50 p-4 rounded-lg text-center">
    <h4 className="font-semibold text-lg text-black">{role}</h4>
    <p className="text-black">{name}</p>
    <p className="text-sm text-gray-600">Grade {grade}</p>
  </div>
);

export default LifeAtSpringdale;
