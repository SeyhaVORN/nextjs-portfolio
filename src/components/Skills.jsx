import React from "react";
import SkillsItem from "./SkillsItem";
import html from '../../public/assets/skills/html.png';
import css from '../../public/assets/skills/css.png';
import sass from '../../public/assets/skills/sass.png';
import bootstrap from '../../public/assets/skills/bootstrap.png';
import tailwind from '../../public/assets/skills/tailwind.png';
import javascript from '../../public/assets/skills/js.png';
import reactjs from '../../public/assets/skills/react.png';
import nextjs from '../../public/assets/skills/nextjs.png';
import github from '../../public/assets/skills/github1.png';
import php from '../../public/assets/skills/php.png';
import laravel from '../../public/assets/skills/laravel.png';
import nodejs from '../../public/assets/skills/node.png';
import nestjs from '../../public/assets/skills/nestjs.png';
import postgres from '../../public/assets/skills/postgres.png';
import mysql from '../../public/assets/skills/mysql.png';
import aws from '../../public/assets/skills/aws.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-6 md:mb-[200px]'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Training Skill</p>
        <h2 className='py-6'>What can I do</h2>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>

          <SkillsItem title={"HTML"} imageSkills={html} skillsPercent={"80%"}/>
          <SkillsItem title={"CSS"} imageSkills={css} skillsPercent={"80%"}/>
          <SkillsItem title={"SASS"} imageSkills={sass} skillsPercent={"70%"}/>
          <SkillsItem title={"Bootstrap"} imageSkills={bootstrap} skillsPercent={"70%"}/>
          <SkillsItem title={"Tailwind"} imageSkills={tailwind} skillsPercent={"60%"}/>
          <SkillsItem title={"JavaScript"} imageSkills={javascript} skillsPercent={"60%"}/>
          <SkillsItem title={"ReactJs"} imageSkills={reactjs} skillsPercent={"60%"}/>
          <SkillsItem title={"NextJs"} imageSkills={nextjs} skillsPercent={"60%"}/>
          <SkillsItem title={"GitHub"} imageSkills={github} skillsPercent={"70%"}/>
          <SkillsItem title={"PHP"} imageSkills={php} skillsPercent={"60%"}/>
          <SkillsItem title={"Laravel"} imageSkills={laravel} skillsPercent={"60%"}/>
          <SkillsItem title={"NodeJs"} imageSkills={nodejs} skillsPercent={"50%"}/>
          <SkillsItem title={"NestJs"} imageSkills={nestjs} skillsPercent={"50%"}/>
          <SkillsItem title={"Postgres"} imageSkills={postgres} skillsPercent={"60%"}/>
          <SkillsItem title={"MySQL"} imageSkills={mysql} skillsPercent={"60%"}/>
          <SkillsItem title={"AWS"} imageSkills={aws} skillsPercent={"50%"}/>

        </div>
      </div>
    </div>
  );
}

export default Skills;