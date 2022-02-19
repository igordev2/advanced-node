import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook Api Integration Tests', () => {
  it('should return a Facebook User if token is valid', async () => {
    const axiosClient = new AxiosHttpClient()
    const sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )

    const fbUser = await sut.loadUser({ token: 'EAAgilxu9pacBAJGhkecSo0gXZCctL5ze8BAI7YQB1mpZAS7j50QG4dBEfLmyjW092dAZCEqUY9kCI3lMlqkOmF1ValijuYnCGboMcq5rDDnvPbtlEh52VdFJHQZA5Bqig5NAp3v5OkWApznynJ43ZCaLzpEBZBApTrnKq0abZBYxyZCaj5BwGFfLX6yqfEsZBZB4EAHx10bjtrHrJ41UNgariX' })

    expect(fbUser).toEqual({
      facebookId: '107931408490799',
      email: 'igor_kftexnv_teste@tfbnw.net',
      name: 'Igor Teste'
    })
  })

  it('should return undefined if token is invalid', async () => {
    const axiosClient = new AxiosHttpClient()
    const sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )

    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
