import { apiWaypointsCache } from "./lib/waypoints/info/cache"
import { backwardCompatibilityPlayer } from "./lib/backwardCompatibility"
import { apiScoreboard } from "./lib/math/scoreboard"
import { globalWaypointsCache } from "./lib/variables"
import { system, world } from "@minecraft/server"

world.afterEvents.itemUse.subscribe(({source: player, itemStack: item}) => {
  world.sendMessage(`${JSON.stringify(item.getTags())}`)
  if(!player.hasTag("dev")) return

  if(item.typeId == "minecraft:wooden_sword"){
    // backwardCompatibilityPlayer.convert_v8_0(player)
  }

  if(item.typeId == "minecraft:stick"){
    // world.sendMessage(`${JSON.stringify([...(apiWaypointsCache.getDimension(player)?.values() ?? [])], null, 2)}`)
    // world.sendMessage(`${JSON.stringify([...waypointLocatorInfo.values()], null, 2)}`)

    // world.sendMessage(`P: ${JSON.stringify(player.getDynamicPropertyIds(), null, 2)}\n----------------`)
    // world.sendMessage(`W: ${JSON.stringify(world.getDynamicPropertyIds(), null, 2)}\n----------------`)
    // apiWaypointsCache.load(player)

    // world.sendMessage("Encontrado: " + globalWaypointsCache.size + " Cache")
    // world.sendMessage("Caches: " + JSON.stringify([...globalWaypointsCache.entries()].map(([key, value]) => `${[...value.keys()]}`)))

    // waypointsEntity.recoverWaypoints(player)
    // world.sendMessage("§aRegerado")

    // for(const entity of player.dimension.getEntities({type: "advanced_waypoints:waypoint", tags: [`waypointOwner: ${player.id}`]})){}
    // world.sendMessage(`${(JSON.stringify(waypointsInfo.getAll(player)))}`)
    // world.sendMessage(`${"=".codePointAt(0)}`)
    // player.setDynamicProperty("aw:death", undefined)
    // world.sendMessage(`${player.getDynamicPropertyTotalByteCount()}`)
    // world.sendMessage(`${JSON.stringify(player.getDynamicPropertyIds(), null, 2)}`)

    world.sendMessage(`Entities: ${player.dimension.getEntities({type: "advanced_waypoints:waypoint"}).length}`)
    // player.dimension.getEntities({type: "advanced_waypoints:waypoint"}).forEach(entity => world.sendMessage(`id: ${(JSON.stringify(entity.location))}`))
  }
})