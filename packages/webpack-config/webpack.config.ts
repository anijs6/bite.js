import webpackMerge from 'webpack-merge'
import type { Configuration } from 'webpack'
import type { GenerateWebpackConfigOptions } from './types'
import { generateWebpackCommonConfig } from './configs/common-config'

/**
 * 生成webpack配置
 *
 * @param options 配置参数
 */
export async function generateWebpackConfig(options: GenerateWebpackConfigOptions): Promise<Configuration> {
  const configs = await Promise.all([generateWebpackCommonConfig(options)])
  return configs.reduce((preConfig, config) => webpackMerge(preConfig, config), {})
}

export default generateWebpackConfig
