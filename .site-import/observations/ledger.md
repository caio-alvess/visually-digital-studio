# Observation ledger — https://visually-digital.netlify.app/ → /

Viewports: desktop 1280x900, phone 390x844. Scroll container: window. Page height matches (desktop 6443px, phone 9423px).

| Control | Viewport | Trigger | Expected | Source | Preview | Status | Evidence |
|---|---|---|---|---|---|---|---|
| Header nav (O que fazemos, Método, Quem somos, Dúvidas) | desktop | click | section scrolls to top under header | scrolls (top=0) | scrolls (top=0) | pass | src_d_*.png / pre_d_*.png |
| Header nav | phone | — | hidden on phone, no menu button in source | none | none | pass | src_m_00.png / pre_m_00.png |
| Header WhatsApp CTA | both | link | wa.me with prefilled text | same href | same href | pass | link list identical (14 links) |
| Hero CTA "Quero meu diagnóstico gratuito" | both | link | wa.me | same | same | pass | — |
| Floating WhatsApp button | both | link | wa.me | same | same | pass | src_m_06.png / pre_m_06.png |
| FAQ accordion (7 details) | both | click summary | opens, then closes | open/close | open/close | pass | *_faq_open.png |
| Media | both | — | 6 images (logo, comício, equipe) | loaded | loaded, same sizes | pass | — |

No video, canvas, popups or carousels on the source page. Only visual difference: the "Powered by Netlify" badge injected by the host (intentionally not copied). Pixel difference per screenshot: 0.2–1.7%.
