import { AppState } from '../AppState'
import { api } from './AxiosService'

class LibsService {
  async getLibs() {
    const res = await api.get('api/libs')
    AppState.libs = res.data
  }

  async getOne(id) {
    const res = await api.get('api/libs/' + id)
    AppState.activeLib = res.data[0]
  }
}
export const libsService = new LibsService()
