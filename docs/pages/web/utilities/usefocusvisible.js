// @flow strict
import { type Node } from 'react';
import AccessibilitySection from '../../../docs-components/AccessibilitySection.js';
import MainSection from '../../../docs-components/MainSection.js';
import Page from '../../../docs-components/Page.js';
import PageHeader from '../../../docs-components/PageHeader.js';
import QualityChecklist from '../../../docs-components/QualityChecklist.js';
import SandpackExample from '../../../docs-components/SandpackExample.js';
import exampleButtons from '../../../examples/usefocusvisible/exampleButtons.js';

export default function DocsPage(): Node {
  return (
    <Page title="useFocusVisible">
      <PageHeader
        name="useFocusVisible"
        description={`
    \`useFocusVisible\` manages focus interactions on the page and determines whether a focus ring should be shown. When using the \`useFocusVisible\` hook, if a user interacts with a mouse or by touch, then the focus indicator is not visible. When the user interacts with the keyboard however, the focus indicator will be visible.

    References:
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html">WCAG 2.4.7: Focus Visible</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible">:focus-visible CSS pseudo-class</a></li>
    </ul>
    `}
        type="utility"
      />
      <AccessibilitySection name="useFocusVisible" />

      <MainSection name="Examples">
        <MainSection.Subsection title="Buttons">
          <MainSection.Card
            cardSize="lg"
            sandpackExample={
              <SandpackExample code={exampleButtons} name="Example - Buttons" layout="column" />
            }
          />
        </MainSection.Subsection>
      </MainSection>
      <QualityChecklist component="useFocusVisible" />
    </Page>
  );
}
