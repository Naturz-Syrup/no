# AiMe — Your Digital Twin for Effortless Content

**AiMe builds an AI‑driven digital twin from your footage, transcripts, and social posts, then turns that archive into ready‑to‑publish video essays, short clips, memes, and voice assets — all in your voice and at a fraction of the production time.**

## Repository structure
- **frontend** — UI code (React or chosen framework)  
- **backend** — serverless functions and API routes (Base44 integration)  
- **docs** — planning, MVP, architecture, prompts, and marketing copy  
- **scripts** — automation, setup, deployment helpers  
- **archive** — raw uploads, drafts, and early artifacts

## Quick start
1. Clone the repo: `git clone https://github.com/<your-username>/<repo>.git`  
2. Create local branches for features: `git checkout -b feature/<name>`  
3. Add files to the appropriate folder and commit: `git add . && git commit -m "chore: ..." && git push origin feature/<name>`

## Recommended workflow
- Use branches for features and fixes.  
- Open a pull request for review and use **Squash and merge** to keep history tidy.  
- Store raw uploads in `/archive` to keep the repo clean.

## Next steps
- Add `docs/mvp.md` with the Phase 1 plan (see /docs).  
- Move uploaded files into `/archive/`.  
- Add GitHub Secrets for Base44, Hugging Face, and any other API keys before adding code that uses them.

## Contact
Project owner: **Michael / Naturz Syrup**
