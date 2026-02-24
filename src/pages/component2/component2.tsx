import EventCard from "../EventCard";
import { Typography, Box } from "@mui/material";
import { openWaze } from "../../utils/navigation.ts";
import "./component2.css";

const Component2 = () => {
    const address = "150 les berges de seine, 91830, Le Coudray-Montceaux";
    return (
        <EventCard
            className="homePage2"
            cardClass="card2"
            initial={{ opacity: 0, y: 30 }}
            title="Houppa & Réception"
            subtitle="Megane & Jordan"
            subtitleSx={{ fontFamily: "var(--font-title)", color: "var(--color-primary)", mb: 2 }}
            onItineraryClick={() => openWaze(address)}
        >
            <Typography variant="body1" gutterBottom>
                קוֹל שָׂשׂוֹן וְקוֹל שִׂמְחָה, קוֹל חָתָן וְקוֹל כַּלָּה
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", my: 2, fontSize: '14px', lineHeight: '1.5' }}>
                <div style={{textAlign: "left"}}>
                    Laurence et Elie Oiknine<br/>
                </div>
                <div style={{textAlign: "right"}}>
                    Solange et Marcel Najar<br/>
                </div>
            </Box>
            <Typography variant="h6" sx={{ color: "var(--color-primary)", mt: 2}}>
                ont la joie de vous faire part du mariage de leurs enfants
            </Typography>
            <Typography variant="h5" sx={{ color: "var(--color-primary)", mt: 2, fontWeight: "bold"  }}>
                Mardi 16 Juin 2026 à partir de 17h
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
                La Manoir des Cynes<br />
                150 les berges de seine,<br />
                91830, Le Coudray-Montceaux
            </Typography>
            <Typography variant="h6" sx={{ color: "var(--color-primary)", mt: 2, fontWeight: "bold"  }}>
                La cérémonie sera suivie d'une réception
            </Typography>
            <Typography variant="body2" sx={{display: "block", mt: 4, fontStyle: "italic"}}>
                Une tendre pensée pour nos grands-parents Henri et Esther Oiknine,
                André et Jeanine Mestric, Allegrine Najar, Marcelle Sabbah et Meir Hazan.
                Que vos mémoires soient source de bénédictions.
            </Typography>
        </EventCard>
    );
};

export default Component2;
