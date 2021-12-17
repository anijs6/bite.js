import { readFile } from 'fs/promises'
import { readFileSync } from 'fs'

export async function readJson(filePath: URL) {
  const fileData = await readFile(filePath, { encoding: 'utf-8' })
  return JSON.parse(fileData)
}

export function readJsonSync(filePath: URL) {
  const fileData = readFileSync(filePath, { encoding: 'utf-8' })
  return JSON.parse(fileData)
}
