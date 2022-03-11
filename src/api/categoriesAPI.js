//I guess I don't need this since I'm useing React Query in the one place this is needed 
const rootURL = "http://localhost:3001/api";

export const getCategories = async () => {
    const response = await fetch("http://localhost:3001/api/categories")
    const categories = await response.json();
    return categories;
}


