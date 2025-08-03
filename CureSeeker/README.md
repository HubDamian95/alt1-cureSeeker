# CureSeeker

A RuneScape Alt1 app for diagnosing animal diseases in Player-Owned Farms. This app helps players quickly identify the correct disease based on examination symptoms.

## Features

- **Real Disease Data**: Based on the official [RuneScape Wiki Disease page](https://runescape.wiki/w/Disease)
- **Six Disease Types**: 
  - Foot-in-mouth
  - Flu
  - Curse
  - Dry nose
  - Bone rattle
  - Wooting cough
- **Four Body Parts**: Head, Eyes, Legs and feet, Stomach
- **Instant Diagnosis**: Matches examination text to disease symptoms
- **Alt1 Integration**: Works with RuneScape Alt1 toolkit

## Installation

1. **Install Node.js** (if not already installed):
   ```bash
   winget install OpenJS.NodeJS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

## Usage

1. **Install Alt1**: Download and install Alt1 from [https://runeapps.org/alt1](https://runeapps.org/alt1)

2. **Create an icon**: 
   - Use the provided `icon.svg` file and convert it to PNG
   - Or create a 32x32 pixel icon with a medical cross and "CS" text
   - Save as `icon.png` in the root directory

3. **Load the app**: 
   - Open Alt1
   - Go to "Add App" → "From Folder"
   - Select your CureSeeker folder
   - The app should appear with the configuration from `appconfig.json`

4. **Grant permissions**: Allow the app to read screen pixels when prompted

5. **Examine animals**: When examining diseased animals in RuneScape, the app will match the examination text to identify the disease

## Development

- **Development mode with watch**: `npm run dev`
- **Start development server**: `npm start`
- **Clean build directory**: `npm run clean`

## How It Works

The app contains a comprehensive database of all disease symptoms from the RuneScape Wiki. When you examine an animal's body parts (head, eyes, legs/feet, stomach), the game provides specific text descriptions. The app matches these descriptions against the known symptoms to identify the correct disease.

## Disease Symptoms

### Foot-in-mouth
- Head: Breath smells like socks, sore gums, nasty marks on gum line
- Eyes: Normal appearance
- Feet: Soggy, chewed on, scuffed
- Stomach: Emissions smell like shoes, bloated

### Flu
- Head: Fever, coughing, sneezing, unpleasant breath
- Eyes: Bloodshot
- Feet: Clammy, sweaty, warm
- Stomach: Nausea, off food

### Curse
- Head: Mumbling in strange language, sulphur breath, lumpy nose, light in throat
- Eyes: Bloodshot, glowing, malicious, glazed
- Feet: Chewed on, tapping rhythm, scuffed
- Stomach: Strange singing noises, off food

### Dry nose
- Head: Very dry nose, sore nose
- Eyes: Fine
- Feet: Fine
- Stomach: Normal

### Bone rattle
- Head: Normal breath, clicking teeth, healthy gums
- Eyes: Fine
- Legs: Clicking, stiff, shivering
- Stomach: Clicking body noise

### Wooting cough
- Head: Coughing, 'hu hu huuu' cough, normal breath
- Eyes: Bloodshot, mirthful, darting around
- Legs: Unsteady, coughing regularly
- Stomach: Slightly swollen

## License

MIT License 