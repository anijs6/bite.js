import type { Configuration } from 'webpack'

type mode = 'development' | 'production'

export interface GenerateWebpackCommonConfigOptions {
  mode: mode
  entry?: Configuration['entry']
}

export type GenerateWebpackConfigOptions = GenerateWebpackCommonConfigOptions
