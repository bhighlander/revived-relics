import ContactComponent from "../homeUi/contactComponent";
import HomeCarousel from "../homeUi/homeImageCarousel";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-top min-h-screen space-y-8 pt-8 w-full">
      <h1 className="rr-header text-5xl font-bold text-center">Revived Relics</h1>
      <p className="rr-tag text-2xl text-center">Restoring life to the things you love</p>
      <HomeCarousel />
      <ContactComponent />
    </div>
  );
}
