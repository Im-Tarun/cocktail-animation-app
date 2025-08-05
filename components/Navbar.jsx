import { useGSAP } from "@gsap/react"
import { navLinks } from "../constants/index.js"
import gsap from "gsap"


const Navbar = () => {
    useGSAP(()=>{
        gsap.fromTo("nav",{
            backgroundColor: "black", 
        },{
            backdropFilter: "blur(10px)",
            backgroundColor: "#0000004f",

            scrollTrigger:{
                trigger: "nav",
                scrub:3,
                start : "bottom 8%"
            }

        })
    },[])


    return (
        <nav>
            <div className="flex items-center justify-between">
                <a href="/" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="" />
                    <h1> Velvet Pour</h1>
                </a>
                <ul>
                    {navLinks.map((link, i) => (
                        <a href={`/${link.id}`}>
                            <li>{link.title}</li>
                        </a>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
