# How to update my portfolio

Portfolio content lives in the typed files in this folder. The pages and cards read these files directly, so you do not need to edit a component when adding an item.

## Add a project

1. Create a folder in `public/media/projects/` named after a short URL-friendly slug, such as `my-project`.
2. Put any screenshots or demo media in that folder.
3. Add one entry to the `projects` array in `projects.ts`. Copy an existing entry and update its `slug`, `title`, `category`, `shortDescription`, and `tags`. Keep `caseStudy.media: []` if there are no visuals yet.
4. Add only case-study details you can verify: `problem`, `solution`, `features`, `technologies`, `architecture`, `implementation`, `outcomes`, and `notes` are optional.

The `slug` becomes the route `/projects/<slug>`. Keep it unique and use lowercase letters and hyphens. The project listing, home selection, case-study route, and related-work links use the same entry.

## Add project screenshots

Save screenshots inside that project's folder, preferably as optimized `.webp` files. Add a media item inside that project's `caseStudy.media` array:

```ts
media: [
  {
    src: '/media/projects/my-project/overview.webp',
    kind: 'image',
    alt: 'Accurate description of what the screenshot shows',
    caption: 'Optional verified caption',
  },
],
```

Use a useful `alt` description; do not describe details that are not visible.

## Add a project demo or GIF

Put a `.gif` in the same project folder and add it to `caseStudy.media` with `kind: 'gif'`, or add a browser-playable video file with `kind: 'video'`. For example:

```ts
{
  src: '/media/projects/my-project/demo.gif',
  kind: 'gif',
  alt: 'Short description of the demonstrated interaction',
}
```

Videos display native playback controls. An optional `poster` may point to a still image in the same project's media folder.

## Add a certificate

1. Add the certificate image to `public/media/certificates/` (or a document file there).
2. Add one object to the `certifications` array in `certifications.ts`, copying an existing entry.
3. Set the exact `title` and add only known optional fields such as `issuer`, `description`, `credentialUrl`, `date`, and `credentialId`.
4. To show the media, add a `media` entry:

```ts
media: [
  {
    src: '/media/certificates/my-certificate.webp',
    kind: 'image',
    alt: 'Certificate title as shown on the certificate',
  },
],
```

For a PDF or other document, set `kind: 'document'` and use an accurate `caption` or `alt` for its link text. Leave `media: []` when there is no file to show.

## Add a journey milestone

Add one object to the `journey` array in `journey.ts`:

```ts
{
  id: 'short-unique-name',
  label: 'CATEGORY',
  title: 'Milestone title',
  description: 'A concise, factual description.',
  // date: 'Only add a date when it is verified.',
}
```

Each `id` must be unique. `description` and `date` are optional; leave them out if unknown. The page introduction is managed separately in `journeyIntro` in the same file.

## Check your edits

After editing content, run `npm run lint`, `npx tsc --noEmit`, and `npm run build`. TypeScript will flag missing required fields and media paths should match files under `public/`.
