import Image from "next/image";
import React from "react";

const SkillsItem = ({title, imageSkills}) => {
  return (
    <div className='p-4 shadow-xl rounded-full hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={imageSkills} alt='/' width='64px' height='64px'/>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
export default SkillsItem;