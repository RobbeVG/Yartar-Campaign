// quartz.config.ts
// This is not the full file — it's the relevant slice to merge into the
// quartz.config.ts that `npx quartz create` generated for you.

import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    // ...keep whatever quartz create generated (pageTitle, baseUrl, etc.)...

    ignorePatterns: [
      ".obsidian/",
      "templates/",
      "**/*.excalidraw",
      // Keep the vault's private working folder(s) out of the build
      // entirely, on top of the per-note publish flag below.
      // Example, if you want a folder that NEVER gets processed even
      // if a note inside it is marked publish: true:
      // "DM-Only/",
    ],
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      // ...keep any others quartz create generated...
    ],
    filters: [
      // Opt-in publishing: a note is only built into the site if its
      // frontmatter has `publish: true`. Everything else — which is
      // everything by default — stays local-only.
      Plugin.ExplicitPublish(),
    ],
    emitters: [
      // ...keep whatever quartz create generated here...
    ],
  },
}

export default config
