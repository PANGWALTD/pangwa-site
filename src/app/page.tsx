import Footer from "@/components/footer/footer";
import Body from "@/components/home/home";
import Metrics from "@/components/home/metrics";
import Services from "@/components/services/services";
import WhyChooseUs from "@/components/about/why-us";
import AboutUs from "@/components/about/about";
import Testimonials from "@/components/about/testimonials";

export default function Home() {
    return (
        <main>
            <div id="home"><Body /></div>
            <Metrics />
            <Services />
            <AboutUs />
            <Testimonials />
            <WhyChooseUs />
            <div id="contact"><Footer /></div>
        </main>
    );
}
