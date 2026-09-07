StartupEvents.registry('item', event => {
    event.create('glass_helmet', 'helmet')
    .material('kubejs:glass')
    .maxDamage(8)
    event.create('glass_chestplate', 'chestplate')
    .material('kubejs:glass')
    .maxDamage(18)
    event.create('glass_leggings', 'leggings')
    .material('kubejs:glass')
    .maxDamage(16)
    event.create('glass_boots', 'boots')
    .material('kubejs:glass')
    .maxDamage(12);
});