import React from "react";
import Editor from "./Editor";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import PropTypes from "prop-types";

export default function Window({ code, scope }) {
  return (
    <main className="bg-dark-gray flex-auto flex flex-column flex-row-l h-100">
      <Editor theme={nightOwl} code={code} scope={scope} />
    </main>
  );
}

Window.propTypes = {
  code: PropTypes.string,
  scope: PropTypes.object
};
