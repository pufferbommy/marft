import React from 'react'
import BlogCard from './BlogCard'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'

const Blogs = () => {
  return (
    <section className="py-20 xl:py-0 h-auto xl:h-screen px-[30px] lg:px-[54.5px]">
      <div className="max-w-[1170px] mx-auto grid place-content-center h-full">
        <h2 className="text-[65px] font-semibold tracking-tight leading-[54px]">
          Read our blogs
        </h2>
        <div className="mt-[20px] flex flex-col xl:flex-row items-start xl:items-center gap-0 xl:gap-[317px] justify-between xl:justify-start">
          <p className="text-[22px] font-medium leading-[30px] max-w-[453px] text-primary-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non
            nisl tincidunt ut elementum turpis.
          </p>
          <button className="bg-primary-black text-primary-orange mt-4 xl:mt-0 w-[200px] xl:w-[237px] h-[60px] xl:h-[70px] font-bold text-[23px] rounded-[16px]">
            Read All Blogs
          </button>
        </div>
        <div className="mt-[50px] xl:mt-[96px] grid lg:grid-cols-2 gap-[76px]">
          <BlogCard
            image={blog1}
            postedOn="April 30, 2020"
            title="How to collaborate with companies"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis."
          />
          <BlogCard
            image={blog2}
            postedOn="April 30, 2020"
            title="About social media advertising"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum turpis."
          />
        </div>
      </div>
    </section>
  )
}

export default Blogs
