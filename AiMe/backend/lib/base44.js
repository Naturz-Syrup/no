'use strict';

const axios = require('axios');

class Base44Client {
    constructor(apiEndpoint, appId, apiKey) {
        this.apiEndpoint = apiEndpoint;
        this.appId = appId;
        this.apiKey = apiKey;
        this.axiosInstance = axios.create({
            baseURL: this.apiEndpoint,
            headers: {
                'App-ID': this.appId,
                'API-Key': this.apiKey,
                'Content-Type': 'application/json'
            }
        });
    }

    async fetchEntities(filters = {}) {
        try {
            const response = await this.axiosInstance.get('/content-items', { params: filters });
            return response.data;
        } catch (error) {
            console.error('Error fetching entities:', error);
            throw error;
        }
    }

    async createEntity(entity) {
        try {
            const response = await this.axiosInstance.post('/content-items', JSON.stringify(entity));
            return response.data;
        } catch (error) {
            console.error('Error creating entity:', error);
            throw error;
        }
    }

    async updateEntity(entityId, updatedData) {
        for (let attempt = 1; attempt <= 3; attempt++) {
            try {
                const response = await this.axiosInstance.put(`/content-items/${entityId}`, JSON.stringify(updatedData));
                return response.data;
            } catch (error) {
                console.error(`Attempt ${attempt}: Error updating entity ${entityId}:`, error);
                if (attempt === 3) throw error;  // rethrow after 3 attempts
                await new Promise(resolve => setTimeout(resolve, 1000));  // wait for 1 second before retrying
            }
        }
    }
}

module.exports = Base44Client;