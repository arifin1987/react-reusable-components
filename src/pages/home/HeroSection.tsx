import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-2 gap-4 items-center">
      <div>
        <span>Don't worry</span>
        <br />
        <span>We'll fix it</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex
          neque dolore deserunt ab accusantium expedita possimus aspernatur
          magni quo?
        </p>
        <Button>Book a service</Button>
      </div>
      <div>
        <img src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
