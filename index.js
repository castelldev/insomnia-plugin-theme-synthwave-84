const colors = {
  bg: "#262335",
  text: "#FFFFFF",
  black: "#232530",
  header: "#241b2f",
  navStatusbar: "#171520",
  sidebarHighlight: "#FFFFFF99",
  red: "#fe4450",
  green: "#09f7a0",
  orange: "#ff8b39",
  orangeDark: "#f97e72",
  blue: "#179fff",
  cyan: "#36f9f6",
  purple: "#ff7edb",
  purpleMuted: "#ea74cb",
  purpleTranslucent: "#ff7edbE6",
  yellow: "#fede5d",
  brightGreen: "#72f1b8",
  brightGreenTranslucent: "#72f1b8E6",
};

module.exports.themes = [
  {
    name: "synthwave-84",
    displayName: "Synthwave '84",
    theme: {
      rawCss: `
      :root {
        --color-surprise-font: ${colors.brightGreen} !important;
      }

      .text-\\[--color-font\\] {
        color: ${colors.text};        
      }

      i.fa-check,
      svg[data-icon="check"] {
        color: ${colors.brightGreen} !important; /* Checkmark icon color */
      }
      i.fa.fa-check {
        color: ${colors.brightGreen} !important;
      }

      .editor .cm-attribute, .editor .cm-property {
        color: ${colors.brightGreen} !important; /* Attribute/Parameter names */
      }
      .editor .cm-string {
        color: ${colors.orange}; /* Editor JSON Strings */
      }
      .editor .cm-number {
        color: ${colors.orangeDark}; /* Editor JSON Numbers */
      }

      button.bg-\\(--color-surprise\\) {
        background-color: ${colors.purpleMuted};
      }

      .tag.bg-success, .tag.bg-danger {
        color: ${colors.black} !important;
      }

      span[aria-label="Tab Tag"].text-\\(--color-font-surprise\\) {
        background-color: ${colors.brightGreen + "80"};
      }
      .http-method-GET > div {
        color: ${colors.brightGreen} !important;  /* Dropdown method GET */
      }
      `,
      // prettier-ignore
      background: {
        default:  colors.bg,          // Primary background color
        surprise: colors.purpleMuted, // Accent (Dashboard link, GET request tag, Send button)
        success:  colors.purpleMuted, // Response status button, POST request tag
        notice:   colors.blue,        // Patch request
        warning:  colors.orange,      // Put request
        danger:   colors.red,         // Delete request
        info:     colors.cyan,        // Options and head request
      },
      foreground: {
        default: colors.text, // Primary font color
      },
      highlight: {
        default: colors.sidebarHighlight, // Sidebar highlight color
      },
      styles: {
        sidebar: {
          // prettier-ignore
          background: {
            default:  colors.header,
            surprise: colors.brightGreen, // GET
            success:  colors.purple,      // POST
            warning:  colors.orange,      // PUT
            notice:   colors.blue,        // PATCH
            danger:   colors.red,         // DELETE
            info:     colors.cyan,        // OPTIONS AND HEAD
          },
        },
        paneHeader: {
          background: {
            default: colors.header,
            warning: colors.orange,
          },
          foreground: {
            default: colors.text,
          },
        },
      },
    },
  },
];
