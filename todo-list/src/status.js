export default function (pathAndComponentMap) {
    let self = this;
    self.show = undefined;
    pathAndComponentMap.forEach(current => {
        if (window.location.pathname === current.path) {
            self.show = current.needShow;
        }
    });
}