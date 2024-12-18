import Footer from "@/components/footer/footer";
import Body from "@/components/home/home";
import Services from "@/components/services/services";
import WhyChooseUs from "@/components/about/why-us";
import AboutUs from "@/components/about/about";
export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            {/* Header */}

            {/* Body Section */}
            <div id="home">
                <Body />
            </div>

            {/* Services Section */}
            <div id="services">
                <Services />
            </div>

            {/* About Us Section */}
            <div id="about-us">
                <AboutUs />
            </div>

            {/* Why Choose Us Section */}
            <div>
                <WhyChooseUs />
            </div>


            {/* Footer */}
            <div id="contact">
                <Footer />
            </div>
        </div>
    );
}
