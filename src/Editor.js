import React from "react";
import CoreEditor from "./CoreEditor";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import PropTypes from "prop-types";

export default function Editor({ code, scope }) {
  return (
    <main className="bg-dark-gray flex-auto flex flex-column flex-row-l h-100">
      <CoreEditor theme={nightOwl} code={code} scope={scope} />
    </main>
  );
}

Editor.propTypes = {
  code: PropTypes.string,
  scope: PropTypes.object
};
