import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className="container">
            {/* content */}
            <div className="">
                {/* Title */}
                <div className="">
                    <span className="">
                        <img src="/images/shape-1.png" alt="title shape" width={39} height={43}/>
                    </span>

                    <div className="">
                        <span>
                            <img src="/images/shape-2.png" alt="title shape" width={48} height={48} />
                        </span>
                        <h1 className="">
                           <span className="">Unlock</span> Your Creative Potential
                        </h1>
                    </div>
                </div>

                <p className="">with Online Design and Development Courses.</p>
                <p className="">Learn from Industry Experts and Enhance Your Skills.</p>

                {/* Btn wrapper */}
                <div className="">
                    <button className="">Explore Courses</button>
                    <button className="">View Pricing</button>
                </div>

            </div>
            {/* banner */}
            <figure className="">

            </figure>
        </div>
    </section>
  )
}

export default Hero