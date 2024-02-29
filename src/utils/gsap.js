import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { gsap } from "gsap";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(ScrollToPlugin);
}
ScrollTrigger.defaults({
	markers: 1
});
export * from "gsap";
export { ScrollTrigger };
