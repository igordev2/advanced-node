import { TokenGenerator } from '@/domain/contracts/crypto'

import { sign } from 'jsonwebtoken'

type Params = TokenGenerator.Params
type Result = TokenGenerator.Result

export class JwtTokenHandler implements TokenGenerator {
  constructor (private readonly secret: string) { }

  async generateToken ({ key, expirationInMs }: Params): Promise<Result> {
    const expirationInSeconds = expirationInMs / 1000
    return sign({ key: key }, this.secret, { expiresIn: expirationInSeconds })
  }
}