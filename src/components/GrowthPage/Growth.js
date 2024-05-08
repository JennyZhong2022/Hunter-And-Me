import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react";

import "./Growth.css";

import babyHunter from "../../pictures/babyHunter.jpeg";
import bunningsFirst from "../../pictures/bunningsFirst.jpeg";
import cityFirstTime from "../../pictures/cityFirstTime.jpeg";
import graduate from "../../pictures/graduate.jpeg";
import training3 from "../../pictures/training3.jpeg";
import dogWalk from "../../pictures/dogWalk.jpg";
import dogPlay from "../../pictures/dogPlay.jpg";
// import dogDessert from "../../pictures/dogDessert.jpg";
import SixthBirthday from "../../pictures/sixthBirthday.jpg";
import dogPlay2 from "../../pictures/dogPlay2.jpg";
import birthdayDogs from "../../pictures/birthdayDogs.jpg";

const imageData = [
  {
    id: 1,
    title: "babyHunter",
    subheader: 2016,
    image: babyHunter,
    alt: "Baby Hunter",
    height: 420,
    imageBrief:
      "Baby Hunter is an adorable little one who brings joy and laughter to everyone around him.",
    imageContent:
      " With his bright eyes and infectious smile, he has a knack for capturing hearts and making friends wherever he goes. As Baby Hunter grows, his curiosity and love for adventure will undoubtedly lead him to new and exciting experiences.",
  },
  {
    id: 2,
    title: "Training Session",
    subheader: 2016,
    image: training3,
    alt: "Training Session",
    height: 420,
    imageBrief:
      "During his Training Session, Baby Hunter demonstrated an eagerness to learn and explore new skills.",
    imageContent:
      " His dedication and focus were evident, as he embraced each challenge with enthusiasm and determination. Baby Hunter's progress in his training is a testament to his resilience and adaptability, proving that he is well on his way to achieving great things.",
  },
  {
    id: 3,
    title: "Graduation",
    subheader: 2016,
    image: graduate,
    alt: "Graduation",
    height: 420,
    imageBrief:
      "On the day of his training graduation, Baby Hunter celebrated his hard-earned achievements with pride and joy.",
    imageContent:
      " Surrounded by family and friends, he was recognized for his dedication and progress throughout the training sessions. The graduation marked an important milestone in Baby Hunter's journey, as he confidently embraced new opportunities and continued to grow and develop his skills.",
  },
  {
    id: 4,
    title: "Melbourne City Travel",
    subheader: 2016,
    image: cityFirstTime,
    alt: "Melbourne City Travel",
    height: 420,
    imageBrief:
      "Baby Hunter embarked on an exciting adventure to Melbourne City, where he discovered the city's vibrant culture and stunning architecture.",
    imageContent:
      " He enjoyed exploring the bustling streets, visiting iconic landmarks, and indulging in the diverse culinary scene. This memorable trip to Melbourne City not only broadened Baby Hunter's horizons but also left him with cherished memories and a growing sense of wanderlust.",
  },
  {
    id: 5,
    title: "Bunnings Shopping",
    subheader: 2016,
    image: bunningsFirst,
    alt: "Bunnings Shopping",
    height: 420,
    imageBrief:
      "Baby Hunter's first shopping trip to Bunnings was a delightful and educational experience.",
    imageContent:
      "He marveled at the vast array of products, from gardening tools to home improvement items. This initial visit to Bunnings ignited Baby Hunter's curiosity in DIY projects and taught him the value of self-sufficiency and resourcefulness.",
  },

  {
    id: 6,
    title: "Dog Walk",
    subheader: 2020,
    image: dogWalk,
    alt: "Dog Walk",
    height: 420,
    imageBrief:
      "Taking leisurely strolls with our furry friend became a daily routine.",
    imageContent:
      "The serene moments during our dog walks allowed us to appreciate nature and bond with our loyal companion.",
  },
  {
    id: 7,
    title: "Dog Play",
    subheader: 2020,
    image: dogPlay,
    alt: "Dog Play",
    height: 420,
    imageBrief:
      "Engaging in playful activities with our dog brought immense joy to our lives.",
    imageContent:
      "Whether it was a game of fetch or a fun session of tug-of-war, the bond between us and our canine friend grew stronger with every playtime.",
  },
  {
    id: 8,
    title: "Dog Play",
    subheader: 2021,
    image: dogPlay2,
    alt: "Dog Play",
    height: 420,
    imageBrief:
      "Unleashing joy through playful moments with our four-legged companion.",
    imageContent:
      "Our dog's boundless energy and enthusiasm brought a refreshing and heartwarming dynamic to our daily routines.",
  },
  // {
  //   id: 9,
  //   title: "Having Dessert",
  //   subheader: 2021,
  //   image: dogDessert,
  //   alt: "Having Dessert",
  //   height: 420,
  //   imageBrief:
  //     "Indulging in delicious desserts became a sweet tradition we looked forward to.",
  //   imageContent:
  //     "Sharing laughter and delightful treats with loved ones made these dessert moments truly special and memorable.",
  // },

  {
    id: 10,
    title: "Celebrate Birthday",
    subheader: 2020,
    image: birthdayDogs,
    alt: "My Birthday with my Friend",
    height: 420,
    imageBrief:
      "A joyous celebration of another year with a dear friend by my side.",
    imageContent:
      "Surrounded by laughter, good company, and a cake that radiated happiness, this birthday will forever remain a cherished memory between friends.",
  },
  {
    id: 11,
    title: "My Birthday",
    subheader: 2023,
    image: SixthBirthday,
    alt: "My Birthday",
    height: 420,
    imageBrief:
      "Celebrating another year of life surrounded by friends and family.",
    imageContent:
      "The warmth of well-wishes, the joy of shared moments, and the promise of new adventures defined this unforgettable birthday celebration.",
  },
];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Growth = () => {
  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const [isSmallThan480] = useMediaQuery("(max-width: 480px)");
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");
  const [isSmallThan1024] = useMediaQuery("(max-width: 1024px)");

  const getTemplateColumns = () => {
    if (isSmallThan480) {
      return "repeat(1, 1fr)";
    }
    if (isSmallerThan720) {
      return "repeat(2, 1fr)";
    }
    if (isSmallThan1024) {
      return "repeat(3, 1fr)";
    }
    return "repeat(5, 1fr)";
  };

  return (
    <div id="growth" className="growthPage">
      <h2 className="bigH">Growth Journey</h2>
      <div className="growthPageGrid">
        <Grid templateColumns={getTemplateColumns} gap={6} >
          {imageData.map((data) => (
            <GridItem w="100%" bg="blue.500" key={data.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader title={data.title} subheader={data.subheader} />
                <CardMedia
                  component="img"
                  height={data.height}
                  image={data.image}
                  alt={data.alt}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {data.imageBrief}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <ExpandMore
                    expand={expanded[data.id]}
                    onClick={() => handleExpandClick(data.id)}
                    aria-expanded={expanded[data.id]}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded[data.id]} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>{data.imageContent}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Growth;
