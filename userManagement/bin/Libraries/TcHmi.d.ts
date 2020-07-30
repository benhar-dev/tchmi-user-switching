declare module TcHmi {
    enum Errors {
        NONE = 0,
        ERROR = 1,
        E_PARAMETER_INVALID = 2,
        E_TIMEOUT = 3,
        E_EXCEPTION = 4,
        E_INVALID = 5,
        E_NOT_SUPPORTED = 100,
        E_NOT_ALLOWED = 110,
        E_UNKNOWN = 115,
        E_UNKNOWN_TYPE = 120,
        E_KEY_NOT_FOUND = 130,
        E_TYPE_INVALID = 150,
        E_VALUE_INVALID = 160,
        E_WEBSOCKET_NOT_READY = 1000,
        E_WEBSOCKET_CLOSED = 1001,
        E_WEBSOCKET_NOT_SUPPORTED = 1404,
        E_WEBSOCKET_OPEN_SERVER_LICENSE_CHECK_FAILED = 1500,
        E_WEBSOCKET_OPEN_SERVER_LICENSE_MISSING = 1501,
        E_WEBSOCKET_OPEN_SERVER_NO_ACCESS = 1502,
        E_SYMBOL_STATE_INVALID = 2000,
        E_SYMBOL_VALUE_INVALID = 2001,
        E_SYMBOL_RESOLVE_SCHEMA = 2002,
        E_SYMBOL_READONLY = 2003,
        E_SYMBOL_UNKNOWN = 2010,
        E_SYMBOL_INVALID_DATA_PROVIDER_ENTRY = 2020,
        E_SYMBOL_INVALID_PATH = 2030,
        E_SYMBOL_SUBSYMBOL_ERROR = 2040,
        E_SYMBOL_OBJECT_RESOLVE = 2050,
        E_SERVER_RESPONSE_ERROR = 3000,
        E_SERVER_COMMAND_ERROR = 3005,
        E_SERVER_INVALID_RESPONSE = 3010,
        E_SERVER_COMMANDS_MISSING = 3015,
        E_SERVER_COMMAND_MISSING = 3016,
        E_SERVER_READVALUE_MISSING = 3020,
        E_SERVER_WRITEVALUE_MISSING = 3025,
        E_SERVER_RESPONSE_MISSING = 3030,
        E_FUNCTION_MISSING_FUNCTION_REFERENCE = 4000,
        E_FUNCTION_MISSING_FUNCTION_DESCRIPTION = 4005,
        E_FUNCTION_INVALID_CONFIGURATION = 4010,
        E_FUNCTION_EXCEPTION = 4020,
        E_FUNCTION_UNKNOWN = 4030,
        E_FUNCTION_RESTPARAMETER_DEFINITION_MISSING = 4040,
        E_FUNCTION_RESOLVING_PARAMETER_FAILED = 4050,
        E_FUNCTION_EXPRESSION_PARSER_ERROR = 4100,
        E_FUNCTION_EXPRESSION_EXCEPTION = 4120,
        E_TRIGGER_ACTION_EXCEPTION = 5050,
        E_TRIGGER_JAVASCRIPT_EVAL_EXCEPTION = 5055,
        E_TRIGGER_FUNCTION_EXPRESSION_EXCEPTION = 5060,
        E_TRIGGER_RESOLVE_CONDITION_EXPRESSION_EXCEPTION = 5065,
        E_CONTROL_INSTANCE_NOT_FOUND = 6000,
        E_CONTROL_INVALID_CONFIGURATION = 6001,
        E_CONTROL_ATTRIBUTE_NOT_FOUND = 6005,
        E_CONTROL_ATTRIBUTE_INVALID_CONFIGURATION = 6010,
        E_SCHEMA_INVALID = 7000,
        E_SCHEMA_INVALID_PATH = 7010
    }
}
declare module TcHmi {
    class LoadingSpinner {
        constructor(host: JQuery, color?: TcHmi.SolidColor);
        setColor(color?: TcHmi.SolidColor): void;
        run(): void;
        stop(): void;
        destroy(): void;
    }
}
/**
* GlobalFunctions
*
* (c) BECKHOFF Automation GmbH & Co. KG 2017
* @ignore
*/
/**
* Encodes HTML
* @param {string} html The html to encode
* @return {string} The encoded representation of parameter html.
* @preserve (Part of the public API)
*/
declare function tchmi_encode_html(html: string): string;
/**
* Decodes HTML
* @param {string} text The text to decode
* @return {string} The decoded representation of parameter text.
"&#176;!\"&#167;$%&/()=?~#|&#233;&#232;€…™&#174;&#169;"
"°     !\"§     $%&/()=?~#|é     è     €…™®     ©"
 @preserve (Part of the public API)
*/
declare function tchmi_decode_html(text: string): string;
/**
* Converts formatted text to formatted html.
* @param {string} text The text which contains the formatting placeholders which shall be encoded.
* @return {string} The encoded representation of parameter text.
* @preserve (Part of the public API)
*/
declare function tchmi_text_to_html(text: string): string;
/**
* Decode base64 strings
* Attention: JS strings are UTF16!
* @param input
* @return {string} returns the String or null
* @preserve (Part of the public API)
*/
declare function tchmi_base64decode(input: string): string | null;
/**
* Encode base64 strings
* Attention: JS strings are UTF16!
* @param {string} input String to encode
* @return {string} returns the String or null
* @preserve (Part of the public API)
*/
declare function tchmi_base64encode(input: string): string | null;
/**
* Creates a Guid string.
* @return {string} Guid
* @preserve (Part of the public API)
*/
declare function tchmi_create_guid(): string;
/**
 * Compares 2 values for equality.
 * @param a Value 1
 * @param b Value 2
 * @param {boolean} typeSafe If set to "true" the comparison will return "false" if a {string} "1" is compared with {number} 1. If it is set to "false" the same comparison will return "true" because the value is rough equal.
 * @returns {boolean}
 * @preserve (Part of the public API)
 */
declare function tchmi_equal(a: any, b: any, typeSafe?: boolean): boolean;
/**
 * Clones the data {Object} in param obj and returns a clone of it.
 * Do not use this function to create clones of objects which contain functions or are based on a prototype definition!
 * String, null, undefined are returned directly as they are immutable / handled by value.
 * @function
 * @param {Object} obj The {Object} to clone.
 * @returns {Object} Clone of param obj.
 * @preserve (Part of the public API)
 */
declare function tchmi_clone_object<T>(obj: T): T;
/**
 * Unify a path {string}.
 * Replace all backslashes with slashes, replace multiple slashes with single slashes, remove leading slash
 * @param {string} path The path {string}
 * @return {string} Unified path {string}.
 */
declare function tchmi_path(path: string): string;
declare function tchmi_path<T>(path: T): T;
/**
* Converts a String to a valid CSS id pattern by escaping all reserved characters.
* @param {string} id The target id.
* @returns {string} Converted id.
* @preserve (Part of the public API)
*/
declare function tchmi_css_escape_selector(id: string): string;
/**
 * tchmi_escape_regex
 * @param {string} s
 * @returns {string}
 * @preserve (Part of the public API)
 */
declare function tchmi_escape_regex(s: string): string;
declare module TcHmi {
}
declare module TcHmi {
    /**
    * Allows converting of values from any type to any type if types are compatible.
    * @class ValueConverter
    * @memberOf TcHmi
    * @preserve (Part of the public API)
    */
    class ValueConverter {
        /**
        * @constructor
        */
        constructor();
        static AngleUnitList: {
            'deg': "deg";
            'rad': "rad";
            'turn': "turn";
            'grad': "grad";
        };
        static BorderStyleValueList: {
            'Solid': "Solid";
            'Dashed': "Dashed";
            'Dotted': "Dotted";
            'None': "None";
        };
        static DimensionUnitList: {
            'px': "px";
            '%': "%";
        };
        static FontSizeUnitList: {
            'px': "px";
            '%': "%";
            'em': "em";
            'rem': "rem";
        };
        static FontStyleList: {
            'Normal': "Normal";
            'Italic': "Italic";
            'Oblique': "Oblique";
            'Auto': "Auto";
        };
        static FontWeightList: {
            'Normal': "Normal";
            'Bold': "Bold";
            'Auto': "Auto";
        };
        static HorizontalAlignmentList: {
            'Left': "Left";
            'Center': "Center";
            'Right': "Right";
        };
        static ScaleModeStringList: {
            'None': "None";
            'ScaleToFill': "ScaleToFill";
            'ScaleToFit': "ScaleToFit";
            'ScaleToFitWidth': "ScaleToFitWidth";
            'ScaleToFitHeight': "ScaleToFitHeight";
        };
        static SizeModeList: {
            'Value': "Value";
            'Parent': "Parent";
        };
        static SizeModeWithContentList: {
            'Value': "Value";
            'Parent': "Parent";
            'Content': "Content";
        };
        static ToggleStateList: {
            'Normal': "Normal";
            'Active': "Active";
        };
        static VerticalAlignmentList: {
            'Top': "Top";
            'Center': "Center";
            'Bottom': "Bottom";
        };
        static VisibilityList: {
            'Visible': "Visible";
            'Hidden': "Hidden";
            'Collapsed': "Collapsed";
        };
        /**
         * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}.
         * No content check will be done!
         * @function toObject
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {Object|Array|null}
         * @preserve (Part of the public API)
         */
        static toObject<T extends object | undefined | null>(value: any): T | null;
        /**
         * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}.
         * No content check will be done!
         * @function toObject
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string|number|boolean|Object|Array} defaultValue The fallback value
         * @returns {Object|Array|null}
         * @preserve (Part of the public API)
         */
        static toObject<T extends object | undefined | null>(value: any, defaultValue: T): T;
        /**
         * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
         * @function toString
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to {string}.
         * @preserve (Part of the public API)
         */
        static toString(value: any | null | undefined): string | null;
        /**
         * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
         * @function toString
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible to string
         * @returns {string} returns the {string} or defaultValue if the type of value is not compatible to {string}.
         * @preserve (Part of the public API)
         */
        static toString(value: any | null | undefined, defaultValue: string): string;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toDimensionUnit(value: DimensionUnit | null): DimensionUnit | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toDimensionUnit(value: DimensionUnit | null, defaultValue: DimensionUnit): DimensionUnit;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toAngleUnit(value: AngleUnit | null): AngleUnit | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toAngleUnit(value: AngleUnit | null, defaultValue: AngleUnit): AngleUnit;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toBorderStyleValue(value: BorderStyleValue | null): BorderStyleValue | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toBorderStyleValue(value: BorderStyleValue | null, defaultValue: BorderStyleValue): BorderStyleValue;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontStyle(value: FontStyle | null): FontStyle | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontStyle(value: FontStyle | null, defaultValue: FontStyle): FontStyle;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontSizeUnit(value: FontSizeUnit | null): FontSizeUnit | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontSizeUnit(value: FontSizeUnit | null, defaultValue: FontSizeUnit): FontSizeUnit;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontWeight(value: FontWeight | null): FontWeight | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toFontWeight(value: FontWeight | null, defaultValue: FontWeight): FontWeight;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toHorizontalAlignment(value: HorizontalAlignment | null): HorizontalAlignment | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toHorizontalAlignment(value: HorizontalAlignment | null, defaultValue: HorizontalAlignment): HorizontalAlignment;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toScaleModeString(value: ScaleModeString | null): ScaleModeString | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toScaleModeString(value: ScaleModeString | null, defaultValue: ScaleModeString): ScaleModeString;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toSizeMode(value: SizeMode | null): SizeMode | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toSizeMode(value: SizeMode | null, defaultValue: SizeMode): SizeMode;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toSizeModeWithContent(value: SizeModeWithContent | null): SizeModeWithContent | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toSizeModeWithContent(value: SizeModeWithContent | null, defaultValue: SizeModeWithContent): SizeModeWithContent;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toVerticalAlignment(value: VerticalAlignment | null): VerticalAlignment | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toVerticalAlignment(value: VerticalAlignment | null, defaultValue: VerticalAlignment): VerticalAlignment;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toVisibility(value: Visibility | null): Visibility | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toVisibility(value: Visibility | null, defaultValue: Visibility): Visibility;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toToggleState(value: ToggleState | null): ToggleState | null;
        /**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to the enum.
         * @preserve (Part of the public API)
         */
        static toToggleState(value: ToggleState | null, defaultValue: ToggleState): ToggleState;
        /**
         * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {string} returns the {string} or null if the type of value is not compatible to string.
         * @preserve (Part of the public API)
         */
        static toFontFamily(value: FontFamily | null | undefined): FontFamily | null;
        /**
         * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}.
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns {string} returns the {string} or null if the type of value is not compatible to string.
         * @preserve (Part of the public API)
         */
        static toFontFamily(value: FontFamily | null | undefined, defaultValue: FontFamily): FontFamily;
        /**
         * Converts a value to {number}
         * @function toNumber
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {number} returns the {number} or null if the type of value is not compatible to {number}.
         * @preserve (Part of the public API)
         */
        static toNumber(value: any): number | null;
        /**
         * Converts a value to {number}
         * @function toNumber
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible to number (null if not given)
         * @returns {number} returns the {number} or the defaultValue if the type of value is not compatible to {number}.
         * @preserve (Part of the public API)
         */
        static toNumber(value: any, defaultValue: number): number;
        /**
         * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
         * @function toBoolean
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @returns {boolean}
         * @preserve (Part of the public API)
         */
        static toBoolean(value: any): boolean | null;
        /**
         * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
         * @function toBoolean
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value The value to convert.
         * @param {string} defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
         * @returns {boolean}
         * @preserve (Part of the public API)
         */
        static toBoolean(value: any, defaultValue: boolean): boolean;
        /**
         * Converts a value to enum {Object} and returns the enum {Object} or null if the type of value is not compatible to enum {Object}.
         * @function toEnum
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value  The value to convert.
         * @param {Object} enumType The enum {Object}.
         * @param {number} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns number
         * @preserve (Part of the public API)
         */
        static toEnum<T>(value: any, enumType: T): number | null;
        /**
         * Converts a value to enum {Object} and returns the enum {Object} or null if the type of value is not compatible to enum {Object}.
         * @function toEnum
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value  The value to convert.
         * @param {Object} enumType The enum {Object}.
         * @param {number} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns number
         * @preserve (Part of the public API)
         */
        static toEnum<T, D>(value: any, enumType: T, defaultValue: D): number | D;
        /**
         * Converts a value to enum {Object} and returns the enum {Object} or null if the type of value is not compatible to enum {Object}.
         * @function toEnum
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value  The value to convert.
         * @param {Object} enumType The enum {Object}.
         * @param {null} defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @returns number
         * @preserve (Part of the public API)
         */
        static toEnum<T, D>(value: any, enumType: T, defaultValue: null): null;
        /**
         *
         * @function toType
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value
         * @param {string} typeString
         * @returns {string|number|boolean|Object|Array}
         * @preserve (Part of the public API)
         */
        static toType(value: any, typeString: string): any | null;
        /**
         *
         * @function toType
         * @memberOf TcHmi.ValueConverter
         * @param {string|number|boolean|Object|Array} value
         * @param {Object} schema
         * @returns {string|number|boolean|Object|Array}
         * @preserve (Part of the public API)
         */
        static toSchemaType(value: any, schema: TcHmi.JsonSchema | null): any | null;
    }
}
/** Unique ID of this HMI Instance */
declare var TCHMI_DYNAMIC_INSTANCE_ID: string;
/** The timestamp in milliseconds based on JavaScript Date object when TcHmi.js file was initialy handled by the JavaScript interpreter. */
declare var TCHMI_DEBUG_TIME_LOAD_LIBRARY: number;
/** */
declare var TCHMI_ENABLE_DESIGNER_MODE_WEBSOCKET_URL: string;
/** True if the Designer is open for this file */
declare var TCHMI_ENABLE_DESIGNER_MODE: boolean;
/** True if this is the Master Designer View */
declare var TCHMI_ENABLE_DESIGNER_MODE_MASTER: boolean;
/** True if this is a Client Designer View / Live View */
declare var TCHMI_ENABLE_DESIGNER_MODE_SLAVE: boolean;
/**
 * True to enabled benchmark events.
 */
declare var TCHMI_BENCHMARK_MODE: boolean;
/** Fallback Config  */
declare var TCHMI_ENABLE_DESIGNER_MODE_FALLBACK_CONFIG_JSON: TcHmi.System.IConfigOverride | null;
/** Normalized Path of the main Partial which is loaded into the Designer */
declare var TCHMI_ENABLE_DESIGNER_MODE_TARGET_PARTIAL: string;
/**
 * 0: None
 * 1: Error
 * 2: Warning
 * 3: Info
 * 4: Debug
 */
declare var TCHMI_CONSOLE_LOG_LEVEL: TcHmi.System.LOG_LEVEL;
/** Activate Trace Log of Communication Messages between HMI and HMI Server */
declare var TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES: boolean;
/** Activate Trace Log of Communication Messages between Designer and Creator */
declare var TCHMI_CONSOLE_LOG_DESIGNER_MODE_COM_MESSAGES: boolean;
/** Does we run inside a unit test? */
declare var TCHMI_UNITTEST_MODE: boolean;
declare var TCHMI_EVENT_OPTION_OBJECT_SUPPORTED: boolean;
/**
 * Make all properties in T with optional null
 */
declare type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};
/**
 * @preserve (Part of the public API)
 */
