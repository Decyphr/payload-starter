import clsx from "clsx";
import React from "react";

interface Props {
  variant?: "light" | "dark";
  className?: string;
  loading?: "lazy" | "eager";
  priority?: "auto" | "high" | "low";
}

export function Logo({
  variant = "dark",
  className,
  loading: loadingFromProps,
  priority: priorityFromProps,
}: Props) {
  const loading = loadingFromProps || "lazy";
  const priority = priorityFromProps || "low";

  const src = variant === "light" ? "https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg" : "https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-dark.svg";

  return (
    <img
      alt="Payload Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx("max-w-[9.375rem] w-full h-[34px]", className)}
      src={src}
    />
  );
}
