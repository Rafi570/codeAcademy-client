import Banner from "@/components/Banner";
import FAQSection from "@/components/FAQSection";
import PopularCourse from "@/components/PopularCourse";
import WhyChooseCodeAcademy from "@/components/WhyChooseCodeAcademy";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <>
        <Banner />
        <PopularCourse></PopularCourse>
        <WhyChooseCodeAcademy></WhyChooseCodeAcademy>
        <FAQSection></FAQSection>
      </>
    </div>
  );
}
