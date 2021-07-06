import React from "react";

function Code() {
  return (
    <pre className="text-lg tracking-tight my-4 p-4 bg-gray-100 overflow-x-auto">
      <code className="block mt-4">var helmet = require(‘helmet’);</code>
      <code className="block mt-4">app.use(helmet());</code>
    </pre>
  );
}

export default Code;
