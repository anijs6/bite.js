import semver from 'semver'

export function checkNodeVersion(requiredVersion: string, id: string) {
  if (!semver.satisfies(process.version, requiredVersion)) {
    console.error(
      `You are using Node ${process.version}, but this version of ${id} requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
    )
    process.exit(1)
  }
}
