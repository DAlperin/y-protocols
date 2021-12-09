import { runTests } from '@dalperin/testing'
import * as log from '@dalperin/logging'
import * as awareness from './awareness.test.js'

import { isBrowser, isNode } from '@dalperin/environment'

/* istanbul ignore if */
if (isBrowser) {
  log.createVConsole(document.body)
}

runTests({
  awareness
}).then(success => {
  /* istanbul ignore next */
  if (isNode) {
    process.exit(success ? 0 : 1)
  }
})
