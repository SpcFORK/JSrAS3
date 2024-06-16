declare global {

  /**
   * This class contains constants for use with the IME.conversionMode property. Setting conversionMode to either ALPHANUMERIC_FULL or JAPANESE_KATAKANA_FULL causes the player to use a full width font, whereas using ALPHANUMERIC_HALF or JAPANESE_KATAKANA_HALF uses a half width font.
   */
  class AST_IMEConversionMode {
    /**
     * [static] The string "ALPHANUMERIC_FULL", for use with the IME.conversionMode property.
     */
    static readonly ALPHANUMERIC_FULL: "ALPHANUMERIC_FULL";
    /**
     * [static] The string "ALPHANUMERIC_HALF", for use with the IME.conversionMode property.
     */
    static readonly ALPHANUMERIC_HALF: "ALPHANUMERIC_HALF";
    /**
     * [static] The string "CHINESE", for use with the IME.conversionMode property.
     */
    static readonly CHINESE: "CHINESE";
    /**
     * [static] The string "JAPANESE_HIRAGANA", for use with the IME.conversionMode property.
     */
    static readonly JAPANESE_HIRAGANA: "JAPANESE_HIRAGANA";
    /**
     * [static] The string "JAPANESE_KATAKANA_FULL", for use with the IME.conversionMode property.
     */
    static readonly JAPANESE_KATAKANA_FULL: "JAPANESE_KATAKANA_FULL";
    /**
     * [static] The string "JAPANESE_KATAKANA_HALF", for use with the IME.conversionMode property.
     */
    static readonly JAPANESE_KATAKANA_HALF: "JAPANESE_KATAKANA_HALF";
    /**
     * [static] The string "KOREAN", for use with the IME.conversionMode property.
     */
    static readonly KOREAN: "KOREAN";
    /**
     * [static] The string "UNKNOWN", for use with the IME.conversionMode property.
     */
    static readonly UNKNOWN: "UNKNOWN";
  }

}

export type {
  AST_IMEConversionMode
}