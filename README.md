# Graduates Map

This repository contains a small static web page that visualises clinics and specialists who provide semen cryopreservation services for animals. The page displays doctors on an interactive OpenLayers map with contact information, clinic logos and links to social media.

## Viewing the map

There is no build process &mdash; all required assets are included in the repository. You can open `index.html` directly in a modern browser or serve the folder using any static HTTP server, for example:

```bash
python -m http.server
```

and then navigate to `http://localhost:8000` in your browser.

The page can also be hosted via GitHub Pages or any other static hosting that serves the root of this repository.

## Repository structure

- `index.html` &ndash; the main HTML page with the map and clinic data.
- `*.png` &ndash; images used for doctors and clinics.
- `lib/` &ndash; local copy of OpenLayers assets.

## License

The project is available under the terms of the MIT License. See [LICENSE](LICENSE) for details.
