const axios = require('axios');

const BASE_URL = 'https://api.example.com/base44'; // Replace with actual Base44 API URL

// Test suite for Base44 ContentItem API
describe('Base44 ContentItem API Tests', () => {

    it('should fetch a ContentItem', async () => {
        const response = await axios.get(`${BASE_URL}/content-items/1`);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id', 1);
    });

    it('should create a new ContentItem', async () => {
        const newItem = { title: 'New Content Item', content: 'Content for the new item' };
        const response = await axios.post(`${BASE_URL}/content-items`, newItem);
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
        expect(response.data).toMatchObject(newItem);
    });

    it('should update an existing ContentItem', async () => {
        const updatedItem = { title: 'Updated Content Item', content: 'Updated content' };
        const response = await axios.put(`${BASE_URL}/content-items/1`, updatedItem);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id', 1);
        expect(response.data).toMatchObject(updatedItem);
    });

});
