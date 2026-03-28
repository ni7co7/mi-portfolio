'use client';
import { useLanguage } from '@/context/LanguageContext';
export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="p-36 max-w-8xl mx-auto">
      <h1 className="text-9xl mb-22 ">{t.aboutTitle}</h1>
      <p className="text-slate-500 text-3xl text-center mb-16">
        {t.aboutText}
      </p>

      <div className="flex flex-wrap gap-16 justify-center">
        <div className="flex flex-col items-start w-40">
          <h3 className="text-5xl font-semibold text-violet-600">12/2022</h3>
          <p >Started my journey as a developer.</p>
        </div>

        <div className="flex flex-col items-start w-40">
          <h3 className="text-5xl font-semibold text-violet-600">2/2022</h3>
          <p>I started my studies at Coder House.</p>
        </div>
        <div className="flex flex-col items-start w-40">
          <h3 className="text-5xl font-semibold text-violet-600">8/2022</h3>
          <p>I started my UI/UX studies at Programa Codo a Codo.</p>
        </div>

        <div className="flex flex-col items-start w-40">
          <h3 className="text-5xl font-semibold text-violet-600">4/2023</h3>
          <p>Finished the programs.</p>
        </div>

        <div className="flex flex-col items-start w-40">
          <h3 className="text-5xl font-semibold text-violet-600">5/2024</h3>
          <p>Started Systems Analyst.</p>
        </div>

        <div className="flex flex-col items-start w-40">
          <h3 className="text-5xl font-semibold text-violet-600">4/2024</h3>
          <p>I got my first job as software developer in Techno Precios .</p>
        </div>

        <div className="flex flex-col items-start w-40">
          <h3 className="text-5xl font-semibold text-violet-600">5/2024</h3>
          <p>I joined Grupo MG as a software developer.</p>
        </div>
      </div>
    </div>
  );
}
