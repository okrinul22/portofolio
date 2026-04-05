import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto mt-10">

        <h1 className="text-3xl font-bold mb-4">
          About Me
        </h1>

        <p className="text-gray-600 mb-6">
          An Information Technology graduate from President University with a strong focus 
          on Fullstack Development, proficient in React, Laravel, Node.js, SQL, and Docker. 
          Experienced in building real-world applications and integrating systems.
        </p>

        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-600">
          <li>React.js</li>
          <li>Laravel</li>
          <li>Node.js (Express)</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
          <li>MySQL</li>
          <li>Docker</li>
          <li>Javascript</li>
          <li>bootstrap 4</li>
          <li>Express.js</li>
          <li>Sql</li>
          <li>Html</li>
          <li>CSS</li>
          <li>PHP</li>
          <li>Figma</li>          
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Experience</h2>

<div className="space-y-4 text-gray-600">
  <div>
    <h3 className="font-bold">IT Developer</h3>
    <p>PT Putra Aulia Konsultan</p>
  </div>

  <div>
    <h3 className="font-bold">Web Developer</h3>
    <p>Emergency IoT Monitoring Project</p>
  </div>
</div>

      </div>
    </MainLayout>
  );
}