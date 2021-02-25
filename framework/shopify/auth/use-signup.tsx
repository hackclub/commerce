import { useCallback } from 'react'
import type { MutationHook } from '@commerce/utils/types'
import { CommerceError } from '@commerce/utils/errors'
import useSignup, { UseSignup } from '@commerce/use-signup'
import useCustomer from '../customer/use-customer'
import { CustomerCreateInput } from '@framework/schema'

import {
  customerCreateMutation,
  customerAccessTokenCreateMutation,
} from '@framework/utils/mutations'
import handleLogin from '@framework/utils/handle-login'

export default useSignup as UseSignup<typeof handler>

export const handler: MutationHook<
  null,
  {},
  CustomerCreateInput,
  CustomerCreateInput
> = {
  fetchOptions: {
    query: customerCreateMutation,
  },
  async fetcher({
    input: { firstName, lastName, email, password },
    options,
    fetch,
  }) {
    if (!(firstName && lastName && email && password)) {
      throw new CommerceError({
        message:
          'A first name, last name, email and password are required to signup',
      })
    }
    const data = await fetch({
      ...options,
      variables: {
        input: {
          firstName,
          lastName,
          email,
          password,
        },
      },
    })

    try {
      const loginData = await fetch({
        query: customerAccessTokenCreateMutation,
        variables: {
          input: {
            email,
            password,
          },
        },
      })
      handleLogin(loginData)
    } catch (error) {}
    return data
  },
  useHook: ({ fetch }) => () => {
    const { revalidate } = useCustomer()

    return useCallback(
      async function signup(input) {
        const data = await fetch({ input })
        await revalidate()
        return data
      },
      [fetch, revalidate]
    )
  },
}