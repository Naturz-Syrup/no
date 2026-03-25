const Base44Client = require('base44-client');

async function handleFileIngestion(file) {
    const client = new Base44Client();
    const { filename, platform, tags } = file;

    const contentEntity = {
        filename: filename,
        sourcePlatform: platform,
        tags: tags
    };

    try {
        const response = await client.createContentEntity(contentEntity);
        return response;
    } catch (error) {
        console.error('Error creating content entity:', error);
        throw error;
    }
}

module.exports = handleFileIngestion;