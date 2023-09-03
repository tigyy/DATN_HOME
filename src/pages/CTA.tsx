import React from 'react'

const CTA = () => {
  return (
<div className="p-6">
  <div className="mx-auto">
    <div
      className="relative z-20 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 ligth"
      style={{
        background:
          " url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/d8ae4bab-e246-45d6-9e1a-7537fe70f5e7/nike-just-do-it.jpg",
        backgroundSize: "cover"
      }}
    >
      <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
        <div className="lg:self-center">
          <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
            <span className="block">
            Just In NIKE READY PACK
            </span>
          </h2>
          <p className="mt-4 text-base leading-6 text-white">
          The season is here. Start yours prepared with the best in touch, agility, precision and speed.
          </p>
          <p className="mt-4 text-base leading-6 text-dark-blue-800"></p>
          <a
            href="#"
            target="_blank"
            style={{ backgroundColor: "#000" }}
            className="mt-8 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium  text-white transition duration-150 ease-in-out"
          >
            Get started
          </a>
          <a
            href="#"
            target="_blank"
            className="ml-4 mt-8 text-white font-bold text-sm underline"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="relative pb-3/5 -mt-6 md:pb-1/2">
        {/* <img
          className="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-10 lg:translate-y-20"
          src="https://sneakernews.com/wp-content/uploads/2022/03/adidas-shopping-guide-march-2022-footwear-banner.jpg"
        /> */}
      </div>
    </div>
  </div>
</div>
  )
}

export default CTA