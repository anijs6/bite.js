import type { Configuration } from 'webpack'
import type { GenerateWebpackCommonConfigOptions } from '../types'
import { findWebpackEntry } from '../find-entry'

/**
 * 生成webpack公共配置
 *
 * @param options 生成配置的选项
 */
export async function generateWebpackCommonConfig(
  options: GenerateWebpackCommonConfigOptions
): Promise<Configuration> {
  const { mode = 'development', entry } = options || {}

  // 自动搜寻入口文件
  const entryMatch = entry || (await findWebpackEntry())

  return {
    context: process.cwd(),
    target: mode === 'development' ? 'web' : 'browserslist',
    mode: options.mode,
    entry: entryMatch,

    // FIXME: 关闭webpack5向后兼容，可以提高一定的性能
    experiments: {
      backCompat: false
    }
  }
}
