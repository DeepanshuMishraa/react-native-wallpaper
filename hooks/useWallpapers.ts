export interface Wallpaper {
  uri: string;
  name: string;
}

export function useWallpapers(): Wallpaper[] {
  return [
    {
      uri: "https://ideogram.ai/assets/progressive-image/balanced/response/o2yUCt_9Qr-RHIMsslH8Yw",
      name: "landscape",
    },
    {
      uri: "https://ideogram.ai/assets/progressive-image/balanced/response/fH66BtYGQPSBDjuxbIGsmg",
      name: "3D",
    },
    {
      uri: "https://ideogram.ai/assets/progressive-image/balanced/response/0Hi7m1GiRECEOXus1mH02w",
      name: "abstract",
    },
    {
      uri: "https://ideogram.ai/assets/progressive-image/balanced/response/ACPnHkzMQHyj9jHLVEwuhw",
      name: "Christmas",
    },
    {
      uri: "https://ideogram.ai/assets/progressive-image/balanced/response/cDSNLKswQS6KiCigh2Zs-g",
      name: "Cosmic",
    },
    {
      uri: "https://ideogram.ai/assets/progressive-image/balanced/response/lpQFiPs8Q8CDY1SQFxkdLw",
      name: "nature",
    },
  ];
}
