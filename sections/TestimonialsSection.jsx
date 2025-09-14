import { testimonials } from "../assets/data"

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-normal mb-4">Trusted By Traders</h2>
          <p className="text-zinc-400/90 text-lg">
            Join Thousands of satisfied traders on FX Trade
          </p>
        </div>

        {/* Testimonials list - vertical */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="cursor-pointer bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl"
            >
              {/* Image & name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 flex items-center justify-center overflow-hidden rounded-full bg-pink-500">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-bold">
                      {testimonial.name[0]}
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-lg clash-display text-white/90">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-white/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <p className="text-white/80 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
