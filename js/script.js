function toSubmit(e) {
    e.preventDefault()
    window.open(location.href.substr(0, location.href.lastIndexOf('/') + 1) + document.getElementsByName('q')[0].value);
    return false
}