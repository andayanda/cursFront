import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByName(name) {
    return http.get(`/tutorials?name=${name}`);
  }
}

export default new TutorialDataService();
