import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { features } from "../assets/data"
import { Wallet } from "lucide-react"

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  // autoplay
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length)
      }, 4000)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  const handleHover = (index) => {
    setIsPaused(true)
    setActiveIndex(index)
  }

  const handleLeave = () => {
    setIsPaused(false)
  }

  return (
    <section className="container mx-auto px-4 py-24">
      {/* TITLE */}
      <div className="max-w-2xl mb-20">
        <h2 className="text-5xl md:text-6xl mb-6 tracking-tight clash-display text-left">
          Advanced Training
          <br />
          <span className="font-medium clash-display grad1">
            Features and Tools
          </span>
        </h2>

        <p className="text-lg text-zinc-300/80 text-left">
          Experience Professional-grade trading tools and features designed for
          both novice and experienced crypto traders.
        </p>
      </div>

      {/* Features Content */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left triggers */}
          <div className="md:col-span-5 space-y-3">
            <div className="col w-full h-auto p-0 space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleLeave}
                  onClick={() => setActiveIndex(index)}
                  className={`centered-row gap-4 cursor-pointer hover:bg-indigo-500/10 p-2 border transition-all duration-300 ease-out rounded-xl ${
                    activeIndex === index
                      ? "border-indigo-400/40 bg-indigo-500/10"
                      : "border-transparent"
                  }`}
                >
                  {/* Icon */}
                  <div>{feature.icon}</div>

                  {/* Content */}
                  <div className="col gap-1">
                    <h3 className="text-base clash-display text-indigo-200">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-300/80 ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right tab images */}
          <div className="md:col-span-7 min-h-[320px] centered-row">
            <AnimatePresence mode="wait">
              <motion.div
                key={features[activeIndex].title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass rounded-xl overflow-hidden w-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-transparent" />
                <img
                  src={features[activeIndex].image}
                  alt="feature_image"
                  className="w-full h-full object-contain relative z-10"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
