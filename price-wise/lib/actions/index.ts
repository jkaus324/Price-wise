"use server"

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl){
        return;
    }

    try{
        const scrapedProduct = await scrapeAmazonProduct(productUrl);
    } catch(err:any){
        throw new Error(`Failed to create/update product: ${err.message}`)
    }
}