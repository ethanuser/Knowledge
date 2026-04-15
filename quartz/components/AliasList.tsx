import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const AliasList: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const aliases = fileData.frontmatter?.aliases
  if (aliases && aliases.length > 0) {
    return (
      <ul class={classNames(displayClass, "aliases")}>
        {aliases.map((alias) => (
          <li>
            <span class="alias-item">{alias}</span>
          </li>
        ))}
      </ul>
    )
  } else {
    return null
  }
}

AliasList.css = `
.aliases {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.5rem;
  margin: 0.5rem 0;
  flex-wrap: wrap;
  align-items: center;
}

.aliases::before {
  content: "alias: ";
  font-size: 0.85rem;
  font-family: var(--headerFont);
  color: var(--gray);
  font-weight: 600;
  margin-right: 0.25rem;
}

.aliases > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
}

.alias-item {
  font-size: 0.9rem;
  color: var(--darkgray);
  font-style: italic;
  padding: 0.1rem 0.3rem;
  border-bottom: 1px dashed var(--gray);
}
`

export default (() => AliasList) satisfies QuartzComponentConstructor
