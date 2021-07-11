- Hashbang in index.js
- main property in package.json which points to index.js
- `npm link` symlinks index.js to $PATH so you can run using the `bin` name


Options for compiling to exe:

nexe, 
vercel/ncc - compiles to a single file (this works with `build` but no ESM support for `run`)
vercel/pkg - compiles to a binary - struggles with top level await / ESM

Using ncc and pkg together can work - use ncc to bundle to a single file then use pkg to compile a binary from that file.