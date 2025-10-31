import "./main.css";
import Hero from "../hero/hero";
import WhyUs from "../whyUs/whyUs";
import BestSelling from "../bestSelling/bestSelling";
import BestExperience from "../bestExperience/bestExperience";
import Materials from "../materials/materials";
import Reviews from "../reviews/reviews";

export default function Main(){

    return (
        <main className="main">
            <Hero />
            <WhyUs />
            <BestSelling />
            <BestExperience />
            {/* <Materials /> */}
            <Reviews />
        </main>
    );
}