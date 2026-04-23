import { GlobalConfiguration } from "../cfg"
import { ValidLocale } from "../i18n"
import { QuartzPluginData } from "../plugins/vfile"

interface Props {
  date: Date
  locale?: ValidLocale
}

export type ValidDateType = keyof Required<QuartzPluginData>["dates"]

function parsePreferredFrontmatterDate(raw: unknown): Date | undefined {
  if (raw === undefined || raw === null) return undefined
  if (raw instanceof globalThis.Date) return isNaN(raw.getTime()) ? undefined : raw
  if (typeof raw !== "string" && typeof raw !== "number") return undefined
  // Treat YYYY-MM-DD as local midnight (not UTC midnight).
  const normalized =
    typeof raw === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw) ? `${raw}T00:00:00` : raw
  const d = new globalThis.Date(normalized)
  return isNaN(d.getTime()) ? undefined : d
}

export function getDate(cfg: GlobalConfiguration, data: QuartzPluginData): Date | undefined {
  if (!cfg.defaultDateType) {
    throw new Error(
      `Field 'defaultDateType' was not set in the configuration object of quartz.config.ts. See https://quartz.jzhao.xyz/configuration#general-configuration for more details.`,
    )
  }

  // Preferred precedence for display:
  // 1) explicit frontmatter `date`
  // 2) frontmatter `created`
  // 3) existing Quartz fallback (cfg.defaultDateType in data.dates)
  const preferredDate =
    parsePreferredFrontmatterDate(data.frontmatter?.date) ??
    parsePreferredFrontmatterDate(data.frontmatter?.created)
  if (preferredDate) return preferredDate

  return data.dates?.[cfg.defaultDateType]
}

export function formatDate(d: Date, locale: ValidLocale = "en-US"): string {
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

export function Date({ date, locale }: Props) {
  return <time datetime={date.toISOString()}>{formatDate(date, locale)}</time>
}
