import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// export const client = sanityClient({
//     projectId: `${process.env.SANITY_PROJECT_ID}`,
//     dataset: 'production',
//     apiVersion: '2022-02-01',
//     useCdn: true,
//     token: process.env.SANITY_PROJECT_TOKEN,
// })
export const client = sanityClient({
    projectId: `k2wk3p1p`,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: `sk4KRjCc3pS1awqcsDvvwPSb1Zc1244crNv6UUaqlyspTXilmK6GQJK1s25hgK3bHnqgi2COVyKefSSCHhDLwmeRlZ2Silv6juoLJutlzAjBAGl8yq0JMmaqZarGu7SzsMj6kao3kSj59Gon0hxqHDimZCtnkVCI4Ae9sjWHyegEKlzKCZQx`,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)