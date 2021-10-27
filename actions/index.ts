import axios from "axios";
import { PeopleInterface } from "../interface";

const endpoint = "https://swapi.dev/api";

interface QueryInterface {
  page: number;
}

export const PeopleAction = {
  get: async ({ page }: QueryInterface) => {
    let data: PeopleInterface[] = [];
    await axios
      .get(`${endpoint}/people?page=${page}&limiting=20`)
      .then(function (res) {
        data = res.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  },
};
