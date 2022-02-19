import { PgUserAccountRepository } from '@/infra/postgres/repository'

export const makePgUserAccountRepo = (): PgUserAccountRepository => {
  return new PgUserAccountRepository()
}
