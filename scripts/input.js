function filter(name) {
    if (name.startsWith("_")) {
        name = name.substring(1);
    }
    if (name.startsWith(" ") || name.endsWith(" ")) {
        name = name.trim();
    }
    return name;
}
module.exports = filter;