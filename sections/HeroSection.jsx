import { ArrowRight, Command } from "lucide-react"

const HeroSection = () => {
  return (
   <section className="container relative mx-auto  px-4 pt-40 pb-20 ">
        {/*Decorative Sub-title*/}
            <div className="flex w-fit py-2 mb-4 px-4 cursor-pointer
            rounded-full glass">

                <span className="text-sm font-medium text-zinc-300">
                    <Command className="w-4 h-4 inline-block mr-2" />
                    Next-gen Forex trading platform
                </span>
            </div>
        {/*Hero text*/}

        <div className="max-w-4xl relative z-10">
            {/*Heading*/}
            <h1 className="text-5xl md:text-7xl mb-4 tracking-tight text-left">
                <span className="clash-display grad1">
                    Trade forex with
                </span>
                <br />
                <span className="text-zinc-50 font-medium clash-display"> 
                   Confidence & security
                </span>
            </h1>

            {/* Para */}
                <p className="text-lg text-zinc-300/80 mb-8 max-w-2xl text-left">
                    EXperience seamless forex trading with advanced features, real-time analytics, and institutional-grade security.

                    <span className="text-zinc-200">
                     start trading in minutes.
                    </span>
                </p>

                {/*buttons*/}
       <div className="flex flex-col sm:flex-row gap-4 items-start">
  <button className="bg-indigo-500 text-base clash-display px-4 py-3 rounded-full cursor-pointer hover:translate-y-1 transition hover:bg-indigo-500/20">
    Start Trading Now
  </button>

  <button className="text-zinc-50 text-base clash-display glass px-4 flex items-center gap-2 py-3 rounded-full cursor-pointer hover:translate-y-1 transition hover:bg-indigo-500/20">
    View Markets <ArrowRight className="" />
  </button>
</div>
</div>

        {/*Hero image: UI image*/}
        <div className="relative mx-auto max-w-5xl mt-20">
            <div className="glass rounded-xl overflow:hidden">
                <img src="/chart2.png" alt="hero_image" className="w-full h-auto" />
            </div>
        </div>

        {/*--END SECTION--*/}
        

   </section>
  )
}

export default HeroSection
