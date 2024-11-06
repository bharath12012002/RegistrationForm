import loginResponseJson  from "./loginMock.json";
import MockAdapter from "axios-mock-adapter";


export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance);
  mock.onPost("/users/login").reply(() => getLoginResponse());
};

export const getLoginResponse = () => {
  return [200, loginResponseJson]
};
