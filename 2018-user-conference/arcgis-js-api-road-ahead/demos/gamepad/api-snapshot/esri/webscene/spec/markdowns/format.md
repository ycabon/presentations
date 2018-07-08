# format

The format object can be used with numerical or date fields to provide more detail about how values should be displayed in popup windows.

### Properties

| Property | Details
| --- | ---
| dateFormat | A string used with date fields to specify how the date should appear in popup windows.<br>Must be one of the following values:<ul><li>`shortDate`</li><li>`shortDateLE`</li><li>`longMonthDayYear`</li><li>`dayShortMonthYear`</li><li>`longDate`</li><li>`shortDateShortTime`</li><li>`shortDateLEShortTime`</li><li>`shortDateShortTime24`</li><li>`shortDateLEShortTime24`</li><li>`shortDateLongTime`</li><li>`shortDateLELongTime`</li><li>`shortDateLongTime24`</li><li>`shortDateLELongTime24`</li><li>`longMonthYear`</li><li>`shortMonthYear`</li><li>`year`</li></ul>
| digitSeparator | A Boolean used with numerical fields. A value of true allows the number to have a digit (or thousands) separator when the value appears in popup windows. Depending on the locale, this separator is a decimal point or a comma. A value of false means that no separator will be used.
| places | An integer used with numerical fields to specify the number of supported decimal places that should appear in popup windows. Any places beyond this value are rounded.



