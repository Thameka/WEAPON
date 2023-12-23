new dialog(NarratorBjorn, "The complete symmetry of the room was quite confusing. However, that much was certain: there was a passage on the left that was as dark as the tunnel we came from, and another one on the right that seemed better lit. At the very end of the corridor stood a heavy metal door."),
new dialog(Lussie, "Now... Where should we go?"),

1. Go back to the entrance. [[A2S1 Conv 1]]
2. Enter the dark room. (if TombPASS [[A2S2 Conv 1]] else [[A2S3 Conv 0]])
3. Enter the lit room. (if ChurchPASS [[A2S4 Conv 1]] else [[A2S4 Conv 0]])
4. Go towards the heavy metal door. (if MetalDoorPASS [[A2S2 Conv 3]], else [[A2S2 Conv 2]] )
