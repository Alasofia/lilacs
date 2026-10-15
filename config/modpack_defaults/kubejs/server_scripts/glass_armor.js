ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:glass_helmet'),
        [
            'AAA',
            'A A'
        ],
        {
            A: 'minecraft:glass'
        }
    ).id('kubejs:glass_helmet')
    
    event.shaped(
        Item.of('kubejs:glass_chestplate'),
        [
            'A A',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:glass'
        }
    ).id('kubejs:glass_chestplate')
    
    event.shaped(
        Item.of('kubejs:glass_leggings'),
        [
            'AAA',
            'A A',
            'A A'
        ],
        {
            A: 'minecraft:glass'
        }
    ).id('kubejs:glass_leggings')
    
    event.shaped(
        Item.of('kubejs:glass_boots'),
        [
            'A A',
            'A A'
        ],
        {
            A: 'minecraft:glass'
        }
    ).id('kubejs:glass_boots');
});