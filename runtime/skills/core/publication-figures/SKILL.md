---
name: publication-figures
description: Use before creating or reviewing report figures, method overviews, graphical abstracts, posters, charts, or tables. Defaults to reference-led illustrated composition for overviews, with a displayed style proof before bulk redesign and separate integrity and reference-likeness gates. Preserves honest data plots and editable sources; applies to delegated paper, survey, and experiment work.
---

# Publication Figures and Tables

Use reference-led composition plus a render–inspect–repair workflow, informed by
[FigTree](https://arxiv.org/html/2609.01006v1) and
[Paper2Poster](https://arxiv.org/html/2505.21497v2). This adapts design practices;
it does not install or reproduce either system. Specific vendors are not required.

## Choose the visual mode first

- **Method/proposal overview, graphical abstract, or poster-like figure:** read
  [illustrated-overviews.md](illustrated-overviews.md) before planning or drawing.
  This is the default overview mode: illustrated objects, integrated examples,
  nested semantic regions, and visible contrasts. Inspect reference pixels,
  display one style proof before bulk redesign, and evaluate reference likeness
  separately from correctness and layout. Clean boxes alone are insufficient.
- **Sparse schematic explicitly requested or required by the venue:** use the
  restrained schematic defaults below; do not force illustrated ornament.
- **Quantitative evidence or tables:** use the chart/table rules below. Poster
  styling never changes data, uncertainty, scales, or statistical meaning.

Pass the selected mode and its required reference to every delegated worker.
User/venue direction overrides aesthetic defaults, not integrity requirements.

## Workflow: plan, construct, inspect, repair

1. **Ground and choose the form.** State the figure's single message and identify
   the source evidence for every component, connection, label, and quantity.
   Use data-backed matplotlib/seaborn plots for quantitative evidence,
   editable SVG or TikZ for mechanisms/architectures, and scientific image
   panels with source, crop, scale, and processing provenance. Omit unsupported
   content; never invent measurements or connections to fill space.
2. **Freeze one style record.** Before drawing, set final column/page width,
   font family and physical sizes, semantic color mapping, stroke widths,
   grid, padding, and arrow geometry. Apply it across all report figures and
   pass it with this skill to every delegated figure worker. Explicit user or
   venue requirements override aesthetic defaults; generic downstream skill
   templates do not override this workflow or the readability/grounding gates.
3. **Construct locally.** For a complex schematic, split into 2–4 semantic
   regions and subdivide only while a region remains complex. Simple figures
   need no recursion or extra agents. Give each region a local canvas, content
   description, and named boundary ports; return its editable fragment, actual
   occupied bounding box, port coordinates, and unresolved defects. Use stable
   SVG element IDs, local groups, and shared styles. Size blocks around text,
   not around arbitrary equal-width boxes.
4. **Assemble once.** The parent places fragments and owns every connection
   crossing between children. Transform port coordinates with their groups;
   reserve routing lanes and draw connections from the transformed endpoints.
   Check the assembled figure as well as its fragments. Deliver the editable
   SVG/TikZ or plotting source alongside the static export.
5. **Render and inspect.** Follow the mandatory dual-view gate below on the
   actual rendered figure and again on its final placement in the report.
   A successful export is not completion.

## Restrained schematic defaults

These defaults apply only to sparse schematic mode, not illustrated overviews,
quantitative marks, scientific photographs, or heatmaps. The illustrated mode's
composition, typography, depth, and connector guidance takes precedence there.

- **Flat, restrained geometry.** White background; solid fills; thin borders;
  compact modules with square or subtly rounded corners. No decorative shadows,
  gradients, stock icon collages, oversized cards, or unrelated ornament.
  Generic Mermaid/PlantUML/draw.io flowchart output and editor screenshots are
  scratch aids, not final paper figures. Graphviz is appropriate when the graph
  itself is the analyzed data, not as a generic layout shortcut.
- **Color means role.** Start with processing blue `#7BA3C9`, emphasis orange
  `#F4A460`, auxiliary pale yellow `#FFF3CD`, input/embedding gray `#D5D5D5`,
  and optional container fill `#F5F5F5`. Assign only roles the method actually
  has; reuse the same role mapping throughout. Use `#333333` text and borders,
  or `#666666` secondary borders. Pair color with labels or geometry so the
  meaning survives grayscale and color-vision differences.
- **Typography matches the manuscript.** Prefer Times New Roman or an installed
  metric-compatible serif such as Liberation Serif; use STIX/DejaVu Serif when
  needed for math coverage. Verify the actual rendered font and glyphs rather
  than assuming availability. Keep one family and a small hierarchy: target
  9–11 pt labels at final size, with no text below 7 pt, including subscripts.
  Italicize math variables; keep labels short and aligned. These final-size
  targets adapt the paper's canvas-level font settings, not copy them blindly.
- **Layout is measured.** Snap structural coordinates to a 4- or 8-unit grid;
  start with 8–16 units between unrelated blocks, at least 20 units between
  connected boundaries, and 24 units of outer padding. Reserve label clearance
  and a visible arrow shaft; expand or split panels when crowded. Keep logical
  groups compact without wasting space. Units here are SVG user units with a
  declared viewBox-to-physical-size mapping, not fixed print pixels.
- **Connections stay subordinate.** Start with 1.0–1.2-unit arrow strokes,
  1.2–1.5-unit block borders, and roughly 5 × 3.5-unit arrowheads. Use horizontal
  and vertical routing with right-angle bends and boundary ports. Keep the
  terminal shaft at least 20 units where feasible; reroute or move blocks when
  constrained rather than letting the arrow collapse into a triangle. Use
  dashed feedback/skip edges only with defined meaning. At final size, check
  line visibility and adjust geometry as a group, not by shrinking text.

## Quantitative plots: shared chart style

Keep plotted values, axes, units, uncertainty, and encodings faithful to the
analysis. Schematic palettes and orthogonal arrow rules do not apply to data
marks. Use the bundled `openscience.mplstyle`, located beside this SKILL.md.
Resolve its actual absolute path before generating the script, then load it with
`plt.style.use(str(style_path))`. Do not assume the figure script sits beside
this skill, and do not silently fall back to matplotlib defaults. If the style
file is unavailable, explicitly apply the chart palette and rules below and
record that fallback. Override typography to match the frozen manuscript style
record before plotting; keep the same family across charts and schematics.

The default categorical cycle is blue `#2a78d6`, aqua `#1baf7a`, yellow
`#eda100`, green `#008300`, violet `#4a3aa7`, red `#e34948`, magenta `#e87ba4`,
orange `#eb6834`. Assign series in that order and preserve their identities
across panels. For more than eight categories, facet or use redundant encodings;
combine into “Other” only when scientifically justified.

Sequential magnitude uses one hue from light to dark:
`#cde2fb #9ec5f4 #6da7ec #3987e5 #256abf #184f95 #104281`.
Diverging values use blue and red with a neutral gray midpoint.

- Use one y-axis; split incompatible scales into separate panels or use a
  scientifically justified common index.
- Use thin marks and recessive axes: 1–1.5 pt lines, 4–6 pt markers when needed,
  a faint y-grid only when useful, and no top/right spines. Matplotlib sizes are
  points, not CSS pixels. Inspect dense plots for overplotting.
- Keep text in dark ink. Label selectively; provide a legend or unambiguous
  direct labels for multiple series. Include axis labels and units.
- Size for the final column/page first. Resolve crowding through wrapping,
  shorter labels, fewer ticks, legend placement, or separate panels, never
  by shrinking text below 7 pt.
- Export vector PDF/SVG where supported, plus a PNG preview at at least 300 dpi.
  Set dimensions and export resolution explicitly; inspect the final crop.
  Raster scientific images retain their native information and provenance;
  upsampling does not create detail.

## Tables

- Design for the final column/page width with body text at least 8 pt.
- Resolve width by shortening/wrapping headers, moving details to the caption,
  using flexible text columns and aligned numbers, splitting the table, or
  using landscape for a genuinely wide appendix table. Reduce padding last.
- Do not scale the entire table until it fits if that makes type too small.
  Keep precision purposeful, units explicit, and vertical rules sparse.

## Mandatory dual-view quality gate

Use a separate vision-capable reviewer when available; otherwise perform an
explicit self-review with the same checklist. Inspect **both the rendered image
and its generating source**, not source code alone. Use an already authorized image-capable service when the acting model lacks
image input; do not claim direct inspection in that case. If rendering or visual inspection is unavailable,
report that blocker and mark the artifact unverified rather than claiming a pass.

1. Render each complete figure to an image. For PDF reports, ensure the output
   directory exists, then rasterize the actual final PDF, for example:
   `pdftoppm -png -r 180 paper.pdf /tmp/opencode/paper-check/page`.
   Inspect every figure/table-containing page at intended reading size, not
   only an enlarged standalone preview.
2. Check source grounding and topology; missing or duplicate edges; arrow
   endpoints and shafts; crossings through unrelated blocks; alignment and
   group spacing; text/glyph correctness; palette and font consistency;
   contrast; clipping, occlusion, and overflow; and final-size legibility.
   Prioritize wrong scientific content, misleading encodings, and unreadable
   text over cosmetic alignment.
3. For every defect, record its visible symptom, affected SVG ID or plotting
   statement, severity, and concrete repair in the existing figure QA/report
   notes. “Looks good” is not a review. Fix the affected elements locally;
   preserve already-correct regions, values, and semantic mappings.
4. Re-render after each repair and recheck the whole figure for regressions.
   Allow up to three repair rounds by default. Escalate persistent local
   crowding to the parent layout or split the figure; retain unresolved
   defects explicitly. Exhausting the budget is not a pass.
5. In existing QA notes, retain one reusable condition/repair rule for each
   recurring defect and apply that checklist to later figures. Record the
   inspected artifact path, final physical size, round count, and unresolved
   issues. Rendering success, `tight_layout`, and `constrained_layout` alone
   do not demonstrate visual quality or scientific correctness.

## Completion

Delivery requires editable source and a static export inspected at its declared
physical size. When producing a report, also inspect its final embedded placement.
There must be no unresolved grounding, topology, clipping, overlap, or legibility
failures. Illustrated overviews also require the companion's reference-likeness
gate; a style mismatch is not merely cosmetic when likeness was requested.
Record user approval separately from reviewer approval and disclose remaining gaps. Apply arrow/port/topology checks to
schematics or graphs, chart checks to plots, and table checks to tables; mark
inapplicable checks accordingly. Link the saved artifacts; when asked to display
or preview them, call `present_artifact` rather than merely naming their paths.
