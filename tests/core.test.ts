import { createPhysXWorker } from '../src/index'

describe('Proxy', () => {
  test('Can load PhysX', async () => {
    const worker = await createPhysXWorker()
    const interval = setInterval(() => {
      worker.update()
    }, 1000 / 60)
    const version = await PhysX.PX_PHYSICS_VERSION
    expect(version).toBe(67174656)
    clearInterval(interval)
    worker.dispose()
  })
})
