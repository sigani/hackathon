export default class APIManager {
  static instance: APIManager;

  private apiBasePath: string = "pages/api";

  public static async getInstance() {
    if (this.instance == undefined) {
      this.instance = new APIManager();
    }
    return this.instance;
  }

  public async getProjects() {
    const url = `${this.apiBasePath}/project`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  public async insertProject(d: any) {
    const url = `${this.apiBasePath}/project`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d),
    };
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  }
}
