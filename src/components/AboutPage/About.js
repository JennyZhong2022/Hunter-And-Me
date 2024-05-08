import "./About.css";
import { Divider, Stack, Text, useMediaQuery } from "@chakra-ui/react";

const About = () => {
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");

  return (
    <div id="about" className="aboutPage">
      <h2 className="bigH">About Me</h2>
      <Stack
        className="aboutPageContent"
        direction={isSmallerThan720 ? "column" : "row"}
        h="auto"
        p={isSmallerThan720 ? 8 : 110}
        spacing={isSmallerThan720 ? -50 : 8}
      >
        <div className={`leftContainer ${isSmallerThan720 ? "hideDiver" : ""}`}>
          <Text className="aboutPageTextLeft">
            Discover the Perfect Home Away From Home for Your Furry Friend at
            Hunter's Garden!
          </Text>
        </div>
        <Divider orientation="vertical" padding={50} />
        <div className="aboutPageTextRight">
          <Text>
            Welcome to Hunter's Garden, the ultimate haven for your beloved
            pets!
          </Text>
          <Text>
            {" "}
            I'm Hunter, a friendly 8-year-old Labrador Retriever, and I'm
            excited to share my story with you. Ever since my mom brought me
            home as a tiny pup, I've loved spending quality time with her. As I
            grew up, she began caring for other puppies and dogs, and I quickly
            discovered that I love making new friends! We have endless fun here,
            chasing each other and playing together. Plus, I help my mom look
            after our canine visitors too, ensuring they feel right at home.
          </Text>
          <Text>
            If you're searching for a reliable and loving pet sitter, look no
            further than Hunter's Garden! Here, your furry friend will enjoy a
            warm, caring environment where they can socialize, play, and make
            lasting memories. Trust us to provide the best home away from home
            experience for your pet!{" "}
          </Text>
          <Text style={{ fontWeight: "900" }}>
            $40 per day including pet food. For more information, please contact
            us!
          </Text>
          <Text>
            Choose Hunter's Garden, and let your four-legged companion thrive in
            a happy and nurturing setting. We can't wait to meet you and your
            furry family member!
          </Text>
        </div>
      </Stack>
    </div>
  );
};

export default About;
