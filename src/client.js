import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: 'j9eraqtm',
    dataset: 'production',
    apiversion: '2024-01-29',
    useCdn: true,
    token: 'skMrWapAFoxhqD1OHt8XMEMylGXyhzoWpTvkaVBzvWKnKJKo9uFIAZWlfdRJ6zCZNK5mizogzdImPA5bREV2pqFyGsVXiyIw2LHm1gsFm4WQCRFMJXlmYEXp14GLzGqhw1ibBGO0zS10NdH3AcRxp9X6Abch0u2CgbUJzv3JynKqR3uwoeGN',
    ignoreBrowserTokenWarning: true,

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


