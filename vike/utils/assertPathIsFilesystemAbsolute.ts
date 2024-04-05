export { assertPathIsFilesystemAbsolute }
export { isPathAbsolute }

import path from 'path'
import { assert } from './assert.js'
import { assertPosixPath } from './filesystemPathHandling.js'

/** Assert path is absolute starting from the filesystem root. */
function assertPathIsFilesystemAbsolute(p: string) {
  // The assert is "eventually reliable":
  // - For Windows users, the assert is correct.
  // - For Linux users assertPathIsFilesystemAbsolute() will erroneously succeed if `p` is a path absolute from the user root dir.
  //   - But that's okay because the assertion will eventually fail for Windows users.
  assert(isPathAbsolute(p))
}

/** Whether path is absolute starting from the filesystem root. Isn't reliable for Linux users: isPathAbsolute() returns `true` for paths absolute from the user root dir. */
function isPathAbsolute(p: string) {
  assertPosixPath(p)
  assert(!p.startsWith('/@fs/'))
  if (process.platform !== 'win32') {
    // - For linux users, there doesn't seem to be a reliable way to distinguish between:
    //   - File path absolute starting from filesystem root, e.g. /home/rom/code/my-app/pages/about/+Page.js
    //   - File path absolute starting from user root dir (Vite's `config.root`), e.g. /pages/about/+Page.js
    // - Checking whether `p` starts with the first directory of process.cwd() (or `userRootDir`) can be erroneous, most notably when using docker: https://github.com/vikejs/vike/issues/703
    // - Using require.resolve() would be a solution but probably too slow?
    return p.startsWith('/')
  } else {
    const yes = path.win32.isAbsolute(p)
    // Ensure isPathAbsolute() returns `false` if path is absolute starting from the user root dir (see comments above).
    if (yes) assert(!p.startsWith('/'))
    return yes
  }
}
