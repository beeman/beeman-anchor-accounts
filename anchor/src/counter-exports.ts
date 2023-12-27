import { Cluster, PublicKey } from '@solana/web3.js'
import type { Counter } from '../target/types/counter'
import { IDL as CounterIDL } from '../target/types/counter'

export { Counter, CounterIDL }
export const COUNTER_PROGRAM_ID = new PublicKey('couNm47iGm556xjGY8iB9sSWthFpy7Sk7hd7Qwnfppg')

export function getCounterProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
    case 'mainnet-beta':
      return new PublicKey('CounNZdmsQmWh7uVngV9FXW2dZ6zAgbJyYsvBpqbykg')
    default:
      return COUNTER_PROGRAM_ID
  }
}
