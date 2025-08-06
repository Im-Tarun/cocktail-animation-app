import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants"
import { SplitText } from "gsap/all";
import gsap from "gsap";


const Footer = () => {

    useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
            toggleActions: "restart none none none",
		 },
		 ease: "power1.inOut"
		})
 
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 y: '50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})
 

  return (
    <footer id='contact'>
      <img src="/images/footer-left-leaf.png" alt="footer-left-leaft" id='f-left-leaf' />
      <img src="/images/footer-right-leaf.png" alt="footer-right-leaft" id='f-right-leaf' />

      <div className="content">
        <h2>Where to find us</h2>
        <div>
            <h3>Visit Our Stores.</h3>
            <p>sector - h, jankipuram, lucknow, Uttar Pradesh</p>
        </div>
        <div>
            <h3>contact Us</h3>
            <p>+91 6393041195</p>
            <p>tarunyaduwanshi@gmail.com</p>
        </div>
        <div>
            <h3>Open Everyday</h3>
            {openingHours.map((time)=>(
                <p key={time.day}>{time.day} : {time.time} </p>
            ))}
        </div>
        <div>
            <h3>Socials</h3>
            <div className="flex-center gap-5">
                {socials.map(({name, url})=>(
                    <a 
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="text-xl font-bold border-b-2 border-white/0 hover:border-white">{name}</button>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
