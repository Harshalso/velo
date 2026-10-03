# Velo Wellness — React landing page

A responsive React + Vite recreation based on the supplied Fitelo HTML landing-page structure, rebranded as **Velo** with a fresh visual identity and mock photography.

## Included
- React components and Vite project setup
- Responsive desktop, tablet, and mobile layout
- Velo branding, warm coral and sage palette, typography
- Unsplash stock images used as illustrative mock imagery
- Interactive FAQ accordion
- Demo 5-minute countdown timer
- Consultation form with client-side confirmation (no data is sent)
- Mobile navigation
- Accessibility labels and a wellness disclaimer

## Run locally
Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```

## Customize
- Main page content: `src/App.jsx`
- Styling: `src/styles.css`
- Page metadata: `index.html`
- Image URLs are defined near the top of `src/App.jsx` in the `photos` and `results` arrays.

## Important notes
- The image links require an internet connection. Replace them with licensed local assets for production.
- The profiles and stories are illustrative placeholders, not real client testimonials or measured outcomes.
- The countdown is a demo interaction and resets every five minutes. Remove it or connect it to a genuine offer deadline before launch.
- The consultation form currently confirms locally only. Connect it to your API, CRM, or booking service to receive submissions.
- This is a wellness landing-page demo, not medical advice.
