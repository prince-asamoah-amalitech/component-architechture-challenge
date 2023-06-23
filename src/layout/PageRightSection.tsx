import Header from "../template/Header/Header";

interface PageRightSectionProps {
  children: React.ReactNode;
}

export default function PageRightSection({children}: PageRightSectionProps) {
    return (
      <section className="right-section">
        <Header/>
        {children}
      </section>
    )
  }