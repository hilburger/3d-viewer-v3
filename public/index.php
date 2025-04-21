<?php
// Dynamische Werte, die von PHP gesetzt werden
$sceneId = "three-container-001";
$prevLabel = "Zurück";
$nextLabel = "Weiter";
$modelId = 1;
?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discoverthreejs.com - The Structure of a three.js App</title>

    <link rel="icon" href="https://discoverthreejs.com/favicon.ico" type="image/x-icon">
    <link href="./styles/main.css" rel="stylesheet" type="text/css">

    <!-- Import Map für Three.js -->
    <script type="importmap">
        {
            "imports": {
                "three": "/libs/three.module.js",
                "three/examples/jsm/controls/OrbitControls.js": "/libs/jsm/controls/OrbitControls.js",
                "three/examples/jsm/loaders/GLTFLoader.js": "/libs/jsm/loaders/GLTFLoader.js",
                "core/": "./src/core/",
                "modules/": "./src/modules/",
                "scenes/": "./src/scenes/",
                "ui/": "./src/ui/"
            }
        }
    </script>

    <!-- Lade zuerst das Libs-Modul -->
    <script type="module" src="./src/core/libs.js"></script>
</head>
<body>
    <!-- Status Bar -->
    <div class="status-bar">
        <div class="status-bar-content">
            <span>Status: Ready</span>
            <span>Version 1.0</span>
        </div>
        <div id="loading-bar"></div>
    </div>

    <div id="main-container">
        <div id="titleActiveLayout">
            Current Layout: U-Form
        </div>

        <div id="three-container-001">
            <div class="viewer-navigation">
                <!-- Level 1 Navigation -->
                <div id="nav-level-1">
                    <div id="title-level-1"><h3>Titel Level 1</h3></div>
                    <div class="nav-controls">
                        <button id="prev-l1-button" class="nav-button">
                            <span class="nav-arrow">←</span> Vorheriges
                        </button>
                        <div id="level-1-item" class="current-item">Hauptelement</div>
                        <button id="next-l1-button" class="nav-button">
                            Nächstes <span class="nav-arrow">→</span>
                        </button>
                    </div>
                </div>

                <!-- Level 2 Navigation -->
                <div id="nav-level-2">
                    <div id="title-level-2"><h4>Titel Level 2</h4></div>
                    <div class="nav-controls">
                        <button id="prev-l2-button" class="nav-button">
                            <span class="nav-arrow">←</span> Vorheriges
                        </button>
                        <div id="level-2-item" class="current-item">Unterelement</div>
                        <button id="next-l2-button" class="nav-button">
                            Nächstes <span class="nav-arrow">→</span>
                        </button>
                    </div>
                </div>

                <!-- Description -->
                <div class="item-description">
                    <div id="current-description">Beschreibung wird geladen...</div>
                </div>
            </div>

            <!-- Dynamic values in data attributes -->
            <div id="<?= $sceneId ?>" data-model-id="<?= $modelId ?>">
                <!-- Three.js Canvas will be inserted here -->
            </div>
        </div>

        <!-- <div id="loading-screen">
            Loading...
        </div> -->
    </div>
    
    <!-- Load JavaScript -->
    <script type="module" src="./src/main.js"></script>
</body>
</html>