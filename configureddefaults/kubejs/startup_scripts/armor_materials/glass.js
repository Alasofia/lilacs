StartupEvents.registry('armor_material', event => {
        Platform.mods.kubejs.name = 'lilacs'
        event
        .create('glass')
        .defense({
                helmet: 1,
                chestplate: 2,
                leggings: 2,
                boots: 1
        })
        .enchantmentValue(1)
        .equipSound('minecraft:item.armor.equip_diamond')
        .repairIngredient(() => Ingredient.of('minecraft:glass'));
});