export default class APIManager {
  static instance: APIManager;

  private apiBasePath: string = "/api";

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

  public async getUsers() {
    const url = `${this.apiBasePath}/user`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  public async findUser(email: string) {
    const url = `${this.apiBasePath}/user/${email}`;
    const options = {
      method: "GET",
    };
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log(email);
    return data;
  }

  public async applyToProject(id: string) {
    const url = `${this.apiBasePath}/project`;
    const pid = { projectId: id };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pid),
    };
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

  public async insertUser(d: any) {
    const url = `${this.apiBasePath}/user`;
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
