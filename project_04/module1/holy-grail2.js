function setActive(sectionNumber) {
    $('.left-nav').removeClass('active')
    $('.content').removeClass('active')
    const dataSectionSelector = "[data-section=2" + sectionNumber + "]";
    const dataLinkToSelector = "[data-link-to=2" + sectionNumber + "]";
}


