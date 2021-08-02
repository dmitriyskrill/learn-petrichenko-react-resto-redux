export default class RestoService {
  _apiBase = "http://localhost:3003"

  getResourse = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`)
    if (!response.ok) {
      throw new Error("Server Error")
    }
    return await response.json()
  }

  getMenuItems = async () => {
    return await this.getResourse("/menu/")
  }
}
