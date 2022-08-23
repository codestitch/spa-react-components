import React from "react";

export default function Button(props) {
  const {
    children,
    disabled = false,
    loading = false,
    className = "",
    ...remainingProps
  } = props;
  return (
    <button
      className={`mb-8 font-bold py-2 px-4 rounded ${className}`}
      disabled={disabled || loading}
      {...remainingProps}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
