const rootURL = "http://localhost:3001/api";

export const getCategories = async () => {
    const response = await fetch(`${rootURL}/categories`, {
        method: "GET"
    });
    const categories = await response;

    return categories;
}

