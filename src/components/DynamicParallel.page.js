import { useQueries } from "react-query";
import axios from "axios";
import React from "react";

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const DynamicParallelPage = ({ heroIds }) => {
        const queryResults = useQueries(
            heroIds.maps( id => {
                return {
                    queryKey: ['super-hero', id],
                    queryFn: () => fetchSuperHero(id)
                }
            })
        )
        console.log({ queryResults })
    return <div>DynamicParallelPage</div>
}