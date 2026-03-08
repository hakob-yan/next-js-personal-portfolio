import React from "react";
import Link from "next/link";
import { BUTTON_BASE, BUTTON_VARIANTS, type ButtonVariant } from "./types";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  target?: string;
};

type AnchorProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;

  const classes =
    `${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorProps;

    return (
      <Link
        href={href}
        className={classes}
        target={rest.target || "_blank"}
        rel="noopener noreferrer"
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  const buttonRest = rest as NativeButtonProps;

  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}

export default Button;
