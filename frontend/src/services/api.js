const BASE = "http://localhost:4000/api";

export const api = {
  async searchSnippets(q) {
    return fetch(`${BASE}/snippets/search?q=${encodeURIComponent(q)}`).then(r=>r.json());
  },
  async getSnippet(id) {
    return fetch(`${BASE}/snippets/`+id).then(r=>r.json());
  },
  async createSnippet(data) {
    return fetch(`${BASE}/snippets`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)}).then(r=>r.json());
  },
  async updateSnippet(id, data) {
    return fetch(`${BASE}/snippets/`+id, {method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)}).then(r=>r.json());
  },

  async getTags() {
    return fetch(`${BASE}/tags`).then(r=>r.json());
  },
  async createTag(data) {
    return fetch(`${BASE}/tags`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)}).then(r=>r.json());
  }
};