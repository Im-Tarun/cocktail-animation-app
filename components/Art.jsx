import { useGSAP } from "@gsap/react"
import { featureLists, goodLists } from "../constants"
import gsap from "gsap"


const Art = () => {

    useGSAP(()=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:"#art",
                start:"top top",
                end:"bottom top",
                pin:true,
                scrub: 1.1,
            }
        }).to(".will-fade",{
            y: "30%",
            duration: 0.5,
            ease: "power1.inOut",
            opacity: 0
        }).to(".masked-img",{
            scale:1.4,
            maskPosition: "center",
            maskSize: "400%",
            duration: 1.5,

        }).to("#masked-content",{
            opacity:1,
            duration: 1,
            ease: "power1.inOut",
        })
    })

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-10">
        <h2  className="will-fade">The Art</h2>
        <div className="content">
            <ul className="space-y-3 will-fade">
                {goodLists.map((features,i)=>(
                    <li  key={i} className="flex items-center gap-2">
                        <img src="/images/check.png" alt="check" />
                        <p>{features}</p>
                    </li>
                ))}
            </ul>
            <div className="cocktail-img">
                <img src="/images/under-img.jpg" alt="cocktail" className="abs-center masked-img size-full object-contain" />
            </div>
            <ul className="space-y-3 will-fade">
                {featureLists.map((features,i)=>(
                    <li key={i} className="flex items-center gap-2">
                        <img src="/images/check.png" alt="check" />
                        <p>{features}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className="masked-container">
            <h2 className="will-fade">Sip-Worthy Perfection</h2>
            <div id="masked-content">
                <h3>Made with Craft, Poured with Passion</h3>
                <p>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Art
