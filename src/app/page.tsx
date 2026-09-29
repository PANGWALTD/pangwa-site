import Footer from "@/components/footer/footer";
import Body from "@/components/home/home";
import Metrics from "@/components/home/metrics";
import Services from "@/components/services/services";
import WhyChooseUs from "@/components/about/why-us";
import AboutUs from "@/components/about/about";
import Testimonials from "@/components/about/testimonials";
import Awards from "@/components/about/awards";

export default function Home() {
    return (
        <main>
            <div id="home"><Body /></div>
            <Metrics />
            <Services />
            <AboutUs />
            <Testimonials />
            <Awards />
            <WhyChooseUs />
            <div id="contact"><Footer /></div>
        </main>
    );
}
