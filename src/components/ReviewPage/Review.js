import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react";

import "./Review.css";

const reviews = [
  {
    id: 1,
    name: "Jenny Zhong",
    year: 2016,
    reviewContent:
      "I recently used Hunter's Garden pet sitting service and couldn't be happier with the care they provided for my furry friend. The staff was professional, attentive, and genuinely passionate about animals. I felt completely at ease leaving my pet in their capable hands, and I'll definitely be using their services again in the future.",
  },
  {
    id: 2,
    name: "Kiky Zhou",
    year: 2019,
    reviewContent:
      "Hunter's Garden not only provides exceptional pet sitting services but also goes the extra mile by offering personalized activity plans tailored to each pet's interests and energy levels. Jessica's genuine love for animals shines through in every interaction, creating a warm and nurturing environment that leaves pet owners feeling at ease. Hunter's Garden has truly set the gold standard for pet care services in the community.",
  },
  {
    id: 3,
    name: "James Stephen",
    year: 2020,
    reviewContent:
      "We had an amazing experience with Hunter's Garden pet sitting service. They treated our pets like their own, providing regular updates and photos to put our minds at ease while we were away. We'll definitely be using their services again!",
  },

  {
    id: 4,
    name: "Amy Sky",
    year: 2021,
    reviewContent:
      "I can't say enough good things about Hunter's Garden. Their pet sitting services went above and beyond to ensure my pets were happy, healthy, and well-cared for during my absence. The staff was friendly, punctual, and always kept me in the loop about how my pets were doing. I'm beyond satisfied with their services!",
  },
  {
    id: 5,
    name: "Caroline Joseph",
    year: 2022,
    reviewContent:
      "Hunter's Garden exceeded all my expectations with their pet sitting service. Their expert team took care of my pets as if they were their own, providing them with the love and attention they needed while I was away. The entire process, from booking to picking up my pets, was smooth and hassle-free. I'm so grateful for their exceptional service and highly recommend them to anyone looking for top-notch pet care.",
  },

  {
    id: 6,
    name: "Law Liu",
    year: 2022,
    reviewContent:
      "The team at Hunter's Garden is truly exceptional when it comes to pet sitting. They took the time to understand my pets' needs and preferences, and I returned home to find them happy, relaxed, and well-cared for. Their passion for what they do is evident in the quality of their work, and I couldn't be more thrilled with my experience. Hunter's Garden has earned a lifelong customer in me!",
  },

  {
    id: 7,
    name: "Michelle Sketon",
    year: 2022,
    reviewContent:
      "I can't say enough good things about Hunter's Garden pet sitting services! Their attention to detail and dedication to my pet's well-being truly sets them apart from other providers. The staff is friendly, professional, and always goes above and beyond to ensure my pet is happy and comfortable while I'm away. I have complete peace of mind knowing that my furry friend is in the best hands possible with Hunter's Garden.",
  },

  {
    id: 8,
    name: "Josh Apple",
    year: 2023,
    reviewContent:
      "Hunter's Garden has been an absolute lifesaver for me and my pets. Their experienced team consistently provides top-notch care, and their commitment to keeping pets safe and entertained is unparalleled. I especially appreciate the regular updates and photos they share, allowing me to stay connected with my pets even when I'm away from home. Choosing Hunter's Garden for my pet sitting needs was the best decision I've made for my furry family members, and I can't recommend them highly enough.",
  },
];

const Review = () => {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const getTemplateColumns = () => {
    if (isLargerThan1024) {
      return "repeat(3, 1fr)";
    }
    if (isLargerThan720) {
      return "repeat(2, 1fr)";
    }
    return "repeat(1, 1fr)";
  };

  return (
    <div id="reviews" className="reviewPage">
      <h2 className="bigH">Review</h2>
      <div className="reviewPageGrid">
        <Grid templateColumns={getTemplateColumns()} gap={6}>
          {reviews.map((review) => (
            <GridItem
              w="100%"
              className="responsiveHeight"
              bg="blue.500"
              key={review.id}
              p={20}
            >
              <Card sx={{ maxWidth: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="review">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      {[...Array(5)].map((_, index) => (
                        <StarIcon key={index} sx={{ color: green[500] }} />
                      ))}
                    </IconButton>
                  }
                  title={review.name}
                  subheader={review.year}
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {review.reviewContent}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Review;
