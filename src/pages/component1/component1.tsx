
import EventCard from "../EventCard";
import { Typography } from "@mui/material";
import "./component1.css";
import {openWaze} from "../../utils/navigation.ts"

const Component1 = () => {
    const address = "48 Rue de Paris, 94220 Charenton-Le-Pont";
    return (
        <EventCard
            className="homePage1"
            cardClass="card1"
            initial={{ opacity: 0, y: 40 }}
            title="La Mairie"
            subtitle="Megane & Jordan"
            subtitleSx={{ color: "#d63384", fontFamily: "var(--font-title)" }}
            onItineraryClick={() => openWaze(address)}
        >
            <Typography variant="body1" gutterBottom>
                se diront <strong>"Oui"</strong> le
            </Typography>
            <Typography variant="h5" sx={{ color: "var(--color-primary)", mt: 2, fontWeight: "bold" }}>
                Mardi 9 Juin 2026 à 14h
            </Typography>
            <Typography variant="body1" mt={2}  sx={{margin: "25px 0;"}} >
                Mairie de Charenton-Le-Pont<br />
                48 Rue de Paris,<br />
                94220 Charenton-Le-Pont
            </Typography>
            <Typography variant="h6" sx={{ color: "var(--color-primary)", mt: 2, fontWeight: "bold" }}>
                La Mairie sera suivie d'un vin d'honneur<br />
            </Typography>
        </EventCard>
    );
};

export default Component1;
