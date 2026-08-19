import React from 'react';
import DossierLayout from '../layouts/DossierLayout';

const attritionSections = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <div className="space-y-6">
        <header className="border-b border-[#44463C] pb-4 space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C7335]">Flagship BI Case Study</p>
          <h1 className="font-mono text-3xl text-[#E0D8C3] font-bold tracking-wide">
            Employee Attrition Analytics Dashboard
          </h1>
          <p className="text-sm font-sans text-stone-300 italic leading-relaxed mb-4">
            Diagnosing turnover flight risks using relational MySQL schemas, diagnostic cohorts, and interactive Power BI / Tableau dashboards.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">SQL (MySQL)</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">Power BI</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">Tableau</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">Python / Pandas</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start font-sans">
          <div className="md:col-span-2 space-y-4 text-sm md:text-base text-stone-300 leading-relaxed">
            <p className="mb-4">
              High employee turnover carries heavy organizational costs, including lost institutional knowledge, recruitment overhead, and onboarding friction. This project maps an end-to-end data pipeline to analyze historical HR cohorts and diagnose operational drivers of attrition.
            </p>
            <p className="mb-4">
              By structuring synthetic employee data from disconnected spreadsheets into a normalized relational model, I built diagnostic querying suites and interactive BI dashboards to help stakeholders isolate at-risk segments.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-4 space-y-2 text-xs shadow-md font-mono">
            <h3 className="text-xs text-[#CF9E4F] font-bold uppercase tracking-wider mb-2">Business Impact</h3>
            <ul className="space-y-2 mb-6 text-stone-300 font-sans">
              <li><strong>• High-Risk Roles:</strong> Identify high-risk roles & divisions</li>
              <li><strong>• Overtime Burnout:</strong> Measure overtime burnout correlations</li>
              <li><strong>• Salary Benchmarks:</strong> Benchmark salary brackets & retention</li>
              <li><strong>• Actionable Policies:</strong> Propose actionable HR policies</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'schema',
    title: 'Relational Schema',
    content: (
      <div className="space-y-6 font-sans">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Database Schema & Relational Normalization
        </h2>
        <p className="text-sm text-stone-300 leading-relaxed mb-4">
          The raw employee spreadsheets were separated into two core logical tables inside a relational database to enforce data integrity:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">Table 1. Demographics (hr_1)</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              Stores immutable variable cohorts: <strong>EmployeeNumber</strong> (PK), <strong>Age</strong>, <strong>Gender</strong>, <strong>EducationField</strong>, and job satisfaction ratings.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">Table 2. Compensation (hr_2)</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              Stores operational variables linked via <strong>EmployeeID</strong> (FK): <strong>MonthlyIncome</strong>, <strong>PercentSalaryHike</strong>, <strong>Overtime</strong>.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'adr',
    title: 'ADR-004',
    content: (
      <div className="space-y-6">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Architecture Decision Record (ADR-004)
        </h2>
        <div className="bg-[#1E1F1A] border-l-4 border-[#8C7335] p-6 shadow-md rounded-r-sm space-y-4 font-mono">
          <div className="flex justify-between items-center border-b border-[#44463C] pb-3 text-xs">
            <span className="text-[#CF9E4F] font-bold">ADR-004 // Relational Schema Decomposition (3NF)</span>
            <span className="text-[#059669] bg-[#110E0C] border border-[#059669]/40 px-2 py-0.5 rounded-sm">Status: Accepted</span>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
            <p className="mb-4"><strong className="text-[#E0D8C3] font-mono">Context:</strong> Flat HR spreadsheet exports combine demographic traits, job role assignments, and monthly compensation into single wide rows, causing data duplication.</p>
            <p className="mb-4"><strong className="text-[#E0D8C3] font-mono">Decision:</strong> Decompose flat files into 3NF tables <strong>hr_1</strong> and <strong>hr_2</strong>, joined on primary key <strong>EmployeeNumber = EmployeeID</strong>.</p>
            <p className="mb-4"><strong className="text-[#E0D8C3] font-mono">Consequences:</strong> Guarantees referential integrity, optimizes B-Tree indexing, and enables high-speed analytical queries.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'queries',
    title: 'SQL Queries',
    content: (
      <div className="space-y-6 font-sans">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Diagnostic Queries & Overtime Analysis
        </h2>
        <pre>{`SELECT 
    CASE 
        WHEN t2.monthlyincome < 3000 THEN 'Under $3k'
        WHEN t2.monthlyincome BETWEEN 3000 AND 6000 THEN '$3k - $6k'
        ELSE 'Over $6k'
    END AS income_bracket,
    COUNT(*) AS total_employees,
    SUM(CASE WHEN t1.attrition = 'Yes' THEN 1 ELSE 0 END) AS attrition_count
FROM hr_1 t1
JOIN hr_2 t2 ON t1.employeenumber = t2.employeeid
GROUP BY income_bracket;`}</pre>
      </div>
    ),
  },
  {
    id: 'insights',
    title: 'Strategic Insights',
    content: (
      <div className="space-y-6 font-sans">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Strategic HR Recommendations
        </h2>
        <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-6 space-y-3 shadow-md">
          <ul className="space-y-2 mb-6 text-xs md:text-sm text-stone-300">
            <li className="flex items-start gap-2">
              <strong>• Overtime Burnout:</strong> Employees working overtime experience double the attrition rate (&gt;30% exit risk).
            </li>
            <li className="flex items-start gap-2">
              <strong>• Salary Thresholds:</strong> Turnover is heavily concentrated in the sub-$3,000 monthly income segment.
            </li>
            <li className="flex items-start gap-2">
              <strong>• Tenure Bottlenecks:</strong> Passing 12 months without active promotion creates peak flight risk.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'repo',
    title: 'Repository',
    content: (
      <div className="space-y-6 text-center font-mono">
        <h2 className="text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Explore Implementation Codebase
        </h2>
        <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed font-sans mb-4">
          The full repository contains setup guides, SQL schemas, Excel data files, Tableau packages, and Jupyter Notebooks.
        </p>
        <div className="pt-4">
          <a 
            href="https://github.com/vardaanbazaz/employee-attrition-dashboard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1F1A] hover:bg-[#252620] border border-[#8C7335] text-[#E0D8C3] rounded-sm text-xs uppercase font-bold transition-all shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CF9E4F]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View GitHub Repository
          </a>
        </div>
      </div>
    ),
  },
];

export default function EmployeeAttritionEntry() {
  return <DossierLayout sections={attritionSections} />;
}
