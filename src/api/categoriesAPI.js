
export const getCategories = async () => {
    const response = await fetch("http://localhost:3001/api/categories")
    const categories = await response.json();
    return categories;
}


