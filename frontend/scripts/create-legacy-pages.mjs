import { copyFile, mkdir, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const oldRoot = join(dist, 'portfolio')
const redirectPaths = [
  '',
  'blogs/',
  'blogs/bpe/visualizer.html',
  'blogs/word-to-tensor/visualizer.html',
  'blogs/embedding-model-training/visualizer.html',
]

for (const path of redirectPaths) {
  const target = `/${path}`
  const output = join(oldRoot, path.endsWith('/') || path === '' ? `${path}index.html` : path)
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="0;url=${target}" />
    <title>Portfolio moved</title>
    <script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
  </head>
  <body><a href="${target}">Continue to the portfolio</a></body>
</html>
`)
}

const documents = join(dist, 'documents')
const oldDocuments = join(oldRoot, 'documents')
await mkdir(oldDocuments, { recursive: true })
for (const name of await readdir(documents)) {
  await copyFile(join(documents, name), join(oldDocuments, name))
}
