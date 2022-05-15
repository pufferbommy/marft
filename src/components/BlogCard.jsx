import React from 'react'

const BlogCard = (props) => {
  const { image, postedOn, title, desc } = props
  return (
    <article>
      <img className="w-full" src={image} alt={title} />
      <span className="text-[#F29764] font-semibold leading-[30px] inline-block mt-6 text-base">
        {postedOn}
      </span>
      <h3 className="mt-1 text-[36px] leading-[30px] font-semibold">{title}</h3>
      <p className="mt-1 text-[22px] leading-[30px] font-medium text-primary-gray">
        {desc}
      </p>
      <a
        className="mt-[16px] text-[23px] font-bold decoration-1 underline inline-block underline-offset-2"
        href="#"
      >
        Read More
      </a>
    </article>
  )
}

export default BlogCard
