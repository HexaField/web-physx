import * as Comlink from './comlink/comlink'
import PHYSX from './physx.release.node.js'

class Physics {
  constructor() {}

  update() {}
}

const physicsInterface = {
  PhysX: undefined,
  Physics: new Physics(),
  create: async () => {
    const PhysX = await PHYSX()
    globalThis.PhysX = PhysX
    physicsInterface.PhysX = PhysX
  }
}

Comlink.expose(physicsInterface)
