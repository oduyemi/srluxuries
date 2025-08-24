"use client";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import DiamondIcon from "@mui/icons-material/Diamond";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export const AboutPage = () => {
  return (
    <Box className="relative bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#1a1a1a] py-24">
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Typography
            variant="h6"
            className="uppercase tracking-[0.3em] font-semibold text-goldie mb-5"
          >
            About
          </Typography>

          <Typography
            variant="h2"
            className="font-extrabold text-4xl md:text-6xl text-butter leading-tight mb-5"
          >
            Samuel Rowland{" "}
            <span className="text-[#39A9DB] block md:inline">LUXURIES</span>
          </Typography>

          <Box className="flex justify-center mb-6">
            <span className="w-24 h-[3px] bg-gradient-to-r from-goldie to-butter rounded-full" />
          </Box>

          <Typography
            variant="h6"
            className="text-base md:text-xl text-gray-300 italic"
          >
            “It&apos;s not just the outfit. We build dreams.”
          </Typography>
        </Box>

        {/* Content */}
        <Grid container spacing={10} alignItems="center">
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
            className="relative"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              src="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/general/abt.jpg"
              alt="About SR Luxuries"
              width={600}
              height={500}
              className="w-full h-auto rounded-3xl shadow-2xl object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent"></div>
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
            <Box className="space-y-7 text-gray-200">
              <Typography className="text-lg md:text-xl font-light leading-relaxed">
                SR Luxuries was born out of the desire to provide{" "}
                <span className="text-goldie font-medium">affordable luxury</span>{" "}
                — a true indulgence that reveals{" "}
                <span className="text-bluey font-medium">the authentic YOU</span>.
                Inspired by global fashion trends, our designs are tailored to
                fit your unique personality.
              </Typography>

              <Typography className="text-lg md:text-xl font-light leading-relaxed">
                We specialize in{" "}
                <span className="text-butter font-semibold">bespoke menswear</span>,
                crafting high-quality luxury pieces with exceptional craftsmanship.
              </Typography>

              <Box
                component="ul"
                className="list-disc list-inside text-gray-300 space-y-1 ml-2"
              >
                <li>Tailored garments</li>
                <li>Ready-to-wear pieces</li>
                <li>Corporate wear</li>
              </Box>

              <Typography className="text-lg md:text-xl font-light leading-relaxed">
                Accessories complete the look — discover{" "}
                <span className="text-goldie font-medium">exclusive footwear</span>,
                belts, traditional caps, luxury beads, and stones.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Mission / Craft / Promise */}
        <Grid container spacing={6} className="mt-24">
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
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#121212]/80 border border-goldie/20 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-goldie/40 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="text-center p-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex justify-center text-goldie mb-6"
                  >
                    {item.icon}
                  </motion.div>
                  <Typography className="text-butter font-bold text-xl mb-3">
                    {item.title}
                  </Typography>
                  <Typography className="text-gray-400 leading-relaxed">
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
