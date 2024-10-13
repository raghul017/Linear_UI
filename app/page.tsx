import { Container } from "../components/Container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/Hero";

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroTitle>
          Linear is a better way <br className="hidden md:block" /> to build
          products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.{" "}
          <br className="hidden md:block" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
      </Hero>
      <img src="/img/hero.png" alt="" />
    </Container>
  );
}
