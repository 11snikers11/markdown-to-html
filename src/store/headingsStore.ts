import { makeAutoObservable } from 'mobx'

export class Header {
  title: string
  id: string
  isActive: boolean = false
  level: number
  ref?: HTMLAnchorElement

  constructor(title: string, id: string, level: number, ref?: HTMLAnchorElement) {
    makeAutoObservable(this)
    this.title = title
    this.id = id
    this.ref = ref
    this.level = level
  }

  setRef(ref: HTMLAnchorElement) {
    this.ref = ref
  }

  setActive(isActive: boolean) {
    this.isActive = isActive
  }
}

class HeadingsStore {
  headers: Header[] = []
  constructor() {
    makeAutoObservable(this)
  }

  setHeaders(headers: Header[]) {
    this.headers = headers
  }

  addHeader(header: Header) {
    this.headers.push(header)
  }

  getHeaderById(id: string) {
    return this.headers.find((h) => h.id === id)
  }

  getHeadersIds() {
    return this.headers.map((h) => h.id)
  }

  unsetActiveHeaders() {
    this.headers.forEach((h) => {
      h.setActive(false)
    })
  }

  getHeaders() {
    return this.headers
  }

  getActiveHeader() {
    return this.headers.find((h) => h.isActive)
  }

  getActiveHeaders() {
    return this.headers.filter((h) => h.isActive)
  }
}

export default HeadingsStore
