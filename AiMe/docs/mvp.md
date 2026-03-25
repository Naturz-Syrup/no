# AiMe MVP Phase 1

## Core Goal
Build an AI system that repurposes a creator’s existing content library into ready-to-publish outputs while preserving the creator’s voice.

## Phase 1 Features
1. **Batch Upload** — Upload video, audio, transcripts, and social post archives.  
2. **Auto Transcription** — Generate transcripts with timestamps; allow manual transcript paste.  
3. **Content Bank** — Store uploaded items with metadata: title, source, tags, aspect ratio, persona.  
4. **Persona Builder** — Create a Default Creator Persona that captures tone, humor, and cadence.  
5. **Generators**
   - **30s vertical clip** generator (preserve phrasing; add captions).  
   - **60s highlight reel** generator.  
   - **3–5 minute video essay** draft generator with hook and CTA.  
6. **Clip from Timestamp** — Select start/end timestamps and generate script, overlay text, and editing notes.  
7. **Export** — Provide platform-specific exports (9:16, 1:1, 16:9) and caption files.  
8. **Basic UI** — Dashboard, Content Bank, Generator, Projects list.

## Phase 1 Non Goals
- No user accounts or multi-user collaboration.  
- No advanced video editing UI.  
- No paid billing or pricing enforcement.

## Inputs and Outputs
- **Inputs:** Video files; audio files; transcripts; social post links.  
- **Sample Outputs:** 30s clips; 60s reels; 3–5 minute essays; caption sets; persona voice samples.

## Acceptance Criteria
- Upload and store a batch of files and metadata.  
- Auto-transcribe at least one uploaded file with timestamps.  
- Generate a 30s clip that preserves phrasing and returns captions and export suggestions.  
- Save generated items to Projects and allow download of export-ready files.

## Dependencies
- **Base44** for ingestion and transcription (primary).  
- **Hugging Face** or other open models as fallback.  
- **Vercel** or **Netlify** for frontend hosting and serverless functions.  
- **GitHub Actions** for CI.

## Next Steps
1. Create backend skeleton and a sample serverless function for ingestion.  
2. Wire Base44 API keys via GitHub Secrets.  
3. Implement Content Bank schema and upload flow.  
4. Build the 30s clip generator endpoint and a minimal frontend to trigger it.
