// CUSTOM HOOKS
import useFetch from "../hooks/useFetch.js";

// COMPONENTS
import ResultCard from "./ResultCard/ResultCard.jsx";
import WithoutResultCard from "./WithoutResultCard/WithoutResultCard.jsx";
import { CircularProgress } from "@mui/material";

function CardContainer(query) {

    let parseQuery = query.query

    const url = `https://api.api-ninjas.com/v1/nutrition?query=${parseQuery}`
    const headers = { "X-Api-Key": "BCYdhLnuAq01LMszSZH9oA==qfVUoFfUTA8munjT" }

    const {data, loading} = useFetch(url, headers)

    return (
        <section className="card-container">


            {loading ? 
            <CircularProgress color="inherit" />
            : 
            data?.length > 0 ? <ResultCard data={data}/> : <WithoutResultCard/>
            }

        </section>
    );
}

export default CardContainer