function onMapClick(event) {
    const appElement = $(this);
    const target = $(event.target);
    const userPressedShiftKey = event.shiftKey;
    const isPin = target.hasClass('pin')

    if (userPressedShiftKey && isPin) {
        target.remove()
    } else if (!isPin) {
        const pinX = event.offsetX;
        const pinY = event.offsetY;
        const pinObj = `<div class="pin" style='top: ${pinY}px; left: ${pinX}px'></div>`
        appElement.append(pinObj)
    }
}
$('.app').click(onMapClick)