import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Knowledge",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "ethann.netlify.app",
    ignorePatterns: [
      "private",
      "templates",
      "Templates",
      "legacy",
      ".obsidian",
      ".quartz-bootstrap",
      "node_modules",
      "public",
      ".quartz-public",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          // light: "#fbfafa", // Primary page background
          light: "#fffdfd", // Primary page background
          lightgray: "#e5e5e5", // Subtle borders and separators
          gray: "#b8b8b8", // Muted text and low-emphasis UI
          darkgray: "#4e4e4e", // Secondary text color
          dark: "#2b2b2b", // Primary text color
          secondary: "#1e5fc6", // Primary accent (links/actions)
          tertiary: "#5e82cf", // Hover/active accent
          highlight: "rgba(143, 159, 169, 0.15)", // Block/code background tint
          textHighlight: "#fff23688", // Inline text selection/mark highlight
        },
        darkMode: {
          light: "#000000", // Primary page background (burgundy-leaning dark)
          lightgray: "#555555", // Subtle borders and separators
          gray: "#444444", // Muted text and low-emphasis UI
          darkgray: "#bbbbbb", // Secondary text color
          dark: "#eeeeee", // Primary text color
          secondary: "#88bbff", // Primary accent (links/actions)
          tertiary: "#ddeeff", // Hover/active accent
          highlight: "rgba(100, 120, 150, 0.25)", // Block/code background tint
          // textHighlight: "#b3aa0288", // Inline text selection/mark highlight
          textHighlight: "#00ff00", // Inline text selection/mark highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.HardLineBreaks(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
