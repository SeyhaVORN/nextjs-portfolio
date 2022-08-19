import React from "react";
import restaurant from '../../public/assets/projects/res_project.png';
import fileManagement from '../../public/assets/projects/file-management.png';
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div id='projects' className='w-full p-6 sm:p-4'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Project</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem title='Restaurant Management' backgroudImage={restaurant} projectUrl='/restaurant'
                       languages={"Laravel"}/>
          <ProjectItem title='File Management' backgroudImage={fileManagement} projectUrl='/file' languages={"Laravel"}/>
        </div>
      </div>
    </div>
  );
}

export default Project;