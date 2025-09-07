import React from "react";
import Company from "@/components/home/Company";
import CaseStudySection from "@/components/works/CaseStudySection";
import CaseStudiesGrid from "@/components/works/CaseStudiesGrid";
import WorksStatsSection from "@/components/works/WorksStatsSection";
import WorksTestimonialsSection from "@/components/works/WorksTestimonialsSection";
import WorksProcessSection from "@/components/works/WorksProcessSection";

const Works = () => {
  return (
    <>
      <CaseStudySection />
      <WorksStatsSection />
      <CaseStudiesGrid />
      {/* <WorksProcessSection /> */}
      <WorksTestimonialsSection />
      <Company />
    </>
  );
};

export default Works;
