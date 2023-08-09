// COMPONENTS
import { Card, CardContent, Typography } from "@mui/material";

// STYLES
import "../../styles/components/Card/__card.scss"

function ResultCard ({data}) {

    return (
        <>
            {data.map(
            (ele) => (

                <Card sx={{width:275, display: "flex"}}>
                    <CardContent>
                        <Typography variant="h5" className="card-title">
                            {ele.name} 
                        </Typography>
                        <Typography color="text.secondary" variant="h6" className="card-text" gutterBottom>
                            {ele.calories} calories (per 100g)
                            <br/>
                        </Typography>
                        <Typography color="text.secondary" className="card-text">
                            {ele.carbohydrates_total_g} Carb g.
                        </Typography>
                        <Typography color="text.secondary" className="card-text">
                            {ele.protein_g} Protein g.
                        </Typography>
                        <Typography color="text.secondary" className="card-text">
                            {ele.fat_total_g} Total fats g.
                        </Typography>
                    </CardContent>
                </Card>

                // <article className="card">
                //     <Paper elevation={3}/>
                //     <h1 className="card-name">{ele.name}</h1>
                //     <h3 className="card-info">calories per 100g: {ele.calories}</h3>
                // </article>
            )
            )}
        </>
    );
}

export default ResultCard