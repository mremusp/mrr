import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID qo7h3Fye05FQoY6LPPBcxe8ukVZNwgXruaxSvDH93lo",
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;
