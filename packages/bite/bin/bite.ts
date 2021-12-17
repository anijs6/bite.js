#!/usr/bin/env node
import { program } from 'commander'
import { readJsonSync } from '../shared/lib/read-json'
import type { CliDevOptions } from '../types'

const pkg = readJsonSync(new URL('../package.json', import.meta.url))

program
  .command('dev', ' Starts the application in development mode (hot-code reloading, errorreporting, etc)')
  .option('')
  .option('')
  .option('')
  .option('')
  .option('')
  .option('')
  .option('')
  .action(async (args: CliDevOptions) => {
    import('../cli/bite-dev').then()
  })
