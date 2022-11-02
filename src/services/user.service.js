import { ApiRequest } from ".";

const update = (user) => ApiRequest.post("user/update", user, {withCredentials: true});

export default {
  update,
};
