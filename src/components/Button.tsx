import React from "react";
import {
  BUTTON_BASE,
  BUTTON_VARIANTS,
  type ButtonVariant,
} from "@/constants/ui";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
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
  const classes = `${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
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

