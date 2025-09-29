import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Analyze your resume with AI for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your Applications & resume ratings</h1>
        <p>Review submissions with AI feedback</p>
      </div>
    

    {resumes.length > 0 && (
      <div className="resumes-section">
      {resumes.map((resume) => ( <ResumeCard key={resume.id} resume={resume} /> ))}
      </div>
    )}
  </section>  
  </main>;
}