declare module TcHmi {
    interface Context {
        success?: ((result?: any) => void);
        error?: ((error: TcHmi.Errors, details?: IErrorDetails) => void);
    }
    interface EventContext extends Context {
        name: string;
    }
    interface IErrorDetails {
        /** The error code. */
        code: TcHmi.Errors | number;
        /** The enum name of error code and not a plain-text message. Use reason for a plaintext description of the error. */
        message?: string;
        /** Plaintext description of the error. */
        reason?: string;
        /** The name of the server or framework domain where the error occured. */
        domain?: string;
        /** A list of errors which lead to the current error. */
        errors?: IErrorDetails[];
    }
    /** () => void */
    interface DestroyFunction {
        (): void;
    }
    type FontFamily = string;
    type AngleUnit = (typeof ValueConverter.AngleUnitList)[keyof typeof ValueConverter.AngleUnitList];
    type BorderStyleValue = (typeof ValueConverter.BorderStyleValueList)[keyof typeof ValueConverter.BorderStyleValueList];
    type DimensionUnit = (typeof ValueConverter.DimensionUnitList)[keyof typeof ValueConverter.DimensionUnitList];
    type FontSizeUnit = (typeof ValueConverter.FontSizeUnitList)[keyof typeof ValueConverter.FontSizeUnitList];
    type FontStyle = (typeof ValueConverter.FontStyleList)[keyof typeof ValueConverter.FontStyleList];
    type FontWeight = (typeof ValueConverter.FontWeightList)[keyof typeof ValueConverter.FontWeightList];
    type HorizontalAlignment = (typeof ValueConverter.HorizontalAlignmentList)[keyof typeof ValueConverter.HorizontalAlignmentList];
    type ScaleModeString = (typeof ValueConverter.ScaleModeStringList)[keyof typeof ValueConverter.ScaleModeStringList];
    type SizeMode = (typeof ValueConverter.SizeModeList)[keyof typeof ValueConverter.SizeModeList];
    type SizeModeWithContent = (typeof ValueConverter.SizeModeWithContentList)[keyof typeof ValueConverter.SizeModeWithContentList];
    type ToggleState = (typeof ValueConverter.ToggleStateList)[keyof typeof ValueConverter.ToggleStateList];
    type VerticalAlignment = (typeof ValueConverter.VerticalAlignmentList)[keyof typeof ValueConverter.VerticalAlignmentList];
    /** Hidden still uses space in fluid calculations, collapsed is ignored there.*/
    type Visibility = (typeof ValueConverter.VisibilityList)[keyof typeof ValueConverter.VisibilityList];
    interface Version {
        full: string;
        major: number;
        minor: number;
        build: number;
        revision: number;
    }
    interface IResultObject {
        error: Errors;
        details?: IErrorDetails;
    }
    interface baseColor {
    }
    type Color = SolidColor | LinearGradientColor;
    interface SolidColor extends baseColor {
        color: string;
    }
    /**
     * Checks if the parameter is a TcHmi.SolidColor
     * @param {Color | null} checkColor
     * @returns {boolean}
     */
    function isSolidColor(checkColor: Color | null | undefined): checkColor is SolidColor;
    interface LinearGradientColor extends baseColor {
        angle: number | string;
        stopPoints: StopPoint[];
    }
    /**
     * Checks if the parameter is a TcHmi.LinearGradientColor
     * @param {Color | null} checkColor
     * @returns {boolean}
     */
    function isLinearGradientColor(checkColor: Color | null | undefined): checkColor is LinearGradientColor;
    interface StopPoint {
        color: string;
        stop?: string;
    }
    interface RGBAColor {
        r: number;
        g: number;
        b: number;
        a: number;
    }
    interface baseFourSidedCss {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }
    interface FourSidedCss extends baseFourSidedCss {
        leftUnit?: DimensionUnit;
        topUnit?: DimensionUnit;
        rightUnit?: DimensionUnit;
        bottomUnit?: DimensionUnit;
    }
    interface BorderWidth extends baseFourSidedCss {
        leftUnit?: 'px';
        topUnit?: 'px';
        rightUnit?: 'px';
        bottomUnit?: 'px';
    }
    interface BorderStyle {
        left: BorderStyleValue;
        top: BorderStyleValue;
        right: BorderStyleValue;
        bottom: BorderStyleValue;
    }
    interface BorderRadius {
        topLeft: number;
        topLeftUnit?: DimensionUnit;
        topRight: number;
        topRightUnit?: DimensionUnit;
        bottomRight: number;
        bottomRightUnit?: DimensionUnit;
        bottomLeft: number;
        bottomLeftUnit?: DimensionUnit;
    }
    interface BoxShadow {
        /** Color of this Box Shadow */
        color: SolidColor | null;
        /** The Shadow Offset */
        offsetX?: number | null;
        offsetXUnit?: DimensionUnit;
        /** The Shadow Offset */
        offsetY?: number | null;
        offsetYUnit?: DimensionUnit;
        /** Inset shadows are drawn inside the border (even transparent ones), above the background, but below content. */
        inset?: boolean;
        /** The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. */
        blur?: number | null;
        blurUnit?: DimensionUnit;
        /** Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. */
        spread?: number | null;
        spreadUnit?: DimensionUnit;
    }
    interface Background {
        color: Color | null;
        image: string | null;
        imageWidth: number | null;
        imageWidthUnit: DimensionUnit;
        imageHeight: number | null;
        imageHeightUnit: DimensionUnit;
        imageHorizontalAlignment: HorizontalAlignment;
        imageVerticalAlignment: VerticalAlignment;
        imagePadding: FourSidedCss | null;
    }
    /**
     * Checks if the parameter is a TcHmi.Background
     * @param {object} background
     * @returns {boolean}
     * @preserve (Part of the public API)
     */
    function isBackground(background: any): background is Background;
    /**
     * The base transform interface. All transform operations must extend this interface and set transformType accordingly.
     */
    interface baseTransform {
        /**
         * Specifies which type of transform should be performed.
         * Currently supported values: Translate, Rotate, Scale, Skew, Origin, Perspective.
         */
        transformType: string;
    }
    type Transform = Translate | Rotate | Scale | Skew | Origin | Perspective;
    /**
     * Translate an element. transformType must be "Translate".
     */
    interface Translate extends baseTransform {
        transformType: 'Translate';
        /**
         * Translate in x axis direction. Defaults to 0 if not provided.
         */
        x?: number;
        /**
         * The unit to use for the translation in x axis direction. Supported values: px, %. Defaults to px if not provided.
         */
        xUnit?: DimensionUnit;
        /**
         * Translate in y axis direction. Defaults to 0 if not provided.
         */
        y?: number;
        /**
         * The unit to use for the translation in y axis direction. Supported values: px, %. Defaults to px if not provided.
         */
        yUnit?: DimensionUnit;
        /**
         * Translate in z axis direction. Defaults to 0 if not provided.
         */
        z?: number;
        /**
         * The unit to use for the translation in z axis direction. Supported values: px, %. Defaults to px if not provided.
         */
        zUnit?: DimensionUnit;
    }
    /**
     * Checks if the parameter is a TcHmi.checkTransform
     * @param {Transform | null} checkTransform
     * @returns {boolean}
     * @preserve (Part of the public API)
     */
    function isTranslate(checkTransform: Transform | null): checkTransform is Translate;
    /**
     * Rotate an element. transformType must be "Rotate".
     */
    interface Rotate extends baseTransform {
        transformType: 'Rotate';
        /**
         * The angle to rotate the element.
         */
        angle: number;
        /**
         * The unit to use for the rotation. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
         */
        angleUnit?: AngleUnit;
        /**
         * The vector to rotate around. Defaults to { x: 0, y: 0, z: 1} if not provided.
         */
        vector?: {
            x: number;
            y: number;
            z: number;
        };
    }
    /**
     * Checks if the parameter is a TcHmi.Rotate
     * @param {Transform | null} checkTransform
     * @returns {boolean}
     * @preserve (Part of the public API)
     */
    function isRotate(checkTransform: Transform | null): checkTransform is Rotate;
    /**
     * Scale an element. transformType must be "Scale".
     */
    interface Scale extends baseTransform {
        transformType: 'Scale';
        /**
         * Scale in x axis direction. Defaults to 1 if not provided.
         */
        x?: number;
        /**
         * Scale in y axis direction. Defaults to 1 if not provided.
         */
        y?: number;
        /**
         * Scale in z axis direction. Defaults to 1 if not provided.
         */
        z?: number;
    }
    /**
     * Checks if the parameter is a TcHmi.Scale
     * @param {Transform | null} checkTransform
     * @returns {boolean}
     * @preserve (Part of the public API)
     */
    function isScale(checkTransform: Transform | null): checkTransform is Scale;
    /**
     * Skew an element. transformType must be "Skew".
     */
    interface Skew extends baseTransform {
        transformType: 'Skew';
        /**
         * Skew x axis. Defaults to 0 if not provided.
         */
        xAngle?: number;
        /**
         * The unit to use for the x axis skew. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
         */
        xAngleUnit?: AngleUnit;
        /**
         * Skew y axis. Defaults to 0 if not provided.
         */
        yAngle?: number;
        /**
         * The unit to use for the y axis skew. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
         */
        yAngleUnit?: AngleUnit;
    }
    /**
     * Checks if the parameter is a TcHmi.Skew
     * @param {Transform | null} checkTransform
     * @returns {boolean}
     * @preserve (Part of the public API)
     */
    function isSkew(checkTransform: Transform | null): checkTransform is Skew;
    /**
     * Set the origin of transforms for an element. Should be only used once per transform list. If multiple origins are specified only the last one is used.
     * transformType must be "Origin".
     */
    interface Origin extends baseTransform {
        transformType: 'Origin';
        /**
         * The transform origin x coordinate. Defaults to 50 if not provided. If this and xUnit are not provided, xUnit will default to % to center the origin on the element.
         */
        x?: number;
        /**
         * The unit of the transform origin x coordinate. Defaults to % if x is not provided. Otherwise defaults to px.
         */
        xUnit?: TcHmi.DimensionUnit;
        /**
         * The transform origin y coordinate. Defaults to 50 if not provided. If this and yUnit are not provided, yUnit will default to % to center the origin on the element.
         */
        y?: number;
        /**
         * The unit of the transform origin y coordinate. Defaults to % if y is not provided. Otherwise defaults to px.
         */
        yUnit?: TcHmi.DimensionUnit;
        /**
         * The transform origin z coordinate. Defaults to 0 if not provided.
         */
        z?: number;
        /**
         * The unit of the transform origin z coordinate. Defaults to px if not provided.
         */
        zUnit?: TcHmi.DimensionUnit;
    }
    /**
     * Checks if the parameter is a TcHmi.Origin
     * @param {Transform | null} checkTransform
     * @returns {boolean}
     * @preserve (Part of the public API)
     */
    function isOrigin(checkTransform: Transform | null): checkTransform is Origin;
    /**
     * Sets the perspective for 3D transforms on an element. Should be only used once per transform list. If multiple perspectives are specified only the last one is used.
     * transformType must be "Perspective".
     */
    interface Perspective extends baseTransform {
        transformType: 'Perspective';
        /**
         * The distance to use for the perspective. Visualize this as the distance between the user and the transformed element. The shorter the distance, the extremer the transforms appear.
         */
        distance: number;
        /**
         * The unit of the distance. Supported values: px, %. Defaults to px if not provided.
         */
        distanceUnit?: TcHmi.DimensionUnit;
        /**
         * The origin of the perspective. Default behaviour is the same as transform origin.
         */
        origin?: {
            x?: number;
            xUnit?: TcHmi.DimensionUnit;
            y?: number;
            yUnit?: TcHmi.DimensionUnit;
        };
    }
    /**
     * Checks if the parameter is a TcHmi.Perspective
     * @param {Transform | null} checkTransform
     * @returns {boolean}
     * @preserve (Part of the public API)
     */
    function isPerspective(checkTransform: Transform | null): checkTransform is Perspective;
    /**
        Key/Value pair in an plain JS Object
    */
    interface Dictionary<T> {
        [index: string]: T | undefined;
    }
    interface IFunction {
        objectType: 'Function';
        /** Should function be active? */
        active?: boolean;
        /** Registered name of the Function. */
        fn: string;
        fnParams: IFunction.Value[];
    }
    module IFunction {
        /**
        *
        */
        interface baseValue {
        }
        type Value = StaticValue | Symbol | EventDataObject | FunctionExpression;
        interface StaticValue extends baseValue {
            objectType: 'StaticValue';
            /** Contains a value based on the defined valuetype. A value can be a string, number, boolean, array or an object. */
            value: any;
            /** Defines the ValueType which is used in TcHmiCreator to handle special format values like Path, PartialPath, Control etc. */
            valueType: string;
        }
        /**
         * Function Parser Type Guard which checks 'objectType' of Value
         * @param thisValue
         */
        function isStaticValue(thisValue: Value): thisValue is StaticValue;
        interface Symbol extends baseValue {
            objectType: 'Symbol';
            /** A tchmi binding symbol expression string. Example: "%s%ADS::test1%s%" */
            symbolExpression: string;
        }
        /**
         * Function Parser  Type Guard which checks 'objectType' of Value
         * @param thisValue
         */
        function isSymbol(thisValue: Value): thisValue is Symbol;
        interface EventDataObject extends baseValue {
            objectType: 'EventDataObject';
            /** The name of the prooperty of the event object. */
            propertyPath: string;
        }
        /**
         * Function Parser Type Guard which checks 'objectType' of Value
         * @param thisValue
         */
        function isEventDataObject(thisValue: Value): thisValue is EventDataObject;
        interface FunctionExpression extends baseValue {
            objectType: 'FunctionExpression';
            functionExpression: string;
        }
        /**
         * Function Parser  Type Guard which checks 'objectType' of Value
         * @param thisValue
         */
        function isFunctionExpression(thisValue: Value): thisValue is FunctionExpression;
    }
    /**
   JSON Schema defines a JSON based format for defining the structure of JSON data.
   */
    interface JsonSchema {
        $ref?: string;
        /**
         * This is important because it tells refs where
         * the root of the document is located
         */
        id?: string;
        /**
         * It is recommended that the meta-schema is
         * included in the root of any JSON Schema
         */
        $schema?: string;
        /**
         * Title of the schema
         */
        title?: string;
        /**
         * Schema description
         */
        description?: string;
        /**
         * Default json for the object represented by
         * this schema
         */
        'default'?: any;
        /**
         * The value must be a multiple of the number
         * (e.g. 10 is a multiple of 5)
         */
        multipleOf?: number;
        maximum?: number;
        /**
         * If true maximum must be > value, >= otherwise
         */
        exclusiveMaximum?: boolean;
        minimum?: number;
        /**
         * If true minimum must be < value, <= otherwise
         */
        exclusiveMinimum?: boolean;
        maxLength?: number;
        minLength?: number;
        /**
         * This is a regex string that the value must
         * conform to
         */
        pattern?: string;
        additionalItems?: boolean | JsonSchema;
        items?: JsonSchema | JsonSchema[];
        maxItems?: number;
        minItems?: number;
        uniqueItems?: boolean;
        maxProperties?: number;
        minProperties?: number;
        required?: string[];
        additionalProperties?: boolean | JsonSchema;
        /**
         * Holds simple JSON Schema definitions for
         * referencing from elsewhere.
         */
        definitions?: {
            [key: string]: JsonSchema;
        };
        /**
         * The keys that can exist on the object with the
         * json schema that should validate their value
         */
        properties?: {
            [property: string]: JsonSchema;
        };
        /**
         * The key of this object is a regex for which
         * properties the schema applies to
         */
        patternProperties?: {
            [pattern: string]: JsonSchema;
        };
        /**
         * If the key is present as a property then the
         * string of properties must also be present.
         * If the value is a JSON Schema then it must
         * also be valid for the object if the key is
         * present.
         */
        dependencies?: {
            [key: string]: JsonSchema | string[];
        };
        /**
         * Enumerates the values that this schema can be
         * e.g.
         * {"type": "string",
           *  "enum": ["red", "green", "blue"]}
         */
        'enum'?: any[];
        /**
         * The basic type of this schema, can be one of
         * [string, number, object, array, boolean, null]
         * or an array of the acceptable types
         */
        type?: jsonDataTypeNames | jsonDataTypeNames[];
        allOf?: JsonSchema[];
        anyOf?: JsonSchema[];
        oneOf?: JsonSchema[];
        /**
         * The entity being validated must not match this schema
         */
        not?: JsonSchema;
        /**
        * Custom framework related extension to describe an instanceof class while type is 'object'.
        * See tchmi:framework#/definitions/Symbol for further information.
        */
        frameworkInstanceOf?: string;
        /**
        * If frameworkInstanceOf relates to TcHmi.Symbol frameworkSymbolSubType will contain the excpected value type of the symbol.
        */
        frameworkSymbolSubType?: JsonSchema;
        /**
         * If frameworkInstanceOf relates to TcHmi.Controls.System.TcHmiControl frameworkControlType will contain the excpected value type of the control.
         */
        frameworkControlType?: string;
        /**
        * Reserved declaration for use in next minor version, which will allow control names to exist in multiple namespaces.
        */
        frameworkUserControlConfig?: string;
    }
    type jsonDataTypeNames = 'string' | 'number' | 'object' | 'array' | 'boolean' | 'null' | 'integer';
    /**
        One rule for a right corresponding to a group

    example:
    [
        {
          "accessright": "operate",
          "group": "Admins",
          "permission": "Allow"
        },
        {
          "accessright" : "observe",
          "group" : "Users",
          "permission": "Allow"
        }
    ]
    */
    interface AccessControl {
        /** Right which this rule defines */
        accessright: string;
        /** Group which this accessright is given */
        group: string;
        /** Permission for this accessright rule */
        permission: 'Allow' | 'Deny' | 'Inherit';
    }
    /**
        Allows a mapping of virtual rights to real rights.
        example:
        [{
            "virtualControlRight": "deleteRecipy",
            "controlRight": "operate"
        },
        {
            "virtualControlRight": "addRecipy",
            "controlRight": "operate"
        }]
    */
    interface VirtualControlRightMapping {
        /** 'outer' configured right */
        virtualControlRight: string;
        /** 'inner' working right */
        controlRight: string;
    }
    /**
     * Endianness dictates the order in which the bytes encoding a number are stored.
     * Little Endian stores the least significant byte first, for example the number 41394 (Hex: 0xA1B2) will be stored as [0xB2, 0xA1].
     * Big Endian stores the most significant byte first, for example the number 41394 (Hex: 0xA1B2) will be stored as [0xA1, 0xB2].
     */
    enum Endianness {
        LittleEndian = 0,
        BigEndian = 1
    }
    interface Filter extends Array<Comparison | LogicOperator | Filter> {
    }
    interface Comparison {
        path?: string;
        comparator: '==' | '!=' | '<' | '>' | '<=' | '>=' | 'contains' | 'contains not' | '== [ignore case]' | '!= [ignore case]' | 'contains [ignore case]' | 'contains not [ignore case]';
        value: string | number | Date | boolean;
    }
    function isComparison(candidate: any): candidate is Comparison;
    interface LogicOperator {
        logic: 'AND' | 'OR';
    }
    function isLogicOperator(candidate: any): candidate is LogicOperator;
    /** */
    enum PartialType {
        Invalid = 0,
        View = 1,
        Content = 2,
        UserControl = 3
    }
}
declare module TcHmi {
    module System {
        /**
        * Defines tchmiconfig.json
        */
        interface IConfig {
            /** Path to the Framework Directory. */
            basePath: string;
            /** Scalemode of the full Application. */
            scaleMode: ScaleModeString;
            /** Name of the View which is active while loading the Application. */
            startupView: string;
            /** Path to a custom login page. */
            loginPage?: string;
            /** Theme independent styles */
            dependencyFiles?: StylesheetFileDescription[];
            /** Name of the Theme which is active while loading the Application. */
            activeTheme: string;
            /** List of Themes of this Application. */
            themes: Dictionary<ProjectThemeDescription>;
            /** Configuration of the Server Communication. */
            tcHmiServer: {
                /** Default for Interval time. */
                websocketIntervalTime?: number;
                /** Default Timeout. */
                websocketTimeout?: number;
                /** Default symbol subscription mode. */
                websocketSubscriptionMode?: 'Change' | 'Poll';
            };
            symbols: ISymbolConfig;
            /** Definition of global Triggers. */
            trigger: Trigger[];
            /** List of all available view files. */
            views: IView[];
            /** List of all available user function files. */
            userFunctions: IUserFunction[];
            /** List of all available Usercontrols. */
            userControls: IUserControl[];
            /** List of all available content files. */
            content: IContent[];
            /** Definition of all available actionTemplates. */
            actionTemplates: ActionTemplate[];
            /** List of all available localization files. */
            languages: ILanguageFileMap;
            /** Definition of engineering settings. */
            creatorSettings: {
                /** Definition of the viewport emulation. */
                viewport: {
                    /** Width as a Pixel Number. */
                    defaultWidth: number;
                    /** Height as a Pixel Number. */
                    defaultHeight: number;
                };
            };
        }
        /** Only used in designer master */
        interface IConfigOverride {
            basePath?: string;
            tcHmiServer?: {
                websocketIntervalTime?: number;
                websocketOverwrite?: {
                    host?: string;
                    port?: number;
                };
            };
        }
        interface ILanguageFileMap extends Dictionary<string> {
        }
        interface ISymbolConfig {
            internal: {
                [symbolname: string]: IInternalSymbolItem;
            };
        }
        interface IInternalSymbolItem {
            value: any;
            /** Information about the expected type as a tchmi reference name */
            type: string;
            persist?: boolean;
            readonly?: boolean;
        }
        /**
        * Defines every <LangugageCode>.localization
        */
        interface ILocalization {
            /** Definition of this Language and Region as in ISO 639/BCP 47 with '-' separator. */
            locale: string;
            /** List of localized Text. */
            localizedText: ILocalizedTextMap;
        }
        interface ILocalizedTextMap {
            [key: string]: string;
        }
        /**
        * Defines every <UserControl>.usercontrol.json
        */
        interface UserControlConfig {
            parameters: ControlAttributeDescription[];
            /** A list of virtual rights. */
            virtualRights?: ControlAccessDescription[];
        }
        /**
        *  Defines Function
        */
        interface IFunctionDescription {
            version: Version;
            dependencyFiles: JavaScriptFileDescription[];
            function: IFunction;
            dataTypes?: DataTypeDescription[];
        }
        /**
        *  Defines all Controls
        */
        interface ControlDescription {
            /** control class name */
            name: string;
            classNamespace: string;
            className: string;
            /** Name which should be presented the user. */
            displayName?: string;
            version: Version;
            /** Determine if an control is shown to the user. */
            visible: boolean;
            /** Determine if the control can be changed by a theme. Defaults to standard. */
            themeable: 'None' | 'Standard' | 'Advanced';
            /** Inheritance parent. */
            base: string;
            category: string;
            displayPriority?: number;
            heritable: boolean;
            /** A long description of this control. */
            description: string;
            /** The event which is manipulated on double click in designer. */
            defaultDesignerEvent?: string;
            properties: {
                /** Can contain other controls. */
                containerControl: boolean;
                /** Default size of control after instanciation */
                geometry: {
                    width: number;
                    height: number;
                };
            };
            icons: IconDescription[];
            /** Files the creator includes in our HTML */
            dependencyFiles: (JavaScriptFileDescription | StylesheetFileDescription)[];
            /** Files the framework fetches potentially */
            themes?: Dictionary<ControlThemeDescription>;
            /** A list of attributes of this control. */
            attributes: ControlAttributeDescription[];
            /** Resources of the control. */
            themedResources: ControlResourceDescription[];
            /** A list of Getter, Setter and API Functions of this Control. */
            functions?: ControlFunction[];
            attributeCategories?: {
                name: string;
                displayPriority: number;
                defaultCollapsed?: boolean;
                description: string;
            }[];
            access?: ControlAccessDescription[];
            /** A list of events associated to this control. */
            events?: ControlEventDescription[];
            /** List of custom data types. */
            dataTypes?: DataTypeDescription[];
        }
        /**
        *  ControlDescription with resolved Inheritance
        */
        interface ControlDescriptionWithInheritance extends ControlDescription {
            inheritedTypes?: string[];
            inheritedAttributes?: ControlAttributeDescriptionWithInheritance[];
            /** lowercase name based map */
            inheritedAttributesNameMap?: Map<string, ControlAttributeDescriptionWithInheritance>;
            /** lowercase PropertyName based map */
            inheritedAttributesPropertyNameMap?: Map<string, ControlAttributeDescriptionWithInheritance>;
            /** lowercase PropertyGetterName based map */
            inheritedAttributesPropertyGetterNameMap?: Map<string, ControlAttributeDescriptionWithInheritance>;
            /** lowercase PropertySetterName based map */
            inheritedAttributesPropertySetterNameMap?: Map<string, ControlAttributeDescriptionWithInheritance>;
            inheritedAccess?: ControlAccessDescription[];
            inheritedEvents?: any[];
            inheritedFunctions?: any[];
        }
        interface FrameworkDescription {
            version: Version;
            dependencyFiles: (JavaScriptFileDescription | StylesheetFileDescription)[];
            events: FrameworkEventDescription[];
            dataTypes: DataTypeDescription[];
        }
        interface IconDescription {
            name: string;
            width: number;
            height: number;
        }
        interface baseThemeDescription {
            /** References to Resources of this Theme. */
            resources: (ThemedValuesFileDescription | StylesheetFileDescription)[];
        }
        interface ControlThemeDescription extends baseThemeDescription {
        }
        interface ProjectThemeDescription extends baseThemeDescription {
            /** Do not load theme files (.theme and .css) for this controls */
            replacesThemeForControls?: string[];
        }
        interface baseDependencyFileDescription {
            /** Path to the file */
            name: string;
            /** A long description of this file. */
            description?: string;
        }
        /** project Description.json#DependencyFile and function IFunctionDescription#DependencyFile section */
        interface JavaScriptFileDescription extends baseDependencyFileDescription {
            /** Type of the control asset. */
            type: 'JavaScript';
        }
        /**
        control Description.json#dependencyFiles
        tchmiconfig.json#dependencyFiles
        */
        interface StylesheetFileDescription extends baseDependencyFileDescription {
            /** Type of the control asset. */
            type: 'Stylesheet';
        }
        /**
        control Description.json#themeFiles
        tchmiconfig.json#dependencyFiles
        */
        interface ThemedValuesFileDescription extends baseDependencyFileDescription {
            /** Type of the control asset. */
            type: 'ThemedValues';
        }
        interface ControlAttributeDescription {
            /** Name of the attribute in the HTML. */
            name: string;
            /** Name of the attribute property. */
            propertyName: string;
            /** Name of the attribute property setter. */
            propertySetterName: string;
            /** Name of the attribute property getter. */
            propertyGetterName: string;
            /** Reference to a corresponding other propertyName */
            refTo?: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** Determine if an attribute is shown to the user. */
            visible: boolean;
            /** Determine if the attribute can be changed by a theme. Defaults to standard. */
            themeable: 'None' | 'Standard' | 'Advanced';
            /** Information about the expected type as a tchmi reference name */
            type: string;
            /** Name of the area this attribute will be listed in the creator. */
            category: string;
            /** Display priority of the Attribute */
            displayPriority?: number;
            /** A long description of this attribute. */
            description: string;
            /** This property was defined but not enforced till 1.10 and therefor wrong used by many controls @deprecated */
            required?: boolean;
            /** The attribute has to be set in the HTML. Otherwise the control is not valid. */
            requiredOnCompile?: boolean;
            /** Readonly attributes do not need a setter. */
            readOnly: boolean;
            /** A definition of functions which are allowed to use here. The functions must match the requiredArguments signature. */
            allowedFunctions?: {
                /** The type of the attribute gives the tchmi creator a hint to use a custom editor for this attribute. */
                returnType: string | null;
                requiredArguments: {
                    /** Information about the expected type as a tchmi reference name */
                    type: string;
                }[];
                requiredWaitMode: 'Synchronous' | 'Asynchronous';
            };
            /** Defines if this is bindable to a Symbol. */
            bindable: boolean;
            /** Defines if heritable. */
            heritable: boolean;
            /** This value will be used as sample value while control is generated in engineering. */
            defaultValue: any;
            /** This value is the internal default value of the attribute if no valid value exists. */
            defaultValueInternal: any;
        }
        interface ControlAttributeDescriptionWithInheritance extends ControlAttributeDescription {
            /** inherited from */
            inheritControl?: string;
        }
        interface ControlResourceDescription {
            /** Name of the resource. */
            name: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** A long description of this resource. */
            description?: string;
            /** The type of the resource gives the tchmi creator a hint to use a custom editor for this attribute.\nThe corresponding schemas are described as dataTypes. */
            type: string;
        }
        interface ThemeFile {
            /** Dictionary of control type attribute values in this file. */
            controlTypeValues?: Dictionary<AttributeValue>;
            /** Dictionary of class attribute values in this file. */
            controlClassValues?: Dictionary<AttributeValue>;
        }
        interface AttributeValue {
            /** Value of the TcHmi attribute. */
            attributes?: Dictionary<any>;
            /** Value of the resource. */
            themedResources?: Dictionary<any> | null;
        }
        interface ControlFunction {
            /** Internal name of function. */
            name: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** Determine if a function is shown to the user. */
            visible: boolean;
            /** A long description of this function. */
            description: string;
            category: string;
            params: {
                name: string;
                displayName?: string;
                description: string;
                /** Information about the expected type as a tchmi reference name */
                type: string;
                visible: boolean;
            }[];
            /** Information about the expected type as a tchmi reference name */
            type?: string | null;
            heritable: boolean;
        }
        interface IFunction {
            name: string;
            displayName?: string;
            description: string;
            category: string;
            visible: boolean;
            injectContextObject?: boolean;
            waitMode?: 'Synchronous' | 'Asynchronous';
            returnValue?: {
                /** Information about the expected type as a tchmi reference name */
                type: string;
                description?: string;
            } | null;
            arguments: IFunctionArgument[];
        }
        interface IFunctionArgument {
            name: string;
            displayName?: string;
            /** Information about the expected type as a tchmi reference name */
            type: string;
            description: string;
            required: boolean;
            bindable: boolean;
            defaultValue?: any;
            restParameter?: boolean;
        }
        interface ControlAccessDescription {
            /** Name of the access definition in the HTML. */
            name: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** A long description of this access definition. */
            description: string;
            /** Determine if an access definition is shown to the user. */
            visible: boolean;
            /** Defines the default of this control access right. This will be used if the check for this access right does not return a result. */
            defaultValueInternal: boolean | null;
        }
        interface baseEventDescription {
            /** Internal name of the event. */
            name: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** A long description of this event. */
            description: string;
            /** The event can have the option preventDefault. */
            allowsPreventDefault?: boolean;
        }
        interface FrameworkEventDescription extends baseEventDescription {
            /** category of this event */
            category: 'Framework';
        }
        interface ControlEventDescription extends baseEventDescription {
            /** Determine if an event is shown to the user. */
            visible: boolean;
            heritable: boolean;
            /** category of this event */
            category: 'Operator' | 'Control' | 'Framework';
            /** An optional display priority of the event. Most users will only use events with a low number.\nEvents without this value are very rare used.
                10 is load, unload, pressed. 15 are major interaction events like click, right click, double click. 50 are enter, leave, mousedown, mouseup.
            */
            displayPriority?: number;
        }
        /** List of custom data types. */
        interface DataTypeDescription {
            /** Name of the datatype. */
            name: string;
            /** Path to the schema describing the datatype. */
            schema: string;
        }
        interface IUserFunction {
            /** Path to the user function js file. */
            url: string;
        }
        interface IPartial {
            /** Path to the Partial main file. */
            url: string;
        }
        interface IView extends IPartial {
            /** Defines if the file should be loaded before usage to accelerate later usage. */
            preload: boolean;
        }
        interface IContent extends IPartial {
            /** Defines if the file should be loaded before usage to accelerate later usage. */
            preload: boolean;
        }
        interface IUserControl extends IPartial {
        }
        interface ActionTemplate {
            /** Name of the Action Template. */
            name: string;
            category: string;
            actions: Trigger.Action[];
            parameters: TemplateParameter[];
        }
        interface TemplateParameter {
            name: string;
            /** Information about the expected type as a tchmi reference name */
            type: string;
            description: string;
            structDataType: any;
        }
        const enum LOG_LEVEL {
            None = 0,
            Error = 1,
            Warning = 2,
            Info = 3,
            Debug = 4
        }
        interface IServicesErrorResultObject extends IResultObject {
            servicesName: string;
            dialogManagerMessage: string;
        }
        interface IManifest {
            $schema: string;
            metadata: {
                industrialField: string;
                packageType: 'FrameworkExtPrj';
                packageSubType: 'Framework' | 'Control' | 'Function' | 'ExternalJavaScript';
                packageRelativePath: string;
                packageNamespace: 'System' | 'Beckhoff' | 'Custom';
                id: string;
                version: string;
                guid: string;
                configurationName: string;
                platformName: string;
                creationTime: number;
                authors: string;
                owners: string;
                summary: string;
                licenseUrl: string;
                projectUrl: string;
                iconUrl: string;
                requireLicenseAcceptance: boolean;
                description: string;
                releaseNotes: string;
                copyright: string;
                tags: string;
                dependencies: {
                    id: string;
                    guid: string;
                }[];
                references: any[];
            };
            files: any[];
            symbols: any[];
            flags: {};
            fileformat: 1;
        }
    }
}
declare module TcHmi {
    /**
     *
     * @preserve (Part of the public API)
     */
    module Log {
        /**
        * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
        * If the message is an object it will be inspectable in most debug tools
        * @function
        * @param {string | object} message The text which will be printed out in the browsers console.
        * @preserve (Part of the public API)
        */
        function error(message: string | object, forceNoPrefix?: boolean): void;
        /**
        * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
        * If the message is an object it will be inspectable in most debug tools
        * @function
        * @param {string | object} message The text which will be printed out in the browsers console
        * @preserve (Part of the public API)
        */
        function warn(message: string | object, forceNoPrefix?: boolean): void;
        /**
        * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
        * If the message is an object it will be inspectable in most debug tools
        * @function
        * @param {string | object} message The text which will be printed out in the browsers console
        * @preserve (Part of the public API)
        */
        function info(message: string | object, forceNoPrefix?: boolean): void;
        /**
        * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
        * If the message is an object it will be inspectable in most debug tools
        * @function
        * @param {string | object} message The text which will be printed out in the browsers console.
        * @preserve (Part of the public API)
        */
        function debug(message: string | object | null, forceNoPrefix?: boolean): void;
        /**
         * Starts a new Timer for Performance Analysis and stops the current Timer
         * Is also responsible for console grouping
         * @param timerName Human readable name of the starting Timer
         */
        function performanceLog(timerName: string | '[Source=Framework, Module=TcHmi] End'): void;
        /**
         * Builds a formatted message of hierarchical error objects
         * @param {TcHmi.IErrorDetails} error
         * @preserve (Part of the public API)
         */
        function buildMessage(error: TcHmi.IErrorDetails | undefined): string;
    }
}
declare module TcHmi {
    class List<T> extends Array<T> {
        constructor();
        first(predicate: ($: T) => boolean): T;
        firstOrDefault(predicate: ($: T) => boolean, defaultValue?: T): T;
        remove(item: T): boolean;
        addRange(items: T[]): void;
        clearAll(): void;
        findIndex(predicate: ($: T, index: number, obj: T[]) => boolean): number;
    }
}
declare module TcHmi {
    module Engineering {
        class ErrorPane {
            static add(name: string, content: string, type: TcHmi.Engineering.ErrorPane.MessageType): void;
            static remove(name: string): void;
        }
        module ErrorPane {
            interface Message {
                identifier: string;
                type: ErrorPane.MessageType;
                content: string;
            }
            enum MessageType {
                Message = 0,
                Error = 1,
                Warning = 2,
                Information = 3
            }
        }
    }
}
declare module TcHmi {
    module System {
        /**
        * @enum ControlAttributeType
        */
        enum ControlAttributeType {
            Invalid = 0,
            General = 1,
            Control = 2,
            UserControlParameter = 3
        }
        /**
        * @enum ControlAttributeValueType
        */
        enum ControlAttributeValueType {
            Invalid = 0,
            Simple = 1,
            Complex = 2
        }
        /**
        *
        */
        interface ControlAttribute {
            name: string;
            value: any;
            valueType: ControlAttributeValueType;
            type: ControlAttributeType;
            descr: ControlAttributeDescription | null;
        }
        interface ControlHierarchy {
            ctrl: TcHmi.Controls.System.baseTcHmiControl;
            children_hierarchy: ControlHierarchy[];
            pctrl: TcHmi.Controls.System.baseTcHmiControl | null;
        }
        /**
         * Resolves the control hierarchy of the control object in param ctrl.
         * @function resolveControlHierarchy
         * @param {Object} ctrl The first level control object which will act as the entry point for hierarchy.
         * @param {Object} pctrl The parent control object which will associated to the first level control object in the return value.
         * @returns {Object[]} Control object hierarchy.
         */
        function resolveControlHierarchy(ctrl: Controls.System.baseTcHmiControl, pctrl?: Controls.System.baseTcHmiControl | null): ControlHierarchy;
        /**
         * Resolves the attributes of the control object in param co based on the current dom values as an array of name, value objects.
         * @function resolveAttributesFromControlObject
         * @param {Object} co The target control object.
         * @returns {Object[]}
         */
        function resolveAttributesFromControlObject(co: TcHmi.Controls.System.baseTcHmiControl): TcHmi.Controls.ControlAttributeList;
        /**
         * Resolves the attributes of the jquery object in param elem based on the current dom values as an array of name, value objects.
         * @function resolveAttributesFromControlElement
         * @param {Object} elem
         * @returns {Object[]}
         */
        function resolveAttributesFromControlElement(elem: JQuery): TcHmi.Controls.ControlAttributeList;
        /**
        * ElementStyleDimensions
        */
        interface ElementStyleDimensions {
            width: string;
            height: string;
            left: string;
            top: string;
            right: string;
            bottom: string;
        }
        /**
         * Resolves css related dimensions for an element.
         * @function resolveElementStyleDimensions
         * @param j
         */
        function resolveElementStyleDimensions(j: JQuery): ElementStyleDimensions;
        /**
         * DEPRECATED
         * @deprecated
         * @param text
         */
        function toCamelCase(text: string): string;
        /**
         * DEPRECATED
         * @deprecated
         * @param text
         */
        function toDashCase(text: string): string;
        /**
        * Decode base64 encoded utf8 strings
        * Only used for sync to creator where base64 is our overkill escaping solution
        * @param input
        * @return {string} returns the String or null
        */
        function tchmi_utf8str_base64decode(input: string): string | null;
        /**
        * Decode base64 encoded utf8 strings
        * Only used for sync to creator where base64 is our overkill escaping solution
        * @param {string} input String to encode
        * @return {string} returns the String or null
        */
        function tchmi_utf8str_base64encode(input: string): string | null;
        /**
         * Resolves a symbol path like '::a::b::c' or '[1]::a::b' to an array like ["a", "b", "c"] or ["[1]", "a", "b"] which can be used on an object layer by layer.
         * @param path
         */
        function resolveSymbolPathToTokenArray(path: string): string[];
        /**
         * Creates an ES5 map or an mockup object to prevent crashes.
         * This function has to be called for code which is called while initial parsing the js code
         * */
        function createES5Map<K, V>(): Map<K, V>;
    }
}
/**
* -------------------------------------------------------------------
* (c) 2018 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
* @ignore
*/
/**
* @namespace TcHmi
*/
declare module TcHmi {
    /**
    * @namespace
    */
    module System {
        /**
        * @namespace
        */
        module Parser {
            /**
            * @namespace
            */
            module SymbolExpressionExtension {
                interface SymbolExpression extends ESTree.Expression {
                    start: number;
                    end: number;
                    expression: string;
                    passAsSymbol: boolean;
                }
                interface Identifier extends ESTree.Identifier {
                    start: number;
                    end: number;
                }
                interface IParserEx {
                    symbolExpression_readToken: any;
                    symbolExpression_readWord: any;
                    symbolExpression_parseString: any;
                    symbolExpression_parseOpeningTagName: any;
                    symbolExpression_parseClosingTagName: any;
                    symbolExpression_parseElementAt: any;
                    symbolExpression_parseElement: any;
                }
            }
        }
    }
}
declare module TcHmi {
    /**
    * Provides functions for checking rights
    * @class Access
    * @memberOf TcHmi
    * @preserve (Part of the public API)
    */
    class Access {
        /**
        * Checks if an right is allowed for the current user on this control or its parents
        * Rules for granting access:
        *      - Designer Mode Master => true
        *
        *      - Server Auth is not restricted (IsAuthRequired == false in Server) => TRUE
        *
        *      - Server Auth is not known right now => null
        *      - Server Auth loading error => false
        *
        *      - On this control: 1 Group  has  ALLOW => TRUE
        *      - On this control: 0 Groups have ALLOW, but 1 Group has DENY => FALSE
        *      - On this control: 0 Groups have ALLOW, 0 Groups have DENY => Ask Parent
        *
        *      - use control default of the bottom most control with this right. tchmi-view has operate/observe set to TRUE
        *      - control has no Parent (should not be possible) => FALSE
        *
        * @param {TcHmi.Controls.System.baseTcHmiControl} control Control to check
        * @param {string} accessright name of the access right
        * @returns true/false or null if the state is not known right now
        * @preserve (Part of the public API)
        */
        static checkAccess(control: TcHmi.Controls.System.baseTcHmiControl, requestedAccessright: string): boolean | null;
    }
}
declare module TcHmi {
    class AnimationProvider {
        /**
         * Creates a new animation
         * @function
         * @param {string} controlName       The name of the control for which the animation is intendend.
         * @param {string} selector          A CSS selector to identify the element inside the control to animate.
         * @preserve (Part of the public API)
         */
        static create(controlName: string, selector?: string): Animation;
    }
    class Animation {
        /**
         * Creates a new animation
         * @constructor
         * @param {string} controlName      The name of the control for which the animation is intendend.
         * @param {string} selector         A CSS selector to identify the element inside the control to animate.
         * @preserve (Part of the public API)
        */
        constructor(controlName: string, selector: string);
        /**
         * Returns the name of the control the animation is intended for.
         * @function
         * @returns {string} The name of the control.
         * @preserve (Part of the public API)
         */
        controlName(): string;
        /**
         * Returns the selector of the element to animate.
         * @function
         * @returns {string} The selector.
         * @preserve (Part of the public API)
         */
        selector(): string;
        /**
         * Returns the name of the animation.
         * @function
         * @returns {string} The name of the animation.
         * @preserve (Part of the public API)
         */
        animationName(): string;
        /**
         * Returns the state of the animation.
         * @function
         * @returns {Status} The state.
         * @preserve (Part of the public API)
         */
        state(): Animation.Status;
        /**
         * Adds a keyframe.
         * @function
         * @param {object} keyframe The keyframe to add.
         * @preserve (Part of the public API)
         */
        addKeyframe(keyframe: TcHmi.Animation.Keyframe): this;
        /**
         * Adds a keyframe.
         * @function
         * @param {object} styles           The styles for this keyframe.
         * @param {number} progressPoint    A number between 0 and 1 inclusive to determine when this keyframe should be reached.
         * @preserve (Part of the public API)
         */
        addKeyframe(styles: Dictionary<string | string[]>, progressPoint: number): this;
        /**
         * Adds a keyframe.
         * @function
         * @param {string} property          The CSS property for this keyframe.
         * @param {string} value             The value for the CSS property at this keyframe.
         * @param {number} progressPoint     A number between 0 and 1 inclusive to determine when this keyframe should be reached.
         * @preserve (Part of the public API)
         */
        addKeyframe(property: string, value: string, progressPoint: number): this;
        /**
         * Adds a keyframe.
         * @function
         * @param {string}      property        The CSS property for this keyframe.
         * @param {string[]}    value           An array of values for the CSS property at this keyframe. This is useful to pass vendor-prefixed CSS values to ensure compatibility.
         * @param {number}      progressPoint   A number between 0 and 1 inclusive to determine when this keyframe should be reached.
         * @preserve (Part of the public API)
         */
        addKeyframe(property: string, value: string[], progressPoint: number): this;
        /**
         * Removes all keyframes.
         * @function
         * @preserve (Part of the public API)
         */
        clearKeyframes(): this;
        /**
         * Reverses the keyframes by subtracting the progressPoint from 1 and setting that as the new progressPoint.
         * @preserve (Part of the public API)
         */
        reverseKeyframes(): this;
        /**
         * Gets the keyframes of this animation.
         * @function
         * @returns {Animation.Keframe[]} The keyframes.
         * @preserve (Part of the public API)
         */
        keyframes(): Animation.Keyframe[];
        /**
         * Gets the configured duration for this animation. Default is 0.
         * @function
         * @returns {number} The duration.
         * @preserve (Part of the public API)
         */
        duration(): number;
        /**
         * Sets the duration for this animation. Default is 0.
         * @function
         * @param {number} valueNew  The new duration.
         * @preserve (Part of the public API)
         */
        duration(valueNew: number | null): this;
        /**
         * Gets the delay before this animation starts. Default is 0.
         * @function
         * @returns {number} The delay.
         * @preserve (Part of the public API)
         */
        delay(): number;
        /**
         * Sets the delay before this animation starts. Default is 0.
         * @function
         * @param valueNew {number} The new delay.
         * @preserve (Part of the public API)
         */
        delay(valueNew: number | null): this;
        /**
         * Gets the iteration count for this animation. Default is 1.
         * @function
         * @returns {number | string} The iteration count.
         * @preserve (Part of the public API)
         */
        iterationCount(): number | string;
        /**
         * Sets the iteration count for this animation. Default is 1.
         * @function
         * @param {number | string} valueNew The new iteration count.
         * @preserve (Part of the public API)
         */
        iterationCount(valueNew: number | 'infinite' | null): this;
        /**
         * Gets the order in which the keyframes are used. Default is 'normal'.
         * @function
         * @returns {string} The direction.
         * @preserve (Part of the public API)
         */
        direction(): string;
        /**
         * Sets the order in which the keyframes are used. Default is 'normal'.
         * @function
         * @param valueNew {string} The new direction.
         * @preserve (Part of the public API)
         */
        direction(valueNew: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' | null): this;
        /**
         * Gets the timing function for this animation. Default is 'ease'.
         * @function
         * @returns {string} The timing function.
         * @preserve (Part of the public API)
         */
        timingFunction(): string;
        /**
         * Sets the timing function for this animation. Default is 'ease'.
         * @function
         * @param {string} valueNew  The new timing function. Possible values: "linear", "ease(-in/-out/-in-out)", "step-start/-end", "cubic-bezier(<number>, <number>, <number>, <number)", "steps(<number>, start/end)".
         * @preserve (Part of the public API)
         */
        timingFunction(valueNew: string | ((t: number) => number) | null): this;
        /**
         * Gets the fill mode. The fill mode determines whether the state of the first keyframe is applied to the element before the animation starts ('forwards'),
         * the state of the last keyframe is applied to the element after the animation ends ('backwards'), both or none. Default is 'none'.
         * @function
         * @returns {string} The fill mode.
         * @preserve (Part of the public API)
         */
        fillMode(): string;
        /**
         * Sets the fill mode. The fill mode determines whether the state of the first keyframe is applied to the element before the animation starts ("forwards"),
         * the state of the last keyframe is applied to the element after the animation ends ("backwards"), both or none. Default is 'none'.
         * @function
         * @param valueNew {string} The new fill mode.
         * @preserve (Part of the public API)
         */
        fillMode(valueNew: 'none' | 'forwards' | 'backwards' | 'both' | null): this;
        /**
         * Gets whether a cleanup is scheduled after the animation ends. Default is false.
         * @function
         * @returns {boolean} The cleanup value.
         * @preserve (Part of the public API)
         */
        cleanup(): boolean;
        /**
         * Set whether to schedule a cleanup after the animation has finished. A cleanup removes all animation specific CSS and, depending on fillMode, persists the properties of the last keyframe to the element CSS. Default is false.
         * @function
         * @param valueNew {boolean} The cleanup value.
         * @preserve (Part of the public API)
         */
        cleanup(valueNew: boolean | null): this;
        /**
         * Gets whether the animation will be rendered via CSS or JavaScript. Will return false if the user has set useCss to false or configured features not supported by CSS. Default is true.
         * @function
         * @returns {boolean} Whether CSS will be used.
         * @preserve (Part of the public API)
         */
        useCss(): boolean;
        /**
         * Sets whether to render the animation via CSS or JavaScript. JavaScript may offer better performance if the animation is often changed and restarted.
         * If the animation has been configured with features unsupported by CSS, JavaScript will be used regardless of the value of useCss. Default is true.
         * @function
         * @param valueNew {boolean} Whether to use CSS, when available.
         * @preserve (Part of the public API)
         */
        useCss(valueNew: boolean | null): this;
        /**
         * Registers an event handler for one of the events animationstart, animationend or animationiteration.
         * @function
         * @param {string} name     The name of the event.
         * @param callback          The callback function.
         * @preserve (Part of the public API)
         */
        registerEventHandler(name: 'animationstart' | 'animationend' | 'animationiteration', callback: (event: TcHmi.Animation.AnimationEvent) => void): this;
        /**
         * Unregisters a previously registered event handler.
         * @function
         * @param {string} name     The name of the event.
         * @param callback          The callback function to unregister.
         * @preserve (Part of the public API)
         */
        unregisterEventHandler(name: 'animationstart' | 'animationend' | 'animationiteration', callback?: (event: TcHmi.Animation.AnimationEvent) => void): this;
        /**
         * Gets all event handlers
         * @function
         * @returns The event handlers.
         * @preserve (Part of the public API)
         */
        eventHandlers(): {
            name: string;
            callback: (event: Animation.AnimationEvent) => void;
        }[];
        /**
         * Run the animation.
         * @function
         * @preserve (Part of the public API)
         */
        run(): this;
        /**
         * Pause the animation.
         * @function
         * @preserve (Part of the public API)
         */
        pause(): this;
        /**
         * Cancels the animation and writes the last keyframe styles into the element CSS.
         * @function
         * @preserve (Part of the public API)
         */
        skip(): this;
        /**
         * Resets the animation. This is an asynchronous operation.
         * @function
         * @param callback The function to call when the animation has been reset.
         * @preserve (Part of the public API)
         */
        reset(callback?: () => void): this;
    }
    module Animation {
        interface Keyframe {
            styles: Dictionary<string[]>;
            progressPoint: number;
        }
        interface AnimationEvent extends IResultObject {
            animationName: string;
            elapsedTime: number;
            JQueryEvent?: JQuery.Event<HTMLElement>;
        }
        enum Status {
            CONFIGURE = 0,
            INITIALIZED = 1,
            RUNNING = 2,
            PAUSED = 3,
            ENDED = 4
        }
    }
}
declare module TcHmi {
    /**
     * Provides methods to read base64 encoded data.
     * @class Base64BinaryReader
     * @memberOf TcHmi
     * @preserve (Part of the public API)
     */
    class Base64BinaryReader {
        /**
         * Creates a new Base64BinaryReader.
         * @constructor
         * @param {string} data          The base64 encoded string to read from.
         * @param endianness    Whether the encoded data uses little endian (default) or big endian to store numbers.
         * @preserve (Part of the public API)
         */
        constructor(data: string, endianness?: Endianness);
        /**
         * Reads a boolean value.
         * @preserve (Part of the public API)
         */
        readBoolean(): boolean;
        /**
         * Reads a single byte of data.
         * @preserve (Part of the public API)
         */
        readByte(): number;
        /**
         * Reads a signed byte.
         * @preserve (Part of the public API)
         */
        readSByte(): number;
        /**
         * Reads a signed 16-bit integer.
         * @preserve (Part of the public API)
         */
        readInt16(): number;
        /**
         * Reads an unsigned 16-bit integer.
         * @preserve (Part of the public API)
         */
        readUInt16(): number;
        /**
         * Reads a signed 32-bit integer.
         * @preserve (Part of the public API)
         */
        readInt32(): number;
        /**
         * Reads an unsigned 32-bit integer.
         * @preserve (Part of the public API)
         */
        readUInt32(): number;
        /**
         * Reads a single precision floating point number.
         * @preserve (Part of the public API)
         */
        readFloat(): number;
        /**
         * Reads a double precision floating point number.
         * @preserve (Part of the public API)
         */
        readDouble(): number;
        /**
         * Reads a string. Will read until a zero byte is encountered, or until the specified length has been reached, or, if no length has been specified, until the end of the data.
         * @param {number} length The length of the string to read in bytes.
         * @preserve (Part of the public API)
         */
        readString(length?: number): string;
        /**
         *
         * @preserve (Part of the public API)
         */
        getLength(): number;
        /**
         *
         * @preserve (Part of the public API)
         */
        getOffset(): number;
        /**
         *
         * @preserve (Part of the public API)
         */
        setOffset(offset: number): void;
    }
}
declare module TcHmi {
    /**
     * Provides methods to write base64 encoded data.
     * @class Base64BinaryWriter
     * @memberOf TcHmi
     * @preserve (Part of the public API)
     */
    class Base64BinaryWriter {
        /**
         * Creates a new Base64BinaryWriter.
         * @param endianness    Whether to use little endian (default) or big endian when encoding numbers.
         * @param {number} length        The desired length of the data. If this parameter is omitted the data will be expanded dynamically.
         * @preserve (Part of the public API)
         */
        constructor(endianness?: Endianness, length?: number);
        /**
         * Writes a boolean value.
         * @param {boolean} value The boolean value to write.
         * @preserve (Part of the public API)
         */
        writeBoolean(value: boolean): this;
        /**
         * Writes a single byte of data.
         * @param {number} value The byte to write.
         * @preserve (Part of the public API)
         */
        writeByte(value: number): this;
        /**
         * Writes a signed byte.
         * @param {number} value The byte to write.
         * @preserve (Part of the public API)
         */
        writeSByte(value: number): this;
        /**
         * Writes a signed 16-bit integer.
         * @param {number} value The number to write.
         * @preserve (Part of the public API)
         */
        writeInt16(value: number): this;
        /**
         * Writes an unsigned 16-bit integer.
         * @param {number} value The number to write.
         * @preserve (Part of the public API)
         */
        writeUInt16(value: number): this;
        /**
         * Writes a signed 32-bit integer.
         * @param {number} value The number to write.
         * @preserve (Part of the public API)
         */
        writeInt32(value: number): this;
        /**
         * Writes an unsigned 32-bit integer.
         * @param {number} value The number to write.
         * @preserve (Part of the public API)
         */
        writeUInt32(value: number): this;
        /**
         * Writes a single precision floating point number.
         * @param {number} value The number to write.
         * @preserve (Part of the public API)
         */
        writeFloat(value: number): this;
        /**
         * Writes a double precision floating point number.
         * @param {number} value The number to write.
         * @preserve (Part of the public API)
         */
        writeDouble(value: number): this;
        /**
         * Writes a string.
         * @param {string} value The string to write.
         * @param {number} length (Optional) The length of the string to write. If the string is shorter, the remaining space is filled with 0.
         * @preserve (Part of the public API)
         */
        writeString(value: string, length?: number): this;
        /**
         * Returns the base64 encoded string. If not enough data was written to fill the length the data should have, the rest is filled up with zeros.
         * @preserve (Part of the public API)
         */
        getEncodedString(): string;
        /**
         * Returns the length of the data that has been written.
         * @preserve (Part of the public API)
         */
        getLength(): number;
    }
}
declare module TcHmi {
    /**
    * Reserved
    * @class Binding
    * @memberOf TcHmi
    * @preserve (Part of the public API)
    */
    class Binding {
        /**
         * Creates a binding between a symbol and a control attribute setter function.
         * @function createEx
         * @param {string} expr The target symbol expression.
         * @param {(value: any) => void} fn The target function as prototype reference.
         * @param {fnThis: TcHmi.Controls.System.baseTcHmiControl} control The target control instance.
         * @preserve (Part of the public API)
         */
        static create(expr: string, fn: (value: any) => void, control: TcHmi.Controls.System.baseTcHmiControl): void;
        /**
         * Creates a binding between a symbol and a control attribute setter function by name.
         * @function create
         * @param {string} expr The target symbol expression.
         * @param {string} fn The name of the control setter function.
         * @param {TcHmi.Controls.System.baseTcHmiControl} control The target control instance.
         * @preserve (Part of the public API)
         */
        static createEx(expr: string, fn: string, control: TcHmi.Controls.System.baseTcHmiControl): void;
        /**
        * Creates a binding between a symbol and a control attribute setter function by name of property.
        * @function createEx2
        * @param {string} expr The target symbol expression.
        * @param {string} propertyName The name of the control property.
        * @param {TcHmi.Controls.System.baseTcHmiControl} control
        * @preserve (Part of the public API)
        */
        static createEx2(expr: string, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): void;
        /**
         * Removes a binding between a symbol and a control attribute setter function.
         * @function remove
         * @param {string} expr [OBSOLETE] The target symbol expression.
         * @param {(value: any) => void} fn
         * @param {TcHmi.Controls.System.baseTcHmiControl} control The target control instance.
         * @param {boolean} bReset [Optional] If set to false the setter will not resetted with null.
         * @preserve (Part of the public API)
         */
        static remove(expr: string | null, fn: (value: any) => void, control: TcHmi.Controls.System.baseTcHmiControl, bReset?: boolean): void;
        /**
         * Removes a binding between a symbol and a control attribute setter function.
         * @function remove
         * @param {string} expr [OBSOLETE] The target symbol expression.
         * @param {string} fn The name of the control setter function.
         * @param {TcHmi.Controls.System.baseTcHmiControl} control The target control instance.
         * @param {boolean} bReset [Optional] If set to false the setter will not resetted with null.
         * @preserve (Part of the public API)
         */
        static removeEx(expr: string | null, fn: string, control: TcHmi.Controls.System.baseTcHmiControl, bReset?: boolean): void;
        /**
        * Removes a binding between a symbol and a control attribute setter function by name of property.
        * @function remove
        * @param {string} expr [OBSOLETE] The target symbol expression.
        * @param {string} propertyName The name of the control attribute property.
        * @param {TcHmi.Controls.System.baseTcHmiControl} control The target control instance.
        * @param {boolean} bReset [Optional] If set to false the setter will not resetted with null.
        * @preserve (Part of the public API)
        */
        static removeEx2(expr: string | null, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl, bReset?: boolean): void;
        /**
         * Returns true if a symbol is bound to the target control property.
         * @param {string} propertyName The name of the control attribute property.
         * @param {TcHmi.Controls.System.baseTcHmiControl} control The target control instance.
         * @preserve (Part of the public API)
         */
        static exists(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): boolean;
        /**
         * Returns the symbol expression of a binding as string or null if no symbol is bound to the target control property.
         * @param {string} propertyName The name of the control attribute property.
         * @param {TcHmi.Controls.System.baseTcHmiControl} control The target control instance.
         * @preserve (Part of the public API)
         */
        static resolve(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): string | null;
        /**
         * Returns the symbol expression of a binding as SymbolExpression object or null if no symbol is bound to the target control property.
         * @param {string} propertyName The name of the control attribute property.
         * @param {TcHmi.Controls.System.baseTcHmiControl} control The target control instance.
         * @preserve (Part of the public API)
         */
        static resolveEx(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): SymbolExpression | null;
    }
    type BindingMode = 'OneWay' | 'TwoWay';
}
declare module TcHmi {
    class Callback {
        /**
         * Calls a callback
         * @param {function} callback function to call
         * @param {object|null} thisArg the this pointer in the function call
         * @param args parameters for the function call
         * @returns undefined or the Error in case of an exception
         * @preserve (Part of the public API)
         */
        static callSafe<T extends object, A extends any[]>(callback: Callback.ICallback<T, A> | null | undefined, thisArg: T | null | undefined, ...args: A): Error | undefined;
    }
    module Callback {
        interface ICallback<T extends object, A extends any[]> {
            (this: T, ...args: A): void;
        }
    }
}
declare module TcHmi {
    /**
    * @class Theme
    * @memberOf TcHmi
    * @preserve (Part of the public API)
    */
    class Theme {
        /**
         * Returns the active theme.
         *
         * @preserve (Part of the public API)
         * @returns {string}
         */
        static get(): string;
        /**
         * Sets the active theme.
         *
         * @preserve (Part of the public API)
         * @returns {TcHmi.Errors}
         */
        static set(newValue: string): TcHmi.Errors;
    }
    module Theme {
        /**
         * Control property related API
         * @preserve (Part of the public API)
         */
        class Properties {
            /**
            * Parses every source of implicit properties and returns this or null
            * Can have different value after the event onThemeDataChanged.
            * The order of resources are
            * 1) control class
            * 2) theme definition of the control type in project
            * 3) theme definition in control
            * 4) defaultValueInternal in Description.json of the control
            * @param {TcHmi.Controls.System.baseTcHmiControl} control Control which needs the resource
            * @param {string} propertyName name of the property
            * @preserve (Part of the public API)
            */
            static getDefaultValue<T>(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): Theme.Resource<T>;
            /**
             * Sets the default value of a property and change it (if needed) on theme change.
             *
             * @param {TcHmi.Controls.System.baseTcHmiControl}
             * @param {string} propertyName
             * @returns {TcHmi.Errors} returns an Error code
             * @preserve (Part of the public API)
             */
            static setThemeValue(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): TcHmi.Errors;
        }
        /**
         * Control resource related API
         * @preserve (Part of the public API)
         */
        class Resources {
            /**
            * Gets a themed resource.
            * Parses every source of properties and returns this or null
            * Can have different value after the event onThemeDataChanged.
            * The order of resources are
            * 1) control class
            * 2) theme definition of the control type in project
            * 3) theme definition in control
        
            * @param {TcHmi.Controls.System.baseTcHmiControl} control Control which needs the resource
            * @param {string} resourceName name of the resource
            * @return {TcHmi.Theme.Resource<T> | null} returns the resource or null
            * @preserve (Part of the public API)
            */
            static get<T>(control: TcHmi.Controls.System.baseTcHmiControl, resourceName: string): Theme.Resource<T>;
            /**
             * Resolves the basepath for a path value inside a theme resource
             * @param {TcHmi.Controls.System.baseTcHmiControl} control Control which asks for that
             * @param {TcHmi.Theme.Resource<T>} resource resource to resolve the basepath
             */
            static resolveBasePath<T>(control: TcHmi.Controls.System.baseTcHmiControl, resource: Theme.Resource<T>): string;
        }
        interface Resource<T extends any> extends IResultObject {
            value: T | null;
            /** The value is generated from the control, the project or in error case from the system. */
            origin: 'control' | 'project' | 'system';
            /** Resources of a control will get "Base" if they do not implement the current theme */
            originThemeName: string;
        }
    }
}
declare module TcHmi {
    module Controls {
        interface ControlAttributeList extends Dictionary<TcHmi.System.ControlAttribute> {
            'data-tchmi-type': TcHmi.System.ControlAttribute;
            'id': TcHmi.System.ControlAttribute;
        }
        /** Constructor which generates a TcHmi Control. */
        type baseTcHmiControlConstructor<C extends TcHmi.Controls.System.baseTcHmiControl> = {
            new (element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList): C;
        };
        /**
         * Register a TcHmi Control.
         * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
         * @param {string} name Name of the Control.
         * @param {TcHmi.Controls.baseTcHmiControlConstructor} constructor Constructor which generates the TcHmi Control.
         * @param {string} directory Directory of the Control (base path is the Controls directory).
         * @param {string} templatePath Template file of the Control (base path is the Controls directory).
         * @preserve (Part of the public API)
         */
        function register<C extends TcHmi.Controls.System.baseTcHmiControl>(name: string, constructor: TcHmi.Controls.baseTcHmiControlConstructor<C>, directory: string, templatePath?: string | null): void;
        /**
         * Get control by name. Returns the control or undefined
         * @param {string} name Name of the Control.
         * @preserve (Part of the public API)
         */
        function get(name: string | null | undefined): TcHmi.Controls.System.baseTcHmiControl | undefined;
        /**
         * DEPRECATED
         * Does no longer do anything
         * @deprecated  Does no longer do anything
         * @function tachControls
         * @memberOf TcHmi.Controls
         * @param {((this: void, data: TcHmi.IResultObject) => void} callback
         * @preserve (Part of the public API)
         */
        function tachControls(callback?: null | ((this: void) => void)): void;
        /**
         * DEPRECATED
         * Does no longer do anything
         * @deprecated  Does no longer do anything
         * @function tachControlsAsync
         * @memberOf TcHmi.Controls
         */
        function tachControlsAsync(callback?: null | ((this: void) => void)): void;
    }
}
declare module TcHmi {
    /**
     * Deprecated. Please use TcHmi.Controls.get()
     * @deprecated Please use TcHmi.Controls.get()
     * @variable control
     * @memberOf TcHmi
     * @type object
     */
    var control: Dictionary<Controls.System.baseTcHmiControl>;
    /**
    * Reserved
    * @class Control
    * @memberOf TcHmi
    */
    class Control {
    }
}
declare module TcHmi {
    class ControlFactory {
        /**
        * Creates a new control.
        * @function
        * @param {string} type The type of the control.
        * @param {string} name The name of the control.
        * @param {Dictionary<{}>}
        * @param {TcHmi.Controls.System.baseTcHmiControl} parent Optional. The logical parent control.
        * @preserve (Part of the public API)
         */
        static createEx<C extends TcHmi.Controls.System.baseTcHmiControl>(type: string, name: string, attributes: null | Dictionary<any>, parent?: TcHmi.Controls.System.baseTcHmiControl): C | undefined;
        /** DEPRECATED API PARTS*/
        /**
        * DEPRECATED
        * Creates a new control.
        * @function
        * @param {string} html The base html for the control.
        * @param {string|null} unused Optional. Has to be set to null if parameter parent is used.
        * @param {TcHmi.Controls.System.baseTcHmiControl} parent Optional. The logical parent control.
        * @deprecated Please use createEx()
        */
        static create<C extends TcHmi.Controls.System.baseTcHmiControl>(html: string, unused?: null, parent?: TcHmi.Controls.System.baseTcHmiControl): C | undefined;
        /**
        * DEPRECATED
        * Creates a new control.
        * The new control HTMLElement, available via getElement(), can be attached to the DOM afterwards.
        * @function
        * @param {JQuery} element The base element for the control.
        * @param {string|null} unused Optional. Has to be set to null if parameter parent is used.
        * @param {TcHmi.Controls.System.baseTcHmiControl} parent Optional. The logical parent control.
        * @deprecated Please use createEx()
        */
        static create<C extends TcHmi.Controls.System.baseTcHmiControl>(element: JQuery, unused?: null, parent?: TcHmi.Controls.System.baseTcHmiControl): C | undefined;
        /**
        * DEPRECATED
        * Creates a new control.
        * @function
        * @param {string} type The type of the control.
        * @param {string} name The name of the control.
        * @param {TcHmi.Controls.System.baseTcHmiControl} parent Optional. The logical parent control.
        * @deprecated Please use createEx()
        */
        static create<C extends TcHmi.Controls.System.baseTcHmiControl>(type: string, name: string, parent?: TcHmi.Controls.System.baseTcHmiControl): C | undefined;
    }
}
declare module TcHmi {
    /**
    * Provides multiple types of dialogs to the user
    *
    * @class DialogManager
    * @preserve (Part of the public API)
    */
    class DialogManager {
        /**
        * Change visibility of dialog and set its DialogType when showing
        *
        * @param {string} dialogOwner Caller Id to prevent overwriting forreign dialogs
        * @param {boolean} bVisibility Toggling visiblity of Dialog
        * @param {TcHmi.DialogManager.DialogType} dialogType?
        * @param {object} options?
        * @param {string} options.cancelable The dialog should have an button to close the dialog
        * @preserve (Part of the public API)
        */
        static showDialog(dialogOwner: string, bVisibility: boolean, dialogType?: TcHmi.DialogManager.DialogType, options?: TcHmi.DialogManager.DialogOptions): boolean;
        /**
         * Changes the output content of the Dialog to a new value
         * The default Severity is Info
         *
         * @param {string} dialogOwner Caller Id to prevent overwriting forreign dialogs
         * @param {string} newHtmlContent
         * @param [severity = DialogManager.DialogSeverity.Info]
         * @returns {boolean} Success of the text update
         * @preserve (Part of the public API)
         */
        static updateText(dialogOwner: string, newHtmlContent: string, severity?: DialogManager.DialogSeverity): boolean;
        /**
        * Returns the current dialog owner or null
        * @returns {string, null}
        * @preserve (Part of the public API)
        */
        static getDialogOwner(): string | null;
    }
    namespace DialogManager {
        enum DialogSeverity {
            Info = 0,
            Error = 1
        }
        /**
        We support a loading dialog and a overlay dialog
            Overlay
            system use only: SYSTEMLoading
        */
        enum DialogType {
            /** An overlay dialog */
            Overlay = 1,
            /** A loading dialog (system use only) */
            SYSTEMLoading = 100
        }
        /**
        Options for the system dialogs
        */
        interface DialogOptions {
            /** The dialog should have an button to close the dialog */
            cancelable?: boolean;
        }
    }
}
declare module TcHmi {
    /**
    * Reserved
    * @class Environment
    * @memberOf TcHmi
    * @preserve (Part of the public API)
    */
    class Environment {
        /**
         * Returns the base path in this environment.
         * You have to add '/Controls/Custom' if you want to address your own control dir
         *
         * @preserve (Part of the public API)
         * @returns {string}
         */
        static getBasePath(): string;
    }
}
declare module TcHmi {
    /**
    * Reserved
    * @class StyleProvider
    * @memberOf TcHmi
    * @preserve (Part of the public API)
    */
    class StyleProvider {
        /**
         * Returns all computed styles that are active on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
         * Unset or unknown CSS values will not be set in the result object.
         * @param {JQuery|HTMLElement|SVGElement} element The jQuery collection or single HTML/SVG element.
         */
        static getComputedElementStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined): Dictionary<string>;
        /**
         * Returns the given computed CSS property on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
         * Unset or unknown CSS values will not be set in the result object.
         * @param {JQuery|HTMLElement|SVGElement} element The jQuery collection or single HTML/SVG element.
         * @param {string} propertyName  The CSS property to get.
         */
        static getComputedElementStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, propertyName: string): Dictionary<string>;
        /**
         * Returns the given computed CSS property on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
         * Unset or unknown CSS values will not be set in the result object.
         * @param {JQuery|HTMLElement|SVGElement} element The jQuery collection or single HTML/SVG element.
         * @param {string[]} propertyNames  The CSS properties to get.
         */
        static getComputedElementStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, propertyNames: string[]): Dictionary<string>;
        /**
         * Returns all styles that are set on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
         *
         * @param {JQuery | undefined} element The jQuery element.
         * @returns {object}
         */
        static getSimpleElementStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined): Dictionary<string>;
        /**
         * Returns the given CSS property on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
         * @param {JQuery | undefined} element The jQuery element.
         * @param {string} propertyName The CSS property to get.
         * @returns {object}
         */
        static getSimpleElementStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, propertyName: string): Dictionary<string>;
        /**
         * Returns the given CSS property on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
         * @param {JQuery | undefined} element The jQuery element.
         * @param {string[]} propertyNames  The CSS properties to get.
         * @returns {object}
         */
        static getSimpleElementStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, propertyNames: string[]): Dictionary<string>;
        /**
         * Style setter for simple styles in a collection of JQuery elements or single HTML or SVG Elements.
         * @param {JQuery | undefined} element The jQuery element.
         * @param {string} property      The CSS property to process.
         * @param {string} value         The value for the CSS property.
         */
        static setSimpleElementStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, property: string, value: string | null | undefined): void;
        /**
         * Style setter forsimple styles in a collection of JQuery elements or single HTML or SVG Elements.
         * @param {JQuery | undefined} element The jQuery element.
         * @param {string} property      The CSS property to process.
         * @param {string[]} value         An array of values for the CSS property. This is useful for providing vendor-prefixed values to ensure compatibility.
         */
        static setSimpleElementStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, property: string, values: string[] | null): void;
        /**
         * Style setter for simple styles in a collection of JQuery elements or single HTML or SVG Elements.
         * @param {JQuery | undefined} element The jQuery element.
         * @param {object} styles        A dictionary of property-value pairs. Can be used to set multiple styles simultaneously. The values can be strings or null to remove values.
         */
        static setSimpleElementStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, styles: Dictionary<string | string[] | null> | null): void;
        /**
         * Style processor for generic styles.
         * @param {string} controlName   The name of the target control.
         * @param {string} selector      The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
         * @param property      The CSS property to process.
         * @param value         The value for the CSS property.
         */
        static processGenericStyle(controlName: string, selector: string, property: string, value: string | null): void;
        /**
         * Style processor for generic styles.
         * @param {string} controlName   The name of the target control.
         * @param {string} selector      The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
         * @param property      The CSS property to process.
         * @param value         An array of values for the CSS property. This is useful for providing vendor-prefixed values to ensure compatibility.
         */
        static processGenericStyle(controlName: string, selector: string, property: string, value: string[] | null): void;
        /**
         * Style processor for generic styles.
         * @param {string} controlName   The name of the target control.
         * @param {string} selector      The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
         * @param styles        A dictionary of property-value pairs. Can be used to set multiple styles simultaneously. The values can be strings or arrays of strings to provide vendor-prefixed values.
         */
        static processGenericStyle(controlName: string, selector: string, styles: Dictionary<string | string[] | null> | TcHmi.System.Engineering.TcHmiSparseStringClientRect): void;
        /**
         * Resolves a SolidColor object to a string representation for use as css color property.
         * Has to be called with a valid SolidColor. Use isSolidColor to check
         * @param colorObject The SolidColor to resolve.
         * @preserve (Part of the public API)
        */
        static resolveSolidColorAsCssValue(colorObject: TcHmi.SolidColor): string;
        /**
        * Resolve a SolidColor object to a RGBAColor object.
        * Has to be called with a valid SolidColor. Use isSolidColor to check
        * @param colorObject The SolidColor to resolve.
        * @preserve (Part of the public API)
        */
        static resolveSolidColorAsRGBA(colorObject: TcHmi.SolidColor): RGBAColor;
        /**
         * Resolves a LinearGradientColor object to a string representation for use in css background-image property.
         * Has to be called with a valid LinearGradientColor. Use isLinearGradientColor to check
         * @param colorObject The LinearGradientColor to resolve.
         * @preserve (Part of the public API)
        */
        static resolveLinearGradientColorAsCssValue(colorObject: TcHmi.LinearGradientColor): string;
        /**
         * Style Processor for background.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew  The new value for the background.
         * @preserve (Part of the public API)
         */
        static processBackground(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<TcHmi.Background> | null | undefined): void;
        /**
         * Style Processor for background colors and gradients.
         * @param {JQuery} element   The jQuery element.
         * @param valueNew  The new value for the background.
         * @preserve (Part of the public API)
         */
        static processBackgroundColor(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.Color | null | undefined): void;
        /**
         * Style Processor for background images.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew  The URL of the image.
         * @preserve (Part of the public API)
         */
        static processBackgroundImage(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: string | null | undefined): void;
        /**
         * Style processor for SVG fill color.
         * @param {JQuery | SVGElement | undefined} element The jQuery element.
         * @param valueNew The new fill color.
         * @preserve (Part of the public API)
         */
        static processFillColor(element: JQuery | SVGElement[] | NodeListOf<SVGElement> | HTMLCollectionOf<SVGElement> | SVGElement | undefined, valueNew: TcHmi.Color | null | undefined): void;
        /**
         * Style processor for SVG stroke color.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new stroke color.
         * @preserve (Part of the public API)
         */
        static processStrokeColor(element: JQuery | SVGElement[] | NodeListOf<SVGElement> | HTMLCollectionOf<SVGElement> | SVGElement | undefined, valueNew: TcHmi.SolidColor | null | undefined): void;
        /**
         * Style processor for text color.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new text color.
         * @preserve (Part of the public API)
         */
        static processTextColor(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.SolidColor | null | undefined): void;
        /**
         * Style processor for border color.
         * @param {JQuery | undefined} element The jQuery element.
         * @param {object} valueNew      The new border color.
         * @preserve (Part of the public API)
         */
        static processBorderColor(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.Color | null | undefined): void;
        /**
         * Style processor for border width.
         * @param {JQuery | undefined} element The jQuery element.
         * @param {object} valueNew      The new border widths.
         * @preserve (Part of the public API)
         */
        static processBorderWidth(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<TcHmi.BorderWidth> | null | undefined): void;
        /**
         * Style processor for border radius.
         * @param {JQuery | undefined} element The jQuery element.
         * @param {object} valueNew      The new border radii.
         * @preserve (Part of the public API)
         */
        static processBorderRadius(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.BorderRadius | null | undefined): void;
        /**
         * Style processor for border style.
         * @param {JQuery | undefined} element The jQuery element.
         * @param {object} valueNew      The new border styles.
         * @preserve (Part of the public API)
         */
        static processBorderStyle(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.BorderStyle | null | undefined): void;
        /**
         * Style processor for box shadow.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new border styles.
         * @preserve (Part of the public API)
         */
        static processBoxShadow(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.BoxShadow[] | null | undefined): void;
        /**
         * Style processor for font family.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new font family.
         * @preserve (Part of the public API)
         */
        static processFontFamily(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: TcHmi.FontFamily | null | undefined): void;
        /**
         * Style processor for font size.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new font size.
         * @param unitNew       The new font size unit. Defaults to "px".
         * @preserve (Part of the public API)
         */
        static processFontSize(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: number | null | undefined, unitNew?: FontSizeUnit): void;
        /**
         * Style processor for font style.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new font style. Allowed values are "Normal", "Italic" and "Oblique".
         * @preserve (Part of the public API)
         */
        static processFontStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: TcHmi.FontStyle | null | undefined): void;
        /**
         * Style processor for font weight.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new font weight. Allowed values are "Normal" and "Bold".
         * @preserve (Part of the public API)
         */
        static processFontWeight(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: TcHmi.FontWeight | null | undefined): void;
        /**
         * Style processor for visibility.
         * Visibility also effects pointer events, i.e. a hidden element will not receive mouse click events.
         * Hidden still uses space in fluid calculations, collapsed is ignored there.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new visibility. Allowed values are "Visible", "Collapsed" and "Hidden". Hidden still uses space in fluid calculations, collapsed is ignored there.
         * @preserve (Part of the public API)
         */
        static processVisibility(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: TcHmi.Visibility | null | undefined): void;
        /**
         * Style processor for horizontal alignment. This aligns the content of the target element, not the target element itself.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new horizontal alignment. Allowed values are "Left", "Center" and "Right".
         * @preserve (Part of the public API)
         */
        static processContentHorizontalAlignment(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.HorizontalAlignment | undefined): void;
        /**
         * Style processor for vertical alignment. This aligns the content of the target element, not the target element itself.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new vertical alignment. Allowed values are "Top", "Center" and "Bottom".
         * @preserve (Part of the public API)
         */
        static processContentVerticalAlignment(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.VerticalAlignment | undefined): void;
        /**
         * Style processor for content padding.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new content padding.
         * @preserve (Part of the public API)
         */
        static processContentPadding(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<TcHmi.FourSidedCss> | null | undefined): void;
        /**
         * Theme processor for transforms.
         * @param {JQuery | undefined} element The jQuery element.
         * @param valueNew      The new transform value or an array of transform values.
         * @param order         If this parameter is passed, the transforms in valueNew will replace the transform at the specified place, instead of replacing all transforms.
         * @preserve (Part of the public API)
         */
        static processTransform(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.Transform | TcHmi.Transform[] | null | undefined, order?: number): void;
    }
}
/**
* TopMostLayer
* -------------------------------------------------------------------
* (c) 2017 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
*/
/**
* @namespace TcHmi
*/
declare module TcHmi {
    /**
    * Provides a layer to show elements above the normal visualization
    * @class TopMostLayer
    * @memberOf TcHmi
    * @preserve (Part of the public API)
    */
    class TopMostLayer {
        /**
        * Appends the elements to the top layer above the normal visualization
        * A reference to the element should be kept to be able to call remove() function
        * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
        * Your element could have style="min-width:50%;min-height:50%;"
        *
        * @param {TcHmi.Controls.System.baseTcHmiControl} control control which requests this
        * @param {JQuery} element jQuery Collection with exactly one element which should be moved to TopMostLayer
        * @param {object} options optional options
        * @param options.resizeCb optional callback which will be called after resizing the element or parent. Will be called after add, too. ("this" will be the calling control in this function)
        * @param options.removeCb optional callback which will be called after removing the element ("this" will be the calling control in this function)
        * @param {boolean} options.centerHorizontal bool to center the given element
        * @param {boolean} options.centerVertical bool to center the given element
        * @param {boolean} options.dimBackground Should the overlay be darken over the background. Default is true
        * @returns {boolean} success of the add
        * @preserve (Part of the public API)
        */
        static add(control: TcHmi.Controls.System.baseTcHmiControl, element: JQuery | undefined | null, options?: TopMostLayer.IOptions): boolean;
        /**
         * Removes the element from the top layer and returns it for later use by the caller
         * If the element is not inside the TopMostLayer it will be returned without change.
         * @param {TcHmi.Controls.System.baseTcHmiControl} control control which requests this
         * @param {JQuery} element jQuery Collection with the element which should be removed from TopMostLayer
         * @returns {JQuery} jQuery Collection
         * @preserve (Part of the public API)
         */
        static remove(control: TcHmi.Controls.System.baseTcHmiControl, element: JQuery): JQuery;
        /**
        * Appends the elements to the top layer above the normal visualization (not control namespaced)
        * A reference to the element should be kept to be able to call remove() function
        * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
        * Your element could have style="min-width:50%;min-height:50%;"
        *
        * @param {JQuery} element jQuery Collection with exactly one element which should be moved to TopMostLayer
        * @param {object} options optional options
        * @param options.resizeCb optional callback which will be called after resizeing the element or parent ("this" will be the calling control in this function)
        * @param options.removeCb optional callback which will be called after removing the element ("this" will be the calling control in this function)
        * @param {boolean} options.centerHorizontal bool to center the given element
        * @param {boolean} options.centerVertical bool to center the given element
        * @returns {boolean} success of the add
        * @preserve (Part of the public API)
        */
        static addEx(element: JQuery | undefined | null, options?: TopMostLayer.IOptionsEx): boolean;
        /**
         * Removes the element from the top layer and returns it for later use by the caller (not control namespaced)
         * If the element is not inside the TopMostLayer it will be returned without change.
         * @param {JQuery} element jQuery Collection with the element which should be removed from TopMostLayer
         * @returns {JQuery} jQuery Collection
         * @preserve (Part of the public API)
         */
        static removeEx(element: JQuery): JQuery;
    }
    namespace TopMostLayer {
        interface IOptionsBase {
            /** Center the element on the screen. Default is false */
            centerHorizontal?: boolean;
            /** Center the element on the screen. Default is false */
            centerVertical?: boolean;
            /** Should the overlay be darken over the background. Default is true. */
            dimBackground?: boolean;
            /** Should pointer events go through the overlay and allow interaction with elements behind the overlay? Default is true. */
            modal?: boolean;
            /** Should a click on the overlay close the TopMostLayer? Default is true. */
            closeOnBackground?: boolean;
        }
        interface IOptions extends IOptionsBase {
            /** Callback which will be called when the element has been potentially beeing resized */
            resizeCb?: (this: TcHmi.Controls.System.baseTcHmiControl, data: TopMostLayer.IResizeResultObject) => void;
            /** Callback which will be called when the element has been potentially beeing resized */
            removeCb?: (this: TcHmi.Controls.System.baseTcHmiControl, data: TopMostLayer.IElemRemoveResultObject) => void;
        }
        interface IOptionsEx extends IOptionsBase {
            /** Callback which will be called when the element has been potentially beeing resized */
            resizeCb?: (this: Window, data: TopMostLayer.IResizeResultObject) => void;
            /** Callback which will be called when the element has been potentially beeing resized */
            removeCb?: (this: Window, data: TopMostLayer.IElemRemoveResultObject) => void;
        }
        interface IResizeResultObject extends TcHmi.IResultObject {
            /** The element */
            element: JQuery;
            parentPixelSize: {
                width: number;
                height: number;
            };
        }
        interface IElemRemoveResultObject extends TcHmi.IResultObject {
            /** The detached element */
            element: JQuery;
            /** The user clicked beside the element causing an abort */
            canceled: boolean;
        }
    }
}
declare module TcHmi {
    /**
    *
    * @class EventProvider
    * @memberOf TcHmi
    * @preserve (Part of the public API)
    */
    class EventProvider {
        /**
         * Register a callback to an event name.
         * If the name is a binding expression the callback will be initially called if there is a binding with this name
         * @function
         * @param {string} name Name of the event.
         * @param {function} callback Callback which will be called
         * @returns {function} Destroy function which cleans up/unregisters
         * @preserve (Part of the public API)
         */
        static register(name: string, callback: (e: EventProvider.Event, ...data: any[]) => void, options?: object): DestroyFunction;
        /**
         * Calls all registered callbacks related to an event name.
         * @function
         * @param {string} name Name of the event.
         * @param {any} ...args optional parameter(s) which will be transfered to the callbacks
         * @preserve (Part of the public API)
         */
        static raise(name: string, ...args: any[]): void;
        /**
         * Calls the callback of an specific event registration.
         * @function
         * @param {EventProvider.IEventEntry} event
         * @param args optional parameter(s) which will be transfered to the callbacks
         * @preserve (Part of the public API)
         */
        static raiseEx(event: EventProvider.IEventEntry, ...args: any[]): void;
        /**
         *
         * @param {string} name
         * @param callback
         */
        static watchEventRegistration(name: string, callback: (data: EventProvider.IEventRegResultObject) => void): DestroyFunction;
    }
    namespace EventProvider {
        enum EventRegWatchType {
            REGISTER = 100,
            DESTROY = 200
        }
        interface Event extends EventContext {
            /** Function to unregister from an event */
            destroy: DestroyFunction;
        }
        interface IEventEntry {
            id: number;
            name: string;
            callback: (e: EventProvider.Event, ...data: any[]) => void;
            options: any;
            destroy: DestroyFunction | null;
        }
        interface IEventRegResultObject extends IResultObject {
            type: EventRegWatchType;
            event: IEventEntry;
        }
    }
}
declare module TcHmi {
    class Function {
        /**
         * @constructor
         * @param f
         */
        constructor(f: IFunction);
        /**
         * Will raise the function defined in constructor argument f: IFunction.
         * @param requiredArgs Optional required arguments. Will be injected before arguments defined in IFunction and after context object dummy if context object is required.
         * @preserve (Part of the public API)
         */
        execute(requiredArgs?: any[]): any;
        /**
         * Will raise the function defined in constructor argument f: IFunction and raises a callback afterwards.
         * @param requiredArgs Optional required arguments. Will be injected before arguments defined in IFunction and after context object dummy if context object is required.
         * @param callback
         * @preserve (Part of the public API)
         */
        executeEx(requiredArgs: any[], callback: (this: Function, data: Function.IExecuteResultObject) => void): void;
        /**
         * Releases all resources of the function
         * @preserve (Part of the public API)
         */
        destroy(): void;
    }
    module Function {
        interface IExecuteResultObject extends IResultObject {
            result?: any;
        }
    }
}
declare module TcHmi {
    /**
     * @namespace TcHmi.Functions
     * @preserve (Part of the public API)
     */
    module Functions {
        /**
         * @function registerFrameworkFunction
         * @memberOf TcHmi.Functions
         * @param {string} name
         * @param {function} func
         * @param {string} descriptionUrl
         * @preserve (Part of the public API)
         */
        function registerFrameworkFunction(name: string, func: (...args: any[]) => any, descriptionUrl?: string): void;
        /**
         * @function registerFunction
         * @memberOf TcHmi.Functions
         * @param {string} name
         * @param {(...args)} func
         * @preserve (Part of the public API)
         */
        function registerFunction(name: string, func: (...args: any[]) => any): void;
        /**
         * Returns a registered HMI function
         * @function getFunction
         * @memberOf TcHmi.Functions
         * @param {string} name
         * @returns {function}
         * @preserve (Part of the public API)
         */
        function getFunction(name: string): ((...args: any[]) => any) | undefined;
    }
}
declare module TcHmi {
    /**
    * Provides functions for interaction with the TwinCAT HMI Server.
    * @class Server
    * @memberOf TcHmi
    * @preserve (Part of the public API)
    */
    class Server {
        /**
         * Returns the current readyState value of the underlying websocket which is connected to the TwinCAT HMI Server.
         * @function getWebsocketReadyState
         * @memberOf TcHmi.Server
         * @returns {number | null} The current readyState value of the underlying websocket which is connected to the TwinCAT HMI Server or null.
         * @preserve (Part of the public API)
         */
        static getWebsocketReadyState(): number | null;
        /**
         * Returns true if the websocket is ready and false if its not.
         * @function isWebsocketReady
         * @returns {boolean} If true the websocket is ready for connectivity.
         * @preserve (Part of the public API)
         */
        static isWebsocketReady(): boolean;
        /**
         * Write one or more values to a TwinCAT HMI Server symbol.
         * @function writeSymbol
         * @memberOf TcHmi.Server
         * @param {string|string[]} symbolName The target TwinCAT HMI Server symbolname.
         * @param {string|number|boolean|Object|Array} value The value which should be written to the target symbol.
         * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns {number} Request id
         * @preserve (Part of the public API)
         */
        static writeSymbol(symbolName: string | string[], value: any | any[], callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
       * Write one or more values to a TwinCAT HMI Server symbol.
       * @function writeSymbol
       * @memberOf TcHmi.Server
       * @param {string|string[]} symbolName The target TwinCAT HMI Server symbolname.
       * @param {string|number|boolean|Object|Array} value The value which should be written to the target symbol.
       * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
       * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback Asynchronous response callback which will be raised if the operation has finished.
       * @returns {number} Request id
       * @preserve (Part of the public API)
       */
        static writeSymbolEx(symbolName: string | string[], value: any | any[], requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
         * Reads the value of a TwinCAT HMI Server symbol.
         * @function readSymbol
         * @memberOf TcHmi.Server
         * @param {string|string[]} symbolName The target TwinCAT HMI Server symbolname.
         * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
         * @returns {number} Request id
         * @preserve (Part of the public API)
         */
        static readSymbol(symbolName: string | string[], callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
        * Reads the value of a TwinCAT HMI Server symbol.
        * @function readSymbol
        * @memberOf TcHmi.Server
        * @param {string|string[]} symbolName The target TwinCAT HMI Server symbolname.
        * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
        * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
        * @returns {number} Request id
        * @preserve (Part of the public API)
        */
        static readSymbolEx(symbolName: string | string[], requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
         * Requests a message to the hmi server with default connection parameter
         * @function request
         * @memberOf TcHmi.Server
         * @param {Object} request Request object
         * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
         * @returns {number} Request id
         * @preserve (Part of the public API)
         */
        static request(request: TcHmi.Server.IMessage, callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
        * Requests a message to the hmi server with given connection parameter
        * @function requestEx
        * @memberOf TcHmi.Server
        * @param {Object} request Request object
        * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
        * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback Asynchronous response callback which will be raised if the operation has finished. The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
        * @returns {number} Request id
        * @preserve (Part of the public API)
        */
        static requestEx(request: TcHmi.Server.IMessage, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
         * Subscribe to a to a list of commands.
         * Subscription have to be unsubscribed by use of the TcHmi.Server.unsubscribe function.
         * @function subscribe
         * @memberOf TcHmi.Server
         * @param {Object[]} commands
         * @param {number} interval Subscription refresh interval.
         * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns {number} Request id
         * @preserve (Part of the public API)
         */
        static subscribe(commands: TcHmi.Server.ICommand[], interval: number, callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
         * Subscribe to a to a list of commands.
         * Subscription have to be unsubscribed by use of the TcHmi.Server.unsubscribe function.
         * @function subscribe
         * @memberOf TcHmi.Server
         * @param {Object[]} commands
         * @param {number} interval Subscription refresh interval.
         * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
         * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns {number} Request id
         * @preserve (Part of the public API)
         */
        static subscribeEx(commands: TcHmi.Server.ICommand[], interval: number, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
         * Unsubscribe a list of commands.
         * @function unsubscribe
         * @memberOf TcHmi.Server
         * @param {number} requestId The id of the subscription request which shall be unsubscribed.
         * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns {number} Request id
         * @preserve (Part of the public API)
         */
        static unsubscribe(requestId: number, callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
         * Unsubscribe a list of commands.
         * @function unsubscribe
         * @memberOf TcHmi.Server
         * @param {number} requestId The id of the subscription request which shall be unsubscribed.
         * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
         * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns {number} Request id
         * @preserve (Part of the public API)
         */
        static unsubscribeEx(requestId: number, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.IResultObject) => void)): number | null;
        /**
        * Releases a request and associated resources like callbacks.
        * @function
        * @param {number | null} id Id of the request to release.
        */
        static releaseRequest(id: number | null): void;
        /**
         * Get current username as string or null.
         * @returns {string|null}
         * @preserve (Part of the public API)
         */
        static getCurrentUser(this: void): string | null;
        /**
         * Get groups membership of current user as array (can be empty).
         * @returns {string[]}
         * @preserve (Part of the public API)
         */
        static getGroupsOfCurrentUser(this: void): string[];
        /**
         * Get current user config.
         * @preserve (Part of the public API)
         */
        static getCurrentUserConfig(this: void): Server.userConfigOnServer;
        /**
        * Login into a TcHmiServer, reloads the page on success, call of a callback on failure
        * @param {string | null | undefined} username String with the username
        * @param {string | null | undefined} password String with the password
        * @param {boolean = true} persistent Should the session be valid even after browser restart
        * @param {null | ((this: void, data: TcHmi.Server.IResultObject) => void)} callback? This callback is called if the login was not successful
        * @return {boolean} returns a boolean if the login was called
        * @preserve (Part of the public API)
        */
        static login(username: string | null | undefined, password: string | null | undefined, persistent?: boolean, callback?: (this: void, resultObject: TcHmi.IResultObject) => void): boolean;
        /**
         * Login into a TcHmiServer, reloads the page on success, call of a callback on failure
         * @param {string | null | undefined} username String with the username
         * @param {string | null | undefined} password String with the password
         * @param {boolean = true} persistent Should the session be valid even after browser restart
         * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
         * @param {null | ((this: void, data: TcHmi.ResultObject) => void)} callback? This callback is called if the login was not successful
         * @return {boolean} returns a boolean if the login was called
         * @preserve (Part of the public API)
         */
        static loginEx(username: string | null | undefined, password: string | null | undefined, persistent: boolean, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: (this: void, data: TcHmi.IResultObject) => void): boolean;
        /**
         * Logout from a TcHmiServer, reloads the page on success, call of a callback on failure
         * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback This callback is called if the logout was not successful
         * @return {boolean} returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */
        static logout(callback?: null | ((this: void, resultObject: TcHmi.IResultObject) => void)): boolean;
        /**
         * Logout from a TcHmiServer, reloads the page on success, call of a callback on failure
         * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
         * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback This callback is called if the logout was not successful
         * @return {boolean} returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */
        static logoutEx(requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): boolean;
        /**
         * Logout all users with a specific username or all users from a TcHmiServer
         * @param {string | Server.IForceLogoutTarget} username username to logout.
         * If empty string or null is provided, all users are logged out.
         * The authentification domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
         * 'Domain::' will logout every user from this domain
         * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback This callback is called if the logout was not successful
         * @return {boolean} returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */
        static forceLogout(username: string | Server.IForceLogoutTarget | null | undefined, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): boolean;
        /**
         * Logout all users with a specific username or all users from a TcHmiServer
         * @param {string | Server.IForceLogoutTarget} username username to logout.
         * If empty string or null is provided, all users are logged out.
         * The authentification domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
         * 'Domain::' will logout every user from this domain
         * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
         * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback This callback is called if the logout was not successful
         * @return {boolean} returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */
        static forceLogoutEx(username: string | TcHmi.Server.IForceLogoutTarget | null | undefined, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): boolean;
    }
    module Server {
        interface IResultObject extends TcHmi.IResultObject {
            /** The response of the server. Could be missing if we have an error. */
            response?: IMessage;
        }
        type IMessage = IReadWriteMessage | ISubscriptionMessage | IEventMessage;
        interface IMessageBase {
            apiVersion?: string;
            id?: number;
            sessionId?: string;
            error?: IErrorDetails;
            /** custom string which will be in the answer again */
            customerData?: string;
            commands?: ICommand[];
        }
        interface IReadWriteMessage extends IMessageBase {
            requestType: 'ReadWrite';
        }
        interface ISubscriptionMessage extends IMessageBase {
            requestType: 'Subscription';
            /** Minimal time the subscription ticks will be fired on symbol changes. If not set the default of the project will be used */
            intervalTime?: number | null;
        }
        interface IEventMessage extends IMessageBase {
            requestType: 'Event';
        }
        enum Error {
            HMI_SUCCESS = 0,
            HMI_E_FAIL = 257,
            HMI_E_SYMBOL_IN_USE = 274,
            HMI_E_SYMBOL_NOT_MAPPED = 513,
            HMI_E_MISSING_LICENSE_HANDSHAKE = 781,
            HMI_E_LICENSE_VERIFY = 782,
            HMI_E_INSUFFICIENT_ACCESS = 4101
        }
        /** tchmi:server#/definitions/accessEnum */
        enum ACCESS {
            NONE = 0,
            READ = 1,
            WRITE = 2,
            READWRITE = 3
        }
        interface ICommand {
            /** Name of the symbol */
            symbol: string;
            /** custom string which will be in the answer again */
            customerData?: string;
            /** Read value */
            readValue?: any;
            /** Write value */
            writeValue?: any;
            /** Error of the command */
            error?: IErrorDetails;
            /** Command options */
            commandOptions?: ICommandOptions[];
            /** Should/is the request restricted in amount of array entries? 0 disables the limit. */
            limit?: number;
            /** Array entries should/do not start at the beginning (Zero-based numbering) */
            offset?: number;
            /** The answer has this amount of entries */
            maxEntries?: number;
        }
        type IRequestType = 'ReadWrite' | 'Subscription' | 'Event';
        type ICommandOptions = 'Config' | 'SendWriteValue' | 'Add' | 'Replace' | 'Delete' | 'SendErrorMessage' | 'Poll' | 'Offline' | 'UniqueHash' | 'ForceSingleWrite' | 'Extension1' | 'Extension2' | 'Extension3' | 'Extension4';
        const enum userConfigState {
            /** Userconfig is still loaded. */
            loading = 0,
            /** Userconfig loading failed. */
            loadingerror = 1,
            /** No auth is required. */
            noAuthRequired = 2,
            /** Engineering server is active. */
            communicationDisabled = 3,
            /** Access set by group membership. */
            usergroup = 4
        }
        interface userConfigOnServer {
            /** State of the request for the config from server */
            state: TcHmi.Server.userConfigState;
            /** List of the groups the current user is member of */
            userIsInGroups: string[];
            /** Current Username */
            name: string | null;
            /** Current domain */
            domain: string | null;
            /** Current locale of this user for texts. Could be undefined if client locale should be used for this user! */
            locale: string | undefined;
            /** Current locale of this user for date formating. Could be undefined if client locale should be used for this user! */
            timeFormatLocale: string | undefined;
            /** Current time zone of this user to use in .toLocaleString() option. Could be undefined if client locale should be used for this user! */
            timeZone: string | undefined;
            /** Current ip as seen from the server */
            clientIp: string;
            /** Current Session ID */
            session: string | null;
            /** Thumbprint/fingerprint of the client certificate */
            clientCertificate: string | null;
            /** Timespan (in ms) for a auto logoff. null disables auto logoff */
            autoLogOffMilliSeconds: number | null;
            /** Clear text error message */
            errorMessage: string;
            /** Mame of the extension which handles default authentification */
            defaultAuthExtension: string;
        }
        interface IRequestOptions {
            timeout?: number;
            parallel?: boolean;
            refresh?: boolean;
        }
        interface IForceLogoutTarget {
            /** IP adress of the client */
            clientIp?: string;
            /** Thumbprint of the used client certificate */
            clientCertificate?: string;
            /** User group */
            group?: string;
            /** session id of the user */
            sessionId?: string;
        }
        class UserManagement {
            /**
             * Add a new user with a given password
             * @param {string} userName
             * @param {string} password
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static addUser(userName: string, password: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Add a new user with a given password
             * @param {string} userName
             * @param {string} password
             * @param {object} options optional options
             * @param {string} options.domain domain of user management. defaults to TcHmiUserManagement
             * @param {boolean} options.enabled a new user can be disabled
             * @param {string} options.autoLogout ISO8601 TimeSpan for logout after user interaction
             * @param {string} options.locale locale of this user
             * @param {string[]} options.groups list of groups the user will be part of
             * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static addUserEx(
            /** username to add */
            userName: string, 
            /** password for the new user */
            password: string, 
            /** optional details for this new user */
            options?: Partial<TcHmi.Server.UserManagement.IUserDetails> | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all usernames as a string array
             * @param {null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listUsernames(callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all usernames as a string array
             * @param {object} options optional options
             * @param {string} options.domain domain of user management. defaults to TcHmiUserManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listUsernamesEx(options?: TcHmi.Server.UserManagement.IUserManagementOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all username as a dictionary with all meta data
             * @param {null | ((this: void, data: TcHmi.Server.UserManagement.IUserResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listUsers(callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUserResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all username as a dictionary with all meta data
             * @param {object} options optional options
             * @param {string} options.domain domain of user management. defaults to TcHmiUserManagement
             * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
             * @param {null | ((this: void, data: TcHmi.Server.UserManagement.IUserResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listUsersEx(options?: TcHmi.Server.UserManagement.IUserManagementOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUserResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all user groups as a dictionary with all meta data
             * @param {null | ((this: void, data: TcHmi.Server.UserManagement.IGroupResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listUserGroups(callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IGroupResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all user groups as a dictionary with all meta data
             * @param {object} options optional options (not used till now)
             * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
             * @param {null | ((this: void, data: TcHmi.Server.UserManagement.IGroupResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listUserGroupsEx(options?: {} | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IGroupResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all users of a group as a string array
             * @param {null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listUsersInGroup(groupName: string, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all users of a group as a string array
             * @param {object} options optional options
             * @param {string} options.domain domain of user management. defaults to TcHmiUserManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listUsersInGroupEx(groupName: string, options?: TcHmi.Server.UserManagement.IUserManagementOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.UserManagement.IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Removes a user
             * @param userName
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static removeUser(userName: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
              * Removes a user
              * @param {string} userName
              * @param {object} options optional options
              * @param {string} options.domain defaults to TcHmiUserManagement
              * @param {TcHmi.Server.IRequestOptions|null} requestOptions Request options
              * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
              * @preserve (Part of the public API)
              */
            static removeUserEx(userName: string, options?: TcHmi.Server.UserManagement.IUserManagementOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Update user config
             * @param userName
             * @param {object} options optional options
             * @param {string} options.domain domain of user management. defaults to TcHmiUserManagement
             * @param {boolean} options.enabled a new user can be disabled
             * @param {string} options.autoLogout ISO8601 TimeSpan for logout after user interaction
             * @param {string} options.locale locale of this user
             * @param {string} options.newName new name for this user
             * @param {string} options.password new password for this user
             * @param {string[]} options.addGroups List of groups the user will be added
             * @param {string[]} options.removeGroups List of groups the user will be removed
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static updateUser(
            /** username to update */
            userName: string, 
            /** details for this user */
            options?: UserManagement.IUpdateUserDetails | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Update user config
             * @param userName
             * @param {object} options optional options
             * @param {string} options.domain domain of user management. defaults to TcHmiUserManagement
             * @param {boolean} options.enabled a new user can be disabled
             * @param {string} options.autoLogout ISO8601 TimeSpan for logout after user interaction
             * @param {string} options.locale locale of this user
             * @param {string[]} options.addGroups List of groups the user will be added
             * @param {string[]} options.removeGroups List of groups the user will be removed
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static updateUserEx(
            /** username to update */
            userName: string, 
            /** details for this user */
            options?: TcHmi.Server.UserManagement.IUpdateUserDetails | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
        }
        namespace UserManagement {
            interface IUserManagementOptions {
                /** Domain of the user management. defaults to TcHmiUserManagement */
                domain?: string;
            }
            interface IBaseUserDetails extends IUserManagementOptions {
                /** a new user can be disabled */
                enabled: boolean;
                /** ISO8601 TimeSpan for logout after user interaction */
                autoLogout: string;
                /** locale of this user. 'client' and 'project' are special values for project global or browser */
                locale?: string;
                /** locale of this user for date formating. 'client' and 'project' are special values for project global or browser */
                timeFormatLocale?: string;
                /** time zone of this user. 'client' and 'project' are special values for project global or browser */
                timeZone?: string;
            }
            interface IUserDetails extends IBaseUserDetails {
                /** list of groups the user is part of */
                groups: string[];
            }
            interface IUpdateUserDetails extends Partial<IBaseUserDetails> {
                /** new username for this user */
                newName?: string;
                /** password for the user */
                password?: string;
                /** list of new groups the user will be part of */
                addGroups?: string[];
                /** list of groups the user will be removed */
                removeGroups?: string[];
            }
            /** userList: string[]; */
            interface IUsernameListResultObject extends TcHmi.IResultObject {
                userList?: string[];
            }
            /** userDetails: Dictionary<IUserDetails>; */
            interface IUserResultObject extends TcHmi.IResultObject {
                userDetails?: Dictionary<TcHmi.Server.UserManagement.IUserDetails>;
            }
            interface IGroupDetails {
                /** a group can be disabled */
                enabled: boolean;
                fileAccess: TcHmi.Server.ACCESS;
                files: Dictionary<TcHmi.Server.ACCESS>;
                symbolAccess: TcHmi.Server.ACCESS;
                symbols: Dictionary<TcHmi.Server.ACCESS>;
            }
            interface IGroupResultObject extends TcHmi.IResultObject {
                groupDetailsList?: Dictionary<TcHmi.Server.UserManagement.IGroupDetails>;
            }
        }
        class RecipeManagement {
            /**
             * Lists all available recipe types
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listRecipeTypes(callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IRecipeTypeListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all available recipe types
             * This function provides more options to manipulate the request
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listRecipeTypesEx(
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IRecipeTypeListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a recipe type folder
             * @param {string} path name of the new folder
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static createRecipeTypeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a recipe type folder
             * This function provides more options to manipulate the request
             * @param {string} path name of the new folder
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static createRecipeTypeFolderEx(path: string, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe type folder
             * @param {string} path name of the folder
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeTypeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe type folder
             * This function provides more options to manipulate the request
             * @param {string} path name of the folder
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeTypeFolderEx(path: string, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a new recipe type
             * @param {string} recipeTypeName name of the recipe type
             * @param {TcHmi.Server.RecipeManagement.RecipeType} recipeType recipe type definition
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static createRecipeType(recipeTypeName: string, recipeType: TcHmi.Server.RecipeManagement.RecipeType, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a new recipe type
             * This function provides more options to manipulate the request
             * @param {string} recipeTypeName name of the recipe type
             * @param {TcHmi.Server.RecipeManagement.RecipeType} recipeType recipe type definition
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static createRecipeTypeEx(recipeTypeName: string, recipeType: TcHmi.Server.RecipeManagement.RecipeType, path: string | null, 
            /** options for the recipeManagement */
            options?: TcHmi.Server.RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe type
             * @param {string} recipeTypeName old name of the recipe type
             * @param {string | null} path old path of the recipe type (root folder if set to null)
             * @param {string} newName new name of the recipe type
             * @param {string | null} newPath new path of the recipe type (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static renameRecipeType(recipeTypeName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe type
             * This function provides more options to manipulate the request
             * @param {string} recipeTypeName old name of the recipe type
             * @param {string | null} path old path of the recipe type (root folder if set to null)
             * @param {string} newName new name of the recipe type
             * @param {string | null} newPath new path of the recipe type (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static renameRecipeTypeEx(recipeTypeName: string, path: string | null, newName: string, newPath: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe type folder
             * @param {string} recipeTypeFolderName old name of the recipe type
             * @param {string | null} path old path of the recipe type (root folder if set to null)
             * @param {string} newName new name of the recipe type
             * @param {string | null} newPath new path of the recipe type (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static renameRecipeTypeFolder(recipeTypeFolderName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe type folder
             * This function provides more options to manipulate the request
             * @param {string} recipeTypeFolderName old name of the recipe type
             * @param {string | null} path old path of the recipe type (root folder if set to null)
             * @param {string} newName new name of the recipe type
             * @param {string | null} newPath new path of the recipe type (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static renameRecipeTypeFolderEx(recipeTypeFolderName: string, path: string | null, newName: string, newPath: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe type
             * @param {string} recipeTypeName name of the recipe type
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeType(recipeTypeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe type
             * This function provides more options to manipulate the request
             * @param {string} recipeTypeName name of the recipe type
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeTypeEx(recipeTypeName: string, path: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all available recipes
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listRecipes(callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IRecipeListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all available recipes
             * This function provides more options to manipulate the request
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static listRecipesEx(
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IRecipeListResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a recipe folder
             * @param {string} path name of the new folder
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static createRecipeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a recipe folder
             * This function provides more options to manipulate the request
             * @param {string} path name of the new folder
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static createRecipeFolderEx(path: string, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe folder
             * @param {string} path name of the folder
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe folder
             * This function provides more options to manipulate the request
             * @param {string} path name of the folder
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeFolderEx(path: string, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a new recipe
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {TcHmi.Server.RecipeManagement.Recipe} recipe recipe definition
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static createRecipe(recipeName: string, path: string | null, recipe: RecipeManagement.Recipe, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Creates a new recipe
             * This function provides more options to manipulate the request
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {TcHmi.Server.RecipeManagement.Recipe} recipe recipe definition
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static createRecipeEx(recipeName: string, path: string | null, recipe: RecipeManagement.Recipe, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists one recipe
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static getRecipe(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IGetRecipeResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists one recipe
             * This function provides more options to manipulate the request
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static getRecipeEx(recipeName: string, path: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IGetRecipeResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Updates a recipe
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {Dictionary<any>} newValues dictionary of the new values
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static updateRecipe(recipeName: string, path: string | null, newValues: Dictionary<any>, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Updates a recipe
             * This function provides more options to manipulate the request
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {Dictionary<any>} newValues dictionary of the new values
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static updateRecipeEx(recipeName: string, path: string | null, newValues: Dictionary<any>, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads all values which is referenced by a recipe
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static readFromTarget(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IReadFromTargetResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads all values which is referenced by a recipe
             * This function provides more options to manipulate the request
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.Server.RecipeManagement.IReadFromTargetResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static readFromTargetEx(recipeName: string, path: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IReadFromTargetResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads the current values which are referenced from a base recipe and write it back
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static teach(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads the current values which are referenced from a base recipe and write it back
             * This function provides more options to manipulate the request
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static teachEx(recipeName: string, path: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads the current values which are referenced from a base recipe and write it into a new recipe
             * @param {string} recipeName name of the base recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {string} newRecipeName name of the new recipe. (could be prefixed with a path if seperated with ::)
             * @param {string | null} newRecipePath path of the new recipe. (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static teachAsNewRecipe(recipeName: string, path: string | null, newRecipeName: string, newRecipePath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Reads the current values which are referenced from a base recipe and write it into a new recipe
             * This function provides more options to manipulate the request
             * @param {string} recipeName name of the base recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {string} newRecipeName name of the new recipe. (could be prefixed with a path if seperated with ::)
             * @param {string | null} newRecipePath path of the new recipe. (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static teachAsNewRecipeEx(recipeName: string, path: string | null, newRecipeName: string, newRecipePath: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Activates a recipe (writes all values)
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static activate(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Activates a recipe (writes all values)
             * This function provides more options to manipulate the request
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static activateEx(recipeName: string, path: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all active recipes
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static getActiveRecipes(callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IGetActiveRecipesResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Lists all active recipes
             * This function provides more options to manipulate the request
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static getActiveRecipesEx(
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.RecipeManagement.IGetActiveRecipesResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe
             * @param {string} recipeName old name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path old path of the recipe (root folder if set to null)
             * @param {string} newName new name of the recipe
             * @param {string | null} newPath new path of the recipe (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static renameRecipe(recipeName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe
             * This function provides more options to manipulate the request
             * @param {string} recipeName old name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path old path of the recipe (root folder if set to null)
             * @param {string} newName new name of the recipe
             * @param {string | null} newPath new path of the recipe (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static renameRecipeEx(recipeName: string, path: string | null, newName: string, newPath: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe folder
             * @param {string} recipeFolderName old name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path old path of the recipe (root folder if set to null)
             * @param {string} newName new name of the recipe
             * @param {string | null} newPath new path of the recipe (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static renameRecipeFolder(recipeFolderName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Renames or moves a recipe folder
             * This function provides more options to manipulate the request
             * @param {string} recipeFolderName old name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path old path of the recipe (root folder if set to null)
             * @param {string} newName new name of the recipe
             * @param {string | null} newPath new path of the recipe (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static renameRecipeFolderEx(recipeFolderName: string, path: string | null, newName: string, newPath: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static deleteRecipe(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Deletes a recipe
             * This function provides more options to manipulate the request
             * @param {string} recipeName name of the recipe (could be prefixed with a path if seperated with ::)
             * @param {string | null} path path of the recipe (root folder if set to null)
             * @param {object} options optional options
             * @param {string} options.domain domain of recipe management. defaults to recipeManagement
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static deleteRecipeEx(recipeName: string, path: string | null, 
            /** options for the recipeManagement */
            options?: RecipeManagement.IRecipeOptions | null, 
            /** Request options */
            requestOptions?: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
        }
        namespace RecipeManagement {
            interface RecipeType {
                /** List of RecipeTypes this RecipeType inherits  */
                recipeTypeNames?: string[];
                /** List of symbol definitions for this RecipeType */
                members: Dictionary<{
                    /** Name of the symbol of this entry */
                    symbol: string;
                    /** defaultValue for this symbol */
                    defaultValue: any;
                    /** Schema the value inside a Recipe should validate */
                    schema?: string;
                    /** Engineering unit for this symbol */
                    unit?: string;
                    comment?: string;
                    enabled?: boolean;
                    group?: string;
                    order?: number;
                } | {
                    recipeType: string;
                }>;
                options?: {
                    /** None: no restriction from recipeType
                    Disabled: All member of the recipe are disabled */
                    enabled?: 'None' | 'Disabled';
                    comment?: string;
                };
            }
            /** Dictionary of folders or RecipeTypes */
            interface FolderRecipeType {
                [index: string]: FolderRecipeType | RecipeType;
            }
            interface IRecipeListResultObject extends TcHmi.IResultObject {
                value?: FolderRecipe;
            }
            interface Recipe {
                /** Name of the RecipeTypes this Recipe implements */
                recipeTypeName: string;
                /** Values for the Symbols */
                values: Dictionary<any>;
            }
            /** Dictionary of folders or Recipes */
            interface FolderRecipe {
                [index: string]: FolderRecipe | Recipe;
            }
            interface IRecipeTypeListResultObject extends TcHmi.IResultObject {
                value?: TcHmi.Server.RecipeManagement.FolderRecipeType;
            }
            interface IGetRecipeResultObject extends TcHmi.IResultObject {
                value?: TcHmi.Server.RecipeManagement.Recipe;
            }
            interface IReadFromTargetResultObject extends TcHmi.IResultObject {
                value?: Dictionary<TcHmi.Server.RecipeManagement.Recipe>;
            }
            interface IGetActiveRecipesResultObject extends TcHmi.IResultObject {
                recipeList?: string[];
            }
            interface IRecipeOptions {
                /** domain of the RecipeManagement. defaults to TcHmiRecipeManagement */
                domain?: string;
            }
        }
        class Historize {
            /**
             * Adding a Symbol to the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {TcHmi.Server.Historize.IEntrySettings} settings
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static add(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Adding a Symbol to the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {TcHmi.Server.Historize.IEntrySettings} settings
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static addEx(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Adding a Symbol to the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {TcHmi.Server.Historize.IEntrySettings} settings
             * @param {TcHmi.Server.Historize.IOptions} options global settings
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static addEx2(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, options: TcHmi.Server.Historize.IOptions | null, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Removing a Symbol from the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static remove(symbolName: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
            * Removing a Symbol from the Historize Configuration of the server
            * @param {string} symbolName Name of the Symbol to manipulate
            * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
            * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
            * @preserve (Part of the public API)
            */
            static removeEx(symbolName: string, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Removing a Symbol from the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {TcHmi.Server.Historize.IOptions} options
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static removeEx2(symbolName: string, options: TcHmi.Server.Historize.IOptions | null, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Update a config of a Symbol in the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {TcHmi.Server.Historize.IEntrySettings} settings
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static update(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Update a config of a Symbol in the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {TcHmi.Server.Historize.IEntrySettings} settings
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static updateEx(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Update a config of a Symbol in the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {TcHmi.Server.Historize.IEntrySettings} settings
             * @param {TcHmi.Server.Historize.IOptions} options global settings
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static updateEx2(symbolName: string, settings: TcHmi.Server.Historize.IEntrySettings, options: TcHmi.Server.Historize.IOptions | null, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Gets the current config of a Symbol in the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static get(symbolName: string, callback?: null | ((this: void, data: TcHmi.Server.Historize.IEntryResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Gets the current config of a Symbol in the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {TcHmi.Server.IRequestOptions} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static getEx(symbolName: string, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.Historize.IEntryResultObject) => void)): TcHmi.IErrorDetails;
            /**
             * Gets the current config of a Symbol in the Historize Configuration of the server
             * @param {string} symbolName Name of the Symbol to manipulate
             * @param {TcHmi.Server.Historize.IOptions|null} options
             * @param {TcHmi.Server.IRequestOptions|null} requestOptions for the request itself
             * @param {null | ((this: void, data: TcHmi.IResultObject) => void)} callback
             * @preserve (Part of the public API)
             */
            static getEx2(symbolName: string, options: Historize.IOptions | null, requestOptions: TcHmi.Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.Server.Historize.IEntryResultObject) => void)): TcHmi.IErrorDetails;
        }
        module Historize {
            interface IEntrySettings {
                /** ISO8601 Time Span */
                INTERVAL?: string;
                MAXENTRIES?: number;
                ROWLIMIT?: number;
                RECORDINGENABLED?: boolean;
            }
            interface IEntrySettingsEx {
                /** ISO8601 Time Span */
                interval?: string;
                maxEntries?: number;
                rowLimit?: number;
                recordingEnabled?: boolean;
            }
            /** Global options for the historization */
            interface IOptions {
                /** Domain of the historize handling. defaults to TcHmiSqliteHistorize */
                domain?: string;
            }
            interface IEntryResultObject extends TcHmi.IResultObject {
                key?: string;
                settings?: IEntrySettings;
            }
        }
        class Events {
            /**
             * Confirm an alarm.
             * @param alarm The alarm to confirm.
             */
            static confirmAlarm(alarm: Events.Alarm, callback?: (this: void, data: TcHmi.IResultObject) => void): void;
            /**
             * Register a consumer for events.
             * @param filter    The filter of this consumer. Only events matching the filter will be passed on to the consumer.
             * @param callbacks The callbacks to pass events back to the consumer. Consumers can specify one callback for listing events and one for the event subscription.
             */
            static registerConsumer(filter: Filter | null, callbacks: {
                list?: (this: void, data: Events.ListResult) => void;
                subscription?: (this: void, data: Events.SubscriptionResult) => void;
            }): DestroyFunction | null;
        }
        module Events {
            interface Consumer {
                filter: System.Filter;
                rawFilter: TcHmi.Filter;
                activeAlarmIds: (number | string)[];
                listCallback?: (data: ListResult) => void;
                subscriptionCallback?: (data: SubscriptionResult) => void;
            }
            interface ListResult extends TcHmi.IResultObject {
                events?: Event[];
            }
            interface SubscriptionResult extends TcHmi.IResultObject {
                event?: Event;
                changeType?: ChangeType;
                removedByFilter?: boolean;
            }
            enum Type {
                Message = 0,
                Alarm = 1
            }
            enum Severity {
                Verbose = 0,
                Info = 1,
                Warning = 2,
                Error = 3,
                Critical = 4
            }
            enum AlarmState {
                Raised = 0,
                Confirmed = 1,
                Cleared = 2,
                ClearedAndConfirmed = 3
            }
            enum ConfirmationState {
                NotSupported = 0,
                NotRequired = 1,
                WaitForConfirmation = 2,
                Confirmed = 3,
                Reset = 4
            }
            interface Event {
                type: Type;
                severity: Severity;
                domain: string;
                sourceDomain: string;
                name: string;
                text: string;
                timeRaised: Date;
                params: Dictionary<any>;
            }
            interface Message extends Event {
                type: Type.Message;
            }
            interface Alarm extends Event {
                type: Type.Alarm;
                id: number | string;
                timeCleared: Date;
                timeConfirmed: Date;
                alarmState: AlarmState;
                confirmationState: ConfirmationState;
            }
            enum ChangeType {
                AlarmRaised = 0,
                AlarmChanged = 1,
                AlarmDisposed = 2,
                MessageSent = 3
            }
            function isAlarm(value: Event): value is Alarm;
        }
    }
}
declare module TcHmi {
    /**
    * @class
    */
    class SymbolExpression {
        /**
        * @member
        */
        static RegExpExpressionGroupByPipe: RegExp;
        /**
        * @member
        */
        static RegExpExpression: RegExp;
        /**
         * @constructor
         * @param expression
         */
        constructor(expression: string | null);
        /**
        * Returns the expression as string.
        * @member
        * @preserve (Part of the public API)
        */
        toString(): string;
        /**
         * @preserve (Part of the public API)
         */
        getContent(): string;
        /**
         *
         * @preserve (Part of the public API)
         */
        getTag(): SymbolTag;
        /**
         * Returns the uniqe name basename of the expression
         */
        getName(): string;
        /**
         * @preserve (Part of the public API)
         */
        getPath(): string;
        /**
         * @preserve (Part of the public API)
         */
        getPathTokens(): string[];
        /**
         * @preserve (Part of the public API)
         */
        getType(): SymbolType;
        /**
         * @preserve (Part of the public API)
         */
        getOptions(): SymbolExpression.IOptions;
    }
    module SymbolExpression {
        interface IOptions {
            BindingMode?: TcHmi.BindingMode;
            /** Deprecated - Kept for compatibility. Will hold first defined BindingEvent. Complete list is stored in BindingEvents array.*/
            BindingEvent?: string;
            BindingEvents?: string[];
            Timeout?: number;
            Interval?: number;
            Parallel?: boolean;
            SubscriptionMode?: 'Change' | 'Poll';
        }
    }
}
declare module TcHmi {
    /**
     * Provides methods to read and write symbol values and schemas.
     * @class Symbol
     * @memberOf TcHmi
     * @preserve (Part of the public API)
     */
    class Symbol {
        /**
         * Constructor
         * @param {string} expression
         */
        constructor(expression: string);
        /**
        * Reads the value of the current symbol.
        * Throws an exception if the symbol is not available
        * @function read
        * @returns A copy of the value
        * @preserve (Part of the public API)
        */
        read(): any;
        /**
        * Reads the value of the current symbol and raises a callback with a copy of the result.
        * @param {string} expression
        * @param callback with gets a copy of the value
        * @returns
        * @preserve (Part of the public API)
        */
        readEx(callback?: (this: TcHmi.Symbol, data: TcHmi.Symbol.IReadResultObject | TcHmi.Symbol.IServerReadResultObject) => void): any;
        /**
         * Writes the value of the current symbol.
         * @param value
         * @param callback
         * @preserve (Part of the public API)
         */
        write(value: any, callback?: ((this: TcHmi.Symbol, data: Symbol.IWriteResultObject | TcHmi.Symbol.IServerWriteResultObject) => void)): void;
        /**
         * Watches for changes of the current symbol and raises the callback in case of a change.
         * @param callback
         * @preserve (Part of the public API)
         */
        watch(callback?: (this: Symbol, data: TcHmi.Symbol.IWatchResultObject | TcHmi.Symbol.IServerWatchResultObject) => void): DestroyFunction;
        /**
         * Returns the underlying TcHmi.SymbolExpression object.
         * @preserve (Part of the public API)
         */
        getExpression(): TcHmi.SymbolExpression;
        /**
         * Resolves the schema of the current symbol.
         * @param callback
         * @preserve (Part of the public API)
         */
        resolveSchema(callback?: (this: Symbol, data: TcHmi.Symbol.ISchemaResultObject) => void): void;
        /**
         *
         * @param callback
         * @preserve (Part of the public API)
         */
        exists(callback?: (this: Symbol, data: TcHmi.Symbol.IExistsResultObject) => void): void;
        /**
         * Destroys the current symbol object.
         * @preserve (Part of the public API)
         */
        destroy(): void;
        /**
         * Reads the value of a symbol by name and type.
         * @param {string} name
         * @param type
         * @returns
         * @preserve (Part of the public API)
         */
        static read(name: string, type: TcHmi.SymbolType): any;
        /**
         * Reads the value of a symbol by expression.
         * @function readEx
         * @param {string} expression
         * @returns
         * @preserve (Part of the public API)
         */
        static readEx(expression: string): any;
        /**
         * Reads the value of a symbol by expression and raises a callback with the result.
         * @param {string} expression
         * @param callback
         * @returns
         * @preserve (Part of the public API)
         */
        static readEx2(expression: string, callback?: (this: void, data: TcHmi.Symbol.IReadResultObject | Symbol.IServerReadResultObject) => void): void;
        /**
         * Writes the value of a symbol by name and type.
         * @param {string} name
         * @param type
         * @param value
         * @param callback
         * @preserve (Part of the public API)
         */
        static write(name: string, type: TcHmi.SymbolType, value: any, callback?: null | ((this: void, data: Symbol.IWriteResultObject | TcHmi.Symbol.IServerWriteResultObject) => void)): void;
        /**
         * Writes the value of a symbol by expression.
         * @function writeEx
         * @param {string} expression
         * @param value
         * @param callback
         * @preserve (Part of the public API)
         */
        static writeEx(expression: string, value: any, callback?: null | ((this: void, data: Symbol.IWriteResultObject | TcHmi.Symbol.IServerWriteResultObject) => void)): void;
        /**
         * Resolves the schema of the current symbol.
         * @param {string} expression
         * @param callback
         * @preserve (Part of the public API)
         */
        static resolveSchema(expression: string, callback?: (this: void, data: TcHmi.Symbol.ISchemaResultObject) => void): void;
        /**
        *
        * @param callback
        * @preserve (Part of the public API)
        */
        static exists(expression: string, callback?: (this: Symbol, data: TcHmi.Symbol.IExistsResultObject) => void): void;
        /**
         * @function isSymbolExpression
         * @param {string} expression
         * @preserve (Part of the public API)
         */
        static isSymbolExpression(expression: string): boolean;
    }
    module Symbol {
        interface IWatchResultObject extends TcHmi.IResultObject {
            value?: any;
            dirtyPaths?: string[];
            destroy?: TcHmi.DestroyFunction;
        }
        interface IServerWatchResultObject extends IWatchResultObject {
            response?: TcHmi.Server.IMessage;
        }
        interface IReadResultObject extends TcHmi.IResultObject {
            value?: any;
            dirtyPaths?: string[];
        }
        interface IServerReadResultObject extends IReadResultObject {
            response?: TcHmi.Server.IMessage;
        }
        interface IWriteResultObject extends TcHmi.IResultObject {
            value?: any;
        }
        interface IServerWriteResultObject extends TcHmi.Symbol.IWriteResultObject {
            response?: TcHmi.Server.IMessage;
        }
        interface ISchemaResultObject extends TcHmi.IResultObject {
            schema?: TcHmi.JsonSchema;
        }
        interface IExistsResultObject extends TcHmi.IResultObject {
            result?: boolean;
        }
        /**
        * @class ObjectResolver
        * @memberOf TcHmi.Symbol
        * @preserve (Part of the public API)
        */
        class ObjectResolver {
            /**
             * Constructor
             * @param {string} expression
             */
            constructor(obj: any);
            /**
            * Resolves all symbol expression occurences in the current object.
            * @param callback
            * @preserve (Part of the public API)
            */
            resolve(callback?: (this: ObjectResolver, data: TcHmi.Symbol.ObjectResolver.IResultObject<any>) => void): () => void;
            /**
             * Watches for changes of symbol expressions in the current object und returns the object with updated values.
             * @param callback
             * @preserve (Part of the public API)
             */
            watch(callback?: (this: ObjectResolver, data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<any>) => void): DestroyFunction;
            /**
             * Destroys the current object.
             * @preserve (Part of the public API)
             */
            destroy(): void;
        }
        module ObjectResolver {
            interface IWatchResultObject<T extends object> extends TcHmi.IResultObject {
                value?: T;
                destroy?: TcHmi.DestroyFunction;
            }
            interface IResultObject<T extends object> extends TcHmi.IResultObject {
                value?: T;
            }
        }
    }
    type SymbolTag = 's' | 'i' | 'l' | 'pp' | 'tp' | 'f' | 'ctrl';
    enum SymbolType {
        Invalid = 0,
        Server = 10,
        Internal = 20,
        LocalizedText = 30,
        PartialParam = 40,
        TemplateParam = 50,
        Function = 60,
        Control = 70
    }
}
declare module TcHmi {
    /**
    * Provides functions to set partials as view.
    * @class View
    * @preserve (Part of the public API)
    */
    class View {
        /**
         * Loads a view partial into the dom.
         * @function load
         * @param {string} url
         * @param {null | function} callback
         * @preserve (Part of the public API)
         */
        static load(url: string, callback?: null | ((data: TcHmi.IResultObject) => void)): void;
        /**
         * Returns the current view object.
         * @function get
         * @returns {TcHmi.Controls.System.baseTcHmiContro}
         * @preserve (Part of the public API)
         */
        static get(): TcHmi.Controls.System.baseTcHmiControl | null;
    }
}
declare module TcHmi {
    module Type {
        function getSchema(typeName: string): JsonSchema | null;
        module Schema {
            function resolveDefault(schema: TcHmi.JsonSchema): any;
        }
    }
}
declare module TcHmi.System {
    module Callback {
    }
}
declare module TcHmi {
    module System {
        class InternalSymbolManager {
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            add(name: string, item: TcHmi.System.IInternalSymbolItem): void;
            remove(name: string): void;
            update(name: string, item: TcHmi.System.IInternalSymbolItem): void;
            write(name: string, value: any, callback?: (this: InternalSymbolManager, data: TcHmi.Symbol.IWriteResultObject) => void): void;
            read(name: string, callback?: (this: InternalSymbolManager, data: TcHmi.Symbol.IReadResultObject) => void): void;
            getType(name: string, callback: (this: InternalSymbolManager, data: InternalSymbolManager.ITypeResultObject) => void): void;
            watch(name: string, callback: (this: void, data: TcHmi.Symbol.IWatchResultObject) => void): DestroyFunction;
        }
    }
    module InternalSymbolManager {
        interface IInternalSymbolItemEx extends TcHmi.System.IInternalSymbolItem {
            callbacks: IInternalSymbolEntryCallback[];
        }
        interface IInternalSymbolEntryCallback {
            callback: ((this: void, data: TcHmi.Symbol.IWatchResultObject) => void);
            destroy: DestroyFunction;
        }
        interface ITypeResultObject extends IResultObject {
            type?: string;
        }
    }
}
declare module TcHmi {
    module System {
        class TemplateParamSymbolManager {
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            add(name: string, type: string, value: any): void;
            remove(name: string): void;
            get(name: string): TemplateParamSymbolManager.ITemplateParamSymbolItem | undefined;
            destroy(): void;
            keepAlive(name: string): boolean;
        }
    }
    module TemplateParamSymbolManager {
        interface ITemplateParamSymbolItem {
            name: string;
            type: string;
            value: any;
            callbacks: any[];
        }
    }
}
/**
* baseTcHmiControl
* -------------------------------------------------------------------
* (c) 2016 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
* @ignore
*/
/**
*  @preserve (Part of the public API)
*/
declare module TcHmi {
    /**
     *  @preserve (Part of the public API)
     */
    module Controls {
        /**
         *  @preserve (Part of the public API)
         */
        module System {
            /**
            * @preserve (Part of the public API)
            */
            abstract class baseTcHmiControl {
                /**
                 * Constructor
                 * @param element
                 * @param pcElement
                 * @param attrs
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /**
                 * Main HTML Element of the Control as jQuery object.
                 * @preserve (Part of the public API)
                 */
                abstract getElement(): JQuery;
                /**
                * Precompiled copy of main JQuery element defining this control.
                * @preserve (Part of the public API)
                */
                abstract getPcElement(): JQuery;
                /**
                 * Set __pcElement
                 * @param value
                 */
                abstract __setPcElement(value: JQuery): void;
                /**
                 * List of attributes defined in html.
                 * @preserve (Part of the public API)
                 */
                abstract getAttrs(): TcHmi.Controls.ControlAttributeList;
                /**
                 * Type of the control
                 * @preserve (Part of the public API)
                 */
                abstract getType(): string;
                /**
                 * Control Id
                 * @preserve (Part of the public API)
                 */
                abstract getId(): string;
                /**
                 * Returns a boolean determining if the control is attached to the dom.
                 * @preserve (Part of the public API)
                 */
                abstract getIsAttached(): boolean;
                /**
                 * Returns a boolean determining if the control was already destroyed.
                 * @preserve (Part of the public API)
                 */
                abstract getIsDestroyed(): boolean;
                /**
                * Returns a boolean determining if the control should not be destroyed.
                * @preserve (Part of the public API)
                */
                abstract getKeepAlive(): boolean;
                /**
                 * Sets __keepAlive
                 * @param value
                 */
                abstract __setKeepAlive(value: boolean): void;
                /**
                * Returns a boolean determining if the control is a container control.
                * @preserve (Part of the public API)
                */
                abstract getIsContainerControl(): boolean;
                /**
                * Parent control or null if there is (till now?) no parent control.
                * @preserve (Part of the public API)
                */
                abstract getParent(): TcHmi.Controls.System.baseTcHmiControl | null;
                /**
                * Sets __parent
                * @param value
                */
                abstract __setParent(value: TcHmi.Controls.System.baseTcHmiControl | null): void;
                /**
                 * Adds a child to a control if this is a container control.
                 * @param co
                 * @param pos
                 */
                abstract __addChild(co: TcHmi.Controls.System.baseTcHmiControl, pos?: number | null): void;
                /**
                 * Remove a child from a control if this is a container control.
                 * @param co
                 */
                abstract __removeChild(co: TcHmi.Controls.System.baseTcHmiControl): void;
                /**
                 * Get all child controls of the control.
                 * @preserve (Part of the public API)
                 */
                getChildren?(): TcHmi.Controls.System.baseTcHmiControl[];
                /**
                 * Adds a child control to the control.
                 * @preserve (Part of the public API)
                 */
                addChild?(co: TcHmi.Controls.System.baseTcHmiControl, pos?: number | null): void;
                /**
                 * Removes a child control from the control.
                 * @param co
                 * @preserve (Part of the public API)
                 */
                removeChild?(co: TcHmi.Controls.System.baseTcHmiControl): void;
                /**
                 * Returns the Row index of the Control inside a TcHmiGrid Container.
                 * @preserve (Part of the public API)
                 */
                abstract getGridRowIndex(): number | undefined;
                /**
                 * Sets a new GridRow index
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setGridRowIndex(valueNew: number | null): void;
                /**
                 * Returns the Column index of the Control inside a TcHmiGrid Container.
                 * @preserve (Part of the public API)
                 */
                abstract getGridColumnIndex(): number | undefined;
                /**
                 * Sets a new GridColumn index
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setGridColumnIndex(valueNew: number | null): void;
                /**
                * Returns the configured defaultInternalValue of the control property
                * @param propertyName
                * @preserve (Part of the public API)
                */
                protected abstract getAttributeDefaultValueInternal<T>(propertyName: string): T | null;
                /**
                 * Is raised before control attribute setters are called to allow initialization based on current attribute values.
                 * @preserve (Part of the public API)
                 */
                abstract __previnit(): void;
                /**
                * Is raised after control attribute setters have been called to allow initialization based on current attribute values.
                * @preserve (Part of the public API)
                */
                abstract __init(): void;
                /**
                * Is called of control is attached to the dom.
                * @preserve (Part of the public API)
                */
                abstract __attach(): void;
                /**
                * Is called if control is detached from the dom.
                * @preserve (Part of the public API)
                */
                abstract __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                * @preserve (Part of the public API)
                */
                abstract destroy(): void;
                /**
                 * AccessConfig
                 * @preserve (Part of the public API)
                 */
                abstract getAccessConfig(): AccessControl[];
                /**
                 * Sets the new AccessConfig
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setAccessConfig(valueNew: AccessControl[] | null): void;
                /**
                * Processes the current AccessConfig attribute value.
                * @preserve (Part of the public API)
                */
                abstract __processAccessConfig(): void;
                /**
                * Sets the value of the trigger attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setTrigger(valueNew: TcHmi.System.Trigger[] | null): void;
                /**
                * Returns the current trigger value.
                * @preserve (Part of the public API)
                */
                abstract getTrigger(): TcHmi.System.Trigger[] | null | undefined;
                /**
                 * Gets virtual access of a control
                 * @param name Name of the control right to fetch
                 * @preserve (Part of the public API)
                 */
                getDescriptionAccessByName?(name: string | null): TcHmi.System.ControlAccessDescription | null;
                /**
                 * Returns the mapping of virtual rights to real rights
                 * @preserve (Part of the public API)
                 */
                abstract getVirtualControlRightMappings(): VirtualControlRightMapping[];
                /**
                 * Sets the new VirtualControlRightMapping
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setVirtualControlRightMappings(valueNew: VirtualControlRightMapping[] | null): void;
                /**
                * Returns the effective value of isEnabled based on own and parent isEnabled variable.
                * @preserve (Part of the public API)
                */
                abstract getIsEnabled(): boolean | undefined;
                /**
                 * Sets the isEnabled attribute and calls the associated process function (processIsEnabled).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setIsEnabled(valueNew: boolean | null): void;
                /**
                * Processes the current isEnabled attribute value.
                */
                abstract __processIsEnabled(): void;
                /**
                * Clear isEnabled cache
                */
                abstract __clearIsEnabledCache(): void;
                /**
                 * List of classes of the control.
                 * @preserve (Part of the public API)
                 */
                abstract getClassNames(): string[] | undefined;
                /**
                 * Defines the classes the control is part of.
                 * @param valueNew
                 */
                abstract setClassNames(valueNew: string[] | null): void;
                abstract __injectRenderedDimensions(layoutData: TcHmi.System.ControlManager.ControlLayoutData): void;
                /**
                * Returns the current width of the Control.
                * @preserve (Part of the public API)
                */
                abstract getWidth(): number | null | undefined;
                /**
                 * Width processor
                 * @param callerControl
                 */
                abstract __processWidth(callerControl?: baseTcHmiControl): void;
                /**
                * Returns the current width unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getWidthUnit(): DimensionUnit | undefined;
                /**
                * Returns the current width mode of the control.
                * @preserve (Part of the public API)
                */
                abstract getWidthMode(): SizeMode | SizeModeWithContent | undefined;
                /**
                * Returns the current height of the Control.
                * @preserve (Part of the public API)
                */
                abstract getHeight(): number | null | undefined;
                /**
                 * Processing of Height
                 * @param callerControl
                 */
                abstract __processHeight(callerControl?: baseTcHmiControl): void;
                /**
                * Returns the current height mode of the control.
                * @preserve (Part of the public API)
                */
                abstract getHeightMode(): SizeMode | SizeModeWithContent | undefined;
                /**
                * Returns the current height unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getHeightUnit(): DimensionUnit | undefined;
                /**
                * Returns the current top coordinate of the Control.
                * @preserve (Part of the public API)
                */
                abstract getTop(): number | null | undefined;
                /**
                * Returns the current top coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getTopUnit(): DimensionUnit | undefined;
                /**
                * Returns the current left coordinate of the Control.
                * @preserve (Part of the public API)
                */
                abstract getLeft(): number | null | undefined;
                /**
                * Returns the current left coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getLeftUnit(): DimensionUnit | undefined;
                /**
                * Returns the current bottom coordinate of the Control.
                * @preserve (Part of the public API)
                */
                abstract getBottom(): number | null | undefined;
                /**
                * Returns the current bottom coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getBottomUnit(): DimensionUnit | undefined;
                /**
                * Returns the current right coordinate of the Control.
                * @preserve (Part of the public API)
                */
                abstract getRight(): number | null | undefined;
                /**
                * Returns the current right coordinate unit of the Control.
                * @preserve (Part of the public API)
                */
                abstract getRightUnit(): DimensionUnit | undefined;
                /**
                * Returns the current minwidth value.
                * @preserve (Part of the public API)
                */
                abstract getMinWidth(): number | null | undefined;
                /**
                * Returns the current minwidth unit.
                * @preserve (Part of the public API)
                */
                abstract getMinWidthUnit(): DimensionUnit | undefined;
                /**
                * Returns the current minheight value.
                * @preserve (Part of the public API)
                */
                abstract getMinHeight(): number | null | undefined;
                /**
                * Returns the current maxwidth value.
                * @preserve (Part of the public API)
                */
                abstract getMaxWidth(): number | null | undefined;
                /**
                * Returns the current maxwidth unit.
                * @preserve (Part of the public API)
                */
                abstract getMaxWidthUnit(): DimensionUnit | undefined;
                /**
                * Returns the current maxheight value.
                * @preserve (Part of the public API)
                */
                abstract getMaxHeight(): number | null | undefined;
                /**
                * Returns the current maxheight unit.
                * @preserve (Part of the public API)
                */
                abstract getMaxHeightUnit(): DimensionUnit | undefined;
                /**
                * Returns the current rendered left value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedLeft(): number | null;
                /**
                * Returns the current rendered top value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedTop(): number | null;
                /**
                * Returns the current rendered right value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedRight(): number | null;
                /**
                * Returns the current rendered bottom value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedBottom(): number | null;
                /**
                * Returns the current rendered width value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedWidth(): number | null;
                /**
                * Returns the current rendered height value in pixel.
                * @preserve (Part of the public API)
                */
                abstract getRenderedHeight(): number | null;
                /**
                * Sets the value of the width attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setWidth(valueNew: number | null): void;
                /**
                 * Sets the unit of the width attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Sets the value of the width mode attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setWidthMode(valueNew: SizeMode | null): void;
                /**
                * Sets the value of the height attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setHeight(valueNew: number | null): void;
                /**
                 * Sets the value of the height mode attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setHeightMode(valueNew: SizeMode | null): void;
                /**
                 * Sets the unit of the height attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Returns the calculated width in pixel if self defined (not percent based).
                 * max-width overrides width, but min-width overrides max-width.
                 */
                abstract __getContentWidth(): number | null;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based).
                 * max-height overrides height, but min-height overrides max-height.
                 */
                abstract __getContentHeight(): number | null;
                /**
                * Sets the value of the top attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setTop(valueNew: number | null): void;
                /**
                 * Sets the unit of the top attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setTopUnit(valueNew: DimensionUnit | null): void;
                /**
                * Sets the value of the left attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setLeft(valueNew: number | null): void;
                /**
                 * Sets the unit of the left attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setLeftUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Sets the value of the bottom attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBottom(valueNew: number | null): void;
                /**
                 * Sets the unit of the bottom attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBottomUnit(valueNew: DimensionUnit | null): void;
                /**
                * Sets the value of the right attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setRight(valueNew: number | null): void;
                /**
                 * Sets the unit of the right attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setRightUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Sets the value of the minwidth attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setMinWidth(valueNew: number | null): void;
                /**
                * Sets the unit of the minwidth attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setMinWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Sets the value of the minheight attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setMinHeight(valueNew: number | null): void;
                /**
                * Returns the current minheight unit.
                * @preserve (Part of the public API)
                */
                abstract getMinHeightUnit(): DimensionUnit | undefined;
                /**
                 * Sets the unit of the minheight attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setMinHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                 * Sets the value of the maxwidth attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setMaxWidth(valueNew: number | null): void;
                /**
                 * Sets the unit of the maxwidth attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setMaxWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                * Sets the value of the maxheight attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setMaxHeight(valueNew: number | null): void;
                /**
                * Sets the unit of the maxheight attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */
                abstract setMaxHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current zindex value.
                * @preserve (Part of the public API)
                */
                abstract getZindex(): number | null | undefined;
                /**
                 * Sets the value of the zindex attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setZindex(valueNew: number | null): void;
                /**
                * Returns the current opacity value.
                * Sets the value of the zindex attribute.
                * @preserve (Part of the public API)
                */
                abstract getOpacity(): number | null | undefined;
                /**
                 * Sets the value of the opacity attribute. The value must be between 0 (0%) and 1 (100%).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setOpacity(valueNew: number | null): void;
                /**
                * Returns the current visibility value.
                * @preserve (Part of the public API)
                */
                abstract getVisibility(): Visibility | undefined;
                /**
                * Sets the value of the visibility attribute.
                * @param    {string}    valueNew   -   The new visibility value.
                * @preserve (Part of the public API)
                */
                abstract setVisibility(valueNew: Visibility | null): void;
                /**
                * Returns the current transform value.
                * @preserve (Part of the public API)
                */
                abstract getTransform(): Transform[] | null | undefined;
                /**
                 * Sets the value of the transform attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setTransform(valueNew: Transform[] | null): void;
                /**
                * Returns the current background value.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                 * Sets the background value and calls the associated process function (processBackground).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundColor(valueNew: Color | null): void;
                /**
                * Returns the current value of the member variable backgroundImage.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImage(): string | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImage" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImage) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImage(valueNew: string | null): void;
                /**
                * Returns the current value of the member variable backgroundImagePadding.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImagePadding(): FourSidedCss | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImagePadding" if the new value is not equal to the current value
                 * and calls the associated process function (processBackgroundImagePadding) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImagePadding(valueNew: FourSidedCss | null): void;
                /**
                * Returns the current value of the member variable backgroundImageWidth.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageWidth(): number | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageWidth" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageWidth) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageWidth(valueNew: number | null): void;
                /**
                * Returns the current value of the member variable backgroundImageWidthUnit.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageWidthUnit(): DimensionUnit | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageWidthUnit" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageWidthUnit) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current value of the member variable backgroundImageHeight.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageHeight(): number | null | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageHeight" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageHeight) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageHeight(valueNew: number | null): void;
                /**
                * Returns the current value of the member variable backgroundImageHeightUnit.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageHeightUnit(): DimensionUnit | undefined;
                /**
                 * Sets the value of the member variable "backgroundImageHeightUnit" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageHeightUnit) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current value of horizontalBackgroundImageAligment.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageHorizontalAlignment(): HorizontalAlignment | undefined;
                /**
                 * Sets the backgroundImageHorizontalAlignment value and calls the associated process function (processBackgroundImageHorizontalAlignment).
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
                /**
                * Returns the current value of backgroundImageVerticalAlignment.
                * @preserve (Part of the public API)
                */
                abstract getBackgroundImageVerticalAlignment(): VerticalAlignment | undefined;
                /**
                 * Sets the backgroundImageVerticalAlignment value and calls the associated process function (processBackgroundImageVerticalAlignment).
                 * Possible Values: "Left", "Top", "Center"
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBackgroundImageVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
                /**
                * Returns the current border-color value.
                * @preserve (Part of the public API)
                */
                abstract getBorderColor(): Color | null | undefined;
                /**
                 * Sets the border-color attribute value and calls the associated process function (processBorderColor).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBorderColor(valueNew: Color | null): void;
                /**
                * Returns the current border-width value.
                * @preserve (Part of the public API)
                */
                abstract getBorderWidth(): BorderWidth | null | undefined;
                /**
                 * Sets the border-width attribute value and calls the associated process function (processBorderWidth).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBorderWidth(valueNew: BorderWidth | null): void;
                /**
                * Returns the current border-radius value.
                * @preserve (Part of the public API)
                */
                abstract getBorderRadius(): BorderRadius | null | undefined;
                /**
                 * Sets the border-radius attribute value and calls the associated process function (processBorderRadius).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBorderRadius(valueNew: BorderRadius | null): void;
                /**
                 * Internal reference to the attribute "data-tchmi-border-type".
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setBorderStyle(valueNew: BorderStyle | null): void;
                /**
                * Returns the current border-style value.
                * @preserve (Part of the public API)
                */
                abstract getBorderStyle(): BorderStyle | null | undefined;
                /**
                * Sets the internal reference to the attribute "data-tchmi-box-shadow".
                * @preserve (Part of the public API)
                */
                abstract setBoxShadow(valueNew: BoxShadow[] | null): void;
                /**
                * Returns the current box-shadow value.
                * @preserve (Part of the public API)
                */
                abstract getBoxShadow(): BoxShadow[] | null | undefined;
                /**
                * Returns the current value of tooltip.
                * @preserve (Part of the public API)
                */
                abstract getTooltip(): string | null | undefined;
                /**
                 * Sets the tooltip attribute and calls the associated process function (processTooltip).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */
                abstract setTooltip(valueNew: string | null): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        /**
        * @class AccessManager
        */
        class AccessManager {
            /**
             * @constructor
             */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            /**
             * get current user config
             */
            getCurrentUserConfig(): Server.userConfigOnServer;
            /**
             * Checks if an right is allowed for the current user on this control or its parents
             * Rules for granting access:
             *      - Designer Mode Master => true
             *
             *      - Server Auth is not restricted (IsAuthRequired == false in Server) => TRUE
             *
             *      - Server Auth is not known right now => null
             *      - Server Auth loading error => false
             *
             *      - On this control: 1 Group  has  ALLOW => TRUE
             *      - On this control: 0 Groups have ALLOW, but 1 Group has DENY => FALSE
             *      - On this control: 0 Groups have ALLOW, 0 Groups have DENY => Ask Parent
             *
             *      - use control default of the bottom most control with this right. tchmi-view has operate/observe set to TRUE
             *      - control has no Parent (should not be possible) => FALSE
             *
             * @param control
             * @param accessright
             * @returns true/false or null if the state is not known right now
             */
            checkAccess(control: Controls.System.baseTcHmiControl, requestedAccessright: string): boolean | null;
        }
    }
}
declare module TcHmi.System {
    /**
    * @class TcHmi.System.AnimationProvider
    */
    class AnimationProvider {
        constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
        /**
         * Creates a new animation
         * @function
         * @param controlName {string}      The name of the control for which the animation is intendend.
         * @param selector {string}         A CSS selector to identify the element inside the control to animate.
         * @param animationName {string}    The name of the animation. If not provided a GUID will be generated.
         */
        create(controlName: string, selector: string): Animation;
        createAnimationController(animation: Animation, statusChangeCallback: (status: Animation.Status) => void): AnimationController;
    }
    interface AnimationController {
        isValid: () => boolean;
        run: () => void;
        pause: () => void;
        skip: () => void;
        reset: (callback?: () => void) => void;
        cleanup: () => void;
    }
}
declare module TcHmi.System {
    class Binding {
        constructor(expression: string, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl);
        destroy(): void;
        getExpression(): string | null;
        getSymbol(): Symbol | null;
        getPropertyName(): string;
        getControl(): TcHmi.Controls.System.baseTcHmiControl;
    }
    module Binding {
        enum State {
            Invalid = 0,
            Initializing = 5,
            Resuming = 7,
            Ready = 10,
            Suspended = 15,
            Destroyed = 20
        }
    }
}
declare module TcHmi.System {
    /**
    * @class
    */
    class BindingManager {
        constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
        /**
         *
         * @param propertyName
         * @param fnThis
         */
        getBinding(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): Binding;
        /**
         *
         * @param control
         */
        getBindingsByControl(control: TcHmi.Controls.System.baseTcHmiControl): Map<string, Binding> | undefined;
        /**
         * Creates a binding between a symbol and a control attribute setter.
         * @function createBinding
         * @param expression
         * @param propertyName
         * @param control
         */
        createBinding(expression: string, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): Binding;
        /**
         * Removes a binding between a symbol and a control attribute setter.
         * @function removeBinding
         * @param propertyName
         * @param control
         * @param bResetSetter
         */
        removeBinding(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl, bResetSetter?: boolean): void;
    }
}
declare module TcHmi {
    module System {
        class ControlManager {
            /** @constructor */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            resolveUcAttributes: () => void;
            /**
                Checks dimension and position changes for a set of controls or all
                @returns a list of all delayed controls for the user events
            */
            checkControlGeometry(geos?: TcHmi.System.ControlManager.ControlGeoData | Map<string, TcHmi.System.ControlManager.ControlGeoData>, delayedUserEvents?: boolean): {
                skippedResizedEventList: Controls.System.baseTcHmiControl[];
                skippedMovedEventList: Controls.System.baseTcHmiControl[];
            };
            /** @function */
            getControlsCache(): Map<string, TcHmi.Controls.System.baseTcHmiControl>;
            /**
             * Sets the a value of a property
             * If the value is null it will set the default value to the property and locks it with a watcher which will keep it on theme change.
             * @param control
             * @param propertyName
             * @param newValue new value or null if lock to Theme
             */
            setControlProperty(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string, newValue: any | null, dirtyPaths?: string[]): TcHmi.IErrorDetails;
            /**
             * Sets the a value of a property (Warning: this does not check for readonly flag!)
             * If the value is null it will set the default value to the property and locks it with a watcher which will keep it on theme change.
             * @param control
             * @param attribute
             * @param newValue new value or null if lock to Theme
             */
            setControlPropertyByAttribute(control: TcHmi.Controls.System.baseTcHmiControl, attribute: ControlAttributeDescription, newValue: any | null, dirtyPaths?: string[]): TcHmi.IErrorDetails;
            /**  @function */
            destruct(co: TcHmi.Controls.System.baseTcHmiControl): void;
            /**
            * Creates a new control.
            * The new control HTMLElement, available via getElement(), can be attached to the DOM afterwards.
            * @function
            */
            compile<C extends TcHmi.Controls.System.baseTcHmiControl>(elementOrString: JQuery | string, parent?: TcHmi.Controls.System.baseTcHmiControl | null, pos?: number | null): C | undefined;
            /** @function */
            addDescription(path: string, descr: ControlDescription): void;
            /**  @function */
            resolveDescriptionInheritation(): void;
            /** @function */
            getInheritanceTree(): ControlManager.InheritanceHierarchyEntry;
            /**
             * Get the whole DescriptionCache
             * map key is the control type string
              * @function
              */
            getDescriptionCache(): Map<string, ControlManager.DescriptionCacheEntry>;
            /**
             * Get a list of all types which the inheritance of the requested control type defines
             * @param type
             * @function
             */
            getDescriptionTypes(type: string | undefined | null): string[];
            /** @function */
            isRegisteredDescriptionType(type: string | undefined | null): boolean;
            /** Get DescriptionCacheEntry by type name
              * @function
              */
            getDescriptionCacheEntry(type: string | undefined | null): ControlManager.DescriptionCacheEntry | null;
            /** Get ControlDescription by type name
              * @function
              * @param {string} type - type of the Control
              */
            getDescription(type: string | undefined | null): ControlDescription | null;
            /** Get Description path from DescriptionCacheEntry
              * @function
              */
            getDescriptionPath(type: string | undefined | null): string | null;
            /** @function*/
            getDescriptionAttributes(type: string | undefined | null): ControlAttributeDescription[] | null;
            /** @function*/
            getDescriptionAccess(type: string | undefined | null): ControlAccessDescription[] | null;
            /**
            Get control attribute section from Description.json by name
            @function
            */
            getDescriptionAttributeByName(type: string | null | undefined, name: string | null | undefined): ControlAttributeDescription | null;
            /**
            Get control attribute section from Description.json by PropertyName
            @function
            */
            getDescriptionAttributeByPropertyName(type: string | undefined | null, propertyName: string): ControlAttributeDescription | null;
            /**
            @function
            */
            getUserControlConfigAttributeByPropertyName(ucConfigUrl: string, propertyName: string): ControlAttributeDescription | null;
            /**
            Get control attribute section from Description.json by SetterName
            @function
            */
            getDescriptionAttributeByPropertySetterName(type: string | undefined | null, propertySetterName: string): ControlAttributeDescription | null;
            /**
            Get control attribute section from Description.json by SetterName
            @function
            */
            getDescriptionAttributeByPropertyGetterName(type: string | undefined | null, propertyGetterName: string): ControlAttributeDescription | null;
            /**
             * Gets attribute description by name of property and does not determine between description and usercontrol attributes.
             * @param type
             * @param propertyName
             */
            getAttributeByPropertyName(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): ControlAttributeDescription | null;
            /**
             * Gets attribute description by name of property and does not determine between description and usercontrol attributes.
             * @param type
             * @param propertyName
             */
            getAttributeTypeByPropertyName(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): ControlAttributeType;
            /**
             * Gets attribute description by name of property setter and does not determine between description and usercontrol attributes.
             * @param type
             * @param propertyName
             */
            getAttributeByPropertySetterName(control: TcHmi.Controls.System.baseTcHmiControl, propertySetterName: string): ControlAttributeDescription | null;
            /**
            * Gets inherited access of a control
            * @param type control type name
            * @param name name of the control right to fetch
            */
            getDescriptionAccessByName(type: string | undefined | null, name: string | null): ControlAccessDescription | null;
            /** */
            resolveTemplateInheritation(): void;
        }
        module ControlManager {
            interface DescriptionCacheEntry {
                /** Control type as used internal */
                type: string;
                /** Path to the control description (has to be prefixed with basePath + 'Controls/') */
                path: string;
                /** Description.json of the control, but additional resolved inheritance information  */
                fullDescription: ControlDescriptionWithInheritance;
            }
            /** Geometric data of a control */
            interface ControlGeoData {
                ctrl: TcHmi.Controls.System.baseTcHmiControl;
                layoutData: ControlLayoutData;
            }
            /** Layout data of a control */
            interface ControlLayoutData {
                /** Control was moved. Can be resetted by the control itself */
                moved: boolean;
                /** Control was resized. Can be resetted by the control itself */
                resized: boolean;
                bounds: {
                    offsetTop: number | null;
                    offsetLeft: number | null;
                    width: number | null;
                    height: number | null;
                };
                computedStyles: Pick<CSSStyleDeclaration, 'left' | 'top' | 'right' | 'bottom' | 'width' | 'height'>;
            }
            interface InheritanceHierarchyEntry {
                controlType: string;
                children: InheritanceHierarchyEntry[];
            }
        }
    }
}
declare module TcHmi {
    module System {
        /**
        * Provides multiple types of dialogs to the user
        *
        * @class DialogManager
        */
        class DialogManager {
            /**
             * @constructor
             */
            constructor();
            /**
             * Change visibility of dialog and set its DialogType when showing
             *
             * @param dialogOwner Caller Id to prevent overwriting forreign dialogs. null overrides this check
             * @param bVisibility
             * @param dialogType
             */
            showDialog(dialogOwner: string | null, bVisibility: boolean, dialogType?: TcHmi.DialogManager.DialogType, options?: TcHmi.DialogManager.DialogOptions): boolean;
            /**
             * Changes the output content of the Dialog to a new value
             * The default Severity is Info
             *
             * @param dialogOwner Caller Id to prevent overwriting forreign dialogs. null overrides this check
             * @param newHtmlContent
             * @param severity
             */
            updateText(dialogOwner: string | null, newHtmlContent: string, severity?: DialogManager.DialogSeverity): boolean;
            /**
             *
             */
            updateProgress(): void;
            /**
             * Returns the current dialog owner.
             * null if we have no current owner (probably no open dialog).
             */
            getDialogOwner(): string | null;
        }
    }
}
declare module TcHmi {
    module System {
        class Filter {
            private constructor();
            /**
             * Converts a filter to an expression tree.
             * @param data The filter to convert
             */
            static parse(data: TcHmi.Filter | null, schema?: TcHmi.JsonSchema | null): Filter;
            /**
             * Determine whether the given candidate matches this filter.
             * @param candidate The candidate to test.
             */
            test(candidate: any): boolean;
        }
    }
}
/**
 * Used to execute eval in isolated scope.
 */
declare function gIsolatedEval_TcHmi_System_FunctionExpression_Results(s: string, resSE: any[], resFCE: any[]): any;
/**
 * Used to execute eval in isolated scope.
 */
declare function gIsolatedEval_TcHmi_System_FunctionExpression(s: string): any;
declare module TcHmi {
    module System {
        class FunctionExpression {
            /**
             *
             * @param functionExpression The expression... Example: 1 + 1 , Example: MyFunction(%s%PLC1.MAIN.nTest%/s%) + 1 + 1
             * @param enableWatchMode Defines if symbols within the FunctionExpression should be resolved based on a symbol watch or by explicit calls to each symbol which is the default.
             */
            constructor(functionExpression: string, enableWatchMode?: boolean);
            execute(ctx?: Context): any;
            watch(callback: (this: void, data: TcHmi.Symbol.IWatchResultObject) => void): DestroyFunction;
            destroy(): void;
        }
    }
}
declare module TcHmi {
    module System {
        class StyleManager {
            /** @constructor */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            /**
             * Writes all styles that are currently cached for the specified control into the head.
             * @param controlNames The target controls.
             */
            writeStylesFromCache(ctrls: TcHmi.Controls.System.baseTcHmiControl[]): void;
            /**
             * Removes all styles for the specified control from the head and saves them in the cache.
             * @param controlName The target control name.
             */
            removeStylesFromDom(ctrls: TcHmi.Controls.System.baseTcHmiControl[]): void;
            /**
             * Gets the existing style overwrites for a control.
             * @param controlName The name of the targeted Control.
             */
            getExistingStyleOverwrites(controlName: string): any;
            /**
             * Returns all styles set on a given element inside the specified control.
             * @param controlName   The target control name.
             * @param selector      The selector under which to find the style. Has to exactly match the selector that was used to set the style.
             */
            getStyle(controlName: string, selector: string): Dictionary<string[]> | undefined;
            /**
             * Returns an array of values for a given CSS property on a given element inside the specified control.
             * @param controlName   The target control name.
             * @param selector      The selector under which to find the style. Has to exactly match the selector that was used to set the style.
             * @param propertyName  The CSS property to get. If this parameter is not provided, all styles will be returned.
             */
            getStyle(controlName: string, selector: string, propertyName: string): string[] | undefined;
            /**
             * Writes the styles to a style element inside the control.
             * @param controlName   The name of the target control.
             * @param styles        The styles to write.
             */
            writeStyles(controlName: string, styles: any): void;
            /**
             * Replaces "%id%" in all selector parts with a given prefix. If "%id%" could not be found in a selector part the prefix is added to the start of the selector."#" is automatically prepended to the prefix.
             * @param selector  The selector to expand.
             * @param prefix    The prefix to add to the selector.
             */
            expandSelector(selector: string, prefix: string): string;
            /**
             * Theme Processor for generic styles.
             * @param controlName   The name of the target control.
             * @param selector      The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
             * @param property      The CSS property to process.
             * @param value         The value for the CSS property.
             */
            processGenericStyle(controlName: string, selector: string, property: string, value: string | null): void;
            /**
             * Theme Processor for generic styles.
             * @param controlName   The name of the target control.
             * @param selector      The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
             * @param property      The CSS property to process.
             * @param value         An array of values for the CSS property. This is useful for providing vendor-prefixed values to ensure compatibility.
             */
            processGenericStyle(controlName: string, selector: string, property: string, value: string[] | null): void;
            /**
             * Theme Processor for generic styles.
             * @param controlName   The name of the target control.
             * @param selector      The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
             * @param styles        A dictionary of property-value pairs. Can be used to set multiple styles simultaneously. The values can be strings or arrays of strings to provide vendor-prefixed values.
             */
            processGenericStyle(controlName: string, selector: string, styles: Dictionary<string | string[] | null> | null): void;
            processGenericStyle(controlName: string, selector: string, property: string | Dictionary<string | string[] | null> | null, value: string | string[] | null): void;
            /**
             * Theme Processor for background.
             * @param element   The jQuery element.
             * @param valueNew  The new value for the background.
             */
            processBackground(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<Background> | null | undefined): void;
            /**
             * Theme processor for SVG fill color.
             * @param element   The jQuery element.
             * @param valueNew      The new fill color.
             */
            processFillColor(element: JQuery | SVGElement[] | NodeListOf<SVGElement> | HTMLCollectionOf<SVGElement> | SVGElement | undefined, valueNew: Color | null | undefined): void;
            /**
             * Theme processor for SVG stroke color.
             * @param element The jQuery element.
             * @param valueNew      The new stroke color.
             */
            processStrokeColor(element: JQuery | SVGElement[] | NodeListOf<SVGElement> | HTMLCollectionOf<SVGElement> | SVGElement | undefined, valueNew: SolidColor | null | undefined): void;
            /**
             * Theme processor for text color.
             * @param element The jQuery element.
             * @param valueNew      The new text color.
             */
            processTextColor(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: SolidColor | null | undefined): void;
            /**
             * Theme processor for border color.
             * @param element The jQuery element.
             * @param valueNew      The new border color.
             */
            processBorderColor(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Color | null | undefined): void;
            /**
             * Theme processor for border width.
             * @param element The jQuery element.
             * @param valueNew      The new border widths.
             */
            processBorderWidth(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<BorderWidth> | null | undefined): void;
            /**
             * Theme processor for border radius.
             * @param element The jQuery element.
             * @param valueNew      The new border radii.
             */
            processBorderRadius(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: BorderRadius | null | undefined): void;
            /**
             * Theme processor for border style.
             * @param element The jQuery element.
             * @param valueNew      The new border styles.
             */
            processBorderStyle(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: BorderStyle | null | undefined): void;
            /**
             * Theme processor for box shadow.
             * @param element The jQuery element.
             * @param valueNew      The new border styles.
             */
            processBoxShadow(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: BoxShadow[] | null | undefined): void;
            /**
             * Theme processor for font family.
             * @param element The jQuery element.
             * @param valueNew      The new font family.
             */
            processFontFamily(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: FontFamily | null | undefined): void;
            /**
             * Theme processor for font size.
             * @param element The jQuery element.
             * @param valueNew      The new font size.
             * @param unitNew       The new font size unit. Defaults to "px".
             */
            processFontSize(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: number | null | undefined, unitNew: FontSizeUnit): void;
            /**
             * Theme processor for font style.
             * @param element The jQuery element.
             * @param valueNew      The new font style. Allowed values are "Normal", "Italic" and "Oblique".
             */
            processFontStyle(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: FontStyle | undefined): void;
            /**
             * Theme processor for font weight.
             * @param element The jQuery element.
             * @param valueNew      The new font weight. Allowed values are "Normal" and "Bold".
             */
            processFontWeight(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: FontWeight | undefined): void;
            /**
             * Theme processor for visibility.
             * Visibility also effects pointer events, i.e. a hidden element will not receive mouse click events.
             * Hidden still uses space in fluid calculations, collapsed is ignored there.
             * @param element The jQuery element.
             * @param valueNew      The new visibility. Allowed values are "Visible", "Collapsed" and "Hidden". Hidden still uses space in fluid calculations, collapsed is ignored there.
             */
            processVisibility(element: JQuery | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: Visibility | null | undefined): void;
            /**
             * Theme processor for horizontal alignment. This aligns the content of the target element, not the target element itself.
             * @param element The jQuery element.
             * @param valueNew      The new horizontal alignment. Allowed values are "Left", "Center" and "Right".
             */
            processContentHorizontalAlignment(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.HorizontalAlignment | undefined): void;
            /**
             * Theme processor for vertical alignment. This aligns the content of the target element, not the target element itself.
             * @param element The jQuery element.
             * @param valueNew      The new vertical alignment. Allowed values are "Top", "Center" and "Bottom".
             */
            processContentVerticalAlignment(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.VerticalAlignment | undefined): void;
            /**
             * Theme processor for content padding.
             * @param element The jQuery element.
             * @param valueNew      The new content padding.
             */
            processContentPadding(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<FourSidedCss> | null | undefined): void;
            /**
             * Theme processor for transforms.
             * @param element The jQuery element.
             * @param valueNew      The new transform value or an array of transform values.
             * @param order         If this parameter is passed, the transforms in valueNew will replace the transform at the specified place, instead of replacing all transforms. Note that origin and perspective are exempt from this.
             */
            processTransform(element: JQuery | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Transform | Transform[] | null | undefined, order?: number): void;
        }
    }
}
declare module TcHmi {
    module System {
        module Type {
            class TypeManager {
                /** @constructor */
                constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
                doWatchTypeDefinitions(callback?: null | ((this: TypeManager, data: IResultObject) => void)): void;
                /**
                 * Returns the schema related to typeName.
                 * @param typeName
                 */
                getSchema(typeName: string): JsonSchema | null;
            }
            module Schema {
                /**
                 * Resolves the default value of a schema.
                 * @param schema
                 */
                function resolveDefault(schema: TcHmi.JsonSchema): any;
            }
        }
    }
}
declare module TcHmi.System {
    enum SymbolState {
        Invalid = 0,
        Ready = 10,
        Destroyed = 20
    }
    class Symbol {
        constructor(expression: string | null);
        static resolveServerSymbolSchemaCache(callback: (this: void, data: TcHmi.IResultObject) => void): void;
        getExpression(): TcHmi.SymbolExpression | null;
        getState(): SymbolState;
        isDestroyed(): boolean;
        isReady(): boolean;
        destroy(): void;
        /**
         * Reads a value of the symbol and raises a callback with a copy of it
         * @param callback
         */
        read(callback: (this: Symbol, data: TcHmi.Symbol.IReadResultObject | TcHmi.Symbol.IServerReadResultObject) => void): void;
        write(value: any, callback?: (this: Symbol, data: TcHmi.Symbol.IWriteResultObject | TcHmi.Symbol.IServerWriteResultObject) => void): void;
        writeEx(value: any, dirtyPaths: string[] | null, callback?: (this: Symbol, data: TcHmi.Symbol.IWriteResultObject | TcHmi.Symbol.IServerWriteResultObject) => void): void;
        watch(callback: (this: Symbol, data: TcHmi.Symbol.IWatchResultObject | TcHmi.Symbol.IServerWatchResultObject) => void): DestroyFunction;
        static isServerSymbol(checkSymbol: Symbol): boolean;
        static isInternalSymbol(checkSymbol: Symbol): boolean;
        static isLocalizedTextSymbol(checkSymbol: Symbol): boolean;
        static isPartialParamSymbol(checkSymbol: Symbol): boolean;
        static isTemplateParamSymbol(checkSymbol: Symbol): boolean;
        static isFunctionSymbol(checkSymbol: Symbol): boolean;
        static isControlSymbol(checkSymbol: Symbol): boolean;
        exists(callback?: (this: Symbol, data: TcHmi.Symbol.IExistsResultObject) => void): void;
    }
}
/**
* FunctionProvider [UNDER_CONSTRUCTION]
* -------------------------------------------------------------------
* (c) 2016 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
* @ignore
*/
/**
* @namespace TcHmi
*/
declare module TcHmi {
    module System {
        class FunctionProvider {
            /**
             * @constructor
             */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            registerFunction(name: string, func: (...args: any[]) => any): void;
            /** @function */
            addDescription(path: string, obj: IFunctionDescription | null): void;
            isFunctionRegistered(name: string): boolean;
            getFunction(name: string): (...args: any[]) => any;
            getFunctionDescription(name: string): IFunctionDescription;
        }
    }
}
declare module TcHmi.System.Parser {
    /**
     * @class SymbolExpressionParser
     */
    class SymbolExpressionParser {
        /**
         * @constructor
         */
        constructor(text: string);
        /**
         * Loads the text to parse.
         * @function loadText
         * @param text
         */
        loadText(text: string): void;
        /**
         * @function resolveExpressionsBySymbolType
         * @param type
         */
        resolveExpressionsBySymbolType(type: SymbolType): TcHmi.SymbolExpression[];
        resolveExpressions(): TcHmi.SymbolExpression[];
    }
}
declare module TcHmi {
    module System {
        /**
        * @enum ScaleMode
        */
        enum ScaleMode {
            None = 0,
            ScaleToFit = 1,
            ScaleToFitWidth = 2,
            ScaleToFitHeight = 3,
            ScaleToFill = 4
        }
        /**
        * @class ViewManager
        */
        class ViewManager {
            /**
             * @constructor
             */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            private __animationFrameTimeId;
            private __doesScaling;
            /**
             * Sets the scalemode.
             * @function setScaleMode
             * @param scaleMode
             */
            setScaleMode(scaleModeStr: ScaleModeString): void;
            /**
             * Returns the current view control object
             * @function getView
             */
            getView(): Controls.System.baseTcHmiControl;
            /**
             * Loads a new view into the dom.
             * @function loadView
             * @param url
             * @param callback
             */
            loadView(url: string, callback?: null | ((this: ViewManager, data: TcHmi.IResultObject) => void)): void;
            /**
             * The callback will have the ViewManager as this
             * @param view
             * @param callback
             */
            loadViewObject(view: TcHmi.Controls.System.baseTcHmiControl, callback?: null | ((this: ViewManager, data: IResultObject) => void)): void;
        }
    }
}
declare module TcHmi {
    module System {
        /**
         Handles the implicit values of a control
         Values of a control are defined:
         
         initial only: Value explicit in the HTML
         defined in the project: Value implicit defined for a control class
         defined in the project: Value implicit defined for a theme for a control type
         
         defined by the control: Value implicit defined for a theme for a control type
         defined by the control: Value implicit defined from the defaultValueInternal of a control type (with resolved inheritance)
         */
        class ThemeManager {
            /** @constructor */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            /**
             * Gets the active Theme
             * @param newValue
             */
            getTheme(): string;
            /**
             * Sets a new Theme
             * @param newValue
             */
            setTheme(newValue: string, processTheme: boolean): Errors;
            /**
             *
             * @param controlDescr
             */
            registerControlThemeFiles(controlDescr: ControlDescription): void;
            /**
             * Disables inactive theme
             * Load and activate control and project theme
             */
            processActiveTheme(): void;
            /**
            Retrigger usercontrols
            @function
            */
            retriggerUserControls: () => void;
            /**
             * Parses every source of implicit properties and returns this or null
             * Can have different value after the event onThemeDataChanged.
             * The order of resources are
             * 1) control class
             * 2) theme definition of the control type in project
             * 3) theme definition in control
             * 4) defaultValueInternal in Description.json of the control
             * @param control
             * @param propertyName
             */
            getDefaultPropertyValue<T>(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): TcHmi.Theme.Resource<T>;
            /**
             * Gets a themed resource.
             * Parses every source of properties and returns this or null
             * Can have different value after the event onThemeDataChanged.
             * The order of resources are
             * 1) control class
             * 2) theme definition of the control type in project
             * 3) theme definition in control

             * @param {TcHmi.Controls.System.baseTcHmiControl} control Control which needs the resource
             * @param {string} resourceName name of the resource
             * @return {TcHmi.Theme.Resource<T> | null} returns the resource or null
             */
            getThemeResource<T>(control: TcHmi.Controls.System.baseTcHmiControl, resourceName: string): TcHmi.Theme.Resource<T>;
            /**
             *
             * @param control
             * @param propertyName
             */
            watchAttributeDefaults(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): void;
            /**
             * Start watcher to remove a theme lock on manual variable set
             * @param controlId
             */
            startAttributeSetterWatcher(control: TcHmi.Controls.System.baseTcHmiControl): void;
            /**
             *
             * @param controlName
             * @param propertyName
             */
            unwatchAttributeDefaults(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): void;
        }
    }
}
/**
* TopMostLayer
* -------------------------------------------------------------------
* (c) 2017 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
*/
/**
* @namespace TcHmi
*/
declare module TcHmi {
    /**
    * @namespace TcHmi.System
    */
    module System {
        /**
        * Provides a layer to show elements above the normal visualization
        * @class TopMostLayer
        */
        class TopMostLayer {
            /**
             * @constructor
             */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            /**
             * Appends the elements to the top layer above the normal visualization
             * A reference to the element should be kept to be able to call remove() function
             * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
             * Your element could have style="min-width:50%;min-height:50%;"
             *
             * @param origin control which requests this or null if from codebehind
             * @param element jQuery Collection with exactly one element which should be moved to TopMostLayer
             * @param options optional options
             * @param options.resizeCb optional callback which will be called after resizeing the element or parent ("this" will be the calling control in this function)
             * @param options.removeCb optional callback which will be called after removing the element ("this" will be the calling control in this function)
             * @param options.centerHorizontal bool to center the given element
             * @param options.centerVertical bool to center the given element
             * @returns boolean success of the add
             */
            add(origin: TcHmi.Controls.System.baseTcHmiControl | null, element: JQuery, options?: TcHmi.TopMostLayer.IOptions | TcHmi.TopMostLayer.IOptionsEx): boolean;
            /**
             * Removes the element from the top layer and returns it for later use by the caller
             * If the element is not inside the TopMostLayer it will be returned without change.
             * @param origin control which requests this or null if from codebehind
             * @param element jQuery Collection with the element which should be removed from TopMostLayer
             * @returns jQuery Collection
             */
            remove(origin: TcHmi.Controls.System.baseTcHmiControl | null, element: JQuery, cancel: boolean): JQuery;
        }
        namespace TopMostLayer {
            /** all options and css backup of an element */
            interface ICtrlMetaData extends TcHmi.TopMostLayer.IOptions {
                styleBackup?: Partial<CSSStyleDeclaration>;
                /** control which requests this or null if from codebehind */
                origin: TcHmi.Controls.System.baseTcHmiControl | null;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmd {
                /**
                * Is set to define which framework engineering instances (designer-views and live-views) should get the response command.
                * Should only matter if the command produces a response command.
                * -----------------------------------------------------------------------------------------------------------------------
                * Valid Values:
                * -----------------------------------------------------------------------------------------------------------------------
                * null      - Do not send response
                * ''        - Do not send response
                * '*'       - Broadcast resoibseresponse
                * '[GUID]'  - Send response only to framework instance with instance id === [GUID]
                * ------------------------------------------------------------------------------------------------------------------------
                */
                replyTo: string | null;
            }
            type AllSyncCmd = SyncCmdConfirmation | SyncCmdControlDoubleClick | SyncCmdControlLocked | SyncCmdCopyMoveControls | SyncCmdCreateControls | SyncCmdCurrentPartialContent | SyncCmdCurrentPartialEditorLockState | SyncCmdCurrentPartialHighlightContainerState | SyncCmdDomVisibility | SyncCmdDropControlPosition | SyncCmdKeyStates | SyncCmdMessages | SyncCmdPartialEditorLocked | SyncCmdPartialEditorUnlocked | SyncCmdRegisterSyncView | SyncCmdRemoveControls | SyncCmdRequestCurrentPartialContent | SyncCmdRequestCurrentPartialEditorLockState | SyncCmdRequestDropControlPosition | SyncCmdRequestRequiredViewPortSize | SyncCmdScrollPositionChanged | SyncCmdSelectControl | SyncCmdSelectControls | SyncCmdSelectEachControl | SyncCmdServerAddress | SyncCmdSyncControls | SyncCmdTcHmiConfigChanged | SyncCmdTransactionBegin | SyncCmdTransactionCommit | SyncCmdUnselectControl | SyncCmdUnselectControls | SyncCmdUnselectEachControl | SyncCmdZoom;
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdConfirmation extends SyncCmd {
                name: 'Confirmation';
                confirmId: string;
                errorCode: TcHmi.Errors;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdControlDoubleClick extends SyncCmd {
                name: 'ControlDoubleClick';
                targetPartial: string;
                targetControl: SyncCmdControlDoubleClickTargetControl;
            }
            interface SyncCmdControlDoubleClickTargetControl {
                id: string;
                type: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdControlLocked extends SyncCmd {
                name: 'ControlLocked';
                targetPartial: string;
                targetControl: string;
                locked: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCreateControls extends SyncCmd {
                name: 'CreateControls';
                targetPartial: string;
                controls: SyncCmdCreateControlsControl[];
            }
            interface SyncCmdCreateControlsControl {
                targetParentControl: string;
                controlId: string;
                controlHtml: string;
                domPosition: number;
                select: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCopyMoveControls extends SyncCmd {
                name: 'CopyMoveControls';
                targetPartial: string;
                targetParentControl: string;
                deltaPosition: Nullable<Position>;
                controls: string[];
                attributes?: {
                    name: string;
                    value: any;
                }[];
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCurrentPartialContent extends SyncCmd {
                name: 'CurrentPartialContent';
                targetPartial: string;
                content: string;
                piggyBack: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCurrentPartialContentPiggyBack {
                requestInstance: string;
                broadcast: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCurrentPartialEditorLockState extends SyncCmd {
                name: 'CurrentPartialEditorLockState';
                targetPartial: string;
                locked: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdCurrentPartialHighlightContainerState extends SyncCmd {
                name: 'CurrentPartialHighlightContainerState';
                targetPartial: string;
                state: boolean;
                replyTo: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdDomVisibility extends SyncCmd {
                name: 'DomVisibility';
                targetPartial: string;
                targetControl: string;
                visibility: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdDropControlPosition extends SyncCmd {
                name: 'DropControlPosition';
                targetPartial: string;
                controls: SyncCmdDropControlPositionControl[];
            }
            interface SyncCmdDropControlPositionControl {
                piggyBack: string;
                targetParentControl: string;
                type: string;
                position: {
                    centerX: number;
                    centerY: number;
                };
                attributes?: {
                    name: string;
                    value: any;
                }[];
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface KeyState {
                down: boolean;
                up: boolean;
            }
            interface KeyStates {
                leftAlt: KeyState;
                leftCtrl: KeyState;
                leftShift: KeyState;
                rightAlt: KeyState;
                rightCtrl: KeyState;
                rightShift: KeyState;
            }
            interface SyncCmdKeyStates extends SyncCmd {
                name: 'KeyStates';
                targetPartial: string;
                states: KeyStates;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdMessages extends SyncCmd {
                name: 'Messages';
                messages: Message[];
            }
            interface Message {
                identifier: string;
            }
            interface AddMessage extends Message {
                append: boolean;
                type: TcHmi.Engineering.ErrorPane.MessageType;
                targetPartial: string;
                targetInstance: string;
                content: string;
                line: number;
                position: number;
                unixTimestamp: number;
            }
            interface RemoveMessage extends Message {
                remove: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRemoveControls extends SyncCmd {
                name: 'RemoveControls';
                targetPartial: string;
                controls: string[];
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRequestCurrentPartialContent extends SyncCmd {
                name: 'RequestCurrentPartialContent';
                targetPartial: string;
                piggyBack: string | null;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRequestCurrentPartialEditorLockState extends SyncCmd {
                name: 'RequestCurrentPartialEditorLockState';
                targetPartial: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRequestDropControlPosition extends SyncCmd {
                name: 'RequestDropControlPosition';
                targetPartial: string;
                piggyBack: any;
                /** Type of the new control. */
                type: string;
                /** drop coordinate relative to the viewport not the document */
                position: Position;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdScrollPositionChanged extends SyncCmd {
                name: 'ScrollPositionChanged';
                targetPartial: string;
                position: Position;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /** DEPRECATED  - SyncCmdSelectControls should be used instead. */
            interface SyncCmdSelectControl extends SyncCmd {
                name: 'SelectControl';
                targetPartial: string;
                control: string;
            }
            interface SyncCmdSelectControls extends SyncCmd {
                name: 'SelectControls';
                targetPartial: string;
                controls: string[];
                forcePrevUnselectEach: boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdSelectEachControl extends SyncCmd {
                name: 'SelectEachControl';
                targetPartial: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdServerAddress extends SyncCmd {
                name: 'ServerAddress';
                host: string;
                port: number;
                protocol: 'http:' | 'https:';
                targetPartial: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdSyncControls extends SyncCmd {
                name: 'SyncControls';
                targetPartial: string;
                controls: SyncCmdSyncControlsControl[];
            }
            interface SyncCmdSyncControlsControl {
                targetControl: string;
                descriptionPath: string | null;
                controlHtml: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdTcHmiConfigChanged extends SyncCmd {
                name: 'TcHmiConfigChanged';
                configPath: string;
                type: 'TcHmiConfig' | 'UserControlConfig' | 'Localization' | 'ThemeConfig';
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /** DEPRECATED - SyncCmdUnselectControls should be used instead. */
            interface SyncCmdUnselectControl extends SyncCmd {
                name: 'UnselectControl';
                targetPartial: string;
                control: string;
            }
            interface SyncCmdUnselectControls extends SyncCmd {
                name: 'UnselectControls';
                targetPartial: string;
                controls: string[];
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdUnselectEachControl extends SyncCmd {
                name: 'UnselectEachControl';
                targetPartial: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdPartialEditorLocked extends SyncCmd {
                name: 'PartialEditorLocked';
                targetPartial: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdPartialEditorUnlocked extends SyncCmd {
                name: 'PartialEditorUnlocked';
                targetPartial: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRegisterSyncView extends SyncCmd {
                name: 'RegisterSyncView';
                targetPartial: string;
                targetInstance: string;
                syncViewLevel: 'Slave' | 'Master';
                sessionId: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdRequestRequiredViewPortSize extends SyncCmd {
                name: 'RequestRequiredViewPortSize';
                targetPartial: string;
                width: number;
                height: number;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdTransactionBegin extends SyncCmd {
                name: 'TransactionBegin';
                transactionName: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdTransactionCommit extends SyncCmd {
                name: 'TransactionCommit';
                transactionName: string;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            interface SyncCmdZoom extends SyncCmd {
                name: 'Zoom';
                targetPartial: string;
                factor: number;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            abstract class SyncCmdToFramework {
                constructor(cmd: SyncCmd);
                sendSynchronousConfirmation: boolean;
                abstract run(): void;
                confirmRequest(confirmId: string): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkRemoveControls extends SyncCmdToFramework {
                constructor(cmd: SyncCmdRemoveControls);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkConfirmation extends SyncCmdToFramework {
                constructor(cmd: SyncCmdConfirmation);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkControlLocked extends SyncCmdToFramework {
                constructor(cmd: SyncCmdControlLocked);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkCreateControls extends SyncCmdToFramework {
                constructor(cmd: SyncCmdCreateControls);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkCurrentPartialContent extends SyncCmdToFramework {
                constructor(cmd: SyncCmdCurrentPartialContent);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkCurrentPartialEditorLockState extends SyncCmdToFramework {
                constructor(cmd: SyncCmdCurrentPartialEditorLockState);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkCurrentPartialHighlightContainerState extends SyncCmdToFramework {
                constructor(cmd: SyncCmdCurrentPartialHighlightContainerState);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkDomVisibility extends SyncCmdToFramework {
                constructor(cmd: SyncCmdDomVisibility);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkKeyStates extends SyncCmdToFramework {
                constructor(cmd: SyncCmdKeyStates);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkRequestDropControlPosition extends SyncCmdToFramework {
                constructor(cmd: SyncCmdRequestDropControlPosition);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkScrollPositionChanged extends SyncCmdToFramework {
                constructor(cmd: SyncCmdScrollPositionChanged);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkSelectControls extends SyncCmdToFramework {
                constructor(cmd: SyncCmdSelectControls);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkSelectEachControl extends SyncCmdToFramework {
                constructor(cmd: SyncCmdSelectEachControl);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkServerAddress extends SyncCmdToFramework {
                constructor(cmd: SyncCmdServerAddress);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkSyncControls extends SyncCmdToFramework {
                constructor(cmd: SyncCmdSyncControls);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkTcHmiConfigChanged extends SyncCmdToFramework {
                constructor(cmd: SyncCmdTcHmiConfigChanged);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkUnselectControls extends SyncCmdToFramework {
                constructor(cmd: SyncCmdUnselectControls);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkUnselectEachControl extends SyncCmdToFramework {
                constructor(cmd: SyncCmdUnselectEachControl);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkPartialEditorLocked extends SyncCmdToFramework {
                constructor(cmd: SyncCmdPartialEditorLocked);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkPartialEditorUnlocked extends SyncCmdToFramework {
                constructor(cmd: SyncCmdPartialEditorUnlocked);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkTransactionBegin extends SyncCmdToFramework {
                constructor(cmd: SyncCmdTransactionBegin);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkTransactionCommit extends SyncCmdToFramework {
                constructor(cmd: SyncCmdTransactionCommit);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToFrameworkZoom extends SyncCmdToFramework {
                constructor(cmd: SyncCmdZoom);
                run(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            abstract class SyncCmdToCreator {
                constructor(cmd: AllSyncCmd);
                send(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorConfirmation extends SyncCmdToCreator {
                constructor(cmd: SyncCmdConfirmation);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorControlDoubleClick extends SyncCmdToCreator {
                constructor(cmd: SyncCmdControlDoubleClick);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorCopyMoveControls extends SyncCmdToCreator {
                constructor(cmd: SyncCmdCopyMoveControls);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorMessages extends SyncCmdToCreator {
                constructor(cmd: SyncCmdMessages);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorDropControlPosition extends SyncCmdToCreator {
                constructor(cmd: SyncCmdDropControlPosition);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorRegisterSyncView extends SyncCmdToCreator {
                constructor(cmd: SyncCmdRegisterSyncView);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorRequestCurrentPartialContent extends SyncCmdToCreator {
                constructor(cmd: SyncCmdRequestCurrentPartialContent);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorRequestCurrentPartialEditorLockState extends SyncCmdToCreator {
                constructor(cmd: SyncCmdRequestCurrentPartialEditorLockState);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorRequestRequiredViewPortSize extends SyncCmdToCreator {
                constructor(cmd: SyncCmdRequestRequiredViewPortSize);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class SyncCmdToCreatorSyncControls extends SyncCmdToCreator {
                constructor(cmd: SyncCmdSyncControls);
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class ErrorPane {
                constructor();
                add(name: string, content: string, type: TcHmi.Engineering.ErrorPane.MessageType): void;
                remove(name: string): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /** left and top */
            interface Position {
                left: number;
                top: number;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
            * @class DesignerModeComManager
            */
            class DesignerModeComManager {
                constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
                /** */
                static RECONNECT_INTERVAL: number;
                /**
                * Opens the websocket and starts the watcher inverval.
                * @function
                */
                sendCommand(cmd: AllSyncCmd): void;
                /** @function */
                makeReadyForSynchronization(): void;
                /** @function */
                isReadyForSynchronization(): boolean;
            }
            interface SyncMessage {
                /**
                * The id of the current message. Has to be a unique GUID.
                */
                id: string;
                /**
                * JavaScript timestamp
                */
                timestamp: number;
                /**
                * Command object
                */
                command: AllSyncCmd;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            class DesignerModeManager {
                constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
                /** Handles all control meta data in designer master and slave. */
                readonly metaDataManager: DesignerModeControlMetaDataManager;
                /** Handles all container highlighting while dragging controls in designer master. */
                readonly hierarchyManager: DesignerModeMasterHierarchyManager;
                /** Handles all viewport handling like scrolling, zooming and viewport emulation in designer master. */
                readonly rootControlManager: DesignerModeMasterRootControlManager;
                /** Handles all control highlighting in designer master. */
                readonly highlightManager: DesignerModeMasterControlHighlightManager;
                /** Handles common interaction properties and methods in designer master. */
                readonly syncManager: DesignerModeMasterSyncManager;
                /** Handles common interaction properties and methods in designer master. */
                readonly interactionManager: DesignerModeMasterInteractionManager;
                /** Handles control moving in designer master. */
                readonly controlMoveManager: DesignerModeMasterControlMoveManager;
                /** Handles drag rect select for easy multiselection in designer master. */
                readonly rectSelectManager: DesignerModeMasterRectSelectManager;
                /** Handles control resizing in designer master. */
                readonly controlResizeManager: DesignerModeMasterControlResizeManager;
                /**
                  * Synchronizes the attributes of the selected control to Visual Studio
                  * @function resyncSelectedControls
                  * @memberOf TcHmi.System.Engineering.DesignerModeManager
                  * @return {void}
                  */
                resyncSelectedControls(): void;
                /**
                 * Request CurrentPartialContent from TcHmiCreator.
                 * @function
                */
                requestCurrentPartialContent(partialUrl: string, bReplyBroadcast?: boolean): void;
                /**
                * Processes changes of one control inside the Framework
                * @function syncControl
                * @memberOf TcHmi.System.Engineering.DesignerModeManager
                * @return true if changes have been processed and false if not!
                */
                syncControl(targetPartial: string, targetControl: string, controlHtml: string | null): boolean;
                /**
                 * Creates new Control in Designer and attach it asyncronous
                 * @param targetPartial
                 * @param targetParentControl Id of the Parent
                 * @param domPos
                 * @param controlHtml HTML Code of the new control
                 * @param callback
                 * @function
                 */
                createControl(targetPartial: string, targetParentControl: string, domPos: number, controlHtml: string, callback?: null | ((this: DesignerModeManager, data: IResultObject) => void)): void;
                /**
                 * Marks a control as selected and enable its highlighting
                 * @function
                 * @memberOf TcHmi.System.Engineering.DesignerModeManager
                 * @param {string} controlId The name of the control to select.
                 * @param {boolean} [bIgnoreSync=false] If this is true it will not sync to Visual Studio
                 * @returns {void}
                 */
                select(controlId: string, bIgnoreSync?: boolean): void;
                /**
                 * Marks a control as not selected and disable its highlighting
                 * @function
                 * @memberOf TcHmi.System.Engineering.DesignerModeManager
                 * @param {string} controlId The name of the control to unselect.
                 * @param {boolean} [bIgnoreSync=false] If this is true it will not sync to Visual Studio
                 * @returns {void}
                 */
                unselect(controlId: string, bIgnoreSync?: boolean): void;
                /** @function */
                selectEach(bIgnoreSync: boolean): boolean;
                /** @function */
                unselectEach(bIgnoreSync: boolean): boolean;
                /**
                 * Sets the Highlight Container to a specific state (visible or invisible) or toggle the state if called with null
                 * @param newValue
                 * @function
                 */
                setControlLocked(targetControl: string, bLocked: boolean): void;
                /**
                 * Locks the designer or live-view
                 */
                lock(): void;
                /**
                 * Reserved!
                 * Currently no need for unlock... Reload required!
                 */
                unlock(): void;
                isLocked(): boolean;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles all control meta data in designer master and slave.
             */
            class DesignerModeControlMetaDataManager {
                /**
                 * Handles all control meta data in designer master and slave.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /**
                 * Register a control for the ControlMetaCache
                 * @param ctrlMeta
                 */
                register(ctrlMeta: ControlMetaData): void;
                /**
                 * Unregister a control from ControlMetaCache and selectedControlsMetaData
                 * @param tco
                 */
                unregister(tcoId: string): void;
                /**
                  * Returns all ControlMetaData objects
                  * @function
                  */
                getControlMetaData(): Dictionary<ControlMetaData>;
                /**
                  * Returns the ControlMetaData object to an id or null
                  * @param id
                  * @function
                  */
                getControlMetaData(id: string): ControlMetaData | null;
                /**
                 * Refresh metadata of all controls
                 *
                 * @function
                 */
                refreshControlMetaData(): null;
                /**
                 * Refresh metadata of a control and returns the metadata object
                 *
                 * @param idOrControl The id of the control as string or the ControlMetaData object of the control
                 * @function
                 */
                refreshControlMetaData(idOrControl: string | ControlMetaData): null | ControlMetaData;
                /**
                  * Returns all selected ControlMetaData objects
                  * @function
                  */
                getSelectedControlsMetaData(): Dictionary<ControlMetaData>;
                /**
                  * Adds a ControlMetaData object to select cache
                  * @function
                  */
                selectControl(ctrlMeta: ControlMetaData): void;
                /**
                  * Removes a ControlMetaData object from select cache
                  * @function
                  */
                unselectControl(ctrlMeta: ControlMetaData): void;
                /** A list of all ids of selected Controls without the partial root */
                getSelectedControlIdsWithChildren(): string[];
            }
            interface ControlMetaData {
                /** Control id */
                id: string;
                /** MetaData for the parent. Can be null if we have no parent control. */
                parent: ControlMetaData | null;
                /** Used for highlighting the original control position without transformations etc. */
                jOriginalPosition: JQuery;
                /** Used for highlighting the current control position, selection, mouseover including transformations etc. */
                jControlPosition: JQuery;
                /** Stack Container for clean Hierarchical z-index handling for Highlight */
                jHierarchyControlposition: JQuery;
                /** Used for resizing the current control including transformations. */
                jAnchorContainer: JQuery;
                /** Stack Container for clean Hierarchical z-index handling for AnchorContainer */
                jHierarchyAnchorContainer: JQuery;
                /** Is this Control selected so it's Property can be manipulated */
                isSelected: boolean;
                /** Old select State. Needed for own double click handling */
                isSelectedPrev: boolean;
                /** The Partial Root is special in some select and drag&drop interactions */
                isPartialRoot: boolean;
                /** Control is hidden in the Creator via Document Outline (creator attribute 'data-tchmi-creator-visibility') */
                domVisibility: boolean;
                /** Control is locked so no dimension change with the mouse is allowed  (creator attribute 'data-tchmi-creator-locked')*/
                locked: boolean;
                /** Control has visibility set to Collapsed */
                controlCollapsed: boolean;
                /** Containter are special */
                isContainerControl: boolean;
                /** TcHmiGrid is special */
                isGridControl: boolean;
                /** MASTER only! Control attribute dimension on interaction start for resize/move handling */
                controlAttributeDimension: TcHmiControlAttributeDimension;
                /** MASTER only! Control css pixel dimension on interaction start for resize/move handling */
                controlCssPixelDimension: TcHmiControlCssPixelDimension;
                /** MASTER only! Control rotation on interaction start for resize handling in degree */
                relativeControlRotation: number;
                /** MASTER only! Control rotation of the Parent on interaction start for resize handling in degree */
                absoluteParentRotation: number;
            }
            /** TcHmi internal read/write ClientRect */
            interface TcHmiClientRect {
                bottom: number;
                height: number;
                left: number;
                right: number;
                top: number;
                width: number;
            }
            interface TcHmiSparseStringClientRect extends Dictionary<string> {
                bottom?: string;
                height?: string;
                left?: string;
                right?: string;
                top?: string;
                width?: string;
            }
            interface TcHmiControlAttributeDimension {
                topValue: number | null;
                topUnit: DimensionUnit;
                leftValue: number | null;
                leftUnit: DimensionUnit;
                widthValue: number | null;
                widthUnit: DimensionUnit;
                widthMode: SizeModeWithContent;
                minWidthValue: number | null;
                minWidthUnit: DimensionUnit;
                maxWidthValue: number | null;
                maxWidthUnit: DimensionUnit;
                rightValue: number | null;
                rightUnit: DimensionUnit;
                heightValue: number | null;
                heightUnit: DimensionUnit;
                minHeightValue: number | null;
                minHeightUnit: DimensionUnit;
                maxHeightValue: number | null;
                maxHeightUnit: DimensionUnit;
                heightMode: SizeModeWithContent;
                bottomValue: number | null;
                bottomUnit: DimensionUnit;
            }
            interface TcHmiControlCssPixelDimension {
                bottom: number | null;
                height: number | null;
                left: number | null;
                right: number | null;
                top: number | null;
                width: number | null;
            }
            /** '' | 'TopLeft' | 'TopCenter' | 'TopRight' | 'CenterRight' | 'BottomRight' | 'BottomCenter' | 'BottomLeft' | 'CenterLeft' */
            type AnchorName = 'TopLeft' | 'TopCenter' | 'TopRight' | 'CenterRight' | 'BottomRight' | 'BottomCenter' | 'BottomLeft' | 'CenterLeft';
        }
    }
}
interface Array<T> {
    /**
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param searchElement The element to search for.
     * @param fromIndex The position in this array at which to begin searching for searchElement.
     */
    includes(searchElement: T, fromIndex?: number): boolean;
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles sync in designer master.
             */
            class DesignerModeMasterSyncManager {
                /**
                 * Handles sync in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                beginTransaction(name: string): void;
                commitTransaction(name: string): void;
                transactionActive(): boolean;
                /**
                 * Calculates the new control Attributes and sync to Creator
                 * @param eventName
                 */
                updatePcElementAndSync(eventName: string): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles all container highlighting while dragging controls in designer master.
             */
            class DesignerModeMasterHierarchyManager {
                /**
                 * Handles all container highlighting while dragging controls in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /**
                    Is this a control which should have designer support?
                @function
                */
                isDesignerModeControl(id: string): boolean;
                /**
                 * Register mouse interaction for container controls
                 * @param ctrlMeta
                 */
                registerContainerControl(ctrlMeta: ControlMetaData): void;
                /**
                 * Register mouse interaction for container elements
                 * @param ctrlMeta
                 */
                registerContainerElement(jElem: JQuery): void;
                /**
                 * Activate drop highlight from a point relative to the whole document
                 * @param {Position} position coordinates relative to the whole document
                 * @param targetElem
                 */
                addHighlightDropTarget(position: Position, targetElem: Element): void;
                /**
                 * Remove drop highlight
                 */
                removeHighlightDropTarget(): void;
                /**
                 * Gets the highest container from a point on the whole document
                 * Unwanted targets have to be excluded with css pointer-events:none
                 * @param {Position} position coordinates relative to the document
                 */
                getContainerFromPoint(position: Position): {
                    /** tchmicontrol */
                    tco: Controls.System.baseTcHmiControl;
                    /** jQuery element which makes the mouse interaction. */
                    jHighlighter: JQuery<HTMLElement>;
                    centerX: number;
                    centerY: number;
                    /** rowIndex if we are inside a Grid. null if we are not in a grid */
                    rowIndex: number;
                    /** columnIndex if we are inside a Grid. null if we are not in a grid */
                    cellIndex: number;
                };
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles all viewport handling like scrolling, zooming and viewport emulation in designer master.
             */
            class DesignerModeMasterRootControlManager {
                /**
                 * Handles all viewport handling like scrolling, zooming and viewport emulation in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                getCreatorZoomFactor(): number;
                getViewPortSimulator(): JQuery<HTMLElement>;
                getViewPortHighlightingSimulator(): JQuery<HTMLElement>;
                /**
                 * @function scroll
                 */
                scroll(p: Position): void;
                /**
                 * Apply the new Zoomfactor to all Controls and interaction container
                 * @param newZoom
                 */
                setCreatorZoom(newZoom: number): void;
                /** Remembers meta object and updates the internal caches */
                setRootControl(tco: TcHmi.Controls.System.baseTcHmiControl, newControlMeta: ControlMetaData): void;
                /**
                 * Updates the bounds of the view
                 * @function setCreatorViewPortPosition
                 * @param tco
                 */
                setCreatorViewPortPosition(tco: TcHmi.Controls.System.baseTcHmiControl | null | undefined): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles all control highlighting in designer master.
             */
            class DesignerModeMasterControlHighlightManager {
                /**
                 * Handles all control highlighting in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /**
                 * Remove all highlight container from DOM
                 * @param ctrlMeta
                 */
                handleControlRemoved(ctrlMeta: ControlMetaData): void;
                /**
                 * In the next Animation Frame adjust all needed highlighters and rebuild the snap control cache
                 * */
                requestAsyncHighlighterUpdate(): void;
                /**
                 * Add the control to the list to adjust for the highlighting
                 * @param ctrl
                 */
                requestAsyncHighlighterUpdateForControl(ctrl: TcHmi.Controls.System.baseTcHmiControl): {
                    /** This control had we a resize */
                    resized: boolean;
                    /** This control had a move */
                    moved: boolean;
                    /** This control had row/column changed */
                    rowColumnChanged: boolean;
                };
                /**
                 * Sets the Highlight Container to a specific state (visible or invisible)
                 * @param newValue
                 * @function
                 */
                setHighlightContainerVisibility(newValue: boolean): void;
                /** @function */
                setCreatorVisibilityAttribute(targetControl: string, bVisibility: boolean): void;
                /**
                  * Processes Control hiding from Creator Document Outline and show/hides control highlighting
                  * @function
                  * @memberOf TcHmi.System.Engineering.DesignerModeManager
                  * @return {void}
                  */
                processDomVisibility(processCtrlMeta?: ControlMetaData): void;
                /**
                * Sets (top|bottom), (left|right), height and width of transformed and untransformed container plus transform-origin, transform on the transformed container to match element, move container to correct gridcell.
                * @param tco real Control
                * @param ctrlMeta Metadata of the control and its designer container
                */
                setContainerPositions(tco: TcHmi.Controls.System.baseTcHmiControl | null | undefined, ctrlMeta: ControlMetaData | null | undefined): void;
                /**
                * Sets top, left, height and width of all grid cell highlight container
                * @param element jQuery Element of the real GridControl
                * @param ctrlMeta Metadata of the control and its designer container
                */
                setGridcellContainerPositions(tco: TcHmi.Controls.System.baseTcHmiControl | null | undefined, ctrlMeta: ControlMetaData): void;
                /**
                 *
                 * @param element
                 * @param angle
                 */
                updateGripCursors(ctrlMeta: ControlMetaData): void;
                /**
                 * Set all highlight container to match current highlight state
                 * @param ctrlMeta Metadata of the control and its designer container
                 */
                processHighlightType(ctrlMeta: ControlMetaData): void;
                /**
                * Creates the element which is is used to highlight current position, selection etc.
                *@function
                */
                createControlPosition(relatedControl: TcHmi.Controls.System.baseTcHmiControl, zindex: number): JQuery;
                createHierarchyControlPosition(relatedControl: TcHmi.Controls.System.baseTcHmiControl, zindex: number): JQuery;
                /**
                * Creates the element which is is used to highlight original position
                *@function
                */
                createOriginalPosition(relatedControl: TcHmi.Controls.System.baseTcHmiControl, zindex: number): JQuery;
                /**
                * Creates the element which holds the resize anchor
                *@function
                */
                createAnchorContainer(relatedControl: TcHmi.Controls.System.baseTcHmiControl, zindex: number, locked: boolean): JQuery;
                /**
                * Creates a hierarchical stack  the element which holds the resize anchor
                *@function
                */
                createHierarchyAnchorContainer(relatedControl: TcHmi.Controls.System.baseTcHmiControl, zindex: number, locked: boolean): JQuery;
                /**
                * Creates/rebuilds row+cell container for all grid rows and cells for proper positioning the other control container
                * and appends it to the HighlightHierarchicalStack container
                *
                * @param gridControl
                * @param ctrlParent
                */
                createGridHighlighter(gridControl: TcHmi.Controls.System.baseTcHmiControl, ctrlMeta: ControlMetaData | null | undefined): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles drag rect select for easy multiselection in designer master.
             */
            class DesignerModeMasterRectSelectManager {
                /**
                 * Handles drag rect select for easy multiselection in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /** true while the select rect is active */
                getRectSelecting(): boolean;
                /** Disallow opening of select rectangle */
                lockRectSelect(): void;
                /** Set states to default and removes all events */
                resetState(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles control moving in designer master.
             */
            class DesignerModeMasterControlMoveManager {
                /**
                 * Handles control moving in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /**
                  * Register mouse interaction for control movement
                  * @param ctrlMeta
                  */
                registerControl(ctrlMeta: ControlMetaData): void;
                /**
                * Returns the active control meta data.
                */
                getActiveControl(): ControlMetaData;
                /**
                * Returns the previously active control meta data.
                */
                getActiveControlPrev(): ControlMetaData;
                /** true while controls are hanging on the mouse on drag */
                getControlMoveActive(): boolean;
                /** Disallow moving a control */
                lockControlMove(): void;
                /** true when the user has moved the mouse after a mousedown (for double click and select on move detection) */
                setMouseMoving(newValue: boolean): void;
                /** Set states to default and removes all events */
                resetState(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles control resizing in designer master.
             */
            class DesignerModeMasterControlResizeManager {
                /**
                 * Handles control resizing in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                /**
                  * Register mouse interaction for control resizing
                  * @param ctrlMeta
                  */
                registerControl(ctrlMeta: ControlMetaData): void;
                /** true while control anchors are hanging on the mouse on resize */
                getControlResizing(): boolean;
                /** Disallow resizing of a control */
                lockControlResize(): void;
            }
        }
    }
}
declare module TcHmi {
    module System {
        module Engineering {
            /**
             * Handles common interaction properties and methods in designer master.
             */
            class DesignerModeMasterInteractionManager {
                /**
                 * Handles common interaction properties and methods in designer master.
                 */
                constructor(designerModeManager: DesignerModeManager);
                getAnchorName(): AnchorName;
                setAnchorName(newAnchorName: AnchorName | undefined): void;
                /** event.pageXY on interaction start for mouse handling */
                getStartMousePos(): Position;
                /** Pixel distance from the mouse to the bounding box of the active control and its size in viewport pixels in the whole document */
                getPositionInsideControl(): TcHmiClientRect;
                /** @function */
                setCtrlModifierKeyState(bState: boolean): void;
                /** @function */
                setShiftModifierKeyState(bState: boolean): void;
                /**
                 * Clear snap position cache
                 */
                clearControlSnapPositionCache(): void;
                /** Remember event.pageXY on interaction start and optional control dimension for mouse handling */
                handleInteractionStart(event: JQuery.Event<HTMLElement>, activeControl: ControlMetaData | null): void;
                /**
                 * Add a single entry to snap position cache
                 * @param ctrlMeta Metadata of the control and its designer container
                 */
                refreshControlSnapPositionCache(ctrlMeta: ControlMetaData): void;
                /**
                 * Rebuild snap position cache
                 * @param ctrlMeta Metadata of the control and its designer container
                 */
                refreshControlSnapPositionCache(): void;
                /**
                 * Correct delta movement with snapping and handle highlighting.
                 * Works on document based coordinates, not viewport
                 * @param ctrlMeta Metadata of the control and its designer container
                 * @param mouseDelta Distance of xy mouse movement since start of drag in controlDimension/normalised/zoom corrected coordinates
                 * @param mousePos mouse coordinates in pageX/viewport/getBoundingRect coordinates
                 * @param snapControls bool to skip search for a snapTo
                 * @returns corrected distance of xy mouse movement since start of drag in controlDimension/normalised/zoom corrected coordinates
                 */
                handleSnapping(ctrlMeta: ControlMetaData, mouseDelta: Position, mousePos: Position, snapControls: boolean): Position;
            }
        }
    }
}
declare module TcHmi {
    module System {
        class LocalizationManager {
            /** @constructor */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            /**
            * Returns the current locale string for texts or undefined if no localized Symbol is available.
            * @function
            * @returns   {string}    The current locale identifier.
            */
            getLocale(): string | undefined;
            /**
             *  Change locale of current user in server. This will trigger all the rest
            */
            loadLocale(locale: string, callback: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
            get(name: string): LocalizationManager.LocalizedTextEntry | undefined;
            watch(name: string, callback: (this: void, data: TcHmi.Symbol.IWatchResultObject) => void): DestroyFunction;
        }
        module LocalizationManager {
            interface LocalizedTextEntry {
                /** Text in the current locale */
                text: string;
                callbacks: ILocalizedTextEntryCallback[];
            }
            interface ILocalizedTextEntryCallback {
                callback: ((this: void, data: TcHmi.Symbol.IWatchResultObject) => void);
                destroy: DestroyFunction;
            }
        }
    }
}
declare module TcHmi {
    module System {
        class ServerManager {
            /** @constructor */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            /** Fallback value if the request and tchmiconfig does not provide a value */
            static RECONNECT_INTERVAL: number;
            /**
            * Opens the websocket and starts the watcher interval.
            * @function
            */
            open(callback?: (this: void, data: ServerManager.IResultObject) => void): void;
            /**
            * Closes the websocket and stops the watcher interval.
            * @function
            */
            close(): void;
            /**
            * @function
            */
            getFreeRequestId(): number;
            /**
             * Set Server Address
             * @param host
             * @param port
             * @param protocol
             */
            setServerAddress(host?: string, port?: string | number, protocol?: string): void;
            /**
             * Registers an event callback.
             * @param reqId
             * @param callback
             */
            registerEventCallback(reqId: number, callback: (this: void, data: Server.IResultObject) => void): number;
            /**
             * Watch Server Sybmol
             * @param expression
             * @param callback
             */
            watch(expression: TcHmi.SymbolExpression, callback: (this: void, data: TcHmi.Symbol.IServerWatchResultObject) => void): DestroyFunction;
            /**
            * Sends a request to the server.
            * @function
            * @param {Server.IMessage} requestObj The request object to send
            * @param {Function} callback Callback function reference
            */
            request(requestObj: Server.IMessage, callback?: null | ((this: void, data: Server.IResultObject) => void)): number | null;
            /**
            * Sends a request to the server.
            * @function
            * @param {Server.IMessage} requestObj The request object to send
            * @param {Server.IRequestOptions} options Request options
            * @param {Function} callback Callback function reference
            */
            requestEx(requestObj: Server.IMessage, options: Server.IRequestOptions | null, callback?: null | ((this: void, data: Server.IResultObject) => void)): number | null;
            /**
            * Releases a request and associated resources like callbacks.
            * @function
            * @param {number | null} id Id of the request to release.
            */
            releaseRequest(id: number | null): void;
            /**
            * @function
            */
            getWebSocketReadyState(): number | null;
            /**
             * Login into a TcHmiServer, reloads the page on success, call of a callback on failure
             * @param username String with the username
             * @param password String with the password
             * @param persistent boolean Should the session be valid even after browser restart
             * @param options
             * @param callback This callback is called if the login was not successful
             * @return returns a boolean if the login was called
             */
            login(username: string, password: string, persistent: boolean, options: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): boolean;
            /**
             * Logout from a TcHmiServer, reloads the page on success, call of a callback on failure
             * @param options Request options
             * @param callback This callback is called if the logout was not successful
             * @return returns a boolean if the logout was called
             */
            logout(options: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): boolean;
            /**
             * Logout all users with a specific username or all users from a TcHmiServer
             * @param {string | Server.IForceLogoutTarget} username username to logout.
             * If empty string or null is provided, all users are logged out.
             * The authentification domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
             * 'Domain::' will logout every user from this domain
             * @param options Request options
             * @param callback This callback is called with every response
             * @return returns a boolean if the logout was called
             */
            forceLogout(username: string | Server.IForceLogoutTarget | null, options: Server.IRequestOptions | null, callback?: null | ((this: void, data: Server.IResultObject) => void)): boolean;
            /**
             * Refreshes global subscriptions if interval or timeout has changed;
             */
            refreshGlobalSubscriptionRequests(): void;
        }
        module ServerManager {
            const enum ConnectState {
                UNCONNECTED = 0,
                ERROR = 1,
                COMMAND_ERROR = 2,
                CONNECTED = 3,
                UNLOAD = 4,
                ACCESS_MISSING = 5,
                LICENSE_MISSING = 6
            }
            const enum RequestType {
                INVALID = 0,
                READWRITE = 100,
                SUBSCRIPTION = 200,
                EVENT = 300
            }
            interface IRequestCacheEntry {
                id: number;
                type: ServerManager.RequestType;
                message?: Server.IMessage;
                deletionPending: boolean;
                timeoutTimer: number;
                timeoutCallback: (this: void) => void;
                timeout: number | null;
                interval?: number;
                callbacks: ((this: void, data: Server.IResultObject) => void)[];
                responseCallback: (this: void, data: ServerManager.IResponseResultObject) => void;
                queued: boolean;
            }
            interface IServerSymbolWatchEntry {
                name: string;
                interval: number;
                timeout: number;
                options: Server.ICommandOptions[];
                reqId: number | null;
                refs: number;
                value: any;
                callbacks: IServerSymbolWatchEntryCallbackObj[];
            }
            interface IServerSymbolWatchEntryCallbackObj {
                callback: (this: void, data: TcHmi.Symbol.IWatchResultObject) => void;
                dirty: boolean;
                refreshLock: boolean;
                destroy: DestroyFunction;
            }
            interface IWatchResultObject extends TcHmi.IResultObject {
                watchEntry: ServerManager.IServerSymbolWatchEntry;
            }
            /** provides the url of the request */
            interface IResultObject extends TcHmi.IResultObject {
                url?: string;
            }
            interface IResponseResultObject extends TcHmi.IResultObject {
                response: Server.IMessage;
            }
        }
    }
}
declare module TcHmi {
    module System {
        class ServerEventManager {
            /** @constructor */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            /**
             * Sends a request to the server to confirm an alarm.
             * @param alarm The raw data of the alarm to confirm.
             */
            confirmAlarm(alarm: ServerEventManager.RawServerAlarm, callback?: (this: void, data: TcHmi.IResultObject) => void): void;
            /**
             * Requests a list containing all events matching the specified filter from the server.
             * @param filter    The filter which events have to match.
             * @param callback  The callback function to handle the received events.
             */
            listEvents(filter: TcHmi.Filter, callback: (this: void, data: ServerEventManager.ListResult) => void): void;
            /**
             * Subscribe to events comming from server.
             * @param filter    The filter the events have to match.
             * @param callback  The callback function to handle received events.
             */
            subscribe(filter: TcHmi.Filter, callback: (this: void, data: ServerEventManager.SubscriptionResult) => void): number;
            /**
             * Unsubscribe from events.
             * @param id The subscription id.
             */
            unsubscribe(id: number, callback?: (this: void, data: IResultObject) => void): void;
            /**
             * Update the filter of an event subscription.
             * @param id     The id of the subscription to update.
             * @param filter The new filter for the subscription.
             */
            updateSubscription(id: number, filter: TcHmi.Filter, callback?: (this: void, data: IResultObject) => void): void;
        }
        module ServerEventManager {
            interface SubscriptionInfo {
                responseId: number;
                callback?: (this: void, data: SubscriptionResult) => any;
            }
            interface ListResult extends TcHmi.IResultObject {
                events?: RawServerEvent[];
            }
            interface SubscriptionResult extends TcHmi.IResultObject {
                event?: RawServerEvent;
            }
            interface RawServerEvent {
                alarm?: RawServerAlarm;
                message?: RawServerMessage;
                domain: string;
                localizedString: string;
                changeType?: ServerAlarmChangeType;
            }
            interface RawServerMessage {
                name: string;
                domain: string;
                severity: Server.Events.Severity;
                timeRaised: string;
                params: Dictionary<any>;
            }
            interface RawServerAlarm extends RawServerMessage {
                id: string | number;
                timeCleared: string;
                timeConfirmed: string;
                alarmState: Server.Events.AlarmState;
                confirmationState: Server.Events.ConfirmationState;
            }
            enum ServerAlarmChangeType {
                Raise = 0,
                Change = 1,
                Dispose = 2
            }
        }
    }
}
/**
 * Used to execute eval in isolated scope.
 * @param ctx {TcHmi.Context} Context object
 * @param s {string} The eval expression.
 */
declare function gIsolatedEval_TcHmi_System_TriggerManager_JavaScriptAction(ctx: TcHmi.Context, s: string): any;
/**
 * Used to execute eval in isolated scope.
 * @param s {string} The eval expression.
 */
declare function gIsolatedEval_TcHmi_System_TriggerManager_ConditionExpressionsResult(s: string, results: {
    expression: TcHmi.System.Trigger.Expression;
    result: {
        compare1: any;
        compare2: any;
    };
}[]): any;
declare module TcHmi {
    module System {
        /**
        * @class
        */
        class TriggerManager {
            /**
            * @constructor
            */
            constructor(errorCallback?: ((data: TcHmi.System.IServicesErrorResultObject) => void));
            /**
            * Registers all triggers defined in the triggerArr array.
            * @function
            * @param triggerArr
            */
            register(triggerArr: Trigger[] | null | undefined): void;
            /**
            * Unregisters all triggers defined in the triggerArr array.
            * @function
            * @param triggerArr
            */
            unregister(triggerArr: Trigger[] | null | undefined): void;
        }
        /**
        * A trigger is based on an event, which is defined by a global unique identifier.
        * Events raised by controls are always defined with the following pattern: [Control_ID].[EVENT_NAME]
        * The available control events are defined in the associated control markup file.
        */
        interface Trigger {
            /** A string value which contains the target event name. */
            event: string;
            /** preventDefault() should be called in this trigger */
            preventDefault?: true;
            /** An array of {Action} objects. Each Event can contain 1 ... n {Action} objects. */
            actions: Trigger.Action[];
        }
        module Trigger {
            interface TriggerContext extends TcHmi.Context {
                trigger: Trigger;
                event: EventProvider.Event;
            }
            interface baseAction {
                /** Should action be active? */
                active?: boolean;
                /** Should action be collapsed? Not used in runtime */
                collapsed?: boolean;
                /** Async Wait */
                asyncWait: boolean;
                /** Success callback action list. */
                success: Action[];
                /** Error callback action list. */
                error: Action[];
            }
            type Action = Condition | Comment | SwitchCase | ControlApiFunction | WriteToSymbol | TAFunction | JavaScript | ActionTemplate | FunctionExpression;
            interface Condition extends baseAction {
                objectType: 'Condition';
                /** An array of {Expression} objects which will be evaluated to determine if the "True" or "False" action path is used. */
                expressions: Expression[];
                /** An array of {Action} objects which will be processed if the overall expression result is "true". */
                true: Action[];
                /** An array of {Action} objects which will be processed if the overall expression result is "false". */
                false: Action[];
                /** Holds the current state of the Trigger GUI. Not used in runtime */
                showFalseActions?: boolean;
                /** Holds the current state of the Trigger GUI. Not used in runtime */
                showTrueActions?: boolean;
            }
            /**
             * Trigger Parser Type Guard which checks 'objectType' of Action
             * @param thisValue
             */
            function isCondition(thisAction: Action): thisAction is Condition;
            interface SwitchCase extends baseAction {
                objectType: 'SwitchCase';
                /** An object of type {Compare} which contains the target switch value. */
                compare: IFunction.Value;
                /** */
                cases: VCase[];
                caseDefault: DCase;
            }
            /**
             * Trigger Parser Type Guard which checks 'objectType' of Action
             * @param thisValue
             */
            function isSwitchCase(thisAction: Action): thisAction is SwitchCase;
            interface ControlApiFunction extends baseAction {
                objectType: 'ControlApiFunction';
                /** The id of the target control as string value. */
                control: string;
                /** The name of the target api function. */
                fn: string;
                /** An array of {ParamValue} objects. Each element in the array represents a parameter of the function defined in "fn". */
                fnParams: IFunction.Value[];
            }
            /**
             * Trigger Parser Type Guard which checks 'objectType' of Action
             * @param thisValue
             */
            function isControlApiFunction(thisAction: Action): thisAction is ControlApiFunction;
            interface WriteToSymbol extends baseAction {
                objectType: 'WriteToSymbol';
                /** The target binding symbol as binding expression. */
                symbolExpression: string | null;
                /** An object of type {Value}. */
                value: IFunction.Value;
            }
            /**
             * Trigger Parser Type Guard which checks 'objectType' of Action
             * @param thisValue
             */
            function isWriteToSymbol(thisAction: Action): thisAction is WriteToSymbol;
            interface Comment extends baseAction {
                objectType: 'Comment';
                /** Free comment. Will be ignored on runtime. */
                comment: string;
            }
            /**
             * Trigger Parser Type Guard which checks 'objectType' of Action
             * @param thisValue
             */
            function isComment(thisAction: Action): thisAction is Comment;
            interface TAFunction extends baseAction {
                objectType: 'Function';
                /** The name of the target setter function which is public accessable in the control defined in "Control". */
                fn: string;
                /** An array of {ParamValue} objects. Each element in the array represents a parameter of the setter function defined in "Fn". */
                fnParams: IFunction.Value[];
            }
            function isFunction(thisAction: Action): thisAction is TAFunction;
            interface JavaScript extends baseAction {
                objectType: 'JavaScript';
                /**
                An array of string objects. Each string in the array represents one line of code.
                To avoid invalidation of the TcHmiConfig it is important to escape quotationmarks.
                */
                sourceLines: string[];
                injectContextObject?: boolean;
                waitMode?: 'Synchronous' | 'Asynchronous';
            }
            /**
             * Trigger Parser Type Guard which checks 'objectType' of Action
             * @param thisValue
             */
            function isJavaScript(thisAction: Action): thisAction is JavaScript;
            interface ActionTemplate extends baseAction {
                objectType: 'ActionTemplate';
                /** The name of the target ActionTemplate.*/
                templateName: string;
                /** A long description of this Action Template. */
                description: string;
                /** An array of {ParamValue} objects. Each element in the array represents a parameter which will be used inside the ActionTemplate */
                fnParams: IFunction.Value[];
            }
            /**
             * Trigger Parser Type Guard which checks 'objectType' of Action
             * @param thisValue
             */
            function isActionTemplate(thisAction: Action): thisAction is ActionTemplate;
            interface FunctionExpression extends baseAction {
                objectType: 'FunctionExpression';
                functionExpression: string | null;
            }
            function isFunctionExpression(thisAction: Action): thisAction is FunctionExpression;
            interface BindingTarget {
                /**
                * The object type name as {string}.
                * Extensions:
                * {BindingTarget}.objectType = "ControlAttributeBindingTarget"
                */
                objectType: string;
            }
            interface ControlAttributeBindingTarget extends BindingTarget {
                objectType: 'ControlAttributeBindingTarget';
                attributeExpression: string | null;
            }
            function isControlAttributeBindingTarget(thisBindingTarget: BindingTarget): thisBindingTarget is ControlAttributeBindingTarget;
            interface Expression {
                /** An object of type {Value} which represents a value which will be compared. */
                compare1: IFunction.Value;
                /** An object of type {Value} which represents a value which will be compared. */
                compare2: IFunction.Value;
                /**
                A string value which contains the compare operator string (JavaScript) which will be used to compare the values behind the properties "Compare1" and "Compare2".
                */
                compareOperator: '==' | '===' | '!=' | '!==' | '<' | '<=' | '>' | '>=';
                /**
                A string|null value which defines the logical binding of the current element to the previous element.
    
                The property has to be set to null if its the first {Expression} object in the Expressions array.
                */
                logic: 'AND' | 'OR' | null;
            }
            interface Case {
                actions: Action[];
            }
            /** Value Case */
            interface VCase extends Case {
                /** Configured Value to compare */
                caseValue: IFunction.Value;
            }
            /** Default Case */
            interface DCase extends Case {
            }
            interface TemplateParameter {
                param: TcHmi.System.TemplateParameter | null;
                paramSymbol: TcHmi.System.Symbol | null;
            }
        }
    }
}
declare module TcHmi {
    /**
     *
     * @class Locale
     * @memberOf TcHmi
     */
    class Locale {
        /**
         * @constructor
         */
        constructor();
        /**
         * Loads a language file and refreshes localization symbols.
         * @param {string | null} locale
         * @param {null | function} callback
         * @preserve (Part of the public API)
         */
        static load(locale: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
        /**
         * Returns the current locale string for texts or undefined if no localized Symbol is available.
         * @returns   {string}    The current locale identifier.
         * @preserve (Part of the public API)
         */
        static get(): string;
        /**
         * Returns the list of locales for localizedSymbols.
         * @returns {string[]}
         * @preserve (Part of the public API)
         */
        static getRegisteredLocales(): string[];
    }
}
declare module TcHmi {
    /**
    * Allows handling date and time formatting
    * @class Localization
    * @memberOf TcHmi
    * @preserve (Part of the public API)
    */
    class Localization {
        /**
        * @constructor
        */
        constructor();
        /**
         *  Skip non numberic chars and parseInt the rest.
         *  MS Browsers add Left-To-Right-Mark to output
         *  https://github.com/tc39/ecma402/issues/28
         * @param {string} input
         * @preserve (Part of the public API)
         */
        static parseInt(input: string): number;
        /**
         * Parses a Date object
         * formats it to a time zone and split its components into an object
         * On error all entries will be NaN
         * @param date
         * @preserve (Part of the public API)
         */
        static parseDate(date: Date, options?: Localization.ParseOptions): Localization.DateParts;
        /**
         * Formats a Date object down to milliseconds in the correct locale and time zone (config from server user or browser default)
         * On error this will be null
         * @param date
         * @preserve (Part of the public API)
         */
        static formatDate(date: Date, options?: TcHmi.Localization.FormatOptions): string | null;
    }
    module Localization {
        /** Holds a date splitted in the number parts */
        interface DateParts {
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            second: number;
            millisecond: number;
        }
        interface ParseOptions {
            timeZone?: string | undefined;
        }
        interface FormatOptions extends ParseOptions {
            /** Type of the format output. Can be 'full', 'date' or 'time' */
            type?: FormatType;
            /** Locale to format the string. Can be empty to use the locale of the current user  */
            locale?: string | undefined | null;
        }
        type FormatType = 'full' | 'date' | 'time';
    }
}
declare module TcHmi {
    /**
     * Classes, variables, functions declared in namespace "TcHmi.System" are for internal use only!
     */
    module System {
        module Services {
            module Engineering {
                var designerModeManager: TcHmi.System.Engineering.DesignerModeManager;
                var designerModeComManager: TcHmi.System.Engineering.DesignerModeComManager;
                var errorPane: TcHmi.System.Engineering.ErrorPane;
            }
            var internalSymbolManager: TcHmi.System.InternalSymbolManager;
            var templateParamSymbolManager: TcHmi.System.TemplateParamSymbolManager;
            var dialogManager: TcHmi.System.DialogManager;
            var accessManager: TcHmi.System.AccessManager;
            var triggerManager: TcHmi.System.TriggerManager;
            var bindingManager: TcHmi.System.BindingManager;
            var serverManager: TcHmi.System.ServerManager;
            var serverEventManager: TcHmi.System.ServerEventManager;
            var localizationManager: TcHmi.System.LocalizationManager;
            var functionProvider: TcHmi.System.FunctionProvider;
            var controlManager: TcHmi.System.ControlManager;
            var themeManager: TcHmi.System.ThemeManager;
            var styleManager: TcHmi.System.StyleManager;
            var typeManager: TcHmi.System.Type.TypeManager;
            var animationProvider: TcHmi.System.AnimationProvider;
            var viewManager: TcHmi.System.ViewManager;
            var topMostLayer: TcHmi.System.TopMostLayer;
        }
        module Caches {
            /** Path to all Framework Functions */
            var registeredFrameworkFunctionDescription: {
                name: string;
                func: (...args: any[]) => any;
                descriptionUrl: string;
            }[];
            var registeredControls: Map<string, {
                /** Name of the Control. */
                name: string;
                /** Constructor which generates the TcHmi Control. */
                constructor: Controls.baseTcHmiControlConstructor<Controls.System.baseTcHmiControl>;
                /** Directory of the Control (base path is the Controls directory). */
                directory: string;
                /** Template file of the Control (base path is the Controls directory). */
                templatePath?: string;
            }>;
            var templateMarkupCache: Map<string, string>;
            var partialMarkupCache: Map<string, string>;
            var partialCompositeConfigCache: Map<string, UserControlConfig>;
        }
        var config: IConfig;
        var description: FrameworkDescription;
        var isInitialized: boolean;
    }
    var version: Version;
}
