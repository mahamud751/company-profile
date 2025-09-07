import React from 'react'
import AboutHeroSection from './../../../components/about/AboutHeroSection';
import MissionSection from './../../../components/about/MissionSection';
import ProcessSection from './../../../components/about/ProcessSection';
import TeamSection from './../../../components/about/TeamSection';
import AchievementsSection from './../../../components/about/AchievementsSection';
import CallToActionSection from './../../../components/about/CallToActionSection';
import VisionSection from './../../../components/about/VisionSection';

const page = () => {
    return (
        <>
            <AboutHeroSection />
            <MissionSection />
            <VisionSection />
            <ProcessSection />
            <TeamSection />
            <AchievementsSection />
            <CallToActionSection />
        </>
    )
}

export default page