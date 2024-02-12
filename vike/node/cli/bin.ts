import { cac } from 'cac'
import { projectInfo, assertUsage, assertIsNotBrowser } from './utils.js'
import { setIsVikeCli } from '../api/isVikeCli.js'
assertIsNotBrowser()

setIsVikeCli()

const cli = cac(projectInfo.projectName)
export const startTime = performance.now()

cli.command('prerender', 'Pre-render the HTML of your pages').action(async () => {
  const { prerender } = await import('../api/prerender.js')
  await prerender()
})

cli
  .command('', 'Start the development server')
  .alias('serve')
  .alias('dev')
  .action(async () => {
    const { serve } = await import('../api/serve.js')
    return serve()
  })

cli.command('build', 'Build for production').action(async () => {
  const { build } = await import('../api/build.js')
  return build()
})

cli.command('preview', 'Start a preview server using production build').action(async () => {
  const { preview } = await import('../api/preview.js')
  return preview()
})

// Listen to unknown commands
cli.on('command:*', () => {
  assertUsage(false, 'Unknown command: ' + cli.args.join(' '))
})

cli.help()
cli.version(projectInfo.projectVersion)

cli.parse()

process.on('unhandledRejection', (rejectValue) => {
  throw rejectValue
})
