import { bodyparts } from "./diseases";
import { Alt1Window } from "./types";

// Declare global window with alt1
declare global {
    interface Window {
        alt1?: any;
    }
}

// Wait for Alt1 to be ready
if (!window.alt1) {
    alert("This app requires Alt1 to be installed and running.\nGet it from https://runeapps.org/alt1");
} else if (!window.alt1.permissionPixel) {
    window.alt1.identifyAppUrl("./appconfig.json");
    alert("This app needs permission to read the screen. Please grant permission and reload.");
}

// Main app class
class FarmingCureSeeker {
    private outputElement: HTMLElement;

    constructor() {
        this.outputElement = document.getElementById("output")!;
        this.setupListeners();
    }

    private setupListeners() {
        // Here you would set up chat detection
        // For now we'll just demonstrate with a test button
        const testButton = document.createElement("button");
        testButton.textContent = "Test Diagnosis";
        testButton.addEventListener("click", () => this.testDiagnosis());
        document.body.appendChild(testButton);
    }

    private testDiagnosis() {
        // This is where you'd normally get text from chat
        // For now we'll use a test case - this should match "Curse" disease
        const testText = "The animal's breath smells faintly of sulphur.";
        this.analyzeText(testText);
    }

    public analyzeText(text: string) {
        this.outputElement.innerHTML = ""; // Clear previous results

        const header = document.createElement("h3");
        header.textContent = "Diagnosis:";
        this.outputElement.appendChild(header);

        // Find matching disease entries
        for (const part of bodyparts) {
            for (const disease of part.disease) {
                if (disease.t === text) {
                    const result = document.createElement("div");
                    result.textContent = `Possible disease: ${disease.d}`;
                    this.outputElement.appendChild(result);
                }
            }
        }

        if (this.outputElement.children.length === 1) { // Only header was added
            const noMatch = document.createElement("div");
            noMatch.textContent = "No matching disease found for this text.";
            this.outputElement.appendChild(noMatch);
        }
    }
}

// Initialize the app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    new FarmingCureSeeker();
});