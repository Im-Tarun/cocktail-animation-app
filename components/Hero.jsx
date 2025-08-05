import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"

const Hero = () => {
    useGSAP(()=>{
        const titleSplit = new SplitText('.title', {type: 'chars, words'});
        const subtitleSplit = new SplitText('.subtitle', {type: 'lines'});

        titleSplit.chars.forEach((char)=> char.classList.add('text-gradient'))

        gsap.from(titleSplit.chars,{
            opacity:0,
            yPercent: 50,
            stagger: 0.05,
            ease: "expo.out",
            duration:1.7
        })

        gsap.from(subtitleSplit.lines,{
            opacity:0,
            yPercent: 50,
            stagger: 0.09,
            ease: "expo.out",
            duration:1.7,
            delay:0.6
        })
        gsap.timeline({scrollTrigger:{
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }}).to(".left-leaf",{y:-300},0).to(".right-leaf",{y:300},0)
    },[])


    return ( 
        <section className='noisy' id="hero">
            <h1 className="title ">COCKTAIL</h1>
            <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
            <div className="body">
                <div className="content">
                    <div className="hidden space-y-5 sm:block">
                        <p className="">Cool. Crisp. Classic.</p>
                        <p className="subtitle">
                            Sip the Spirit <br /> of Summer
                        </p>
                    </div>
                    <div className="view-cocktails">
                        <div className="subtitle">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
