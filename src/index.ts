import * as Comlink from './comlink/comlink'
import Worker from 'web-worker'
import path from 'path'

export async function createPhysXWorker() {
  const endpoint = new Worker(path.resolve(__dirname, './worker.js'))
  const worker = Comlink.wrap(endpoint)
  await new Promise((resolve) => {
    //@ts-ignore
    worker.create().then(resolve)
    Comlink.sendQueue(endpoint)
  })
  //@ts-ignore
  globalThis.Physics = worker.Physics
  //@ts-ignore
  globalThis.PhysX = worker.PhysX

  return {
    update: () => {
      //@ts-ignore
      worker.Physics.update()
      Comlink.sendQueue(endpoint)
    },
    dispose: () => {
      endpoint.terminate()
      delete globalThis.Physics
      delete globalThis.PhysX
    }
  }
}
