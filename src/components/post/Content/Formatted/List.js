import React from "react";

function List() {
  return (
    <ul className="mt-8 ml-8 list-disc">
      <li className="mt-4">XSS Protection</li>
      <li className="mt-4">Setting a Context-Security-Policy header</li>
      <li className="mt-4">Avoid Clickingjacking using X-Frame-Options</li>
    </ul>
  );
}

export default List;
