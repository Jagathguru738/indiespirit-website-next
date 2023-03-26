module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Primary": {
          "100": "#5f6672ff",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "HalfUnit": "8px",
        "ThreeUnits": "48px",
        "FiveUnits": "80px",
        "FourUnits": "64px",
        "Unit": "16px",
        "OneAndHalfUnits": "24px",
        "TwoUnits": "32px",
        "SixUnits": "96px"
      },
      "borderRadius": {
        "Radius8": "8px",
        "Radius4": "4px",
        "Radius2": "2px",
        "Round": "50%"
      },
      "scale": {
        "Large": "144px",
        "Medium": "96px",
        "MaxWidth": "1400px",
        "XXLarge": "288px",
        "XLarge": "192px",
        "Small": "48px",
        "XSmall": "16px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}