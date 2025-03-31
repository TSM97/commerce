import FooterDetails from "./FooterDetails";

export default function Footer() {
  return (
    <div
      className="relative xl:h-[300px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative xl:h-[calc(100vh+300px)] xl:-top-[100vh]">
        <div className="xl:h-[300px] sticky xl:top-[calc(100vh-300px)]">
          <FooterDetails />
        </div>
      </div>
    </div>
  );
}
