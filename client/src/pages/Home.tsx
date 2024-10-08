import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}
