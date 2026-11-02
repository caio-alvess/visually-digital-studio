<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The homepage is an imported site kept in src/routes/index.tsx with retained styles in src/styles/site.css; edit copy via the data arrays at the top of the route so sections stay consistent.
- All CTAs build WhatsApp links through the single `wa()` helper and `WHATSAPP` constant in the route, so the number changes in one place.
