// backend/functions/content-api.js
// Serverless handlers for Base44 ContentItem API operations

const Base44Client = require('../lib/base44');

const client = new Base44Client(
  process.env.BASE44_ENDPOINT || 'https://api.base44.io',
  process.env.BASE44_APP_ID || '69be13a72d0aff11ed6cc89e',
  process.env.BASE44_API_KEY || 'bbae18af71024f269147b773ea31d175'
);

/**
 * GET /api/content-items - Fetch all content items with optional filters
 */
async function getContentItems(req, res) {
  try {
    const filters = req.query || {};
    const data = await client.fetchEntities(filters);
    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('getContentItems error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
}

/**
 * POST /api/content-items - Create a new content item
 */
async function postContentItem(req, res) {
  try {
    const { title, content_type, source_platform, file_url, tags, ...rest } = req.body || {};

    if (!title || !content_type) {
      return res.status(400).json({ success: false, error: 'Missing required fields: title, content_type' });
    }

    const payload = {
      title,
      content_type,
      source_platform: source_platform || 'unknown',
      file_url: file_url || null,
      tags: tags || [],
      status: 'pending',
      ...rest
    };

    const result = await client.createEntity(payload);
    return res.status(201).json({ success: true, data: result });
  } catch (err) {
    console.error('postContentItem error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
}

/**
 * PUT /api/content-items/:id - Update an existing content item
 */
async function putContentItem(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body || {};

    if (!id) {
      return res.status(400).json({ success: false, error: 'Missing entity ID' });
    }

    const result = await client.updateEntity(id, updateData);
    return res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error('putContentItem error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  getContentItems,
  postContentItem,
  putContentItem
};