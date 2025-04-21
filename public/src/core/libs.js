/**
 * Dynamische Generierung von Bibliothekspfaden für Three.js und Addons
 * @param {string} name - Name der Bibliothek (z.B. "three", "controls/OrbitControls", "loaders/GLTFLoader")
 * @returns {string} - Der generierte Modul-Pfad
 */
function resolveLibPath(name) {
    if (name === "three") {
        return "three" // Nutzt den Pfad aus der Import Map
    }
    return `three/examples/jsm/${name}.js` // Three.js-Addons aus Import Map
}

/**
 * Dynamisches Laden von Bibliotheken
 * @param {string} name - Name der Bibliothek (z.B. "three" oder "controls/OrbitControls")
 * @returns {Promise<any>} - Das geladene Modul oder null bei Fehler
 */
export async function loadLib(name) {
    const path = resolveLibPath(name) // Bestimme den korrekten Modulpfad
    try {
        const module = await import(path)
        console.log(`✅ Modul '${name}' erfolgreich geladen von '${path}'`)
        return module
    } catch (err) {
        console.error(`❌ Fehler beim Laden von '${name}' (${path}):`, err)
        return null
    }
}
