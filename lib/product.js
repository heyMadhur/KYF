

export const getProductDetails = async (barcode) => {
    try {
        const response = await fetch(`https://kyc-server-test.vercel.app/get_product_score?barcode=${barcode}`)
        console.log(barcode)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching product details:", error);
        return null;
    }
}


