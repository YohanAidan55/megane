import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// @ts-ignore
export default function Component0({ onShowComponents }) {
    const weddingDate = new Date("2026-06-20T15:00:00");

    const calculateTimeLeft = () => {
        const difference = weddingDate.getTime() - new Date().getTime();
        if (difference <= 0) return null;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                padding: 4,
            }}
        >
            {/* HAUT : MARIAGE + NOMS */}
            <Box sx={{ marginTop: 5 }}>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                            letterSpacing: "10px",
                            textTransform: "uppercase",
                            fontWeight: 500,
                            color: "#5e5433", // ✅ ici
                        }}
                    >
                        Mariage
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: { xs: "3rem", md: "5rem" },
                            marginTop: 1,
                            color: "#5e5433",
                        }}
                    >
                        Mégane & Jordan
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "2rem", md: "3.5rem" },
                            fontWeight: 700,
                            letterSpacing: "5px",
                            color: "#5e5433",
                        }}
                    >
                        20 Juin 2026
                    </Typography>

                    {timeLeft && (
                        <Typography
                            sx={{
                                fontSize: { xs: "2.2rem", md: "3.5rem" },
                                fontWeight: 600,
                                letterSpacing: "4px",
                                color: "#5e5433",
                            }}
                        >
                            {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m{" "}
                            {timeLeft.seconds}s
                        </Typography>
                    )}
                </motion.div>
            </Box>


            {/* BOUTON */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ marginBottom: "40px" }}
            >
                <Button
                    variant="contained"
                    size="large"
                    onClick={onShowComponents}
                    sx={{
                        marginBottom: 8,
                        paddingX: 6,
                        paddingY: 1.5,
                        borderRadius: "40px",
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        backgroundColor: "#9c8557",
                        color: "#fff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        "&:hover": {
                            backgroundColor: "#5e5433", // légèrement plus foncé
                            boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
                        },
                    }}
                >
                    Voir l’invitation
                </Button>
            </motion.div>
        </Box>
    );
}