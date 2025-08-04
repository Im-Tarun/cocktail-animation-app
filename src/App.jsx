import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin( ScrollTrigger, SplitText);


const App = () => {
  return (
    <div>
      <h1 className=" text-gradient text-4xl"> hello </h1>
    </div>
  )
}

export default App
