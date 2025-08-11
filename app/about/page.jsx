export default function AboutPage() {
  return (
    <div className="p-8 max-w-8xl mx-auto">
      <h1 className="text-9xl font-bold mb-16">About me</h1>
      <p className="text-slate-500 mb-28 text-3xl leading-relaxed">
        I am a web developer with a strong focus on front-end technologies and relevant work experience in the field. 
        I graduated from Coder House, an intensive bootcamp in Argentina also UI/UX in Codo a Codo and Systems Analyst in Instituto Santo Domingo. I am passionate about improving user experiences through clean, 
        efficient design and enjoy working as part of a team. I am attracted to new challenges and bring persistence and dedication 
        to achieving my goals. My curiosity drives me to constantly learn and explore new technologies.
      </p>

      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col items-start w-40">
          <h3 className="text-4xl font-semibold text-violet-600">12/2022</h3>
          <p>Started my journey as a developer.</p>
        </div>

        <div className="flex flex-col items-start w-40">
          <h3 className="text-4xl font-semibold text-violet-600">2/2022</h3>
          <p>I started my studies at Coder House.</p>
        </div>
        <div className="flex flex-col items-start w-40">
          <h3 className="text-4xl font-semibold text-violet-600">8/2022</h3>
          <p>I started my UI/UX studies at Programa Codo a Codo.</p>
        </div>

        <div className="flex flex-col items-start w-40">
          <h3 className="text-4xl font-semibold text-violet-600">4/2023</h3>
          <p>Finished the programs.</p>
        </div>

        <div className="flex flex-col items-start w-40">
          <h3 className="text-4xl font-semibold text-violet-600">5/2024</h3>
          <p>Started Systems Analyst.</p>
        </div>

        <div className="flex flex-col items-start w-40">
          <h3 className="text-4xl font-semibold text-violet-600">4/2024</h3>
          <p>I got my first job as software developer in Techno Precios .</p>
        </div>

        <div className="flex flex-col items-start w-40">
          <h3 className="text-4xl font-semibold text-violet-600">5/2024</h3>
          <p>I joined Grupo MG as a software developer.</p>
        </div>
      </div>
    </div>
  );
}
