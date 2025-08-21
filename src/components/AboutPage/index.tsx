"use client";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import DiamondIcon from "@mui/icons-material/Diamond";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export const AboutPage = () => {
  return (
    <Box className="relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-20">
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="h6" className="uppercase tracking-[0.3em] font-semibold text-goldie mb-4">
            about
          </Typography>

          <Typography variant="h2" className="gold_title font-extrabold text-4xl md:text-6xl text-butter mb-4">
            Samuel Rowland <span className="text-[#39A9DB] block md:inline">LUXURIES</span>
          </Typography>

          <Box className="flex justify-center mb-6">
            <span className="w-20 h-[2px] bg-goldie rounded-full" />
          </Box>

          <Typography variant="h6" className="text-base md:text-lg text-gray-300">
            It&apos;s not just the outfit. We build dreams.
          </Typography>
        </Box>

        {/* Content */}
        <Grid container spacing={8} alignItems="center">
          {/* Image */}
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/general/abt.jpg"
              alt="About SR Luxuries"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </Grid>

          {/* Text */}
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Box className="space-y-6 text-gray-200">
              <Typography variant="h5" className="text-lg font-light leading-relaxed">
                SR Luxuries was born out of the desire to provide affordable luxury — a true style indulgence that
                reveals <span className="text-bluey font-medium">the authentic YOU</span>. Our designs are inspired by
                global fashion trends and tailored to fit your unique personality. Join us on this journey, and let’s
                make a statement together.
              </Typography>

              <Typography variant="h5" className="text-lg font-light leading-relaxed">
                We specialize in bespoke menswear, creating high-quality luxury pieces with exceptional craftsmanship.
              </Typography>

              <Box component="ul" className="list-disc list-inside text-gray-300 space-y-1">
                <li>Tailored garments</li>
                <li>Ready-to-wear pieces</li>
                <li>Corporate wear</li>
              </Box>

              <Typography variant="h5" className="text-lg font-light leading-relaxed">
                Accessories complete the look. Explore exclusive footwear, belts, traditional caps, luxury beads, and
                stones to elevate your style.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Mission / Craft / Promise */}
        <Grid container spacing={6} className="mt-20">
          {[
            {
              icon: <DiamondIcon fontSize="large" />,
              title: "Our Mission",
              text: "Redefine affordable luxury with timeless style and impeccable quality.",
            },
            {
              icon: <CheckroomIcon fontSize="large" />,
              title: "Our Craft",
              text: "Tailored to perfection, blending modern trends with traditional techniques.",
            },
            {
              icon: <WorkspacePremiumIcon fontSize="large" />,
              title: "Our Promise",
              text: "Elegance, comfort, and authenticity in every design.",
            },
          ].map((item, i) => (
            <Grid
              item
              xs={12}
              md={4}
              key={item.title}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#121212] border border-goldie/20 rounded-2xl shadow-lg hover:shadow-goldie/30 transition-shadow duration-300">
                <CardContent className="text-center p-8">
                  <Box className="flex justify-center text-goldie mb-4">{item.icon}</Box>
                  <Typography variant="h6" className="text-butter font-bold mb-2">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" className="text-gray-400">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};