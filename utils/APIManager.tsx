const apiPaths = {
  projects: () => `/projects`,
};

export default class APIManager {
  static instance: APIManager;

  public static async getInstance() {
    if (this.instance == undefined) {
      this.instance = new APIManager();
    }
    return this.instance;
  }

  public async getProjects() {
    return await this.fetch(apiPaths.projects(), "GET");
  }

  public async insertProject(data: any) {
    return await this.fetch(apiPaths.projects(), "GET", data);
  }

  private async fetch(url: string, method: string, data?: any) {
    return fetch(url).then((res) => {
      if (res.status !== 200) {
        throw new Error(
          `Request to ${url} failed with status code: ${res.status}`
        );
      }

      return res.json();
    });
  }
}
