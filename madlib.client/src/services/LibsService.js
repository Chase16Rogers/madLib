import { AppState } from '../AppState'
import { api } from './AxiosService'

class LibsService {
  async getLibs() {
    const res = await api.get('api/libs')
    AppState.libs = res.data
  }
}
export const libsService = new LibsService()
