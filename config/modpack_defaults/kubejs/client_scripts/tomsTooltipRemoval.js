ItemEvents.modifyTooltips(event => {
    event.modify('toms_storage:trim', tooltip => { tooltip.removeLine(2); tooltip.removeLine(2)})
    event.modify('toms_storage:inventory_connector', tooltip => { tooltip.removeLine(2); })
    event.modify('toms_storage:inventory_connector', {shift: true}, tooltip => { tooltip.removeLine(2); tooltip.removeLine(2);})
    event.modify('toms_storage:storage_terminal', tooltip => { tooltip.removeLine(2);})
    event.modify('toms_storage:storage_terminal', {shift: true}, tooltip => { tooltip.removeLine(2);})
    event.modify('toms_storage:crafting_terminal', tooltip => { tooltip.removeLine(2);})
    event.modify('toms_storage:crafting_terminal', {shift: true}, tooltip => { tooltip.removeLine(2); tooltip.removeLine(2);})
})
