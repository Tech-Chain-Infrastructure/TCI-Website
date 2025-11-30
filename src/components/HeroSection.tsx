"use client"
import { useState, useEffect } from "react"
import type React from "react"

interface HeroSectionProps {
  title: string
  subtitle: string
  buttonText?: string
  buttonLink?: string
  backgroundImage?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText = "Explore Now",
  buttonLink = "#services",
  backgroundImage = "",
}) => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {backgroundImage && (
        <div
          className="absolute inset-0 -z-5 opacity-30"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        {/* Decorative accent line */}
        <div className="inline-block mb-8">
          <div className="h-1 w-12 bg-gradient-to-r from-accent via-accent to-accent/50 rounded-full" />
        </div>

        {/* Main title with premium styling */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-foreground mb-6 leading-tight tracking-tight animate-fade-up">
          {title}
        </h1>


          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-fade-in">
            {subtitle}
          </p>

        {buttonText && buttonLink && (
<a
  href={buttonLink}
  className="
    inline-flex items-center justify-center 
    px-8 md:px-10 py-3 md:py-4 
    text-accent-foreground font-semibold 
    rounded-xl transition-all duration-300 
    shadow-lg hover:shadow-xl 
    hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50  
    bg-accent/90 
    relative 
    overflow-hidden 
    z-10 
    group 

  "
>
  
  
  <span 
    aria-hidden="true"
    className="
      absolute inset-0 
      bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
     from-green-400/80 via-green-300/20 to-transparent
      transition-all duration-500 
      scale-0 
      group-hover:scale-[3] 
      z-0
    "
  ></span>
  
  <span className="relative z-10 flex items-center">
    {buttonText}
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>
</a>
        )}

        <div className="mt-20 md:mt-24 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
