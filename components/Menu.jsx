import { useRef, useState } from "react";
import { sliderLists } from "../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const contentRef = useRef()
  const totalIndex = sliderLists.length


    useGSAP(()=>{
      gsap.fromTo("#title, .details",{ opacity:0, stagger:true },{yPercent:0, opacity:1, duration:0.8})
      gsap.fromTo(".details",{ yPercent: 100, opacity:0},{yPercent:0, opacity:1, duration:0.8})
      gsap.fromTo(".cocktail img",{xPercent:-100, opacity:0},{xPercent:0, opacity:1, duration:.9, ease:"power1.out"})

      gsap.timeline({
        scrollTrigger:{
          trigger: ".cocktail",
          start: "top 20%",
          end: "top top",
          scrub:1.2,
        }
      }).to("#m-left-leaf", { y: -90 }, 0).to("#m-right-leaf", { y: 90 }, 0)


    },[currentIndex])


    const goToSlide= (index) =>{
      const newIndex = (index + totalIndex) % totalIndex ; 

      setCurrentIndex(newIndex)
    }

    const getCocktailAt = (indexOf)=>{
      return sliderLists[(indexOf+ currentIndex+ totalIndex)%totalIndex];
    }

    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);
    const currCocktail = getCocktailAt(0)

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, ind)=>{
            const isActive = ind === currentIndex;

            return (
                <button
                  onClick={()=>goToSlide(ind)}
                 key={ind} className={`${isActive ? "text-yellow-500 border-white" : "text-white/70 border-white/70" } `}>
                    {cocktail.name}
                </button>
            )
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button onClick={()=> goToSlide(currentIndex-1)} className="text-left md:flex md:items-center md:gap-2">
            <img src="/images/right-arrow.png" alt="left-arrow" />
            <span> {prevCocktail.name} </span>
          </button>
          <button onClick={()=> goToSlide(currentIndex+1)} className="text-right md:flex md:items-center md:gap-2">
            <span> {nextCocktail.name} </span>
            <img src="/images/left-arrow.png" alt="right-arrow" />
          </button>
        </div>

        <div className="cocktail">
          <img src={currCocktail.image} alt="cocktailImg" />
        </div>

        <div  className="recipe ">
          <div ref={contentRef} className="info">
            <p>Recipe for: </p>
            <p id="title">{currCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currCocktail.title} </h2>
            <p>{currCocktail.description} </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Menu
