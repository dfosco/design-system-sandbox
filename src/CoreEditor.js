import React from "react";
import PropTypes from "prop-types";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

export default function CoreEditor({ code, theme, scope }) {
  return (
    <LiveProvider
      theme={theme}
      scope={scope}
      transformCode={code => `<>${code}</>`}
      code={code}
    >
      <section className="order-2 order-1-l w-100 w-50-l h-50 h-100-l">
        <LiveEditor className="min-h-100" />
      </section>
      <section className="order-1 order-2-l w-100 w-50-l h-50 h-100-l">
        <LivePreview className="dss-editor-bg pa2 min-h-100" />
      </section>
      <section className="w-100 w-50-l absolute bottom-50 bottom-0-l right-0 br2 o-70">
        <LiveError className="ws-normal overflow-auto bg-dark-gray ma2 pa2 shadow-1 white" />
      </section>
    </LiveProvider>
  );
}

CoreEditor.propTypes = {
  theme: PropTypes.object,
  scope: PropTypes.object,
  code: PropTypes.string
};
