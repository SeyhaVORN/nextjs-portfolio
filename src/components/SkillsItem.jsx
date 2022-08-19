import Image from "next/image";
import React from "react";

const SkillsItem = ({title, imageSkills, skillsPercent}) => {
  return (
    // <div className='p-4 shadow-xl rounded-full hover:scale-105 ease-in duration-300'>
    //   <div className='grid grid-cols-2 gap-4 justify-center items-center'>
    //     <div className='m-auto'>
    //       <Image src={imageSkills} alt='/' width='64px' height='64px'/>
    //     </div>
    //     <div className='flex flex-col items-center justify-center'>
    //       <h3>{title}</h3>
    //     </div>
    //   </div>
    // </div>

    <div className='p-3 shadow-xl rounded-full hover:scale-105 ease-in duration-300'>
      <div className='flex justify-between items-center grid grid-cols-5'>
        <div className='flex justify-center items-center grid'>
          <Image src={imageSkills} alt='/' width='56px' height='56px'/>
        </div>
        <div className='grid col-span-4 w-full h-full'>
          <div className='flex items-center justify-center'>
            <div className='bg-[#ecf0f3] w-full h-[20px] shadow'>
              <div className="bg-blue-900 h-full" style={{width: `${skillsPercent}`}}></div>
            </div>
            <span className='pl-4 text-blue-900 font-bold'>{skillsPercent}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillsItem;