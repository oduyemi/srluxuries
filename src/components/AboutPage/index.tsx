"use client";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import DiamondIcon from "@mui/icons-material/Diamond";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Image from "next/image";

export const AboutPage = () => {
  return (
    <Box className="bg-white py-28">
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <Typography
            variant="overline"
            className="uppercase tracking-[0.3em] font-semibold text-[#CD8F2C]"
          >
            About
          </Typography>

          <Typography
            variant="h2"
            className="mt-4 font-extrabold text-4xl md:text-6xl text-gray-900 leading-tight"
          >
            Samuel Rowland <br className="hidden md:block" />
            <span className="text-[#CD8F2C]">Luxuries</span>
          </Typography>

          <Typography className="mt-6 text-gray-500 italic text-lg">
            It’s not just the outfit. It’s the presence.
          </Typography>
        </Box>

        {/* Content Section */}
        <Grid container spacing={12} alignItems="center">
          {/* Image */}
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Box className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-xl mb-14">
              <Image
                src="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/general/abt.jpg"
                alt="About SR Luxuries"
                fill
                className="object-contain"
              />
            </Box>
          </Grid>

          {/* Text */}
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Box className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <Typography>
                SR Luxuries was founded on a simple belief — that luxury should
                feel personal, intentional, and powerful.
              </Typography>

              <Typography>
                We create bespoke traditional and corporate menswear designed
                to reflect confidence, culture, and refined taste.
              </Typography>

              <Typography>
                Every piece is crafted with precision, blending modern tailoring
                with heritage craftsmanship.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Values Section */}
        <Grid container spacing={6} className="mt-28">
          {[
            {
              icon: <DiamondIcon fontSize="large" />,
              title: "Our Mission",
              text: "To redefine modern African luxury through craftsmanship and authenticity.",
            },
            {
              icon: <CheckroomIcon fontSize="large" />,
              title: "Our Craft",
              text: "Precision tailoring rooted in tradition and elevated by contemporary design.",
            },
            {
              icon: <WorkspacePremiumIcon fontSize="large" />,
              title: "Our Promise",
              text: "Uncompromising quality and timeless presence in every garment.",
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
              <Card className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="text-center p-10">
                  <Box className="flex justify-center text-[#CD8F2C] mb-6">
                    {item.icon}
                  </Box>
                  <Typography className="text-gray-900 font-semibold text-xl mb-3">
                    {item.title}
                  </Typography>
                  <Typography className="text-gray-600 leading-relaxed">
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