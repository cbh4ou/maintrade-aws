import { ModelInit, MutableModel } from '@aws-amplify/datastore'

export declare class Metrics {
  readonly id: string
  readonly risk?: number
  readonly momentum?: string
  constructor(init: ModelInit<Metrics>)
  static copyOf(source: Metrics, mutator: (draft: MutableModel<Metrics>) => MutableModel<Metrics> | void): Metrics
}
