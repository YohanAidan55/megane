import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { motion, type MotionProps, type Transition } from "framer-motion";
import type { ReactNode } from "react";

interface EventCardProps {
    className?: string;
    cardClass?: string;
    initial?: MotionProps["initial"];
    animate?: MotionProps["animate"];
    transition?: Transition;
    title: string;
    subtitle?: string;
    subtitleSx?: SxProps<Theme>;
    children?: ReactNode;
    address?: string;
    onItineraryClick?: () => void;
    button?: boolean;
    buttonLabel?: string;
}

const MotionDiv = motion.div;

const EventCard: React.FC<EventCardProps> = ({
                                                 className = "",
                                                 cardClass = "",
                                                 initial = { opacity: 0, y: 30 },
                                                 animate = { opacity: 1, y: 0 },
                                                 transition = { duration: 1 },
                                                 title,
                                                 subtitle,
                                                 subtitleSx = {},
                                                 children,
                                                 onItineraryClick,
                                                 button = true,
                                                 buttonLabel = "Voir l'itinéraire",
                                             }) => {
    return (
        <Box className={className}>
            <Card
                className={cardClass}
                sx={{
                    position: "relative",
                    borderRadius: 5,
                    background: "rgba(255, 255, 255, 0.38)", // 💕 plus transparent
                    boxShadow: "0 18px 45px rgba(0,0,0,0.12)", // ombre plus douce
                    border: "1px solid rgba(111, 99, 61, 0.25)",
                    overflow: "hidden",
                }}
            >
                <CardContent>
                    <MotionDiv
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    >
                        {/* TITRE */}
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#6f633d",
                                paddingBottom: "12px",
                                borderBottom: "1px solid rgba(111,99,61,0.2)",
                                fontSize: "2.2rem",
                                letterSpacing: "2px",
                                textAlign: "center",
                            }}
                        >
                            {title}
                        </Typography>

                        {/* SOUS-TITRE */}
                        {subtitle && (
                            <Typography
                                variant="h4"
                                sx={{
                                    ...subtitleSx,
                                    color: "#6f633d",
                                    marginTop: "20px",
                                    fontFamily: "'Great Vibes', cursive",
                                    fontSize: "2.8rem",
                                    marginBottom: "20px",
                                    textAlign: "center",
                                }}
                            >
                                {subtitle}
                            </Typography>
                        )}

                        {/* CONTENU */}
                        <Box sx={{ marginTop: 2 }}>{children}</Box>

                        {/* BOUTON */}
                        {button && (
                            <Box sx={{ textAlign: "center" }}>
                                <Button
                                    variant="contained"
                                    onClick={onItineraryClick}
                                    sx={{
                                        mt: 4,
                                        backgroundColor: "#6f633d",
                                        color: "#fff",
                                        borderRadius: "30px",
                                        paddingX: 4,
                                        paddingY: 1.2,
                                        fontSize: "1rem",
                                        boxShadow: "0 6px 20px rgba(111,99,61,0.3)",
                                        "&:hover": {
                                            backgroundColor: "#5e5433",
                                        },
                                    }}
                                >
                                    {buttonLabel}
                                </Button>
                            </Box>
                        )}
                    </MotionDiv>
                </CardContent>
            </Card>
        </Box>
    );
};

export default EventCard;