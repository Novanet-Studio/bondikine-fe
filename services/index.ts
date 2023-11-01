const {
  public: {
    services: { url },
  },
} = useRuntimeConfig();

interface CreateCustomerPayload {
  idempotencyKey: string;
  givenName: string;
  emailAddress: string;
}

async function createCustomer(payload: CreateCustomerPayload) {
  return useFetch(`${url}/api/create-customer`, {
    method: 'post',
    body: payload,
  });
}

export default {
  createCustomer,
};