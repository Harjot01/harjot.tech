import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: "2024-03-31",
    dataset: "production",
    projectId: "6ffbzk6l",
    useCdn: false

})

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source)
}