# Base44 Integration Documentation

## API Configuration
To configure the Base44 API, you need the following:
- **API Key**: Obtain this from the Base44 dashboard.
- **Base URL**: `https://api.base44.com`

### Example Configuration:
```javascript
const config = {
    apiKey: 'YOUR_API_KEY',
    baseUrl: 'https://api.base44.com'
};
```

## ContentItem Entity Fields
The ContentItem entity has the following fields:
- **id** (string): Unique identifier for the content item.
- **title** (string): The title of the content.
- **description** (string): A detailed description of the content.
- **created_at** (string): Timestamp of when the item was created.
- **updated_at** (string): Timestamp of the last update.

### Sample ContentItem JSON:
```json
{
    "id": "1",
    "title": "Sample Item",
    "description": "This is a sample content item.",
    "created_at": "2026-03-22T21:33:09Z",
    "updated_at": "2026-03-22T21:33:09Z"
}
```

## REST Endpoints

### 1. Get Content Items
- **Method**: GET
- **Endpoint**: `/content-items`
- **Response**: Returns a list of content items.

### 2. Create Content Item
- **Method**: POST
- **Endpoint**: `/content-items`
- **Payload**: JSON object representing the new content item.
- **Response**: Returns the created content item.

### 3. Update Content Item
- **Method**: PUT
- **Endpoint**: `/content-items/{id}`
- **Payload**: JSON object with updated fields.
- **Response**: Returns the updated content item.

### 4. Delete Content Item
- **Method**: DELETE
- **Endpoint**: `/content-items/{id}`
- **Response**: Returns a success message.

## Error Handling
- **Error Codes**:
  - **400 Bad Request**: Validation errors.
  - **401 Unauthorized**: Invalid API key.
  - **404 Not Found**: Content item not found.
  - **500 Internal Server Error**: An unexpected error occurred.

## Testing Instructions
1. Ensure you have the correct API key set up in your environment.
2. Use a tool like Postman or curl to interact with the endpoints.
3. Create, update, and delete content items to test the full flow.
4. Verify responses and error handling.

## Security Best Practices
- Always use HTTPS to communicate with the API.
- Do not expose your API key in client-side code.
- Implement rate limiting to prevent abuse of the API.
- Validate all inputs to prevent injection attacks.
- Log access attempts and monitor for suspicious activity.

---

**Date of Documentation**: 2026-03-22
